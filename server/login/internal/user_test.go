package internal

import (
	"fmt"
	"gorm.io/gorm"
	"server/db"
	"testing"
)

func TestFindUser(t *testing.T) {
	mysql := &db.MySql{}
	mysql.Open("root:@tcp(127.0.0.1:3306)/game1?charset=utf8mb4&parseTime=True&loc=Local", &gorm.Config{})
	user := User{}
	result := mysql.DB.First(&user)
	if result.Error != nil {
		fmt.Println("没有找到")
		return
	}
	fmt.Printf("找到用户 %v \n", user)
}

func TestFindUserByName(t *testing.T) {
	mysql := &db.MySql{}
	mysql.Open("root:@tcp(127.0.0.1:3306)/game1?charset=utf8mb4&parseTime=True&loc=Local", &gorm.Config{})
	user := User{}
	//result := mysql.DB.First(&user)
	result := mysql.DB.Where("name = ?", "2345").First(&user)
	if result.Error != nil {
		fmt.Println("没有找到")
		return
	}
	fmt.Printf("找到用户 %v \n", user)
}
