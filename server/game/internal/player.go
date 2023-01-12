package internal

import (
	"github.com/wuyutaott/leaf/gate"
	"github.com/wuyutaott/leaf/log"
)

type Player struct {
	ID    uint32
	Name  string
	Pwd   string
	agent gate.Agent
}

func CreatePlayer() *Player {
	player := new(Player)
	return player
}

func (p *Player) Save() {
	//mgodb.Set(base.DBTask{p.objid, base.DBNAME, base.PLAYERSET, "_id", base.BsonObjectID(p.objid), util.DeepClone(p), func(param interface{}, err error) {
	//	if nil != err {
	//		log.Error("save playerdata failed:", p.objid)
	//	}
	//}})
}

func (p *Player) SaveSync() {

}

func (p *Player) InitData(account string) {
	//p.Account = account
	//p.UID = uidbuilder.GenerateUID()
}

func (p *Player) OnLogin() {
	log.Debug("Player OnLogin")
}

func (p *Player) OnLogout() {
	log.Debug("Player OnLogout")
}

func (p *Player) Send(msg interface{}) {
	p.agent.WriteMsg(msg)
}
