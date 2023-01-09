/**
 * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
 * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
 * @platform Web,Native
 * @language zh_CN
 */
export class Endian {
  
    /**
     * 表示多字节数字的最低有效字节位于字节序列的最前面。
     * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
     * @platform Web,Native
     * @language zh_CN
     */
    public static LITTLE_ENDIAN: string = "littleEndian";

  
    /**
     * 表示多字节数字的最高有效字节位于字节序列的最前面。
     * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
     * @platform Web,Native
     * @language zh_CN
     */
    public static BIG_ENDIAN: string = "bigEndian";

}

export const enum EndianConst {
    LITTLE_ENDIAN = 0,
    BIG_ENDIAN = 1
}

const enum ByteArraySize {

    SIZE_OF_BOOLEAN = 1,

    SIZE_OF_INT8 = 1,

    SIZE_OF_INT16 = 2,

    SIZE_OF_INT32 = 4,

    SIZE_OF_UINT8 = 1,

    SIZE_OF_UINT16 = 2,

    SIZE_OF_UINT32 = 4,

    SIZE_OF_FLOAT32 = 4,

    SIZE_OF_FLOAT64 = 8
}

/**
 * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
 * 注意：ByteArray 类适用于需要在字节层访问数据的高级开发人员。
 * @platform Web,Native
 * @includeExample egret/utils/ByteArray.ts
 * @language zh_CN
 */
export default class ByteArray {

    /**
     * @private
     */
    protected bufferExtSize = 0; // Buffer expansion size

    protected data: DataView;

    protected _bytes: Uint8Array;
    /**
     * @private
     */
    protected _position: number;

    /**
     * 
     * 已经使用的字节偏移量
     * @protected
     * @type {number}
     * @memberOf ByteArray
     */
    protected write_position: number;

    /**
     * 更改或读取数据的字节顺序；egret.EndianConst.BIG_ENDIAN 或 egret.EndianConst.LITTLE_ENDIAN。
     * @default egret.EndianConst.BIG_ENDIAN
     * @platform Web,Native
     * @language zh_CN
     */
    public get endian() {
        return this.$endian == EndianConst.LITTLE_ENDIAN ? Endian.LITTLE_ENDIAN : Endian.BIG_ENDIAN;
    }

    public set endian(value: string) {
        this.$endian = value == Endian.LITTLE_ENDIAN ? EndianConst.LITTLE_ENDIAN : EndianConst.BIG_ENDIAN;
    }

    protected $endian: EndianConst;

    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    constructor(buffer?: ArrayBuffer | Uint8Array, bufferExtSize = 0) {
        if (bufferExtSize < 0) {
            bufferExtSize = 0;
        }
        this.bufferExtSize = bufferExtSize;
        let bytes: Uint8Array, wpos = 0;
        if (buffer) {//有数据，则可写字节数从字节尾开始
            let uint8: Uint8Array;
            if (buffer instanceof Uint8Array) {
                uint8 = buffer;
                wpos = buffer.length;
            } else {
                wpos = buffer.byteLength;
                uint8 = new Uint8Array(buffer);
            }
            if (bufferExtSize == 0) {
                bytes = new Uint8Array(wpos);
            }
            else {
                let multi = (wpos / bufferExtSize | 0) + 1;
                bytes = new Uint8Array(multi * bufferExtSize);
            }
            bytes.set(uint8);
        } else {
            bytes = new Uint8Array(bufferExtSize);
        }
        this.write_position = wpos;
        this._position = 0;
        this._bytes = bytes;
        this.data = new DataView(bytes.buffer);
        this.endian = Endian.BIG_ENDIAN;
    }

    /**
     * 可读的剩余字节数
     * 
     * @returns 
     * 
     * @memberOf ByteArray
     */
    public get readAvailable() {
        return this.write_position - this._position;
    }

    public get buffer(): ArrayBuffer {
        return this.data.buffer.slice(0, this.write_position);
    }

    public get rawBuffer(): ArrayBuffer {
        return this.data.buffer;
    }

    /**
     * @private
     */
    public set buffer(value: ArrayBuffer) {
        let wpos = value.byteLength;
        let uint8 = new Uint8Array(value);
        let bufferExtSize = this.bufferExtSize;
        let bytes: Uint8Array;
        if (bufferExtSize == 0) {
            bytes = new Uint8Array(wpos);
        }
        else {
            let multi = (wpos / bufferExtSize | 0) + 1;
            bytes = new Uint8Array(multi * bufferExtSize);
        }
        bytes.set(uint8);
        this.write_position = wpos;
        this._bytes = bytes;
        this.data = new DataView(bytes.buffer);
    }

    public get bytes(): Uint8Array {
        return this._bytes;
    }

    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    public get dataView(): DataView {
        return this.data;
    }

    /**
     * @private
     */
    public set dataView(value: DataView) {
        this.buffer = value.buffer;
    }

    /**
     * @private
     */
    public get bufferOffset(): number {
        return this.data.byteOffset;
    }

