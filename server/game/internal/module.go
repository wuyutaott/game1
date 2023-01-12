package internal

import (
	"github.com/wuyutaott/leaf/log"
	"github.com/wuyutaott/leaf/module"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"server/base"
	"server/db"
)

var (
	skeleton  = base.NewSkeleton()
	ChanRPC   = skeleton.ChanRPCServer
	PlayerMgr = NewPlayerManager()
	RoomMgr   = NewRoomManager()
	mysql     = new(db.MySql)
)

type Module struct {
	*module.Skeleton
}

func (m *Module) OnInit() {
	m.Skeleton = skeleton

	dsn := "root:@tcp(127.0.0.1:3306)/game1?charset=utf8mb4&parseTime=True&loc=Local"
	err := mysql.Open(dsn, &gorm.Config{
		Logger: logger.Discard,
	})
	if err != nil {
		log.Error("game连接数据库失败！err = %v", err)
		return
	}
}

func (m *Module) OnDestroy() {
	RoomMgr.Close()
	PlayerMgr.Close()
	mysql.Close()
}
