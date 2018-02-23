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
    global.Configuration = mod.exports;
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

  var Configuration = function () {
    function Configuration(sageAPI) {
      _classCallCheck(this, Configuration);

      this.sageAPI = sageAPI;
    }

    // AddLibraryImportPath


    _createClass(Configuration, [{
      key: "AddLibraryImportPath",
      value: function AddLibraryImportPath(NewPath) {
        return this.sageAPI.invoke("AddLibraryImportPath", [NewPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddMusicLibraryImportPath",
      value: function AddMusicLibraryImportPath(NewPath) {
        return this.sageAPI.invoke("AddMusicLibraryImportPath", [NewPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddPictureLibraryImportPath",
      value: function AddPictureLibraryImportPath(NewPath) {
        return this.sageAPI.invoke("AddPictureLibraryImportPath", [NewPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddRemoteForInfraredTuningPlugin",
      value: function AddRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("AddRemoteForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddVideoDirectory",
      value: function AddVideoDirectory(Directory, Rule, Size) {
        return this.sageAPI.invoke("AddVideoDirectory", [Directory, Rule, Size]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddVideoLibraryImportPath",
      value: function AddVideoLibraryImportPath(NewPath) {
        return this.sageAPI.invoke("AddVideoLibraryImportPath", [NewPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanDoNativeOutputResolution",
      value: function CanDoNativeOutputResolution() {
        return this.sageAPI.invoke("CanDoNativeOutputResolution", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ChangeVideoDirectory",
      value: function ChangeVideoDirectory(OldDirectory, NewDirectory, NewRule, NewSize) {
        return this.sageAPI.invoke("ChangeVideoDirectory", [OldDirectory, NewDirectory, NewRule, NewSize]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllTimeZones",
      value: function GetAllTimeZones() {
        return this.sageAPI.invoke("GetAllTimeZones", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAnalogVideoFormat",
      value: function GetAnalogVideoFormat() {
        return this.sageAPI.invoke("GetAnalogVideoFormat", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAspectRatioMode",
      value: function GetAspectRatioMode() {
        return this.sageAPI.invoke("GetAspectRatioMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAspectRatioModes",
      value: function GetAspectRatioModes() {
        return this.sageAPI.invoke("GetAspectRatioModes", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioDecoderFilter",
      value: function GetAudioDecoderFilter() {
        return this.sageAPI.invoke("GetAudioDecoderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioDecoderFilters",
      value: function GetAudioDecoderFilters() {
        return this.sageAPI.invoke("GetAudioDecoderFilters", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioDelay",
      value: function GetAudioDelay() {
        return this.sageAPI.invoke("GetAudioDelay", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioOutput",
      value: function GetAudioOutput() {
        return this.sageAPI.invoke("GetAudioOutput", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioOutputOptions",
      value: function GetAudioOutputOptions() {
        return this.sageAPI.invoke("GetAudioOutputOptions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioRenderFilter",
      value: function GetAudioRenderFilter() {
        return this.sageAPI.invoke("GetAudioRenderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAudioRendererFilters",
      value: function GetAudioRendererFilters() {
        return this.sageAPI.invoke("GetAudioRendererFilters", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAutodialForInternet",
      value: function GetAutodialForInternet() {
        return this.sageAPI.invoke("GetAutodialForInternet", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAvailableCountries",
      value: function GetAvailableCountries() {
        return this.sageAPI.invoke("GetAvailableCountries", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAvailableUILanguages",
      value: function GetAvailableUILanguages() {
        return this.sageAPI.invoke("GetAvailableUILanguages", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetBitTimeForInfraredTuningPlugin",
      value: function GetBitTimeForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetBitTimeForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetButtonDelayForInfraredTuningPlugin",
      value: function GetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetButtonDelayForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCarrierFrequencyForInfraredTuningPlugin",
      value: function GetCarrierFrequencyForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetCarrierFrequencyForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCommandsForInfraredTuningPlugin",
      value: function GetCommandsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetCommandsForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetConfirmCommandForInfraredTuningPlugin",
      value: function GetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetConfirmCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCountry",
      value: function GetCountry() {
        return this.sageAPI.invoke("GetCountry", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentlyAiringProgramsStartLive",
      value: function GetCurrentlyAiringProgramsStartLive() {
        return this.sageAPI.invoke("GetCurrentlyAiringProgramsStartLive", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBCRegion",
      value: function GetDVBCRegion() {
        return this.sageAPI.invoke("GetDVBCRegion", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBCRegions",
      value: function GetDVBCRegions() {
        return this.sageAPI.invoke("GetDVBCRegions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBSRegion",
      value: function GetDVBSRegion() {
        return this.sageAPI.invoke("GetDVBSRegion", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBSRegions",
      value: function GetDVBSRegions() {
        return this.sageAPI.invoke("GetDVBSRegions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBTRegion",
      value: function GetDVBTRegion() {
        return this.sageAPI.invoke("GetDVBTRegion", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVBTRegions",
      value: function GetDVBTRegions() {
        return this.sageAPI.invoke("GetDVBTRegions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDAudioDecoderFilter",
      value: function GetDVDAudioDecoderFilter() {
        return this.sageAPI.invoke("GetDVDAudioDecoderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDAudioRenderFilter",
      value: function GetDVDAudioRenderFilter() {
        return this.sageAPI.invoke("GetDVDAudioRenderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDDXVADeinterlaceMode",
      value: function GetDVDDXVADeinterlaceMode() {
        return this.sageAPI.invoke("GetDVDDXVADeinterlaceMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDDXVAMpegMode",
      value: function GetDVDDXVAMpegMode() {
        return this.sageAPI.invoke("GetDVDDXVAMpegMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDVideoDecoderFilter",
      value: function GetDVDVideoDecoderFilter() {
        return this.sageAPI.invoke("GetDVDVideoDecoderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDVideoRenderFilter",
      value: function GetDVDVideoRenderFilter() {
        return this.sageAPI.invoke("GetDVDVideoRenderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDXVADeinterlaceMode",
      value: function GetDXVADeinterlaceMode() {
        return this.sageAPI.invoke("GetDXVADeinterlaceMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDXVADeinterlaceModes",
      value: function GetDXVADeinterlaceModes() {
        return this.sageAPI.invoke("GetDXVADeinterlaceModes", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDXVAMpegMode",
      value: function GetDXVAMpegMode() {
        return this.sageAPI.invoke("GetDXVAMpegMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDXVAMpegModes",
      value: function GetDXVAMpegModes() {
        return this.sageAPI.invoke("GetDXVAMpegModes", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDefaultAudioLanguage",
      value: function GetDefaultAudioLanguage() {
        return this.sageAPI.invoke("GetDefaultAudioLanguage", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDefaultRecordingQuality",
      value: function GetDefaultRecordingQuality() {
        return this.sageAPI.invoke("GetDefaultRecordingQuality", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDefaultSubpicLanguage",
      value: function GetDefaultSubpicLanguage() {
        return this.sageAPI.invoke("GetDefaultSubpicLanguage", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDiskspaceRuleForVideoDirectory",
      value: function GetDiskspaceRuleForVideoDirectory(Directory) {
        return this.sageAPI.invoke("GetDiskspaceRuleForVideoDirectory", [Directory]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDiskspaceSizeForVideoDirectory",
      value: function GetDiskspaceSizeForVideoDirectory(Directory) {
        return this.sageAPI.invoke("GetDiskspaceSizeForVideoDirectory", [Directory]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayAspectRatio",
      value: function GetDisplayAspectRatio() {
        return this.sageAPI.invoke("GetDisplayAspectRatio", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDscalerMode",
      value: function GetDscalerMode() {
        return this.sageAPI.invoke("GetDscalerMode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDscalerModes",
      value: function GetDscalerModes() {
        return this.sageAPI.invoke("GetDscalerModes", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDscalerPlugin",
      value: function GetDscalerPlugin() {
        return this.sageAPI.invoke("GetDscalerPlugin", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDscalerPlugins",
      value: function GetDscalerPlugins() {
        return this.sageAPI.invoke("GetDscalerPlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetHDMIAutodetectedConnector",
      value: function GetHDMIAutodetectedConnector() {
        return this.sageAPI.invoke("GetHDMIAutodetectedConnector", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetIRCodesLinkedToSageCommand",
      value: function GetIRCodesLinkedToSageCommand(SageCommand) {
        return this.sageAPI.invoke("GetIRCodesLinkedToSageCommand", [SageCommand]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInactivityTimeout",
      value: function GetInactivityTimeout() {
        return this.sageAPI.invoke("GetInactivityTimeout", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInfraredReceiverPort",
      value: function GetInfraredReceiverPort() {
        return this.sageAPI.invoke("GetInfraredReceiverPort", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInfraredTuningPlugins",
      value: function GetInfraredTuningPlugins() {
        return this.sageAPI.invoke("GetInfraredTuningPlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetKeystrokesLinkedToSageCommand",
      value: function GetKeystrokesLinkedToSageCommand(SageCommand) {
        return this.sageAPI.invoke("GetKeystrokesLinkedToSageCommand", [SageCommand]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLibraryImportPaths",
      value: function GetLibraryImportPaths() {
        return this.sageAPI.invoke("GetLibraryImportPaths", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMaxChannelDigitsForInfraredTuningPlugin",
      value: function GetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetMaxChannelDigitsForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMixerAudioInputPaths",
      value: function GetMixerAudioInputPaths() {
        return this.sageAPI.invoke("GetMixerAudioInputPaths", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMusicLibraryImportPaths",
      value: function GetMusicLibraryImportPaths() {
        return this.sageAPI.invoke("GetMusicLibraryImportPaths", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNameForIRCode",
      value: function GetNameForIRCode(IRCode) {
        return this.sageAPI.invoke("GetNameForIRCode", [IRCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanInsetBottom",
      value: function GetOverscanInsetBottom() {
        return this.sageAPI.invoke("GetOverscanInsetBottom", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanInsetLeft",
      value: function GetOverscanInsetLeft() {
        return this.sageAPI.invoke("GetOverscanInsetLeft", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanInsetRight",
      value: function GetOverscanInsetRight() {
        return this.sageAPI.invoke("GetOverscanInsetRight", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanInsetTop",
      value: function GetOverscanInsetTop() {
        return this.sageAPI.invoke("GetOverscanInsetTop", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanInsets",
      value: function GetOverscanInsets() {
        return this.sageAPI.invoke("GetOverscanInsets", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanOffsetX",
      value: function GetOverscanOffsetX() {
        return this.sageAPI.invoke("GetOverscanOffsetX", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanOffsetY",
      value: function GetOverscanOffsetY() {
        return this.sageAPI.invoke("GetOverscanOffsetY", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanScaleHeight",
      value: function GetOverscanScaleHeight() {
        return this.sageAPI.invoke("GetOverscanScaleHeight", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOverscanScaleWidth",
      value: function GetOverscanScaleWidth() {
        return this.sageAPI.invoke("GetOverscanScaleWidth", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPictureLibraryImportPaths",
      value: function GetPictureLibraryImportPaths() {
        return this.sageAPI.invoke("GetPictureLibraryImportPaths", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPrefixCommandForInfraredTuningPlugin",
      value: function GetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetPrefixCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetProperty",
      value: function GetProperty(PropertyName, DefaultValue) {
        return this.sageAPI.invoke("GetProperty", [PropertyName, DefaultValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRatingsUnderParentalLock",
      value: function GetRatingsUnderParentalLock() {
        return this.sageAPI.invoke("GetRatingsUnderParentalLock", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRecordingQualities",
      value: function GetRecordingQualities() {
        return this.sageAPI.invoke("GetRecordingQualities", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRecordingQualityBitrate",
      value: function GetRecordingQualityBitrate(Quality) {
        return this.sageAPI.invoke("GetRecordingQualityBitrate", [Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRecordingQualityFormat",
      value: function GetRecordingQualityFormat(Quality) {
        return this.sageAPI.invoke("GetRecordingQualityFormat", [Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRemotesForInfraredTuningPlugin",
      value: function GetRemotesForInfraredTuningPlugin(PluginName, PluginPortNumber) {
        return this.sageAPI.invoke("GetRemotesForInfraredTuningPlugin", [PluginName, PluginPortNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSageCommandLinkedToIRCode",
      value: function GetSageCommandLinkedToIRCode(IRCode) {
        return this.sageAPI.invoke("GetSageCommandLinkedToIRCode", [IRCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSageCommandLinkedToKeystroke",
      value: function GetSageCommandLinkedToKeystroke(Keystroke) {
        return this.sageAPI.invoke("GetSageCommandLinkedToKeystroke", [Keystroke]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScreenSaverTimeout",
      value: function GetScreenSaverTimeout() {
        return this.sageAPI.invoke("GetScreenSaverTimeout", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSequenceDelayForInfraredTuningPlugin",
      value: function GetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("GetSequenceDelayForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetServerProperty",
      value: function GetServerProperty(PropertyName, DefaultValue) {
        return this.sageAPI.invoke("GetServerProperty", [PropertyName, DefaultValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetServerSubpropertiesThatAreBranches",
      value: function GetServerSubpropertiesThatAreBranches(PropertyName) {
        return this.sageAPI.invoke("GetServerSubpropertiesThatAreBranches", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetServerSubpropertiesThatAreLeaves",
      value: function GetServerSubpropertiesThatAreLeaves(PropertyName) {
        return this.sageAPI.invoke("GetServerSubpropertiesThatAreLeaves", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubpicAudioLanguageOptions",
      value: function GetSubpicAudioLanguageOptions() {
        return this.sageAPI.invoke("GetSubpicAudioLanguageOptions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubpropertiesThatAreBranches",
      value: function GetSubpropertiesThatAreBranches(PropertyName) {
        return this.sageAPI.invoke("GetSubpropertiesThatAreBranches", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubpropertiesThatAreLeaves",
      value: function GetSubpropertiesThatAreLeaves(PropertyName) {
        return this.sageAPI.invoke("GetSubpropertiesThatAreLeaves", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTimeZone",
      value: function GetTimeZone() {
        return this.sageAPI.invoke("GetTimeZone", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUILanguage",
      value: function GetUILanguage() {
        return this.sageAPI.invoke("GetUILanguage", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoBackgroundColor",
      value: function GetVideoBackgroundColor() {
        return this.sageAPI.invoke("GetVideoBackgroundColor", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoDecoderFilter",
      value: function GetVideoDecoderFilter() {
        return this.sageAPI.invoke("GetVideoDecoderFilter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoDecoderFilters",
      value: function GetVideoDecoderFilters() {
        return this.sageAPI.invoke("GetVideoDecoderFilters", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoDirectories",
      value: function GetVideoDirectories() {
        return this.sageAPI.invoke("GetVideoDirectories", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoDiskspaceRules",
      value: function GetVideoDiskspaceRules() {
        return this.sageAPI.invoke("GetVideoDiskspaceRules", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoLibraryImportPaths",
      value: function GetVideoLibraryImportPaths() {
        return this.sageAPI.invoke("GetVideoLibraryImportPaths", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoOffsetX",
      value: function GetVideoOffsetX(AspectRatioMode) {
        return this.sageAPI.invoke("GetVideoOffsetX", [AspectRatioMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoOffsetY",
      value: function GetVideoOffsetY(AspectRatioMode) {
        return this.sageAPI.invoke("GetVideoOffsetY", [AspectRatioMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoOrbitingDuration",
      value: function GetVideoOrbitingDuration() {
        return this.sageAPI.invoke("GetVideoOrbitingDuration", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoZoomX",
      value: function GetVideoZoomX(AspectRatioMode) {
        return this.sageAPI.invoke("GetVideoZoomX", [AspectRatioMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoZoomY",
      value: function GetVideoZoomY(AspectRatioMode) {
        return this.sageAPI.invoke("GetVideoZoomY", [AspectRatioMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasDirectX9",
      value: function HasDirectX9() {
        return this.sageAPI.invoke("HasDirectX9", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasEVRSupport",
      value: function HasEVRSupport() {
        return this.sageAPI.invoke("HasEVRSupport", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasPVR350TVOutput",
      value: function HasPVR350TVOutput() {
        return this.sageAPI.invoke("HasPVR350TVOutput", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasParentalLockCode",
      value: function HasParentalLockCode() {
        return this.sageAPI.invoke("HasParentalLockCode", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsAcceleratedDrawingEnabled",
      value: function IsAcceleratedDrawingEnabled() {
        return this.sageAPI.invoke("IsAcceleratedDrawingEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsAdvancedDeinterlacingEnabled",
      value: function IsAdvancedDeinterlacingEnabled() {
        return this.sageAPI.invoke("IsAdvancedDeinterlacingEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsAdvancedDeinterlacingSupported",
      value: function IsAdvancedDeinterlacingSupported() {
        return this.sageAPI.invoke("IsAdvancedDeinterlacingSupported", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDscalerDoubleRefresh",
      value: function IsDscalerDoubleRefresh() {
        return this.sageAPI.invoke("IsDscalerDoubleRefresh", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDscalerEnabled",
      value: function IsDscalerEnabled() {
        return this.sageAPI.invoke("IsDscalerEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDscalerOddFieldFirst",
      value: function IsDscalerOddFieldFirst() {
        return this.sageAPI.invoke("IsDscalerOddFieldFirst", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsIntelligentRecordingDisabled",
      value: function IsIntelligentRecordingDisabled() {
        return this.sageAPI.invoke("IsIntelligentRecordingDisabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMajorMinorDTVChannelTuningEnabled",
      value: function IsMajorMinorDTVChannelTuningEnabled() {
        return this.sageAPI.invoke("IsMajorMinorDTVChannelTuningEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMutedOnAlternateSpeedPlayback",
      value: function IsMutedOnAlternateSpeedPlayback() {
        return this.sageAPI.invoke("IsMutedOnAlternateSpeedPlayback", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsNativeOutputResolutionEnabled",
      value: function IsNativeOutputResolutionEnabled() {
        return this.sageAPI.invoke("IsNativeOutputResolutionEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPVR350OSDEnabled",
      value: function IsPVR350OSDEnabled() {
        return this.sageAPI.invoke("IsPVR350OSDEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPVR350TVOutputEnabled",
      value: function IsPVR350TVOutputEnabled() {
        return this.sageAPI.invoke("IsPVR350TVOutputEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsParentalControlEnabled",
      value: function IsParentalControlEnabled() {
        return this.sageAPI.invoke("IsParentalControlEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPlaceshifterLoginCachingAllowed",
      value: function IsPlaceshifterLoginCachingAllowed() {
        return this.sageAPI.invoke("IsPlaceshifterLoginCachingAllowed", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsProvideoPentium4FixEnabled",
      value: function IsProvideoPentium4FixEnabled() {
        return this.sageAPI.invoke("IsProvideoPentium4FixEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsRatingUnderParentalLock",
      value: function IsRatingUnderParentalLock(Rating) {
        return this.sageAPI.invoke("IsRatingUnderParentalLock", [Rating]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSageTVServerEnabled",
      value: function IsSageTVServerEnabled() {
        return this.sageAPI.invoke("IsSageTVServerEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsScreenSaverOnSleepEnabled",
      value: function IsScreenSaverOnSleepEnabled() {
        return this.sageAPI.invoke("IsScreenSaverOnSleepEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSoftwareDecodingDisabled",
      value: function IsSoftwareDecodingDisabled() {
        return this.sageAPI.invoke("IsSoftwareDecodingDisabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSyncSystemClockWithServerEnabled",
      value: function IsSyncSystemClockWithServerEnabled() {
        return this.sageAPI.invoke("IsSyncSystemClockWithServerEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsVideoRendererDefault",
      value: function IsVideoRendererDefault() {
        return this.sageAPI.invoke("IsVideoRendererDefault", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsVideoRendererEVR",
      value: function IsVideoRendererEVR() {
        return this.sageAPI.invoke("IsVideoRendererEVR", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsVideoRendererOverlay",
      value: function IsVideoRendererOverlay() {
        return this.sageAPI.invoke("IsVideoRendererOverlay", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsVideoRendererVMR9",
      value: function IsVideoRendererVMR9() {
        return this.sageAPI.invoke("IsVideoRendererVMR9", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LearnCommandForInfraredTuningPlugin",
      value: function LearnCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
        return this.sageAPI.invoke("LearnCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, CommandName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LinkIRCodeToSageCommand",
      value: function LinkIRCodeToSageCommand(IRCode, SageCommand) {
        return this.sageAPI.invoke("LinkIRCodeToSageCommand", [IRCode, SageCommand]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LinkKeystrokeToSageCommand",
      value: function LinkKeystrokeToSageCommand(Keystroke, SageCommand) {
        return this.sageAPI.invoke("LinkKeystrokeToSageCommand", [Keystroke, SageCommand]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveCommandForInfraredTuningPlugin",
      value: function RemoveCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
        return this.sageAPI.invoke("RemoveCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, CommandName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveLibraryImportPath",
      value: function RemoveLibraryImportPath(RemovePath) {
        return this.sageAPI.invoke("RemoveLibraryImportPath", [RemovePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveMusicLibraryImportPath",
      value: function RemoveMusicLibraryImportPath(RemovePath) {
        return this.sageAPI.invoke("RemoveMusicLibraryImportPath", [RemovePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemovePictureLibraryImportPath",
      value: function RemovePictureLibraryImportPath(RemovePath) {
        return this.sageAPI.invoke("RemovePictureLibraryImportPath", [RemovePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveProperty",
      value: function RemoveProperty(PropertyName) {
        return this.sageAPI.invoke("RemoveProperty", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemovePropertyAndChildren",
      value: function RemovePropertyAndChildren(PropertyName) {
        return this.sageAPI.invoke("RemovePropertyAndChildren", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveRemoteForInfraredTuningPlugin",
      value: function RemoveRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
        return this.sageAPI.invoke("RemoveRemoteForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveServerProperty",
      value: function RemoveServerProperty(PropertyName) {
        return this.sageAPI.invoke("RemoveServerProperty", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveServerPropertyAndChildren",
      value: function RemoveServerPropertyAndChildren(PropertyName) {
        return this.sageAPI.invoke("RemoveServerPropertyAndChildren", [PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveVideoDirectory",
      value: function RemoveVideoDirectory(Directory) {
        return this.sageAPI.invoke("RemoveVideoDirectory", [Directory]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveVideoLibraryImportPath",
      value: function RemoveVideoLibraryImportPath(RemovePath) {
        return this.sageAPI.invoke("RemoveVideoLibraryImportPath", [RemovePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RenameCommandForInfraredTuningPlugin",
      value: function RenameCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, OldCommandName, NewCommandName) {
        return this.sageAPI.invoke("RenameCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, OldCommandName, NewCommandName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RunFilterAutoconfiguration",
      value: function RunFilterAutoconfiguration() {
        return this.sageAPI.invoke("RunFilterAutoconfiguration", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SaveProperties",
      value: function SaveProperties() {
        return this.sageAPI.invoke("SaveProperties", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAcceleratedDrawingEnabled",
      value: function SetAcceleratedDrawingEnabled(Enabled) {
        return this.sageAPI.invoke("SetAcceleratedDrawingEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAdvancedDeinterlacingEnabled",
      value: function SetAdvancedDeinterlacingEnabled(Enabled) {
        return this.sageAPI.invoke("SetAdvancedDeinterlacingEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAllowPlaceshifterLoginCaching",
      value: function SetAllowPlaceshifterLoginCaching(Enabled) {
        return this.sageAPI.invoke("SetAllowPlaceshifterLoginCaching", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAnalogVideoFormat",
      value: function SetAnalogVideoFormat(Format) {
        return this.sageAPI.invoke("SetAnalogVideoFormat", [Format]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAspectRatioMode",
      value: function SetAspectRatioMode(AspectRatioMode) {
        return this.sageAPI.invoke("SetAspectRatioMode", [AspectRatioMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAudioDecoderFilter",
      value: function SetAudioDecoderFilter(FilterName) {
        return this.sageAPI.invoke("SetAudioDecoderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAudioDelay",
      value: function SetAudioDelay(Delay) {
        return this.sageAPI.invoke("SetAudioDelay", [Delay]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAudioOutput",
      value: function SetAudioOutput(AudioOutput) {
        return this.sageAPI.invoke("SetAudioOutput", [AudioOutput]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAudioRenderFilter",
      value: function SetAudioRenderFilter(FilterName) {
        return this.sageAPI.invoke("SetAudioRenderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAutodialForInternet",
      value: function SetAutodialForInternet(Autodial) {
        return this.sageAPI.invoke("SetAutodialForInternet", [Autodial]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetButtonDelayForInfraredTuningPlugin",
      value: function SetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
        return this.sageAPI.invoke("SetButtonDelayForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, MsecDelay]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetConfirmCommandForInfraredTuningPlugin",
      value: function SetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
        return this.sageAPI.invoke("SetConfirmCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, Command]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCountry",
      value: function SetCountry(Country) {
        return this.sageAPI.invoke("SetCountry", [Country]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCurrentlyAiringProgramsStartLive",
      value: function SetCurrentlyAiringProgramsStartLive(Enabled) {
        return this.sageAPI.invoke("SetCurrentlyAiringProgramsStartLive", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVBCRegion",
      value: function SetDVBCRegion(DVBCRegion) {
        return this.sageAPI.invoke("SetDVBCRegion", [DVBCRegion]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVBSRegion",
      value: function SetDVBSRegion(DVBSRegion) {
        return this.sageAPI.invoke("SetDVBSRegion", [DVBSRegion]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVBTRegion",
      value: function SetDVBTRegion(DVBTRegion) {
        return this.sageAPI.invoke("SetDVBTRegion", [DVBTRegion]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDAudioDecoderFilter",
      value: function SetDVDAudioDecoderFilter(FilterName) {
        return this.sageAPI.invoke("SetDVDAudioDecoderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDAudioRenderFilter",
      value: function SetDVDAudioRenderFilter(FilterName) {
        return this.sageAPI.invoke("SetDVDAudioRenderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDDXVADeinterlaceMode",
      value: function SetDVDDXVADeinterlaceMode(DeinterlaceMode) {
        return this.sageAPI.invoke("SetDVDDXVADeinterlaceMode", [DeinterlaceMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDDXVAMpegMode",
      value: function SetDVDDXVAMpegMode(DXVAMode) {
        return this.sageAPI.invoke("SetDVDDXVAMpegMode", [DXVAMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDVideoDecoderFilter",
      value: function SetDVDVideoDecoderFilter(FilterName) {
        return this.sageAPI.invoke("SetDVDVideoDecoderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDVDVideoRenderFilter",
      value: function SetDVDVideoRenderFilter(FilterName) {
        return this.sageAPI.invoke("SetDVDVideoRenderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDXVADeinterlaceMode",
      value: function SetDXVADeinterlaceMode(DeinterlaceMode) {
        return this.sageAPI.invoke("SetDXVADeinterlaceMode", [DeinterlaceMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDXVAMpegMode",
      value: function SetDXVAMpegMode(DXVAMode) {
        return this.sageAPI.invoke("SetDXVAMpegMode", [DXVAMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDefaultAudioLanguage",
      value: function SetDefaultAudioLanguage(Language) {
        return this.sageAPI.invoke("SetDefaultAudioLanguage", [Language]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDefaultRecordingQuality",
      value: function SetDefaultRecordingQuality(Quality) {
        return this.sageAPI.invoke("SetDefaultRecordingQuality", [Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDefaultSubpicLanguage",
      value: function SetDefaultSubpicLanguage(Language) {
        return this.sageAPI.invoke("SetDefaultSubpicLanguage", [Language]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDisplayAspectRatio",
      value: function SetDisplayAspectRatio(DisplayAspectRatio) {
        return this.sageAPI.invoke("SetDisplayAspectRatio", [DisplayAspectRatio]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDscalerDoubleRefresh",
      value: function SetDscalerDoubleRefresh(Enabled) {
        return this.sageAPI.invoke("SetDscalerDoubleRefresh", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDscalerEnabled",
      value: function SetDscalerEnabled(Enabled) {
        return this.sageAPI.invoke("SetDscalerEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDscalerMode",
      value: function SetDscalerMode(DscalerMode) {
        return this.sageAPI.invoke("SetDscalerMode", [DscalerMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDscalerOddFieldFirst",
      value: function SetDscalerOddFieldFirst(Enabled) {
        return this.sageAPI.invoke("SetDscalerOddFieldFirst", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDscalerPlugin",
      value: function SetDscalerPlugin(PluginName) {
        return this.sageAPI.invoke("SetDscalerPlugin", [PluginName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetInactivityTimeout",
      value: function SetInactivityTimeout(Timeout) {
        return this.sageAPI.invoke("SetInactivityTimeout", [Timeout]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetInfraredReceiverPort",
      value: function SetInfraredReceiverPort(Port) {
        return this.sageAPI.invoke("SetInfraredReceiverPort", [Port]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetIntelligentRecordingDisabled",
      value: function SetIntelligentRecordingDisabled(Disabled) {
        return this.sageAPI.invoke("SetIntelligentRecordingDisabled", [Disabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMajorMinorDTVChannelTuningEnabled",
      value: function SetMajorMinorDTVChannelTuningEnabled(Enabled) {
        return this.sageAPI.invoke("SetMajorMinorDTVChannelTuningEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMaxChannelDigitsForInfraredTuningPlugin",
      value: function SetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, NumberOfDigits) {
        return this.sageAPI.invoke("SetMaxChannelDigitsForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, NumberOfDigits]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMuteOnAlternateSpeedPlayback",
      value: function SetMuteOnAlternateSpeedPlayback(Enabled) {
        return this.sageAPI.invoke("SetMuteOnAlternateSpeedPlayback", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetNameForIRCode",
      value: function SetNameForIRCode(IRCode, Name) {
        return this.sageAPI.invoke("SetNameForIRCode", [IRCode, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetNativeOutputResolutionEnabled",
      value: function SetNativeOutputResolutionEnabled(Enabled) {
        return this.sageAPI.invoke("SetNativeOutputResolutionEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetOverscanOffsetX",
      value: function SetOverscanOffsetX(Amount) {
        return this.sageAPI.invoke("SetOverscanOffsetX", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetOverscanOffsetY",
      value: function SetOverscanOffsetY(Amount) {
        return this.sageAPI.invoke("SetOverscanOffsetY", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetOverscanScaleHeight",
      value: function SetOverscanScaleHeight(Amount) {
        return this.sageAPI.invoke("SetOverscanScaleHeight", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetOverscanScaleWidth",
      value: function SetOverscanScaleWidth(Amount) {
        return this.sageAPI.invoke("SetOverscanScaleWidth", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPVR350OSDEnabled",
      value: function SetPVR350OSDEnabled(Enabled) {
        return this.sageAPI.invoke("SetPVR350OSDEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPVR350TVOutputEnabled",
      value: function SetPVR350TVOutputEnabled(Enabled) {
        return this.sageAPI.invoke("SetPVR350TVOutputEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetParentalControlEnabled",
      value: function SetParentalControlEnabled(Enabled) {
        return this.sageAPI.invoke("SetParentalControlEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetParentalLockCode",
      value: function SetParentalLockCode(ParentalLockCode) {
        return this.sageAPI.invoke("SetParentalLockCode", [ParentalLockCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPrefixCommandForInfraredTuningPlugin",
      value: function SetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
        return this.sageAPI.invoke("SetPrefixCommandForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, Command]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetProperty",
      value: function SetProperty(PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetProperty", [PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetProvideoPentium4FixEnabled",
      value: function SetProvideoPentium4FixEnabled(Enabled) {
        return this.sageAPI.invoke("SetProvideoPentium4FixEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRatingUnderParentalControl",
      value: function SetRatingUnderParentalControl(Rating, Restricted) {
        return this.sageAPI.invoke("SetRatingUnderParentalControl", [Rating, Restricted]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSageTVServerEnabled",
      value: function SetSageTVServerEnabled(Enabled) {
        return this.sageAPI.invoke("SetSageTVServerEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetScreenSaverOnSleepEnabled",
      value: function SetScreenSaverOnSleepEnabled(Enabled) {
        return this.sageAPI.invoke("SetScreenSaverOnSleepEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetScreenSaverTimeout",
      value: function SetScreenSaverTimeout(Timeout) {
        return this.sageAPI.invoke("SetScreenSaverTimeout", [Timeout]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSequenceDelayForInfraredTuningPlugin",
      value: function SetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
        return this.sageAPI.invoke("SetSequenceDelayForInfraredTuningPlugin", [PluginName, PluginPortNumber, RemoteName, MsecDelay]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetServerProperty",
      value: function SetServerProperty(PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetServerProperty", [PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSoftwareDecodingDisabled",
      value: function SetSoftwareDecodingDisabled(Disabled) {
        return this.sageAPI.invoke("SetSoftwareDecodingDisabled", [Disabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSyncSystemClockWithServerEnabled",
      value: function SetSyncSystemClockWithServerEnabled(Enabled) {
        return this.sageAPI.invoke("SetSyncSystemClockWithServerEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetTimeZone",
      value: function SetTimeZone(TimeZone) {
        return this.sageAPI.invoke("SetTimeZone", [TimeZone]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetUILanguage",
      value: function SetUILanguage(Language) {
        return this.sageAPI.invoke("SetUILanguage", [Language]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoBackgroundColor",
      value: function SetVideoBackgroundColor(Color) {
        return this.sageAPI.invoke("SetVideoBackgroundColor", [Color]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoDecoderFilter",
      value: function SetVideoDecoderFilter(FilterName) {
        return this.sageAPI.invoke("SetVideoDecoderFilter", [FilterName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoOffsetX",
      value: function SetVideoOffsetX(AspectRatioMode, PixelOffset) {
        return this.sageAPI.invoke("SetVideoOffsetX", [AspectRatioMode, PixelOffset]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoOffsetY",
      value: function SetVideoOffsetY(AspectRatioMode, PixelOffset) {
        return this.sageAPI.invoke("SetVideoOffsetY", [AspectRatioMode, PixelOffset]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoOrbitingDuration",
      value: function SetVideoOrbitingDuration(Duration) {
        return this.sageAPI.invoke("SetVideoOrbitingDuration", [Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoRendererToDefault",
      value: function SetVideoRendererToDefault() {
        return this.sageAPI.invoke("SetVideoRendererToDefault", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoRendererToEVR",
      value: function SetVideoRendererToEVR() {
        return this.sageAPI.invoke("SetVideoRendererToEVR", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoRendererToOverlay",
      value: function SetVideoRendererToOverlay() {
        return this.sageAPI.invoke("SetVideoRendererToOverlay", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoRendererToVMR9",
      value: function SetVideoRendererToVMR9() {
        return this.sageAPI.invoke("SetVideoRendererToVMR9", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoZoomX",
      value: function SetVideoZoomX(AspectRatioMode, ScaleFactor) {
        return this.sageAPI.invoke("SetVideoZoomX", [AspectRatioMode, ScaleFactor]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoZoomY",
      value: function SetVideoZoomY(AspectRatioMode, ScaleFactor) {
        return this.sageAPI.invoke("SetVideoZoomY", [AspectRatioMode, ScaleFactor]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UnlinkIRCodeFromSageCommands",
      value: function UnlinkIRCodeFromSageCommands(IRCode) {
        return this.sageAPI.invoke("UnlinkIRCodeFromSageCommands", [IRCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UnlinkKeystrokeFromSageCommands",
      value: function UnlinkKeystrokeFromSageCommands(Keystroke) {
        return this.sageAPI.invoke("UnlinkKeystrokeFromSageCommands", [Keystroke]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return Configuration;
  }();

  exports.default = Configuration;
});