    /**
     * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    public get position(): number {
        return this._position;
    }

    public set position(value: number) {
        this._position = value;
        if (value > this.write_position) {
            this.write_position = value;
        }
    }
    /**
     * ByteArray 对象的长度（以字节为单位）。
     * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
     * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
     * @platform Web,Native
     * @language zh_CN
     */
    public get length(): number {
        return this.write_position;
    }

    public set length(value: number) {
        this.write_position = value;
        if (this.data.byteLength > value) {
            this._position = value;
        }
        this._validateBuffer(value);
    }

    protected _validateBuffer(value: number) {
        if (this.data.byteLength < value) {
            let be = this.bufferExtSize;
            let tmp: Uint8Array;
            if (be == 0) {
                tmp = new Uint8Array(value);
            }
            else {
                let nLen = ((value / be >> 0) + 1) * be;
                tmp = new Uint8Array(nLen);
            }
            tmp.set(this._bytes);
            this._bytes = tmp;
            this.data = new DataView(tmp.buffer);
        }
    }

    /**
     * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
     * @platform Web,Native
     * @language zh_CN
     */
    public clear(): void {
        let buffer = new ArrayBuffer(this.bufferExtSize);
        this.data = new DataView(buffer);
        this._bytes = new Uint8Array(buffer);
        this._position = 0;
        this.write_position = 0;
    }    

    /**
     * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
     * @param bytes 要将数据读入的 ByteArray 对象
     * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
     * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
     * @platform Web,Native
     * @language zh_CN
     */
    public readBytes(bytes: ByteArray, offset: number = 0, length: number = 0): void {
        if (!bytes) {//由于bytes不返回，所以new新的无意义
            return;
        }
        let pos = this._position;
        let available = this.write_position - pos;
        if (available < 0) {
            //egret.$error(1025);
            return;
        }
        if (length == 0) {
            length = available;
        }
        else if (length > available) {
            //egret.$error(1025);
            return;
        }
        const position = bytes._position;
        bytes._position = 0;
        bytes.validateBuffer(offset + length);
        bytes._position = position;
        bytes._bytes.set(this._bytes.subarray(pos, pos + length), offset);
        this.position += length;
    }      
 
    /**
     * 从字节流中读取一个无符号的 16 位整数
     * @return 介于 0 和 65535 之间的 16 位无符号整数
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    public readUnsignedShort(): number {
        if (this.validate(ByteArraySize.SIZE_OF_UINT16)) {
            let value = this.data.getUint16(this._position, this.$endian == EndianConst.LITTLE_ENDIAN);
            this.position += ByteArraySize.SIZE_OF_UINT16;
            return value;
        }
    }   

    /**
     * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
     * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
     * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
     * @param bytes ByteArray 对象
     * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
     * @param length 一个无符号整数，表示在缓冲区中的写入范围
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    public writeBytes(bytes: ByteArray, offset: number = 0, length: number = 0): void {
        let writeLength: number;
        if (offset < 0) {
            return;
        }
        if (length < 0) {
            return;
        } else if (length == 0) {
            writeLength = bytes.length - offset;
        } else {
            writeLength = Math.min(bytes.length - offset, length);
        }
        if (writeLength > 0) {
            this.validateBuffer(writeLength);
            this._bytes.set(bytes._bytes.subarray(offset, offset + writeLength), this._position);
            this.position = this._position + writeLength;
        }
    }          

    /**
     * 在字节流中写入一个无符号的 16 位整数
     * @param value 要写入字节流的无符号整数
     * @version Egret 2.5
     * @platform Web,Native
     * @language zh_CN
     */
    public writeUnsignedShort(value: number): void {
        this.validateBuffer(ByteArraySize.SIZE_OF_UINT16);
        this.data.setUint16(this._position, value, this.$endian == EndianConst.LITTLE_ENDIAN);
        this.position += ByteArraySize.SIZE_OF_UINT16;
    }

    /**
     * @private
     * 将 Uint8Array 写入字节流
     * @param bytes 要写入的Uint8Array
     * @param validateBuffer
     */
    public writeUint8Array(bytes: Uint8Array | ArrayLike<number>, validateBuffer: boolean = true): void {
        let pos = this._position;
        let npos = pos + bytes.length;
        if (validateBuffer) {
            this.validateBuffer(npos);
        }
        this.bytes.set(bytes, pos);
        this.position = npos;
    }

    /**
     * @param len
     * @returns
     * @version Egret 2.4
     * @platform Web,Native
     * @private
     */
    public validate(len: number): boolean {
        let bl = this._bytes.length;
        if (bl > 0 && this._position + len <= bl) {
            return true;
        } else {
           // egret.$error(1025);
        }
    }
    
    /**
     * @private
     * @param len
     * @param needReplace
     */
    protected validateBuffer(len: number): void {
        this.write_position = len > this.write_position ? len : this.write_position;
        len += this._position;
        this._validateBuffer(len);
    }  
}
