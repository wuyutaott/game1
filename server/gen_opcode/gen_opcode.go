package main

import (
	"fmt"
	"github.com/name5566/leaf/log"
	"io/ioutil"
	"path"
	"reflect"
	"runtime"
	"server/msg"
	"strings"
)

func genOpcode() string {
	opcode :=
		`
import {proto} from "./proto"
		
export class ProtoMapItem {
	opcode: number;
	msg: any;
	isprint: boolean;
	logMsg: string;
}

export var protoMap: {[key:number]: ProtoMapItem} = {
{{ protoMap }}
}

{{ prototype }}

export const cmd = {
{{ cmd }}
}
`

	protoMap := ""
	prototype := ""
	cmd := ""

	msg.Processor.Range(func(id uint16, t reflect.Type) {
		protoMap += fmt.Sprintf("\t[%d]: {opcode: 0, msg: %s, isprint: false, logMsg: \"%s\"},\n", id, t.String()[1:], t.String()[1:])
		prototype += fmt.Sprintf("%s.prototype[\"_opcode\"] = %d;\n", t.String()[1:], id)
		cmd += fmt.Sprintf("\t%s: \"%d\",\n", t.String()[7:], id)
	})

	opcode = strings.Replace(opcode, "{{ protoMap }}", protoMap, 1)
	opcode = strings.Replace(opcode, "{{ prototype }}", prototype, 1)
	opcode = strings.Replace(opcode, "{{ cmd }}", cmd, 1)

	//log.Debug(opcode)

	//err2 := ioutil.WriteFile("../../../Public/proto/opcode.ts", []byte(opcode), 0666)
	//log.Debug(err2.Error())

	//data := []byte(opcode)
	//fl, err := os.OpenFile("../../../Public/proto/opcode.ts", os.O_APPEND|os.O_CREATE, 0644)
	//if err != nil {
	//	log.Debug(err.Error())
	//	return
	//}
	//defer fl.Close()
	//n, err := fl.Write(data)
	//if err == nil && n < len(data) {
	//	log.Debug("opcode.ts生成失败")
	//}

	return opcode
}

func getCurrentAbPathByCaller() string {
	var abPath string
	_, filename, _, ok := runtime.Caller(0)
	if ok {
		abPath = path.Dir(filename)
	}
	return abPath
}

func main() {
	log.Debug("开始生成 opcode.ts")
	opcode := genOpcode()
	projectUrl := getCurrentAbPathByCaller()
	opcodeUrl := path.Join(projectUrl, "../../public/proto/opcode.ts")
	err := ioutil.WriteFile(opcodeUrl, []byte(opcode), 0666)
	if err != nil {
		log.Debug(err.Error())
	} else {
		log.Debug("opcode.ts 生成成功")
	}

}
