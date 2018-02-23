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
    global.Security = mod.exports;
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

  var Security = function () {
    function Security(sageAPI) {
      _classCallCheck(this, Security);

      this.sageAPI = sageAPI;
    }

    // AddSecurityProfile


    _createClass(Security, [{
      key: "AddSecurityProfile",
      value: function AddSecurityProfile(Profile) {
        return this.sageAPI.invoke("AddSecurityProfile", [Profile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetActiveSecurityProfile",
      value: function GetActiveSecurityProfile() {
        return this.sageAPI.invoke("GetActiveSecurityProfile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDefaultSecurityProfile",
      value: function GetDefaultSecurityProfile() {
        return this.sageAPI.invoke("GetDefaultSecurityProfile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPredefinedPermissions",
      value: function GetPredefinedPermissions() {
        return this.sageAPI.invoke("GetPredefinedPermissions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSecurityProfiles",
      value: function GetSecurityProfiles() {
        return this.sageAPI.invoke("GetSecurityProfiles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasPermission",
      value: function HasPermission(Permission, Profile) {
        return this.sageAPI.invoke("HasPermission", [Permission, Profile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasPermission",
      value: function HasPermission(Permission) {
        return this.sageAPI.invoke("HasPermission", [Permission]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveSecurityProfile",
      value: function RemoveSecurityProfile(Profile) {
        return this.sageAPI.invoke("RemoveSecurityProfile", [Profile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetActiveSecurityProfile",
      value: function SetActiveSecurityProfile(Profile) {
        return this.sageAPI.invoke("SetActiveSecurityProfile", [Profile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDefaultSecurityProfile",
      value: function SetDefaultSecurityProfile(Profile) {
        return this.sageAPI.invoke("SetDefaultSecurityProfile", [Profile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPermission",
      value: function SetPermission(Permission, Profile, Allowed) {
        return this.sageAPI.invoke("SetPermission", [Permission, Profile, Allowed]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return Security;
  }();

  exports.default = Security;
});