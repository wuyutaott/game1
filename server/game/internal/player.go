package internal

import (
	"github.com/name5566/leaf/gate"
	"github.com/name5566/leaf/log"
	"github.com/name5566/leaf/util"
	"server/base"
)

type Player struct {
	objid 		string
	agent 		gate.Agent
	UID 		int64
	Account 	string
}

func CreatePlayer() *Player {
	player := new(Player)
	return player
}

func (p *Player) Save() {
	mgodb.Set(base.DBTask{p.objid, base.DBNAME, base.PLAYERSET, "_id", base.BsonObjectID(p.objid), util.DeepClone(p), func(param interface{}, err error) {
		if nil != err {
			log.Error("save playerdata failed:", p.objid)
		}
	} })
}

func (p *Player) SaveSync() {

}

func (p *Player) InitData(account string) {
	p.Account = account
	p.UID     = uidbuilder.GenerateUID()
}

func (p *Player) OnLogin() {
	log.Debug("Player 登录成功")
}

func (p *Player) OnLogout() {
	log.Debug("Player 退出")
}

func (p *Player) Send(msg interface{}) {
	p.agent.WriteMsg(msg)
}
