package internal

import (
	"github.com/wuyutaott/leaf/log"
	"github.com/wuyutaott/leaf/module"
	"server/base"
	"server/conf"
	"server/db"
)

var (
	skeleton = base.NewSkeleton()
	ChanRPC  = skeleton.ChanRPCServer
	mgodb    = new(db.Mongodb)
)

type Module struct {
	*module.Skeleton
}

func (m *Module) OnInit() {
	m.Skeleton = skeleton

	var err error
	mgodb, err = db.Dial(conf.Server.MgodbAddr, conf.Server.LoginMgoConnNum, skeleton)
	if nil == mgodb {
		log.Error("dial mongodb failed:", conf.Server.MgodbAddr, " ", err.Error())
	}

	mgodb.EnsureUniqueIndex(base.DBNAME, base.ACCOUNTSET, []string{"account"})
}

func (m *Module) OnDestroy() {
	mgodb.Close()
}
