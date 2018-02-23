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
    global.CaptureDeviceInputAPI = mod.exports;
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

  var CaptureDeviceInputAPI = function () {
    function CaptureDeviceInputAPI(sageAPI) {
      _classCallCheck(this, CaptureDeviceInputAPI);

      this.sageAPI = sageAPI;
    }

    // AutoScanChannelInfo


    _createClass(CaptureDeviceInputAPI, [{
      key: "AutoScanChannelInfo",
      value: function AutoScanChannelInfo(CaptureDeviceInput, ChannelNumber) {
        return this.sageAPI.invoke("AutoScanChannelInfo", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, ChannelNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AutoTuneChannelTest",
      value: function AutoTuneChannelTest(CaptureDeviceInput, ChannelNumber) {
        return this.sageAPI.invoke("AutoTuneChannelTest", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, ChannelNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ConfigureInputForEPGDataLineup",
      value: function ConfigureInputForEPGDataLineup(CaptureDeviceInput, Lineup) {
        return this.sageAPI.invoke("ConfigureInputForEPGDataLineup", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ConfigureInputWithoutEPGData",
      value: function ConfigureInputWithoutEPGData(CaptureDeviceInput) {
        return this.sageAPI.invoke("ConfigureInputWithoutEPGData", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureBrightness",
      value: function GetCaptureBrightness(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureBrightness", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureContrast",
      value: function GetCaptureContrast(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureContrast", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceForInput",
      value: function GetCaptureDeviceForInput(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureDeviceForInput", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceInputBeingViewed",
      value: function GetCaptureDeviceInputBeingViewed() {
        return this.sageAPI.invoke("GetCaptureDeviceInputBeingViewed", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceInputBroadcastStandard",
      value: function GetCaptureDeviceInputBroadcastStandard(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureDeviceInputBroadcastStandard", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceInputName",
      value: function GetCaptureDeviceInputName(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureDeviceInputName", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureDeviceInputRecordingMediaFile",
      value: function GetCaptureDeviceInputRecordingMediaFile(MediaFile) {
        return this.sageAPI.invoke("GetCaptureDeviceInputRecordingMediaFile", [MediaFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureHue",
      value: function GetCaptureHue(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureHue", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureSaturation",
      value: function GetCaptureSaturation(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureSaturation", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCaptureSharpness",
      value: function GetCaptureSharpness(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetCaptureSharpness", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetConstantRFChannelInput",
      value: function GetConstantRFChannelInput(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetConstantRFChannelInput", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInfraredTunerRemoteName",
      value: function GetInfraredTunerRemoteName(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetInfraredTunerRemoteName", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInfraredTuningPlugin",
      value: function GetInfraredTuningPlugin(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetInfraredTuningPlugin", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInfraredTuningPluginPortNumber",
      value: function GetInfraredTuningPluginPortNumber(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetInfraredTuningPluginPortNumber", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInputMaximumChannelNumber",
      value: function GetInputMaximumChannelNumber(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetInputMaximumChannelNumber", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInputMinimumChannelNumber",
      value: function GetInputMinimumChannelNumber(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetInputMinimumChannelNumber", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLineupForCaptureDeviceInput",
      value: function GetLineupForCaptureDeviceInput(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetLineupForCaptureDeviceInput", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPhysicalInputType",
      value: function GetPhysicalInputType(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetPhysicalInputType", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSignalStrength",
      value: function GetSignalStrength(CaptureDeviceInput) {
        return this.sageAPI.invoke("GetSignalStrength", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCaptureDeviceInputAudioVideo",
      value: function IsCaptureDeviceInputAudioVideo(CaptureDeviceInput) {
        return this.sageAPI.invoke("IsCaptureDeviceInputAudioVideo", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsExternallyTunedRFInput",
      value: function IsExternallyTunedRFInput(CaptureDeviceInput) {
        return this.sageAPI.invoke("IsExternallyTunedRFInput", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsRFSignalCableTV",
      value: function IsRFSignalCableTV(CaptureDeviceInput) {
        return this.sageAPI.invoke("IsRFSignalCableTV", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReleaseCaptureDeviceInput",
      value: function ReleaseCaptureDeviceInput(CaptureDeviceInput) {
        return this.sageAPI.invoke("ReleaseCaptureDeviceInput", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureBrightness",
      value: function SetCaptureBrightness(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetCaptureBrightness", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureContrast",
      value: function SetCaptureContrast(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetCaptureContrast", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureHue",
      value: function SetCaptureHue(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetCaptureHue", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureSaturation",
      value: function SetCaptureSaturation(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetCaptureSaturation", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCaptureSharpness",
      value: function SetCaptureSharpness(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetCaptureSharpness", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetInfraredTunerRemoteName",
      value: function SetInfraredTunerRemoteName(CaptureDeviceInput, ExternalDeviceName) {
        return this.sageAPI.invoke("SetInfraredTunerRemoteName", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, ExternalDeviceName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetInfraredTuningPluginAndPort",
      value: function SetInfraredTuningPluginAndPort(CaptureDeviceInput, PluginName, PluginPortNumber) {
        return this.sageAPI.invoke("SetInfraredTuningPluginAndPort", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, PluginName, PluginPortNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRFSignalIsCableTV",
      value: function SetRFSignalIsCableTV(CaptureDeviceInput, Value) {
        return this.sageAPI.invoke("SetRFSignalIsCableTV", ['capturedeviceinput:' + CaptureDeviceInput.CaptureDeviceInputID, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return CaptureDeviceInputAPI;
  }();

  exports.default = CaptureDeviceInputAPI;
});