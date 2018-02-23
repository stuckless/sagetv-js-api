(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.SystemMessageAPI = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SystemMessageAPI = function () {
    function SystemMessageAPI(sageAPI) {
      _classCallCheck(this, SystemMessageAPI);

      this.sageAPI = sageAPI;
    }

    // DeleteAllSystemMessages


    _createClass(SystemMessageAPI, [{
      key: "DeleteAllSystemMessages",
      value: function DeleteAllSystemMessages() {
        return this.sageAPI.invoke("DeleteAllSystemMessages", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteSystemMessage",
      value: function DeleteSystemMessage(message) {
        return this.sageAPI.invoke("DeleteSystemMessage", [message]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSystemAlertLevel",
      value: function GetSystemAlertLevel() {
        return this.sageAPI.invoke("GetSystemAlertLevel", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSystemMessageEndTime",
      value: function GetSystemMessageEndTime(message) {
        if (typeof message.SystemMessageEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageEndTime);
        });
        return this.sageAPI.invoke("GetSystemMessageEndTime", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageLevel",
      value: function GetSystemMessageLevel(message) {
        if (typeof message.SystemMessageLevel !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageLevel);
        });
        return this.sageAPI.invoke("GetSystemMessageLevel", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageLevel = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageRepeatCount",
      value: function GetSystemMessageRepeatCount(message) {
        if (typeof message.SystemMessageRepeatCount !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageRepeatCount);
        });
        return this.sageAPI.invoke("GetSystemMessageRepeatCount", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageRepeatCount = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageString",
      value: function GetSystemMessageString(message) {
        if (typeof message.SystemMessageString !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageString);
        });
        return this.sageAPI.invoke("GetSystemMessageString", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageString = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageTime",
      value: function GetSystemMessageTime(message) {
        if (typeof message.SystemMessageTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageTime);
        });
        return this.sageAPI.invoke("GetSystemMessageTime", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageTypeCode",
      value: function GetSystemMessageTypeCode(message) {
        if (typeof message.SystemMessageTypeCode !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageTypeCode);
        });
        return this.sageAPI.invoke("GetSystemMessageTypeCode", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageTypeCode = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageTypeName",
      value: function GetSystemMessageTypeName(message) {
        if (typeof message.SystemMessageTypeName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageTypeName);
        });
        return this.sageAPI.invoke("GetSystemMessageTypeName", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageTypeName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessageVariable",
      value: function GetSystemMessageVariable(message, VarName) {
        return this.sageAPI.invoke("GetSystemMessageVariable", [message, VarName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSystemMessageVariableNames",
      value: function GetSystemMessageVariableNames(message) {
        if (typeof message.SystemMessageVariableNames !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(message.SystemMessageVariableNames);
        });
        return this.sageAPI.invoke("GetSystemMessageVariableNames", [message]).then(function (json) {
          if (!json || !json.Result) return null;
          message.SystemMessageVariableNames = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSystemMessages",
      value: function GetSystemMessages() {
        return this.sageAPI.invoke("GetSystemMessages", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSystemMessageObject",
      value: function IsSystemMessageObject(SystemMessage) {
        return this.sageAPI.invoke("IsSystemMessageObject", ['systemmessage:' + SystemMessage.SystemMessageID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PostSystemMessage",
      value: function PostSystemMessage(MessageCode, MessageLevel, MessageString, MessageVariables) {
        return this.sageAPI.invoke("PostSystemMessage", [MessageCode, MessageLevel, MessageString, MessageVariables]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ResetSystemAlertLevel",
      value: function ResetSystemAlertLevel() {
        return this.sageAPI.invoke("ResetSystemAlertLevel", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return SystemMessageAPI;
  }();

  // Field Constants for SystemMessage
  SystemMessageAPI.SystemMessageEndTime = "SystemMessageEndTime";
  SystemMessageAPI.SystemMessageLevel = "SystemMessageLevel";
  SystemMessageAPI.SystemMessageRepeatCount = "SystemMessageRepeatCount";
  SystemMessageAPI.SystemMessageString = "SystemMessageString";
  SystemMessageAPI.SystemMessageTime = "SystemMessageTime";
  SystemMessageAPI.SystemMessageTypeCode = "SystemMessageTypeCode";
  SystemMessageAPI.SystemMessageTypeName = "SystemMessageTypeName";
  SystemMessageAPI.SystemMessageVariableNames = "SystemMessageVariableNames";
  exports.default = SystemMessageAPI;
});