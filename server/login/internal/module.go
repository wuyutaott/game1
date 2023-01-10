package internal

import (
	"github.com/wuyutaott/leaf/log"
	"github.com/wuyutaott/leaf/module"
	"gorm.io/gorm"
	"server/base"
	"server/db"
)

var (
	skeleton = base.NewSkeleton()
	ChanRPC  = skeleton.ChanRPCServer
	mysql    *db.MySql
)

type Module struct {
	*module.Skeleton
}

func (m *Module) OnInit() {
	log.Debug("login OnInit")
	m.Skeleton = skeleton

	mysql = &db.MySql{}
	mysql.Open("root:@tcp(127.0.0.1:3306)/game1?charset=utf8mb4&parseTime=True&loc=Local", &gorm.Config{})
	mysql.DB.AutoMigrate(&User{})
}

func (m *Module) OnDestroy() {
	log.Debug("login OnDestroy")
	mysql.Close()
}
