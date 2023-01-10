package db

import (
	"github.com/wuyutaott/leaf/db/mysql"
	"github.com/wuyutaott/leaf/log"
	"gorm.io/gorm"
)

type MySql struct {
	DB *gorm.DB
}

func (m *MySql) Open(dsn string, opts ...gorm.Option) {
	var err error
	m.DB, err = mysql.Open(dsn, opts...)
	if err != nil {
		log.Error("mysql open err:", err)
	}
}

func (m *MySql) Close() {
	mysql.Close(m.DB)
}
