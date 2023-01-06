package internal

type PlayerManager struct {
	PlayerMap map[string]*Player
}

func NewPlayerManager() *PlayerManager {
	mgr := new(PlayerManager)
	mgr.Init()
	return mgr
}

func (p *PlayerManager) Init() {
	p.PlayerMap = make(map[string]*Player)
}

func (p *PlayerManager) Get(id string) *Player {
	return p.PlayerMap[id]
}

func (p *PlayerManager) AddPlayer(player *Player) {
	p.PlayerMap[player.objid] = player
}

func (p *PlayerManager) DelPlayer(objid string) {
	delete(p.PlayerMap, objid)
}

func (p *PlayerManager) Close() {
	for _, player := range p.PlayerMap {
		player.SaveSync()
	}
}