package internal

type Int32List []int32

func (p Int32List ) Len() int { return len(p) }

func (p Int32List ) Less(i, j int) bool { return p[i] < p[j] }

func (p Int32List ) Swap(i, j int) { p[i], p[j] = p[j], p[i] }

