package internal

import "time"

type User struct {
	ID        uint   `gorm:"primaryKey"`
	Name      string `gorm:"unique"`
	Pwd       string
	CreatedAt time.Time
	UpdatedAt time.Time
}
