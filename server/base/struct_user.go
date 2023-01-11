package base

import "time"

type User struct {
	ID        uint32 `gorm:"primaryKey"`
	Name      string `gorm:"unique"`
	Pwd       string
	CreatedAt time.Time
	UpdatedAt time.Time
}
