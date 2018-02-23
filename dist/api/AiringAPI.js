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
    global.AiringAPI = mod.exports;
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

  var AiringAPI = function () {
    function AiringAPI(sageAPI) {
      _classCallCheck(this, AiringAPI);

      this.sageAPI = sageAPI;
    }

    // AddAiring


    _createClass(AiringAPI, [{
      key: "AddAiring",
      value: function AddAiring(ShowExternalID, StationID, StartTime, Duration) {
        return this.sageAPI.invoke("AddAiring", [ShowExternalID, StationID, StartTime, Duration]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddAiringDetailed",
      value: function AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, HDTV, Stereo, ClosedCaptioning, SAP, Subtitled, PremierFinale) {
        return this.sageAPI.invoke("AddAiringDetailed", [ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, HDTV, Stereo, ClosedCaptioning, SAP, Subtitled, PremierFinale]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddAiringDetailed",
      value: function AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, Attributes, PremierFinale) {
        return this.sageAPI.invoke("AddAiringDetailed", [ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, Attributes, PremierFinale]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CancelRecord",
      value: function CancelRecord(Airing) {
        return this.sageAPI.invoke("CancelRecord", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearDontLike",
      value: function ClearDontLike(Airing) {
        return this.sageAPI.invoke("ClearDontLike", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ClearWatched",
      value: function ClearWatched(Airing) {
        return this.sageAPI.invoke("ClearWatched", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringAttributeList",
      value: function GetAiringAttributeList(Airing) {
        if (typeof Airing.AiringAttributeList !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringAttributeList);
        });
        return this.sageAPI.invoke("GetAiringAttributeList", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringAttributeList = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringChannelName",
      value: function GetAiringChannelName(Airing) {
        if (typeof Airing.AiringChannelName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringChannelName);
        });
        return this.sageAPI.invoke("GetAiringChannelName", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringChannelName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringChannelNumber",
      value: function GetAiringChannelNumber(Airing) {
        if (typeof Airing.AiringChannelNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringChannelNumber);
        });
        return this.sageAPI.invoke("GetAiringChannelNumber", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringChannelNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringDuration",
      value: function GetAiringDuration(Airing) {
        if (typeof Airing.AiringDuration !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringDuration);
        });
        return this.sageAPI.invoke("GetAiringDuration", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringDuration = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringEndTime",
      value: function GetAiringEndTime(Airing) {
        if (typeof Airing.AiringEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringEndTime);
        });
        return this.sageAPI.invoke("GetAiringEndTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringForID",
      value: function GetAiringForID(AiringID) {
        return this.sageAPI.invoke("GetAiringForID", [AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringID",
      value: function GetAiringID(Airing) {
        if (typeof Airing.AiringID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringID);
        });
        return this.sageAPI.invoke("GetAiringID", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringOnAfter",
      value: function GetAiringOnAfter(Airing) {
        return this.sageAPI.invoke("GetAiringOnAfter", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringOnBefore",
      value: function GetAiringOnBefore(Airing) {
        return this.sageAPI.invoke("GetAiringOnBefore", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringPartNumber",
      value: function GetAiringPartNumber(Airing) {
        if (typeof Airing.AiringPartNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringPartNumber);
        });
        return this.sageAPI.invoke("GetAiringPartNumber", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringPartNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringPremiereFinaleInfo",
      value: function GetAiringPremiereFinaleInfo(Airing) {
        if (typeof Airing.AiringPremiereFinaleInfo !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringPremiereFinaleInfo);
        });
        return this.sageAPI.invoke("GetAiringPremiereFinaleInfo", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringPremiereFinaleInfo = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringRatings",
      value: function GetAiringRatings(Airing) {
        if (typeof Airing.AiringRatings !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringRatings);
        });
        return this.sageAPI.invoke("GetAiringRatings", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringRatings = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringStartTime",
      value: function GetAiringStartTime(Airing) {
        if (typeof Airing.AiringStartTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringStartTime);
        });
        return this.sageAPI.invoke("GetAiringStartTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringStartTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringTitle",
      value: function GetAiringTitle(Airing) {
        if (typeof Airing.AiringTitle !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringTitle);
        });
        return this.sageAPI.invoke("GetAiringTitle", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringTitle = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetAiringTotalParts",
      value: function GetAiringTotalParts(Airing) {
        if (typeof Airing.AiringTotalParts !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.AiringTotalParts);
        });
        return this.sageAPI.invoke("GetAiringTotalParts", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.AiringTotalParts = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChannel",
      value: function GetChannel(Airing) {
        if (typeof Airing.Channel !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.Channel);
        });
        return this.sageAPI.invoke("GetChannel", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.Channel = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetExtraAiringDetails",
      value: function GetExtraAiringDetails(Airing) {
        if (typeof Airing.ExtraAiringDetails !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ExtraAiringDetails);
        });
        return this.sageAPI.invoke("GetExtraAiringDetails", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ExtraAiringDetails = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetLatestWatchedTime",
      value: function GetLatestWatchedTime(Airing) {
        if (typeof Airing.LatestWatchedTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.LatestWatchedTime);
        });
        return this.sageAPI.invoke("GetLatestWatchedTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.LatestWatchedTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetManualRecordProperty",
      value: function GetManualRecordProperty(Airing, PropertyName) {
        return this.sageAPI.invoke("GetManualRecordProperty", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFileForAiring",
      value: function GetMediaFileForAiring(Airing) {
        return this.sageAPI.invoke("GetMediaFileForAiring", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetParentalLimitsExceeded",
      value: function GetParentalLimitsExceeded(Airing) {
        if (typeof Airing.ParentalLimitsExceeded !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ParentalLimitsExceeded);
        });
        return this.sageAPI.invoke("GetParentalLimitsExceeded", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ParentalLimitsExceeded = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetParentalRating",
      value: function GetParentalRating(Airing) {
        if (typeof Airing.ParentalRating !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ParentalRating);
        });
        return this.sageAPI.invoke("GetParentalRating", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ParentalRating = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPlayableAiring",
      value: function GetPlayableAiring(Airing) {
        return this.sageAPI.invoke("GetPlayableAiring", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRealWatchedEndTime",
      value: function GetRealWatchedEndTime(Airing) {
        if (typeof Airing.RealWatchedEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.RealWatchedEndTime);
        });
        return this.sageAPI.invoke("GetRealWatchedEndTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.RealWatchedEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetRealWatchedStartTime",
      value: function GetRealWatchedStartTime(Airing) {
        if (typeof Airing.RealWatchedStartTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.RealWatchedStartTime);
        });
        return this.sageAPI.invoke("GetRealWatchedStartTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.RealWatchedStartTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetRecordingName",
      value: function GetRecordingName(Airing) {
        if (typeof Airing.RecordingName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.RecordingName);
        });
        return this.sageAPI.invoke("GetRecordingName", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.RecordingName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetRecordingQuality",
      value: function GetRecordingQuality(Airing) {
        if (typeof Airing.RecordingQuality !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.RecordingQuality);
        });
        return this.sageAPI.invoke("GetRecordingQuality", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.RecordingQuality = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetScheduleDuration",
      value: function GetScheduleDuration(Airing) {
        if (typeof Airing.ScheduleDuration !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ScheduleDuration);
        });
        return this.sageAPI.invoke("GetScheduleDuration", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ScheduleDuration = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetScheduleEndTime",
      value: function GetScheduleEndTime(Airing) {
        if (typeof Airing.ScheduleEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ScheduleEndTime);
        });
        return this.sageAPI.invoke("GetScheduleEndTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ScheduleEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetScheduleRecordingRecurrence",
      value: function GetScheduleRecordingRecurrence(Airing) {
        if (typeof Airing.ScheduleRecordingRecurrence !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ScheduleRecordingRecurrence);
        });
        return this.sageAPI.invoke("GetScheduleRecordingRecurrence", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ScheduleRecordingRecurrence = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetScheduleStartTime",
      value: function GetScheduleStartTime(Airing) {
        if (typeof Airing.ScheduleStartTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.ScheduleStartTime);
        });
        return this.sageAPI.invoke("GetScheduleStartTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.ScheduleStartTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShow",
      value: function GetShow(Airing) {
        if (typeof Airing.Show !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.Show);
        });
        return this.sageAPI.invoke("GetShow", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.Show = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetTrackNumber",
      value: function GetTrackNumber(Airing) {
        if (typeof Airing.TrackNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.TrackNumber);
        });
        return this.sageAPI.invoke("GetTrackNumber", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.TrackNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWatchedDuration",
      value: function GetWatchedDuration(Airing) {
        if (typeof Airing.WatchedDuration !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.WatchedDuration);
        });
        return this.sageAPI.invoke("GetWatchedDuration", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.WatchedDuration = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWatchedEndTime",
      value: function GetWatchedEndTime(Airing) {
        if (typeof Airing.WatchedEndTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.WatchedEndTime);
        });
        return this.sageAPI.invoke("GetWatchedEndTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.WatchedEndTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWatchedStartTime",
      value: function GetWatchedStartTime(Airing) {
        if (typeof Airing.WatchedStartTime !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.WatchedStartTime);
        });
        return this.sageAPI.invoke("GetWatchedStartTime", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.WatchedStartTime = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsAiringAttributeSet",
      value: function IsAiringAttributeSet(Airing, Attribute) {
        return this.sageAPI.invoke("IsAiringAttributeSet", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, Attribute]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsAiringHDTV",
      value: function IsAiringHDTV(Airing) {
        if (typeof Airing.IsAiringHDTV !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsAiringHDTV);
        });
        return this.sageAPI.invoke("IsAiringHDTV", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsAiringHDTV = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsAiringObject",
      value: function IsAiringObject(Airing) {
        return this.sageAPI.invoke("IsAiringObject", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDontLike",
      value: function IsDontLike(Airing) {
        if (typeof Airing.IsDontLike !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsDontLike);
        });
        return this.sageAPI.invoke("IsDontLike", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsDontLike = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFavorite",
      value: function IsFavorite(Airing) {
        if (typeof Airing.IsFavorite !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsFavorite);
        });
        return this.sageAPI.invoke("IsFavorite", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsFavorite = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsManualRecord",
      value: function IsManualRecord(Airing) {
        if (typeof Airing.IsManualRecord !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsManualRecord);
        });
        return this.sageAPI.invoke("IsManualRecord", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsManualRecord = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsNotManualOrFavorite",
      value: function IsNotManualOrFavorite(Airing) {
        if (typeof Airing.IsNotManualOrFavorite !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsNotManualOrFavorite);
        });
        return this.sageAPI.invoke("IsNotManualOrFavorite", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsNotManualOrFavorite = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsWatched",
      value: function IsWatched(Airing) {
        if (typeof Airing.IsWatched !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsWatched);
        });
        return this.sageAPI.invoke("IsWatched", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsWatched = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsWatchedCompletely",
      value: function IsWatchedCompletely(Airing) {
        if (typeof Airing.IsWatchedCompletely !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Airing.IsWatchedCompletely);
        });
        return this.sageAPI.invoke("IsWatchedCompletely", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (!json || !json.Result) return null;
          Airing.IsWatchedCompletely = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "PrintAiringLong",
      value: function PrintAiringLong(Airing) {
        return this.sageAPI.invoke("PrintAiringLong", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintAiringMedium",
      value: function PrintAiringMedium(Airing) {
        return this.sageAPI.invoke("PrintAiringMedium", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "PrintAiringShort",
      value: function PrintAiringShort(Airing) {
        return this.sageAPI.invoke("PrintAiringShort", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Record",
      value: function Record(Airing) {
        return this.sageAPI.invoke("Record", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDontLike",
      value: function SetDontLike(Airing) {
        return this.sageAPI.invoke("SetDontLike", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetManualRecordProperty",
      value: function SetManualRecordProperty(Airing, PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetManualRecordProperty", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRecordingName",
      value: function SetRecordingName(Airing, Name) {
        return this.sageAPI.invoke("SetRecordingName", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRecordingQuality",
      value: function SetRecordingQuality(Airing, Quality) {
        return this.sageAPI.invoke("SetRecordingQuality", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRecordingTimes",
      value: function SetRecordingTimes(Airing, StartTime, StopTime) {
        return this.sageAPI.invoke("SetRecordingTimes", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, StartTime, StopTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWatched",
      value: function SetWatched(Airing) {
        return this.sageAPI.invoke("SetWatched", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWatchedTimes",
      value: function SetWatchedTimes(Airing, WatchedEndTime, RealStartTime) {
        return this.sageAPI.invoke("SetWatchedTimes", [Airing.MediaFileID ? 'mediafile:' + Airing.MediaFileID : 'airing:' + Airing.AiringID, WatchedEndTime, RealStartTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return AiringAPI;
  }();

  // Field Constants for Airing
  AiringAPI.AiringAttributeList = "AiringAttributeList";
  AiringAPI.AiringChannelName = "AiringChannelName";
  AiringAPI.AiringChannelNumber = "AiringChannelNumber";
  AiringAPI.AiringDuration = "AiringDuration";
  AiringAPI.AiringEndTime = "AiringEndTime";
  AiringAPI.AiringID = "AiringID";
  AiringAPI.AiringPartNumber = "AiringPartNumber";
  AiringAPI.AiringPremiereFinaleInfo = "AiringPremiereFinaleInfo";
  AiringAPI.AiringRatings = "AiringRatings";
  AiringAPI.AiringStartTime = "AiringStartTime";
  AiringAPI.AiringTitle = "AiringTitle";
  AiringAPI.AiringTotalParts = "AiringTotalParts";
  AiringAPI.Channel = "Channel";
  AiringAPI.ExtraAiringDetails = "ExtraAiringDetails";
  AiringAPI.LatestWatchedTime = "LatestWatchedTime";
  AiringAPI.ParentalLimitsExceeded = "ParentalLimitsExceeded";
  AiringAPI.ParentalRating = "ParentalRating";
  AiringAPI.RealWatchedEndTime = "RealWatchedEndTime";
  AiringAPI.RealWatchedStartTime = "RealWatchedStartTime";
  AiringAPI.RecordingName = "RecordingName";
  AiringAPI.RecordingQuality = "RecordingQuality";
  AiringAPI.ScheduleDuration = "ScheduleDuration";
  AiringAPI.ScheduleEndTime = "ScheduleEndTime";
  AiringAPI.ScheduleRecordingRecurrence = "ScheduleRecordingRecurrence";
  AiringAPI.ScheduleStartTime = "ScheduleStartTime";
  AiringAPI.Show = "Show";
  AiringAPI.TrackNumber = "TrackNumber";
  AiringAPI.WatchedDuration = "WatchedDuration";
  AiringAPI.WatchedEndTime = "WatchedEndTime";
  AiringAPI.WatchedStartTime = "WatchedStartTime";
  AiringAPI.IsAiringHDTV = "IsAiringHDTV";
  AiringAPI.IsDontLike = "IsDontLike";
  AiringAPI.IsFavorite = "IsFavorite";
  AiringAPI.IsManualRecord = "IsManualRecord";
  AiringAPI.IsNotManualOrFavorite = "IsNotManualOrFavorite";
  AiringAPI.IsWatched = "IsWatched";
  AiringAPI.IsWatchedCompletely = "IsWatchedCompletely";
  exports.default = AiringAPI;
});