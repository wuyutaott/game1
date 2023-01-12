package db

import (
	"github.com/wuyutaott/leaf/db/mysql"
	"gorm.io/gorm"
)

type MySql struct {
	DB *gorm.DB
}

func (m *MySql) Open(dsn string, opts ...gorm.Option) error {
	var err error
	m.DB, err = mysql.Open(dsn, opts...)
	return err
}

func (m *MySql) Close() {
	mysql.Close(m.DB)
}
