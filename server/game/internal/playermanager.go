package internal

import (
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
	"server/base"
)

type PlayerManager struct {
	PlayerMap map[uint32]*Player
}

func NewPlayerManager() *PlayerManager {
	mgr := new(PlayerManager)
	mgr.Init()
	return mgr
}

func (p *PlayerManager) Init() {
	p.PlayerMap = make(map[uint32]*Player)
}

func (p *PlayerManager) Get(id uint32) *Player {
	return p.PlayerMap[id]
}

func (p *PlayerManager) AddPlayer(player *Player) {
	log.Debug("PlayerManager AddPlayer")
	p.PlayerMap[player.ID] = player
}

func (p *PlayerManager) DelPlayer(id uint32) {
	log.Debug("PlayerManager DelPlayer")
	delete(p.PlayerMap, id)
}

func (p *PlayerManager) DelPlayerByAgent(a gate.Agent) *Player {
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
	for _, player := range p.PlayerMap {
		player.SaveSync()
	}
}
