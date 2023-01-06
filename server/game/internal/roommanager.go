package internal

import "sort"

type RoomManager struct {
	RoomMap map[int32]*Room
	roomCounter int32
}

func NewRoomManager() *RoomManager {
	mgr := new(RoomManager)
	mgr.Init()
	return mgr
}

func (m *RoomManager) Init() {
	m.RoomMap = make(map[int32]*Room)
	m.roomCounter = 1001

	for i := 0; i < 10; i++ {
		m.CreateRoom()
	}
}

func (m *RoomManager) CreateRoom() int32 {
	_, ok := m.RoomMap[m.roomCounter]
	if !ok {
		newRoom := CreateRoom(m.roomCounter)
		m.AddRoom(newRoom)
		m.roomCounter++
		if m.roomCounter > 9999 {
			m.roomCounter = 1001
		}
		return newRoom.ID
	}
	return 0
}

func (m *RoomManager) Get(id int32) *Room {
	return m.RoomMap[id]
}

func (m *RoomManager) AddRoom(room *Room) {
	m.RoomMap[room.ID] = room
}

func (m *RoomManager) DelRoom(id int32) {
	delete(m.RoomMap, id)
}

func (m *RoomManager) Close() {

}

func (m *RoomManager) GetRoomList() []*Room{
	var roomIds Int32List
	for id := range m.RoomMap {
		roomIds = append(roomIds, id)
	}

	sort.Sort(roomIds)

	var result []*Room
	for _, roomId := range roomIds {
		result = append(result, m.RoomMap[roomId])
	}
	return result
}