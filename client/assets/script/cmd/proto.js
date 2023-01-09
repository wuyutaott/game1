/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobuf");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.C2S_Register = (function() {

        /**
         * Properties of a C2S_Register.
         * @memberof proto
         * @interface IC2S_Register
         * @property {string|null} [account] C2S_Register account
         * @property {string|null} [pwd] C2S_Register pwd
         */

        /**
         * Constructs a new C2S_Register.
         * @memberof proto
         * @classdesc Represents a C2S_Register.
         * @implements IC2S_Register
         * @constructor
         * @param {proto.IC2S_Register=} [properties] Properties to set
         */
        function C2S_Register(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Register account.
         * @member {string} account
         * @memberof proto.C2S_Register
         * @instance
         */
        C2S_Register.prototype.account = "";

        /**
         * C2S_Register pwd.
         * @member {string} pwd
         * @memberof proto.C2S_Register
         * @instance
         */
        C2S_Register.prototype.pwd = "";

        /**
         * Creates a new C2S_Register instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Register
         * @static
         * @param {proto.IC2S_Register=} [properties] Properties to set
         * @returns {proto.C2S_Register} C2S_Register instance
         */
        C2S_Register.create = function create(properties) {
            return new C2S_Register(properties);
        };

        /**
         * Encodes the specified C2S_Register message. Does not implicitly {@link proto.C2S_Register.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Register
         * @static
         * @param {proto.IC2S_Register} message C2S_Register message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Register.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.pwd != null && Object.hasOwnProperty.call(message, "pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified C2S_Register message, length delimited. Does not implicitly {@link proto.C2S_Register.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Register
         * @static
         * @param {proto.IC2S_Register} message C2S_Register message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Register.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Register message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Register
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Register} C2S_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Register.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Register();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Register message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Register
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Register} C2S_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Register.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Register message.
         * @function verify
         * @memberof proto.C2S_Register
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Register.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a C2S_Register message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Register
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Register} C2S_Register
         */
        C2S_Register.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Register)
                return object;
            var message = new $root.proto.C2S_Register();
            if (object.account != null)
                message.account = String(object.account);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a C2S_Register message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Register
         * @static
         * @param {proto.C2S_Register} message C2S_Register
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Register.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.pwd = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this C2S_Register to JSON.
         * @function toJSON
         * @memberof proto.C2S_Register
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Register.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Register;
    })();

    proto.S2C_Register = (function() {

        /**
         * Properties of a S2C_Register.
         * @memberof proto
         * @interface IS2C_Register
         * @property {proto.ErrorCode|null} [error] S2C_Register error
         */

        /**
         * Constructs a new S2C_Register.
         * @memberof proto
         * @classdesc Represents a S2C_Register.
         * @implements IS2C_Register
         * @constructor
         * @param {proto.IS2C_Register=} [properties] Properties to set
         */
        function S2C_Register(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Register error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_Register
         * @instance
         */
        S2C_Register.prototype.error = 0;

        /**
         * Creates a new S2C_Register instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Register
         * @static
         * @param {proto.IS2C_Register=} [properties] Properties to set
         * @returns {proto.S2C_Register} S2C_Register instance
         */
        S2C_Register.create = function create(properties) {
            return new S2C_Register(properties);
        };

        /**
         * Encodes the specified S2C_Register message. Does not implicitly {@link proto.S2C_Register.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Register
         * @static
         * @param {proto.IS2C_Register} message S2C_Register message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Register.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified S2C_Register message, length delimited. Does not implicitly {@link proto.S2C_Register.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Register
         * @static
         * @param {proto.IS2C_Register} message S2C_Register message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Register.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Register message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Register
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Register} S2C_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Register.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Register();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Register message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Register
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Register} S2C_Register
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Register.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Register message.
         * @function verify
         * @memberof proto.S2C_Register
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Register.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            return null;
        };

        /**
         * Creates a S2C_Register message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Register
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Register} S2C_Register
         */
        S2C_Register.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Register)
                return object;
            var message = new $root.proto.S2C_Register();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_Register message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Register
         * @static
         * @param {proto.S2C_Register} message S2C_Register
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Register.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = options.enums === String ? "ok" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            return object;
        };

        /**
         * Converts this S2C_Register to JSON.
         * @function toJSON
         * @memberof proto.S2C_Register
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Register.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Register;
    })();

    proto.C2S_Login = (function() {

        /**
         * Properties of a C2S_Login.
         * @memberof proto
         * @interface IC2S_Login
         * @property {string|null} [account] C2S_Login account
         * @property {string|null} [pwd] C2S_Login pwd
         */

        /**
         * Constructs a new C2S_Login.
         * @memberof proto
         * @classdesc Represents a C2S_Login.
         * @implements IC2S_Login
         * @constructor
         * @param {proto.IC2S_Login=} [properties] Properties to set
         */
        function C2S_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Login account.
         * @member {string} account
         * @memberof proto.C2S_Login
         * @instance
         */
        C2S_Login.prototype.account = "";

        /**
         * C2S_Login pwd.
         * @member {string} pwd
         * @memberof proto.C2S_Login
         * @instance
         */
        C2S_Login.prototype.pwd = "";

        /**
         * Creates a new C2S_Login instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Login
         * @static
         * @param {proto.IC2S_Login=} [properties] Properties to set
         * @returns {proto.C2S_Login} C2S_Login instance
         */
        C2S_Login.create = function create(properties) {
            return new C2S_Login(properties);
        };

        /**
         * Encodes the specified C2S_Login message. Does not implicitly {@link proto.C2S_Login.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Login
         * @static
         * @param {proto.IC2S_Login} message C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.pwd != null && Object.hasOwnProperty.call(message, "pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified C2S_Login message, length delimited. Does not implicitly {@link proto.C2S_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Login
         * @static
         * @param {proto.IC2S_Login} message C2S_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Login message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Login} C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Login} C2S_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Login message.
         * @function verify
         * @memberof proto.C2S_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a C2S_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Login} C2S_Login
         */
        C2S_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Login)
                return object;
            var message = new $root.proto.C2S_Login();
            if (object.account != null)
                message.account = String(object.account);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a C2S_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Login
         * @static
         * @param {proto.C2S_Login} message C2S_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.pwd = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this C2S_Login to JSON.
         * @function toJSON
         * @memberof proto.C2S_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Login;
    })();

    proto.S2C_Login = (function() {

        /**
         * Properties of a S2C_Login.
         * @memberof proto
         * @interface IS2C_Login
         * @property {proto.ErrorCode|null} [error] S2C_Login error
         * @property {proto.IPlayerInfo|null} [playerInfo] S2C_Login playerInfo
         */

        /**
         * Constructs a new S2C_Login.
         * @memberof proto
         * @classdesc Represents a S2C_Login.
         * @implements IS2C_Login
         * @constructor
         * @param {proto.IS2C_Login=} [properties] Properties to set
         */
        function S2C_Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Login error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_Login
         * @instance
         */
        S2C_Login.prototype.error = 0;

        /**
         * S2C_Login playerInfo.
         * @member {proto.IPlayerInfo|null|undefined} playerInfo
         * @memberof proto.S2C_Login
         * @instance
         */
        S2C_Login.prototype.playerInfo = null;

        /**
         * Creates a new S2C_Login instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Login
         * @static
         * @param {proto.IS2C_Login=} [properties] Properties to set
         * @returns {proto.S2C_Login} S2C_Login instance
         */
        S2C_Login.create = function create(properties) {
            return new S2C_Login(properties);
        };

        /**
         * Encodes the specified S2C_Login message. Does not implicitly {@link proto.S2C_Login.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Login
         * @static
         * @param {proto.IS2C_Login} message S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                $root.proto.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2C_Login message, length delimited. Does not implicitly {@link proto.S2C_Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Login
         * @static
         * @param {proto.IS2C_Login} message S2C_Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Login message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Login} S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.playerInfo = $root.proto.PlayerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Login} S2C_Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Login message.
         * @function verify
         * @memberof proto.S2C_Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                var error = $root.proto.PlayerInfo.verify(message.playerInfo);
                if (error)
                    return "playerInfo." + error;
            }
            return null;
        };

        /**
         * Creates a S2C_Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Login} S2C_Login
         */
        S2C_Login.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Login)
                return object;
            var message = new $root.proto.S2C_Login();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            if (object.playerInfo != null) {
                if (typeof object.playerInfo !== "object")
                    throw TypeError(".proto.S2C_Login.playerInfo: object expected");
                message.playerInfo = $root.proto.PlayerInfo.fromObject(object.playerInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Login
         * @static
         * @param {proto.S2C_Login} message S2C_Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "ok" : 0;
                object.playerInfo = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                object.playerInfo = $root.proto.PlayerInfo.toObject(message.playerInfo, options);
            return object;
        };

        /**
         * Converts this S2C_Login to JSON.
         * @function toJSON
         * @memberof proto.S2C_Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Login;
    })();

    proto.C2S_Logout = (function() {

        /**
         * Properties of a C2S_Logout.
         * @memberof proto
         * @interface IC2S_Logout
         */

        /**
         * Constructs a new C2S_Logout.
         * @memberof proto
         * @classdesc Represents a C2S_Logout.
         * @implements IC2S_Logout
         * @constructor
         * @param {proto.IC2S_Logout=} [properties] Properties to set
         */
        function C2S_Logout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2S_Logout instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Logout
         * @static
         * @param {proto.IC2S_Logout=} [properties] Properties to set
         * @returns {proto.C2S_Logout} C2S_Logout instance
         */
        C2S_Logout.create = function create(properties) {
            return new C2S_Logout(properties);
        };

        /**
         * Encodes the specified C2S_Logout message. Does not implicitly {@link proto.C2S_Logout.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Logout
         * @static
         * @param {proto.IC2S_Logout} message C2S_Logout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Logout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2S_Logout message, length delimited. Does not implicitly {@link proto.C2S_Logout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Logout
         * @static
         * @param {proto.IC2S_Logout} message C2S_Logout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Logout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Logout message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Logout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Logout} C2S_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Logout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Logout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Logout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Logout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Logout} C2S_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Logout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Logout message.
         * @function verify
         * @memberof proto.C2S_Logout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Logout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2S_Logout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Logout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Logout} C2S_Logout
         */
        C2S_Logout.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Logout)
                return object;
            return new $root.proto.C2S_Logout();
        };

        /**
         * Creates a plain object from a C2S_Logout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Logout
         * @static
         * @param {proto.C2S_Logout} message C2S_Logout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Logout.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2S_Logout to JSON.
         * @function toJSON
         * @memberof proto.C2S_Logout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Logout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Logout;
    })();

    proto.S2C_Logout = (function() {

        /**
         * Properties of a S2C_Logout.
         * @memberof proto
         * @interface IS2C_Logout
         */

        /**
         * Constructs a new S2C_Logout.
         * @memberof proto
         * @classdesc Represents a S2C_Logout.
         * @implements IS2C_Logout
         * @constructor
         * @param {proto.IS2C_Logout=} [properties] Properties to set
         */
        function S2C_Logout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new S2C_Logout instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Logout
         * @static
         * @param {proto.IS2C_Logout=} [properties] Properties to set
         * @returns {proto.S2C_Logout} S2C_Logout instance
         */
        S2C_Logout.create = function create(properties) {
            return new S2C_Logout(properties);
        };

        /**
         * Encodes the specified S2C_Logout message. Does not implicitly {@link proto.S2C_Logout.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Logout
         * @static
         * @param {proto.IS2C_Logout} message S2C_Logout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Logout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified S2C_Logout message, length delimited. Does not implicitly {@link proto.S2C_Logout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Logout
         * @static
         * @param {proto.IS2C_Logout} message S2C_Logout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Logout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Logout message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Logout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Logout} S2C_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Logout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Logout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Logout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Logout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Logout} S2C_Logout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Logout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Logout message.
         * @function verify
         * @memberof proto.S2C_Logout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Logout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a S2C_Logout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Logout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Logout} S2C_Logout
         */
        S2C_Logout.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Logout)
                return object;
            return new $root.proto.S2C_Logout();
        };

        /**
         * Creates a plain object from a S2C_Logout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Logout
         * @static
         * @param {proto.S2C_Logout} message S2C_Logout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Logout.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this S2C_Logout to JSON.
         * @function toJSON
         * @memberof proto.S2C_Logout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Logout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Logout;
    })();

    proto.S2C_KickOutLobby = (function() {

        /**
         * Properties of a S2C_KickOutLobby.
         * @memberof proto
         * @interface IS2C_KickOutLobby
         */

        /**
         * Constructs a new S2C_KickOutLobby.
         * @memberof proto
         * @classdesc Represents a S2C_KickOutLobby.
         * @implements IS2C_KickOutLobby
         * @constructor
         * @param {proto.IS2C_KickOutLobby=} [properties] Properties to set
         */
        function S2C_KickOutLobby(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new S2C_KickOutLobby instance using the specified properties.
         * @function create
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {proto.IS2C_KickOutLobby=} [properties] Properties to set
         * @returns {proto.S2C_KickOutLobby} S2C_KickOutLobby instance
         */
        S2C_KickOutLobby.create = function create(properties) {
            return new S2C_KickOutLobby(properties);
        };

        /**
         * Encodes the specified S2C_KickOutLobby message. Does not implicitly {@link proto.S2C_KickOutLobby.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {proto.IS2C_KickOutLobby} message S2C_KickOutLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_KickOutLobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified S2C_KickOutLobby message, length delimited. Does not implicitly {@link proto.S2C_KickOutLobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {proto.IS2C_KickOutLobby} message S2C_KickOutLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_KickOutLobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_KickOutLobby message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_KickOutLobby} S2C_KickOutLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_KickOutLobby.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_KickOutLobby();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_KickOutLobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_KickOutLobby} S2C_KickOutLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_KickOutLobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_KickOutLobby message.
         * @function verify
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_KickOutLobby.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a S2C_KickOutLobby message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_KickOutLobby} S2C_KickOutLobby
         */
        S2C_KickOutLobby.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_KickOutLobby)
                return object;
            return new $root.proto.S2C_KickOutLobby();
        };

        /**
         * Creates a plain object from a S2C_KickOutLobby message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_KickOutLobby
         * @static
         * @param {proto.S2C_KickOutLobby} message S2C_KickOutLobby
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_KickOutLobby.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this S2C_KickOutLobby to JSON.
         * @function toJSON
         * @memberof proto.S2C_KickOutLobby
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_KickOutLobby.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_KickOutLobby;
    })();

    /**
     * ErrorCode enum.
     * @name proto.ErrorCode
     * @enum {number}
     * @property {number} ok=0 ok value
     * @property {number} internal=1 internal value
     * @property {number} login_pwd_error=10 login_pwd_error value
     */
    proto.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ok"] = 0;
        values[valuesById[1] = "internal"] = 1;
        values[valuesById[10] = "login_pwd_error"] = 10;
        return values;
    })();

    proto.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof proto
         * @interface IPlayerInfo
         * @property {number|null} [id] PlayerInfo id
         * @property {string|null} [nickname] PlayerInfo nickname
         * @property {string|null} [head] PlayerInfo head
         * @property {number|Long|null} [gold] PlayerInfo gold
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof proto
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {proto.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo id.
         * @member {number} id
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.id = 0;

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo head.
         * @member {string} head
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.head = "";

        /**
         * PlayerInfo gold.
         * @member {number|Long} gold
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo=} [properties] Properties to set
         * @returns {proto.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.head);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.gold);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.head = reader.string();
                    break;
                case 4:
                    message.gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof proto.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PlayerInfo)
                return object;
            var message = new $root.proto.PlayerInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.head != null)
                message.head = String(object.head);
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.nickname = "";
                object.head = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof proto.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    proto.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof proto
         * @interface IGameInfo
         * @property {number|null} [id] GameInfo id
         * @property {string|null} [config] GameInfo config
         */

        /**
         * Constructs a new GameInfo.
         * @memberof proto
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {proto.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo id.
         * @member {number} id
         * @memberof proto.GameInfo
         * @instance
         */
        GameInfo.prototype.id = 0;

        /**
         * GameInfo config.
         * @member {string} config
         * @memberof proto.GameInfo
         * @instance
         */
        GameInfo.prototype.config = "";

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof proto.GameInfo
         * @static
         * @param {proto.IGameInfo=} [properties] Properties to set
         * @returns {proto.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link proto.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.GameInfo
         * @static
         * @param {proto.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.config);
            return writer;
        };

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link proto.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GameInfo
         * @static
         * @param {proto.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.config = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInfo message.
         * @function verify
         * @memberof proto.GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.config != null && message.hasOwnProperty("config"))
                if (!$util.isString(message.config))
                    return "config: string expected";
            return null;
        };

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GameInfo} GameInfo
         */
        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GameInfo)
                return object;
            var message = new $root.proto.GameInfo();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.config != null)
                message.config = String(object.config);
            return message;
        };

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GameInfo
         * @static
         * @param {proto.GameInfo} message GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.config = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = message.config;
            return object;
        };

        /**
         * Converts this GameInfo to JSON.
         * @function toJSON
         * @memberof proto.GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    proto.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof proto
         * @interface IRoomInfo
         * @property {number|null} [id] RoomInfo id
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof proto
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {proto.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo id.
         * @member {number} id
         * @memberof proto.RoomInfo
         * @instance
         */
        RoomInfo.prototype.id = 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof proto.RoomInfo
         * @static
         * @param {proto.IRoomInfo=} [properties] Properties to set
         * @returns {proto.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link proto.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.RoomInfo
         * @static
         * @param {proto.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link proto.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RoomInfo
         * @static
         * @param {proto.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof proto.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RoomInfo)
                return object;
            var message = new $root.proto.RoomInfo();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RoomInfo
         * @static
         * @param {proto.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof proto.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    proto.C2S_Ready = (function() {

        /**
         * Properties of a C2S_Ready.
         * @memberof proto
         * @interface IC2S_Ready
         */

        /**
         * Constructs a new C2S_Ready.
         * @memberof proto
         * @classdesc Represents a C2S_Ready.
         * @implements IC2S_Ready
         * @constructor
         * @param {proto.IC2S_Ready=} [properties] Properties to set
         */
        function C2S_Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2S_Ready instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Ready
         * @static
         * @param {proto.IC2S_Ready=} [properties] Properties to set
         * @returns {proto.C2S_Ready} C2S_Ready instance
         */
        C2S_Ready.create = function create(properties) {
            return new C2S_Ready(properties);
        };

        /**
         * Encodes the specified C2S_Ready message. Does not implicitly {@link proto.C2S_Ready.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Ready
         * @static
         * @param {proto.IC2S_Ready} message C2S_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2S_Ready message, length delimited. Does not implicitly {@link proto.C2S_Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Ready
         * @static
         * @param {proto.IC2S_Ready} message C2S_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Ready} C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Ready} C2S_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Ready message.
         * @function verify
         * @memberof proto.C2S_Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2S_Ready message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Ready
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Ready} C2S_Ready
         */
        C2S_Ready.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Ready)
                return object;
            return new $root.proto.C2S_Ready();
        };

        /**
         * Creates a plain object from a C2S_Ready message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Ready
         * @static
         * @param {proto.C2S_Ready} message C2S_Ready
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Ready.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2S_Ready to JSON.
         * @function toJSON
         * @memberof proto.C2S_Ready
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Ready.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Ready;
    })();

    proto.S2C_Ready = (function() {

        /**
         * Properties of a S2C_Ready.
         * @memberof proto
         * @interface IS2C_Ready
         * @property {proto.ErrorCode|null} [error] S2C_Ready error
         */

        /**
         * Constructs a new S2C_Ready.
         * @memberof proto
         * @classdesc Represents a S2C_Ready.
         * @implements IS2C_Ready
         * @constructor
         * @param {proto.IS2C_Ready=} [properties] Properties to set
         */
        function S2C_Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Ready error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_Ready
         * @instance
         */
        S2C_Ready.prototype.error = 0;

        /**
         * Creates a new S2C_Ready instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Ready
         * @static
         * @param {proto.IS2C_Ready=} [properties] Properties to set
         * @returns {proto.S2C_Ready} S2C_Ready instance
         */
        S2C_Ready.create = function create(properties) {
            return new S2C_Ready(properties);
        };

        /**
         * Encodes the specified S2C_Ready message. Does not implicitly {@link proto.S2C_Ready.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Ready
         * @static
         * @param {proto.IS2C_Ready} message S2C_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified S2C_Ready message, length delimited. Does not implicitly {@link proto.S2C_Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Ready
         * @static
         * @param {proto.IS2C_Ready} message S2C_Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Ready} S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Ready} S2C_Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Ready message.
         * @function verify
         * @memberof proto.S2C_Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            return null;
        };

        /**
         * Creates a S2C_Ready message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Ready
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Ready} S2C_Ready
         */
        S2C_Ready.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Ready)
                return object;
            var message = new $root.proto.S2C_Ready();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_Ready message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Ready
         * @static
         * @param {proto.S2C_Ready} message S2C_Ready
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Ready.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = options.enums === String ? "ok" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            return object;
        };

        /**
         * Converts this S2C_Ready to JSON.
         * @function toJSON
         * @memberof proto.S2C_Ready
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Ready.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Ready;
    })();

    proto.C2S_RoomList = (function() {

        /**
         * Properties of a C2S_RoomList.
         * @memberof proto
         * @interface IC2S_RoomList
         */

        /**
         * Constructs a new C2S_RoomList.
         * @memberof proto
         * @classdesc Represents a C2S_RoomList.
         * @implements IC2S_RoomList
         * @constructor
         * @param {proto.IC2S_RoomList=} [properties] Properties to set
         */
        function C2S_RoomList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2S_RoomList instance using the specified properties.
         * @function create
         * @memberof proto.C2S_RoomList
         * @static
         * @param {proto.IC2S_RoomList=} [properties] Properties to set
         * @returns {proto.C2S_RoomList} C2S_RoomList instance
         */
        C2S_RoomList.create = function create(properties) {
            return new C2S_RoomList(properties);
        };

        /**
         * Encodes the specified C2S_RoomList message. Does not implicitly {@link proto.C2S_RoomList.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_RoomList
         * @static
         * @param {proto.IC2S_RoomList} message C2S_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_RoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2S_RoomList message, length delimited. Does not implicitly {@link proto.C2S_RoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_RoomList
         * @static
         * @param {proto.IC2S_RoomList} message C2S_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_RoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_RoomList} C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_RoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_RoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_RoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_RoomList} C2S_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_RoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_RoomList message.
         * @function verify
         * @memberof proto.C2S_RoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_RoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2S_RoomList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_RoomList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_RoomList} C2S_RoomList
         */
        C2S_RoomList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_RoomList)
                return object;
            return new $root.proto.C2S_RoomList();
        };

        /**
         * Creates a plain object from a C2S_RoomList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_RoomList
         * @static
         * @param {proto.C2S_RoomList} message C2S_RoomList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_RoomList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2S_RoomList to JSON.
         * @function toJSON
         * @memberof proto.C2S_RoomList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_RoomList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_RoomList;
    })();

    proto.S2C_RoomList = (function() {

        /**
         * Properties of a S2C_RoomList.
         * @memberof proto
         * @interface IS2C_RoomList
         * @property {Array.<proto.IRoomInfo>|null} [roomInfos] S2C_RoomList roomInfos
         */

        /**
         * Constructs a new S2C_RoomList.
         * @memberof proto
         * @classdesc Represents a S2C_RoomList.
         * @implements IS2C_RoomList
         * @constructor
         * @param {proto.IS2C_RoomList=} [properties] Properties to set
         */
        function S2C_RoomList(properties) {
            this.roomInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_RoomList roomInfos.
         * @member {Array.<proto.IRoomInfo>} roomInfos
         * @memberof proto.S2C_RoomList
         * @instance
         */
        S2C_RoomList.prototype.roomInfos = $util.emptyArray;

        /**
         * Creates a new S2C_RoomList instance using the specified properties.
         * @function create
         * @memberof proto.S2C_RoomList
         * @static
         * @param {proto.IS2C_RoomList=} [properties] Properties to set
         * @returns {proto.S2C_RoomList} S2C_RoomList instance
         */
        S2C_RoomList.create = function create(properties) {
            return new S2C_RoomList(properties);
        };

        /**
         * Encodes the specified S2C_RoomList message. Does not implicitly {@link proto.S2C_RoomList.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_RoomList
         * @static
         * @param {proto.IS2C_RoomList} message S2C_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_RoomList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomInfos != null && message.roomInfos.length)
                for (var i = 0; i < message.roomInfos.length; ++i)
                    $root.proto.RoomInfo.encode(message.roomInfos[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2C_RoomList message, length delimited. Does not implicitly {@link proto.S2C_RoomList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_RoomList
         * @static
         * @param {proto.IS2C_RoomList} message S2C_RoomList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_RoomList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_RoomList} S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_RoomList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_RoomList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roomInfos && message.roomInfos.length))
                        message.roomInfos = [];
                    message.roomInfos.push($root.proto.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_RoomList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_RoomList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_RoomList} S2C_RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_RoomList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_RoomList message.
         * @function verify
         * @memberof proto.S2C_RoomList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_RoomList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomInfos != null && message.hasOwnProperty("roomInfos")) {
                if (!Array.isArray(message.roomInfos))
                    return "roomInfos: array expected";
                for (var i = 0; i < message.roomInfos.length; ++i) {
                    var error = $root.proto.RoomInfo.verify(message.roomInfos[i]);
                    if (error)
                        return "roomInfos." + error;
                }
            }
            return null;
        };

        /**
         * Creates a S2C_RoomList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_RoomList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_RoomList} S2C_RoomList
         */
        S2C_RoomList.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_RoomList)
                return object;
            var message = new $root.proto.S2C_RoomList();
            if (object.roomInfos) {
                if (!Array.isArray(object.roomInfos))
                    throw TypeError(".proto.S2C_RoomList.roomInfos: array expected");
                message.roomInfos = [];
                for (var i = 0; i < object.roomInfos.length; ++i) {
                    if (typeof object.roomInfos[i] !== "object")
                        throw TypeError(".proto.S2C_RoomList.roomInfos: object expected");
                    message.roomInfos[i] = $root.proto.RoomInfo.fromObject(object.roomInfos[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_RoomList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_RoomList
         * @static
         * @param {proto.S2C_RoomList} message S2C_RoomList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_RoomList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roomInfos = [];
            if (message.roomInfos && message.roomInfos.length) {
                object.roomInfos = [];
                for (var j = 0; j < message.roomInfos.length; ++j)
                    object.roomInfos[j] = $root.proto.RoomInfo.toObject(message.roomInfos[j], options);
            }
            return object;
        };

        /**
         * Converts this S2C_RoomList to JSON.
         * @function toJSON
         * @memberof proto.S2C_RoomList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_RoomList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_RoomList;
    })();

    proto.C2S_CreateRoom = (function() {

        /**
         * Properties of a C2S_CreateRoom.
         * @memberof proto
         * @interface IC2S_CreateRoom
         * @property {proto.IGameInfo|null} [gameInfo] C2S_CreateRoom gameInfo
         * @property {string|null} [pwd] C2S_CreateRoom pwd
         */

        /**
         * Constructs a new C2S_CreateRoom.
         * @memberof proto
         * @classdesc Represents a C2S_CreateRoom.
         * @implements IC2S_CreateRoom
         * @constructor
         * @param {proto.IC2S_CreateRoom=} [properties] Properties to set
         */
        function C2S_CreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_CreateRoom gameInfo.
         * @member {proto.IGameInfo|null|undefined} gameInfo
         * @memberof proto.C2S_CreateRoom
         * @instance
         */
        C2S_CreateRoom.prototype.gameInfo = null;

        /**
         * C2S_CreateRoom pwd.
         * @member {string} pwd
         * @memberof proto.C2S_CreateRoom
         * @instance
         */
        C2S_CreateRoom.prototype.pwd = "";

        /**
         * Creates a new C2S_CreateRoom instance using the specified properties.
         * @function create
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {proto.IC2S_CreateRoom=} [properties] Properties to set
         * @returns {proto.C2S_CreateRoom} C2S_CreateRoom instance
         */
        C2S_CreateRoom.create = function create(properties) {
            return new C2S_CreateRoom(properties);
        };

        /**
         * Encodes the specified C2S_CreateRoom message. Does not implicitly {@link proto.C2S_CreateRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {proto.IC2S_CreateRoom} message C2S_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_CreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                $root.proto.GameInfo.encode(message.gameInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pwd != null && Object.hasOwnProperty.call(message, "pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified C2S_CreateRoom message, length delimited. Does not implicitly {@link proto.C2S_CreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {proto.IC2S_CreateRoom} message C2S_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_CreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_CreateRoom} C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_CreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_CreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.gameInfo = $root.proto.GameInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_CreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_CreateRoom} C2S_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_CreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_CreateRoom message.
         * @function verify
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_CreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.proto.GameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a C2S_CreateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_CreateRoom} C2S_CreateRoom
         */
        C2S_CreateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_CreateRoom)
                return object;
            var message = new $root.proto.C2S_CreateRoom();
            if (object.gameInfo != null) {
                if (typeof object.gameInfo !== "object")
                    throw TypeError(".proto.C2S_CreateRoom.gameInfo: object expected");
                message.gameInfo = $root.proto.GameInfo.fromObject(object.gameInfo);
            }
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a C2S_CreateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_CreateRoom
         * @static
         * @param {proto.C2S_CreateRoom} message C2S_CreateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_CreateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gameInfo = null;
                object.pwd = "";
            }
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = $root.proto.GameInfo.toObject(message.gameInfo, options);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this C2S_CreateRoom to JSON.
         * @function toJSON
         * @memberof proto.C2S_CreateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_CreateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_CreateRoom;
    })();

    proto.S2C_CreateRoom = (function() {

        /**
         * Properties of a S2C_CreateRoom.
         * @memberof proto
         * @interface IS2C_CreateRoom
         * @property {proto.ErrorCode|null} [error] S2C_CreateRoom error
         * @property {number|null} [roomId] S2C_CreateRoom roomId
         */

        /**
         * Constructs a new S2C_CreateRoom.
         * @memberof proto
         * @classdesc Represents a S2C_CreateRoom.
         * @implements IS2C_CreateRoom
         * @constructor
         * @param {proto.IS2C_CreateRoom=} [properties] Properties to set
         */
        function S2C_CreateRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_CreateRoom error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_CreateRoom
         * @instance
         */
        S2C_CreateRoom.prototype.error = 0;

        /**
         * S2C_CreateRoom roomId.
         * @member {number} roomId
         * @memberof proto.S2C_CreateRoom
         * @instance
         */
        S2C_CreateRoom.prototype.roomId = 0;

        /**
         * Creates a new S2C_CreateRoom instance using the specified properties.
         * @function create
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {proto.IS2C_CreateRoom=} [properties] Properties to set
         * @returns {proto.S2C_CreateRoom} S2C_CreateRoom instance
         */
        S2C_CreateRoom.create = function create(properties) {
            return new S2C_CreateRoom(properties);
        };

        /**
         * Encodes the specified S2C_CreateRoom message. Does not implicitly {@link proto.S2C_CreateRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {proto.IS2C_CreateRoom} message S2C_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_CreateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified S2C_CreateRoom message, length delimited. Does not implicitly {@link proto.S2C_CreateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {proto.IS2C_CreateRoom} message S2C_CreateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_CreateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_CreateRoom} S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_CreateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_CreateRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.roomId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_CreateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_CreateRoom} S2C_CreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_CreateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_CreateRoom message.
         * @function verify
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_CreateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            return null;
        };

        /**
         * Creates a S2C_CreateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_CreateRoom} S2C_CreateRoom
         */
        S2C_CreateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_CreateRoom)
                return object;
            var message = new $root.proto.S2C_CreateRoom();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            return message;
        };

        /**
         * Creates a plain object from a S2C_CreateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_CreateRoom
         * @static
         * @param {proto.S2C_CreateRoom} message S2C_CreateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_CreateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "ok" : 0;
                object.roomId = 0;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this S2C_CreateRoom to JSON.
         * @function toJSON
         * @memberof proto.S2C_CreateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_CreateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_CreateRoom;
    })();

    proto.C2S_EnterRoom = (function() {

        /**
         * Properties of a C2S_EnterRoom.
         * @memberof proto
         * @interface IC2S_EnterRoom
         * @property {number|null} [roomId] C2S_EnterRoom roomId
         * @property {string|null} [pwd] C2S_EnterRoom pwd
         */

        /**
         * Constructs a new C2S_EnterRoom.
         * @memberof proto
         * @classdesc Represents a C2S_EnterRoom.
         * @implements IC2S_EnterRoom
         * @constructor
         * @param {proto.IC2S_EnterRoom=} [properties] Properties to set
         */
        function C2S_EnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_EnterRoom roomId.
         * @member {number} roomId
         * @memberof proto.C2S_EnterRoom
         * @instance
         */
        C2S_EnterRoom.prototype.roomId = 0;

        /**
         * C2S_EnterRoom pwd.
         * @member {string} pwd
         * @memberof proto.C2S_EnterRoom
         * @instance
         */
        C2S_EnterRoom.prototype.pwd = "";

        /**
         * Creates a new C2S_EnterRoom instance using the specified properties.
         * @function create
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {proto.IC2S_EnterRoom=} [properties] Properties to set
         * @returns {proto.C2S_EnterRoom} C2S_EnterRoom instance
         */
        C2S_EnterRoom.create = function create(properties) {
            return new C2S_EnterRoom(properties);
        };

        /**
         * Encodes the specified C2S_EnterRoom message. Does not implicitly {@link proto.C2S_EnterRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {proto.IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_EnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            if (message.pwd != null && Object.hasOwnProperty.call(message, "pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified C2S_EnterRoom message, length delimited. Does not implicitly {@link proto.C2S_EnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {proto.IC2S_EnterRoom} message C2S_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_EnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_EnterRoom} C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_EnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_EnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_EnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_EnterRoom} C2S_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_EnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_EnterRoom message.
         * @function verify
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_EnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a C2S_EnterRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_EnterRoom} C2S_EnterRoom
         */
        C2S_EnterRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_EnterRoom)
                return object;
            var message = new $root.proto.C2S_EnterRoom();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a C2S_EnterRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_EnterRoom
         * @static
         * @param {proto.C2S_EnterRoom} message C2S_EnterRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_EnterRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = 0;
                object.pwd = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this C2S_EnterRoom to JSON.
         * @function toJSON
         * @memberof proto.C2S_EnterRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_EnterRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_EnterRoom;
    })();

    proto.S2C_EnterRoom = (function() {

        /**
         * Properties of a S2C_EnterRoom.
         * @memberof proto
         * @interface IS2C_EnterRoom
         * @property {proto.ErrorCode|null} [error] S2C_EnterRoom error
         * @property {proto.IGameInfo|null} [gameInfo] S2C_EnterRoom gameInfo
         */

        /**
         * Constructs a new S2C_EnterRoom.
         * @memberof proto
         * @classdesc Represents a S2C_EnterRoom.
         * @implements IS2C_EnterRoom
         * @constructor
         * @param {proto.IS2C_EnterRoom=} [properties] Properties to set
         */
        function S2C_EnterRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_EnterRoom error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_EnterRoom
         * @instance
         */
        S2C_EnterRoom.prototype.error = 0;

        /**
         * S2C_EnterRoom gameInfo.
         * @member {proto.IGameInfo|null|undefined} gameInfo
         * @memberof proto.S2C_EnterRoom
         * @instance
         */
        S2C_EnterRoom.prototype.gameInfo = null;

        /**
         * Creates a new S2C_EnterRoom instance using the specified properties.
         * @function create
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {proto.IS2C_EnterRoom=} [properties] Properties to set
         * @returns {proto.S2C_EnterRoom} S2C_EnterRoom instance
         */
        S2C_EnterRoom.create = function create(properties) {
            return new S2C_EnterRoom(properties);
        };

        /**
         * Encodes the specified S2C_EnterRoom message. Does not implicitly {@link proto.S2C_EnterRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {proto.IS2C_EnterRoom} message S2C_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_EnterRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.gameInfo != null && Object.hasOwnProperty.call(message, "gameInfo"))
                $root.proto.GameInfo.encode(message.gameInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified S2C_EnterRoom message, length delimited. Does not implicitly {@link proto.S2C_EnterRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {proto.IS2C_EnterRoom} message S2C_EnterRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_EnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_EnterRoom} S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_EnterRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_EnterRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.gameInfo = $root.proto.GameInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_EnterRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_EnterRoom} S2C_EnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_EnterRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_EnterRoom message.
         * @function verify
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_EnterRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo")) {
                var error = $root.proto.GameInfo.verify(message.gameInfo);
                if (error)
                    return "gameInfo." + error;
            }
            return null;
        };

        /**
         * Creates a S2C_EnterRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_EnterRoom} S2C_EnterRoom
         */
        S2C_EnterRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_EnterRoom)
                return object;
            var message = new $root.proto.S2C_EnterRoom();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            if (object.gameInfo != null) {
                if (typeof object.gameInfo !== "object")
                    throw TypeError(".proto.S2C_EnterRoom.gameInfo: object expected");
                message.gameInfo = $root.proto.GameInfo.fromObject(object.gameInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_EnterRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_EnterRoom
         * @static
         * @param {proto.S2C_EnterRoom} message S2C_EnterRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_EnterRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "ok" : 0;
                object.gameInfo = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = $root.proto.GameInfo.toObject(message.gameInfo, options);
            return object;
        };

        /**
         * Converts this S2C_EnterRoom to JSON.
         * @function toJSON
         * @memberof proto.S2C_EnterRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_EnterRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_EnterRoom;
    })();

    proto.C2S_LeaveRoom = (function() {

        /**
         * Properties of a C2S_LeaveRoom.
         * @memberof proto
         * @interface IC2S_LeaveRoom
         */

        /**
         * Constructs a new C2S_LeaveRoom.
         * @memberof proto
         * @classdesc Represents a C2S_LeaveRoom.
         * @implements IC2S_LeaveRoom
         * @constructor
         * @param {proto.IC2S_LeaveRoom=} [properties] Properties to set
         */
        function C2S_LeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2S_LeaveRoom instance using the specified properties.
         * @function create
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {proto.IC2S_LeaveRoom=} [properties] Properties to set
         * @returns {proto.C2S_LeaveRoom} C2S_LeaveRoom instance
         */
        C2S_LeaveRoom.create = function create(properties) {
            return new C2S_LeaveRoom(properties);
        };

        /**
         * Encodes the specified C2S_LeaveRoom message. Does not implicitly {@link proto.C2S_LeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {proto.IC2S_LeaveRoom} message C2S_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_LeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2S_LeaveRoom message, length delimited. Does not implicitly {@link proto.C2S_LeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {proto.IC2S_LeaveRoom} message C2S_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_LeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_LeaveRoom} C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_LeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_LeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_LeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_LeaveRoom} C2S_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_LeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_LeaveRoom message.
         * @function verify
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_LeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2S_LeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_LeaveRoom} C2S_LeaveRoom
         */
        C2S_LeaveRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_LeaveRoom)
                return object;
            return new $root.proto.C2S_LeaveRoom();
        };

        /**
         * Creates a plain object from a C2S_LeaveRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_LeaveRoom
         * @static
         * @param {proto.C2S_LeaveRoom} message C2S_LeaveRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_LeaveRoom.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2S_LeaveRoom to JSON.
         * @function toJSON
         * @memberof proto.C2S_LeaveRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_LeaveRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_LeaveRoom;
    })();

    proto.S2C_LeaveRoom = (function() {

        /**
         * Properties of a S2C_LeaveRoom.
         * @memberof proto
         * @interface IS2C_LeaveRoom
         * @property {proto.ErrorCode|null} [error] S2C_LeaveRoom error
         */

        /**
         * Constructs a new S2C_LeaveRoom.
         * @memberof proto
         * @classdesc Represents a S2C_LeaveRoom.
         * @implements IS2C_LeaveRoom
         * @constructor
         * @param {proto.IS2C_LeaveRoom=} [properties] Properties to set
         */
        function S2C_LeaveRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_LeaveRoom error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_LeaveRoom
         * @instance
         */
        S2C_LeaveRoom.prototype.error = 0;

        /**
         * Creates a new S2C_LeaveRoom instance using the specified properties.
         * @function create
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {proto.IS2C_LeaveRoom=} [properties] Properties to set
         * @returns {proto.S2C_LeaveRoom} S2C_LeaveRoom instance
         */
        S2C_LeaveRoom.create = function create(properties) {
            return new S2C_LeaveRoom(properties);
        };

        /**
         * Encodes the specified S2C_LeaveRoom message. Does not implicitly {@link proto.S2C_LeaveRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {proto.IS2C_LeaveRoom} message S2C_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_LeaveRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified S2C_LeaveRoom message, length delimited. Does not implicitly {@link proto.S2C_LeaveRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {proto.IS2C_LeaveRoom} message S2C_LeaveRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_LeaveRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_LeaveRoom} S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_LeaveRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_LeaveRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_LeaveRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_LeaveRoom} S2C_LeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_LeaveRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_LeaveRoom message.
         * @function verify
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_LeaveRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            return null;
        };

        /**
         * Creates a S2C_LeaveRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_LeaveRoom} S2C_LeaveRoom
         */
        S2C_LeaveRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_LeaveRoom)
                return object;
            var message = new $root.proto.S2C_LeaveRoom();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_LeaveRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_LeaveRoom
         * @static
         * @param {proto.S2C_LeaveRoom} message S2C_LeaveRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_LeaveRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = options.enums === String ? "ok" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            return object;
        };

        /**
         * Converts this S2C_LeaveRoom to JSON.
         * @function toJSON
         * @memberof proto.S2C_LeaveRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_LeaveRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_LeaveRoom;
    })();

    proto.C2S_Speak = (function() {

        /**
         * Properties of a C2S_Speak.
         * @memberof proto
         * @interface IC2S_Speak
         * @property {proto.IPlayerInfo|null} [playerInfo] C2S_Speak playerInfo
         * @property {string|null} [speak] C2S_Speak speak
         */

        /**
         * Constructs a new C2S_Speak.
         * @memberof proto
         * @classdesc Represents a C2S_Speak.
         * @implements IC2S_Speak
         * @constructor
         * @param {proto.IC2S_Speak=} [properties] Properties to set
         */
        function C2S_Speak(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2S_Speak playerInfo.
         * @member {proto.IPlayerInfo|null|undefined} playerInfo
         * @memberof proto.C2S_Speak
         * @instance
         */
        C2S_Speak.prototype.playerInfo = null;

        /**
         * C2S_Speak speak.
         * @member {string} speak
         * @memberof proto.C2S_Speak
         * @instance
         */
        C2S_Speak.prototype.speak = "";

        /**
         * Creates a new C2S_Speak instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Speak
         * @static
         * @param {proto.IC2S_Speak=} [properties] Properties to set
         * @returns {proto.C2S_Speak} C2S_Speak instance
         */
        C2S_Speak.create = function create(properties) {
            return new C2S_Speak(properties);
        };

        /**
         * Encodes the specified C2S_Speak message. Does not implicitly {@link proto.C2S_Speak.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Speak
         * @static
         * @param {proto.IC2S_Speak} message C2S_Speak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Speak.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                $root.proto.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.speak != null && Object.hasOwnProperty.call(message, "speak"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.speak);
            return writer;
        };

        /**
         * Encodes the specified C2S_Speak message, length delimited. Does not implicitly {@link proto.C2S_Speak.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Speak
         * @static
         * @param {proto.IC2S_Speak} message C2S_Speak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Speak.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Speak message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Speak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Speak} C2S_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Speak.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Speak();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerInfo = $root.proto.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.speak = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Speak message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Speak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Speak} C2S_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Speak.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Speak message.
         * @function verify
         * @memberof proto.C2S_Speak
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Speak.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                var error = $root.proto.PlayerInfo.verify(message.playerInfo);
                if (error)
                    return "playerInfo." + error;
            }
            if (message.speak != null && message.hasOwnProperty("speak"))
                if (!$util.isString(message.speak))
                    return "speak: string expected";
            return null;
        };

        /**
         * Creates a C2S_Speak message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Speak
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Speak} C2S_Speak
         */
        C2S_Speak.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Speak)
                return object;
            var message = new $root.proto.C2S_Speak();
            if (object.playerInfo != null) {
                if (typeof object.playerInfo !== "object")
                    throw TypeError(".proto.C2S_Speak.playerInfo: object expected");
                message.playerInfo = $root.proto.PlayerInfo.fromObject(object.playerInfo);
            }
            if (object.speak != null)
                message.speak = String(object.speak);
            return message;
        };

        /**
         * Creates a plain object from a C2S_Speak message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Speak
         * @static
         * @param {proto.C2S_Speak} message C2S_Speak
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Speak.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerInfo = null;
                object.speak = "";
            }
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                object.playerInfo = $root.proto.PlayerInfo.toObject(message.playerInfo, options);
            if (message.speak != null && message.hasOwnProperty("speak"))
                object.speak = message.speak;
            return object;
        };

        /**
         * Converts this C2S_Speak to JSON.
         * @function toJSON
         * @memberof proto.C2S_Speak
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Speak.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Speak;
    })();

    proto.S2C_Speak = (function() {

        /**
         * Properties of a S2C_Speak.
         * @memberof proto
         * @interface IS2C_Speak
         * @property {proto.IPlayerInfo|null} [playerInfo] S2C_Speak playerInfo
         * @property {string|null} [speak] S2C_Speak speak
         */

        /**
         * Constructs a new S2C_Speak.
         * @memberof proto
         * @classdesc Represents a S2C_Speak.
         * @implements IS2C_Speak
         * @constructor
         * @param {proto.IS2C_Speak=} [properties] Properties to set
         */
        function S2C_Speak(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Speak playerInfo.
         * @member {proto.IPlayerInfo|null|undefined} playerInfo
         * @memberof proto.S2C_Speak
         * @instance
         */
        S2C_Speak.prototype.playerInfo = null;

        /**
         * S2C_Speak speak.
         * @member {string} speak
         * @memberof proto.S2C_Speak
         * @instance
         */
        S2C_Speak.prototype.speak = "";

        /**
         * Creates a new S2C_Speak instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Speak
         * @static
         * @param {proto.IS2C_Speak=} [properties] Properties to set
         * @returns {proto.S2C_Speak} S2C_Speak instance
         */
        S2C_Speak.create = function create(properties) {
            return new S2C_Speak(properties);
        };

        /**
         * Encodes the specified S2C_Speak message. Does not implicitly {@link proto.S2C_Speak.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Speak
         * @static
         * @param {proto.IS2C_Speak} message S2C_Speak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Speak.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerInfo != null && Object.hasOwnProperty.call(message, "playerInfo"))
                $root.proto.PlayerInfo.encode(message.playerInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.speak != null && Object.hasOwnProperty.call(message, "speak"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.speak);
            return writer;
        };

        /**
         * Encodes the specified S2C_Speak message, length delimited. Does not implicitly {@link proto.S2C_Speak.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Speak
         * @static
         * @param {proto.IS2C_Speak} message S2C_Speak message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Speak.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Speak message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Speak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Speak} S2C_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Speak.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Speak();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerInfo = $root.proto.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.speak = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Speak message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Speak
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Speak} S2C_Speak
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Speak.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Speak message.
         * @function verify
         * @memberof proto.S2C_Speak
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Speak.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo")) {
                var error = $root.proto.PlayerInfo.verify(message.playerInfo);
                if (error)
                    return "playerInfo." + error;
            }
            if (message.speak != null && message.hasOwnProperty("speak"))
                if (!$util.isString(message.speak))
                    return "speak: string expected";
            return null;
        };

        /**
         * Creates a S2C_Speak message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Speak
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Speak} S2C_Speak
         */
        S2C_Speak.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Speak)
                return object;
            var message = new $root.proto.S2C_Speak();
            if (object.playerInfo != null) {
                if (typeof object.playerInfo !== "object")
                    throw TypeError(".proto.S2C_Speak.playerInfo: object expected");
                message.playerInfo = $root.proto.PlayerInfo.fromObject(object.playerInfo);
            }
            if (object.speak != null)
                message.speak = String(object.speak);
            return message;
        };

        /**
         * Creates a plain object from a S2C_Speak message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Speak
         * @static
         * @param {proto.S2C_Speak} message S2C_Speak
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Speak.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.playerInfo = null;
                object.speak = "";
            }
            if (message.playerInfo != null && message.hasOwnProperty("playerInfo"))
                object.playerInfo = $root.proto.PlayerInfo.toObject(message.playerInfo, options);
            if (message.speak != null && message.hasOwnProperty("speak"))
                object.speak = message.speak;
            return object;
        };

        /**
         * Converts this S2C_Speak to JSON.
         * @function toJSON
         * @memberof proto.S2C_Speak
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Speak.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Speak;
    })();

    proto.S2C_KickOutRoom = (function() {

        /**
         * Properties of a S2C_KickOutRoom.
         * @memberof proto
         * @interface IS2C_KickOutRoom
         * @property {proto.ErrorCode|null} [error] S2C_KickOutRoom error
         */

        /**
         * Constructs a new S2C_KickOutRoom.
         * @memberof proto
         * @classdesc Represents a S2C_KickOutRoom.
         * @implements IS2C_KickOutRoom
         * @constructor
         * @param {proto.IS2C_KickOutRoom=} [properties] Properties to set
         */
        function S2C_KickOutRoom(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_KickOutRoom error.
         * @member {proto.ErrorCode} error
         * @memberof proto.S2C_KickOutRoom
         * @instance
         */
        S2C_KickOutRoom.prototype.error = 0;

        /**
         * Creates a new S2C_KickOutRoom instance using the specified properties.
         * @function create
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {proto.IS2C_KickOutRoom=} [properties] Properties to set
         * @returns {proto.S2C_KickOutRoom} S2C_KickOutRoom instance
         */
        S2C_KickOutRoom.create = function create(properties) {
            return new S2C_KickOutRoom(properties);
        };

        /**
         * Encodes the specified S2C_KickOutRoom message. Does not implicitly {@link proto.S2C_KickOutRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {proto.IS2C_KickOutRoom} message S2C_KickOutRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_KickOutRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified S2C_KickOutRoom message, length delimited. Does not implicitly {@link proto.S2C_KickOutRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {proto.IS2C_KickOutRoom} message S2C_KickOutRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_KickOutRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_KickOutRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_KickOutRoom} S2C_KickOutRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_KickOutRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_KickOutRoom();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_KickOutRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_KickOutRoom} S2C_KickOutRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_KickOutRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_KickOutRoom message.
         * @function verify
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_KickOutRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 10:
                    break;
                }
            return null;
        };

        /**
         * Creates a S2C_KickOutRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_KickOutRoom} S2C_KickOutRoom
         */
        S2C_KickOutRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_KickOutRoom)
                return object;
            var message = new $root.proto.S2C_KickOutRoom();
            switch (object.error) {
            case "ok":
            case 0:
                message.error = 0;
                break;
            case "internal":
            case 1:
                message.error = 1;
                break;
            case "login_pwd_error":
            case 10:
                message.error = 10;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a S2C_KickOutRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_KickOutRoom
         * @static
         * @param {proto.S2C_KickOutRoom} message S2C_KickOutRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_KickOutRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.error = options.enums === String ? "ok" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.proto.ErrorCode[message.error] : message.error;
            return object;
        };

        /**
         * Converts this S2C_KickOutRoom to JSON.
         * @function toJSON
         * @memberof proto.S2C_KickOutRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_KickOutRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_KickOutRoom;
    })();

    proto.C2S_Test = (function() {

        /**
         * Properties of a C2S_Test.
         * @memberof proto
         * @interface IC2S_Test
         */

        /**
         * Constructs a new C2S_Test.
         * @memberof proto
         * @classdesc Represents a C2S_Test.
         * @implements IC2S_Test
         * @constructor
         * @param {proto.IC2S_Test=} [properties] Properties to set
         */
        function C2S_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2S_Test instance using the specified properties.
         * @function create
         * @memberof proto.C2S_Test
         * @static
         * @param {proto.IC2S_Test=} [properties] Properties to set
         * @returns {proto.C2S_Test} C2S_Test instance
         */
        C2S_Test.create = function create(properties) {
            return new C2S_Test(properties);
        };

        /**
         * Encodes the specified C2S_Test message. Does not implicitly {@link proto.C2S_Test.verify|verify} messages.
         * @function encode
         * @memberof proto.C2S_Test
         * @static
         * @param {proto.IC2S_Test} message C2S_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2S_Test message, length delimited. Does not implicitly {@link proto.C2S_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.C2S_Test
         * @static
         * @param {proto.IC2S_Test} message C2S_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2S_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2S_Test message from the specified reader or buffer.
         * @function decode
         * @memberof proto.C2S_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.C2S_Test} C2S_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.C2S_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2S_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.C2S_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.C2S_Test} C2S_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2S_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2S_Test message.
         * @function verify
         * @memberof proto.C2S_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2S_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2S_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.C2S_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.C2S_Test} C2S_Test
         */
        C2S_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.C2S_Test)
                return object;
            return new $root.proto.C2S_Test();
        };

        /**
         * Creates a plain object from a C2S_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.C2S_Test
         * @static
         * @param {proto.C2S_Test} message C2S_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2S_Test.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2S_Test to JSON.
         * @function toJSON
         * @memberof proto.C2S_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2S_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2S_Test;
    })();

    proto.S2C_Test = (function() {

        /**
         * Properties of a S2C_Test.
         * @memberof proto
         * @interface IS2C_Test
         * @property {number|null} [id1] S2C_Test id1
         * @property {number|Long|null} [id2] S2C_Test id2
         */

        /**
         * Constructs a new S2C_Test.
         * @memberof proto
         * @classdesc Represents a S2C_Test.
         * @implements IS2C_Test
         * @constructor
         * @param {proto.IS2C_Test=} [properties] Properties to set
         */
        function S2C_Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * S2C_Test id1.
         * @member {number} id1
         * @memberof proto.S2C_Test
         * @instance
         */
        S2C_Test.prototype.id1 = 0;

        /**
         * S2C_Test id2.
         * @member {number|Long} id2
         * @memberof proto.S2C_Test
         * @instance
         */
        S2C_Test.prototype.id2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new S2C_Test instance using the specified properties.
         * @function create
         * @memberof proto.S2C_Test
         * @static
         * @param {proto.IS2C_Test=} [properties] Properties to set
         * @returns {proto.S2C_Test} S2C_Test instance
         */
        S2C_Test.create = function create(properties) {
            return new S2C_Test(properties);
        };

        /**
         * Encodes the specified S2C_Test message. Does not implicitly {@link proto.S2C_Test.verify|verify} messages.
         * @function encode
         * @memberof proto.S2C_Test
         * @static
         * @param {proto.IS2C_Test} message S2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id1 != null && Object.hasOwnProperty.call(message, "id1"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id1);
            if (message.id2 != null && Object.hasOwnProperty.call(message, "id2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id2);
            return writer;
        };

        /**
         * Encodes the specified S2C_Test message, length delimited. Does not implicitly {@link proto.S2C_Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.S2C_Test
         * @static
         * @param {proto.IS2C_Test} message S2C_Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        S2C_Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a S2C_Test message from the specified reader or buffer.
         * @function decode
         * @memberof proto.S2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.S2C_Test} S2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.S2C_Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id1 = reader.int32();
                    break;
                case 2:
                    message.id2 = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a S2C_Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.S2C_Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.S2C_Test} S2C_Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        S2C_Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a S2C_Test message.
         * @function verify
         * @memberof proto.S2C_Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        S2C_Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id1 != null && message.hasOwnProperty("id1"))
                if (!$util.isInteger(message.id1))
                    return "id1: integer expected";
            if (message.id2 != null && message.hasOwnProperty("id2"))
                if (!$util.isInteger(message.id2) && !(message.id2 && $util.isInteger(message.id2.low) && $util.isInteger(message.id2.high)))
                    return "id2: integer|Long expected";
            return null;
        };

        /**
         * Creates a S2C_Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.S2C_Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.S2C_Test} S2C_Test
         */
        S2C_Test.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.S2C_Test)
                return object;
            var message = new $root.proto.S2C_Test();
            if (object.id1 != null)
                message.id1 = object.id1 | 0;
            if (object.id2 != null)
                if ($util.Long)
                    (message.id2 = $util.Long.fromValue(object.id2)).unsigned = false;
                else if (typeof object.id2 === "string")
                    message.id2 = parseInt(object.id2, 10);
                else if (typeof object.id2 === "number")
                    message.id2 = object.id2;
                else if (typeof object.id2 === "object")
                    message.id2 = new $util.LongBits(object.id2.low >>> 0, object.id2.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a S2C_Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.S2C_Test
         * @static
         * @param {proto.S2C_Test} message S2C_Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        S2C_Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id1 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id2 = options.longs === String ? "0" : 0;
            }
            if (message.id1 != null && message.hasOwnProperty("id1"))
                object.id1 = message.id1;
            if (message.id2 != null && message.hasOwnProperty("id2"))
                if (typeof message.id2 === "number")
                    object.id2 = options.longs === String ? String(message.id2) : message.id2;
                else
                    object.id2 = options.longs === String ? $util.Long.prototype.toString.call(message.id2) : options.longs === Number ? new $util.LongBits(message.id2.low >>> 0, message.id2.high >>> 0).toNumber() : message.id2;
            return object;
        };

        /**
         * Converts this S2C_Test to JSON.
         * @function toJSON
         * @memberof proto.S2C_Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        S2C_Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return S2C_Test;
    })();

    return proto;
})();

module.exports = $root;
