package internal

import (
	"github.com/wuyutaott/leaf/log"
	"github.com/wuyutaott/leaf/module"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	syslog "log"
	"os"
	"server/base"
	"server/db"
	"time"
)

var (
	skeleton = base.NewSkeleton()
	ChanRPC  = skeleton.ChanRPCServer
	mysql    = new(db.MySql)
)

type Module struct {
	*module.Skeleton
}

func (m *Module) OnInit() {
	log.Debug("login OnInit")
	m.Skeleton = skeleton

	customLogger := logger.New(syslog.New(os.Stdout, "\r\n", syslog.LstdFlags), logger.Config{
		SlowThreshold:             200 * time.Millisecond,
		LogLevel:                  logger.Warn,
		IgnoreRecordNotFoundError: true,
		Colorful:                  true,
	})
	mysql.Open("root:@tcp(127.0.0.1:3306)/game1?charset=utf8mb4&parseTime=True&loc=Local", &gorm.Config{
		Logger: customLogger,
	})
	mysql.DB.AutoMigrate(&base.User{})
}

func (m *Module) OnDestroy() {
	log.Debug("login OnDestroy")
	mysql.Close()
}
