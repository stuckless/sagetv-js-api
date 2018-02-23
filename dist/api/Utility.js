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
    global.Utility = mod.exports;
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

  var Utility = function () {
    function Utility(sageAPI) {
      _classCallCheck(this, Utility);

      this.sageAPI = sageAPI;
    }

    // AddElement


    _createClass(Utility, [{
      key: "AddElement",
      value: function AddElement(Data, Value) {
        return this.sageAPI.invoke("AddElement", [Data, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddToGrouping",
      value: function AddToGrouping(Grouping, Key, Value) {
        return this.sageAPI.invoke("AddToGrouping", [Grouping, Key, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Animate",
      value: function Animate(WidgetName, LayerName, AnimationName, Duration) {
        return this.sageAPI.invoke("Animate", [WidgetName, LayerName, AnimationName, Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AnimateDelayed",
      value: function AnimateDelayed(WidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
        return this.sageAPI.invoke("AnimateDelayed", [WidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AnimateTransition",
      value: function AnimateTransition(SourceWidgetName, TargetWidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
        return this.sageAPI.invoke("AnimateTransition", [SourceWidgetName, TargetWidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AnimateVariable",
      value: function AnimateVariable(WidgetName, LayerName, VarName, VarValue, AnimationName, Duration, StartDelay, Interruptable) {
        return this.sageAPI.invoke("AnimateVariable", [WidgetName, LayerName, VarName, VarValue, AnimationName, Duration, StartDelay, Interruptable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AreCoreAnimationsEnabled",
      value: function AreCoreAnimationsEnabled() {
        return this.sageAPI.invoke("AreCoreAnimationsEnabled", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AreCoreAnimationsSupported",
      value: function AreCoreAnimationsSupported() {
        return this.sageAPI.invoke("AreCoreAnimationsSupported", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CalculateMD5Sum",
      value: function CalculateMD5Sum(FilePath) {
        return this.sageAPI.invoke("CalculateMD5Sum", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CalculateSHA1Hash",
      value: function CalculateSHA1Hash(EncodeString) {
        return this.sageAPI.invoke("CalculateSHA1Hash", [EncodeString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearMenuCache",
      value: function ClearMenuCache() {
        return this.sageAPI.invoke("ClearMenuCache", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ConvertNteChars",
      value: function ConvertNteChars(NteString) {
        return this.sageAPI.invoke("ConvertNteChars", [NteString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateArray",
      value: function CreateArray(Value) {
        return this.sageAPI.invoke("CreateArray", [Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateFilePath",
      value: function CreateFilePath(Directory, File) {
        return this.sageAPI.invoke("CreateFilePath", [Directory, File]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateNewDirectory",
      value: function CreateNewDirectory(DirectoryPath) {
        return this.sageAPI.invoke("CreateNewDirectory", [DirectoryPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateNewLocalDirectory",
      value: function CreateNewLocalDirectory(DirectoryPath) {
        return this.sageAPI.invoke("CreateNewLocalDirectory", [DirectoryPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateTimeSpan",
      value: function CreateTimeSpan(StartTime, EndTime) {
        return this.sageAPI.invoke("CreateTimeSpan", [StartTime, EndTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DateFormat",
      value: function DateFormat(Format, Date) {
        return this.sageAPI.invoke("DateFormat", [Format, Date]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteFilePath",
      value: function DeleteFilePath(FilePath) {
        return this.sageAPI.invoke("DeleteFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteLocalFilePath",
      value: function DeleteLocalFilePath(FilePath) {
        return this.sageAPI.invoke("DeleteLocalFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DidImageLoadFail",
      value: function DidImageLoadFail(Image) {
        return this.sageAPI.invoke("DidImageLoadFail", [Image]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DirectoryListing",
      value: function DirectoryListing(DirectoryPath) {
        return this.sageAPI.invoke("DirectoryListing", [DirectoryPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DirectoryListing",
      value: function DirectoryListing(DirectoryPath, MediaMask) {
        return this.sageAPI.invoke("DirectoryListing", [DirectoryPath, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DumpServerThreadStates",
      value: function DumpServerThreadStates() {
        return this.sageAPI.invoke("DumpServerThreadStates", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DurFormat",
      value: function DurFormat(Format, Duration) {
        return this.sageAPI.invoke("DurFormat", [Format, Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ExecuteProcess",
      value: function ExecuteProcess(CommandString, Arguments, WorkingDirectory, ConsoleApp) {
        return this.sageAPI.invoke("ExecuteProcess", [CommandString, Arguments, WorkingDirectory, ConsoleApp]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ExecuteProcessReturnOutput",
      value: function ExecuteProcessReturnOutput(CommandString, Arguments, WorkingDirectory, ReturnStdout, ReturnStderr) {
        return this.sageAPI.invoke("ExecuteProcessReturnOutput", [CommandString, Arguments, WorkingDirectory, ReturnStdout, ReturnStderr]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FindComparativeElement",
      value: function FindComparativeElement(Data, Criteria, Method) {
        return this.sageAPI.invoke("FindComparativeElement", [Data, Criteria, Method]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FindElementIndex",
      value: function FindElementIndex(Data, Element) {
        return this.sageAPI.invoke("FindElementIndex", [Data, Element]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAbsoluteFilePath",
      value: function GetAbsoluteFilePath(FilePath) {
        return this.sageAPI.invoke("GetAbsoluteFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDNSAddress",
      value: function GetDNSAddress() {
        return this.sageAPI.invoke("GetDNSAddress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDiskFreeSpace",
      value: function GetDiskFreeSpace(DrivePath) {
        return this.sageAPI.invoke("GetDiskFreeSpace", [DrivePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDiskTotalSpace",
      value: function GetDiskTotalSpace(DrivePath) {
        return this.sageAPI.invoke("GetDiskTotalSpace", [DrivePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetElement",
      value: function GetElement(Data, Index) {
        return this.sageAPI.invoke("GetElement", [Data, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileAsString",
      value: function GetFileAsString(FilePath) {
        return this.sageAPI.invoke("GetFileAsString", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileExtensionFromPath",
      value: function GetFileExtensionFromPath(FilePath) {
        return this.sageAPI.invoke("GetFileExtensionFromPath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileNameFromPath",
      value: function GetFileNameFromPath(FilePath) {
        return this.sageAPI.invoke("GetFileNameFromPath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFilePathSize",
      value: function GetFilePathSize(FilePath) {
        return this.sageAPI.invoke("GetFilePathSize", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileSystemRoots",
      value: function GetFileSystemRoots() {
        return this.sageAPI.invoke("GetFileSystemRoots", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileSystemType",
      value: function GetFileSystemType(DrivePath) {
        return this.sageAPI.invoke("GetFileSystemType", [DrivePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetGatewayAddress",
      value: function GetGatewayAddress() {
        return this.sageAPI.invoke("GetGatewayAddress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetImageAsBufferedImage",
      value: function GetImageAsBufferedImage(Resource) {
        return this.sageAPI.invoke("GetImageAsBufferedImage", [Resource]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalFileAsString",
      value: function GetLocalFileAsString(FilePath) {
        return this.sageAPI.invoke("GetLocalFileAsString", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalFilePathSize",
      value: function GetLocalFilePathSize(FilePath) {
        return this.sageAPI.invoke("GetLocalFilePathSize", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalFileSystemRoots",
      value: function GetLocalFileSystemRoots() {
        return this.sageAPI.invoke("GetLocalFileSystemRoots", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalIPAddress",
      value: function GetLocalIPAddress() {
        return this.sageAPI.invoke("GetLocalIPAddress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetLocalPathLastModifiedTime",
      value: function GetLocalPathLastModifiedTime(FilePath) {
        return this.sageAPI.invoke("GetLocalPathLastModifiedTime", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMetaImageAspectRatio",
      value: function GetMetaImageAspectRatio(MetaImage) {
        return this.sageAPI.invoke("GetMetaImageAspectRatio", [MetaImage]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMetaImageBytes",
      value: function GetMetaImageBytes(MetaImage) {
        return this.sageAPI.invoke("GetMetaImageBytes", [MetaImage]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMetaImageSourceFile",
      value: function GetMetaImageSourceFile(MetaImage) {
        return this.sageAPI.invoke("GetMetaImageSourceFile", [MetaImage]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPathLastModifiedTime",
      value: function GetPathLastModifiedTime(FilePath) {
        return this.sageAPI.invoke("GetPathLastModifiedTime", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPathParentDirectory",
      value: function GetPathParentDirectory(FilePath) {
        return this.sageAPI.invoke("GetPathParentDirectory", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetScaledImageAsBufferedImage",
      value: function GetScaledImageAsBufferedImage(Resource, Width, Height) {
        return this.sageAPI.invoke("GetScaledImageAsBufferedImage", [Resource, Width, Height]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubgroup",
      value: function GetSubgroup(Grouping, Key) {
        return this.sageAPI.invoke("GetSubgroup", [Grouping, Key]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubnetMask",
      value: function GetSubnetMask() {
        return this.sageAPI.invoke("GetSubnetMask", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetTimeSinceLastInput",
      value: function GetTimeSinceLastInput() {
        return this.sageAPI.invoke("GetTimeSinceLastInput", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIRefreshLock",
      value: function GetUIRefreshLock() {
        return this.sageAPI.invoke("GetUIRefreshLock", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWindowsRegistryDWORDValue",
      value: function GetWindowsRegistryDWORDValue(Root, Key, Name) {
        return this.sageAPI.invoke("GetWindowsRegistryDWORDValue", [Root, Key, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWindowsRegistryNames",
      value: function GetWindowsRegistryNames(Root, Key) {
        return this.sageAPI.invoke("GetWindowsRegistryNames", [Root, Key]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWindowsRegistryStringValue",
      value: function GetWindowsRegistryStringValue(Root, Key, Name) {
        return this.sageAPI.invoke("GetWindowsRegistryStringValue", [Root, Key, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWorkingDirectory",
      value: function GetWorkingDirectory() {
        return this.sageAPI.invoke("GetWorkingDirectory", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GuessMajorFileType",
      value: function GuessMajorFileType(Filename) {
        return this.sageAPI.invoke("GuessMajorFileType", [Filename]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasLocalFilesystem",
      value: function HasLocalFilesystem() {
        return this.sageAPI.invoke("HasLocalFilesystem", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "If",
      value: function If(Condition, True, False) {
        return this.sageAPI.invoke("If", [Condition, True, False]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDirectoryPath",
      value: function IsDirectoryPath(FilePath) {
        return this.sageAPI.invoke("IsDirectoryPath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsEmpty",
      value: function IsEmpty(Data) {
        return this.sageAPI.invoke("IsEmpty", [Data]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsFilePath",
      value: function IsFilePath(FilePath) {
        return this.sageAPI.invoke("IsFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsFilePathHidden",
      value: function IsFilePathHidden(FilePath) {
        return this.sageAPI.invoke("IsFilePathHidden", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsImageLoaded",
      value: function IsImageLoaded(Image) {
        return this.sageAPI.invoke("IsImageLoaded", [Image]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsImportableFileType",
      value: function IsImportableFileType(Filename) {
        return this.sageAPI.invoke("IsImportableFileType", [Filename]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsLocalDirectoryPath",
      value: function IsLocalDirectoryPath(FilePath) {
        return this.sageAPI.invoke("IsLocalDirectoryPath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsLocalFilePath",
      value: function IsLocalFilePath(FilePath) {
        return this.sageAPI.invoke("IsLocalFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsLocalFilePathHidden",
      value: function IsLocalFilePathHidden(FilePath) {
        return this.sageAPI.invoke("IsLocalFilePathHidden", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsLocalRestartNeeded",
      value: function IsLocalRestartNeeded() {
        return this.sageAPI.invoke("IsLocalRestartNeeded", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMetaImage",
      value: function IsMetaImage(MetaImage) {
        return this.sageAPI.invoke("IsMetaImage", [MetaImage]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsServerRestartNeeded",
      value: function IsServerRestartNeeded() {
        return this.sageAPI.invoke("IsServerRestartNeeded", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Keystroke",
      value: function Keystroke(Character, System) {
        return this.sageAPI.invoke("Keystroke", [Character, System]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LoadImage",
      value: function LoadImage(Resource) {
        return this.sageAPI.invoke("LoadImage", [Resource]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LoadImageFile",
      value: function LoadImageFile(FilePath) {
        return this.sageAPI.invoke("LoadImageFile", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LocalDirectoryListing",
      value: function LocalDirectoryListing(DirectoryPath) {
        return this.sageAPI.invoke("LocalDirectoryListing", [DirectoryPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LocalizeString",
      value: function LocalizeString(EnglishText) {
        return this.sageAPI.invoke("LocalizeString", [EnglishText]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LookupIPForLocatorID",
      value: function LookupIPForLocatorID(LocatorID) {
        return this.sageAPI.invoke("LookupIPForLocatorID", [LocatorID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Max",
      value: function Max(Value1, Value2) {
        return this.sageAPI.invoke("Max", [Value1, Value2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Min",
      value: function Min(Value1, Value2) {
        return this.sageAPI.invoke("Min", [Value1, Value2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "NumberFormat",
      value: function NumberFormat(Format, Number) {
        return this.sageAPI.invoke("NumberFormat", [Format, Number]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PlaySound",
      value: function PlaySound(SoundFile) {
        return this.sageAPI.invoke("PlaySound", [SoundFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintCurrentTime",
      value: function PrintCurrentTime() {
        return this.sageAPI.invoke("PrintCurrentTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDate",
      value: function PrintDate(Date) {
        return this.sageAPI.invoke("PrintDate", [Date]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDateFull",
      value: function PrintDateFull(Date) {
        return this.sageAPI.invoke("PrintDateFull", [Date]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDateLong",
      value: function PrintDateLong(Date) {
        return this.sageAPI.invoke("PrintDateLong", [Date]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDateShort",
      value: function PrintDateShort(Date) {
        return this.sageAPI.invoke("PrintDateShort", [Date]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDuration",
      value: function PrintDuration(Duration) {
        return this.sageAPI.invoke("PrintDuration", [Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDurationShort",
      value: function PrintDurationShort(Duration) {
        return this.sageAPI.invoke("PrintDurationShort", [Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintDurationWithSeconds",
      value: function PrintDurationWithSeconds(Duration) {
        return this.sageAPI.invoke("PrintDurationWithSeconds", [Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintTime",
      value: function PrintTime(Time) {
        return this.sageAPI.invoke("PrintTime", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintTimeFull",
      value: function PrintTimeFull(Time) {
        return this.sageAPI.invoke("PrintTimeFull", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintTimeLong",
      value: function PrintTimeLong(Time) {
        return this.sageAPI.invoke("PrintTimeLong", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintTimeShort",
      value: function PrintTimeShort(Time) {
        return this.sageAPI.invoke("PrintTimeShort", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "QueryServerMacAddress",
      value: function QueryServerMacAddress(Hostname) {
        return this.sageAPI.invoke("QueryServerMacAddress", [Hostname]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReformatDeviceAtPathAsEXT3",
      value: function ReformatDeviceAtPathAsEXT3(DrivePath) {
        return this.sageAPI.invoke("ReformatDeviceAtPathAsEXT3", [DrivePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReleaseUIRefreshLock",
      value: function ReleaseUIRefreshLock() {
        return this.sageAPI.invoke("ReleaseUIRefreshLock", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReloadNameserverCache",
      value: function ReloadNameserverCache() {
        return this.sageAPI.invoke("ReloadNameserverCache", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveElement",
      value: function RemoveElement(Data, Value) {
        return this.sageAPI.invoke("RemoveElement", [Data, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveElementAtIndex",
      value: function RemoveElementAtIndex(Data, Index) {
        return this.sageAPI.invoke("RemoveElementAtIndex", [Data, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveWindowsRegistryValue",
      value: function RemoveWindowsRegistryValue(Root, Key, Name) {
        return this.sageAPI.invoke("RemoveWindowsRegistryValue", [Root, Key, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RenameFilePath",
      value: function RenameFilePath(OriginalFilePath, NewFilePath) {
        return this.sageAPI.invoke("RenameFilePath", [OriginalFilePath, NewFilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Restart",
      value: function Restart() {
        return this.sageAPI.invoke("Restart", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Round",
      value: function Round(Number) {
        return this.sageAPI.invoke("Round", [Number]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SaveImageToFile",
      value: function SaveImageToFile(MetaImage, File, Width, Height) {
        return this.sageAPI.invoke("SaveImageToFile", [MetaImage, File, Width, Height]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ScaleBufferedImage",
      value: function ScaleBufferedImage(JavaBufferedImage, Width, Height, Alpha) {
        return this.sageAPI.invoke("ScaleBufferedImage", [JavaBufferedImage, Width, Height, Alpha]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ScanWirelessAPs",
      value: function ScanWirelessAPs() {
        return this.sageAPI.invoke("ScanWirelessAPs", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SendNetworkCommand",
      value: function SendNetworkCommand(Hostname, Port, Command) {
        return this.sageAPI.invoke("SendNetworkCommand", [Hostname, Port, Command]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ServerRestart",
      value: function ServerRestart() {
        return this.sageAPI.invoke("ServerRestart", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetCoreAnimationsEnabled",
      value: function SetCoreAnimationsEnabled(Enabled) {
        return this.sageAPI.invoke("SetCoreAnimationsEnabled", [Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetElement",
      value: function SetElement(Data, Index, Value) {
        return this.sageAPI.invoke("SetElement", [Data, Index, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetScrollPosition",
      value: function SetScrollPosition(RelativeX, RelativeY) {
        return this.sageAPI.invoke("SetScrollPosition", [RelativeX, RelativeY]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWindowsRegistryDWORDValue",
      value: function SetWindowsRegistryDWORDValue(Root, Key, Name, Value) {
        return this.sageAPI.invoke("SetWindowsRegistryDWORDValue", [Root, Key, Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWindowsRegistryStringValue",
      value: function SetWindowsRegistryStringValue(Root, Key, Name, Value) {
        return this.sageAPI.invoke("SetWindowsRegistryStringValue", [Root, Key, Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Size",
      value: function Size(Data) {
        return this.sageAPI.invoke("Size", [Data]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringEndsWith",
      value: function StringEndsWith(FullString, MatchString) {
        return this.sageAPI.invoke("StringEndsWith", [FullString, MatchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringIndexOf",
      value: function StringIndexOf(FullString, MatchString) {
        return this.sageAPI.invoke("StringIndexOf", [FullString, MatchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringIndexOfNTE",
      value: function StringIndexOfNTE(FullString, MatchStringNTE) {
        return this.sageAPI.invoke("StringIndexOfNTE", [FullString, MatchStringNTE]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringLastIndexOf",
      value: function StringLastIndexOf(FullString, MatchString) {
        return this.sageAPI.invoke("StringLastIndexOf", [FullString, MatchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringStartsWith",
      value: function StringStartsWith(FullString, MatchString) {
        return this.sageAPI.invoke("StringStartsWith", [FullString, MatchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StringStartsWithNTE",
      value: function StringStartsWithNTE(FullString, MatchStringNTE) {
        return this.sageAPI.invoke("StringStartsWithNTE", [FullString, MatchStringNTE]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Substring",
      value: function Substring(String, StartIndex, EndIndex) {
        return this.sageAPI.invoke("Substring", [String, StartIndex, EndIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SubstringBegin",
      value: function SubstringBegin(String, EndOffset) {
        return this.sageAPI.invoke("SubstringBegin", [String, EndOffset]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "TestPlaceshifterConnectivity",
      value: function TestPlaceshifterConnectivity(LocatorID) {
        return this.sageAPI.invoke("TestPlaceshifterConnectivity", [LocatorID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Time",
      value: function Time() {
        return this.sageAPI.invoke("Time", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UnloadImage",
      value: function UnloadImage(ResPath) {
        return this.sageAPI.invoke("UnloadImage", [ResPath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Wait",
      value: function Wait(Time) {
        return this.sageAPI.invoke("Wait", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "WriteStringToFile",
      value: function WriteStringToFile(FilePath, Data) {
        return this.sageAPI.invoke("WriteStringToFile", [FilePath, Data]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "WriteStringToLocalFile",
      value: function WriteStringToLocalFile(FilePath, Data) {
        return this.sageAPI.invoke("WriteStringToLocalFile", [FilePath, Data]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return Utility;
  }();

  exports.default = Utility;
});