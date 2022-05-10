// [NUXIBA]  Version: 123.22.2021022301 - 20212921 13:29:32  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["IntegrationEntryPoint"] = factory();
	else
		root["IntegrationEntryPoint"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SingletonWebSocket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globalWebSocketClientJsBundle = __webpack_require__(4);

var _globalLoggerServicesJsBundle = __webpack_require__(5);

var _galateaMessageService = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var webSocketClient = null;
var wsServer = null;
var _port = null;
var _keepAlive = 5000;
var _token = null;
var _secureConnection = void 0;

var SingletonWebSocket = function () {
    function SingletonWebSocket() {
        _classCallCheck(this, SingletonWebSocket);

        this._dataCall = null;
        this._currentStatus = "logout";
    }

    _createClass(SingletonWebSocket, [{
        key: 'dataCall',
        set: function set(dataCall) {
            this._dataCall = dataCall;
        },
        get: function get() {
            return this._dataCall;
        }
    }, {
        key: 'currentStatus',
        set: function set(currentStatus) {
            this._currentStatus = currentStatus;
        },
        get: function get() {
            return this._currentStatus;
        }
    }], [{
        key: 'GetToken',
        value: function GetToken() {
            return _token;
        }
    }, {
        key: 'setToken',
        value: function setToken(token) {
            _token = token;
        }
    }, {
        key: 'setwsServer',
        value: function setwsServer(server) {
            wsServer = server;
        }
    }, {
        key: 'setPort',
        value: function setPort(port) {
            _port = port;
        }
    }, {
        key: 'setKeepAlive',
        value: function setKeepAlive(_setKeepAlive) {
            _keepAlive = _setKeepAlive ? 5000 : 0;
        }
    }, {
        key: 'connect',
        value: function connect() {
            var secureConnection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            SingletonWebSocket.validate();
            _secureConnection = secureConnection;
            webSocketClient.connect(secureConnection);
        }
    }, {
        key: 'validate',
        value: function validate() {
            var _this = this;

            if (!webSocketClient) {
                webSocketClient = new _globalWebSocketClientJsBundle.WebSocketFactory().buildClient();
                webSocketClient.WSParameter.serverIP = wsServer;
                webSocketClient.WSParameter.port = _port;
                webSocketClient.WSParameter.keepAliveMessage = '{client:"integration", action:"KeepAlive", ip:"' + _token + '"}';
                webSocketClient.WSParameter.keepAliveTimeResponse = _keepAlive;
                webSocketClient.WSParameter.keepAliveTimeRequest = 30000;
                webSocketClient.WSParameter.IsReconnected = true;
                webSocketClient.WSParameter.ReconnectionTime = 3000;

                webSocketClient.WSParameter.onMessage = function (message) {
                    if (message.data !== "added") {
                        var json = JSON.parse(message.data);
                        _galateaMessageService.galateaMessageService.newMessage(json);
                    }
                };

                webSocketClient.WSParameter.onOpen = function () {
                    console.info("keepAliveMessage", webSocketClient.WSParameter.keepAliveMessage);
                    var message = { client: "integration", action: "firstConnection", ip: _token };
                    webSocketClient.send(JSON.stringify(message));
                };
                webSocketClient.WSParameter.onClose = function () {
                    console.info("Close Socket");
                    _this._currentStatus = "SocketClosed";
                    if (onAgentStatus) {
                        onAgentStatus({ currentState: _this._currentStatus });
                    }

                    setTimeout(function () {

                        webSocketClient.connect(_secureConnection);
                    }, webSocketClient.WSParameter.ReconnectionTime);
                };
                webSocketClient.WSParameter.onError = function (error) {
                    _globalLoggerServicesJsBundle.Logger.Error(error);
                    _this._currentStatus = "Error";
                    if (onAgentStatus) {
                        onAgentStatus({ currentState: _this._currentStatus });
                    }

                    setTimeout(function () {

                        webSocketClient.connect(_secureConnection);
                    }, webSocketClient.WSParameter.ReconnectionTime);

                    if (_timmerSendUserId) {
                        clearTimeout(_timmerSendUserId);
                    }
                };
            }
        }
    }, {
        key: 'send',
        value: function send(message) {
            SingletonWebSocket.validate();
            message.ip = _token;
            webSocketClient.send(JSON.stringify(message));
        }
    }, {
        key: 'setIPAddress',
        value: function setIPAddress(ipAddress) {
            this._ip = ipAddress;
        }
    }, {
        key: 'close',
        value: function close() {
            webSocketClient.close();
        }
    }, {
        key: 'ipAddress',
        get: function get() {
            return this._ip;
        }
    }]);

    return SingletonWebSocket;
}();

exports.SingletonWebSocket = SingletonWebSocket;
SingletonWebSocket._ip = null;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _agentUsername = "";

var SingletonSharedData = exports.SingletonSharedData = function () {
    function SingletonSharedData() {
        _classCallCheck(this, SingletonSharedData);
    }

    _createClass(SingletonSharedData, null, [{
        key: "clear",
        value: function clear() {
            _agentUsername = "";
        }
    }, {
        key: "username",
        set: function set(username) {
            _agentUsername = username;
            console.log("SetUsername ", _agentUsername);
        },
        get: function get() {
            return _agentUsername;
        }
    }]);

    return SingletonSharedData;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.IntegrationApiFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _singletonWebSocket = __webpack_require__(0);

var _IntegrationApi = __webpack_require__(15);

var _loginService = __webpack_require__(16);

var _callService = __webpack_require__(17);

var _callBarService = __webpack_require__(18);

var _notAvailableService = __webpack_require__(19);

var _assistedTransferService = __webpack_require__(20);

var _chatService = __webpack_require__(21);

var _callLogService = __webpack_require__(22);

var _dispositionCallService = __webpack_require__(23);

var _agentDataService = __webpack_require__(24);

var _reprogamCallService = __webpack_require__(25);

var _StateRule = __webpack_require__(26);

var _ongoingCallIvrService = __webpack_require__(36);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntegrationApiFactory = exports.IntegrationApiFactory = function () {
	function IntegrationApiFactory() {
		_classCallCheck(this, IntegrationApiFactory);
	}

	_createClass(IntegrationApiFactory, [{
		key: 'buildClient',
		value: function buildClient() {
			var params = {};
			params.serverIntegrationToken = null;
			_singletonWebSocket.SingletonWebSocket.currentStatus = "logout";
			var paramsService = { SingletonWebSocket: _singletonWebSocket.SingletonWebSocket, StateRule: _StateRule.StateRule };
			params.SingletonWebSocket = _singletonWebSocket.SingletonWebSocket;
			params.loginService = new _loginService.loginService(paramsService);
			params.callService = new _callService.callService(paramsService);
			params.notAvailableService = new _notAvailableService.notAvailableService(paramsService);
			params.callBarService = new _callBarService.callBarService(paramsService);
			params.assistedTransferService = new _assistedTransferService.assistedTransferService(paramsService);
			params.chatService = new _chatService.chatService(paramsService);
			params.callLog = new _callLogService.callLogService(paramsService);
			params.dispositionCallService = new _dispositionCallService.dispositionCallService(paramsService);
			params.agentDataService = new _agentDataService.agentDataService(paramsService);
			params.reprogamCallService = new _reprogamCallService.reprogamCallService(paramsService);
			params.ongoingCallIvrService = new _ongoingCallIvrService.ongoingCallIvrService(paramsService);
			return new _IntegrationApi.IntegrationAPI(params);
		}
	}]);

	return IntegrationApiFactory;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [NUXIBA]  Version: 2021.1.1 - 2021-01-24 00:04:39  
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof3(exports)) === 'object' && ( false ? 'undefined' : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object') exports["EntryPoint"] = factory();else root["EntryPoint"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WebSocketFactory = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _WebSocketClient = __webpack_require__(1);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var WebSocketFactory = exports.WebSocketFactory = function () {
        function WebSocketFactory() {
          _classCallCheck(this, WebSocketFactory);
        }

        _createClass(WebSocketFactory, [{
          key: "buildClient",
          value: function buildClient() {
            return new _WebSocketClient.WebSocketClient();
          }
        }]);

        return WebSocketFactory;
      }();

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WebSocketClient = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _Logger = __webpack_require__(2);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var instance = null;
      var connection = null;

      var WebSocketClient = exports.WebSocketClient = function () {
        function WebSocketClient() {
          _classCallCheck(this, WebSocketClient);

          if (!instance) {
            _Logger.Logger.Trace("WebSocketClient constructor");
            this.WSParameter = {
              serverIP: "",
              port: "",
              keepAliveTimeResponse: 0,
              keepAliveTimeRequest: 30000,
              keepAliveMessage: "ping",
              onError: function onError(error) {},
              onDisconnected: function onDisconnected() {},
              onConnected: function onConnected() {},
              onMessage: function onMessage(message) {},
              onOpen: function onOpen() {},
              onClose: function onClose() {}
            };
            this.tm = null;
            this.timerPing = null;
          }
          return instance;
        }

        _createClass(WebSocketClient, [{
          key: "setUserType",
          value: function setUserType(value) {
            _Logger.Logger.setUsertype(value);
          }
        }, {
          key: "setUserId",
          value: function setUserId(value) {
            _Logger.Logger.setUserId(value);
          }
        }, {
          key: "manageKeepAlive",
          value: function manageKeepAlive() {
            if (this.WSParameter.keepAliveTimeResponse > 0 && connection.readyState === 1) {
              _Logger.Logger.Trace("Keep Alive configured");
              _Logger.Logger.Trace("Sending every  [" + this.WSParameter.keepAliveTimeRequest + "] milisenconds");
              _Logger.Logger.Trace("Response expected within  [" + this.WSParameter.keepAliveTimeResponse + "] milisenconds");
              this.ping();
            }
          }
        }, {
          key: "ping",
          value: function ping() {
            _Logger.Logger.Trace("[WebSocketClient] Ping", this.WSParameter.keepAliveMessage);
            var _this = this;
            this.send(this.WSParameter.keepAliveMessage);
            this.tm = setTimeout(function () {
              _Logger.Logger.Trace("Closed by ping");
              _this.executeOnClose();
              connection.close(1000, "Close not recieve ping server");
              _this.cleanData();
            }, this.WSParameter.keepAliveTimeResponse + 250);
          }
        }, {
          key: "pong",
          value: function pong() {
            _Logger.Logger.Trace("[WebSocketClient] Pong");
            var _this = this;
            clearTimeout(this.tm);
            this.timerPing = setTimeout(function () {
              _this.ping();
            }, this.WSParameter.keepAliveTimeRequest);
          }
        }, {
          key: "connect",
          value: function connect() {
            var secureConnection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            // if user is running mozilla then use it's built-in WebSocket
            window.WebboSocket = window.WebSocket || window.MozWebSocket;

            // if browser doesn't support WebSocket, just show some notification and exit
            if (!window.WebSocket) {
              if (_this.WSParameter.onError) {
                this.WSParameter.onError(" [WebSocketClient] Sorry, but your browser doesn\'t support WebSockets.");
              }
              return;
            }
            // open connection
            var connectionType = secureConnection ? "wss" : "ws";
            connection = new WebSocket(connectionType + '://' + this.WSParameter.serverIP + ':' + this.WSParameter.port);
            _Logger.Logger.Trace("Connection created ", connection);
            var _this = this;

            connection.onopen = function () {
              if (_this.WSParameter.onOpen) {
                _Logger.Logger.Trace(" OnOpen");
                _this.manageKeepAlive();
                _this.WSParameter.onOpen();
              }
            };

            connection.onerror = function (error) {
              if (_this.WSParameter.onError) {
                _Logger.Logger.Error(" OnError ", error);
                _this.WSParameter.onError(error);
              }
            };

            connection.onmessage = function (message) {
              if (message.data === "pong") {
                _this.pong();
              } else if (_this.WSParameter.onMessage) {
                _this.WSParameter.onMessage(message);
              }
            };
            connection.onclose = function () {
              _this.executeOnClose();
            };
          }
        }, {
          key: "executeOnClose",
          value: function executeOnClose() {
            if (this.WSParameter.onClose) {
              this.WSParameter.onClose();
            }
          }
        }, {
          key: "send",
          value: function send(msg) {
            if (connection && msg && connection.readyState === 1) {
              _Logger.Logger.Trace("Sending: ", msg);
              connection.send(msg);
            }
          }
        }, {
          key: "close",
          value: function close() {
            if (connection) {
              connection.close();
              this.cleanData();
              _Logger.Logger.Trace("Closed connection");
            }
          }
        }, {
          key: "cleanData",
          value: function cleanData() {
            connection = null;
            clearTimeout(this.tm);
            clearTimeout(this.timerPing);
            _Logger.Logger.Trace("Data cleaned");
          }
        }]);

        return WebSocketClient;
      }();

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logger = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _globalLoggerServicesJsBundle = __webpack_require__(3);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      _globalLoggerServicesJsBundle.LoggerInstance.setApplication("Web-Socket-Client");

      var Logger = exports.Logger = function () {
        function Logger() {
          _classCallCheck(this, Logger);
        }

        _createClass(Logger, null, [{
          key: 'setUserType',
          value: function setUserType(value) {
            _globalLoggerServicesJsBundle.LoggerInstance.setUsertype(value);
          }
        }, {
          key: 'setUserId',
          value: function setUserId(value) {
            _globalLoggerServicesJsBundle.LoggerInstance.setUserId(value);
          }
        }, {
          key: 'Group',
          value: function Group(label) {
            _globalLoggerServicesJsBundle.LoggerInstance.Group(label);
          }
        }, {
          key: 'GroupEnd',
          value: function GroupEnd() {
            _globalLoggerServicesJsBundle.LoggerInstance.GroupEnd();
          }
        }, {
          key: 'Trace',
          value: function Trace() {
            for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
              msg[_key] = arguments[_key];
            }

            _globalLoggerServicesJsBundle.LoggerInstance.Trace(['[Web-Socket-Client]'].concat(msg));
          }
        }, {
          key: 'Debug',
          value: function Debug() {
            for (var _len2 = arguments.length, msg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              msg[_key2] = arguments[_key2];
            }

            _globalLoggerServicesJsBundle.LoggerInstance.Debug(['[Web-Socket-Client]'].concat(msg));
          }
        }, {
          key: 'Warning',
          value: function Warning() {
            for (var _len3 = arguments.length, msg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              msg[_key3] = arguments[_key3];
            }

            _globalLoggerServicesJsBundle.LoggerInstance.Warning(['[Web-Socket-Client]'].concat(msg));
          }
        }, {
          key: 'Info',
          value: function Info() {
            for (var _len4 = arguments.length, msg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              msg[_key4] = arguments[_key4];
            }

            _globalLoggerServicesJsBundle.LoggerInstance.Info.apply(_globalLoggerServicesJsBundle.LoggerInstance, ['[Web-Socket-Client] '].concat(msg));
          }
        }, {
          key: 'Error',
          value: function Error() {
            for (var _len5 = arguments.length, msg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              msg[_key5] = arguments[_key5];
            }

            _globalLoggerServicesJsBundle.LoggerInstance.Error.apply(_globalLoggerServicesJsBundle.LoggerInstance, ['[Web-Socket-Client] '].concat(msg));
          }
        }]);

        return Logger;
      }();

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

        var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
        };

        // [NUXIBA]  Version: 2021.1.6 - 2021-01-23 23:13:59  
        (function webpackUniversalModuleDefinition(root, factory) {
          if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["LoggerEntryPoint"] = factory();else root["LoggerEntryPoint"] = factory();
        })(typeof self !== 'undefined' ? self : undefined, function () {
          return (/******/function (modules) {
              // webpackBootstrap
              /******/ // The module cache
              /******/var installedModules = {};
              /******/
              /******/ // The require function
              /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                  /******/return installedModules[moduleId].exports;
                  /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                  /******/i: moduleId,
                  /******/l: false,
                  /******/exports: {}
                  /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
              }
              /******/
              /******/
              /******/ // expose the modules object (__webpack_modules__)
              /******/__webpack_require__.m = modules;
              /******/
              /******/ // expose the module cache
              /******/__webpack_require__.c = installedModules;
              /******/
              /******/ // define getter function for harmony exports
              /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                  /******/Object.defineProperty(exports, name, {
                    /******/configurable: false,
                    /******/enumerable: true,
                    /******/get: getter
                    /******/ });
                  /******/
                }
                /******/
              };
              /******/
              /******/ // getDefaultExport function for compatibility with non-harmony modules
              /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                  return module['default'];
                } :
                /******/function getModuleExports() {
                  return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
              };
              /******/
              /******/ // Object.prototype.hasOwnProperty.call
              /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
              };
              /******/
              /******/ // __webpack_public_path__
              /******/__webpack_require__.p = "";
              /******/
              /******/ // Load entry module and return exports
              /******/return __webpack_require__(__webpack_require__.s = 3);
              /******/
            }(
            /************************************************************************/
            /******/[
            /* 0 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var bind = __webpack_require__(5);
              var isBuffer = __webpack_require__(14);

              /*global toString:true*/

              // utils is a library of generic helper functions non-specific to axios

              var toString = Object.prototype.toString;

              /**
               * Determine if a value is an Array
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is an Array, otherwise false
               */
              function isArray(val) {
                return toString.call(val) === '[object Array]';
              }

              /**
               * Determine if a value is an ArrayBuffer
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is an ArrayBuffer, otherwise false
               */
              function isArrayBuffer(val) {
                return toString.call(val) === '[object ArrayBuffer]';
              }

              /**
               * Determine if a value is a FormData
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is an FormData, otherwise false
               */
              function isFormData(val) {
                return typeof FormData !== 'undefined' && val instanceof FormData;
              }

              /**
               * Determine if a value is a view on an ArrayBuffer
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
               */
              function isArrayBufferView(val) {
                var result;
                if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
                  result = ArrayBuffer.isView(val);
                } else {
                  result = val && val.buffer && val.buffer instanceof ArrayBuffer;
                }
                return result;
              }

              /**
               * Determine if a value is a String
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a String, otherwise false
               */
              function isString(val) {
                return typeof val === 'string';
              }

              /**
               * Determine if a value is a Number
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a Number, otherwise false
               */
              function isNumber(val) {
                return typeof val === 'number';
              }

              /**
               * Determine if a value is undefined
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if the value is undefined, otherwise false
               */
              function isUndefined(val) {
                return typeof val === 'undefined';
              }

              /**
               * Determine if a value is an Object
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is an Object, otherwise false
               */
              function isObject(val) {
                return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object';
              }

              /**
               * Determine if a value is a Date
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a Date, otherwise false
               */
              function isDate(val) {
                return toString.call(val) === '[object Date]';
              }

              /**
               * Determine if a value is a File
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a File, otherwise false
               */
              function isFile(val) {
                return toString.call(val) === '[object File]';
              }

              /**
               * Determine if a value is a Blob
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a Blob, otherwise false
               */
              function isBlob(val) {
                return toString.call(val) === '[object Blob]';
              }

              /**
               * Determine if a value is a Function
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a Function, otherwise false
               */
              function isFunction(val) {
                return toString.call(val) === '[object Function]';
              }

              /**
               * Determine if a value is a Stream
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a Stream, otherwise false
               */
              function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
              }

              /**
               * Determine if a value is a URLSearchParams object
               *
               * @param {Object} val The value to test
               * @returns {boolean} True if value is a URLSearchParams object, otherwise false
               */
              function isURLSearchParams(val) {
                return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
              }

              /**
               * Trim excess whitespace off the beginning and end of a string
               *
               * @param {String} str The String to trim
               * @returns {String} The String freed of excess whitespace
               */
              function trim(str) {
                return str.replace(/^\s*/, '').replace(/\s*$/, '');
              }

              /**
               * Determine if we're running in a standard browser environment
               *
               * This allows axios to run in a web worker, and react-native.
               * Both environments support XMLHttpRequest, but not fully standard globals.
               *
               * web workers:
               *  typeof window -> undefined
               *  typeof document -> undefined
               *
               * react-native:
               *  navigator.product -> 'ReactNative'
               */
              function isStandardBrowserEnv() {
                if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
                  return false;
                }
                return typeof window !== 'undefined' && typeof document !== 'undefined';
              }

              /**
               * Iterate over an Array or an Object invoking a function for each item.
               *
               * If `obj` is an Array callback will be called passing
               * the value, index, and complete array for each item.
               *
               * If 'obj' is an Object callback will be called passing
               * the value, key, and complete object for each property.
               *
               * @param {Object|Array} obj The object to iterate
               * @param {Function} fn The callback to invoke for each item
               */
              function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === 'undefined') {
                  return;
                }

                // Force an array if not already something iterable
                if ((typeof obj === 'undefined' ? 'undefined' : _typeof2(obj)) !== 'object') {
                  /*eslint no-param-reassign:0*/
                  obj = [obj];
                }

                if (isArray(obj)) {
                  // Iterate over array values
                  for (var i = 0, l = obj.length; i < l; i++) {
                    fn.call(null, obj[i], i, obj);
                  }
                } else {
                  // Iterate over object keys
                  for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                      fn.call(null, obj[key], key, obj);
                    }
                  }
                }
              }

              /**
               * Accepts varargs expecting each argument to be an object, then
               * immutably merges the properties of each object and returns result.
               *
               * When multiple objects contain the same key the later object in
               * the arguments list will take precedence.
               *
               * Example:
               *
               * ```js
               * var result = merge({foo: 123}, {foo: 456});
               * console.log(result.foo); // outputs 456
               * ```
               *
               * @param {Object} obj1 Object to merge
               * @returns {Object} Result of all merge properties
               */
              function merge() /* obj1, obj2, obj3, ... */{
                var result = {};
                function assignValue(val, key) {
                  if (_typeof2(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object') {
                    result[key] = merge(result[key], val);
                  } else {
                    result[key] = val;
                  }
                }

                for (var i = 0, l = arguments.length; i < l; i++) {
                  forEach(arguments[i], assignValue);
                }
                return result;
              }

              /**
               * Extends object a by mutably adding to it the properties of object b.
               *
               * @param {Object} a The object to be extended
               * @param {Object} b The object to copy properties from
               * @param {Object} thisArg The object to bind function to
               * @return {Object} The resulting value of object a
               */
              function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                  if (thisArg && typeof val === 'function') {
                    a[key] = bind(val, thisArg);
                  } else {
                    a[key] = val;
                  }
                });
                return a;
              }

              module.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                extend: extend,
                trim: trim
              };

              /***/
            },
            /* 1 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var instance = null;

              var Constants = exports.Constants = function Constants() {
                _classCallCheck(this, Constants);

                if (!instance) {
                  instance = this;
                }
              };

              Constants._LOGGER_VAR_WINDOW = "NuxibaLogger";
              Constants._LOGGER_CONFIGURATION_FILE_LOCALE = './logger.json';
              Constants._LOGGER_CONFIGURATION_FILE_REMOTE = 'logger.json';
              Constants._LOGGER_CONFIGURATION_FILE_ENCODE = 'utf8';
              Constants._LOGGER_CONFIGURATION_ASSIGNED = window[Constants._LOGGER_VAR_WINDOW] ? true : false;
              Constants._LOG_LEVELS = {
                "TRACE": { logLevel: 0 },
                "DEBUG": { logLevel: 1 },
                "INFO": { logLevel: 2 },
                "WARN": { logLevel: 3 },
                "ERROR": { logLevel: 4 }
              };
              Constants._Log_CONSOLE = {
                "TRACE": console.log,
                "DEBUG": console.log,
                "INFO": console.info,
                "WARN": console.warn,
                "ERROR": console.error
              };
              Constants._CONFIGURATIONS = {
                "_ENABLE_DEFAULT": true,
                "_ENABLE_AJAX": true,
                "_USE_WINDOW_ORIGIN": true,
                "_SERVER": "http://127.0.0.1",
                "_DOMAIN": "/LoggerWS/api/Logger",
                "_SEVERITY": "INFO",
                "_SEVERITY_CONSOLE": "INFO",
                "_NUMBER_ATTEMP_POST": 10,
                "_FILTER_USER_POST": [],
                "_FILTER_APP_POST": []
              };
              Constants._REST = {
                _POST_METHOD: "POST",
                _MODE: "cors",
                _CONTENT_TYPE: "content-type",
                _APPLICATION_JSON: "application/json"
              };

              /***/
            },
            /* 2 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";
              /* WEBPACK VAR INJECTION */

              (function (process) {

                var utils = __webpack_require__(0);
                var normalizeHeaderName = __webpack_require__(17);

                var DEFAULT_CONTENT_TYPE = {
                  'Content-Type': 'application/x-www-form-urlencoded'
                };

                function setContentTypeIfUnset(headers, value) {
                  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                    headers['Content-Type'] = value;
                  }
                }

                function getDefaultAdapter() {
                  var adapter;
                  if (typeof XMLHttpRequest !== 'undefined') {
                    // For browsers use XHR adapter
                    adapter = __webpack_require__(6);
                  } else if (typeof process !== 'undefined') {
                    // For node use HTTP adapter
                    adapter = __webpack_require__(6);
                  }
                  return adapter;
                }

                var defaults = {
                  adapter: getDefaultAdapter(),

                  transformRequest: [function transformRequest(data, headers) {
                    normalizeHeaderName(headers, 'Content-Type');
                    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                      return data;
                    }
                    if (utils.isArrayBufferView(data)) {
                      return data.buffer;
                    }
                    if (utils.isURLSearchParams(data)) {
                      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                      return data.toString();
                    }
                    if (utils.isObject(data)) {
                      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                      return JSON.stringify(data);
                    }
                    return data;
                  }],

                  transformResponse: [function transformResponse(data) {
                    /*eslint no-param-reassign:0*/
                    if (typeof data === 'string') {
                      try {
                        data = JSON.parse(data);
                      } catch (e) {/* Ignore */}
                    }
                    return data;
                  }],

                  /**
                   * A timeout in milliseconds to abort a request. If set to 0 (default) a
                   * timeout is not created.
                   */
                  timeout: 0,

                  xsrfCookieName: 'XSRF-TOKEN',
                  xsrfHeaderName: 'X-XSRF-TOKEN',

                  maxContentLength: -1,

                  validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                  }
                };

                defaults.headers = {
                  common: {
                    'Accept': 'application/json, text/plain, */*'
                  }
                };

                utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
                  defaults.headers[method] = {};
                });

                utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
                });

                module.exports = defaults;

                /* WEBPACK VAR INJECTION */
              }).call(exports, __webpack_require__(16));

              /***/
            },
            /* 3 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.LoggerInstance = undefined;

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _LoggerDispatcher = __webpack_require__(11);

              var _Constants = __webpack_require__(1);

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var usertype = 'AGENT';
              var userId = "";
              var application = "";

              var LoggerInstance = function () {
                function LoggerInstance() {
                  _classCallCheck(this, LoggerInstance);
                }

                _createClass(LoggerInstance, null, [{
                  key: 'setUsertype',
                  value: function setUsertype(value) {
                    usertype = value;
                  }
                }, {
                  key: 'setUserId',
                  value: function setUserId(value) {
                    userId = value;
                  }
                }, {
                  key: 'getUserId',
                  value: function getUserId() {
                    return userId;
                  }
                }, {
                  key: 'setApplication',
                  value: function setApplication(value) {
                    application = value;
                  }
                }, {
                  key: 'getApplication',
                  value: function getApplication() {
                    return application;
                  }
                }, {
                  key: 'SetUseServerWithLocation',
                  value: function SetUseServerWithLocation(useWindowLocation) {
                    window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_LOCATION = useWindowLocation;
                  }
                }, {
                  key: 'addUserId',
                  value: function addUserId(msg) {
                    if (userId) {
                      var userIdPrint = '[UserId:' + userId + ']';
                      msg.unshift(userIdPrint);
                    }
                  }
                }, {
                  key: 'Group',
                  value: function Group(label) {
                    console.group(label);
                  }
                }, {
                  key: 'GroupEnd',
                  value: function GroupEnd() {
                    console.groupEnd();
                  }
                }, {
                  key: 'Trace',
                  value: function Trace() {
                    for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
                      msg[_key] = arguments[_key];
                    }

                    _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Trace', ['[UserId:' + userId + ']'].concat(msg));
                  }
                }, {
                  key: 'Debug',
                  value: function Debug() {
                    for (var _len2 = arguments.length, msg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      msg[_key2] = arguments[_key2];
                    }

                    LoggerInstance.addUserId(msg);
                    _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Debug', ['[UserId:' + userId + ']'].concat(msg));
                  }
                }, {
                  key: 'Warning',
                  value: function Warning() {
                    for (var _len3 = arguments.length, msg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                      msg[_key3] = arguments[_key3];
                    }

                    LoggerInstance.addUserId(msg);
                    _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Warn', ['[UserId:' + userId + ']'].concat(msg));
                  }
                }, {
                  key: 'Warn',
                  value: function Warn() {
                    for (var _len4 = arguments.length, msg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                      msg[_key4] = arguments[_key4];
                    }

                    LoggerInstance.Warning(msg);
                  }
                }, {
                  key: 'Info',
                  value: function Info() {
                    for (var _len5 = arguments.length, msg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                      msg[_key5] = arguments[_key5];
                    }

                    LoggerInstance.addUserId(msg);
                    _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Info', ['[UserId:' + userId + ']'].concat(msg));
                  }
                }, {
                  key: 'Error',
                  value: function Error() {
                    for (var _len6 = arguments.length, msg = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                      msg[_key6] = arguments[_key6];
                    }

                    LoggerInstance.addUserId(msg);
                    _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Error', ['[UserId:' + userId + ']'].concat(msg));
                  }
                }, {
                  key: 'LevelConsole',
                  get: function get() {
                    return window[_Constants.Constants._LOGGER_VAR_WINDOW]._SEVERITY_CONSOLE;
                  }
                }]);

                return LoggerInstance;
              }();

              exports.LoggerInstance = LoggerInstance;

              /***/
            },
            /* 4 */
            /***/function (module, exports, __webpack_require__) {

              module.exports = __webpack_require__(13);

              /***/
            },
            /* 5 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              module.exports = function bind(fn, thisArg) {
                return function wrap() {
                  var args = new Array(arguments.length);
                  for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                  }
                  return fn.apply(thisArg, args);
                };
              };

              /***/
            },
            /* 6 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);
              var settle = __webpack_require__(18);
              var buildURL = __webpack_require__(20);
              var parseHeaders = __webpack_require__(21);
              var isURLSameOrigin = __webpack_require__(22);
              var createError = __webpack_require__(7);

              module.exports = function xhrAdapter(config) {
                return new Promise(function dispatchXhrRequest(resolve, reject) {
                  var requestData = config.data;
                  var requestHeaders = config.headers;

                  if (utils.isFormData(requestData)) {
                    delete requestHeaders['Content-Type']; // Let the browser set it
                  }

                  var request = new XMLHttpRequest();

                  // HTTP basic authentication
                  if (config.auth) {
                    var username = config.auth.username || '';
                    var password = config.auth.password || '';
                    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                  }

                  request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

                  // Set the request timeout in MS
                  request.timeout = config.timeout;

                  // Listen for ready state
                  request.onreadystatechange = function handleLoad() {
                    if (!request || request.readyState !== 4) {
                      return;
                    }

                    // The request errored out and we didn't get a response, this will be
                    // handled by onerror instead
                    // With one exception: request that using file: protocol, most browsers
                    // will return status as 0 even though it's a successful request
                    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                      return;
                    }

                    // Prepare the response
                    var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
                    var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
                    var response = {
                      data: responseData,
                      status: request.status,
                      statusText: request.statusText,
                      headers: responseHeaders,
                      config: config,
                      request: request
                    };

                    settle(resolve, reject, response);

                    // Clean up request
                    request = null;
                  };

                  // Handle low level network errors
                  request.onerror = function handleError() {
                    // Real errors are hidden from us by the browser
                    // onerror should only fire if it's a network error
                    reject(createError('Network Error', config, null, request));

                    // Clean up request
                    request = null;
                  };

                  // Handle timeout
                  request.ontimeout = function handleTimeout() {
                    reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

                    // Clean up request
                    request = null;
                  };

                  // Add xsrf header
                  // This is only done if running in a standard browser environment.
                  // Specifically not if we're in a web worker, or react-native.
                  if (utils.isStandardBrowserEnv()) {
                    var cookies = __webpack_require__(23);

                    // Add xsrf header
                    var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

                    if (xsrfValue) {
                      requestHeaders[config.xsrfHeaderName] = xsrfValue;
                    }
                  }

                  // Add headers to the request
                  if ('setRequestHeader' in request) {
                    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                      if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                        // Remove Content-Type if data is undefined
                        delete requestHeaders[key];
                      } else {
                        // Otherwise add header to the request
                        request.setRequestHeader(key, val);
                      }
                    });
                  }

                  // Add withCredentials to request if needed
                  if (config.withCredentials) {
                    request.withCredentials = true;
                  }

                  // Add responseType to request if needed
                  if (config.responseType) {
                    try {
                      request.responseType = config.responseType;
                    } catch (e) {
                      // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                      // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                      if (config.responseType !== 'json') {
                        throw e;
                      }
                    }
                  }

                  // Handle progress if needed
                  if (typeof config.onDownloadProgress === 'function') {
                    request.addEventListener('progress', config.onDownloadProgress);
                  }

                  // Not all browsers support upload events
                  if (typeof config.onUploadProgress === 'function' && request.upload) {
                    request.upload.addEventListener('progress', config.onUploadProgress);
                  }

                  if (config.cancelToken) {
                    // Handle cancellation
                    config.cancelToken.promise.then(function onCanceled(cancel) {
                      if (!request) {
                        return;
                      }

                      request.abort();
                      reject(cancel);
                      // Clean up request
                      request = null;
                    });
                  }

                  if (requestData === undefined) {
                    requestData = null;
                  }

                  // Send the request
                  request.send(requestData);
                });
              };

              /***/
            },
            /* 7 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var enhanceError = __webpack_require__(19);

              /**
               * Create an Error with the specified message, config, error code, request and response.
               *
               * @param {string} message The error message.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The created error.
               */
              module.exports = function createError(message, config, code, request, response) {
                var error = new Error(message);
                return enhanceError(error, config, code, request, response);
              };

              /***/
            },
            /* 8 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              module.exports = function isCancel(value) {
                return !!(value && value.__CANCEL__);
              };

              /***/
            },
            /* 9 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              /**
               * A `Cancel` is an object that is thrown when an operation is canceled.
               *
               * @class
               * @param {string=} message The message.
               */

              function Cancel(message) {
                this.message = message;
              }

              Cancel.prototype.toString = function toString() {
                return 'Cancel' + (this.message ? ': ' + this.message : '');
              };

              Cancel.prototype.__CANCEL__ = true;

              module.exports = Cancel;

              /***/
            },
            /* 10 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.LoggerUtils = undefined;

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
              };

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _Constants = __webpack_require__(1);

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var LoggerUtils = function () {
                function LoggerUtils() {
                  _classCallCheck(this, LoggerUtils);
                }

                _createClass(LoggerUtils, null, [{
                  key: "GetLogLevelBySeverity",
                  value: function GetLogLevelBySeverity(severity) {
                    var logLevel = 1;
                    severity = severity.toUpperCase();
                    if (_Constants.Constants._LOG_LEVELS[severity]) {
                      logLevel = _Constants.Constants._LOG_LEVELS[severity].logLevel;
                    }
                    return logLevel;
                  }
                }, {
                  key: "IsAllowedRemoteToLogBySeverity",
                  value: function IsAllowedRemoteToLogBySeverity(severity) {
                    return LoggerUtils.GetLogLevelBySeverity(severity) >= LoggerUtils.GetCurrentRemoteSeverityLevelConfigured();
                  }
                }, {
                  key: "GetCurrentRemoteSeverityLevelConfigured",
                  value: function GetCurrentRemoteSeverityLevelConfigured() {
                    return LoggerUtils.GetLogLevelBySeverity(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SEVERITY"]);
                  }
                }, {
                  key: "IsAllowedConsoleToLogBySeverity",
                  value: function IsAllowedConsoleToLogBySeverity(severity) {
                    return LoggerUtils.GetLogLevelBySeverity(severity) >= LoggerUtils.GetCurrentConsoleSeverityLevelConfigured();
                  }
                }, {
                  key: "GetCurrentConsoleSeverityLevelConfigured",
                  value: function GetCurrentConsoleSeverityLevelConfigured() {
                    return LoggerUtils.GetLogLevelBySeverity(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SEVERITY_CONSOLE"]);
                  }
                }, {
                  key: "ToStringMessage",
                  value: function ToStringMessage() {
                    var messageString = "";

                    for (var _len = arguments.length, message = Array(_len), _key = 0; _key < _len; _key++) {
                      message[_key] = arguments[_key];
                    }

                    message.forEach(function (entry) {
                      messageString += LoggerUtils.ToStringObject(entry);
                    });
                    return messageString;
                  }
                }, {
                  key: "ToStringObject",
                  value: function ToStringObject(entry) {
                    return LoggerUtils.IsObject(entry) ? '\n' + LoggerUtils.JsonToString(entry) : entry;
                  }
                }, {
                  key: "IsObject",
                  value: function IsObject(value) {
                    return value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value.constructor === Object;
                  }
                }, {
                  key: "JsonToString",
                  value: function JsonToString(entry) {
                    var seen = [];
                    var jsonString = JSON.stringify(entry, function (key, val) {
                      if (val && (typeof val === "undefined" ? "undefined" : _typeof(val)) == "object") {
                        seen.push(val);
                      }
                      return val;
                    }, 2);

                    return jsonString;
                  }
                }]);

                return LoggerUtils;
              }();

              exports.LoggerUtils = LoggerUtils;

              /***/
            },
            /* 11 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.LoggerDispatcher = undefined;

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _LoggerRestClient = __webpack_require__(12);

              var _Constants = __webpack_require__(1);

              var _LoggerUtils = __webpack_require__(10);

              var _LoggerConfigurator = __webpack_require__(31);

              var _LoggerInstance = __webpack_require__(3);

              function _toConsumableArray(arr) {
                if (Array.isArray(arr)) {
                  for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                  }return arr2;
                } else {
                  return Array.from(arr);
                }
              }

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var LoggerDispatcher = function () {
                function LoggerDispatcher() {
                  _classCallCheck(this, LoggerDispatcher);
                }

                _createClass(LoggerDispatcher, null, [{
                  key: 'Dispatch',
                  value: function Dispatch(usertype, severity, message) {
                    _LoggerConfigurator.LoggerConfigurator.Init(function () {
                      LoggerDispatcher.DefaultOutput.apply(LoggerDispatcher, [usertype, severity].concat(_toConsumableArray(message)));
                      LoggerDispatcher.RemoteOutput.apply(LoggerDispatcher, [usertype, severity].concat(_toConsumableArray(message)));
                    });
                  }
                }, {
                  key: 'RemoteOutput',
                  value: function RemoteOutput(usertype, severity) {
                    if (window[_Constants.Constants._LOGGER_VAR_WINDOW] && window[_Constants.Constants._LOGGER_VAR_WINDOW]["_ENABLE_AJAX"] && _LoggerUtils.LoggerUtils.IsAllowedRemoteToLogBySeverity(severity)) {
                      for (var _len = arguments.length, message = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                        message[_key - 2] = arguments[_key];
                      }

                      if (severity.toUpperCase() === "WARN" || severity.toUpperCase() === "ERROR") {
                        _LoggerRestClient.LoggerRestClient.log(usertype, severity, '[' + usertype + '] ' + message);
                      } else {
                        var isEmptyFilterUser = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_USER_POST.length === 0;
                        var isEmptyFilterApp = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_APP_POST.length === 0;

                        if (isEmptyFilterUser && isEmptyFilterApp) {
                          _LoggerRestClient.LoggerRestClient.log.apply(_LoggerRestClient.LoggerRestClient, [usertype, severity].concat(message));
                        } else {

                          var containtUserId = true;
                          var containtApp = true;

                          if (!isEmptyFilterUser) {
                            containtUserId = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_USER_POST.find(function (ele) {
                              return ele === _LoggerInstance.LoggerInstance.getUserId();
                            });
                          }
                          if (!isEmptyFilterApp) {
                            containtApp = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_APP_POST.find(function (ele) {
                              return ele === _LoggerInstance.LoggerInstance.getApplication();
                            });
                          }

                          if (containtUserId && containtApp) {
                            _LoggerRestClient.LoggerRestClient.log(usertype, severity, '[' + usertype + '] ' + message);
                          }
                        }
                      }
                    }
                  }
                }, {
                  key: 'DefaultOutput',
                  value: function DefaultOutput(usertype, severity) {
                    severity = severity.toUpperCase();
                    if (window[_Constants.Constants._LOGGER_VAR_WINDOW] && window[_Constants.Constants._LOGGER_VAR_WINDOW]._ENABLE_DEFAULT && _LoggerUtils.LoggerUtils.IsAllowedConsoleToLogBySeverity(severity)) {
                      var _consoleLogLevel;

                      var consoleLogLevel = console.log;
                      if (_Constants.Constants._Log_CONSOLE[severity]) {
                        consoleLogLevel = _Constants.Constants._Log_CONSOLE[severity];
                      }
                      var time = new Date().toLocaleTimeString();

                      for (var _len2 = arguments.length, message = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                        message[_key2 - 2] = arguments[_key2];
                      }

                      (_consoleLogLevel = consoleLogLevel).call.apply(_consoleLogLevel, [null, '[' + time + '][' + severity + '][' + usertype + ']'].concat(message));
                    }
                  }
                }]);

                return LoggerDispatcher;
              }();

              exports.LoggerDispatcher = LoggerDispatcher;

              /***/
            },
            /* 12 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.LoggerRestClient = undefined;

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _axios = __webpack_require__(4);

              var _axios2 = _interopRequireDefault(_axios);

              var _Constants = __webpack_require__(1);

              var _LoggerUtils = __webpack_require__(10);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var numberAttemp = 0;
              var numMessageWarn = true;

              var LoggerRestClient = function () {
                function LoggerRestClient() {
                  _classCallCheck(this, LoggerRestClient);
                }

                _createClass(LoggerRestClient, null, [{
                  key: 'log',
                  value: function log(usertype, severity) {
                    if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._ENABLE_AJAX) {
                      if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._NUMBER_ATTEMP_POST === 0 || numberAttemp < window[_Constants.Constants._LOGGER_VAR_WINDOW]._NUMBER_ATTEMP_POST) {

                        var serverUrl = new URL(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SERVER"]);
                        var server = new URL(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_DOMAIN"], serverUrl);

                        for (var _len = arguments.length, message = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                          message[_key - 2] = arguments[_key];
                        }

                        var msg = _LoggerUtils.LoggerUtils.ToStringMessage(message);
                        _axios2.default.post(server, { UserType: usertype, Message: msg, Severity: severity }).then(function () {
                          numberAttemp = 0;
                        }).catch(function (error) {
                          numberAttemp++;
                          console.warn("It was not possible to send the message server:", server, error);
                        });
                      } else {
                        if (numMessageWarn) {
                          numMessageWarn = false;
                          console.warn("number of attempts to overcome Api web is necessary to check the configuration file for logger.json");
                        }
                      }
                    }
                  }
                }]);

                return LoggerRestClient;
              }();

              exports.LoggerRestClient = LoggerRestClient;

              /***/
            },
            /* 13 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);
              var bind = __webpack_require__(5);
              var Axios = __webpack_require__(15);
              var defaults = __webpack_require__(2);

              /**
               * Create an instance of Axios
               *
               * @param {Object} defaultConfig The default config for the instance
               * @return {Axios} A new instance of Axios
               */
              function createInstance(defaultConfig) {
                var context = new Axios(defaultConfig);
                var instance = bind(Axios.prototype.request, context);

                // Copy axios.prototype to instance
                utils.extend(instance, Axios.prototype, context);

                // Copy context to instance
                utils.extend(instance, context);

                return instance;
              }

              // Create the default instance to be exported
              var axios = createInstance(defaults);

              // Expose Axios class to allow class inheritance
              axios.Axios = Axios;

              // Factory for creating new instances
              axios.create = function create(instanceConfig) {
                return createInstance(utils.merge(defaults, instanceConfig));
              };

              // Expose Cancel & CancelToken
              axios.Cancel = __webpack_require__(9);
              axios.CancelToken = __webpack_require__(29);
              axios.isCancel = __webpack_require__(8);

              // Expose all/spread
              axios.all = function all(promises) {
                return Promise.all(promises);
              };
              axios.spread = __webpack_require__(30);

              module.exports = axios;

              // Allow use of default import syntax in TypeScript
              module.exports.default = axios;

              /***/
            },
            /* 14 */
            /***/function (module, exports) {

              /*!
               * Determine if an object is a Buffer
               *
               * @author   Feross Aboukhadijeh <https://feross.org>
               * @license  MIT
               */

              module.exports = function isBuffer(obj) {
                return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
              };

              /***/
            },
            /* 15 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var defaults = __webpack_require__(2);
              var utils = __webpack_require__(0);
              var InterceptorManager = __webpack_require__(24);
              var dispatchRequest = __webpack_require__(25);

              /**
               * Create a new instance of Axios
               *
               * @param {Object} instanceConfig The default config for the instance
               */
              function Axios(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                  request: new InterceptorManager(),
                  response: new InterceptorManager()
                };
              }

              /**
               * Dispatch a request
               *
               * @param {Object} config The config specific for this request (merged with this.defaults)
               */
              Axios.prototype.request = function request(config) {
                /*eslint no-param-reassign:0*/
                // Allow for axios('example/url'[, config]) a la fetch API
                if (typeof config === 'string') {
                  config = utils.merge({
                    url: arguments[0]
                  }, arguments[1]);
                }

                config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
                config.method = config.method.toLowerCase();

                // Hook up interceptors middleware
                var chain = [dispatchRequest, undefined];
                var promise = Promise.resolve(config);

                this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                  chain.unshift(interceptor.fulfilled, interceptor.rejected);
                });

                this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                  chain.push(interceptor.fulfilled, interceptor.rejected);
                });

                while (chain.length) {
                  promise = promise.then(chain.shift(), chain.shift());
                }

                return promise;
              };

              // Provide aliases for supported request methods
              utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, config) {
                  return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url
                  }));
                };
              });

              utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
                /*eslint func-names:0*/
                Axios.prototype[method] = function (url, data, config) {
                  return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url,
                    data: data
                  }));
                };
              });

              module.exports = Axios;

              /***/
            },
            /* 16 */
            /***/function (module, exports) {

              // shim for using process in browser
              var process = module.exports = {};

              // cached from whatever global is present so that test runners that stub it
              // don't break things.  But we need to wrap it in a try catch in case it is
              // wrapped in strict mode code which doesn't define any globals.  It's inside a
              // function because try/catches deoptimize in certain engines.

              var cachedSetTimeout;
              var cachedClearTimeout;

              function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
              }
              function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
              }
              (function () {
                try {
                  if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                  } else {
                    cachedSetTimeout = defaultSetTimout;
                  }
                } catch (e) {
                  cachedSetTimeout = defaultSetTimout;
                }
                try {
                  if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                  } else {
                    cachedClearTimeout = defaultClearTimeout;
                  }
                } catch (e) {
                  cachedClearTimeout = defaultClearTimeout;
                }
              })();
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  //normal enviroments in sane situations
                  return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                  cachedSetTimeout = setTimeout;
                  return setTimeout(fun, 0);
                }
                try {
                  // when when somebody has screwed with setTimeout but no I.E. maddness
                  return cachedSetTimeout(fun, 0);
                } catch (e) {
                  try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                  } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                  }
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  //normal enviroments in sane situations
                  return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                  cachedClearTimeout = clearTimeout;
                  return clearTimeout(marker);
                }
                try {
                  // when when somebody has screwed with setTimeout but no I.E. maddness
                  return cachedClearTimeout(marker);
                } catch (e) {
                  try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                  } catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                  }
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;

              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }

              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }

              process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };

              // v8 likes predictible objects
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function () {
                this.fun.apply(null, this.array);
              };
              process.title = 'browser';
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = ''; // empty string to avoid regexp issues
              process.versions = {};

              function noop() {}

              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;
              process.prependListener = noop;
              process.prependOnceListener = noop;

              process.listeners = function (name) {
                return [];
              };

              process.binding = function (name) {
                throw new Error('process.binding is not supported');
              };

              process.cwd = function () {
                return '/';
              };
              process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
              };
              process.umask = function () {
                return 0;
              };

              /***/
            },
            /* 17 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              module.exports = function normalizeHeaderName(headers, normalizedName) {
                utils.forEach(headers, function processHeader(value, name) {
                  if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                  }
                });
              };

              /***/
            },
            /* 18 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var createError = __webpack_require__(7);

              /**
               * Resolve or reject a Promise based on response status.
               *
               * @param {Function} resolve A function that resolves the promise.
               * @param {Function} reject A function that rejects the promise.
               * @param {object} response The response.
               */
              module.exports = function settle(resolve, reject, response) {
                var validateStatus = response.config.validateStatus;
                // Note: status is not exposed by XDomainRequest
                if (!response.status || !validateStatus || validateStatus(response.status)) {
                  resolve(response);
                } else {
                  reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
                }
              };

              /***/
            },
            /* 19 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              /**
               * Update an Error with the specified config, error code, and response.
               *
               * @param {Error} error The error to update.
               * @param {Object} config The config.
               * @param {string} [code] The error code (for example, 'ECONNABORTED').
               * @param {Object} [request] The request.
               * @param {Object} [response] The response.
               * @returns {Error} The error.
               */

              module.exports = function enhanceError(error, config, code, request, response) {
                error.config = config;
                if (code) {
                  error.code = code;
                }
                error.request = request;
                error.response = response;
                return error;
              };

              /***/
            },
            /* 20 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              function encode(val) {
                return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
              }

              /**
               * Build a URL by appending params to the end
               *
               * @param {string} url The base of the url (e.g., http://www.google.com)
               * @param {object} [params] The params to be appended
               * @returns {string} The formatted url
               */
              module.exports = function buildURL(url, params, paramsSerializer) {
                /*eslint no-param-reassign:0*/
                if (!params) {
                  return url;
                }

                var serializedParams;
                if (paramsSerializer) {
                  serializedParams = paramsSerializer(params);
                } else if (utils.isURLSearchParams(params)) {
                  serializedParams = params.toString();
                } else {
                  var parts = [];

                  utils.forEach(params, function serialize(val, key) {
                    if (val === null || typeof val === 'undefined') {
                      return;
                    }

                    if (utils.isArray(val)) {
                      key = key + '[]';
                    } else {
                      val = [val];
                    }

                    utils.forEach(val, function parseValue(v) {
                      if (utils.isDate(v)) {
                        v = v.toISOString();
                      } else if (utils.isObject(v)) {
                        v = JSON.stringify(v);
                      }
                      parts.push(encode(key) + '=' + encode(v));
                    });
                  });

                  serializedParams = parts.join('&');
                }

                if (serializedParams) {
                  url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
                }

                return url;
              };

              /***/
            },
            /* 21 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              // Headers whose duplicates are ignored by node
              // c.f. https://nodejs.org/api/http.html#http_message_headers
              var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

              /**
               * Parse headers into an object
               *
               * ```
               * Date: Wed, 27 Aug 2014 08:58:49 GMT
               * Content-Type: application/json
               * Connection: keep-alive
               * Transfer-Encoding: chunked
               * ```
               *
               * @param {String} headers Headers needing to be parsed
               * @returns {Object} Headers parsed into an object
               */
              module.exports = function parseHeaders(headers) {
                var parsed = {};
                var key;
                var val;
                var i;

                if (!headers) {
                  return parsed;
                }

                utils.forEach(headers.split('\n'), function parser(line) {
                  i = line.indexOf(':');
                  key = utils.trim(line.substr(0, i)).toLowerCase();
                  val = utils.trim(line.substr(i + 1));

                  if (key) {
                    if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                      return;
                    }
                    if (key === 'set-cookie') {
                      parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
                    } else {
                      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
                    }
                  }
                });

                return parsed;
              };

              /***/
            },
            /* 22 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              module.exports = utils.isStandardBrowserEnv() ?

              // Standard browser envs have full support of the APIs needed to test
              // whether the request URL is of the same origin as current location.
              function standardBrowserEnv() {
                var msie = /(msie|trident)/i.test(navigator.userAgent);
                var urlParsingNode = document.createElement('a');
                var originURL;

                /**
                * Parse a URL to discover it's components
                *
                * @param {String} url The URL to be parsed
                * @returns {Object}
                */
                function resolveURL(url) {
                  var href = url;

                  if (msie) {
                    // IE needs attribute set twice to normalize properties
                    urlParsingNode.setAttribute('href', href);
                    href = urlParsingNode.href;
                  }

                  urlParsingNode.setAttribute('href', href);

                  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                  return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
                  };
                }

                originURL = resolveURL(window.location.href);

                /**
                * Determine if a URL shares the same origin as the current location
                *
                * @param {String} requestURL The URL to test
                * @returns {boolean} True if URL shares the same origin, otherwise false
                */
                return function isURLSameOrigin(requestURL) {
                  var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                  return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
                };
              }() :

              // Non standard browser envs (web workers, react-native) lack needed support.
              function nonStandardBrowserEnv() {
                return function isURLSameOrigin() {
                  return true;
                };
              }();

              /***/
            },
            /* 23 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              module.exports = utils.isStandardBrowserEnv() ?

              // Standard browser envs support document.cookie
              function standardBrowserEnv() {
                return {
                  write: function write(name, value, expires, path, domain, secure) {
                    var cookie = [];
                    cookie.push(name + '=' + encodeURIComponent(value));

                    if (utils.isNumber(expires)) {
                      cookie.push('expires=' + new Date(expires).toGMTString());
                    }

                    if (utils.isString(path)) {
                      cookie.push('path=' + path);
                    }

                    if (utils.isString(domain)) {
                      cookie.push('domain=' + domain);
                    }

                    if (secure === true) {
                      cookie.push('secure');
                    }

                    document.cookie = cookie.join('; ');
                  },

                  read: function read(name) {
                    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                    return match ? decodeURIComponent(match[3]) : null;
                  },

                  remove: function remove(name) {
                    this.write(name, '', Date.now() - 86400000);
                  }
                };
              }() :

              // Non standard browser env (web workers, react-native) lack needed support.
              function nonStandardBrowserEnv() {
                return {
                  write: function write() {},
                  read: function read() {
                    return null;
                  },
                  remove: function remove() {}
                };
              }();

              /***/
            },
            /* 24 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              function InterceptorManager() {
                this.handlers = [];
              }

              /**
               * Add a new interceptor to the stack
               *
               * @param {Function} fulfilled The function to handle `then` for a `Promise`
               * @param {Function} rejected The function to handle `reject` for a `Promise`
               *
               * @return {Number} An ID used to remove interceptor later
               */
              InterceptorManager.prototype.use = function use(fulfilled, rejected) {
                this.handlers.push({
                  fulfilled: fulfilled,
                  rejected: rejected
                });
                return this.handlers.length - 1;
              };

              /**
               * Remove an interceptor from the stack
               *
               * @param {Number} id The ID that was returned by `use`
               */
              InterceptorManager.prototype.eject = function eject(id) {
                if (this.handlers[id]) {
                  this.handlers[id] = null;
                }
              };

              /**
               * Iterate over all the registered interceptors
               *
               * This method is particularly useful for skipping over any
               * interceptors that may have become `null` calling `eject`.
               *
               * @param {Function} fn The function to call for each interceptor
               */
              InterceptorManager.prototype.forEach = function forEach(fn) {
                utils.forEach(this.handlers, function forEachHandler(h) {
                  if (h !== null) {
                    fn(h);
                  }
                });
              };

              module.exports = InterceptorManager;

              /***/
            },
            /* 25 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);
              var transformData = __webpack_require__(26);
              var isCancel = __webpack_require__(8);
              var defaults = __webpack_require__(2);
              var isAbsoluteURL = __webpack_require__(27);
              var combineURLs = __webpack_require__(28);

              /**
               * Throws a `Cancel` if cancellation has been requested.
               */
              function throwIfCancellationRequested(config) {
                if (config.cancelToken) {
                  config.cancelToken.throwIfRequested();
                }
              }

              /**
               * Dispatch a request to the server using the configured adapter.
               *
               * @param {object} config The config that is to be used for the request
               * @returns {Promise} The Promise to be fulfilled
               */
              module.exports = function dispatchRequest(config) {
                throwIfCancellationRequested(config);

                // Support baseURL config
                if (config.baseURL && !isAbsoluteURL(config.url)) {
                  config.url = combineURLs(config.baseURL, config.url);
                }

                // Ensure headers exist
                config.headers = config.headers || {};

                // Transform request data
                config.data = transformData(config.data, config.headers, config.transformRequest);

                // Flatten headers
                config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

                utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
                  delete config.headers[method];
                });

                var adapter = config.adapter || defaults.adapter;

                return adapter(config).then(function onAdapterResolution(response) {
                  throwIfCancellationRequested(config);

                  // Transform response data
                  response.data = transformData(response.data, response.headers, config.transformResponse);

                  return response;
                }, function onAdapterRejection(reason) {
                  if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);

                    // Transform response data
                    if (reason && reason.response) {
                      reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                    }
                  }

                  return Promise.reject(reason);
                });
              };

              /***/
            },
            /* 26 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var utils = __webpack_require__(0);

              /**
               * Transform the data for a request or a response
               *
               * @param {Object|String} data The data to be transformed
               * @param {Array} headers The headers for the request or response
               * @param {Array|Function} fns A single function or Array of functions
               * @returns {*} The resulting transformed data
               */
              module.exports = function transformData(data, headers, fns) {
                /*eslint no-param-reassign:0*/
                utils.forEach(fns, function transform(fn) {
                  data = fn(data, headers);
                });

                return data;
              };

              /***/
            },
            /* 27 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              /**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */

              module.exports = function isAbsoluteURL(url) {
                // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
                // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
                // by any combination of letters, digits, plus, period, or hyphen.
                return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
                );
              };

              /***/
            },
            /* 28 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              /**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */

              module.exports = function combineURLs(baseURL, relativeURL) {
                return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
              };

              /***/
            },
            /* 29 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              var Cancel = __webpack_require__(9);

              /**
               * A `CancelToken` is an object that can be used to request cancellation of an operation.
               *
               * @class
               * @param {Function} executor The executor function.
               */
              function CancelToken(executor) {
                if (typeof executor !== 'function') {
                  throw new TypeError('executor must be a function.');
                }

                var resolvePromise;
                this.promise = new Promise(function promiseExecutor(resolve) {
                  resolvePromise = resolve;
                });

                var token = this;
                executor(function cancel(message) {
                  if (token.reason) {
                    // Cancellation has already been requested
                    return;
                  }

                  token.reason = new Cancel(message);
                  resolvePromise(token.reason);
                });
              }

              /**
               * Throws a `Cancel` if cancellation has been requested.
               */
              CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason) {
                  throw this.reason;
                }
              };

              /**
               * Returns an object that contains a new `CancelToken` and a function that, when called,
               * cancels the `CancelToken`.
               */
              CancelToken.source = function source() {
                var cancel;
                var token = new CancelToken(function executor(c) {
                  cancel = c;
                });
                return {
                  token: token,
                  cancel: cancel
                };
              };

              module.exports = CancelToken;

              /***/
            },
            /* 30 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              /**
               * Syntactic sugar for invoking a function and expanding an array for arguments.
               *
               * Common use case would be to use `Function.prototype.apply`.
               *
               *  ```js
               *  function f(x, y, z) {}
               *  var args = [1, 2, 3];
               *  f.apply(null, args);
               *  ```
               *
               * With `spread` this example can be re-written.
               *
               *  ```js
               *  spread(function(x, y, z) {})([1, 2, 3]);
               *  ```
               *
               * @param {Function} callback
               * @returns {Function}
               */

              module.exports = function spread(callback) {
                return function wrap(arr) {
                  return callback.apply(null, arr);
                };
              };

              /***/
            },
            /* 31 */
            /***/function (module, exports, __webpack_require__) {

              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.LoggerConfigurator = undefined;

              var _slicedToArray = function () {
                function sliceIterator(arr, i) {
                  var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                      _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                  } catch (err) {
                    _d = true;_e = err;
                  } finally {
                    try {
                      if (!_n && _i["return"]) _i["return"]();
                    } finally {
                      if (_d) throw _e;
                    }
                  }return _arr;
                }return function (arr, i) {
                  if (Array.isArray(arr)) {
                    return arr;
                  } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                  } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  }
                };
              }();

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _Constants = __webpack_require__(1);

              var _axios = __webpack_require__(4);

              var _axios2 = _interopRequireDefault(_axios);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var _loadFirst = true;

              var LoggerConfigurator = function () {
                function LoggerConfigurator() {
                  _classCallCheck(this, LoggerConfigurator);
                }

                _createClass(LoggerConfigurator, null, [{
                  key: 'Init',
                  value: function Init(callback) {
                    if (_loadFirst && LoggerConfigurator.IsConfigurationNotAssigned()) {
                      _loadFirst = false;
                      LoggerConfigurator.GetByExecutionEnvironment(callback);
                    } else {
                      callback();
                    }
                  }
                }, {
                  key: 'Setup',
                  value: function Setup(configuration, callback) {
                    console.info("Setup ", configuration);
                    if (configuration) {
                      window[_Constants.Constants._LOGGER_VAR_WINDOW] = {};

                      var _iteratorNormalCompletion = true;
                      var _didIteratorError = false;
                      var _iteratorError = undefined;

                      try {
                        for (var _iterator = Object.entries(_Constants.Constants._CONFIGURATIONS)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          var _step$value = _slicedToArray(_step.value, 2),
                              key = _step$value[0],
                              value = _step$value[1];

                          setValueDefatult(configuration, key, value);
                        }
                      } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                      } finally {
                        try {
                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }
                        } finally {
                          if (_didIteratorError) {
                            throw _iteratorError;
                          }
                        }
                      }

                      Object.keys(configuration).forEach(function (key) {
                        return window[_Constants.Constants._LOGGER_VAR_WINDOW][key] = configuration[key];
                      });

                      if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_ORIGIN) {
                        LoggerConfigurator.SetConfigurationServer();
                      }
                    } else {
                      window[_Constants.Constants._LOGGER_VAR_WINDOW] = _Constants.Constants._CONFIGURATIONS;
                      console.info('Logger will use default configuration ... ', _Constants.Constants._CONFIGURATIONS);
                    }
                    callback();
                  }
                }, {
                  key: 'GetByExecutionEnvironment',
                  value: function GetByExecutionEnvironment(callback) {
                    if (LoggerConfigurator.IsBrowser()) {
                      LoggerConfigurator.GetRemote(callback);
                    } else {
                      LoggerConfigurator.GetLocal(callback);
                    }
                  }
                }, {
                  key: 'IsBrowser',
                  value: function IsBrowser() {
                    return window ? true : false;
                  }
                }, {
                  key: 'GetLocal',
                  value: function GetLocal(callback) {
                    LoggerConfigurator.Setup(null, callback);
                  }
                }, {
                  key: 'GetRemote',
                  value: function GetRemote(callback) {
                    var remoteLocation = window.location + "";
                    var remoteSplit = remoteLocation.split('/');
                    remoteLocation = remoteLocation.replace(remoteSplit[remoteSplit.length - 1], '');
                    remoteLocation = remoteLocation + _Constants.Constants._LOGGER_CONFIGURATION_FILE_REMOTE;

                    _axios2.default.get(remoteLocation, { responseType: 'json' }).then(function (response) {
                      LoggerConfigurator.Setup(response.data, callback);
                    }).catch(function (error) {
                      console.error("It was not possible to get remote file configuration", error);
                      LoggerConfigurator.Setup(null, callback);
                    });
                  }
                }, {
                  key: 'SetConfigurationServer',
                  value: function SetConfigurationServer() {
                    if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_ORIGIN) {
                      var remoteLocation = window.location.hostname;
                      if (remoteLocation !== "127.0.0.1" && remoteLocation !== "localhost") {
                        console.debug("SetConfigurationServer withLocation", remoteLocation);
                        window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SERVER"] = remoteLocation;
                      }
                    }
                  }
                }, {
                  key: 'ExistExternalConfiguration',
                  value: function ExistExternalConfiguration(configuration) {
                    return configuration ? true : false;
                  }
                }, {
                  key: 'IsConfigurationNotAssigned',
                  value: function IsConfigurationNotAssigned() {
                    return !_Constants.Constants._LOGGER_CONFIGURATION_ASSIGNED;
                  }
                }]);

                return LoggerConfigurator;
              }();

              function setValueDefatult(configuration, property, valueDefault) {
                if (configuration[property] === undefined) {
                  console.info("file logger.json does not contain field [%s] set value default [%s]", property, valueDefault);
                  configuration[property] = valueDefault;
                }
              }

              exports.LoggerConfigurator = LoggerConfigurator;

              /***/
            }]
            /******/)
          );
        });
        //# sourceMappingURL=global-logger-services-js-bundle.js.map
        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(4)(module));

      /***/
    },
    /* 4 */
    /***/function (module, exports) {

      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};
          module.paths = [];
          // module.parent = undefined by default
          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }
        return module;
      };

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=global-web-socket-client-js-bundle.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// [NUXIBA]  Version: 2021.4.2 - 2021-06-11 11:27:06  
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["LoggerEntryPoint"] = factory();else root["LoggerEntryPoint"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var bind = __webpack_require__(5);
      var isBuffer = __webpack_require__(15);

      /*global toString:true*/

      // utils is a library of generic helper functions non-specific to axios

      var toString = Object.prototype.toString;

      /**
       * Determine if a value is an Array
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Array, otherwise false
       */
      function isArray(val) {
        return toString.call(val) === '[object Array]';
      }

      /**
       * Determine if a value is an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an ArrayBuffer, otherwise false
       */
      function isArrayBuffer(val) {
        return toString.call(val) === '[object ArrayBuffer]';
      }

      /**
       * Determine if a value is a FormData
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an FormData, otherwise false
       */
      function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
      }

      /**
       * Determine if a value is a view on an ArrayBuffer
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
       */
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && val.buffer instanceof ArrayBuffer;
        }
        return result;
      }

      /**
       * Determine if a value is a String
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a String, otherwise false
       */
      function isString(val) {
        return typeof val === 'string';
      }

      /**
       * Determine if a value is a Number
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Number, otherwise false
       */
      function isNumber(val) {
        return typeof val === 'number';
      }

      /**
       * Determine if a value is undefined
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if the value is undefined, otherwise false
       */
      function isUndefined(val) {
        return typeof val === 'undefined';
      }

      /**
       * Determine if a value is an Object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is an Object, otherwise false
       */
      function isObject(val) {
        return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object';
      }

      /**
       * Determine if a value is a Date
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Date, otherwise false
       */
      function isDate(val) {
        return toString.call(val) === '[object Date]';
      }

      /**
       * Determine if a value is a File
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a File, otherwise false
       */
      function isFile(val) {
        return toString.call(val) === '[object File]';
      }

      /**
       * Determine if a value is a Blob
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Blob, otherwise false
       */
      function isBlob(val) {
        return toString.call(val) === '[object Blob]';
      }

      /**
       * Determine if a value is a Function
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Function, otherwise false
       */
      function isFunction(val) {
        return toString.call(val) === '[object Function]';
      }

      /**
       * Determine if a value is a Stream
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a Stream, otherwise false
       */
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }

      /**
       * Determine if a value is a URLSearchParams object
       *
       * @param {Object} val The value to test
       * @returns {boolean} True if value is a URLSearchParams object, otherwise false
       */
      function isURLSearchParams(val) {
        return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
      }

      /**
       * Trim excess whitespace off the beginning and end of a string
       *
       * @param {String} str The String to trim
       * @returns {String} The String freed of excess whitespace
       */
      function trim(str) {
        return str.replace(/^\s*/, '').replace(/\s*$/, '');
      }

      /**
       * Determine if we're running in a standard browser environment
       *
       * This allows axios to run in a web worker, and react-native.
       * Both environments support XMLHttpRequest, but not fully standard globals.
       *
       * web workers:
       *  typeof window -> undefined
       *  typeof document -> undefined
       *
       * react-native:
       *  navigator.product -> 'ReactNative'
       */
      function isStandardBrowserEnv() {
        if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
          return false;
        }
        return typeof window !== 'undefined' && typeof document !== 'undefined';
      }

      /**
       * Iterate over an Array or an Object invoking a function for each item.
       *
       * If `obj` is an Array callback will be called passing
       * the value, index, and complete array for each item.
       *
       * If 'obj' is an Object callback will be called passing
       * the value, key, and complete object for each property.
       *
       * @param {Object|Array} obj The object to iterate
       * @param {Function} fn The callback to invoke for each item
       */
      function forEach(obj, fn) {
        // Don't bother if no value provided
        if (obj === null || typeof obj === 'undefined') {
          return;
        }

        // Force an array if not already something iterable
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof2(obj)) !== 'object') {
          /*eslint no-param-reassign:0*/
          obj = [obj];
        }

        if (isArray(obj)) {
          // Iterate over array values
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          // Iterate over object keys
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }

      /**
       * Accepts varargs expecting each argument to be an object, then
       * immutably merges the properties of each object and returns result.
       *
       * When multiple objects contain the same key the later object in
       * the arguments list will take precedence.
       *
       * Example:
       *
       * ```js
       * var result = merge({foo: 123}, {foo: 456});
       * console.log(result.foo); // outputs 456
       * ```
       *
       * @param {Object} obj1 Object to merge
       * @returns {Object} Result of all merge properties
       */
      function merge() /* obj1, obj2, obj3, ... */{
        var result = {};
        function assignValue(val, key) {
          if (_typeof2(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof2(val)) === 'object') {
            result[key] = merge(result[key], val);
          } else {
            result[key] = val;
          }
        }

        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }

      /**
       * Extends object a by mutably adding to it the properties of object b.
       *
       * @param {Object} a The object to be extended
       * @param {Object} b The object to copy properties from
       * @param {Object} thisArg The object to bind function to
       * @return {Object} The resulting value of object a
       */
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }

      module.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: isBuffer,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
      };

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var instance = null;

      var Constants = exports.Constants = function Constants() {
        _classCallCheck(this, Constants);

        if (!instance) {
          instance = this;
        }
      };

      Constants._LOGGER_VAR_WINDOW = "NuxibaLogger";
      Constants._LOGGER_CONFIGURATION_FILE_LOCALE = './logger.json';
      Constants._LOGGER_CONFIGURATION_FILE_REMOTE = 'logger.json';
      Constants._LOGGER_CONFIGURATION_FILE_ENCODE = 'utf8';
      Constants._LOGGER_CONFIGURATION_ASSIGNED = window[Constants._LOGGER_VAR_WINDOW] ? true : false;
      Constants._LOG_LEVELS = {
        "TRACE": { logLevel: 0 },
        "DEBUG": { logLevel: 1 },
        "INFO": { logLevel: 2 },
        "WARN": { logLevel: 3 },
        "ERROR": { logLevel: 4 }
      };
      Constants._Log_CONSOLE = {
        "TRACE": console.log,
        "DEBUG": console.log,
        "INFO": console.info,
        "WARN": console.warn,
        "ERROR": console.error
      };
      Constants._CONFIGURATIONS = {
        "_ENABLE_DEFAULT": true,
        "_ENABLE_AJAX": true,
        "_USE_WINDOW_ORIGIN": true,
        "_SERVER": "http://127.0.0.1",
        "_DOMAIN": "/LoggerWS/api/Logger",
        "_SEVERITY": "INFO",
        "_SEVERITY_CONSOLE": "INFO",
        "_NUMBER_ATTEMP_POST": 10,
        "_FILTER_USER_POST": [],
        "_FILTER_APP_POST": []
      };
      Constants._REST = {
        _POST_METHOD: "POST",
        _MODE: "cors",
        _CONTENT_TYPE: "content-type",
        _APPLICATION_JSON: "application/json"
      };

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";
      /* WEBPACK VAR INJECTION */
      (function (process) {

        var utils = __webpack_require__(0);
        var normalizeHeaderName = __webpack_require__(18);

        var DEFAULT_CONTENT_TYPE = {
          'Content-Type': 'application/x-www-form-urlencoded'
        };

        function setContentTypeIfUnset(headers, value) {
          if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
            headers['Content-Type'] = value;
          }
        }

        function getDefaultAdapter() {
          var adapter;
          if (typeof XMLHttpRequest !== 'undefined') {
            // For browsers use XHR adapter
            adapter = __webpack_require__(6);
          } else if (typeof process !== 'undefined') {
            // For node use HTTP adapter
            adapter = __webpack_require__(6);
          }
          return adapter;
        }

        var defaults = {
          adapter: getDefaultAdapter(),

          transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
              return data;
            }
            if (utils.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
              setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
              return data.toString();
            }
            if (utils.isObject(data)) {
              setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
              return JSON.stringify(data);
            }
            return data;
          }],

          transformResponse: [function transformResponse(data) {
            /*eslint no-param-reassign:0*/
            if (typeof data === 'string') {
              try {
                data = JSON.parse(data);
              } catch (e) {/* Ignore */}
            }
            return data;
          }],

          /**
           * A timeout in milliseconds to abort a request. If set to 0 (default) a
           * timeout is not created.
           */
          timeout: 0,

          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',

          maxContentLength: -1,

          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          }
        };

        defaults.headers = {
          common: {
            'Accept': 'application/json, text/plain, */*'
          }
        };

        utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
          defaults.headers[method] = {};
        });

        utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });

        module.exports = defaults;

        /* WEBPACK VAR INJECTION */
      }).call(exports, __webpack_require__(17));

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoggerInstance = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _LoggerDispatcher = __webpack_require__(12);

      var _Constants = __webpack_require__(1);

      var _LoggerLocal = __webpack_require__(11);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var usertype = 'AGENT';
      var userId = "";
      var application = "";

      var LoggerInstance = function () {
        function LoggerInstance() {
          _classCallCheck(this, LoggerInstance);
        }

        _createClass(LoggerInstance, null, [{
          key: 'setUsertype',
          value: function setUsertype(value) {
            usertype = value;
          }
        }, {
          key: 'setUserId',
          value: function setUserId(value) {
            userId = value;
          }
        }, {
          key: 'getUserId',
          value: function getUserId() {
            return userId;
          }
        }, {
          key: 'setApplication',
          value: function setApplication(value) {
            application = value;
          }
        }, {
          key: 'setLocalLogger',
          value: function setLocalLogger(value) {
            _LoggerLocal.LoggerLocal.setEnabled(value);
          }
        }, {
          key: 'setLocalStorageTime',
          value: function setLocalStorageTime(minutes) {
            _LoggerLocal.LoggerLocal.setStorageTimeMin(minutes);
          }
        }, {
          key: 'getApplication',
          value: function getApplication() {
            return application;
          }
        }, {
          key: 'SetUseServerWithLocation',
          value: function SetUseServerWithLocation(useWindowLocation) {
            window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_LOCATION = useWindowLocation;
          }
        }, {
          key: 'addUserId',
          value: function addUserId(msg) {
            if (userId) {
              var userIdPrint = '[UserId:' + userId + ']';
              msg.unshift(userIdPrint);
            }
          }
        }, {
          key: 'Group',
          value: function Group(label) {
            console.group(label);
          }
        }, {
          key: 'GroupEnd',
          value: function GroupEnd() {
            console.groupEnd();
          }
        }, {
          key: 'CleanLocalLog',
          value: function CleanLocalLog() {
            _LoggerLocal.LoggerLocal.Clean();
          }
        }, {
          key: 'Trace',
          value: function Trace() {
            for (var _len = arguments.length, msg = Array(_len), _key = 0; _key < _len; _key++) {
              msg[_key] = arguments[_key];
            }

            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Trace', ['[UserId:' + userId + ']'].concat(msg));
          }
        }, {
          key: 'Debug',
          value: function Debug() {
            for (var _len2 = arguments.length, msg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              msg[_key2] = arguments[_key2];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Debug', ['[UserId:' + userId + ']'].concat(msg));
          }
        }, {
          key: 'Warning',
          value: function Warning() {
            for (var _len3 = arguments.length, msg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              msg[_key3] = arguments[_key3];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Warn', ['[UserId:' + userId + ']'].concat(msg));
          }
        }, {
          key: 'Warn',
          value: function Warn() {
            for (var _len4 = arguments.length, msg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              msg[_key4] = arguments[_key4];
            }

            LoggerInstance.Warning(msg);
          }
        }, {
          key: 'Info',
          value: function Info() {
            for (var _len5 = arguments.length, msg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              msg[_key5] = arguments[_key5];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Info', ['[UserId:' + userId + ']'].concat(msg));
          }
        }, {
          key: 'Error',
          value: function Error() {
            for (var _len6 = arguments.length, msg = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              msg[_key6] = arguments[_key6];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Error', ['[UserId:' + userId + ']'].concat(msg));
          }
        }, {
          key: 'JsWarning',
          value: function JsWarning() {
            for (var _len7 = arguments.length, msg = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              msg[_key7] = arguments[_key7];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Warn', ['[UserId:' + userId + ']'].concat(msg), true);
          }
        }, {
          key: 'JsError',
          value: function JsError() {
            for (var _len8 = arguments.length, msg = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
              msg[_key8] = arguments[_key8];
            }

            LoggerInstance.addUserId(msg);
            _LoggerDispatcher.LoggerDispatcher.Dispatch(usertype, 'Error', ['[UserId:' + userId + ']'].concat(msg), true);
          }
        }, {
          key: 'LevelConsole',
          get: function get() {
            return window[_Constants.Constants._LOGGER_VAR_WINDOW]._SEVERITY_CONSOLE;
          }
        }]);

        return LoggerInstance;
      }();

      exports.LoggerInstance = LoggerInstance;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = __webpack_require__(14);

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);
      var settle = __webpack_require__(19);
      var buildURL = __webpack_require__(21);
      var parseHeaders = __webpack_require__(22);
      var isURLSameOrigin = __webpack_require__(23);
      var createError = __webpack_require__(7);

      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;

          if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
          }

          var request = new XMLHttpRequest();

          // HTTP basic authentication
          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
          }

          request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

          // Set the request timeout in MS
          request.timeout = config.timeout;

          // Listen for ready state
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }

            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
              return;
            }

            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config: config,
              request: request
            };

            settle(resolve, reject, response);

            // Clean up request
            request = null;
          };

          // Handle low level network errors
          request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));

            // Clean up request
            request = null;
          };

          // Handle timeout
          request.ontimeout = function handleTimeout() {
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

            // Clean up request
            request = null;
          };

          // Add xsrf header
          // This is only done if running in a standard browser environment.
          // Specifically not if we're in a web worker, or react-native.
          if (utils.isStandardBrowserEnv()) {
            var cookies = __webpack_require__(24);

            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }

          // Add headers to the request
          if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                // Remove Content-Type if data is undefined
                delete requestHeaders[key];
              } else {
                // Otherwise add header to the request
                request.setRequestHeader(key, val);
              }
            });
          }

          // Add withCredentials to request if needed
          if (config.withCredentials) {
            request.withCredentials = true;
          }

          // Add responseType to request if needed
          if (config.responseType) {
            try {
              request.responseType = config.responseType;
            } catch (e) {
              // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
              // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
              if (config.responseType !== 'json') {
                throw e;
              }
            }
          }

          // Handle progress if needed
          if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
          }

          // Not all browsers support upload events
          if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
          }

          if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (!request) {
                return;
              }

              request.abort();
              reject(cancel);
              // Clean up request
              request = null;
            });
          }

          if (requestData === undefined) {
            requestData = null;
          }

          // Send the request
          request.send(requestData);
        });
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var enhanceError = __webpack_require__(20);

      /**
       * Create an Error with the specified message, config, error code, request and response.
       *
       * @param {string} message The error message.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The created error.
       */
      module.exports = function createError(message, config, code, request, response) {
        var error = new Error(message);
        return enhanceError(error, config, code, request, response);
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * A `Cancel` is an object that is thrown when an operation is canceled.
       *
       * @class
       * @param {string=} message The message.
       */

      function Cancel(message) {
        this.message = message;
      }

      Cancel.prototype.toString = function toString() {
        return 'Cancel' + (this.message ? ': ' + this.message : '');
      };

      Cancel.prototype.__CANCEL__ = true;

      module.exports = Cancel;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoggerUtils = undefined;

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _Constants = __webpack_require__(1);

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var LoggerUtils = function () {
        function LoggerUtils() {
          _classCallCheck(this, LoggerUtils);
        }

        _createClass(LoggerUtils, null, [{
          key: "GetLogLevelBySeverity",
          value: function GetLogLevelBySeverity(severity) {
            var logLevel = 1;
            severity = severity.toUpperCase();
            if (_Constants.Constants._LOG_LEVELS[severity]) {
              logLevel = _Constants.Constants._LOG_LEVELS[severity].logLevel;
            }
            return logLevel;
          }
        }, {
          key: "IsAllowedRemoteToLogBySeverity",
          value: function IsAllowedRemoteToLogBySeverity(severity) {
            return LoggerUtils.GetLogLevelBySeverity(severity) >= LoggerUtils.GetCurrentRemoteSeverityLevelConfigured();
          }
        }, {
          key: "GetCurrentRemoteSeverityLevelConfigured",
          value: function GetCurrentRemoteSeverityLevelConfigured() {
            return LoggerUtils.GetLogLevelBySeverity(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SEVERITY"]);
          }
        }, {
          key: "IsAllowedConsoleToLogBySeverity",
          value: function IsAllowedConsoleToLogBySeverity(severity) {
            return LoggerUtils.GetLogLevelBySeverity(severity) >= LoggerUtils.GetCurrentConsoleSeverityLevelConfigured();
          }
        }, {
          key: "GetCurrentConsoleSeverityLevelConfigured",
          value: function GetCurrentConsoleSeverityLevelConfigured() {
            return LoggerUtils.GetLogLevelBySeverity(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SEVERITY_CONSOLE"]);
          }
        }, {
          key: "ToStringMessage",
          value: function ToStringMessage() {
            var messageString = "";

            for (var _len = arguments.length, message = Array(_len), _key = 0; _key < _len; _key++) {
              message[_key] = arguments[_key];
            }

            message.forEach(function (entry) {
              messageString += LoggerUtils.ToStringObject(entry);
            });
            return messageString;
          }
        }, {
          key: "ToStringObject",
          value: function ToStringObject(entry) {
            return LoggerUtils.IsObject(entry) ? '\n' + LoggerUtils.JsonToString(entry) : entry;
          }
        }, {
          key: "IsObject",
          value: function IsObject(value) {
            return value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value.constructor === Object;
          }
        }, {
          key: "JsonToString",
          value: function JsonToString(entry) {
            var seen = [];
            var jsonString = JSON.stringify(entry, function (key, val) {
              if (val && (typeof val === "undefined" ? "undefined" : _typeof(val)) == "object") {
                seen.push(val);
              }
              return val;
            }, 2);

            return jsonString;
          }
        }]);

        return LoggerUtils;
      }();

      exports.LoggerUtils = LoggerUtils;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var ls = window.localStorage;
      var logKey = "LOG-" + new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
      var logDateKey = "GalateaLoggerDate";
      var enabled = false;
      var storageTimeMin = 0;
      var firstLogTs = null;

      var LoggerLocal = function () {
        function LoggerLocal() {
          _classCallCheck(this, LoggerLocal);
        }

        _createClass(LoggerLocal, null, [{
          key: "getKey",
          value: function getKey() {
            return logKey;
          }
        }, {
          key: "setEnabled",
          value: function setEnabled(value) {
            enabled = value;
          }
        }, {
          key: "setStorageTimeMin",
          value: function setStorageTimeMin(minutes) {
            storageTimeMin = minutes;
          }
        }, {
          key: "Add",
          value: function Add(message, usertype, severity) {
            if (enabled) {
              var ts = new Date();
              var prevEntries = ls.getItem(logKey);
              var newEntry = usertype + "-" + severity + " " + ts.getDate() + "-" + (ts.getMonth() + 1) + "-" + ts.getFullYear() + "-" + ts.getDate() + " " + ts.toLocaleTimeString() + " - MSG: " + message;
              if (prevEntries) {
                if (!firstLogTs) {
                  firstLogTs = new Date(JSON.parse(ls.getItem(logDateKey)));
                }
                if (storageTimeMin !== 0 && (ts - firstLogTs) / 60000 > storageTimeMin) {
                  LoggerLocal.Clean();
                  firstLogTs = ts;
                  ls.setItem(logDateKey, JSON.stringify(ts));
                } else {
                  newEntry = prevEntries + ";" + newEntry;
                }
                ls.setItem(logKey, "" + newEntry);
              } else {
                firstLogTs = ts;
                ls.setItem(logKey, newEntry);
                ls.setItem(logDateKey, JSON.stringify(ts));
              }
            }
          }
        }, {
          key: "getRawLogs",
          value: function getRawLogs() {
            return ls.getItem(logKey);
          }
        }, {
          key: "getLogs",
          value: function getLogs() {
            return ls.getItem(logKey).replaceAll(';', '\n');
          }
        }, {
          key: "Clean",
          value: function Clean() {
            console.log("Cleaning local storage ", logKey);
            ls.removeItem(logKey);
          }
        }]);

        return LoggerLocal;
      }();

      exports.LoggerLocal = LoggerLocal;

      /***/
    },
    /* 12 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoggerDispatcher = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _LoggerRestClient = __webpack_require__(13);

      var _Constants = __webpack_require__(1);

      var _LoggerUtils = __webpack_require__(10);

      var _LoggerConfigurator = __webpack_require__(32);

      var _LoggerInstance = __webpack_require__(3);

      var _LoggerLocal = __webpack_require__(11);

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var ls = window.localStorage;

      var LoggerDispatcher = function () {
        function LoggerDispatcher() {
          _classCallCheck(this, LoggerDispatcher);
        }

        _createClass(LoggerDispatcher, null, [{
          key: 'Dispatch',
          value: function Dispatch(usertype, severity, message, hideInConsole) {
            _LoggerLocal.LoggerLocal.Add(message, usertype, severity);
            _LoggerConfigurator.LoggerConfigurator.Init(function () {
              !hideInConsole && LoggerDispatcher.DefaultOutput.apply(LoggerDispatcher, [usertype, severity].concat(_toConsumableArray(message)));
              LoggerDispatcher.RemoteOutput.apply(LoggerDispatcher, [usertype, severity].concat(_toConsumableArray(message)));
            });
          }
        }, {
          key: 'RemoteOutput',
          value: function RemoteOutput(usertype, severity) {
            if (window[_Constants.Constants._LOGGER_VAR_WINDOW] && window[_Constants.Constants._LOGGER_VAR_WINDOW]['_ENABLE_AJAX'] && _LoggerUtils.LoggerUtils.IsAllowedRemoteToLogBySeverity(severity)) {
              for (var _len = arguments.length, message = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                message[_key - 2] = arguments[_key];
              }

              if (severity.toUpperCase() === 'WARN' || severity.toUpperCase() === 'ERROR') {
                _LoggerRestClient.LoggerRestClient.log(usertype, severity, '[' + usertype + '] ' + message);
              } else {
                var isEmptyFilterUser = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_USER_POST.length === 0;
                var isEmptyFilterApp = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_APP_POST.length === 0;

                if (isEmptyFilterUser && isEmptyFilterApp) {
                  _LoggerRestClient.LoggerRestClient.log.apply(_LoggerRestClient.LoggerRestClient, [usertype, severity].concat(message));
                } else {
                  var containtUserId = true;
                  var containtApp = true;

                  if (!isEmptyFilterUser) {
                    containtUserId = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_USER_POST.find(function (ele) {
                      return ele === _LoggerInstance.LoggerInstance.getUserId();
                    });
                  }
                  if (!isEmptyFilterApp) {
                    containtApp = window[_Constants.Constants._LOGGER_VAR_WINDOW]._FILTER_APP_POST.find(function (ele) {
                      return ele === _LoggerInstance.LoggerInstance.getApplication();
                    });
                  }

                  if (containtUserId && containtApp) {
                    _LoggerRestClient.LoggerRestClient.log(usertype, severity, '[' + usertype + '] ' + message);
                  }
                }
              }
            }
          }
        }, {
          key: 'DefaultOutput',
          value: function DefaultOutput(usertype, severity) {
            severity = severity.toUpperCase();
            if (window[_Constants.Constants._LOGGER_VAR_WINDOW] && window[_Constants.Constants._LOGGER_VAR_WINDOW]._ENABLE_DEFAULT && _LoggerUtils.LoggerUtils.IsAllowedConsoleToLogBySeverity(severity)) {
              var _consoleLogLevel;

              var consoleLogLevel = console.log;
              if (_Constants.Constants._Log_CONSOLE[severity]) {
                consoleLogLevel = _Constants.Constants._Log_CONSOLE[severity];
              }
              var time = new Date().toLocaleTimeString();

              for (var _len2 = arguments.length, message = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                message[_key2 - 2] = arguments[_key2];
              }

              (_consoleLogLevel = consoleLogLevel).call.apply(_consoleLogLevel, [null, '[' + time + '][' + severity + '][' + usertype + ']'].concat(message));
            }
          }
        }]);

        return LoggerDispatcher;
      }();

      exports.LoggerDispatcher = LoggerDispatcher;

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoggerRestClient = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _axios = __webpack_require__(4);

      var _axios2 = _interopRequireDefault(_axios);

      var _Constants = __webpack_require__(1);

      var _LoggerUtils = __webpack_require__(10);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var numberAttemp = 0;
      var numMessageWarn = true;

      var LoggerRestClient = function () {
        function LoggerRestClient() {
          _classCallCheck(this, LoggerRestClient);
        }

        _createClass(LoggerRestClient, null, [{
          key: 'log',
          value: function log(usertype, severity) {
            if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._ENABLE_AJAX) {
              if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._NUMBER_ATTEMP_POST === 0 || numberAttemp < window[_Constants.Constants._LOGGER_VAR_WINDOW]._NUMBER_ATTEMP_POST) {
                try {
                  var serverUrl = new URL(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SERVER"]);
                  var server = new URL(window[_Constants.Constants._LOGGER_VAR_WINDOW]["_DOMAIN"], serverUrl);

                  for (var _len = arguments.length, message = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    message[_key - 2] = arguments[_key];
                  }

                  var msg = _LoggerUtils.LoggerUtils.ToStringMessage(message);
                  _axios2.default.post(server, { UserType: usertype, Message: msg, Severity: severity }).then(function () {
                    numberAttemp = 0;
                  }).catch(function (error) {
                    numberAttemp++;
                    console.warn("It was not possible to send the message server:", server, error);
                  });
                } catch (e) {
                  numberAttemp++;
                  console.error("it was not possible to send the log message because an error ocurred servidor:" + window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SERVER"] + " error:" + e + " recommendation: you could check the logger configuration");
                }
              } else {
                if (numMessageWarn) {
                  numMessageWarn = false;
                  console.warn("number of attempts to overcome Api web is necessary to check the configuration file for logger.json");
                }
              }
            }
          }
        }]);

        return LoggerRestClient;
      }();

      exports.LoggerRestClient = LoggerRestClient;

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);
      var bind = __webpack_require__(5);
      var Axios = __webpack_require__(16);
      var defaults = __webpack_require__(2);

      /**
       * Create an instance of Axios
       *
       * @param {Object} defaultConfig The default config for the instance
       * @return {Axios} A new instance of Axios
       */
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);

        // Copy axios.prototype to instance
        utils.extend(instance, Axios.prototype, context);

        // Copy context to instance
        utils.extend(instance, context);

        return instance;
      }

      // Create the default instance to be exported
      var axios = createInstance(defaults);

      // Expose Axios class to allow class inheritance
      axios.Axios = Axios;

      // Factory for creating new instances
      axios.create = function create(instanceConfig) {
        return createInstance(utils.merge(defaults, instanceConfig));
      };

      // Expose Cancel & CancelToken
      axios.Cancel = __webpack_require__(9);
      axios.CancelToken = __webpack_require__(30);
      axios.isCancel = __webpack_require__(8);

      // Expose all/spread
      axios.all = function all(promises) {
        return Promise.all(promises);
      };
      axios.spread = __webpack_require__(31);

      module.exports = axios;

      // Allow use of default import syntax in TypeScript
      module.exports.default = axios;

      /***/
    },
    /* 15 */
    /***/function (module, exports) {

      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */

      module.exports = function isBuffer(obj) {
        return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      };

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var defaults = __webpack_require__(2);
      var utils = __webpack_require__(0);
      var InterceptorManager = __webpack_require__(25);
      var dispatchRequest = __webpack_require__(26);

      /**
       * Create a new instance of Axios
       *
       * @param {Object} instanceConfig The default config for the instance
       */
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }

      /**
       * Dispatch a request
       *
       * @param {Object} config The config specific for this request (merged with this.defaults)
       */
      Axios.prototype.request = function request(config) {
        /*eslint no-param-reassign:0*/
        // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof config === 'string') {
          config = utils.merge({
            url: arguments[0]
          }, arguments[1]);
        }

        config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
        config.method = config.method.toLowerCase();

        // Hook up interceptors middleware
        var chain = [dispatchRequest, undefined];
        var promise = Promise.resolve(config);

        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          chain.unshift(interceptor.fulfilled, interceptor.rejected);
        });

        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          chain.push(interceptor.fulfilled, interceptor.rejected);
        });

        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      };

      // Provide aliases for supported request methods
      utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url
          }));
        };
      });

      utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
        /*eslint func-names:0*/
        Axios.prototype[method] = function (url, data, config) {
          return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
          }));
        };
      });

      module.exports = Axios;

      /***/
    },
    /* 17 */
    /***/function (module, exports) {

      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };

      /***/
    },
    /* 18 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var createError = __webpack_require__(7);

      /**
       * Resolve or reject a Promise based on response status.
       *
       * @param {Function} resolve A function that resolves the promise.
       * @param {Function} reject A function that rejects the promise.
       * @param {object} response The response.
       */
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        // Note: status is not exposed by XDomainRequest
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
        }
      };

      /***/
    },
    /* 20 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Update an Error with the specified config, error code, and response.
       *
       * @param {Error} error The error to update.
       * @param {Object} config The config.
       * @param {string} [code] The error code (for example, 'ECONNABORTED').
       * @param {Object} [request] The request.
       * @param {Object} [response] The response.
       * @returns {Error} The error.
       */

      module.exports = function enhanceError(error, config, code, request, response) {
        error.config = config;
        if (code) {
          error.code = code;
        }
        error.request = request;
        error.response = response;
        return error;
      };

      /***/
    },
    /* 21 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
      }

      /**
       * Build a URL by appending params to the end
       *
       * @param {string} url The base of the url (e.g., http://www.google.com)
       * @param {object} [params] The params to be appended
       * @returns {string} The formatted url
       */
      module.exports = function buildURL(url, params, paramsSerializer) {
        /*eslint no-param-reassign:0*/
        if (!params) {
          return url;
        }

        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];

          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
              return;
            }

            if (utils.isArray(val)) {
              key = key + '[]';
            } else {
              val = [val];
            }

            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + '=' + encode(v));
            });
          });

          serializedParams = parts.join('&');
        }

        if (serializedParams) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
        }

        return url;
      };

      /***/
    },
    /* 22 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      // Headers whose duplicates are ignored by node
      // c.f. https://nodejs.org/api/http.html#http_message_headers
      var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];

      /**
       * Parse headers into an object
       *
       * ```
       * Date: Wed, 27 Aug 2014 08:58:49 GMT
       * Content-Type: application/json
       * Connection: keep-alive
       * Transfer-Encoding: chunked
       * ```
       *
       * @param {String} headers Headers needing to be parsed
       * @returns {Object} Headers parsed into an object
       */
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;

        if (!headers) {
          return parsed;
        }

        utils.forEach(headers.split('\n'), function parser(line) {
          i = line.indexOf(':');
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));

          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === 'set-cookie') {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
          }
        });

        return parsed;
      };

      /***/
    },
    /* 23 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = utils.isStandardBrowserEnv() ?

      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;

        /**
        * Parse a URL to discover it's components
        *
        * @param {String} url The URL to be parsed
        * @returns {Object}
        */
        function resolveURL(url) {
          var href = url;

          if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }

          urlParsingNode.setAttribute('href', href);

          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
          };
        }

        originURL = resolveURL(window.location.href);

        /**
        * Determine if a URL shares the same origin as the current location
        *
        * @param {String} requestURL The URL to test
        * @returns {boolean} True if URL shares the same origin, otherwise false
        */
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() :

      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      module.exports = utils.isStandardBrowserEnv() ?

      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));

            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }

            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }

            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }

            if (secure === true) {
              cookie.push('secure');
            }

            document.cookie = cookie.join('; ');
          },

          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return match ? decodeURIComponent(match[3]) : null;
          },

          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      }() :

      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() {
            return null;
          },
          remove: function remove() {}
        };
      }();

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      function InterceptorManager() {
        this.handlers = [];
      }

      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      InterceptorManager.prototype.use = function use(fulfilled, rejected) {
        this.handlers.push({
          fulfilled: fulfilled,
          rejected: rejected
        });
        return this.handlers.length - 1;
      };

      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       */
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };

      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       */
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };

      module.exports = InterceptorManager;

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);
      var transformData = __webpack_require__(27);
      var isCancel = __webpack_require__(8);
      var defaults = __webpack_require__(2);
      var isAbsoluteURL = __webpack_require__(28);
      var combineURLs = __webpack_require__(29);

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
      }

      /**
       * Dispatch a request to the server using the configured adapter.
       *
       * @param {object} config The config that is to be used for the request
       * @returns {Promise} The Promise to be fulfilled
       */
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);

        // Support baseURL config
        if (config.baseURL && !isAbsoluteURL(config.url)) {
          config.url = combineURLs(config.baseURL, config.url);
        }

        // Ensure headers exist
        config.headers = config.headers || {};

        // Transform request data
        config.data = transformData(config.data, config.headers, config.transformRequest);

        // Flatten headers
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

        utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });

        var adapter = config.adapter || defaults.adapter;

        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);

          // Transform response data
          response.data = transformData(response.data, response.headers, config.transformResponse);

          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);

            // Transform response data
            if (reason && reason.response) {
              reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
          }

          return Promise.reject(reason);
        });
      };

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var utils = __webpack_require__(0);

      /**
       * Transform the data for a request or a response
       *
       * @param {Object|String} data The data to be transformed
       * @param {Array} headers The headers for the request or response
       * @param {Array|Function} fns A single function or Array of functions
       * @returns {*} The resulting transformed data
       */
      module.exports = function transformData(data, headers, fns) {
        /*eslint no-param-reassign:0*/
        utils.forEach(fns, function transform(fn) {
          data = fn(data, headers);
        });

        return data;
      };

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Determines whether the specified URL is absolute
       *
       * @param {string} url The URL to test
       * @returns {boolean} True if the specified URL is absolute, otherwise false
       */

      module.exports = function isAbsoluteURL(url) {
        // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
        // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
        // by any combination of letters, digits, plus, period, or hyphen.
        return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
        );
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Creates a new URL by combining the specified URLs
       *
       * @param {string} baseURL The base URL
       * @param {string} relativeURL The relative URL
       * @returns {string} The combined URL
       */

      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
      };

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var Cancel = __webpack_require__(9);

      /**
       * A `CancelToken` is an object that can be used to request cancellation of an operation.
       *
       * @class
       * @param {Function} executor The executor function.
       */
      function CancelToken(executor) {
        if (typeof executor !== 'function') {
          throw new TypeError('executor must be a function.');
        }

        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });

        var token = this;
        executor(function cancel(message) {
          if (token.reason) {
            // Cancellation has already been requested
            return;
          }

          token.reason = new Cancel(message);
          resolvePromise(token.reason);
        });
      }

      /**
       * Throws a `Cancel` if cancellation has been requested.
       */
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };

      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token: token,
          cancel: cancel
        };
      };

      module.exports = CancelToken;

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      /**
       * Syntactic sugar for invoking a function and expanding an array for arguments.
       *
       * Common use case would be to use `Function.prototype.apply`.
       *
       *  ```js
       *  function f(x, y, z) {}
       *  var args = [1, 2, 3];
       *  f.apply(null, args);
       *  ```
       *
       * With `spread` this example can be re-written.
       *
       *  ```js
       *  spread(function(x, y, z) {})([1, 2, 3]);
       *  ```
       *
       * @param {Function} callback
       * @returns {Function}
       */

      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };

      /***/
    },
    /* 32 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.LoggerConfigurator = undefined;

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _Constants = __webpack_require__(1);

      var _axios = __webpack_require__(4);

      var _axios2 = _interopRequireDefault(_axios);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var _loadFirst = true;

      var LoggerConfigurator = function () {
        function LoggerConfigurator() {
          _classCallCheck(this, LoggerConfigurator);
        }

        _createClass(LoggerConfigurator, null, [{
          key: 'Init',
          value: function Init(callback) {
            if (_loadFirst && LoggerConfigurator.IsConfigurationNotAssigned()) {
              _loadFirst = false;
              LoggerConfigurator.GetByExecutionEnvironment(callback);
            } else {
              callback();
            }
          }
        }, {
          key: 'Setup',
          value: function Setup(configuration, callback) {
            console.info("Setup ", configuration);
            if (configuration) {
              window[_Constants.Constants._LOGGER_VAR_WINDOW] = {};

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = Object.entries(_Constants.Constants._CONFIGURATIONS)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var _step$value = _slicedToArray(_step.value, 2),
                      key = _step$value[0],
                      value = _step$value[1];

                  setValueDefatult(configuration, key, value);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              Object.keys(configuration).forEach(function (key) {
                return window[_Constants.Constants._LOGGER_VAR_WINDOW][key] = configuration[key];
              });

              if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_ORIGIN) {
                LoggerConfigurator.SetConfigurationServer();
              }
            } else {
              window[_Constants.Constants._LOGGER_VAR_WINDOW] = _Constants.Constants._CONFIGURATIONS;
              console.info('Logger will use default configuration ... ', _Constants.Constants._CONFIGURATIONS);
            }
            callback();
          }
        }, {
          key: 'GetByExecutionEnvironment',
          value: function GetByExecutionEnvironment(callback) {
            if (LoggerConfigurator.IsBrowser()) {
              LoggerConfigurator.GetRemote(callback);
            } else {
              LoggerConfigurator.GetLocal(callback);
            }
          }
        }, {
          key: 'IsBrowser',
          value: function IsBrowser() {
            return window ? true : false;
          }
        }, {
          key: 'GetLocal',
          value: function GetLocal(callback) {
            LoggerConfigurator.Setup(null, callback);
          }
        }, {
          key: 'GetRemote',
          value: function GetRemote(callback) {
            var remoteLocation = window.location + "";
            var remoteSplit = remoteLocation.split('/');
            remoteLocation = remoteLocation.replace(remoteSplit[remoteSplit.length - 1], '');
            remoteLocation = remoteLocation + _Constants.Constants._LOGGER_CONFIGURATION_FILE_REMOTE;

            _axios2.default.get(remoteLocation, { responseType: 'json' }).then(function (response) {
              LoggerConfigurator.Setup(response.data, callback);
            }).catch(function (error) {
              console.error("It was not possible to get remote file configuration", error);
              LoggerConfigurator.Setup(null, callback);
            });
          }
        }, {
          key: 'SetConfigurationServer',
          value: function SetConfigurationServer() {
            if (window[_Constants.Constants._LOGGER_VAR_WINDOW]._USE_WINDOW_ORIGIN) {
              var hostname = window.location.hostname;
              if (hostname !== "127.0.0.1" && hostname !== "localhost") {
                var remoteLocation = window.location.origin;
                console.debug("SetConfigurationServer withLocation", remoteLocation);
                window[_Constants.Constants._LOGGER_VAR_WINDOW]["_SERVER"] = remoteLocation;
              }
            }
          }
        }, {
          key: 'ExistExternalConfiguration',
          value: function ExistExternalConfiguration(configuration) {
            return configuration ? true : false;
          }
        }, {
          key: 'IsConfigurationNotAssigned',
          value: function IsConfigurationNotAssigned() {
            return !_Constants.Constants._LOGGER_CONFIGURATION_ASSIGNED;
          }
        }]);

        return LoggerConfigurator;
      }();

      function setValueDefatult(configuration, property, valueDefault) {
        if (configuration[property] === undefined) {
          console.info("file logger.json does not contain field [%s] set value default [%s]", property, valueDefault);
          configuration[property] = valueDefault;
        }
      }

      exports.LoggerConfigurator = LoggerConfigurator;

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=global-logger-services-js-bundle.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.galateaMessageService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _strategyMessages = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var galateaMessageService = exports.galateaMessageService = function () {
    function galateaMessageService() {
        _classCallCheck(this, galateaMessageService);
    }

    _createClass(galateaMessageService, null, [{
        key: 'newMessage',
        value: function newMessage(json) {
            if (_strategyMessages.STRATEGY_MESSAGES[json.action]) {
                _strategyMessages.STRATEGY_MESSAGES[json.action](json);
            }
        }
    }]);

    return galateaMessageService;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STRATEGY_MESSAGES = undefined;

var _singletonWebSocket = __webpack_require__(0);

var _strategyChat = __webpack_require__(8);

var _strategyAssistedTransfer = __webpack_require__(9);

var _strategyDispositon = __webpack_require__(10);

var _strategyManualCall = __webpack_require__(12);

var _strategyCallFlow = __webpack_require__(13);

var _strategyOngoingCallIvr = __webpack_require__(14);

var _SingletonSharedData = __webpack_require__(1);

var STRATEGY_MESSAGES = exports.STRATEGY_MESSAGES = {
    "getUnavailables": function getUnavailables(json) {
        if (typeof onUnavailableTypes === 'function') {
            onUnavailableTypes(json.array);
        }
    },
    "agentStatusChange": function agentStatusChange(json) {
        _singletonWebSocket.SingletonWebSocket.currentStatus = json.data.currentState;
        if (typeof onAgentStatus === 'function') {
            onAgentStatus(json.data);
        }
    },
    "dataCall": function dataCall(json) {
        _singletonWebSocket.SingletonWebSocket.dataCall = json.data;
    },
    "extraDataCall": function extraDataCall(json) {
        _singletonWebSocket.SingletonWebSocket.dataCall = json.data;
    },
    "Chat": function Chat(json) {
        if (_strategyChat.STRATEGY_CHAT[json.subaction]) {
            _strategyChat.STRATEGY_CHAT[json.subaction](json);
        }
    },
    "AssistedTransfer": function AssistedTransfer(json) {
        if (_strategyAssistedTransfer.STRATEGY_ASSISTED_TRANSFER[json.subaction]) {
            _strategyAssistedTransfer.STRATEGY_ASSISTED_TRANSFER[json.subaction](json);
        }
    },
    "TransferOption": function TransferOption(json) {
        if (typeof onTransferOptions === 'function') {
            onTransferOptions(json);
        }
    },
    "onUnavailableHistory": function (_onUnavailableHistory) {
        function onUnavailableHistory(_x) {
            return _onUnavailableHistory.apply(this, arguments);
        }

        onUnavailableHistory.toString = function () {
            return _onUnavailableHistory.toString();
        };

        return onUnavailableHistory;
    }(function (json) {
        if (typeof onUnavailableHistory === 'function') {
            onUnavailableHistory(json.data);
        }
    }),
    "onCampaigns": function (_onCampaigns) {
        function onCampaigns(_x2) {
            return _onCampaigns.apply(this, arguments);
        }

        onCampaigns.toString = function () {
            return _onCampaigns.toString();
        };

        return onCampaigns;
    }(function (json) {
        if (typeof onCampaigns === 'function') {
            var data = [];
            for (var index in json.data) {
                data.push({ id: json.data[index].ID, name: json.data[index].Description });
            };
            onCampaigns(data);
        }
    }),
    "onCallHistory": function (_onCallHistory) {
        function onCallHistory(_x3) {
            return _onCallHistory.apply(this, arguments);
        }

        onCallHistory.toString = function () {
            return _onCallHistory.toString();
        };

        return onCallHistory;
    }(function (json) {
        if (typeof onCallHistory === 'function') {
            var data = json.data;
            for (var i in data) {
                delete data[i].imageItem;
                delete data[i].imageBackItem;
            }
            json.data = data;
            onCallHistory(json);
        }
    }),
    "Disposition": function Disposition(json) {
        if (_strategyDispositon.STRATEGY_DISPOSITION[json.subaction]) {
            _strategyDispositon.STRATEGY_DISPOSITION[json.subaction](json);
        }
    },
    "CallBar": function CallBar(json) {
        if (STRATEGY_CALL_BAR[json.subaction]) {
            STRATEGY_CALL_BAR[json.subaction](json);
        }
    },
    "ManualCall": function ManualCall(json) {
        if (_strategyManualCall.STRATEGY_MANUAL_CALL[json.subaction]) {
            _strategyManualCall.STRATEGY_MANUAL_CALL[json.subaction](json);
        }
    },
    "onLogin": function (_onLogin) {
        function onLogin() {
            return _onLogin.apply(this, arguments);
        }

        onLogin.toString = function () {
            return _onLogin.toString();
        };

        return onLogin;
    }(function () {
        if (typeof onLogin === 'function') {
            onLogin();
        }
    }),
    "onLogOut": function (_onLogOut) {
        function onLogOut() {
            return _onLogOut.apply(this, arguments);
        }

        onLogOut.toString = function () {
            return _onLogOut.toString();
        };

        return onLogOut;
    }(function () {
        _singletonWebSocket.SingletonWebSocket.currentStatus = "logout";
        _SingletonSharedData.SingletonSharedData.clear();
        var logoutState = { currentState: _singletonWebSocket.SingletonWebSocket.currentStatus };
        if (typeof onLogOut === 'function') {
            onLogOut();
            onAgentStatus(logoutState);
        }
    }),
    "CallFlow": function CallFlow(json) {
        if (_strategyCallFlow.STRATEGY_CALL_FLOW[json.subaction]) {
            _strategyCallFlow.STRATEGY_CALL_FLOW[json.subaction](json);
        }
    },
    "GetAgentID": function GetAgentID(json) {
        if (typeof agentId === 'function') {
            agentId(json);
        }
    },
    "GetUserName": function GetUserName(json) {
        if (typeof userName === 'function') {
            userName(json);
        }
    },
    "GetExtension": function GetExtension(json) {
        if (typeof extension === 'function') {
            extension(json);
        }
    },
    "onCallEnds": function (_onCallEnds) {
        function onCallEnds(_x4) {
            return _onCallEnds.apply(this, arguments);
        }

        onCallEnds.toString = function () {
            return _onCallEnds.toString();
        };

        return onCallEnds;
    }(function (message) {
        if (typeof onCallEnds === 'function') {
            onCallEnds(message.data);
        }
    }),
    "onDialingNumber": function (_onDialingNumber) {
        function onDialingNumber(_x5) {
            return _onDialingNumber.apply(this, arguments);
        }

        onDialingNumber.toString = function () {
            return _onDialingNumber.toString();
        };

        return onDialingNumber;
    }(function (message) {
        if (typeof onDialingNumber === 'function') {
            onDialingNumber(message.data);
        }
    }),
    "onPasswordUpdated": function (_onPasswordUpdated) {
        function onPasswordUpdated() {
            return _onPasswordUpdated.apply(this, arguments);
        }

        onPasswordUpdated.toString = function () {
            return _onPasswordUpdated.toString();
        };

        return onPasswordUpdated;
    }(function () {
        if (typeof onPasswordUpdated === 'function') {
            onPasswordUpdated();
        }
    }),
    "errorOnPasswordChange": function (_errorOnPasswordChange) {
        function errorOnPasswordChange(_x6) {
            return _errorOnPasswordChange.apply(this, arguments);
        }

        errorOnPasswordChange.toString = function () {
            return _errorOnPasswordChange.toString();
        };

        return errorOnPasswordChange;
    }(function (message) {
        if (typeof errorOnPasswordChange === 'function') {
            errorOnPasswordChange(message.data);
        }
    }),
    "onErrorPasswordUpdate": function (_onErrorPasswordUpdate) {
        function onErrorPasswordUpdate(_x7) {
            return _onErrorPasswordUpdate.apply(this, arguments);
        }

        onErrorPasswordUpdate.toString = function () {
            return _onErrorPasswordUpdate.toString();
        };

        return onErrorPasswordUpdate;
    }(function (message) {
        if (typeof onErrorPasswordUpdate === 'function') {
            onErrorPasswordUpdate(message.data);
        }
    }),
    "onError": function (_onError) {
        function onError(_x8) {
            return _onError.apply(this, arguments);
        }

        onError.toString = function () {
            return _onError.toString();
        };

        return onError;
    }(function (message) {
        if (typeof onError === 'function') {
            onError(message.data);
        }
    }),
    "remoteLoginError": function (_remoteLoginError) {
        function remoteLoginError(_x9) {
            return _remoteLoginError.apply(this, arguments);
        }

        remoteLoginError.toString = function () {
            return _remoteLoginError.toString();
        };

        return remoteLoginError;
    }(function (message) {
        _SingletonSharedData.SingletonSharedData.username = "";
        if (typeof remoteLoginError === 'function') {
            remoteLoginError(message.data);
        }
    }),
    "onCallsOnQueue": function (_onCallsOnQueue) {
        function onCallsOnQueue(_x10) {
            return _onCallsOnQueue.apply(this, arguments);
        }

        onCallsOnQueue.toString = function () {
            return _onCallsOnQueue.toString();
        };

        return onCallsOnQueue;
    }(function (message) {
        if (typeof onCallsOnQueue === 'function') {
            onCallsOnQueue(message.data);
        }
    }),
    "errorOnUnavailableStatus": function (_errorOnUnavailableStatus) {
        function errorOnUnavailableStatus(_x11) {
            return _errorOnUnavailableStatus.apply(this, arguments);
        }

        errorOnUnavailableStatus.toString = function () {
            return _errorOnUnavailableStatus.toString();
        };

        return errorOnUnavailableStatus;
    }(function (message) {
        if (typeof errorOnUnavailableStatus === 'function') {
            errorOnUnavailableStatus(message.data);
        }
    }),
    "errorOnUnavailableStatusHistory": function (_errorOnUnavailableStatusHistory) {
        function errorOnUnavailableStatusHistory(_x12) {
            return _errorOnUnavailableStatusHistory.apply(this, arguments);
        }

        errorOnUnavailableStatusHistory.toString = function () {
            return _errorOnUnavailableStatusHistory.toString();
        };

        return errorOnUnavailableStatusHistory;
    }(function (message) {
        if (typeof errorOnUnavailableStatusHistory === 'function') {
            errorOnUnavailableStatusHistory(message.data);
        }
    }),
    "errorOnCampaignsRelated": function (_errorOnCampaignsRelated) {
        function errorOnCampaignsRelated(_x13) {
            return _errorOnCampaignsRelated.apply(this, arguments);
        }

        errorOnCampaignsRelated.toString = function () {
            return _errorOnCampaignsRelated.toString();
        };

        return errorOnCampaignsRelated;
    }(function (message) {
        if (typeof errorOnCampaignsRelated === 'function') {
            errorOnCampaignsRelated(message.data);
        }
    }),
    "errorOnDialProcess": function (_errorOnDialProcess) {
        function errorOnDialProcess(_x14) {
            return _errorOnDialProcess.apply(this, arguments);
        }

        errorOnDialProcess.toString = function () {
            return _errorOnDialProcess.toString();
        };

        return errorOnDialProcess;
    }(function (message) {
        if (typeof errorOnDialProcess === 'function') {
            errorOnDialProcess(message.data);
        }
    }),
    "errorOnDispositionList": function (_errorOnDispositionList) {
        function errorOnDispositionList(_x15) {
            return _errorOnDispositionList.apply(this, arguments);
        }

        errorOnDispositionList.toString = function () {
            return _errorOnDispositionList.toString();
        };

        return errorOnDispositionList;
    }(function (message) {
        if (typeof errorOnDispositionList === 'function') {
            errorOnDispositionList(message.data);
        }
    }),
    "errorOnDispositionSelected": function (_errorOnDispositionSelected) {
        function errorOnDispositionSelected(_x16) {
            return _errorOnDispositionSelected.apply(this, arguments);
        }

        errorOnDispositionSelected.toString = function () {
            return _errorOnDispositionSelected.toString();
        };

        return errorOnDispositionSelected;
    }(function (message) {
        if (typeof errorOnDispositionSelected === 'function') {
            errorOnDispositionSelected(message.data);
        }
    }),
    "errorOnDispositionsPhonesList": function (_errorOnDispositionsPhonesList) {
        function errorOnDispositionsPhonesList(_x17) {
            return _errorOnDispositionsPhonesList.apply(this, arguments);
        }

        errorOnDispositionsPhonesList.toString = function () {
            return _errorOnDispositionsPhonesList.toString();
        };

        return errorOnDispositionsPhonesList;
    }(function (message) {
        if (typeof errorOnDispositionsPhonesList === 'function') {
            errorOnDispositionsPhonesList(message.data);
        }
    }),
    "errorOnPhoneNumbersList": function (_errorOnPhoneNumbersList) {
        function errorOnPhoneNumbersList(_x18) {
            return _errorOnPhoneNumbersList.apply(this, arguments);
        }

        errorOnPhoneNumbersList.toString = function () {
            return _errorOnPhoneNumbersList.toString();
        };

        return errorOnPhoneNumbersList;
    }(function (message) {
        if (typeof errorOnPhoneNumbersList === 'function') {
            errorOnPhoneNumbersList(message.data);
        }
    }),
    "errorOnCallHistory": function (_errorOnCallHistory) {
        function errorOnCallHistory(_x19) {
            return _errorOnCallHistory.apply(this, arguments);
        }

        errorOnCallHistory.toString = function () {
            return _errorOnCallHistory.toString();
        };

        return errorOnCallHistory;
    }(function (message) {
        if (typeof errorOnCallHistory === 'function') {
            errorOnCallHistory(message.data);
        }
    }),
    "OngoingCallIvr": function OngoingCallIvr(json) {
        if (_strategyOngoingCallIvr.STRATEGY_ONGOING_CALL_IVR[json.subaction]) {
            _strategyOngoingCallIvr.STRATEGY_ONGOING_CALL_IVR[json.subaction](json);
        }
    }
    //"onReprogramCall"(DispositionResult) {
    //     console.log("onReprogramCall");
    //    createTrigger.trigger("onReprogramCall", DispositionResult);
    //}
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var STRATEGY_CHAT = exports.STRATEGY_CHAT = {
    "SupervisorsToChat": function SupervisorsToChat(json) {
        if (typeof onAdministrators === 'function') {
            onAdministrators(json.data);
        }
    },
    "NewMessage": function NewMessage(json) {
        if (typeof onChatMessage === 'function') {
            onChatMessage(json.data);
        }
    },
    "errorOnChatAdministratorsList": function (_errorOnChatAdministratorsList) {
        function errorOnChatAdministratorsList(_x) {
            return _errorOnChatAdministratorsList.apply(this, arguments);
        }

        errorOnChatAdministratorsList.toString = function () {
            return _errorOnChatAdministratorsList.toString();
        };

        return errorOnChatAdministratorsList;
    }(function (json) {
        if (typeof errorOnChatAdministratorsList === 'function') {
            errorOnChatAdministratorsList(json.data);
        }
    })
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STRATEGY_ASSISTED_TRANSFER = exports.STRATEGY_ASSISTED_TRANSFER = {
  "onSecondCallConected": function (_onSecondCallConected) {
    function onSecondCallConected() {
      return _onSecondCallConected.apply(this, arguments);
    }

    onSecondCallConected.toString = function () {
      return _onSecondCallConected.toString();
    };

    return onSecondCallConected;
  }(function () {
    onSecondCallConected();
  }),
  "onSecondCallHangUp": function (_onSecondCallHangUp) {
    function onSecondCallHangUp() {
      return _onSecondCallHangUp.apply(this, arguments);
    }

    onSecondCallHangUp.toString = function () {
      return _onSecondCallHangUp.toString();
    };

    return onSecondCallHangUp;
  }(function () {
    onSecondCallHangUp();
  }),
  "onSecondCall": function (_onSecondCall) {
    function onSecondCall(_x) {
      return _onSecondCall.apply(this, arguments);
    }

    onSecondCall.toString = function () {
      return _onSecondCall.toString();
    };

    return onSecondCall;
  }(function (json) {
    onSecondCall(json.data);
  }),
  "onMainCall": function (_onMainCall) {
    function onMainCall(_x2) {
      return _onMainCall.apply(this, arguments);
    }

    onMainCall.toString = function () {
      return _onMainCall.toString();
    };

    return onMainCall;
  }(function (json) {
    if (typeof onMainCall === 'function') {
      onMainCall(json.data);
    }
  }),
  "onConference": function (_onConference) {
    function onConference(_x3) {
      return _onConference.apply(this, arguments);
    }

    onConference.toString = function () {
      return _onConference.toString();
    };

    return onConference;
  }(function (json) {
    if (typeof onConference === 'function') {
      onConference();
    }
  }),
  "onNextCall": function (_onNextCall) {
    function onNextCall(_x4) {
      return _onNextCall.apply(this, arguments);
    }

    onNextCall.toString = function () {
      return _onNextCall.toString();
    };

    return onNextCall;
  }(function (json) {
    if (typeof onNextCall === 'function') {
      onNextCall(json.data);
    }
  })
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STRATEGY_DISPOSITION = undefined;

var _DispositionAdapter = __webpack_require__(11);

var STRATEGY_DISPOSITION = exports.STRATEGY_DISPOSITION = {
  "onDispositions": function (_onDispositions) {
    function onDispositions(_x) {
      return _onDispositions.apply(this, arguments);
    }

    onDispositions.toString = function () {
      return _onDispositions.toString();
    };

    return onDispositions;
  }(function (json) {
    if (typeof onDispositions === 'function') {
      var dispositionMapped = {
        allowManualNumber: false,
        dispositions: _DispositionAdapter.DispositionAdapter.getDispositionArrayMapped(json.data),
        phoneNumbers: []
      };
      onDispositions(dispositionMapped);
    }
  }),
  "onDisposeApplied": function (_onDisposeApplied) {
    function onDisposeApplied() {
      return _onDisposeApplied.apply(this, arguments);
    }

    onDisposeApplied.toString = function () {
      return _onDisposeApplied.toString();
    };

    return onDisposeApplied;
  }(function () {
    if (typeof onDisposeApplied === 'function') {
      onDisposeApplied();
    }
  }),
  "onPhoneNumbers": function (_onPhoneNumbers) {
    function onPhoneNumbers(_x2) {
      return _onPhoneNumbers.apply(this, arguments);
    }

    onPhoneNumbers.toString = function () {
      return _onPhoneNumbers.toString();
    };

    return onPhoneNumbers;
  }(function (json) {
    if (typeof onPhoneNumbers === 'function') {
      onPhoneNumbers(json.data);
    }
  }),
  "onReprogramCall": function (_onReprogramCall) {
    function onReprogramCall(_x3) {
      return _onReprogramCall.apply(this, arguments);
    }

    onReprogramCall.toString = function () {
      return _onReprogramCall.toString();
    };

    return onReprogramCall;
  }(function (json) {
    if (typeof onReprogramCall === 'function') {
      onReprogramCall(json.data);
    }
  }),
  "onReprogramSuccess": function (_onReprogramSuccess) {
    function onReprogramSuccess() {
      return _onReprogramSuccess.apply(this, arguments);
    }

    onReprogramSuccess.toString = function () {
      return _onReprogramSuccess.toString();
    };

    return onReprogramSuccess;
  }(function () {
    if (typeof onReprogramSuccess === "function") {
      onReprogramSuccess();
    }
  }),
  "onDispositionsAndNumbers": function (_onDispositionsAndNumbers) {
    function onDispositionsAndNumbers(_x4) {
      return _onDispositionsAndNumbers.apply(this, arguments);
    }

    onDispositionsAndNumbers.toString = function () {
      return _onDispositionsAndNumbers.toString();
    };

    return onDispositionsAndNumbers;
  }(function (json) {
    if (typeof onDispositionsAndNumbers === 'function') {
      var dispositions = _DispositionAdapter.DispositionAdapter.getDispositionArrayMapped(json.data.dispositions);
      json.data.dispositions = dispositions;
      onDispositionsAndNumbers(json.data);
    }
  }),
  "errorOnDispose": function (_errorOnDispose) {
    function errorOnDispose(_x5) {
      return _errorOnDispose.apply(this, arguments);
    }

    errorOnDispose.toString = function () {
      return _errorOnDispose.toString();
    };

    return errorOnDispose;
  }(function (json) {
    if (typeof errorOnDispose === 'function') {
      errorOnDispose(json.data);
    }
  })
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DispositionAdapter = exports.DispositionAdapter = function () {
    function DispositionAdapter() {
        _classCallCheck(this, DispositionAdapter);
    }

    _createClass(DispositionAdapter, null, [{
        key: 'getDispositionMapped',
        value: function getDispositionMapped(galateaDisposition) {
            var subdispositions = null;
            if (typeof galateaDisposition.SubDisposition !== 'undefined') {
                var _this = this;
                subdispositions = _this.getSubDispositionArrayMapped(galateaDisposition.SubDisposition);
            }
            return {
                finishPreview: galateaDisposition.EndConversation,
                id: galateaDisposition.Id,
                name: galateaDisposition.Description,
                keepOnDial: 0,
                subDispositions: subdispositions
            };
        }
    }, {
        key: 'getDispositionArrayMapped',
        value: function getDispositionArrayMapped(galateaDispositionArray) {
            var _this2 = this;

            var dispositionsArray = [];
            galateaDispositionArray.forEach(function (element) {
                dispositionsArray.push(_this2.getDispositionMapped(element));
            });
            return dispositionsArray;
        }
    }, {
        key: 'getSubDispositionArrayMapped',
        value: function getSubDispositionArrayMapped(galateaSubDispositionArray) {
            var subdispositionsArray = [];
            for (var key in galateaSubDispositionArray) {
                subdispositionsArray.push(this.getDispositionMapped(galateaSubDispositionArray[key]));
            };
            return subdispositionsArray;
        }
    }]);

    return DispositionAdapter;
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var STRATEGY_MANUAL_CALL = exports.STRATEGY_MANUAL_CALL = {
    "wrongNumber": function (_wrongNumber) {
        function wrongNumber(_x) {
            return _wrongNumber.apply(this, arguments);
        }

        wrongNumber.toString = function () {
            return _wrongNumber.toString();
        };

        return wrongNumber;
    }(function (json) {
        if (typeof wrongNumber === 'function') {
            wrongNumber(json.data);
        }
    }),
    "onDialResult": function (_onDialResult) {
        function onDialResult(_x2) {
            return _onDialResult.apply(this, arguments);
        }

        onDialResult.toString = function () {
            return _onDialResult.toString();
        };

        return onDialResult;
    }(function (json) {
        if (typeof onDialResult === 'function') {
            onDialResult(json.data);
        }
    }),
    "numberOnDoNotCallList": function (_numberOnDoNotCallList) {
        function numberOnDoNotCallList() {
            return _numberOnDoNotCallList.apply(this, arguments);
        }

        numberOnDoNotCallList.toString = function () {
            return _numberOnDoNotCallList.toString();
        };

        return numberOnDoNotCallList;
    }(function () {
        if (typeof numberOnDoNotCallList === 'function') {
            numberOnDoNotCallList();
        }
    }),
    "timeZoneNumber": function (_timeZoneNumber) {
        function timeZoneNumber(_x3) {
            return _timeZoneNumber.apply(this, arguments);
        }

        timeZoneNumber.toString = function () {
            return _timeZoneNumber.toString();
        };

        return timeZoneNumber;
    }(function (json) {
        if (typeof timeZoneNumber === 'function') {
            timeZoneNumber(json.data.number);
        }
    })
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.STRATEGY_CALL_FLOW = undefined;

var _singletonWebSocket = __webpack_require__(0);

var STRATEGY_CALL_FLOW = exports.STRATEGY_CALL_FLOW = {
    "onCallRecieved": function (_onCallRecieved) {
        function onCallRecieved(_x) {
            return _onCallRecieved.apply(this, arguments);
        }

        onCallRecieved.toString = function () {
            return _onCallRecieved.toString();
        };

        return onCallRecieved;
    }(function (json) {
        if (typeof onCallRecieved === 'function') {
            var callInformation = {};
            callInformation.DNIS = json.data.DNIS;
            callInformation.IsQueueCall = json.data.IsQueueCall;
            callInformation.allowACDCallBack = true;
            callInformation.cal_key = json.data.CalKey;
            callInformation.callOut_id = json.data.CallOutId;
            callInformation.call_id = json.data.CallId;
            callInformation.cam_id = json.data.Id;
            callInformation.contactData = json.data.DataContact;
            callInformation.holdTime = json.data.holdCall;
            callInformation.phoneNumber = json.data.Phone;
            callInformation.port = json.data.Port;
            callInformation.secondPhone = 0;
            callInformation.typeCall = json.data.CallType;
            callInformation.waitingTime = json.data.WaitingTime;
            callInformation.wrapUpTime = json.data.WrapUpTime;
            _singletonWebSocket.SingletonWebSocket.dataCall = callInformation;

            onCallRecieved(callInformation);

            localStorage.setItem('NuxibaOnCallreceived', JSON.stringify(callInformation));
        }
    })

};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var STRATEGY_ONGOING_CALL_IVR = exports.STRATEGY_ONGOING_CALL_IVR = {
    "onIVRList": function (_onIVRList) {
        function onIVRList(_x) {
            return _onIVRList.apply(this, arguments);
        }

        onIVRList.toString = function () {
            return _onIVRList.toString();
        };

        return onIVRList;
    }(function (json) {
        if (typeof onIVRList === 'function') {
            onIVRList(json.data);
        }
    }),
    "onIdleStart": function (_onIdleStart) {
        function onIdleStart(_x2) {
            return _onIdleStart.apply(this, arguments);
        }

        onIdleStart.toString = function () {
            return _onIdleStart.toString();
        };

        return onIdleStart;
    }(function (json) {
        if (typeof onIdleStart === 'function') {
            onIdleStart(json.data);
        }
    }),
    "onIdleEnd": function (_onIdleEnd) {
        function onIdleEnd(_x3) {
            return _onIdleEnd.apply(this, arguments);
        }

        onIdleEnd.toString = function () {
            return _onIdleEnd.toString();
        };

        return onIdleEnd;
    }(function (json) {
        if (typeof onIdleEnd === 'function') {
            onIdleEnd(json.data);
        }
    })
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IntegrationAPI = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SingletonSharedData = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;
var token = null;
/**
 * CComponent to send or receive data
 */

