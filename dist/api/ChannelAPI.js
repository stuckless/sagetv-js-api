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
    global.ChannelAPI = mod.exports;
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

  var ChannelAPI = function () {
    function ChannelAPI(sageAPI) {
      _classCallCheck(this, ChannelAPI);

      this.sageAPI = sageAPI;
    }

    // AddChannel


    _createClass(ChannelAPI, [{
      key: "AddChannel",
      value: function AddChannel(CallSign, Name, Network, StationID) {
        return this.sageAPI.invoke("AddChannel", [CallSign, Name, Network, StationID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearChannelMappingOnLineup",
      value: function ClearChannelMappingOnLineup(Channel, Lineup) {
        return this.sageAPI.invoke("ClearChannelMappingOnLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearPhysicalChannelMappingsOnLineup",
      value: function ClearPhysicalChannelMappingsOnLineup(Channel, Lineup) {
        return this.sageAPI.invoke("ClearPhysicalChannelMappingsOnLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllChannels",
      value: function GetAllChannels() {
        return this.sageAPI.invoke("GetAllChannels", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelDescription",
      value: function GetChannelDescription(Channel) {
        if (typeof Channel.ChannelDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelDescription);
        });
        return this.sageAPI.invoke("GetChannelDescription", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelForStationID",
      value: function GetChannelForStationID(StationID) {
        return this.sageAPI.invoke("GetChannelForStationID", [StationID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelLogo",
      value: function GetChannelLogo(Channel) {
        if (typeof Channel.ChannelLogo !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelLogo);
        });
        return this.sageAPI.invoke("GetChannelLogo", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelLogo = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelLogo",
      value: function GetChannelLogo(Channel, Type, Index, Fallback) {
        return this.sageAPI.invoke("GetChannelLogo", ['channel:' + Channel.ChannelID, Type, Index, Fallback]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelLogoCount",
      value: function GetChannelLogoCount(Channel) {
        if (typeof Channel.ChannelLogoCount !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelLogoCount);
        });
        return this.sageAPI.invoke("GetChannelLogoCount", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelLogoCount = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelLogoURL",
      value: function GetChannelLogoURL(Channel) {
        if (typeof Channel.ChannelLogoURL !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelLogoURL);
        });
        return this.sageAPI.invoke("GetChannelLogoURL", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelLogoURL = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelLogoURL",
      value: function GetChannelLogoURL(Channel, Type, Index, Fallback) {
        return this.sageAPI.invoke("GetChannelLogoURL", ['channel:' + Channel.ChannelID, Type, Index, Fallback]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelName",
      value: function GetChannelName(Channel) {
        if (typeof Channel.ChannelName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelName);
        });
        return this.sageAPI.invoke("GetChannelName", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelNetwork",
      value: function GetChannelNetwork(Channel) {
        if (typeof Channel.ChannelNetwork !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelNetwork);
        });
        return this.sageAPI.invoke("GetChannelNetwork", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelNetwork = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelNumber",
      value: function GetChannelNumber(Channel) {
        if (typeof Channel.ChannelNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.ChannelNumber);
        });
        return this.sageAPI.invoke("GetChannelNumber", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.ChannelNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannelNumberForLineup",
      value: function GetChannelNumberForLineup(Channel, Lineup) {
        return this.sageAPI.invoke("GetChannelNumberForLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelNumbersForLineup",
      value: function GetChannelNumbersForLineup(Channel, Lineup) {
        return this.sageAPI.invoke("GetChannelNumbersForLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPhysicalChannelNumberForLineup",
      value: function GetPhysicalChannelNumberForLineup(Channel, Lineup) {
        return this.sageAPI.invoke("GetPhysicalChannelNumberForLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetStationID",
      value: function GetStationID(Channel) {
        if (typeof Channel.StationID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.StationID);
        });
        return this.sageAPI.invoke("GetStationID", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.StationID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsChannelObject",
      value: function IsChannelObject(Channel) {
        return this.sageAPI.invoke("IsChannelObject", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsChannelRemappedOnLineup",
      value: function IsChannelRemappedOnLineup(Channel, Lineup) {
        return this.sageAPI.invoke("IsChannelRemappedOnLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsChannelViewable",
      value: function IsChannelViewable(Channel) {
        if (typeof Channel.IsChannelViewable !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Channel.IsChannelViewable);
        });
        return this.sageAPI.invoke("IsChannelViewable", ['channel:' + Channel.ChannelID]).then(function (json) {
          if (!json || !json.Result) return null;
          Channel.IsChannelViewable = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsChannelViewableOnLineup",
      value: function IsChannelViewableOnLineup(Channel, Lineup) {
        return this.sageAPI.invoke("IsChannelViewableOnLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsChannelViewableOnNumberOnLineup",
      value: function IsChannelViewableOnNumberOnLineup(Channel, ChannelNumber, Lineup) {
        return this.sageAPI.invoke("IsChannelViewableOnNumberOnLineup", ['channel:' + Channel.ChannelID, ChannelNumber, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPhysicalChannelRemappedOnLineup",
      value: function IsPhysicalChannelRemappedOnLineup(Channel, Lineup) {
        return this.sageAPI.invoke("IsPhysicalChannelRemappedOnLineup", ['channel:' + Channel.ChannelID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetChannelMappingForLineup",
      value: function SetChannelMappingForLineup(Channel, Lineup, NewNumber) {
        return this.sageAPI.invoke("SetChannelMappingForLineup", ['channel:' + Channel.ChannelID, Lineup, NewNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetChannelMappingsForLineup",
      value: function SetChannelMappingsForLineup(Channel, Lineup, NewNumbers) {
        return this.sageAPI.invoke("SetChannelMappingsForLineup", ['channel:' + Channel.ChannelID, Lineup, NewNumbers]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetChannelViewabilityForChannelNumberOnLineup",
      value: function SetChannelViewabilityForChannelNumberOnLineup(Channel, ChannelNumber, Lineup, Viewable) {
        return this.sageAPI.invoke("SetChannelViewabilityForChannelNumberOnLineup", ['channel:' + Channel.ChannelID, ChannelNumber, Lineup, Viewable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetChannelViewabilityForChannelOnLineup",
      value: function SetChannelViewabilityForChannelOnLineup(Channel, Lineup, Viewable) {
        return this.sageAPI.invoke("SetChannelViewabilityForChannelOnLineup", ['channel:' + Channel.ChannelID, Lineup, Viewable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPhysicalChannelMappingForLineup",
      value: function SetPhysicalChannelMappingForLineup(Channel, Lineup, NewNumber) {
        return this.sageAPI.invoke("SetPhysicalChannelMappingForLineup", ['channel:' + Channel.ChannelID, Lineup, NewNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return ChannelAPI;
  }();

  // Field Constants for Channel
  ChannelAPI.ChannelDescription = "ChannelDescription";
  ChannelAPI.ChannelLogo = "ChannelLogo";
  ChannelAPI.ChannelLogoCount = "ChannelLogoCount";
  ChannelAPI.ChannelLogoURL = "ChannelLogoURL";
  ChannelAPI.ChannelName = "ChannelName";
  ChannelAPI.ChannelNetwork = "ChannelNetwork";
  ChannelAPI.ChannelNumber = "ChannelNumber";
  ChannelAPI.StationID = "StationID";
  ChannelAPI.IsChannelViewable = "IsChannelViewable";
  exports.default = ChannelAPI;
});