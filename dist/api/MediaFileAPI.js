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
    global.MediaFileAPI = mod.exports;
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

  var MediaFileAPI = function () {
    function MediaFileAPI(sageAPI) {
      _classCallCheck(this, MediaFileAPI);

      this.sageAPI = sageAPI;
    }

    // AddMediaFile


    _createClass(MediaFileAPI, [{
      key: "AddMediaFile",
      value: function AddMediaFile(File, NamePrefix) {
        return this.sageAPI.invoke("AddMediaFile", [File, NamePrefix]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AutorotatePictureFile",
      value: function AutorotatePictureFile(MediaFile) {
        return this.sageAPI.invoke("AutorotatePictureFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanAutorotatePictureFile",
      value: function CanAutorotatePictureFile(MediaFile) {
        if (typeof MediaFile.CanAutorotatePictureFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.CanAutorotatePictureFile);
        });
        return this.sageAPI.invoke("CanAutorotatePictureFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.CanAutorotatePictureFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "CopyToLocalFile",
      value: function CopyToLocalFile(MediaFile, LocalFile) {
        return this.sageAPI.invoke("CopyToLocalFile", ['mediafile:' + MediaFile.MediaFileID, LocalFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateTempMediaFile",
      value: function CreateTempMediaFile(FilePath) {
        return this.sageAPI.invoke("CreateTempMediaFile", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteFile",
      value: function DeleteFile(MediaFile) {
        return this.sageAPI.invoke("DeleteFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DeleteFileWithoutPrejudice",
      value: function DeleteFileWithoutPrejudice(MediaFile) {
        return this.sageAPI.invoke("DeleteFileWithoutPrejudice", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FlipPictureFile",
      value: function FlipPictureFile(MediaFile, Horizontal) {
        return this.sageAPI.invoke("FlipPictureFile", ['mediafile:' + MediaFile.MediaFileID, Horizontal]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GenerateThumbnail",
      value: function GenerateThumbnail(MediaFile, Time, Width, Height, File) {
        return this.sageAPI.invoke("GenerateThumbnail", ['mediafile:' + MediaFile.MediaFileID, Time, Width, Height, File]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAlbumForFile",
      value: function GetAlbumForFile(MediaFile) {
        if (typeof MediaFile.AlbumForFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.AlbumForFile);
        });
        return this.sageAPI.invoke("GetAlbumForFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.AlbumForFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetDurationForSegment",
      value: function GetDurationForSegment(MediaFile, SegmentNumber) {
        return this.sageAPI.invoke("GetDurationForSegment", ['mediafile:' + MediaFile.MediaFileID, SegmentNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetEndForSegment",
      value: function GetEndForSegment(MediaFile, SegmentNumber) {
        return this.sageAPI.invoke("GetEndForSegment", ['mediafile:' + MediaFile.MediaFileID, SegmentNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileDuration",
      value: function GetFileDuration(MediaFile) {
        if (typeof MediaFile.FileDuration !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.FileDuration);
        });
        return this.sageAPI.invoke("GetFileDuration", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.FileDuration = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFileEndTime",
      value: function GetFileEndTime(MediaFile) {
        if (typeof MediaFile.FileEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.FileEndTime);
        });
        return this.sageAPI.invoke("GetFileEndTime", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.FileEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFileForSegment",
      value: function GetFileForSegment(MediaFile, SegmentNumber) {
        return this.sageAPI.invoke("GetFileForSegment", ['mediafile:' + MediaFile.MediaFileID, SegmentNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFileStartTime",
      value: function GetFileStartTime(MediaFile) {
        if (typeof MediaFile.FileStartTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.FileStartTime);
        });
        return this.sageAPI.invoke("GetFileStartTime", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.FileStartTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFullImage",
      value: function GetFullImage(MediaFile) {
        if (typeof MediaFile.FullImage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.FullImage);
        });
        return this.sageAPI.invoke("GetFullImage", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.FullImage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileAiring",
      value: function GetMediaFileAiring(MediaFile) {
        if (typeof MediaFile.MediaFileAiring !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileAiring);
        });
        return this.sageAPI.invoke("GetMediaFileAiring", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileAiring = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileEncoding",
      value: function GetMediaFileEncoding(MediaFile) {
        if (typeof MediaFile.MediaFileEncoding !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileEncoding);
        });
        return this.sageAPI.invoke("GetMediaFileEncoding", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileEncoding = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileForFilePath",
      value: function GetMediaFileForFilePath(FilePath) {
        return this.sageAPI.invoke("GetMediaFileForFilePath", [FilePath]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFileForID",
      value: function GetMediaFileForID(id) {
        return this.sageAPI.invoke("GetMediaFileForID", [id]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFileFormatDescription",
      value: function GetMediaFileFormatDescription(MediaFile) {
        if (typeof MediaFile.MediaFileFormatDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileFormatDescription);
        });
        return this.sageAPI.invoke("GetMediaFileFormatDescription", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileFormatDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileID",
      value: function GetMediaFileID(MediaFile) {
        if (typeof MediaFile.MediaFileID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileID);
        });
        return this.sageAPI.invoke("GetMediaFileID", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileMetadata",
      value: function GetMediaFileMetadata(MediaFile, Name) {
        return this.sageAPI.invoke("GetMediaFileMetadata", ['mediafile:' + MediaFile.MediaFileID, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFileMetadataProperties",
      value: function GetMediaFileMetadataProperties(MediaFile) {
        if (typeof MediaFile.MediaFileMetadataProperties !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileMetadataProperties);
        });
        return this.sageAPI.invoke("GetMediaFileMetadataProperties", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileMetadataProperties = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFileRelativePath",
      value: function GetMediaFileRelativePath(MediaFile) {
        if (typeof MediaFile.MediaFileRelativePath !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaFileRelativePath);
        });
        return this.sageAPI.invoke("GetMediaFileRelativePath", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaFileRelativePath = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMediaFiles",
      value: function GetMediaFiles() {
        return this.sageAPI.invoke("GetMediaFiles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFiles",
      value: function GetMediaFiles(MediaMask) {
        return this.sageAPI.invoke("GetMediaFiles", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaTitle",
      value: function GetMediaTitle(MediaFile) {
        if (typeof MediaFile.MediaTitle !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.MediaTitle);
        });
        return this.sageAPI.invoke("GetMediaTitle", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.MediaTitle = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNumberOfSegments",
      value: function GetNumberOfSegments(MediaFile) {
        if (typeof MediaFile.NumberOfSegments !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.NumberOfSegments);
        });
        return this.sageAPI.invoke("GetNumberOfSegments", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.NumberOfSegments = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetParentDirectory",
      value: function GetParentDirectory(MediaFile) {
        if (typeof MediaFile.ParentDirectory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.ParentDirectory);
        });
        return this.sageAPI.invoke("GetParentDirectory", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.ParentDirectory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSegmentFiles",
      value: function GetSegmentFiles(MediaFile) {
        if (typeof MediaFile.SegmentFiles !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.SegmentFiles);
        });
        return this.sageAPI.invoke("GetSegmentFiles", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.SegmentFiles = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSize",
      value: function GetSize(MediaFile) {
        if (typeof MediaFile.Size !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.Size);
        });
        return this.sageAPI.invoke("GetSize", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.Size = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetStartForSegment",
      value: function GetStartForSegment(MediaFile, SegmentNumber) {
        return this.sageAPI.invoke("GetStartForSegment", ['mediafile:' + MediaFile.MediaFileID, SegmentNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetStartTimesForSegments",
      value: function GetStartTimesForSegments(MediaFile) {
        if (typeof MediaFile.StartTimesForSegments !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.StartTimesForSegments);
        });
        return this.sageAPI.invoke("GetStartTimesForSegments", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.StartTimesForSegments = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetThumbnail",
      value: function GetThumbnail(MediaFile) {
        if (typeof MediaFile.Thumbnail !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.Thumbnail);
        });
        return this.sageAPI.invoke("GetThumbnail", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.Thumbnail = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "HasAnyThumbnail",
      value: function HasAnyThumbnail(MediaFile) {
        if (typeof MediaFile.HasAnyThumbnail !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.HasAnyThumbnail);
        });
        return this.sageAPI.invoke("HasAnyThumbnail", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.HasAnyThumbnail = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "HasSpecificThumbnail",
      value: function HasSpecificThumbnail(MediaFile) {
        if (typeof MediaFile.HasSpecificThumbnail !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.HasSpecificThumbnail);
        });
        return this.sageAPI.invoke("HasSpecificThumbnail", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.HasSpecificThumbnail = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsBluRay",
      value: function IsBluRay(MediaFile) {
        if (typeof MediaFile.IsBluRay !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsBluRay);
        });
        return this.sageAPI.invoke("IsBluRay", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsBluRay = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsCompleteRecording",
      value: function IsCompleteRecording(MediaFile) {
        if (typeof MediaFile.IsCompleteRecording !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsCompleteRecording);
        });
        return this.sageAPI.invoke("IsCompleteRecording", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsCompleteRecording = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsDVD",
      value: function IsDVD(MediaFile) {
        if (typeof MediaFile.IsDVD !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsDVD);
        });
        return this.sageAPI.invoke("IsDVD", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsDVD = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsDVDDrive",
      value: function IsDVDDrive(MediaFile) {
        if (typeof MediaFile.IsDVDDrive !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsDVDDrive);
        });
        return this.sageAPI.invoke("IsDVDDrive", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsDVDDrive = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFileCurrentlyRecording",
      value: function IsFileCurrentlyRecording(MediaFile) {
        if (typeof MediaFile.IsFileCurrentlyRecording !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsFileCurrentlyRecording);
        });
        return this.sageAPI.invoke("IsFileCurrentlyRecording", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsFileCurrentlyRecording = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsLibraryFile",
      value: function IsLibraryFile(MediaFile) {
        if (typeof MediaFile.IsLibraryFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsLibraryFile);
        });
        return this.sageAPI.invoke("IsLibraryFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsLibraryFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsLocalFile",
      value: function IsLocalFile(MediaFile) {
        if (typeof MediaFile.IsLocalFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsLocalFile);
        });
        return this.sageAPI.invoke("IsLocalFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsLocalFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsMediaFileObject",
      value: function IsMediaFileObject(Object) {
        return this.sageAPI.invoke("IsMediaFileObject", [Object]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMusicFile",
      value: function IsMusicFile(MediaFile) {
        if (typeof MediaFile.IsMusicFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsMusicFile);
        });
        return this.sageAPI.invoke("IsMusicFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsMusicFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPictureFile",
      value: function IsPictureFile(MediaFile) {
        if (typeof MediaFile.IsPictureFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsPictureFile);
        });
        return this.sageAPI.invoke("IsPictureFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsPictureFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsTVFile",
      value: function IsTVFile(MediaFile) {
        if (typeof MediaFile.IsTVFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsTVFile);
        });
        return this.sageAPI.invoke("IsTVFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsTVFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsThumbnailLoaded",
      value: function IsThumbnailLoaded(MediaFile) {
        if (typeof MediaFile.IsThumbnailLoaded !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsThumbnailLoaded);
        });
        return this.sageAPI.invoke("IsThumbnailLoaded", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsThumbnailLoaded = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsVideoFile",
      value: function IsVideoFile(MediaFile) {
        if (typeof MediaFile.IsVideoFile !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaFile.IsVideoFile);
        });
        return this.sageAPI.invoke("IsVideoFile", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaFile.IsVideoFile = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "MoveFileToLibrary",
      value: function MoveFileToLibrary(MediaFile) {
        return this.sageAPI.invoke("MoveFileToLibrary", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "MoveTVFileOutOfLibrary",
      value: function MoveTVFileOutOfLibrary(MediaFile) {
        return this.sageAPI.invoke("MoveTVFileOutOfLibrary", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RegeneratePictureThumbnail",
      value: function RegeneratePictureThumbnail(MediaFile) {
        return this.sageAPI.invoke("RegeneratePictureThumbnail", ['mediafile:' + MediaFile.MediaFileID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RotatePictureFile",
      value: function RotatePictureFile(MediaFile, Degrees) {
        return this.sageAPI.invoke("RotatePictureFile", ['mediafile:' + MediaFile.MediaFileID, Degrees]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMediaFileAiring",
      value: function SetMediaFileAiring(MediaFile, Airing) {
        return this.sageAPI.invoke("SetMediaFileAiring", ['mediafile:' + MediaFile.MediaFileID, Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMediaFileMetadata",
      value: function SetMediaFileMetadata(MediaFile, Name, Value) {
        return this.sageAPI.invoke("SetMediaFileMetadata", ['mediafile:' + MediaFile.MediaFileID, Name, Value]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMediaFileShow",
      value: function SetMediaFileShow(MediaFile, Show) {
        return this.sageAPI.invoke("SetMediaFileShow", ['mediafile:' + MediaFile.MediaFileID, Show]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return MediaFileAPI;
  }();

  // Field Constants for MediaFile
  MediaFileAPI.CanAutorotatePictureFile = "CanAutorotatePictureFile";
  MediaFileAPI.AlbumForFile = "AlbumForFile";
  MediaFileAPI.FileDuration = "FileDuration";
  MediaFileAPI.FileEndTime = "FileEndTime";
  MediaFileAPI.FileStartTime = "FileStartTime";
  MediaFileAPI.FullImage = "FullImage";
  MediaFileAPI.MediaFileAiring = "MediaFileAiring";
  MediaFileAPI.MediaFileEncoding = "MediaFileEncoding";
  MediaFileAPI.MediaFileFormatDescription = "MediaFileFormatDescription";
  MediaFileAPI.MediaFileID = "MediaFileID";
  MediaFileAPI.MediaFileMetadataProperties = "MediaFileMetadataProperties";
  MediaFileAPI.MediaFileRelativePath = "MediaFileRelativePath";
  MediaFileAPI.MediaTitle = "MediaTitle";
  MediaFileAPI.NumberOfSegments = "NumberOfSegments";
  MediaFileAPI.ParentDirectory = "ParentDirectory";
  MediaFileAPI.SegmentFiles = "SegmentFiles";
  MediaFileAPI.Size = "Size";
  MediaFileAPI.StartTimesForSegments = "StartTimesForSegments";
  MediaFileAPI.Thumbnail = "Thumbnail";
  MediaFileAPI.HasAnyThumbnail = "HasAnyThumbnail";
  MediaFileAPI.HasSpecificThumbnail = "HasSpecificThumbnail";
  MediaFileAPI.IsBluRay = "IsBluRay";
  MediaFileAPI.IsCompleteRecording = "IsCompleteRecording";
  MediaFileAPI.IsDVD = "IsDVD";
  MediaFileAPI.IsDVDDrive = "IsDVDDrive";
  MediaFileAPI.IsFileCurrentlyRecording = "IsFileCurrentlyRecording";
  MediaFileAPI.IsLibraryFile = "IsLibraryFile";
  MediaFileAPI.IsLocalFile = "IsLocalFile";
  MediaFileAPI.IsMusicFile = "IsMusicFile";
  MediaFileAPI.IsPictureFile = "IsPictureFile";
  MediaFileAPI.IsTVFile = "IsTVFile";
  MediaFileAPI.IsThumbnailLoaded = "IsThumbnailLoaded";
  MediaFileAPI.IsVideoFile = "IsVideoFile";
  // Metadata Field Constants for a MediaFile
  MediaFileAPI.MetadataProperties = {};
  MediaFileAPI.MetadataProperties.Title = "Title";
  MediaFileAPI.MetadataProperties.EpisodeName = "EpisodeName";
  MediaFileAPI.MetadataProperties.Genre = "Genre";
  MediaFileAPI.MetadataProperties.GenreID = "GenreID";
  MediaFileAPI.MetadataProperties.Description = "Description";
  MediaFileAPI.MetadataProperties.Year = "Year";
  MediaFileAPI.MetadataProperties.Language = "Language";
  MediaFileAPI.MetadataProperties.Rated = "Rated";
  MediaFileAPI.MetadataProperties.ParentalRating = "ParentalRating";
  MediaFileAPI.MetadataProperties.RunningTime = "RunningTime";
  MediaFileAPI.MetadataProperties.OriginalAirDate = "OriginalAirDate";
  MediaFileAPI.MetadataProperties.ExtendedRatings = "ExtendedRatings";
  MediaFileAPI.MetadataProperties.Misc = "Misc";
  MediaFileAPI.MetadataProperties.PartNumber = "PartNumber";
  MediaFileAPI.MetadataProperties.TotalParts = "TotalParts";
  MediaFileAPI.MetadataProperties.HDTV = "HDTV";
  MediaFileAPI.MetadataProperties.CC = "CC";
  MediaFileAPI.MetadataProperties.Stereo = "Stereo";
  MediaFileAPI.MetadataProperties.Subtitled = "Subtitled";
  MediaFileAPI.MetadataProperties.Premiere = "Premiere";
  MediaFileAPI.MetadataProperties.SeasonPremiere = "SeasonPremiere";
  MediaFileAPI.MetadataProperties.SeriesPremiere = "SeriesPremiere";
  MediaFileAPI.MetadataProperties.ChannelPremiere = "ChannelPremiere";
  MediaFileAPI.MetadataProperties.SeasonFinal = "SeasonFinal";
  MediaFileAPI.MetadataProperties.SeriesFinale = "SeriesFinale";
  MediaFileAPI.MetadataProperties.SAP = "SAP";
  MediaFileAPI.MetadataProperties.ExternalID = "ExternalID";
  MediaFileAPI.MetadataProperties.Width = "Width";
  MediaFileAPI.MetadataProperties.Height = "Height";
  MediaFileAPI.MetadataProperties.Track = "Track";
  MediaFileAPI.MetadataProperties.TotalTracks = "TotalTracks";
  MediaFileAPI.MetadataProperties.Comment = "Comment";
  MediaFileAPI.MetadataProperties.AiringTime = "AiringTime";
  MediaFileAPI.MetadataProperties.ThumbnailOffset = "ThumbnailOffset";
  MediaFileAPI.MetadataProperties.ThumbnailSize = "ThumbnailSize";
  MediaFileAPI.MetadataProperties.ThumbnailDesc = "ThumbnailDesc";
  MediaFileAPI.MetadataProperties.Duration = "Duration";
  MediaFileAPI.MetadataProperties.Picture_Resolution = "Picture.Resolution";
  MediaFileAPI.MetadataProperties.MediaTitle = "MediaTitle";
  MediaFileAPI.MetadataProperties.MediaType = "MediaType";
  MediaFileAPI.MetadataProperties.SeasonNumber = "SeasonNumber";
  MediaFileAPI.MetadataProperties.EpisodeNumber = "EpisodeNumber";
  MediaFileAPI.MetadataProperties.IMDBID = "IMDBID";
  MediaFileAPI.MetadataProperties.DiscNumber = "DiscNumber";
  MediaFileAPI.MetadataProperties.MediaProviderID = "MediaProviderID";
  MediaFileAPI.MetadataProperties.MediaProviderDataID = "MediaProviderDataID";
  MediaFileAPI.MetadataProperties.UserRating = "UserRating";
  MediaFileAPI.MetadataProperties.Fanart = "Fanart";
  MediaFileAPI.MetadataProperties.TrailerUrl = "TrailerUrl";
  MediaFileAPI.MetadataProperties.SeriesInfoID = "SeriesInfoID";
  MediaFileAPI.MetadataProperties.EpisodeCount = "EpisodeCount";
  MediaFileAPI.MetadataProperties.CollectionName = "CollectionName";
  MediaFileAPI.MetadataProperties.CollectionID = "CollectionID";
  MediaFileAPI.MetadataProperties.CollectionOverview = "CollectionOverview";
  MediaFileAPI.MetadataProperties.DefaultPoster = "DefaultPoster";
  MediaFileAPI.MetadataProperties.DefaultBanner = "DefaultBanner";
  MediaFileAPI.MetadataProperties.DefaultBackground = "DefaultBackground";
  MediaFileAPI.MetadataProperties.ScrapedBy = "ScrapedBy";
  MediaFileAPI.MetadataProperties.ScrapedDate = "ScrapedDate";
  MediaFileAPI.MetadataProperties.TagLine = "TagLine";
  MediaFileAPI.MetadataProperties.Quotes = "Quotes";
  MediaFileAPI.MetadataProperties.Trivia = "Trivia";
  exports.default = MediaFileAPI;
});