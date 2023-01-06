package internal

import (
	"github.com/name5566/leaf/log"
	"github.com/name5566/leaf/module"
	"server/base"
	"server/conf"
	"server/db"
)

var (
	skeleton 	= base.NewSkeleton()
	ChanRPC  	= skeleton.ChanRPCServer
	PlayerMgr 	= NewPlayerManager()
	RoomMgr 	= NewRoomManager()
	mgodb    	= new(db.Mongodb)
	uidbuilder 	= new(UidBuilder)
)

type Module struct {
	*module.Skeleton
}

func (m *Module) OnInit() {
	m.Skeleton = skeleton

	var err error
	mgodb, err = db.Dial(conf.Server.MgodbAddr, conf.Server.GameMgoConnNum, skeleton)
	if nil == mgodb {
		log.Error("dial mongodb failed:", conf.Server.MgodbAddr, " ", err.Error())
		return
	}

	mgodb.EnsureUniqueIndex(base.DBNAME, base.PLAYERSET, []string{"uid"})

	uidbuilder.Init()
}

func (m *Module) OnDestroy() {
	RoomMgr.Close()
	PlayerMgr.Close()
	mgodb.Close()
}
