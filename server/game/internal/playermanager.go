package internal

import (
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"server/base"
	"sync"
)

type PlayerManager struct {
	PlayerMap map[uint32]*Player
	lock      *sync.RWMutex
}

func NewPlayerManager() *PlayerManager {
	mgr := new(PlayerManager)
	mgr.Init()
	return mgr
}

func (p *PlayerManager) Init() {
	p.PlayerMap = make(map[uint32]*Player)
	p.lock = new(sync.RWMutex)
}

func (p *PlayerManager) Get(id uint32) *Player {
	p.lock.RLock()
	defer p.lock.RUnlock()
	return p.PlayerMap[id]
}

func (p *PlayerManager) AddPlayer(player *Player) {
	log.Debug("PlayerManager AddPlayer")
	p.lock.Lock()
	defer p.lock.Unlock()
	p.PlayerMap[player.ID] = player
}

func (p *PlayerManager) DelPlayer(id uint32) {
	log.Debug("PlayerManager DelPlayer")
	p.lock.Lock()
	defer p.lock.Unlock()
	delete(p.PlayerMap, id)
}

func (p *PlayerManager) DelPlayerByAgent(a gate.Agent) *Player {
	p.lock.Lock()
	defer p.lock.Unlock()

	userData := a.UserData()
	if userData != nil {
		user := userData.(*base.User)
		if player, ok := p.PlayerMap[user.ID]; ok {
			if player.agent == a {
				log.Debug("PlayerManager DelPlayerByAgent")
				delete(p.PlayerMap, user.ID)
				return player
			}
		}
	}

	return nil
}

func (p *PlayerManager) Close() {
	p.lock.RLock()
	defer p.lock.RUnlock()
	for _, player := range p.PlayerMap {
		player.SaveSync()
	}
}
