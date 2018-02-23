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
    global.TranscodeAPI = mod.exports;
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

  var TranscodeAPI = function () {
    function TranscodeAPI(sageAPI) {
      _classCallCheck(this, TranscodeAPI);

      this.sageAPI = sageAPI;
    }

    // AddTranscodeFormat


    _createClass(TranscodeAPI, [{
      key: "AddTranscodeFormat",
      value: function AddTranscodeFormat(FormatName, FormatDetails) {
        return this.sageAPI.invoke("AddTranscodeFormat", [FormatName, FormatDetails]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddTranscodeJob",
      value: function AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode) {
        return this.sageAPI.invoke("AddTranscodeJob", [SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddTranscodeJob",
      value: function AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode, ClipTimeStart, ClipDuration) {
        return this.sageAPI.invoke("AddTranscodeJob", [SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode, ClipTimeStart, ClipDuration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanFileBeTranscoded",
      value: function CanFileBeTranscoded(MediaFile) {
        return this.sageAPI.invoke("CanFileBeTranscoded", [MediaFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CancelTranscodeJob",
      value: function CancelTranscodeJob(JobID) {
        return this.sageAPI.invoke("CancelTranscodeJob", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearTranscodedJobs",
      value: function ClearTranscodedJobs() {
        return this.sageAPI.invoke("ClearTranscodedJobs", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeFormatDetails",
      value: function GetTranscodeFormatDetails(FormatName) {
        return this.sageAPI.invoke("GetTranscodeFormatDetails", [FormatName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeFormats",
      value: function GetTranscodeFormats() {
        return this.sageAPI.invoke("GetTranscodeFormats", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobClipDuration",
      value: function GetTranscodeJobClipDuration(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobClipDuration", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobClipStart",
      value: function GetTranscodeJobClipStart(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobClipStart", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobCompletePercent",
      value: function GetTranscodeJobCompletePercent(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobCompletePercent", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobDestFile",
      value: function GetTranscodeJobDestFile(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobDestFile", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobFormat",
      value: function GetTranscodeJobFormat(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobFormat", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobShouldKeepOriginal",
      value: function GetTranscodeJobShouldKeepOriginal(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobShouldKeepOriginal", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobSourceFile",
      value: function GetTranscodeJobSourceFile(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobSourceFile", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobStatus",
      value: function GetTranscodeJobStatus(JobID) {
        return this.sageAPI.invoke("GetTranscodeJobStatus", [JobID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTranscodeJobs",
      value: function GetTranscodeJobs() {
        return this.sageAPI.invoke("GetTranscodeJobs", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveTranscodeFormat",
      value: function RemoveTranscodeFormat(FormatName) {
        return this.sageAPI.invoke("RemoveTranscodeFormat", [FormatName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return TranscodeAPI;
  }();

  exports.default = TranscodeAPI;
});