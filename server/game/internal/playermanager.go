package internal

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
	p.PlayerMap[player.ID] = player
}

func (p *PlayerManager) DelPlayer(id uint32) {
	delete(p.PlayerMap, id)
}

func (p *PlayerManager) Close() {
	for _, player := range p.PlayerMap {
		player.SaveSync()
	}
}
