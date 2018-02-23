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
    global.UserRecordAPI = mod.exports;
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

  var UserRecordAPI = function () {
    function UserRecordAPI(sageAPI) {
      _classCallCheck(this, UserRecordAPI);

      this.sageAPI = sageAPI;
    }

    // AddUserRecord


    _createClass(UserRecordAPI, [{
      key: "AddUserRecord",
      value: function AddUserRecord(Store, Key) {
        return this.sageAPI.invoke("AddUserRecord", [Store, Key]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteAllUserRecords",
      value: function DeleteAllUserRecords(Store) {
        return this.sageAPI.invoke("DeleteAllUserRecords", [Store]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteUserRecord",
      value: function DeleteUserRecord(UserRecord) {
        return this.sageAPI.invoke("DeleteUserRecord", ['userrecord:' + UserRecord.UserRecordID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllUserRecords",
      value: function GetAllUserRecords(Store) {
        return this.sageAPI.invoke("GetAllUserRecords", [Store]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllUserStores",
      value: function GetAllUserStores() {
        return this.sageAPI.invoke("GetAllUserStores", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUserRecord",
      value: function GetUserRecord(Store, Key) {
        return this.sageAPI.invoke("GetUserRecord", [Store, Key]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUserRecordData",
      value: function GetUserRecordData(UserRecord, Name) {
        return this.sageAPI.invoke("GetUserRecordData", ['userrecord:' + UserRecord.UserRecordID, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUserRecordNames",
      value: function GetUserRecordNames(UserRecord) {
        if (typeof UserRecord.UserRecordNames !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(UserRecord.UserRecordNames);
        });
        return this.sageAPI.invoke("GetUserRecordNames", ['userrecord:' + UserRecord.UserRecordID]).then(function (json) {
          if (!json || !json.Result) return null;
          UserRecord.UserRecordNames = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsUserRecordObject",
      value: function IsUserRecordObject(UserRecord) {
        return this.sageAPI.invoke("IsUserRecordObject", ['userrecord:' + UserRecord.UserRecordID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetUserRecordData",
      value: function SetUserRecordData(UserRecord, Name, Value) {
        return this.sageAPI.invoke("SetUserRecordData", ['userrecord:' + UserRecord.UserRecordID, Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return UserRecordAPI;
  }();

  // Field Constants for UserRecord
  UserRecordAPI.UserRecordNames = "UserRecordNames";
  exports.default = UserRecordAPI;
});