var IntegrationAPI = exports.IntegrationAPI = function () {
    function IntegrationAPI(params) {
        _classCallCheck(this, IntegrationAPI);

        if (!instance) {
            instance = this;
            this.Parameters = params;
            this.WSParameters = {
                server: "",
                port: "",
                sendKeepAlive: true,
                secureConnection: false
            };
        }
        return instance;
    }
    ///////////////////////////////////////////// Connect the Integration /////////////////////////////////////////////
    /**
     * @description For the websocket connection we have to have access to the token <br/>
     * http://serverNuxibaIPOrDomain/AgentKolob/IntegrationToken.html
     * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} returns  SocketClosed o Error
     * @tutorial index
     * 
     */


    _createClass(IntegrationAPI, [{
        key: "connectToServer",
        value: function connectToServer() {
            if (!instance.Parameters.SingletonWebSocket.GetToken()) {
                var helperFrame = document.createElement('iframe');
                helperFrame.src = !this.WSParameters.serverIntegrationToken ? "http" + (this.WSParameters.secureConnection ? 's' : '') + "://" + this.WSParameters.server + "/AgentKolob/IntegrationToken.html" : this.WSParameters.serverIntegrationToken;
                helperFrame.id = 'helperFrame';
                helperFrame.style = 'display:none;';
                var body = document.getElementsByTagName('body')[0];
                body.appendChild(helperFrame);

                helperFrame.addEventListener("load", function () {
                    var helperFrameWindow = document.getElementById('helperFrame').contentWindow;
                    var getUserId = function getUserId() {
                        helperFrameWindow.postMessage('getNuxibaTokenAgent', '*');
                    };

                    // Capture incoming messages from helper frame
                    var messageEvent = function messageEvent(event) {
                        if (!token && typeof event.data === "string") {
                            token = event.data;
                            window.removeEventListener('message', messageEvent);
                            console.log("getNuxibaTokenAgent", token);

                            instance.Parameters.SingletonWebSocket.setToken(token);
                            instance.connectToServerAfterToken();
                        }
                    };
                    window.addEventListener('message', messageEvent);
                    getUserId();
                });
            } else {
                instance.connectToServerAfterToken();
            }
        }
        /**
         * @description Close the connection between the websocket and the server
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} returns status SocketClosed o Error
         * @tutorial index
         */

    }, {
        key: "disconnectToServer",
        value: function disconnectToServer() {
            this.Parameters.SingletonWebSocket.close();
        }

        /**
         * @description Internal method to make the connection after getting the token from the page: AgentKolob/IntegrationToken.html
         */

    }, {
        key: "connectToServerAfterToken",
        value: function connectToServerAfterToken() {
            var _this = this;

            this.Parameters.SingletonWebSocket.setwsServer(this.WSParameters.server);
            var port = 1337;
            if (!this.WSParameters.port) {
                port = this.WSParameters.secureConnection ? 1338 : 1337;
            } else {
                port = this.WSParameters.port;
            }
            this.Parameters.SingletonWebSocket.setPort(port);
            this.Parameters.SingletonWebSocket.setKeepAlive(this.WSParameters.sendKeepAlive);
            setTimeout(function () {
                _this.Parameters.SingletonWebSocket.connect(_this.WSParameters.secureConnection);
            }, 25);
        }
        ///////////////////////////////////////////// Métodos de status change} /////////////////////////////////////////////

        /**
         * @description Login
         * @param {string} username username
         * @param {string} password password
         * @fires CORE_APIEvents#{@link event:onLogin|onLogin} on sucess
         * @fires CORE_APIEvents#{@link event:remoteLoginError|remoteLoginError} on error
         * @example login("testAgent","testPassword");     
         * @tutorial DataAgent
         * @link login 
         */

    }, {
        key: "login",
        value: function login(username, password) {
            _SingletonSharedData.SingletonSharedData.username = username;
            this.Parameters.loginService.login(username, password);
        }
        /**
         * @description Cerrar sesión
         * @fires CORE_APIEvents#{@link event:onLogOut|onLogOut} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @example closeSession(); 
         * @tutorial DataAgent
         * @link CloseSession
         */

    }, {
        key: "CloseSession",
        value: function CloseSession() {
            this.Parameters.loginService.CloseSession();
        }
        /**
        * @description logout
        * @deprecated will be changed to CloseSession
        * @fires CORE_APIEvents#{@link event:onLogOut|onLogOut} on sucess
        * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
        * @example closeSession(); 
        * @tutorial DataAgent
        * @link closeSession
        */

    }, {
        key: "closeSession",
        value: function closeSession() {
            this.Parameters.loginService.CloseSession();
        }
        /**
         * @description Cambiar la contraseña
         * @fires CORE_APIEvents#{@link event:onPasswordUpdated|onPasswordUpdated} on sucess
         * @fires CORE_APIEvents#{@link event:errorOnPasswordChange|errorOnPasswordChange} on error
         * @fires CORE_APIEvents#{@link event:onErrorPasswordUpdate |onErrorPasswordUpdate} on error
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status     
         * @param {string} currentPassword actual password
         * @param {string} newPassword New password
         * @example ChangePassword("passwordCurrent", "NewPassword");
         * @link ChangePassword
         * @tutorial DataAgent
         */

    }, {
        key: "ChangePassword",
        value: function ChangePassword(currentPassword, newPassword) {
            this.Parameters.loginService.ChangePassword(currentPassword, newPassword);
        }
        /**
         * @description Retrieves the agent id
         * @fires CORE_APIEvents#{@link event:agentId|agentId} eevent to retrieve the agent id
         * @link GetAgentID
         */

    }, {
        key: "GetAgentID",
        value: function GetAgentID() {
            this.Parameters.agentDataService.GetAgentID();
        }
        /**
         * @description Retrieves the user's name
         * @deprecated Will be changed to GetUserName
         * @returns {string} User's name
         * @link GetUserName
         */

    }, {
        key: "getUsername",
        value: function getUsername() {
            return this.Parameters.agentDataService.GetUserName();
        }
        /**
        * @description Retrieves the user's name
        * @returns {string}  User's name
        * @link GetUserName
        */

    }, {
        key: "GetUserName",
        value: function GetUserName() {
            return this.Parameters.agentDataService.GetUserName();
        }
        /**
         * @description Retrieves the extension
         * @fires CORE_APIEvents#{@link event:extension|extension} Event to retrieve the agent's extension
         * @link GetExtension
         */

    }, {
        key: "GetExtension",
        value: function GetExtension() {
            this.Parameters.agentDataService.GetExtension();
        }
        /////////////////////////////////////////////////////////////////////////// Métodos Disponible y no disponible /////////////////////////////////////////////
        /**
         * @description Asign an unavailable status
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:errorOnUnavailableStatus|errorOnUnavailableStatus} on error is not implemented
         * @param {int} unavailableId Unavailable status id
         * @see getUnavailables
         * @example setOnUnavailableStatus(1); //Unavailable status id
         * @example setOnUnavailableStatus(0); //When the unavailable status does not exist on the list, execute the event: errorOnUnavailableStatus
         * @link setOnUnavailableStatus
         */

    }, {
        key: "setOnUnavailableStatus",
        value: function setOnUnavailableStatus(unavailableID) {
            this.Parameters.notAvailableService.setUnavailable(unavailableID);
        }
        /**
         * @description Asignar un no disponible
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:errorOnUnavailableStatus|errorOnUnavailableStatus} on error
         * @param {int} unavailableId identificado del no disponible
         * @see getUnavailables
         * @example setOnUnavailableStatus(1); //Unavailable status id
         * @example setOnUnavailableStatus(0); //When the unavailable status does not exist on the list, execute the event errorOnUnavailableStatus
         * @link setOnUnavailableStatus
         */

    }, {
        key: "setUnavailable",
        value: function setUnavailable(unavailableID) {
            this.Parameters.notAvailableService.setUnavailable(unavailableID);
        }
        /**
         * @description Change to available
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link SetReady
         * @tutorial Unavailable
         */

    }, {
        key: "SetReady",
        value: function SetReady() {
            this.Parameters.loginService.SetReady();
        }
        /**
         * @description change to available
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link SetAvailable
         * @tutorial Unavailable
         */

    }, {
        key: "SetAvailable",
        value: function SetAvailable() {
            this.Parameters.loginService.SetReady();
        }
        /**
         * @description  change to available
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link SetReady
         * @tutorial Unavailable
         */

    }, {
        key: "SetReady",
        value: function SetReady() {
            this.Parameters.loginService.SetReady();
        }
        /////////////////////////////////////////////////////////////////////////// Métodos pedir colecciones ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Call the unavailable staus asigned list
         * @fires CORE_APIEvents#{@link event:onUnavailableTypes|onUnavailableTypes} returns the unavailable staus asigned list
         * @fires CORE_APIEvents#{@link event:errorOnUnavailableStatus|errorOnUnavailableStatus} on error
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @example getUnavailables(); 
         * @link getUnavailables
         * @tutorial Unavailable
         */

    }, {
        key: "getUnavailables",
        value: function getUnavailables() {
            this.Parameters.notAvailableService.getUnavailables();
        }
        /**
         * @description Call the asigned manual dialing campaigns list
         * @fires CORE_APIEvents#{@link event:onCampaigns|onCampaigns} returns the campaigns list
         * @fires CORE_APIEvents#{@link event:errorOnCampaignsRelated|errorOnCampaignsRelated} on error
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @example GetCampaignsRelated()
         * @link GetCampaignsRelated
         * @tutorial ManualCall
         */

    }, {
        key: "getCampaignsRelated",
        value: function getCampaignsRelated() {
            this.Parameters.callService.GetCampaignsRelated();
        }
        /**
         * @description  Call the transfer options
         * @param {bool} outboundType Call type, inbound (false), outbound (true)
         * @param {uint} id identificador del ACD o Campaña
         * @fires CORE_APIEvents#{@link event:onTransferOptions|onTransferOptions}  returns the transfer options list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link getTransfersOptions
         * @tutorial BlindTransfer
         */

    }, {
        key: "getTransfersOptions",
        value: function getTransfersOptions() {
            this.Parameters.callService.getTransfersOptions();
        }

        /////////////////////////////////////////////////////////////////////////// Métodos de llamadas Salida ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Do manual dialing
         * @fires CORE_APIEvents#{@link event:wrongNumber|wrongNumber} Phone does not meet the dialing rules
         * @fires CORE_APIEvents#{@link event:onDialingNumber|onDialingNumber} on sucess  
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:numberOnDoNotCallList|numberOnDoNotCallList} Phone number is in a black list
         * @fires CORE_APIEvents#{@link event:timeZoneNumber|timeZoneNumber} Phone number can't be dialed in this schedule
         * @fires CORE_APIEvents#{@link event:onDialResult|onDialResult} dialing results
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {String} phoneNum Phone number to dial
         * @param {int} campId  Campaign id
         * @param {String} clientName [clientName= ] client's name
         * @param {String} callKey [callKey= null] Id asigned by the client
         * @example makeManualCall('11078510',1,'Jesus','4582 3423 4865')  //All the parameters
         * @example makeManualCall('11078510',10)  //Only required parameters
         * @see getUnavailables
         * @tutorial ManualCall
         */

    }, {
        key: "makeManualCall",
        value: function makeManualCall(phoneNum, campId, clientName, callKey) {
            this.Parameters.callService.makeManualCall(phoneNum, campId, clientName, callKey);
        }
        /**
         * @description Cancel the manual dialing before the client answer the phone
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onDialResult|onDialResult} dialing results
         * @example HangUpManualDial();
         * @link HangUpManualDial
         * @tutorial ManualCall
         */

    }, {
        key: "hangUpManualDial",
        value: function hangUpManualDial() {
            this.Parameters.callService.HangUpManualDial();
        }
        /**
         * @description Update client's contact info
         * @fires CORE_APIEvents#{@link event:onDataCallUpdated|onDataCallUpdated} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:errorOnUpdateDataCall|errorOnUpdateDataCall} on error
         * @param {uint} callOutID Call id
         * @param {String} data1 Value is saved in the field: dato1
         * @param {String} data2 Value is saved in the field: dato2
         * @param {String} data3 Value is saved in the field: dato3
         * @param {String} data4 Value is saved in the field: dato4
         * @param {String} data5 Value is saved in the field: dato5
         * @link UpdateDataCall
         * @tutorial CallInformation
         */

    }, {
        key: "updateDataCall",
        value: function updateDataCall(callOutID, data1, data2, data3, data4, data5) {
            this.Parameters.callService.UpdateDataCall(callOutID, data1, data2, data3, data4, data5);
        }
        /**
         * @description Update client's contact info
         * @todo event is not implemented
         * @fires CORE_APIEvents#{@link event:onDataCallUpdated|onDataCallUpdated} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:errorOnUpdateDataCall|errorOnUpdateDataCall} on error
         * @param {uint} callOutID Identificador de la llamada 
         * @param {String} data1 Value is saved in the field: dato1
         * @param {String} data2 Value is saved in the field: dato2
         * @param {String} data3 Value is saved in the field: dato3
         * @param {String} data4 Value is saved in the field: dato4
         * @param {String} data5 Value is saved in the field: dato5
         * @link UpdateDataCall
         * @tutorial CallInformation
         */

    }, {
        key: "updateCallData",
        value: function updateCallData(callOutID, data1, data2, data3, data4, data5) {
            this.Parameters.callService.UpdateDataCall(callOutID, data1, data2, data3, data4, data5);
        }

        /////////////////////////////////////////////////////////////////////////// Métodos Información LLamda ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Retrieve last call data
         * @example {
         * call_id:1, cam_id:1, cal_key:"", callOut_id:0, DNIS:"1009",
         * typeCall:1, //1 ACD
         * IsQueueCall:0, holdTime:15, phoneNumber:"11078510", port:1, wrapUpTime:15,
         * contactData:null
         * }
         * @example 
         * {
         * DNIS: "",
         * IsQueueCall: false, 
         * cal_key: "",
         * callOut_id: 118,
         * call_id: 110,
         * cam_id: 1,
         * contactData: ["Dato1","Dato2","Dato3","Dato4","Dato5"],
         * holdTime: true,
         * phoneNumber: "2005",
         * port: 13, 
         * typeCall: 2,
         * waitingTime: 0,
         * wrapUpTime: 35
         * }
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link GetLastCallData
         * @tutorial CallInformation
         */

    }, {
        key: "GetLastCallData",
        value: function GetLastCallData() {

            var callData = this.Parameters.SingletonWebSocket.dataCall;

            if (!callData) {

                var NuxibaOnCallreceived = Storage.getItem('NuxibaOnCallreceived');

                callData = JSON.parse(NuxibaOnCallreceived);
            }

            return this.Parameters.SingletonWebSocket.dataCall;
        }
        /**
         * @description MMark the call
         * @link addMark
         * @tutorial CallControl
         */

    }, {
        key: "addMark",
        value: function addMark() {
            this.Parameters.callBarService.addMark();
        }
        /**
         * @description Start or stop the recording
         * @link addMark
         * @tutorial CallControl
         */

    }, {
        key: "recordingStopStart",
        value: function recordingStopStart() {
            this.Parameters.callBarService.recordingStopStart();
        }
        /**
         * @description Put or quit hold during the call
         * @todo event is not implemented
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onHold|onHold}  event is not implemented
         * @link HoldCall
         * @example HoldCall();
         * @tutorial CallControl
         */

    }, {
        key: "HoldCall",
        value: function HoldCall() {
            this.Parameters.callBarService.HoldCall();
        }
        /**
         * @description Mute the microphone
         * @todo event is not implemented
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onMute|onMute} status microphone muted     
         * @link SetMute
         * @tutorial CallControl
         */

    }, {
        key: "SetMute",
        value: function SetMute() {
            this.Parameters.callBarService.SetMute();
        }
        /**
         * @description Speakers and microphone volume control
         * @param {Number} deviceType select the audio, speakers(0) o microphone(1)
         * @param {Number} xVol Turn the volume: value from  0 to 100
         * @link controlVolume
         * @tutorial CallControl
         */

    }, {
        key: "controlVolume",
        value: function controlVolume(deviceType, xVol) {
            this.Parameters.callBarService.controlVolume(deviceType, xVol);
        }
        /**
        * @description Speakers and microphone volume control
        * @param {Number} deviceType select the audio, speakers(0) o microphone(1)
        * @param {Number} xVol Turn the volume: value from  0 to 100
        * @link controlVolume
        * @tutorial CallControl
        */

    }, {
        key: "volumeControl",
        value: function volumeControl(deviceType, xVol) {
            this.Parameters.callBarService.controlVolume(deviceType, xVol);
        }
        /**
         * @description send dialing tones
         * @param {string} digit Send digits from 0 to 9, * y #
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:errorOnDTMFJS|errorOnDTMFJS} send error
         * @link DTMFDigit
         * @tutorial CallControl
         */

    }, {
        key: "DTMFDigit",
        value: function DTMFDigit(digit) {
            this.Parameters.callBarService.DTMFDigit(digit);
        }
        /**
         * @description Hang up call
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link HangUpCall
         * @tutorial CallControl
         */

    }, {
        key: "hangUpCall",
        value: function hangUpCall(number) {
            this.Parameters.callService.HangUpCall();
        }
        /**
         * @description Hang up call
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link HangUpCall
         * @tutorial CallControl
         */

    }, {
        key: "HangUpCall",
        value: function HangUpCall(number) {
            this.Parameters.callService.HangUpCall();
        }
        /**
         * @description Hang up call and leave a message
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link HangUpCall
         * @tutorial CallControl
         */

    }, {
        key: "HangUpAndLeaveMessage",
        value: function HangUpAndLeaveMessage() {
            this.Parameters.callService.HangUpAndLeaveMessage();
        }

        /////////////////////////////////////////////////////////////////////////// Métodos IVR ///////////////////////////////////////////////////////////////////////////

        /**
         * @description Call the IVR list
         * @fires CORE_APIEvents#{@link event:onIVRList|onIVRList}  returns the IVR list
         * @link getIVRList
         * @tutorial IVR
         */

    }, {
        key: "getIVRList",
        value: function getIVRList() {
            this.Parameters.ongoingCallIvrService.getIVRList();
        }
        /**
         * @description Starts an IVR block, the agent remains waiting until the IVR stops playing
         * @param {int} IVRId IVR block
         * @fires CORE_APIEvents#{@link event:onIdleStart|onIdleStart} starts the IVR block on the client side
         * @link idleStart
         * @tutorial IVR
         */

    }, {
        key: "idleStart",
        value: function idleStart(IVRId) {
            this.Parameters.ongoingCallIvrService.idleStart(IVRId);
        }

        /////////////////////////////////////////////////////////////////////////// Métodos de transferencia Ciega ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Transer the call to an agent
         * @param {int} extensionAgent agent's extension id
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus}  status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @see getTransfersOptions
         * @link transferCallToAgent
         * @tutorial BlindTransfer
         */

    }, {
        key: "transferCallToAgent",
        value: function transferCallToAgent(extensionAgent) {
            this.Parameters.callService.transferCallToAgent(extensionAgent);
        }
        /**
         * @description Transfer the call to an ACD 
         * @param {int} acdId ACD id
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @see getTransfersOptions
         * @link transferCallToACD
         * @tutorial BlindTransfer
         */

    }, {
        key: "transferCallToACD",
        value: function transferCallToACD(acdId) {
            this.Parameters.callService.transferCallToACD(acdId);
        }
        /**
         * @description Transfer the call to an external phone number 
         * @param {string} phone Extrnal phone number
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @see getTransfersOptions
         * @link transferCallToPhoneNumber
         * @tutorial BlindTransfer
         */

    }, {
        key: "transferCallToPhoneNumber",
        value: function transferCallToPhoneNumber(phone) {
            this.Parameters.callService.transferCallToPhoneNumber(phone);
        }
        /////////////////////////////////////////////////////////////////////////// Métodos de transferencia  Asistida y conferencia ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Make an assisted call
         * @param {string} phone Phone number to call
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedDialNumber
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedDialNumber",
        value: function assistedDialNumber(phone) {
            this.Parameters.assistedTransferService.assistedDialNumber(phone);
        }
        /**
         * @description Hang up the second call
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerHangUP
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerHangUP",
        value: function assistedXFerHangUP() {
            this.Parameters.assistedTransferService.assistedXFerHangUP();
        }
        /**
         * @description Transfer main call to the second coll
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerTransferCalls
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerTransferCalls",
        value: function assistedXFerTransferCalls() {
            this.Parameters.assistedTransferService.assistedXFerTransferCalls();
        }
        /**
         * @description Select the main call, the second call remains on hold
         * @fires CORE_APIEvents#{@link event:onMainCall |onMainCall } change to main call
         * fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerUseMainCall
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerUseMainCall",
        value: function assistedXFerUseMainCall() {
            this.Parameters.assistedTransferService.assistedXFerUseMainCall();
        }
        /**
         * @description Select the second call and the main call remains on hold
         * @fires CORE_APIEvents#{@link event:onSecondCall |onSecondCall } change to the second call
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerUseSecondCall
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerUseSecondCall",
        value: function assistedXFerUseSecondCall() {
            this.Parameters.assistedTransferService.assistedXFerUseSecondCall();
        }
        /**
         * @description Starts a conference between the main call, the second one and the agent, 
         *  {@link assistedXFerUseMainCall}
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerMakeConference
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerMakeConference",
        value: function assistedXFerMakeConference() {
            this.Parameters.assistedTransferService.assistedXFerMakeConference();
        }
        /**
         * @description Leave the conference and transfer the call to the main and second call
         * @fires CORE_APIEvents#{@link event:onAgentStatus|onAgentStatus} status change}
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status 
         * @link assistedXFerLeaveConference
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerLeaveConference",
        value: function assistedXFerLeaveConference() {
            this.Parameters.assistedTransferService.assistedXFerLeaveConference();
        }
        /**
         * @description Cuelga la segunda llamada
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link assistedXFerDropSecondCall
         * @tutorial AssistedTransfer
         */

    }, {
        key: "assistedXFerDropSecondCall",
        value: function assistedXFerDropSecondCall() {
            this.Parameters.assistedTransferService.assistedXFerDropSecondCall();
        }
    }, {
        key: "assistedXFerDropFirstCall",
        value: function assistedXFerDropFirstCall() {
            this.Parameters.assistedTransferService.assistedXFerDropFirstCall();
        }
        /////////////////////////////////////////////////////////////////////////// Métodos Calificar las llamadas Salida ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Call the disposotions and sub dispositions list 
         * @fires CORE_APIEvents#{@link event:onDispositions|onDispositions} returns the disposotions and sub dispositions list 
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {int} camId Campaign id
         * @link getCampaignDispositions
         * @tutorial OutboundDispositions
         */

    }, {
        key: "getCampaignDispositions",
        value: function getCampaignDispositions(camId) {
            this.Parameters.dispositionCallService.getCampaignDispositions(camId);
        }
        /**
         * @description Call the dispositions, sub dispositions and phone numbers list to make a callback
         * @fires CORE_APIEvents#{@link event:onDispositionsAndNumbers|onDispositionsAndNumbers} returns the list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {uint} camId Icampaign id
         * @param {uint} callOutID call id
         * @link getCampaignDispositionsAndNumbers
         * @tutorial OutboundDispositions
         */

    }, {
        key: "getCampaignDispositionsAndNumbers",
        value: function getCampaignDispositionsAndNumbers(idCampaign, callOutID) {
            this.Parameters.reprogamCallService.getCampaignDispositionsAndNumbers(idCampaign, callOutID);
        }
        /**
         * @description Call the phone numbers list to make callback
         * @param {Number} callOutID register id
         * @fires CORE_APIEvents#{@link event:onPhoneNumbers|onPhoneNumbers} returns the phone numbers list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link getPhoneNumbers
         * @tutorial OutboundDispositions
         */

    }, {
        key: "getPhoneNumbers",
        value: function getPhoneNumbers(callOutID) {
            this.Parameters.reprogamCallService.getPhoneNumbers(callOutID);
        }
        /**
         * @description Disposition a call without callback
         * @todo The method fails 
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onReprogramCall|onReprogramCall} Disposition has callback
         * @param {int} dispositionId Disposition id
         * @param {int} camId Campaign id
         * @param {int} callID Call id
         * @param {int} subId [subId= 0] Sub disposition id
         * @link disposeCampaingCall
         * @see reprogramCampaignCall
         * @example disposeCampaingCall(1, 1, 123, 0);
         * @example disposeCampaingCall(1, 1, 123);
         * @tutorial OutboundDispositions
         */

    }, {
        key: "disposeCampaingCall",
        value: function disposeCampaingCall(dispositionId, camId, callID, subId) {
            this.Parameters.dispositionCallService.disposeCampaingCall(dispositionId, camId, callID, subId);
        }
        /**
         * @description Disposition a call with callback
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @param {uint} camId Campaign id
         * @param {uint} dispositionId Disposition id
         * @param {uint} callID Call id
         * @param {String} dateCallBack Call back date yyyy/MM/dd HH:mm
         * @param {String} telephone Phone number to callback
         * @param {Boolean} existingNumber If the phone number is previously registered {@link getPhoneNumbers}
         * @param {int} subDispositionId [subDispositionId= 0] sub disposition id
         * @link reprogramCampaignCall
         * @example reprogramCampaignCall(1, 1, 123, "2019/04/23 13:35", "11078510", false, 0);
         * @example reprogramCampaignCall(1, 1, 123, "2019/04/23 13:35", "11078510", true);
         * @tutorial OutboundDispositions
         */

    }, {
        key: "reprogramCampaignCall",
        value: function reprogramCampaignCall(idCampaign, idDisposition, callID, dateCallBack, telephone, existingNumber, subId) {
            this.Parameters.reprogamCallService.reprogramCampaignCall(idCampaign, idDisposition, callID, dateCallBack, telephone, existingNumber, subId);
        }
        /////////////////////////////////////////////////////////////////////////// Disposition inbound calls Methods /////////////////////////////////////////////

        /**
         * @description Call inbound calls dispositions list
         * @fires CORE_APIEvents#{@link event:onDispositions|onDispositions} returns the list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {int} acdId
         * @link getACDDispositions
         * @tutorial InboundDispositions
         */

    }, {
        key: "getACDDispositions",
        value: function getACDDispositions(acdId) {
            this.Parameters.dispositionCallService.getACDDispositions(acdId);
        }
        /**
         * @description Disposition a call without callback
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onReprogramCall|onReprogramCall} Disposition has callback
         * @param {int} dispositionId disposition id
         * @param {int} callID call id
         * @param {int} subDispositionId [subDispositionId= 0] sub disposition id
         * @link disposeACDCall
         * @example disposeACDCall(1, 45, 45); // with subdisposition
         * @example disposeACDCall(2, 45); // without sub disposition
         * @see reprogramAcdCall
         * @tutorial InboundDispositions
         */

    }, {
        key: "disposeACDCall",
        value: function disposeACDCall(dispositionId, callID, subId) {
            this.Parameters.dispositionCallService.disposeACDCall(dispositionId, callID, subId);
        }
        /**
         * @description Disposition a call without callback
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onReprogramCall|onReprogramCall} Disposition has callback
         * @param {int} dispositionId disposition id
         * @param {int} callID call id
         * @param {int} subDispositionId [subDispositionId= 0] sub disposition id
         * @link disposeACDCall
         * @example disposeACDCall(1, 45, 45); // with sub disposition
         * @example disposeACDCall(2, 45); // without sub disposition
         * @see reprogramAcdCall
         * @tutorial InboundDispositions
         */

    }, {
        key: "dispositionACDCall",
        value: function dispositionACDCall(dispositionId, callID, subId) {
            this.Parameters.dispositionCallService.disposeACDCall(dispositionId, callID, subId);
        }
        /**
         * @description disposition a call with callback
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {uint} acdId ACD id
         * @param {int} dispositionId disposition id
         * @param {int} callId call id
         * @param {string} dateCallBack Callback date yyyy/MM/dd HH:mm
         * @param {string} telephone Phone number to callback
         * @param {string} callKey Id provided by the client
         * @param {string} data1 Value is saved in the field: dato1
         * @param {string} data2 Value is saved in the field: dato2
         * @param {string} data3 Value is saved in the field: dato3
         * @param {string} data4 Value is saved in the field: dato4
         * @param {string} data5 Value is saved in the field: dato5
         * @param {boolean} existNum [existNum= false] if the number already exists in the system
         * @param {int} subId [subId= 0] Sub disposition id
         * @link reprogramAcdCall
         * @see getPhoneNumbers
         * @example reprogramAcdCall(1, 2, 123, "2019/04/25 18:00", "11078510", "Carlos-001", "data1", "data2", "data3", "data4", "data5", true, 10);
         * @example reprogramAcdCall(1, 2, 123, "2019/04/25 18:00", "11078510", "Carlos-001", "data1", "data2", "data3", "data4", "data5");
         * @tutorial InboundDispositions
         */

    }, {
        key: "reprogramAcdCall",
        value: function reprogramAcdCall(idACD, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subId) {
            this.Parameters.reprogamCallService.CallBackAcd(idACD, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subId);
        }
        /**
         * @description disposition a call with callback
         * @fires CORE_APIEvents#{@link event:onDisposeApplied|onDisposeApplied} on sucess
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {uint} acdId ACD id
         * @param {int} dispositionId  disposition id
         * @param {int} callId call id
         * @param {string} dateCallBack Callback date yyyy/MM/dd HH:mm
         * @param {string} telephone Phone number to callback
         * @param {string} callKey Id provided by the client
         * @param {string} data1 Value is saved in the field: dato1
         * @param {string} data2 Value is saved in the field: dato2
         * @param {string} data3 Value is saved in the field: dato3
         * @param {string} data4 Value is saved in the field: dato4
         * @param {string} data5 Value is saved in the field: dato5
         * @param {boolean} existNum [existNum= false] if the number already exists in the system
         * @param {int} subId [subId= 0] Sub disposition id
         * @link reprogramAcdCall
         * @see getPhoneNumbers
         * @example reprogramAcdCall(1, 2, 123, "2019/04/25 18:00", "11078510", "Carlos-001", "data1", "data2", "data3", "data4", "data5", true, 10);
         * @example reprogramAcdCall(1, 2, 123, "2019/04/25 18:00", "11078510", "Carlos-001", "data1", "data2", "data3", "data4", "data5");
         * @tutorial InboundDispositions
         */

    }, {
        key: "CallBackAcd",
        value: function CallBackAcd(idCampaign, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subDis) {
            this.Parameters.reprogamCallService.CallBackAcd(idCampaign, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subDis);
        }
        /////////////////////////////////////////////////////////////////////////// Métodos Historial ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Call the calls record for the day
         * @fires CORE_APIEvents#{@link event:onCallHistory|onCallHistory} returns call record list
         * @fires CORE_APIEvents#{@link event:errorOnCallHistory|errorOnCallHistory} on error
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link getCallHistory
         */

    }, {
        key: "getCallHistory",
        value: function getCallHistory() {
            this.Parameters.callLog.getCallHistory();
        }
        /**
         * @description Call the unavailable status used in the day
         * @fires CORE_APIEvents#{@link event:onUnavailableHistory|onUnavailableHistory} returns the unavailable status usted list
         * @fires CORE_APIEvents#{@link event:errorOnUnavailableStatusHistory|errorOnUnavailableStatusHistory} on error
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link getunavalibaleHistory
         */

    }, {
        key: "getunavalibaleHistory",
        value: function getunavalibaleHistory() {
            this.Parameters.notAvailableService.getunavalibaleHistory();
        }

        /////////////////////////////////////////////////////////////////////////// Admin and agent chat methods ///////////////////////////////////////////////////////////////////////////
        /**
         * @description Call the online admins list
         * @fires CORE_APIEvents#{@link event:onAdministrators|onAdministrators} returns the online admins list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link getSupervisorsToChat
         * @tutorial ChatAdminstrator
         */

    }, {
        key: "getSupervisorsToChat",
        value: function getSupervisorsToChat() {
            this.Parameters.chatService.getSupervisorsToChat();
        }
        /**
         * @description send message to the admin
         * @todo  
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {string} administrator Admin's name
         * @param {string} message message
         * @link sendChatMessage
         * @see getSupervisorsToChat
         * @example sendChatMessage("root","Hola como te va es un mensaje de prueba");
         * @tutorial ChatAdminstrator
         */

    }, {
        key: "sendChatMessage",
        value: function sendChatMessage(administrator, message) {
            this.Parameters.chatService.sendClientChatMessage();
        }
        ///////////////////////////////////////////////////////////////////////////  Admin and agent chat methods///////////////////////////////////////////////////////////////////////////
        /**
         * @description Send message to the client
         * @todo  
         * @param {uint} adminId Admin id
         * @param {String} message message 
         * @see {@link event:onClientChatConnected|onClientChatConnected} chat info
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @link sendClientChatMessage
         * @example sendClientChatMessage(1,"Hola buenod dias en que puedo ayudarlo");
         * @tutorial ChatClient
         */

    }, {
        key: "sendClientChatMessage",
        value: function sendClientChatMessage(adminId, message) {
            this.Parameters.chatService.sendClientChatMessage(adminId, message);
        }

        /**
         * @description End conversation
         * @todo  
         * @param {uint} chatId Chat id
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @fires CORE_APIEvents#{@link event:onClientChatWrapUpStarted|onClientChatWrapUpStarted} starts wrap up
         * @link finishClientChatConversation
         * @example finishClientChatConversation(1);
         * @tutorial ChatClient
         */

    }, {
        key: "finishClientChatConversation",
        value: function finishClientChatConversation(chatId) {}

        /**
         * @description disposition the chat
         * @todo  
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {uint} chatId chat id
         * @param {uint} dispId disposition id
         * @param {uint} subDispId Sub disposition id
         * @link disposeClientChat
         * @see getACDDispositions
         * @example disposeClientChat(1, 1); // without sub disposition
         * @example disposeClientChat(2, 2, 45);  // with sub disposition
         * @tutorial ChatClient
         */

    }, {
        key: "disposeClientChat",
        value: function disposeClientChat(chatId, dispId, subDispId) {}

        /**
         * @description Call chat templates
         * @todo  
         * @fires CORE_APIEvents#{@link event:onChatAnswerTemplates|onChatAnswerTemplates} Templates list
         * @fires CORE_APIEvents#{@link event:onError|onError} invalid status
         * @param {uint} acdId ACD id
         * @link getChatAnswerTemplates
         * @tutorial ChatClient
         */

    }, {
        key: "getChatAnswerTemplates",
        value: function getChatAnswerTemplates(acdId) {}
    }]);

    return IntegrationAPI;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var loginService = exports.loginService = function () {
    function loginService(params) {
        _classCallCheck(this, loginService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(loginService, [{
        key: "login",
        value: function login(username, password) {
            var action = "Login";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    user: username,
                    password: password,
                    action: action
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "CloseSession",
        value: function CloseSession() {
            var action = "Logout";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: action
                };

                this.SingletonWebSocket.send(message);
                this.SingletonWebSocket.currentState = "logout";
            }
        }
    }, {
        key: "SetReady",
        value: function SetReady() {
            var action = "setReady";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "setReady"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "ChangePassword",
        value: function ChangePassword(aCurrentPassword, aNewPassword) {
            var action = "ChangePassword";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    aCurrentPassword: aCurrentPassword,
                    aNewPassword: aNewPassword,
                    action: "Settings",
                    subaction: action
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return loginService;
}();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var callService = exports.callService = function () {
    function callService(params) {
        _classCallCheck(this, callService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(callService, [{
        key: "GetCampaignsRelated",
        value: function GetCampaignsRelated() {
            var action = "GetCampaignsRelated";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "OpenWindow",
                    window: "ManualCall"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "makeManualCall",
        value: function makeManualCall(phoneNum, campID, clientName, callKey) {
            var action = "makeManualCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "ManualCall",
                    camId: campID,
                    callKey: callKey,
                    clientName: clientName,
                    phoneNumber: phoneNum
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "HangUpCall",
        value: function HangUpCall() {
            var action = "HangUp";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    callAction: "HangUp"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "HangUpAndLeaveMessage",
        value: function HangUpAndLeaveMessage() {
            var action = "HangUpAndLeaveMessage";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    callAction: "HangUpAndLeaveMessage"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "HangUpManualDial",
        value: function HangUpManualDial() {
            var action = "HangUpManualDial";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = { client: "integration", action: action };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "UpdateDataCall",
        value: function UpdateDataCall(callOutID, data1, data2, data3, data4, data5) {
            var action = "UpdateDataCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    callOutID: callOutID,
                    client: "integration",
                    data: [data1, data2, data3, data4, data5],
                    action: "CallAction",
                    callAction: "UpdateDataCall"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "getTransfersOptions",
        value: function getTransfersOptions() {
            var action = "getTransfersOptions";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "GetTransferData"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "transferCallToACD",
        value: function transferCallToACD(transferCallToACDID) {
            var action = "transferCallToACD";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var data = {
                    acdID: parseInt(transferCallToACDID),
                    array: "",
                    callKey: this.SingletonWebSocket.dataCall ? this.SingletonWebSocket.dataCall.CalKey : "",
                    camId: this.SingletonWebSocket.dataCall.Id,
                    dnis: this.SingletonWebSocket.dataCall.DNIS,
                    extId: 0,
                    name: "",
                    reference: "dial",
                    sPhone: this.SingletonWebSocket.dataCall.Phone,
                    typeTransfer: 2
                };
                var message = {
                    client: "integration",
                    data: data,
                    action: action
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "transferCallToAgent",
        value: function transferCallToAgent(transferCallToAgentID) {
            var action = "transferCallToAgent";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var data = {
                    acdID: 1,
                    datos: "",
                    callKey: this.SingletonWebSocket.dataCall ? this.SingletonWebSocket.dataCall.CalKey : "",
                    camId: this.SingletonWebSocket.dataCall.Id,
                    dnis: this.SingletonWebSocket.dataCall.DNIS,
                    extId: parseInt(transferCallToAgentID),
                    name: "",
                    reference: "dial",
                    sPhone: this.SingletonWebSocket.dataCall.Phone,
                    typeTransfer: 1
                };
                var message = { client: "integration", data: data, action: action };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "transferCallToPhoneNumber",
        value: function transferCallToPhoneNumber(transferCallToPhone) {
            var action = "transferCallToPhoneNumber";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var data = {
                    acdID: 1,
                    datos: "",
                    callKey: this.SingletonWebSocket.dataCall ? this.SingletonWebSocket.dataCall.CalKey : "",
                    camId: this.SingletonWebSocket.dataCall.Id,
                    dnis: this.SingletonWebSocket.dataCall.DNIS,
                    extId: 0,
                    name: "",
                    reference: "dial",
                    sPhone: transferCallToPhone,
                    typeTransfer: 0
                };
                var message = { client: "integration", data: data, action: "transferCallToPhoneNumber" };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return callService;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var callBarService = exports.callBarService = function () {
    function callBarService(params) {
        _classCallCheck(this, callBarService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }
    /**
     * Sends a DTMF tone
     * @param {Number} digit digit to send as DTMF tone
     */


    _createClass(callBarService, [{
        key: "DTMFDigit",
        value: function DTMFDigit(digit) {
            var action = "DTMF";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    callAction: "DTMF",
                    digit: digit
                };

                this.SingletonWebSocket.send(message);
            }
        }

        /**
         * Controls de volume of the internal sipphone
         * @param {Boolean} deviceType Audio device to be used (0 : Speakers | 1 : Microphone)
         * @param {Number} xVol New volume value to be set in the device
         */

    }, {
        key: "controlVolume",
        value: function controlVolume(deviceType, xVol) {
            var message = {
                client: "integration",
                action: "CallAction",
                callAction: "OpenVolumeWindow"
            };
            this.SingletonWebSocket.send(message);
            this.sendVolumeValue(deviceType, xVol);
        }
    }, {
        key: "sendVolumeValue",
        value: function sendVolumeValue(deviceType, xVol) {
            var message = {
                client: "integration",
                action: "SetVolume",
                device: "",
                vol: xVol
            };

            switch (deviceType) {
                case 0:
                    message.device = "Speaker";
                    this.SingletonWebSocket.send(message);
                    break;
                case 1:
                    message.device = "Microphone";
                    this.SingletonWebSocket.send(message);
                    break;
                default:
                    break;
            }
        }

        /**
        * Activates or deactivates mute functiong during call
        * @param {Boolean} value true or false activate o deactivate mute
        */

    }, {
        key: "SetMute",
        value: function SetMute(value) {
            var action = "Mute";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    enable: value,
                    callAction: "Mute"
                };

                this.SingletonWebSocket.send(message);
            }
        }

        /**
        * Sets hold music and mutes microphone
        */

    }, {
        key: "HoldCall",
        value: function HoldCall() {
            var action = "Hold";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    callAction: "Hold"
                };

                this.SingletonWebSocket.send(message);
            }
        }

        /**
        * Adds a mark to the recording
        */

    }, {
        key: "addMark",
        value: function addMark() {
            var message = {
                client: "integration",
                action: "CallAction",
                callAction: "MarkAdd"
            };

            this.SingletonWebSocket.send(message);
        }

        /**
         * Stop or start the recording
         */

    }, {
        key: "recordingStopStart",
        value: function recordingStopStart() {
            var message = {
                client: "integration",
                action: "CallAction",
                callAction: "recordingStopStart"
            };

            this.SingletonWebSocket.send(message);
        }
    }]);

    return callBarService;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var notAvailableService = exports.notAvailableService = function () {
    function notAvailableService(params) {
        _classCallCheck(this, notAvailableService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(notAvailableService, [{
        key: "getUnavailables",
        value: function getUnavailables() {
            var action = "getUnavailables";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: action
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "setUnavailable",
        value: function setUnavailable(unavailableID) {
            var message = {
                client: "integration",
                unavailableID: unavailableID,
                action: "setUnavailable"
            };

            this.SingletonWebSocket.send(message);
        }
    }, {
        key: "getunavalibaleHistory",
        value: function getunavalibaleHistory() {
            var action = "getUnavalibaleHistory";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: action
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return notAvailableService;
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assistedTransferService = exports.assistedTransferService = function () {
    function assistedTransferService(params) {
        _classCallCheck(this, assistedTransferService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(assistedTransferService, [{
        key: "assistedDialNumber",
        value: function assistedDialNumber(phone) {
            var action = "assistedDialNumber";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                if (!/^\d+$/.test(phone) && typeof onError === 'function') {
                    var error = { code: 8, message: "The phone should only contain numbers" };
                    onError(error);
                    return;
                }
                var message = {
                    action: action,
                    client: "integration",
                    phone: phone
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerUseMainCall",
        value: function assistedXFerUseMainCall() {
            var action = "UseMainCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = { client: "integration", action: action };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerUseSecondCall",
        value: function assistedXFerUseSecondCall() {
            var action = "UseSecondCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = { client: "integration", action: action };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerHangUP",
        value: function assistedXFerHangUP() {
            var action = "AssistedTransferCallHangUp";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "AssistedTransferCallHangUp"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerTransferCalls",
        value: function assistedXFerTransferCalls() {
            var action = "TransferAssistedCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "TransferAssistedCall"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerDropFirstCall",
        value: function assistedXFerDropFirstCall() {
            var action = "DropFirstCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "DropFirstCall"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerDropSecondCall",
        value: function assistedXFerDropSecondCall() {
            var action = "DropSecondCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "DropSecondCall"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerMakeConference",
        value: function assistedXFerMakeConference() {
            var action = "MakeConference";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "MakeConference"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "assistedXFerLeaveConference",
        value: function assistedXFerLeaveConference() {
            var action = "LeaveConference";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "LeaveConference"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return assistedTransferService;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var chatService = exports.chatService = function () {
    function chatService(params) {
        _classCallCheck(this, chatService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(chatService, [{
        key: "getSupervisorsToChat",
        value: function getSupervisorsToChat() {
            var action = "getSupervisorsToChat";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "OpenWindow",
                    window: "AgentChat"
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "sendClientChatMessage",
        value: function sendClientChatMessage(adminId, message) {
            var action = "sendClientChatMessage";
            if (!adminId) {
                if (onError && typeof onError === 'function') {
                    var error = { code: 7, message: "Invalid function at need adminId" };
                    onError(error);
                }
            } else if (message && this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var _action = {
                    client: "integration",
                    action: "Chat",
                    subaction: "NewMessage",
                    data: { chatId: adminId, message: message }
                };
                this.SingletonWebSocket.send(_action);
            }
        }
    }]);

    return chatService;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var callLogService = exports.callLogService = function () {
    function callLogService(params) {
        _classCallCheck(this, callLogService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(callLogService, [{
        key: "getCallHistory",
        value: function getCallHistory() {
            var action = "getCallHistory";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "OpenWindow",
                    window: "CallRecord"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return callLogService;
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dispositionCallService = exports.dispositionCallService = function () {
    function dispositionCallService(params) {
        _classCallCheck(this, dispositionCallService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(dispositionCallService, [{
        key: "getCampaignDispositions",
        value: function getCampaignDispositions(campaignId) {
            var _this = this;

            var action = "getCampaignDispositions";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "OpenWindow",
                    window: "Disposition"
                };
                this.SingletonWebSocket.send(message);

                var message2 = {
                    client: "integration",
                    campaignId: campaignId,
                    action: "getCampaignDispositions"
                };
                setTimeout(function () {
                    _this.SingletonWebSocket.send(message2);
                }, 500);
            }
        }
    }, {
        key: "disposeCampaingCall",
        value: function disposeCampaingCall(dispositionId, camId, callID, subId) {
            var _this2 = this;

            var action = "disposeCampaingCall";
            var time = 0;
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {

                var messageDispose = {
                    client: "integration",
                    DispositionId: dispositionId,
                    CamId: camId,
                    CallID: callID,
                    SubId: subId,
                    action: "Disposition",
                    subaction: "disposeCampaingCall"
                };

                if (this.SingletonWebSocket.currentStatus === "Dialog" && dispositionId && camId && callID) {
                    time = 500;
                    var messageOpen = {
                        client: "integration",
                        action: "OpenWindow",
                        window: "Disposition"
                    };
                    this.SingletonWebSocket.send(messageOpen);
                }
                setTimeout(function () {
                    _this2.SingletonWebSocket.send(messageDispose);
                }, time);
            }
        }
    }, {
        key: "getACDDispositions",
        value: function getACDDispositions(acdId) {
            var _this3 = this;

            var action = "getACDDispositions";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "OpenWindow",
                    window: "Disposition"
                };
                this.SingletonWebSocket.send(message);

                var message2 = {
                    client: "integration",
                    acdId: acdId,
                    action: "getACDDispositions"
                };
                setTimeout(function () {
                    _this3.SingletonWebSocket.send(message2);
                }, 500);
            }
        }
    }, {
        key: "disposeACDCall",
        value: function disposeACDCall(dispositionId, callID, subId) {
            var action = "disposeACDCall";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    DispositionId: dispositionId,
                    CallID: callID,
                    SubId: subId,
                    action: "Disposition",
                    subaction: "disposeACDCall"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return dispositionCallService;
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.agentDataService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SingletonSharedData = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var agentDataService = exports.agentDataService = function () {
    function agentDataService(params) {
        _classCallCheck(this, agentDataService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(agentDataService, [{
        key: "GetAgentID",
        value: function GetAgentID() {
            var action = "GetAgentID";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = { client: "integration", action: action };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "GetUserName",
        value: function GetUserName() {
            return _SingletonSharedData.SingletonSharedData.username;
        }
    }, {
        key: "GetExtension",
        value: function GetExtension() {
            var action = "GetExtension";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: action
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return agentDataService;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reprogamCallService = exports.reprogamCallService = function () {
    function reprogamCallService(params) {
        _classCallCheck(this, reprogamCallService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(reprogamCallService, [{
        key: "getCampaignDispositionsAndNumbers",
        value: function getCampaignDispositionsAndNumbers(idCampaign, callOutID) {
            var action = "GetDispositionsAndNumbers";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    campaignId: idCampaign,
                    callOutID: callOutID,
                    action: "CallAction",
                    callAction: action
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "reprogramCampaignCall",
        value: function reprogramCampaignCall(camId, dispositionId, callID, dateCallBack, telephone, existingNumber, subDispositionId) {
            var _this = this;

            var action = "Disposition";
            var time = 0;
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {

                var messageDispose = {
                    client: "integration",
                    CamId: camId,
                    DispositionId: dispositionId,
                    CallID: callID,
                    DateDial: dateCallBack,
                    TelReprograma: telephone,
                    existingNumber: existingNumber,
                    SubId: subDispositionId,
                    action: "Disposition",
                    subaction: "reprogramCall"
                };

                if (this.SingletonWebSocket.currentStatus === "Dialog" && dispositionId && camId && callID && !!dateCallBack && (existingNumber ? existingNumber : !isNaN(telephone))) {
                    time = 500;
                    var messageOpen = {
                        client: "integration",
                        action: "OpenWindow",
                        window: "Disposition"
                    };
                    this.SingletonWebSocket.send(messageOpen);
                }
                setTimeout(function () {
                    _this.SingletonWebSocket.send(messageDispose);
                }, time);
            }
        }
    }, {
        key: "reprogramAcdCall",
        value: function reprogramAcdCall(idACD, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subId) {
            var message = {
                client: "integration",
                // idACD : idACD,
                DispositionId: idDisposition,
                CallID: callID,
                // dateCallBack : dateCallBack,
                // telephone : telephone,
                // callKey : callKey,
                // data1 : data1,
                // data2 : data2,
                // data3 : data3,
                // data4 : data4, 
                // data5 : data5,
                // existNum : existNum, 
                SubId: subId,
                action: "reprogramAcdCall"
            };
            this.SingletonWebSocket.send(message);
        }
    }, {
        key: "CallBackAcd",
        value: function CallBackAcd(idCampaign, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subDis) {
            var callAction = "Disposition";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, callAction)) {
                var message = {
                    client: "integration",
                    CamId: idCampaign,
                    DispositionId: idDisposition,
                    CallID: callID,
                    DateDial: dateCallBack,
                    TelReprograma: telephone,
                    existingNumber: existNum,
                    SubId: subDis,
                    action: "Disposition",
                    subaction: "reprogramCall"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "getPhoneNumbers",
        value: function getPhoneNumbers(callOutID) {
            var callAction = "getPhoneNumbers";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, callAction)) {
                var message = {
                    client: "integration",
                    callAction: callAction,
                    callOutID: callOutID,
                    action: "CallAction"
                };
                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return reprogamCallService;
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateRule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MainRule = __webpack_require__(27);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateRule = exports.StateRule = function () {
    function StateRule() {
        _classCallCheck(this, StateRule);
    }

    _createClass(StateRule, null, [{
        key: 'validate',
        value: function validate(currentState, actionName) {
            if (_MainRule.MainRule[currentState] && _MainRule.MainRule[currentState][actionName]) {
                return true;
            }
            if (typeof onError === 'function') {
                var error = { code: 7, message: "Invalid function at the current State" };
                onError(error);
            }
            return false;
        }
    }]);

    return StateRule;
}();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainRule = undefined;

var _LoginRule = __webpack_require__(28);

var _ReadyRule = __webpack_require__(29);

var _LogoutRule = __webpack_require__(30);

var _DialogRule = __webpack_require__(31);

var _CalloutRule = __webpack_require__(32);

var _NotReadyRule = __webpack_require__(33);

var _ProblemRule = __webpack_require__(34);

var _WrapupRule = __webpack_require__(35);

var MainRule = exports.MainRule = {
    "Login": _LoginRule.LoginRule,
    "Ready": _ReadyRule.ReadyRule,
    "logout": _LogoutRule.LogoutRule,
    "Dialog": _DialogRule.DialogRule,
    "Callout": _CalloutRule.CalloutRule,
    "NotReady": _NotReadyRule.NotReadyRule,
    "Problem": _ProblemRule.ProblemRule,
    "Wrapup": _WrapupRule.WrapupRule
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LoginRule = exports.LoginRule = {};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ReadyRule = exports.ReadyRule = {
    "Logout": "Logout",
    "GetAgentID": "GetAgentId",
    "GetUserName": "getUserName",
    "GetExtension": "GetExtension",
    "ChangePassword": "ChangePassword",
    "sendClientChatMessage": "sendClientChatMessage",
    "getSupervisorsToChat": "getSupervisorsToChat",
    "GetCampaignsRelated": "GetCampaignsRelated",
    "makeManualCall": "makeManualCall",
    "getLastCallData": "getLastCallData",
    "getCallHistory": "getCallHistory",
    "getUnavailables": "getUnavailables",
    "getUnavalibaleHistory": "getUnavalibaleHistory"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LogoutRule = exports.LogoutRule = {
    "Login": "Login"
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DialogRule = exports.DialogRule = _defineProperty({
    "getTransfersOptions": "getTransfersOptions",
    "transferCallToACD": "transferCallToACD",
    "transferCallToAgent": "transferCallToAgent",
    "transferCallToPhoneNumber": "transferCallToPhoneNumber",
    "assistedDialNumber": "assistedDialNumber",
    "AssistedTransferCallHangUp": "AssistedTransferCallHangUp",
    "TransferAssistedCall": "TransferAssistedCall",
    "UseMainCall": "UseMainCall",
    "UseSecondCall": "UseSecondCall",
    "HangUp": "HangUp",
    "Mute": "Mute",
    "Hold": "Hold",
    "DTMF": "DTMF",
    "sendClientChatMessage": "sendClientChatMessage",
    "getSupervisorsToChat": "getSupervisorsToChat",
    "UpdateDataCall": "UpdateDataCall",
    "getACDDispositions": "getACDDispositions",
    "getCampaignDispositions": "getCampaignDispositions",
    "disposeACDCall": "disposeACDCall",
    "disposeCampaingCall": "disposeCampaingCall",
    "GetCampaignsRelated": "GetCampaignsRelated",
    "GetDispositionsAndNumbers": "GetDispositionsAndNumbers",
    "reprogramCampaignCall": "reprogramCampaignCall",
    "reprogramAcdCall": "reprogramAcdCall",
    "DropFirstCall": "DropFirstCall",
    "DropSecondCall": "DropSecondCall",
    "MakeConference": "MakeConference",
    "LeaveConference": "LeaveConference",
    "getLastCallData": "getLastCallData",
    "getPhoneNumbers": "getPhoneNumbers",
    "recordingStopStart": "recordingStopStart",
    "HangUpAndLeaveMessage": "HangUpAndLeaveMessage",
    "Disposition": "Disposition",
    "GetIVRList": "GetIVRList",
    "IdleStart": "IdleStart"
}, "recordingStopStart", "recordingStopStart");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CalloutRule = exports.CalloutRule = {
    "HangUpManualDial": "HangUpManualDial"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var NotReadyRule = exports.NotReadyRule = {
    "setReady": "setReady",
    "GetCampaignsRelated": "GetCampaignsRelated",
    "makeManualCall": "makeManualCall",
    "getLastCallData": "getLastCallData"
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ProblemRule = exports.ProblemRule = {
    "Logout": "Logout"
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WrapupRule = exports.WrapupRule = {
    "UpdateDataCall": "UpdateDataCall",
    "getACDDispositions": "getACDDispositions",
    "getCampaignDispositions": "getCampaignDispositions",
    "GetDispositionsAndNumbers": "GetDispositionsAndNumbers",
    "disposeACDCall": "disposeACDCall",
    "disposeCampaingCall": "disposeCampaingCall",
    "reprogramCampaignCall": "reprogramCampaignCall",
    "reprogramAcdCall": "reprogramAcdCall",
    "Disposition": "Disposition",
    "getPhoneNumbers": "getPhoneNumbers"
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ongoingCallIvrService = exports.ongoingCallIvrService = function () {
    function ongoingCallIvrService(params) {
        _classCallCheck(this, ongoingCallIvrService);

        this.SingletonWebSocket = params.SingletonWebSocket;
        this.StateRule = params.StateRule;
    }

    _createClass(ongoingCallIvrService, [{
        key: "getIVRList",
        value: function getIVRList() {
            var action = "GetIVRList";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: "CallAction",
                    callAction: action
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }, {
        key: "idleStart",
        value: function idleStart(IVRId) {
            var action = "IdleStart";
            if (this.StateRule.validate(this.SingletonWebSocket.currentStatus, action)) {
                var message = {
                    client: "integration",
                    action: action,
                    IVRId: IVRId
                };

                this.SingletonWebSocket.send(message);
            }
        }
    }]);

    return ongoingCallIvrService;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=cw-galatea-integration-api-js-bundle.js.map 