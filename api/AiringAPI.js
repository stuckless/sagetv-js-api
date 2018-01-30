class AiringAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddAiring
   AddAiring(ShowExternalID, StationID, StartTime, Duration) {
  return this.sageAPI.invoke("AddAiring", {
'ShowExternalID':ShowExternalID
,
'StationID':StationID
,
'StartTime':StartTime
,
'Duration':Duration
});
   }

    // AddAiringDetailed
   AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, HDTV, Stereo, ClosedCaptioning, SAP, Subtitled, PremierFinale) {
  return this.sageAPI.invoke("AddAiringDetailed", {
'ShowExternalID':ShowExternalID
,
'StationID':StationID
,
'StartTime':StartTime
,
'Duration':Duration
,
'PartNumber':PartNumber
,
'TotalParts':TotalParts
,
'ParentalRating':ParentalRating
,
'HDTV':HDTV
,
'Stereo':Stereo
,
'ClosedCaptioning':ClosedCaptioning
,
'SAP':SAP
,
'Subtitled':Subtitled
,
'PremierFinale':PremierFinale
});
   }

    // AddAiringDetailed
   AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, Attributes, PremierFinale) {
  return this.sageAPI.invoke("AddAiringDetailed", {
'ShowExternalID':ShowExternalID
,
'StationID':StationID
,
'StartTime':StartTime
,
'Duration':Duration
,
'PartNumber':PartNumber
,
'TotalParts':TotalParts
,
'ParentalRating':ParentalRating
,
'Attributes':Attributes
,
'PremierFinale':PremierFinale
});
   }

    // CancelRecord
   CancelRecord(Airing) {
  return this.sageAPI.invoke("CancelRecord", {
'Airing':Airing.ID
});
   }

    // ClearDontLike
   ClearDontLike(Airing) {
  return this.sageAPI.invoke("ClearDontLike", {
'Airing':Airing.ID
});
   }

    // ClearWatched
   ClearWatched(Airing) {
  return this.sageAPI.invoke("ClearWatched", {
'Airing':Airing.ID
});
   }

    // GetAiringAttributeList
   GetAiringAttributeList(Airing) {
  if (typeof Airing.AttributeList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AttributeList);
  });
  return this.sageAPI.invoke("GetAiringAttributeList", {
'Airing':Airing.ID
});
   }

    // GetAiringChannelName
   GetAiringChannelName(Airing) {
  if (typeof Airing.ChannelName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ChannelName);
  });
  return this.sageAPI.invoke("GetAiringChannelName", {
'Airing':Airing.ID
});
   }

    // GetAiringChannelNumber
   GetAiringChannelNumber(Airing) {
  if (typeof Airing.ChannelNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ChannelNumber);
  });
  return this.sageAPI.invoke("GetAiringChannelNumber", {
'Airing':Airing.ID
});
   }

    // GetAiringDuration
   GetAiringDuration(Airing) {
  if (typeof Airing.Duration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Duration);
  });
  return this.sageAPI.invoke("GetAiringDuration", {
'Airing':Airing.ID
});
   }

    // GetAiringEndTime
   GetAiringEndTime(Airing) {
  if (typeof Airing.EndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.EndTime);
  });
  return this.sageAPI.invoke("GetAiringEndTime", {
'Airing':Airing.ID
});
   }

    // GetAiringForID
   GetAiringForID(AiringID) {
  return this.sageAPI.invoke("GetAiringForID", {
'AiringID':AiringID
});
   }

    // GetAiringID
   GetAiringID(Airing) {
  if (typeof Airing.ID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ID);
  });
  return this.sageAPI.invoke("GetAiringID", {
'Airing':Airing.ID
});
   }

    // GetAiringOnAfter
   GetAiringOnAfter(Airing) {
  if (typeof Airing.OnAfter !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.OnAfter);
  });
  return this.sageAPI.invoke("GetAiringOnAfter", {
'Airing':Airing.ID
});
   }

    // GetAiringOnBefore
   GetAiringOnBefore(Airing) {
  if (typeof Airing.OnBefore !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.OnBefore);
  });
  return this.sageAPI.invoke("GetAiringOnBefore", {
'Airing':Airing.ID
});
   }

    // GetAiringPartNumber
   GetAiringPartNumber(Airing) {
  if (typeof Airing.PartNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PartNumber);
  });
  return this.sageAPI.invoke("GetAiringPartNumber", {
'Airing':Airing.ID
});
   }

    // GetAiringPremiereFinaleInfo
   GetAiringPremiereFinaleInfo(Airing) {
  if (typeof Airing.PremiereFinaleInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PremiereFinaleInfo);
  });
  return this.sageAPI.invoke("GetAiringPremiereFinaleInfo", {
'Airing':Airing.ID
});
   }

    // GetAiringRatings
   GetAiringRatings(Airing) {
  if (typeof Airing.Ratings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Ratings);
  });
  return this.sageAPI.invoke("GetAiringRatings", {
'Airing':Airing.ID
});
   }

    // GetAiringStartTime
   GetAiringStartTime(Airing) {
  if (typeof Airing.StartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.StartTime);
  });
  return this.sageAPI.invoke("GetAiringStartTime", {
'Airing':Airing.ID
});
   }

    // GetAiringTitle
   GetAiringTitle(Airing) {
  if (typeof Airing.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Title);
  });
  return this.sageAPI.invoke("GetAiringTitle", {
'Airing':Airing.ID
});
   }

    // GetAiringTotalParts
   GetAiringTotalParts(Airing) {
  if (typeof Airing.TotalParts !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.TotalParts);
  });
  return this.sageAPI.invoke("GetAiringTotalParts", {
'Airing':Airing.ID
});
   }

    // GetChannel
   GetChannel(Airing) {
  if (typeof Airing.Channel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Channel);
  });
  return this.sageAPI.invoke("GetChannel", {
'Airing':Airing.ID
});
   }

    // GetExtraAiringDetails
   GetExtraAiringDetails(Airing) {
  if (typeof Airing.ExtraAiringDetails !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ExtraAiringDetails);
  });
  return this.sageAPI.invoke("GetExtraAiringDetails", {
'Airing':Airing.ID
});
   }

    // GetLatestWatchedTime
   GetLatestWatchedTime(Airing) {
  if (typeof Airing.LatestWatchedTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.LatestWatchedTime);
  });
  return this.sageAPI.invoke("GetLatestWatchedTime", {
'Airing':Airing.ID
});
   }

    // GetManualRecordProperty
   GetManualRecordProperty(Airing, PropertyName) {
  return this.sageAPI.invoke("GetManualRecordProperty", {
'Airing':Airing.ID
,
'PropertyName':PropertyName
});
   }

    // GetMediaFileForAiring
   GetMediaFileForAiring(Airing) {
  if (typeof Airing.MediaFileForAiring !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.MediaFileForAiring);
  });
  return this.sageAPI.invoke("GetMediaFileForAiring", {
'Airing':Airing.ID
});
   }

    // GetParentalLimitsExceeded
   GetParentalLimitsExceeded(Airing) {
  if (typeof Airing.ParentalLimitsExceeded !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ParentalLimitsExceeded);
  });
  return this.sageAPI.invoke("GetParentalLimitsExceeded", {
'Airing':Airing.ID
});
   }

    // GetParentalRating
   GetParentalRating(Airing) {
  if (typeof Airing.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ParentalRating);
  });
  return this.sageAPI.invoke("GetParentalRating", {
'Airing':Airing.ID
});
   }

    // GetPlayableAiring
   GetPlayableAiring(Airing) {
  if (typeof Airing.PlayableAiring !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PlayableAiring);
  });
  return this.sageAPI.invoke("GetPlayableAiring", {
'Airing':Airing.ID
});
   }

    // GetRealWatchedEndTime
   GetRealWatchedEndTime(Airing) {
  if (typeof Airing.RealWatchedEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RealWatchedEndTime);
  });
  return this.sageAPI.invoke("GetRealWatchedEndTime", {
'Airing':Airing.ID
});
   }

    // GetRealWatchedStartTime
   GetRealWatchedStartTime(Airing) {
  if (typeof Airing.RealWatchedStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RealWatchedStartTime);
  });
  return this.sageAPI.invoke("GetRealWatchedStartTime", {
'Airing':Airing.ID
});
   }

    // GetRecordingName
   GetRecordingName(Airing) {
  if (typeof Airing.RecordingName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RecordingName);
  });
  return this.sageAPI.invoke("GetRecordingName", {
'Airing':Airing.ID
});
   }

    // GetRecordingQuality
   GetRecordingQuality(Airing) {
  if (typeof Airing.RecordingQuality !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RecordingQuality);
  });
  return this.sageAPI.invoke("GetRecordingQuality", {
'Airing':Airing.ID
});
   }

    // GetScheduleDuration
   GetScheduleDuration(Airing) {
  if (typeof Airing.ScheduleDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleDuration);
  });
  return this.sageAPI.invoke("GetScheduleDuration", {
'Airing':Airing.ID
});
   }

    // GetScheduleEndTime
   GetScheduleEndTime(Airing) {
  if (typeof Airing.ScheduleEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleEndTime);
  });
  return this.sageAPI.invoke("GetScheduleEndTime", {
'Airing':Airing.ID
});
   }

    // GetScheduleRecordingRecurrence
   GetScheduleRecordingRecurrence(Airing) {
  if (typeof Airing.ScheduleRecordingRecurrence !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleRecordingRecurrence);
  });
  return this.sageAPI.invoke("GetScheduleRecordingRecurrence", {
'Airing':Airing.ID
});
   }

    // GetScheduleStartTime
   GetScheduleStartTime(Airing) {
  if (typeof Airing.ScheduleStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleStartTime);
  });
  return this.sageAPI.invoke("GetScheduleStartTime", {
'Airing':Airing.ID
});
   }

    // GetShow
   GetShow(Airing) {
  if (typeof Airing.Show !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Show);
  });
  return this.sageAPI.invoke("GetShow", {
'Airing':Airing.ID
});
   }

    // GetTrackNumber
   GetTrackNumber(Airing) {
  if (typeof Airing.TrackNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.TrackNumber);
  });
  return this.sageAPI.invoke("GetTrackNumber", {
'Airing':Airing.ID
});
   }

    // GetWatchedDuration
   GetWatchedDuration(Airing) {
  if (typeof Airing.WatchedDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedDuration);
  });
  return this.sageAPI.invoke("GetWatchedDuration", {
'Airing':Airing.ID
});
   }

    // GetWatchedEndTime
   GetWatchedEndTime(Airing) {
  if (typeof Airing.WatchedEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedEndTime);
  });
  return this.sageAPI.invoke("GetWatchedEndTime", {
'Airing':Airing.ID
});
   }

    // GetWatchedStartTime
   GetWatchedStartTime(Airing) {
  if (typeof Airing.WatchedStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedStartTime);
  });
  return this.sageAPI.invoke("GetWatchedStartTime", {
'Airing':Airing.ID
});
   }

    // IsAiringAttributeSet
   IsAiringAttributeSet(Airing, Attribute) {
  return this.sageAPI.invoke("IsAiringAttributeSet", {
'Airing':Airing.ID
,
'Attribute':Attribute
});
   }

    // IsAiringHDTV
   IsAiringHDTV(Airing) {
  if (typeof Airing.HDTV !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.HDTV);
  });
  return this.sageAPI.invoke("IsAiringHDTV", {
'Airing':Airing.ID
});
   }

    // IsAiringObject
   IsAiringObject(Airing) {
  return this.sageAPI.invoke("IsAiringObject", {
'Airing':Airing.ID
});
   }

    // IsDontLike
   IsDontLike(Airing) {
  if (typeof Airing.DontLike !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.DontLike);
  });
  return this.sageAPI.invoke("IsDontLike", {
'Airing':Airing.ID
});
   }

    // IsFavorite
   IsFavorite(Airing) {
  if (typeof Airing.Favorite !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Favorite);
  });
  return this.sageAPI.invoke("IsFavorite", {
'Airing':Airing.ID
});
   }

    // IsManualRecord
   IsManualRecord(Airing) {
  if (typeof Airing.ManualRecord !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ManualRecord);
  });
  return this.sageAPI.invoke("IsManualRecord", {
'Airing':Airing.ID
});
   }

    // IsNotManualOrFavorite
   IsNotManualOrFavorite(Airing) {
  if (typeof Airing.NotManualOrFavorite !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.NotManualOrFavorite);
  });
  return this.sageAPI.invoke("IsNotManualOrFavorite", {
'Airing':Airing.ID
});
   }

    // IsWatched
   IsWatched(Airing) {
  if (typeof Airing.Watched !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Watched);
  });
  return this.sageAPI.invoke("IsWatched", {
'Airing':Airing.ID
});
   }

    // IsWatchedCompletely
   IsWatchedCompletely(Airing) {
  if (typeof Airing.WatchedCompletely !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedCompletely);
  });
  return this.sageAPI.invoke("IsWatchedCompletely", {
'Airing':Airing.ID
});
   }

    // PrintAiringLong
   PrintAiringLong(Airing) {
  return this.sageAPI.invoke("PrintAiringLong", {
'Airing':Airing.ID
});
   }

    // PrintAiringMedium
   PrintAiringMedium(Airing) {
  return this.sageAPI.invoke("PrintAiringMedium", {
'Airing':Airing.ID
});
   }

    // PrintAiringShort
   PrintAiringShort(Airing) {
  return this.sageAPI.invoke("PrintAiringShort", {
'Airing':Airing.ID
});
   }

    // Record
   Record(Airing) {
  return this.sageAPI.invoke("Record", {
'Airing':Airing.ID
});
   }

    // SetDontLike
   SetDontLike(Airing) {
  return this.sageAPI.invoke("SetDontLike", {
'Airing':Airing.ID
});
   }

    // SetManualRecordProperty
   SetManualRecordProperty(Airing, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetManualRecordProperty", {
'Airing':Airing.ID
,
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }

    // SetRecordingName
   SetRecordingName(Airing, Name) {
  return this.sageAPI.invoke("SetRecordingName", {
'Airing':Airing.ID
,
'Name':Name
});
   }

    // SetRecordingQuality
   SetRecordingQuality(Airing, Quality) {
  return this.sageAPI.invoke("SetRecordingQuality", {
'Airing':Airing.ID
,
'Quality':Quality
});
   }

    // SetRecordingTimes
   SetRecordingTimes(Airing, StartTime, StopTime) {
  return this.sageAPI.invoke("SetRecordingTimes", {
'Airing':Airing.ID
,
'StartTime':StartTime
,
'StopTime':StopTime
});
   }

    // SetWatched
   SetWatched(Airing) {
  return this.sageAPI.invoke("SetWatched", {
'Airing':Airing.ID
});
   }

    // SetWatchedTimes
   SetWatchedTimes(Airing, WatchedEndTime, RealStartTime) {
  return this.sageAPI.invoke("SetWatchedTimes", {
'Airing':Airing.ID
,
'WatchedEndTime':WatchedEndTime
,
'RealStartTime':RealStartTime
});
   }
}

    export default AiringAPI;
