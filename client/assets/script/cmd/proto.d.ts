import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Properties of a C2S_Register. */
    interface IC2S_Register {

        /** C2S_Register account */
        account?: (string|null);

        /** C2S_Register pwd */
        pwd?: (string|null);
    }

    /** Represents a C2S_Register. */
    class C2S_Register implements IC2S_Register {

        /**
         * Constructs a new C2S_Register.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Register);

        /** C2S_Register account. */
        public account: string;

        /** C2S_Register pwd. */
        public pwd: string;

        /**
         * Creates a new C2S_Register instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Register instance
         */
        public static create(properties?: proto.IC2S_Register): proto.C2S_Register;

        /**
         * Encodes the specified C2S_Register message. Does not implicitly {@link proto.C2S_Register.verify|verify} messages.
         * @param message C2S_Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Register, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Register message, length delimited. Does not implicitly {@link proto.C2S_Register.verify|verify} messages.
         * @param message C2S_Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Register, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Register message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Register;

        /**
         * Decodes a C2S_Register message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Register;

        /**
         * Verifies a C2S_Register message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Register message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Register
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Register;

        /**
         * Creates a plain object from a C2S_Register message. Also converts values to other types if specified.
         * @param message C2S_Register
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Register, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Register to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Register. */
    interface IS2C_Register {

        /** S2C_Register error */
        error?: (proto.ErrorCode|null);
    }

    /** Represents a S2C_Register. */
    class S2C_Register implements IS2C_Register {

        /**
         * Constructs a new S2C_Register.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Register);

        /** S2C_Register error. */
        public error: proto.ErrorCode;

        /**
         * Creates a new S2C_Register instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Register instance
         */
        public static create(properties?: proto.IS2C_Register): proto.S2C_Register;

        /**
         * Encodes the specified S2C_Register message. Does not implicitly {@link proto.S2C_Register.verify|verify} messages.
         * @param message S2C_Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Register, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Register message, length delimited. Does not implicitly {@link proto.S2C_Register.verify|verify} messages.
         * @param message S2C_Register message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Register, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Register message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Register;

        /**
         * Decodes a S2C_Register message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Register;

        /**
         * Verifies a S2C_Register message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Register message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Register
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Register;

        /**
         * Creates a plain object from a S2C_Register message. Also converts values to other types if specified.
         * @param message S2C_Register
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Register, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Register to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_Login. */
    interface IC2S_Login {

        /** C2S_Login account */
        account?: (string|null);

        /** C2S_Login pwd */
        pwd?: (string|null);
    }

    /** Represents a C2S_Login. */
    class C2S_Login implements IC2S_Login {

        /**
         * Constructs a new C2S_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Login);

        /** C2S_Login account. */
        public account: string;

        /** C2S_Login pwd. */
        public pwd: string;

        /**
         * Creates a new C2S_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Login instance
         */
        public static create(properties?: proto.IC2S_Login): proto.C2S_Login;

        /**
         * Encodes the specified C2S_Login message. Does not implicitly {@link proto.C2S_Login.verify|verify} messages.
         * @param message C2S_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Login message, length delimited. Does not implicitly {@link proto.C2S_Login.verify|verify} messages.
         * @param message C2S_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Login;

        /**
         * Decodes a C2S_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Login;

        /**
         * Verifies a C2S_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Login
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Login;

        /**
         * Creates a plain object from a C2S_Login message. Also converts values to other types if specified.
         * @param message C2S_Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Login. */
    interface IS2C_Login {

        /** S2C_Login error */
        error?: (proto.ErrorCode|null);

        /** S2C_Login playerInfo */
        playerInfo?: (proto.IPlayerInfo|null);
    }

    /** Represents a S2C_Login. */
    class S2C_Login implements IS2C_Login {

        /**
         * Constructs a new S2C_Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Login);

        /** S2C_Login error. */
        public error: proto.ErrorCode;

        /** S2C_Login playerInfo. */
        public playerInfo?: (proto.IPlayerInfo|null);

        /**
         * Creates a new S2C_Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Login instance
         */
        public static create(properties?: proto.IS2C_Login): proto.S2C_Login;

        /**
         * Encodes the specified S2C_Login message. Does not implicitly {@link proto.S2C_Login.verify|verify} messages.
         * @param message S2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Login message, length delimited. Does not implicitly {@link proto.S2C_Login.verify|verify} messages.
         * @param message S2C_Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Login, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Login;

        /**
         * Decodes a S2C_Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Login;

        /**
         * Verifies a S2C_Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Login
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Login;

        /**
         * Creates a plain object from a S2C_Login message. Also converts values to other types if specified.
         * @param message S2C_Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_Logout. */
    interface IC2S_Logout {
    }

    /** Represents a C2S_Logout. */
    class C2S_Logout implements IC2S_Logout {

        /**
         * Constructs a new C2S_Logout.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Logout);

        /**
         * Creates a new C2S_Logout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Logout instance
         */
        public static create(properties?: proto.IC2S_Logout): proto.C2S_Logout;

        /**
         * Encodes the specified C2S_Logout message. Does not implicitly {@link proto.C2S_Logout.verify|verify} messages.
         * @param message C2S_Logout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Logout message, length delimited. Does not implicitly {@link proto.C2S_Logout.verify|verify} messages.
         * @param message C2S_Logout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Logout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Logout;

        /**
         * Decodes a C2S_Logout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Logout;

        /**
         * Verifies a C2S_Logout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Logout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Logout
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Logout;

        /**
         * Creates a plain object from a C2S_Logout message. Also converts values to other types if specified.
         * @param message C2S_Logout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Logout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Logout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Logout. */
    interface IS2C_Logout {
    }

    /** Represents a S2C_Logout. */
    class S2C_Logout implements IS2C_Logout {

        /**
         * Constructs a new S2C_Logout.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Logout);

        /**
         * Creates a new S2C_Logout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Logout instance
         */
        public static create(properties?: proto.IS2C_Logout): proto.S2C_Logout;

        /**
         * Encodes the specified S2C_Logout message. Does not implicitly {@link proto.S2C_Logout.verify|verify} messages.
         * @param message S2C_Logout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Logout message, length delimited. Does not implicitly {@link proto.S2C_Logout.verify|verify} messages.
         * @param message S2C_Logout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Logout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Logout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Logout;

        /**
         * Decodes a S2C_Logout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Logout;

        /**
         * Verifies a S2C_Logout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Logout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Logout
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Logout;

        /**
         * Creates a plain object from a S2C_Logout message. Also converts values to other types if specified.
         * @param message S2C_Logout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Logout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Logout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_KickOutLobby. */
    interface IS2C_KickOutLobby {
    }

    /** Represents a S2C_KickOutLobby. */
    class S2C_KickOutLobby implements IS2C_KickOutLobby {

        /**
         * Constructs a new S2C_KickOutLobby.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_KickOutLobby);

        /**
         * Creates a new S2C_KickOutLobby instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_KickOutLobby instance
         */
        public static create(properties?: proto.IS2C_KickOutLobby): proto.S2C_KickOutLobby;

        /**
         * Encodes the specified S2C_KickOutLobby message. Does not implicitly {@link proto.S2C_KickOutLobby.verify|verify} messages.
         * @param message S2C_KickOutLobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_KickOutLobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_KickOutLobby message, length delimited. Does not implicitly {@link proto.S2C_KickOutLobby.verify|verify} messages.
         * @param message S2C_KickOutLobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_KickOutLobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_KickOutLobby message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_KickOutLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_KickOutLobby;

        /**
         * Decodes a S2C_KickOutLobby message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_KickOutLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_KickOutLobby;

        /**
         * Verifies a S2C_KickOutLobby message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_KickOutLobby message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_KickOutLobby
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_KickOutLobby;

        /**
         * Creates a plain object from a S2C_KickOutLobby message. Also converts values to other types if specified.
         * @param message S2C_KickOutLobby
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_KickOutLobby, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_KickOutLobby to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        ok = 0,
        internal = 1,
        login_pwd_error = 10
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo id */
        id?: (number|null);

        /** PlayerInfo nickname */
        nickname?: (string|null);

        /** PlayerInfo head */
        head?: (string|null);

        /** PlayerInfo gold */
        gold?: (number|Long|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPlayerInfo);

        /** PlayerInfo id. */
        public id: number;

        /** PlayerInfo nickname. */
        public nickname: string;

        /** PlayerInfo head. */
        public head: string;

        /** PlayerInfo gold. */
        public gold: (number|Long);

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: proto.IPlayerInfo): proto.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo id */
        id?: (number|null);

        /** GameInfo config */
        config?: (string|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGameInfo);

        /** GameInfo id. */
        public id: number;

        /** GameInfo config. */
        public config: string;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: proto.IGameInfo): proto.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link proto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link proto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo id */
        id?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoomInfo);

        /** RoomInfo id. */
        public id: number;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: proto.IRoomInfo): proto.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link proto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link proto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_Ready. */
    interface IC2S_Ready {
    }

    /** Represents a C2S_Ready. */
    class C2S_Ready implements IC2S_Ready {

        /**
         * Constructs a new C2S_Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Ready);

        /**
         * Creates a new C2S_Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Ready instance
         */
        public static create(properties?: proto.IC2S_Ready): proto.C2S_Ready;

        /**
         * Encodes the specified C2S_Ready message. Does not implicitly {@link proto.C2S_Ready.verify|verify} messages.
         * @param message C2S_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Ready message, length delimited. Does not implicitly {@link proto.C2S_Ready.verify|verify} messages.
         * @param message C2S_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Ready;

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Ready;

        /**
         * Verifies a C2S_Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Ready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Ready
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Ready;

        /**
         * Creates a plain object from a C2S_Ready message. Also converts values to other types if specified.
         * @param message C2S_Ready
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Ready to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Ready. */
    interface IS2C_Ready {

        /** S2C_Ready error */
        error?: (proto.ErrorCode|null);
    }

    /** Represents a S2C_Ready. */
    class S2C_Ready implements IS2C_Ready {

        /**
         * Constructs a new S2C_Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Ready);

        /** S2C_Ready error. */
        public error: proto.ErrorCode;

        /**
         * Creates a new S2C_Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Ready instance
         */
        public static create(properties?: proto.IS2C_Ready): proto.S2C_Ready;

        /**
         * Encodes the specified S2C_Ready message. Does not implicitly {@link proto.S2C_Ready.verify|verify} messages.
         * @param message S2C_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Ready message, length delimited. Does not implicitly {@link proto.S2C_Ready.verify|verify} messages.
         * @param message S2C_Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Ready, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Ready;

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Ready;

        /**
         * Verifies a S2C_Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Ready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Ready
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Ready;

        /**
         * Creates a plain object from a S2C_Ready message. Also converts values to other types if specified.
         * @param message S2C_Ready
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Ready to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_RoomList. */
    interface IC2S_RoomList {
    }

    /** Represents a C2S_RoomList. */
    class C2S_RoomList implements IC2S_RoomList {

        /**
         * Constructs a new C2S_RoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_RoomList);

        /**
         * Creates a new C2S_RoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_RoomList instance
         */
        public static create(properties?: proto.IC2S_RoomList): proto.C2S_RoomList;

        /**
         * Encodes the specified C2S_RoomList message. Does not implicitly {@link proto.C2S_RoomList.verify|verify} messages.
         * @param message C2S_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_RoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_RoomList message, length delimited. Does not implicitly {@link proto.C2S_RoomList.verify|verify} messages.
         * @param message C2S_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_RoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_RoomList;

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_RoomList;

        /**
         * Verifies a C2S_RoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_RoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_RoomList
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_RoomList;

        /**
         * Creates a plain object from a C2S_RoomList message. Also converts values to other types if specified.
         * @param message C2S_RoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_RoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_RoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_RoomList. */
    interface IS2C_RoomList {

        /** S2C_RoomList roomInfos */
        roomInfos?: (proto.IRoomInfo[]|null);
    }

    /** Represents a S2C_RoomList. */
    class S2C_RoomList implements IS2C_RoomList {

        /**
         * Constructs a new S2C_RoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_RoomList);

        /** S2C_RoomList roomInfos. */
        public roomInfos: proto.IRoomInfo[];

        /**
         * Creates a new S2C_RoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_RoomList instance
         */
        public static create(properties?: proto.IS2C_RoomList): proto.S2C_RoomList;

        /**
         * Encodes the specified S2C_RoomList message. Does not implicitly {@link proto.S2C_RoomList.verify|verify} messages.
         * @param message S2C_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_RoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_RoomList message, length delimited. Does not implicitly {@link proto.S2C_RoomList.verify|verify} messages.
         * @param message S2C_RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_RoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_RoomList;

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_RoomList;

        /**
         * Verifies a S2C_RoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_RoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_RoomList
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_RoomList;

        /**
         * Creates a plain object from a S2C_RoomList message. Also converts values to other types if specified.
         * @param message S2C_RoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_RoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_RoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_CreateRoom. */
    interface IC2S_CreateRoom {

        /** C2S_CreateRoom gameInfo */
        gameInfo?: (proto.IGameInfo|null);

        /** C2S_CreateRoom pwd */
        pwd?: (string|null);
    }

    /** Represents a C2S_CreateRoom. */
    class C2S_CreateRoom implements IC2S_CreateRoom {

        /**
         * Constructs a new C2S_CreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_CreateRoom);

        /** C2S_CreateRoom gameInfo. */
        public gameInfo?: (proto.IGameInfo|null);

        /** C2S_CreateRoom pwd. */
        public pwd: string;

        /**
         * Creates a new C2S_CreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_CreateRoom instance
         */
        public static create(properties?: proto.IC2S_CreateRoom): proto.C2S_CreateRoom;

        /**
         * Encodes the specified C2S_CreateRoom message. Does not implicitly {@link proto.C2S_CreateRoom.verify|verify} messages.
         * @param message C2S_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_CreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_CreateRoom message, length delimited. Does not implicitly {@link proto.C2S_CreateRoom.verify|verify} messages.
         * @param message C2S_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_CreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_CreateRoom;

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_CreateRoom;

        /**
         * Verifies a C2S_CreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_CreateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_CreateRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_CreateRoom;

        /**
         * Creates a plain object from a C2S_CreateRoom message. Also converts values to other types if specified.
         * @param message C2S_CreateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_CreateRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_CreateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_CreateRoom. */
    interface IS2C_CreateRoom {

        /** S2C_CreateRoom error */
        error?: (proto.ErrorCode|null);

        /** S2C_CreateRoom roomId */
        roomId?: (number|null);
    }

    /** Represents a S2C_CreateRoom. */
    class S2C_CreateRoom implements IS2C_CreateRoom {

        /**
         * Constructs a new S2C_CreateRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_CreateRoom);

        /** S2C_CreateRoom error. */
        public error: proto.ErrorCode;

        /** S2C_CreateRoom roomId. */
        public roomId: number;

        /**
         * Creates a new S2C_CreateRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_CreateRoom instance
         */
        public static create(properties?: proto.IS2C_CreateRoom): proto.S2C_CreateRoom;

        /**
         * Encodes the specified S2C_CreateRoom message. Does not implicitly {@link proto.S2C_CreateRoom.verify|verify} messages.
         * @param message S2C_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_CreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_CreateRoom message, length delimited. Does not implicitly {@link proto.S2C_CreateRoom.verify|verify} messages.
         * @param message S2C_CreateRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_CreateRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_CreateRoom;

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_CreateRoom;

        /**
         * Verifies a S2C_CreateRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_CreateRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_CreateRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_CreateRoom;

        /**
         * Creates a plain object from a S2C_CreateRoom message. Also converts values to other types if specified.
         * @param message S2C_CreateRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_CreateRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_CreateRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_EnterRoom. */
    interface IC2S_EnterRoom {

        /** C2S_EnterRoom roomId */
        roomId?: (number|null);

        /** C2S_EnterRoom pwd */
        pwd?: (string|null);
    }

    /** Represents a C2S_EnterRoom. */
    class C2S_EnterRoom implements IC2S_EnterRoom {

        /**
         * Constructs a new C2S_EnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_EnterRoom);

        /** C2S_EnterRoom roomId. */
        public roomId: number;

        /** C2S_EnterRoom pwd. */
        public pwd: string;

        /**
         * Creates a new C2S_EnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_EnterRoom instance
         */
        public static create(properties?: proto.IC2S_EnterRoom): proto.C2S_EnterRoom;

        /**
         * Encodes the specified C2S_EnterRoom message. Does not implicitly {@link proto.C2S_EnterRoom.verify|verify} messages.
         * @param message C2S_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_EnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_EnterRoom message, length delimited. Does not implicitly {@link proto.C2S_EnterRoom.verify|verify} messages.
         * @param message C2S_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_EnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_EnterRoom;

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_EnterRoom;

        /**
         * Verifies a C2S_EnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_EnterRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_EnterRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_EnterRoom;

        /**
         * Creates a plain object from a C2S_EnterRoom message. Also converts values to other types if specified.
         * @param message C2S_EnterRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_EnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_EnterRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_EnterRoom. */
    interface IS2C_EnterRoom {

        /** S2C_EnterRoom error */
        error?: (proto.ErrorCode|null);

        /** S2C_EnterRoom gameInfo */
        gameInfo?: (proto.IGameInfo|null);
    }

    /** Represents a S2C_EnterRoom. */
    class S2C_EnterRoom implements IS2C_EnterRoom {

        /**
         * Constructs a new S2C_EnterRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_EnterRoom);

        /** S2C_EnterRoom error. */
        public error: proto.ErrorCode;

        /** S2C_EnterRoom gameInfo. */
        public gameInfo?: (proto.IGameInfo|null);

        /**
         * Creates a new S2C_EnterRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_EnterRoom instance
         */
        public static create(properties?: proto.IS2C_EnterRoom): proto.S2C_EnterRoom;

        /**
         * Encodes the specified S2C_EnterRoom message. Does not implicitly {@link proto.S2C_EnterRoom.verify|verify} messages.
         * @param message S2C_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_EnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_EnterRoom message, length delimited. Does not implicitly {@link proto.S2C_EnterRoom.verify|verify} messages.
         * @param message S2C_EnterRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_EnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_EnterRoom;

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_EnterRoom;

        /**
         * Verifies a S2C_EnterRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_EnterRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_EnterRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_EnterRoom;

        /**
         * Creates a plain object from a S2C_EnterRoom message. Also converts values to other types if specified.
         * @param message S2C_EnterRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_EnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_EnterRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_LeaveRoom. */
    interface IC2S_LeaveRoom {
    }

    /** Represents a C2S_LeaveRoom. */
    class C2S_LeaveRoom implements IC2S_LeaveRoom {

        /**
         * Constructs a new C2S_LeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_LeaveRoom);

        /**
         * Creates a new C2S_LeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_LeaveRoom instance
         */
        public static create(properties?: proto.IC2S_LeaveRoom): proto.C2S_LeaveRoom;

        /**
         * Encodes the specified C2S_LeaveRoom message. Does not implicitly {@link proto.C2S_LeaveRoom.verify|verify} messages.
         * @param message C2S_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_LeaveRoom message, length delimited. Does not implicitly {@link proto.C2S_LeaveRoom.verify|verify} messages.
         * @param message C2S_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_LeaveRoom;

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_LeaveRoom;

        /**
         * Verifies a C2S_LeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_LeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_LeaveRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_LeaveRoom;

        /**
         * Creates a plain object from a C2S_LeaveRoom message. Also converts values to other types if specified.
         * @param message C2S_LeaveRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_LeaveRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_LeaveRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_LeaveRoom. */
    interface IS2C_LeaveRoom {

        /** S2C_LeaveRoom error */
        error?: (proto.ErrorCode|null);
    }

    /** Represents a S2C_LeaveRoom. */
    class S2C_LeaveRoom implements IS2C_LeaveRoom {

        /**
         * Constructs a new S2C_LeaveRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_LeaveRoom);

        /** S2C_LeaveRoom error. */
        public error: proto.ErrorCode;

        /**
         * Creates a new S2C_LeaveRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_LeaveRoom instance
         */
        public static create(properties?: proto.IS2C_LeaveRoom): proto.S2C_LeaveRoom;

        /**
         * Encodes the specified S2C_LeaveRoom message. Does not implicitly {@link proto.S2C_LeaveRoom.verify|verify} messages.
         * @param message S2C_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_LeaveRoom message, length delimited. Does not implicitly {@link proto.S2C_LeaveRoom.verify|verify} messages.
         * @param message S2C_LeaveRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_LeaveRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_LeaveRoom;

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_LeaveRoom;

        /**
         * Verifies a S2C_LeaveRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_LeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_LeaveRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_LeaveRoom;

        /**
         * Creates a plain object from a S2C_LeaveRoom message. Also converts values to other types if specified.
         * @param message S2C_LeaveRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_LeaveRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_LeaveRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_Speak. */
    interface IC2S_Speak {

        /** C2S_Speak playerInfo */
        playerInfo?: (proto.IPlayerInfo|null);

        /** C2S_Speak speak */
        speak?: (string|null);
    }

    /** Represents a C2S_Speak. */
    class C2S_Speak implements IC2S_Speak {

        /**
         * Constructs a new C2S_Speak.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Speak);

        /** C2S_Speak playerInfo. */
        public playerInfo?: (proto.IPlayerInfo|null);

        /** C2S_Speak speak. */
        public speak: string;

        /**
         * Creates a new C2S_Speak instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Speak instance
         */
        public static create(properties?: proto.IC2S_Speak): proto.C2S_Speak;

        /**
         * Encodes the specified C2S_Speak message. Does not implicitly {@link proto.C2S_Speak.verify|verify} messages.
         * @param message C2S_Speak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Speak, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Speak message, length delimited. Does not implicitly {@link proto.C2S_Speak.verify|verify} messages.
         * @param message C2S_Speak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Speak, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Speak message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Speak;

        /**
         * Decodes a C2S_Speak message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Speak;

        /**
         * Verifies a C2S_Speak message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Speak message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Speak
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Speak;

        /**
         * Creates a plain object from a C2S_Speak message. Also converts values to other types if specified.
         * @param message C2S_Speak
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Speak, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Speak to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Speak. */
    interface IS2C_Speak {

        /** S2C_Speak playerInfo */
        playerInfo?: (proto.IPlayerInfo|null);

        /** S2C_Speak speak */
        speak?: (string|null);
    }

    /** Represents a S2C_Speak. */
    class S2C_Speak implements IS2C_Speak {

        /**
         * Constructs a new S2C_Speak.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Speak);

        /** S2C_Speak playerInfo. */
        public playerInfo?: (proto.IPlayerInfo|null);

        /** S2C_Speak speak. */
        public speak: string;

        /**
         * Creates a new S2C_Speak instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Speak instance
         */
        public static create(properties?: proto.IS2C_Speak): proto.S2C_Speak;

        /**
         * Encodes the specified S2C_Speak message. Does not implicitly {@link proto.S2C_Speak.verify|verify} messages.
         * @param message S2C_Speak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Speak, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Speak message, length delimited. Does not implicitly {@link proto.S2C_Speak.verify|verify} messages.
         * @param message S2C_Speak message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Speak, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Speak message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Speak;

        /**
         * Decodes a S2C_Speak message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Speak;

        /**
         * Verifies a S2C_Speak message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Speak message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Speak
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Speak;

        /**
         * Creates a plain object from a S2C_Speak message. Also converts values to other types if specified.
         * @param message S2C_Speak
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Speak, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Speak to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_KickOutRoom. */
    interface IS2C_KickOutRoom {

        /** S2C_KickOutRoom error */
        error?: (proto.ErrorCode|null);
    }

    /** Represents a S2C_KickOutRoom. */
    class S2C_KickOutRoom implements IS2C_KickOutRoom {

        /**
         * Constructs a new S2C_KickOutRoom.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_KickOutRoom);

        /** S2C_KickOutRoom error. */
        public error: proto.ErrorCode;

        /**
         * Creates a new S2C_KickOutRoom instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_KickOutRoom instance
         */
        public static create(properties?: proto.IS2C_KickOutRoom): proto.S2C_KickOutRoom;

        /**
         * Encodes the specified S2C_KickOutRoom message. Does not implicitly {@link proto.S2C_KickOutRoom.verify|verify} messages.
         * @param message S2C_KickOutRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_KickOutRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_KickOutRoom message, length delimited. Does not implicitly {@link proto.S2C_KickOutRoom.verify|verify} messages.
         * @param message S2C_KickOutRoom message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_KickOutRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_KickOutRoom message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_KickOutRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_KickOutRoom;

        /**
         * Decodes a S2C_KickOutRoom message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_KickOutRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_KickOutRoom;

        /**
         * Verifies a S2C_KickOutRoom message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_KickOutRoom message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_KickOutRoom
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_KickOutRoom;

        /**
         * Creates a plain object from a S2C_KickOutRoom message. Also converts values to other types if specified.
         * @param message S2C_KickOutRoom
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_KickOutRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_KickOutRoom to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2S_Test. */
    interface IC2S_Test {
    }

    /** Represents a C2S_Test. */
    class C2S_Test implements IC2S_Test {

        /**
         * Constructs a new C2S_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IC2S_Test);

        /**
         * Creates a new C2S_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2S_Test instance
         */
        public static create(properties?: proto.IC2S_Test): proto.C2S_Test;

        /**
         * Encodes the specified C2S_Test message. Does not implicitly {@link proto.C2S_Test.verify|verify} messages.
         * @param message C2S_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IC2S_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2S_Test message, length delimited. Does not implicitly {@link proto.C2S_Test.verify|verify} messages.
         * @param message C2S_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IC2S_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2S_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2S_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.C2S_Test;

        /**
         * Decodes a C2S_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2S_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.C2S_Test;

        /**
         * Verifies a C2S_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2S_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2S_Test
         */
        public static fromObject(object: { [k: string]: any }): proto.C2S_Test;

        /**
         * Creates a plain object from a C2S_Test message. Also converts values to other types if specified.
         * @param message C2S_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.C2S_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2S_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a S2C_Test. */
    interface IS2C_Test {

        /** S2C_Test id1 */
        id1?: (number|null);

        /** S2C_Test id2 */
        id2?: (number|null);
    }

    /** Represents a S2C_Test. */
    class S2C_Test implements IS2C_Test {

        /**
         * Constructs a new S2C_Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IS2C_Test);

        /** S2C_Test id1. */
        public id1: number;

        /** S2C_Test id2. */
        public id2: number;

        /**
         * Creates a new S2C_Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns S2C_Test instance
         */
        public static create(properties?: proto.IS2C_Test): proto.S2C_Test;

        /**
         * Encodes the specified S2C_Test message. Does not implicitly {@link proto.S2C_Test.verify|verify} messages.
         * @param message S2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IS2C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified S2C_Test message, length delimited. Does not implicitly {@link proto.S2C_Test.verify|verify} messages.
         * @param message S2C_Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IS2C_Test, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a S2C_Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns S2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.S2C_Test;

        /**
         * Decodes a S2C_Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns S2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.S2C_Test;

        /**
         * Verifies a S2C_Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a S2C_Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns S2C_Test
         */
        public static fromObject(object: { [k: string]: any }): proto.S2C_Test;

        /**
         * Creates a plain object from a S2C_Test message. Also converts values to other types if specified.
         * @param message S2C_Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.S2C_Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this S2C_Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
