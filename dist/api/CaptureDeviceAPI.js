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
    global.CaptureDeviceAPI = mod.exports;
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

  var CaptureDeviceAPI = function () {
    function CaptureDeviceAPI(sageAPI) {
      _classCallCheck(this, CaptureDeviceAPI);

      this.sageAPI = sageAPI;
    }

    // AddInputForRFChannel


    _createClass(CaptureDeviceAPI, [{
      key: "AddInputForRFChannel",
      value: function AddInputForRFChannel(CaptureDevice, RFChannel) {
        return this.sageAPI.invoke("AddInputForRFChannel", ['capturedevice:' + CaptureDevice.CaptureDeviceID, RFChannel]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetActiveCaptureDevices",
      value: function GetActiveCaptureDevices() {
        return this.sageAPI.invoke("GetActiveCaptureDevices", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioCaptureSources",
      value: function GetAudioCaptureSources() {
        return this.sageAPI.invoke("GetAudioCaptureSources", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceAudioSource",
      value: function GetCaptureDeviceAudioSource(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceAudioSource", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceBroadcastStandard",
      value: function GetCaptureDeviceBroadcastStandard(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceBroadcastStandard", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceCurrentRecordFile",
      value: function GetCaptureDeviceCurrentRecordFile(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceCurrentRecordFile", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceDefaultQuality",
      value: function GetCaptureDeviceDefaultQuality(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceDefaultQuality", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceInputs",
      value: function GetCaptureDeviceInputs(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceInputs", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceMerit",
      value: function GetCaptureDeviceMerit(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceMerit", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceQualities",
      value: function GetCaptureDeviceQualities(CaptureDevice) {
        return this.sageAPI.invoke("GetCaptureDeviceQualities", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDevices",
      value: function GetCaptureDevices() {
        return this.sageAPI.invoke("GetCaptureDevices", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetConfiguredCaptureDeviceInputs",
      value: function GetConfiguredCaptureDeviceInputs() {
        return this.sageAPI.invoke("GetConfiguredCaptureDeviceInputs", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLastUsedCaptureDevice",
      value: function GetLastUsedCaptureDevice() {
        return this.sageAPI.invoke("GetLastUsedCaptureDevice", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLastUsedCaptureDeviceInput",
      value: function GetLastUsedCaptureDeviceInput(CaptureDevice) {
        return this.sageAPI.invoke("GetLastUsedCaptureDeviceInput", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCaptureDeviceANetworkEncoder",
      value: function IsCaptureDeviceANetworkEncoder(CaptureDevice) {
        return this.sageAPI.invoke("IsCaptureDeviceANetworkEncoder", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCaptureDeviceFunctioning",
      value: function IsCaptureDeviceFunctioning(CaptureDevice) {
        return this.sageAPI.invoke("IsCaptureDeviceFunctioning", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCaptureDeviceHardwareEncoder",
      value: function IsCaptureDeviceHardwareEncoder(CaptureDevice) {
        return this.sageAPI.invoke("IsCaptureDeviceHardwareEncoder", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCaptureDeviceInUseByALiveClient",
      value: function IsCaptureDeviceInUseByALiveClient(CaptureDevice) {
        return this.sageAPI.invoke("IsCaptureDeviceInUseByALiveClient", ['capturedevice:' + CaptureDevice.CaptureDeviceID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureDeviceAudioSource",
      value: function SetCaptureDeviceAudioSource(CaptureDevice, AudioSource) {
        return this.sageAPI.invoke("SetCaptureDeviceAudioSource", ['capturedevice:' + CaptureDevice.CaptureDeviceID, AudioSource]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureDeviceDTVStandard",
      value: function SetCaptureDeviceDTVStandard(CaptureDevice, DTVStandard) {
        return this.sageAPI.invoke("SetCaptureDeviceDTVStandard", ['capturedevice:' + CaptureDevice.CaptureDeviceID, DTVStandard]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureDeviceDefaultQuality",
      value: function SetCaptureDeviceDefaultQuality(CaptureDevice, Quality) {
        return this.sageAPI.invoke("SetCaptureDeviceDefaultQuality", ['capturedevice:' + CaptureDevice.CaptureDeviceID, Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureDeviceMerit",
      value: function SetCaptureDeviceMerit(CaptureDevice, Merit) {
        return this.sageAPI.invoke("SetCaptureDeviceMerit", ['capturedevice:' + CaptureDevice.CaptureDeviceID, Merit]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return CaptureDeviceAPI;
  }();

  exports.default = CaptureDeviceAPI;
});