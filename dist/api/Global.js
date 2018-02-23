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
    global.Global = mod.exports;
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

  var Global = function () {
    function Global(sageAPI) {
      _classCallCheck(this, Global);

      this.sageAPI = sageAPI;
    }

    // AddGlobalContext


    _createClass(Global, [{
      key: "AddGlobalContext",
      value: function AddGlobalContext(Name, Value) {
        return this.sageAPI.invoke("AddGlobalContext", [Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddStaticContext",
      value: function AddStaticContext(Name, Value) {
        return this.sageAPI.invoke("AddStaticContext", [Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ApplyServiceLevelToLineup",
      value: function ApplyServiceLevelToLineup(Lineup, ServiceLevel) {
        return this.sageAPI.invoke("ApplyServiceLevelToLineup", [Lineup, ServiceLevel]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AreAiringsSameShow",
      value: function AreAiringsSameShow(Airing1, Airing2) {
        return this.sageAPI.invoke("AreAiringsSameShow", [Airing1, Airing2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AreScreenshotsSupported",
      value: function AreScreenshotsSupported() {
        return this.sageAPI.invoke("AreScreenshotsSupported", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AreThereUnresolvedConflicts",
      value: function AreThereUnresolvedConflicts() {
        return this.sageAPI.invoke("AreThereUnresolvedConflicts", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDBurnTheBurnList",
      value: function CDBurnTheBurnList(BurnList) {
        return this.sageAPI.invoke("CDBurnTheBurnList", [BurnList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDCancelBurn",
      value: function CDCancelBurn() {
        return this.sageAPI.invoke("CDCancelBurn", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDCancelRip",
      value: function CDCancelRip() {
        return this.sageAPI.invoke("CDCancelRip", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDGetCurrentBurnStatus",
      value: function CDGetCurrentBurnStatus() {
        return this.sageAPI.invoke("CDGetCurrentBurnStatus", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDGetCurrentRipStatus",
      value: function CDGetCurrentRipStatus() {
        return this.sageAPI.invoke("CDGetCurrentRipStatus", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CDRipToLibrary",
      value: function CDRipToLibrary(LibraryDir, BitrateKbps) {
        return this.sageAPI.invoke("CDRipToLibrary", [LibraryDir, BitrateKbps]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CachePlaceshifterLogin",
      value: function CachePlaceshifterLogin() {
        return this.sageAPI.invoke("CachePlaceshifterLogin", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanCachePlaceshifterLogin",
      value: function CanCachePlaceshifterLogin() {
        return this.sageAPI.invoke("CanCachePlaceshifterLogin", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CancelBackgroundFileDownload",
      value: function CancelBackgroundFileDownload(DestFile) {
        return this.sageAPI.invoke("CancelBackgroundFileDownload", [DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CancelFileCopy",
      value: function CancelFileCopy() {
        return this.sageAPI.invoke("CancelFileCopy", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CancelFileDownload",
      value: function CancelFileDownload() {
        return this.sageAPI.invoke("CancelFileDownload", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CloseOptionsMenu",
      value: function CloseOptionsMenu() {
        return this.sageAPI.invoke("CloseOptionsMenu", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CloseOptionsMenu",
      value: function CloseOptionsMenu(WidgetName, WaitForClose) {
        return this.sageAPI.invoke("CloseOptionsMenu", [WidgetName, WaitForClose]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateTimedRecording",
      value: function CreateTimedRecording(Channel, StartTime, StopTime, Recurrence) {
        return this.sageAPI.invoke("CreateTimedRecording", [Channel, StartTime, StopTime, Recurrence]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDBurnTheBurnList",
      value: function DVDBurnTheBurnList(BurnList) {
        return this.sageAPI.invoke("DVDBurnTheBurnList", [BurnList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDCancelBurn",
      value: function DVDCancelBurn() {
        return this.sageAPI.invoke("DVDCancelBurn", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDGetCurrentBurnStatus",
      value: function DVDGetCurrentBurnStatus() {
        return this.sageAPI.invoke("DVDGetCurrentBurnStatus", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DebugLog",
      value: function DebugLog(DebugString) {
        return this.sageAPI.invoke("DebugLog", [DebugString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DiscoverSageTVServers",
      value: function DiscoverSageTVServers(Timeout) {
        return this.sageAPI.invoke("DiscoverSageTVServers", [Timeout]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "EnsureVisibilityForVariable",
      value: function EnsureVisibilityForVariable(Name, Value, DisplayIndex) {
        return this.sageAPI.invoke("EnsureVisibilityForVariable", [Name, Value, DisplayIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Exit",
      value: function Exit() {
        return this.sageAPI.invoke("Exit", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Fork",
      value: function Fork() {
        return this.sageAPI.invoke("Fork", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringsThatWontBeRecorded",
      value: function GetAiringsThatWontBeRecorded(OnlyUnresolved) {
        return this.sageAPI.invoke("GetAiringsThatWontBeRecorded", [OnlyUnresolved]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllLineups",
      value: function GetAllLineups() {
        return this.sageAPI.invoke("GetAllLineups", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetApplicationLaunchTime",
      value: function GetApplicationLaunchTime() {
        return this.sageAPI.invoke("GetApplicationLaunchTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetBackgroundFileDownloadStatus",
      value: function GetBackgroundFileDownloadStatus(DestFile) {
        return this.sageAPI.invoke("GetBackgroundFileDownloadStatus", [DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetBackgroundFileDownloadStreamTime",
      value: function GetBackgroundFileDownloadStreamTime(DestFile) {
        return this.sageAPI.invoke("GetBackgroundFileDownloadStreamTime", [DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetBackgroundFileDownloadTotalSize",
      value: function GetBackgroundFileDownloadTotalSize(DestFile) {
        return this.sageAPI.invoke("GetBackgroundFileDownloadTotalSize", [DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChildUIComponentForVariable",
      value: function GetChildUIComponentForVariable(UIComponent, MatchName, MatchValue) {
        return this.sageAPI.invoke("GetChildUIComponentForVariable", [UIComponent, MatchName, MatchValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetClientServerConnectionProgress",
      value: function GetClientServerConnectionProgress() {
        return this.sageAPI.invoke("GetClientServerConnectionProgress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetConnectedClients",
      value: function GetConnectedClients() {
        return this.sageAPI.invoke("GetConnectedClients", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentlyRecordingMediaFiles",
      value: function GetCurrentlyRecordingMediaFiles() {
        return this.sageAPI.invoke("GetCurrentlyRecordingMediaFiles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDataFromTableFocusedOffset",
      value: function GetDataFromTableFocusedOffset(UIComponent, Offset, WrapIndex) {
        return this.sageAPI.invoke("GetDataFromTableFocusedOffset", [UIComponent, Offset, WrapIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDataFromTableVisiblePosition",
      value: function GetDataFromTableVisiblePosition(UIComponent, Offset, WrapIndex) {
        return this.sageAPI.invoke("GetDataFromTableVisiblePosition", [UIComponent, Offset, WrapIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayResolution",
      value: function GetDisplayResolution() {
        return this.sageAPI.invoke("GetDisplayResolution", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayResolutionDetails",
      value: function GetDisplayResolutionDetails(Resolution) {
        return this.sageAPI.invoke("GetDisplayResolutionDetails", [Resolution]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayResolutionHeight",
      value: function GetDisplayResolutionHeight() {
        return this.sageAPI.invoke("GetDisplayResolutionHeight", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayResolutionOptions",
      value: function GetDisplayResolutionOptions() {
        return this.sageAPI.invoke("GetDisplayResolutionOptions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDisplayResolutionWidth",
      value: function GetDisplayResolutionWidth() {
        return this.sageAPI.invoke("GetDisplayResolutionWidth", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetEPGProperty",
      value: function GetEPGProperty(EPGDataSource, Property, Parameter) {
        return this.sageAPI.invoke("GetEPGProperty", [EPGDataSource, Property, Parameter]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetEPGUpdateState",
      value: function GetEPGUpdateState() {
        return this.sageAPI.invoke("GetEPGUpdateState", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetEmbeddedPanel",
      value: function GetEmbeddedPanel() {
        return this.sageAPI.invoke("GetEmbeddedPanel", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileCopyStatus",
      value: function GetFileCopyStatus() {
        return this.sageAPI.invoke("GetFileCopyStatus", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileDownloadStatus",
      value: function GetFileDownloadStatus() {
        return this.sageAPI.invoke("GetFileDownloadStatus", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileDownloadStreamTime",
      value: function GetFileDownloadStreamTime() {
        return this.sageAPI.invoke("GetFileDownloadStreamTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFocusContext",
      value: function GetFocusContext() {
        return this.sageAPI.invoke("GetFocusContext", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFullUIHeight",
      value: function GetFullUIHeight() {
        return this.sageAPI.invoke("GetFullUIHeight", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFullUIWidth",
      value: function GetFullUIWidth() {
        return this.sageAPI.invoke("GetFullUIWidth", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetHotplugStorageMap",
      value: function GetHotplugStorageMap() {
        return this.sageAPI.invoke("GetHotplugStorageMap", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLastEPGDownloadTime",
      value: function GetLastEPGDownloadTime() {
        return this.sageAPI.invoke("GetLastEPGDownloadTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLineupsForZipCodeFromEPGServer",
      value: function GetLineupsForZipCodeFromEPGServer(ZipCode) {
        return this.sageAPI.invoke("GetLineupsForZipCodeFromEPGServer", [ZipCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalMarketsFromEPGServer",
      value: function GetLocalMarketsFromEPGServer() {
        return this.sageAPI.invoke("GetLocalMarketsFromEPGServer", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLogo",
      value: function GetLogo(LogoName) {
        return this.sageAPI.invoke("GetLogo", [LogoName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetOS",
      value: function GetOS() {
        return this.sageAPI.invoke("GetOS", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPreferredDisplayResolutions",
      value: function GetPreferredDisplayResolutions() {
        return this.sageAPI.invoke("GetPreferredDisplayResolutions", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRecentlyWatched",
      value: function GetRecentlyWatched(DurationToLookBack) {
        return this.sageAPI.invoke("GetRecentlyWatched", [DurationToLookBack]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRemoteClientVersion",
      value: function GetRemoteClientVersion() {
        return this.sageAPI.invoke("GetRemoteClientVersion", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRemoteUIType",
      value: function GetRemoteUIType() {
        return this.sageAPI.invoke("GetRemoteUIType", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSageCommandNames",
      value: function GetSageCommandNames() {
        return this.sageAPI.invoke("GetSageCommandNames", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScheduledRecordings",
      value: function GetScheduledRecordings() {
        return this.sageAPI.invoke("GetScheduledRecordings", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScheduledRecordingsForDevice",
      value: function GetScheduledRecordingsForDevice(CaptureDevice) {
        return this.sageAPI.invoke("GetScheduledRecordingsForDevice", [CaptureDevice]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScheduledRecordingsForDeviceForTime",
      value: function GetScheduledRecordingsForDeviceForTime(CaptureDevice, StartTime, StopTime) {
        return this.sageAPI.invoke("GetScheduledRecordingsForDeviceForTime", [CaptureDevice, StartTime, StopTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScheduledRecordingsForTime",
      value: function GetScheduledRecordingsForTime(StartTime, StopTime) {
        return this.sageAPI.invoke("GetScheduledRecordingsForTime", [StartTime, StopTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetServerAddress",
      value: function GetServerAddress() {
        return this.sageAPI.invoke("GetServerAddress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSuggestedIntelligentRecordings",
      value: function GetSuggestedIntelligentRecordings() {
        return this.sageAPI.invoke("GetSuggestedIntelligentRecordings", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTableFocusedPosition",
      value: function GetTableFocusedPosition(UIComponent) {
        return this.sageAPI.invoke("GetTableFocusedPosition", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTableFocusedVisibleColumn",
      value: function GetTableFocusedVisibleColumn(UIComponent) {
        return this.sageAPI.invoke("GetTableFocusedVisibleColumn", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTableFocusedVisiblePosition",
      value: function GetTableFocusedVisiblePosition(UIComponent) {
        return this.sageAPI.invoke("GetTableFocusedVisiblePosition", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTableFocusedVisibleRow",
      value: function GetTableFocusedVisibleRow(UIComponent) {
        return this.sageAPI.invoke("GetTableFocusedVisibleRow", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTextForUIComponent",
      value: function GetTextForUIComponent(UIComponent) {
        return this.sageAPI.invoke("GetTextForUIComponent", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTimeUntilNextEPGDownload",
      value: function GetTimeUntilNextEPGDownload() {
        return this.sageAPI.invoke("GetTimeUntilNextEPGDownload", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTotalDiskspaceAvailable",
      value: function GetTotalDiskspaceAvailable() {
        return this.sageAPI.invoke("GetTotalDiskspaceAvailable", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTotalLibraryDuration",
      value: function GetTotalLibraryDuration() {
        return this.sageAPI.invoke("GetTotalLibraryDuration", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTotalVideoDuration",
      value: function GetTotalVideoDuration() {
        return this.sageAPI.invoke("GetTotalVideoDuration", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentContext",
      value: function GetUIComponentContext() {
        return this.sageAPI.invoke("GetUIComponentContext", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentForVariable",
      value: function GetUIComponentForVariable(MatchName, MatchValue) {
        return this.sageAPI.invoke("GetUIComponentForVariable", [MatchName, MatchValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentHeight",
      value: function GetUIComponentHeight(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentHeight", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentHeightf",
      value: function GetUIComponentHeightf(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentHeightf", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentLastFocusedChild",
      value: function GetUIComponentLastFocusedChild(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentLastFocusedChild", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentPositionX",
      value: function GetUIComponentPositionX(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentPositionX", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentPositionXf",
      value: function GetUIComponentPositionXf(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentPositionXf", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentPositionY",
      value: function GetUIComponentPositionY(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentPositionY", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentPositionYf",
      value: function GetUIComponentPositionYf(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentPositionYf", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentWidth",
      value: function GetUIComponentWidth(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentWidth", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIComponentWidthf",
      value: function GetUIComponentWidthf(UIComponent) {
        return this.sageAPI.invoke("GetUIComponentWidthf", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIContextName",
      value: function GetUIContextName() {
        return this.sageAPI.invoke("GetUIContextName", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIContextNames",
      value: function GetUIContextNames() {
        return this.sageAPI.invoke("GetUIContextNames", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUsedLibraryDiskspace",
      value: function GetUsedLibraryDiskspace() {
        return this.sageAPI.invoke("GetUsedLibraryDiskspace", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUsedVideoDiskspace",
      value: function GetUsedVideoDiskspace() {
        return this.sageAPI.invoke("GetUsedVideoDiskspace", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVariableFromContext",
      value: function GetVariableFromContext(MatchName, MatchValue, LookupName) {
        return this.sageAPI.invoke("GetVariableFromContext", [MatchName, MatchValue, LookupName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVariableFromUIComponent",
      value: function GetVariableFromUIComponent(UIComponent, VarName) {
        return this.sageAPI.invoke("GetVariableFromUIComponent", [UIComponent, VarName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVisibilityForVariable",
      value: function GetVisibilityForVariable(MatchName, MatchValue) {
        return this.sageAPI.invoke("GetVisibilityForVariable", [MatchName, MatchValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsAsleep",
      value: function IsAsleep() {
        return this.sageAPI.invoke("IsAsleep", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsBackgroundFileDownloadProgressivePlay",
      value: function IsBackgroundFileDownloadProgressivePlay(DestFile) {
        return this.sageAPI.invoke("IsBackgroundFileDownloadProgressivePlay", [DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsChannelDownloadComplete",
      value: function IsChannelDownloadComplete(Lineup) {
        return this.sageAPI.invoke("IsChannelDownloadComplete", [Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsClient",
      value: function IsClient() {
        return this.sageAPI.invoke("IsClient", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsClientDisconnected",
      value: function IsClientDisconnected() {
        return this.sageAPI.invoke("IsClientDisconnected", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDesktopUI",
      value: function IsDesktopUI() {
        return this.sageAPI.invoke("IsDesktopUI", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDoingLibraryImportScan",
      value: function IsDoingLibraryImportScan() {
        return this.sageAPI.invoke("IsDoingLibraryImportScan", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsEmbeddedServer",
      value: function IsEmbeddedServer() {
        return this.sageAPI.invoke("IsEmbeddedServer", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsEmbeddedSystem",
      value: function IsEmbeddedSystem() {
        return this.sageAPI.invoke("IsEmbeddedSystem", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsFileDownloadProgressivePlay",
      value: function IsFileDownloadProgressivePlay() {
        return this.sageAPI.invoke("IsFileDownloadProgressivePlay", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsFullScreen",
      value: function IsFullScreen() {
        return this.sageAPI.invoke("IsFullScreen", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsLinuxOS",
      value: function IsLinuxOS() {
        return this.sageAPI.invoke("IsLinuxOS", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMacOS",
      value: function IsMacOS() {
        return this.sageAPI.invoke("IsMacOS", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsOptionsMenuOpen",
      value: function IsOptionsMenuOpen() {
        return this.sageAPI.invoke("IsOptionsMenuOpen", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPVR",
      value: function IsPVR() {
        return this.sageAPI.invoke("IsPVR", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsRemoteUI",
      value: function IsRemoteUI() {
        return this.sageAPI.invoke("IsRemoteUI", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSDEPGServiceAvailable",
      value: function IsSDEPGServiceAvailable() {
        return this.sageAPI.invoke("IsSDEPGServiceAvailable", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsServerUI",
      value: function IsServerUI() {
        return this.sageAPI.invoke("IsServerUI", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTableTransitionToNext",
      value: function IsTableTransitionToNext(UIComponent) {
        return this.sageAPI.invoke("IsTableTransitionToNext", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTableTransitionToPrevious",
      value: function IsTableTransitionToPrevious(UIComponent) {
        return this.sageAPI.invoke("IsTableTransitionToPrevious", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTouchUI",
      value: function IsTouchUI() {
        return this.sageAPI.invoke("IsTouchUI", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTransitioningFromMenu",
      value: function IsTransitioningFromMenu(MenuName) {
        return this.sageAPI.invoke("IsTransitioningFromMenu", [MenuName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTransitioningFromMenus",
      value: function IsTransitioningFromMenus(MenuNames) {
        return this.sageAPI.invoke("IsTransitioningFromMenus", [MenuNames]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTransitioningToMenu",
      value: function IsTransitioningToMenu(MenuName) {
        return this.sageAPI.invoke("IsTransitioningToMenu", [MenuName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsTransitioningToMenus",
      value: function IsTransitioningToMenus(MenuNames) {
        return this.sageAPI.invoke("IsTransitioningToMenus", [MenuNames]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsWindowsOS",
      value: function IsWindowsOS() {
        return this.sageAPI.invoke("IsWindowsOS", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PassiveListen",
      value: function PassiveListen() {
        return this.sageAPI.invoke("PassiveListen", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrepareForFirmwareLoad",
      value: function PrepareForFirmwareLoad() {
        return this.sageAPI.invoke("PrepareForFirmwareLoad", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Refresh",
      value: function Refresh() {
        return this.sageAPI.invoke("Refresh", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RefreshArea",
      value: function RefreshArea(WidgetName) {
        return this.sageAPI.invoke("RefreshArea", [WidgetName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RefreshAreaForVariable",
      value: function RefreshAreaForVariable(Name, Value) {
        return this.sageAPI.invoke("RefreshAreaForVariable", [Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReloadSystemHooks",
      value: function ReloadSystemHooks() {
        return this.sageAPI.invoke("ReloadSystemHooks", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveUnusedLineups",
      value: function RemoveUnusedLineups() {
        return this.sageAPI.invoke("RemoveUnusedLineups", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Repaint",
      value: function Repaint() {
        return this.sageAPI.invoke("Repaint", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RepaintArea",
      value: function RepaintArea(WidgetName) {
        return this.sageAPI.invoke("RepaintArea", [WidgetName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RunLibraryImportScan",
      value: function RunLibraryImportScan(WaitUntilDone) {
        return this.sageAPI.invoke("RunLibraryImportScan", [WaitUntilDone]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SageCommand",
      value: function SageCommand(Command) {
        return this.sageAPI.invoke("SageCommand", [Command]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SageCommand",
      value: function SageCommand(Command, Payload) {
        return this.sageAPI.invoke("SageCommand", [Command, Payload]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SaveScreenshotToFile",
      value: function SaveScreenshotToFile(FilePath) {
        return this.sageAPI.invoke("SaveScreenshotToFile", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SendEventToUIComponent",
      value: function SendEventToUIComponent(UIComponent, Command, RepeatCount) {
        return this.sageAPI.invoke("SendEventToUIComponent", [UIComponent, Command, RepeatCount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDisplayResolution",
      value: function SetDisplayResolution(Resolution) {
        return this.sageAPI.invoke("SetDisplayResolution", [Resolution]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetEPGProperty",
      value: function SetEPGProperty(EPGDataSource, Property, Value) {
        return this.sageAPI.invoke("SetEPGProperty", [EPGDataSource, Property, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetEmbeddedPanelBounds",
      value: function SetEmbeddedPanelBounds(x, y, width, height) {
        return this.sageAPI.invoke("SetEmbeddedPanelBounds", [x, y, width, height]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFocusForVariable",
      value: function SetFocusForVariable(Name, Value) {
        return this.sageAPI.invoke("SetFocusForVariable", [Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFocusToUIComponent",
      value: function SetFocusToUIComponent(UIComponent) {
        return this.sageAPI.invoke("SetFocusToUIComponent", [UIComponent]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFullScreen",
      value: function SetFullScreen(FullScreen) {
        return this.sageAPI.invoke("SetFullScreen", [FullScreen]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRemoteEventEncryptionEnabled",
      value: function SetRemoteEventEncryptionEnabled(EnableEncryption) {
        return this.sageAPI.invoke("SetRemoteEventEncryptionEnabled", [EnableEncryption]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVariableForUIComponent",
      value: function SetVariableForUIComponent(UIComponent, VarName, VarValue) {
        return this.sageAPI.invoke("SetVariableForUIComponent", [UIComponent, VarName, VarValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartBackgroundFileDownload",
      value: function StartBackgroundFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
        return this.sageAPI.invoke("StartBackgroundFileDownload", [ServerAddress, SourceFile, DestFile, RequestProperties]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartCircularFileDownload",
      value: function StartCircularFileDownload(ServerAddress, SourceFile, DestFile) {
        return this.sageAPI.invoke("StartCircularFileDownload", [ServerAddress, SourceFile, DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartCircularFileDownload",
      value: function StartCircularFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
        return this.sageAPI.invoke("StartCircularFileDownload", [ServerAddress, SourceFile, DestFile, RequestProperties]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartFileCopy",
      value: function StartFileCopy(Filename, SourceDirectory, DestDirectory) {
        return this.sageAPI.invoke("StartFileCopy", [Filename, SourceDirectory, DestDirectory]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartFileDownload",
      value: function StartFileDownload(ServerAddress, SourceFile, DestFile) {
        return this.sageAPI.invoke("StartFileDownload", [ServerAddress, SourceFile, DestFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartFileDownload",
      value: function StartFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
        return this.sageAPI.invoke("StartFileDownload", [ServerAddress, SourceFile, DestFile, RequestProperties]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SwitchEmbeddedModeTo",
      value: function SwitchEmbeddedModeTo(NewMode) {
        return this.sageAPI.invoke("SwitchEmbeddedModeTo", [NewMode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "TransmitCommandUsingInfraredTuningPlugin",
      value: function TransmitCommandUsingInfraredTuningPlugin(TuningPlugin, TuningPluginPort, RemoteName, CommandName, RepeatFactor) {
        return this.sageAPI.invoke("TransmitCommandUsingInfraredTuningPlugin", [TuningPlugin, TuningPluginPort, RemoteName, CommandName, RepeatFactor]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UpdateLocatorServer",
      value: function UpdateLocatorServer() {
        return this.sageAPI.invoke("UpdateLocatorServer", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return Global;
  }();

  exports.default = Global;
});