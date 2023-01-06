package internal

type Room struct {
	ID 			int32
	PlayerMap 	map[int]*Player
}

func CreateRoom(id int32) *Room {
	room := new(Room)
	room.ID = id
	return room
}
