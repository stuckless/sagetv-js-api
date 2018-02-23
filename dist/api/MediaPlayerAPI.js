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
    global.MediaPlayerAPI = mod.exports;
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

  var MediaPlayerAPI = function () {
    function MediaPlayerAPI(sageAPI) {
      _classCallCheck(this, MediaPlayerAPI);

      this.sageAPI = sageAPI;
    }

    // ApplyRelativeSubtitleAdjustment


    _createClass(MediaPlayerAPI, [{
      key: "ApplyRelativeSubtitleAdjustment",
      value: function ApplyRelativeSubtitleAdjustment(SubCount) {
        return this.sageAPI.invoke("ApplyRelativeSubtitleAdjustment", [SubCount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanAdjustSubtitleTiming",
      value: function CanAdjustSubtitleTiming() {
        return this.sageAPI.invoke("CanAdjustSubtitleTiming", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ChannelDown",
      value: function ChannelDown() {
        return this.sageAPI.invoke("ChannelDown", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ChannelSet",
      value: function ChannelSet(ChannelNumber) {
        return this.sageAPI.invoke("ChannelSet", [ChannelNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ChannelUp",
      value: function ChannelUp() {
        return this.sageAPI.invoke("ChannelUp", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearRecentChannels",
      value: function ClearRecentChannels() {
        return this.sageAPI.invoke("ClearRecentChannels", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CloseAndWaitUntilClosed",
      value: function CloseAndWaitUntilClosed() {
        return this.sageAPI.invoke("CloseAndWaitUntilClosed", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDAngleChange",
      value: function DVDAngleChange(AngleNum) {
        return this.sageAPI.invoke("DVDAngleChange", [AngleNum]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDAudioChange",
      value: function DVDAudioChange(AudioNum) {
        return this.sageAPI.invoke("DVDAudioChange", [AudioNum]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDChapterNext",
      value: function DVDChapterNext() {
        return this.sageAPI.invoke("DVDChapterNext", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDChapterPrevious",
      value: function DVDChapterPrevious() {
        return this.sageAPI.invoke("DVDChapterPrevious", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDChapterSet",
      value: function DVDChapterSet(ChapterNumber) {
        return this.sageAPI.invoke("DVDChapterSet", [ChapterNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDEnter",
      value: function DVDEnter() {
        return this.sageAPI.invoke("DVDEnter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDMenu",
      value: function DVDMenu() {
        return this.sageAPI.invoke("DVDMenu", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDReturn",
      value: function DVDReturn() {
        return this.sageAPI.invoke("DVDReturn", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDSubtitleChange",
      value: function DVDSubtitleChange(SubtitleNum) {
        return this.sageAPI.invoke("DVDSubtitleChange", [SubtitleNum]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDSubtitleToggle",
      value: function DVDSubtitleToggle() {
        return this.sageAPI.invoke("DVDSubtitleToggle", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDTitleMenu",
      value: function DVDTitleMenu() {
        return this.sageAPI.invoke("DVDTitleMenu", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDTitleNext",
      value: function DVDTitleNext() {
        return this.sageAPI.invoke("DVDTitleNext", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DVDTitlePrevious",
      value: function DVDTitlePrevious() {
        return this.sageAPI.invoke("DVDTitlePrevious", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DirectPlaybackControl",
      value: function DirectPlaybackControl(Code, Param1, Param2) {
        return this.sageAPI.invoke("DirectPlaybackControl", [Code, Param1, Param2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DoesCurrentMediaFileHaveVideo",
      value: function DoesCurrentMediaFileHaveVideo() {
        return this.sageAPI.invoke("DoesCurrentMediaFileHaveVideo", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAvailableSeekingEnd",
      value: function GetAvailableSeekingEnd() {
        return this.sageAPI.invoke("GetAvailableSeekingEnd", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAvailableSeekingStart",
      value: function GetAvailableSeekingStart() {
        return this.sageAPI.invoke("GetAvailableSeekingStart", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetBluRayTitleDescription",
      value: function GetBluRayTitleDescription(TitleNum) {
        return this.sageAPI.invoke("GetBluRayTitleDescription", [TitleNum]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentMediaFile",
      value: function GetCurrentMediaFile() {
        return this.sageAPI.invoke("GetCurrentMediaFile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentMediaTitle",
      value: function GetCurrentMediaTitle() {
        return this.sageAPI.invoke("GetCurrentMediaTitle", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentPlaylist",
      value: function GetCurrentPlaylist() {
        return this.sageAPI.invoke("GetCurrentPlaylist", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentPlaylistIndex",
      value: function GetCurrentPlaylistIndex() {
        return this.sageAPI.invoke("GetCurrentPlaylistIndex", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDAvailableLanguages",
      value: function GetDVDAvailableLanguages() {
        return this.sageAPI.invoke("GetDVDAvailableLanguages", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDAvailableSubpictures",
      value: function GetDVDAvailableSubpictures() {
        return this.sageAPI.invoke("GetDVDAvailableSubpictures", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentAngle",
      value: function GetDVDCurrentAngle() {
        return this.sageAPI.invoke("GetDVDCurrentAngle", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentChapter",
      value: function GetDVDCurrentChapter() {
        return this.sageAPI.invoke("GetDVDCurrentChapter", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentDomain",
      value: function GetDVDCurrentDomain() {
        return this.sageAPI.invoke("GetDVDCurrentDomain", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentLanguage",
      value: function GetDVDCurrentLanguage() {
        return this.sageAPI.invoke("GetDVDCurrentLanguage", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentSubpicture",
      value: function GetDVDCurrentSubpicture() {
        return this.sageAPI.invoke("GetDVDCurrentSubpicture", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDCurrentTitle",
      value: function GetDVDCurrentTitle() {
        return this.sageAPI.invoke("GetDVDCurrentTitle", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDNumberOfAngles",
      value: function GetDVDNumberOfAngles() {
        return this.sageAPI.invoke("GetDVDNumberOfAngles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDNumberOfChapters",
      value: function GetDVDNumberOfChapters() {
        return this.sageAPI.invoke("GetDVDNumberOfChapters", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDVDNumberOfTitles",
      value: function GetDVDNumberOfTitles() {
        return this.sageAPI.invoke("GetDVDNumberOfTitles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaDuration",
      value: function GetMediaDuration() {
        return this.sageAPI.invoke("GetMediaDuration", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaPlayerClosedCaptionState",
      value: function GetMediaPlayerClosedCaptionState() {
        return this.sageAPI.invoke("GetMediaPlayerClosedCaptionState", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaTime",
      value: function GetMediaTime() {
        return this.sageAPI.invoke("GetMediaTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPlaybackRate",
      value: function GetPlaybackRate() {
        return this.sageAPI.invoke("GetPlaybackRate", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRawMediaTime",
      value: function GetRawMediaTime() {
        return this.sageAPI.invoke("GetRawMediaTime", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRecentChannels",
      value: function GetRecentChannels() {
        return this.sageAPI.invoke("GetRecentChannels", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSubtitleDelay",
      value: function GetSubtitleDelay() {
        return this.sageAPI.invoke("GetSubtitleDelay", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVideoSnapshot",
      value: function GetVideoSnapshot() {
        return this.sageAPI.invoke("GetVideoSnapshot", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetVolume",
      value: function GetVolume() {
        return this.sageAPI.invoke("GetVolume", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasMediaFile",
      value: function HasMediaFile() {
        return this.sageAPI.invoke("HasMediaFile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCorrectParentalLockCode",
      value: function IsCorrectParentalLockCode(ParentalLockCode) {
        return this.sageAPI.invoke("IsCorrectParentalLockCode", [ParentalLockCode]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCurrentMediaFileDVD",
      value: function IsCurrentMediaFileDVD() {
        return this.sageAPI.invoke("IsCurrentMediaFileDVD", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCurrentMediaFileMusic",
      value: function IsCurrentMediaFileMusic() {
        return this.sageAPI.invoke("IsCurrentMediaFileMusic", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsCurrentMediaFileRecording",
      value: function IsCurrentMediaFileRecording() {
        return this.sageAPI.invoke("IsCurrentMediaFileRecording", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMediaPlayerFullyLoaded",
      value: function IsMediaPlayerFullyLoaded() {
        return this.sageAPI.invoke("IsMediaPlayerFullyLoaded", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMediaPlayerLoading",
      value: function IsMediaPlayerLoading() {
        return this.sageAPI.invoke("IsMediaPlayerLoading", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMediaPlayerSignalLost",
      value: function IsMediaPlayerSignalLost() {
        return this.sageAPI.invoke("IsMediaPlayerSignalLost", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMuted",
      value: function IsMuted() {
        return this.sageAPI.invoke("IsMuted", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPlaying",
      value: function IsPlaying() {
        return this.sageAPI.invoke("IsPlaying", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsShowingDVDMenu",
      value: function IsShowingDVDMenu() {
        return this.sageAPI.invoke("IsShowingDVDMenu", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LockTuner",
      value: function LockTuner(CaptureDeviceInput) {
        return this.sageAPI.invoke("LockTuner", [CaptureDeviceInput]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Pause",
      value: function Pause() {
        return this.sageAPI.invoke("Pause", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Play",
      value: function Play() {
        return this.sageAPI.invoke("Play", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PlayFaster",
      value: function PlayFaster() {
        return this.sageAPI.invoke("PlayFaster", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PlayPause",
      value: function PlayPause() {
        return this.sageAPI.invoke("PlayPause", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PlaySlower",
      value: function PlaySlower() {
        return this.sageAPI.invoke("PlaySlower", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ReloadCurrentFile",
      value: function ReloadCurrentFile() {
        return this.sageAPI.invoke("ReloadCurrentFile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Seek",
      value: function Seek(Time) {
        return this.sageAPI.invoke("Seek", [Time]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMediaPlayerClosedCaptionState",
      value: function SetMediaPlayerClosedCaptionState(CCType) {
        return this.sageAPI.invoke("SetMediaPlayerClosedCaptionState", [CCType]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetMute",
      value: function SetMute(Muted) {
        return this.sageAPI.invoke("SetMute", [Muted]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPlaybackRate",
      value: function SetPlaybackRate(PlaybackRate) {
        return this.sageAPI.invoke("SetPlaybackRate", [PlaybackRate]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSubtitleDelay",
      value: function SetSubtitleDelay(DelayMsec) {
        return this.sageAPI.invoke("SetSubtitleDelay", [DelayMsec]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVideoAlwaysOnTop",
      value: function SetVideoAlwaysOnTop(OnTop) {
        return this.sageAPI.invoke("SetVideoAlwaysOnTop", [OnTop]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetVolume",
      value: function SetVolume(Amount) {
        return this.sageAPI.invoke("SetVolume", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SkipBackwards",
      value: function SkipBackwards() {
        return this.sageAPI.invoke("SkipBackwards", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SkipBackwards2",
      value: function SkipBackwards2() {
        return this.sageAPI.invoke("SkipBackwards2", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SkipForward",
      value: function SkipForward() {
        return this.sageAPI.invoke("SkipForward", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SkipForward2",
      value: function SkipForward2() {
        return this.sageAPI.invoke("SkipForward2", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartPlaylist",
      value: function StartPlaylist(Playlist) {
        return this.sageAPI.invoke("StartPlaylist", [Playlist]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StartPlaylistAt",
      value: function StartPlaylistAt(Playlist, StartIndex) {
        return this.sageAPI.invoke("StartPlaylistAt", [Playlist, StartIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "VolumeAdjust",
      value: function VolumeAdjust(Amount) {
        return this.sageAPI.invoke("VolumeAdjust", [Amount]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "VolumeDown",
      value: function VolumeDown() {
        return this.sageAPI.invoke("VolumeDown", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "VolumeUp",
      value: function VolumeUp() {
        return this.sageAPI.invoke("VolumeUp", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Watch",
      value: function Watch(Content) {
        return this.sageAPI.invoke("Watch", [Content]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "WatchLive",
      value: function WatchLive(CaptureDeviceInput, PauseBufferSize) {
        return this.sageAPI.invoke("WatchLive", [CaptureDeviceInput, PauseBufferSize]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "WatchLive",
      value: function WatchLive(CaptureDeviceInput, PauseBufferSize, PhysicalChannel) {
        return this.sageAPI.invoke("WatchLive", [CaptureDeviceInput, PauseBufferSize, PhysicalChannel]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "WatchLocalFile",
      value: function WatchLocalFile(file) {
        return this.sageAPI.invoke("WatchLocalFile", [file]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return MediaPlayerAPI;
  }();

  exports.default = MediaPlayerAPI;
});