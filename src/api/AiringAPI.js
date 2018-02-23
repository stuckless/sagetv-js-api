class AiringAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddAiring
   AddAiring(ShowExternalID, StationID, StartTime, Duration) {
  return this.sageAPI.invoke("AddAiring", [ShowExternalID,StationID,StartTime,Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddAiringDetailed
   AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, HDTV, Stereo, ClosedCaptioning, SAP, Subtitled, PremierFinale) {
  return this.sageAPI.invoke("AddAiringDetailed", [ShowExternalID,StationID,StartTime,Duration,PartNumber,TotalParts,ParentalRating,HDTV,Stereo,ClosedCaptioning,SAP,Subtitled,PremierFinale]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddAiringDetailed
   AddAiringDetailed(ShowExternalID, StationID, StartTime, Duration, PartNumber, TotalParts, ParentalRating, Attributes, PremierFinale) {
  return this.sageAPI.invoke("AddAiringDetailed", [ShowExternalID,StationID,StartTime,Duration,PartNumber,TotalParts,ParentalRating,Attributes,PremierFinale]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CancelRecord
   CancelRecord(Airing) {
  return this.sageAPI.invoke("CancelRecord", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearDontLike
   ClearDontLike(Airing) {
  return this.sageAPI.invoke("ClearDontLike", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearWatched
   ClearWatched(Airing) {
  return this.sageAPI.invoke("ClearWatched", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringAttributeList
   GetAiringAttributeList(Airing) {
  if (typeof Airing.AiringAttributeList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringAttributeList);
  });
  return this.sageAPI.invoke("GetAiringAttributeList", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringAttributeList=json.Result;
  return json.Result;
});
   }

    // GetAiringChannelName
   GetAiringChannelName(Airing) {
  if (typeof Airing.AiringChannelName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringChannelName);
  });
  return this.sageAPI.invoke("GetAiringChannelName", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringChannelName=json.Result;
  return json.Result;
});
   }

    // GetAiringChannelNumber
   GetAiringChannelNumber(Airing) {
  if (typeof Airing.AiringChannelNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringChannelNumber);
  });
  return this.sageAPI.invoke("GetAiringChannelNumber", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringChannelNumber=json.Result;
  return json.Result;
});
   }

    // GetAiringDuration
   GetAiringDuration(Airing) {
  if (typeof Airing.AiringDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringDuration);
  });
  return this.sageAPI.invoke("GetAiringDuration", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringDuration=json.Result;
  return json.Result;
});
   }

    // GetAiringEndTime
   GetAiringEndTime(Airing) {
  if (typeof Airing.AiringEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringEndTime);
  });
  return this.sageAPI.invoke("GetAiringEndTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringEndTime=json.Result;
  return json.Result;
});
   }

    // GetAiringForID
   GetAiringForID(AiringID) {
  return this.sageAPI.invoke("GetAiringForID", [AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringID
   GetAiringID(Airing) {
  if (typeof Airing.AiringID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringID);
  });
  return this.sageAPI.invoke("GetAiringID", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringID=json.Result;
  return json.Result;
});
   }

    // GetAiringOnAfter
   GetAiringOnAfter(Airing) {
  return this.sageAPI.invoke("GetAiringOnAfter", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringOnBefore
   GetAiringOnBefore(Airing) {
  return this.sageAPI.invoke("GetAiringOnBefore", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringPartNumber
   GetAiringPartNumber(Airing) {
  if (typeof Airing.AiringPartNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringPartNumber);
  });
  return this.sageAPI.invoke("GetAiringPartNumber", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringPartNumber=json.Result;
  return json.Result;
});
   }

    // GetAiringPremiereFinaleInfo
   GetAiringPremiereFinaleInfo(Airing) {
  if (typeof Airing.AiringPremiereFinaleInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringPremiereFinaleInfo);
  });
  return this.sageAPI.invoke("GetAiringPremiereFinaleInfo", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringPremiereFinaleInfo=json.Result;
  return json.Result;
});
   }

    // GetAiringRatings
   GetAiringRatings(Airing) {
  if (typeof Airing.AiringRatings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringRatings);
  });
  return this.sageAPI.invoke("GetAiringRatings", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringRatings=json.Result;
  return json.Result;
});
   }

    // GetAiringStartTime
   GetAiringStartTime(Airing) {
  if (typeof Airing.AiringStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringStartTime);
  });
  return this.sageAPI.invoke("GetAiringStartTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringStartTime=json.Result;
  return json.Result;
});
   }

    // GetAiringTitle
   GetAiringTitle(Airing) {
  if (typeof Airing.AiringTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringTitle);
  });
  return this.sageAPI.invoke("GetAiringTitle", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringTitle=json.Result;
  return json.Result;
});
   }

    // GetAiringTotalParts
   GetAiringTotalParts(Airing) {
  if (typeof Airing.AiringTotalParts !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AiringTotalParts);
  });
  return this.sageAPI.invoke("GetAiringTotalParts", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringTotalParts=json.Result;
  return json.Result;
});
   }

    // GetChannel
   GetChannel(Airing) {
  if (typeof Airing.Channel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Channel);
  });
  return this.sageAPI.invoke("GetChannel", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.Channel=json.Result;
  return json.Result;
});
   }

    // GetExtraAiringDetails
   GetExtraAiringDetails(Airing) {
  if (typeof Airing.ExtraAiringDetails !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ExtraAiringDetails);
  });
  return this.sageAPI.invoke("GetExtraAiringDetails", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ExtraAiringDetails=json.Result;
  return json.Result;
});
   }

    // GetLatestWatchedTime
   GetLatestWatchedTime(Airing) {
  if (typeof Airing.LatestWatchedTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.LatestWatchedTime);
  });
  return this.sageAPI.invoke("GetLatestWatchedTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.LatestWatchedTime=json.Result;
  return json.Result;
});
   }

    // GetManualRecordProperty
   GetManualRecordProperty(Airing, PropertyName) {
  return this.sageAPI.invoke("GetManualRecordProperty", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileForAiring
   GetMediaFileForAiring(Airing) {
  return this.sageAPI.invoke("GetMediaFileForAiring", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetParentalLimitsExceeded
   GetParentalLimitsExceeded(Airing) {
  if (typeof Airing.ParentalLimitsExceeded !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ParentalLimitsExceeded);
  });
  return this.sageAPI.invoke("GetParentalLimitsExceeded", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ParentalLimitsExceeded=json.Result;
  return json.Result;
});
   }

    // GetParentalRating
   GetParentalRating(Airing) {
  if (typeof Airing.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ParentalRating);
  });
  return this.sageAPI.invoke("GetParentalRating", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ParentalRating=json.Result;
  return json.Result;
});
   }

    // GetPlayableAiring
   GetPlayableAiring(Airing) {
  return this.sageAPI.invoke("GetPlayableAiring", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRealWatchedEndTime
   GetRealWatchedEndTime(Airing) {
  if (typeof Airing.RealWatchedEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RealWatchedEndTime);
  });
  return this.sageAPI.invoke("GetRealWatchedEndTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.RealWatchedEndTime=json.Result;
  return json.Result;
});
   }

    // GetRealWatchedStartTime
   GetRealWatchedStartTime(Airing) {
  if (typeof Airing.RealWatchedStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RealWatchedStartTime);
  });
  return this.sageAPI.invoke("GetRealWatchedStartTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.RealWatchedStartTime=json.Result;
  return json.Result;
});
   }

    // GetRecordingName
   GetRecordingName(Airing) {
  if (typeof Airing.RecordingName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RecordingName);
  });
  return this.sageAPI.invoke("GetRecordingName", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.RecordingName=json.Result;
  return json.Result;
});
   }

    // GetRecordingQuality
   GetRecordingQuality(Airing) {
  if (typeof Airing.RecordingQuality !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RecordingQuality);
  });
  return this.sageAPI.invoke("GetRecordingQuality", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.RecordingQuality=json.Result;
  return json.Result;
});
   }

    // GetScheduleDuration
   GetScheduleDuration(Airing) {
  if (typeof Airing.ScheduleDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleDuration);
  });
  return this.sageAPI.invoke("GetScheduleDuration", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ScheduleDuration=json.Result;
  return json.Result;
});
   }

    // GetScheduleEndTime
   GetScheduleEndTime(Airing) {
  if (typeof Airing.ScheduleEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleEndTime);
  });
  return this.sageAPI.invoke("GetScheduleEndTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ScheduleEndTime=json.Result;
  return json.Result;
});
   }

    // GetScheduleRecordingRecurrence
   GetScheduleRecordingRecurrence(Airing) {
  if (typeof Airing.ScheduleRecordingRecurrence !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleRecordingRecurrence);
  });
  return this.sageAPI.invoke("GetScheduleRecordingRecurrence", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ScheduleRecordingRecurrence=json.Result;
  return json.Result;
});
   }

    // GetScheduleStartTime
   GetScheduleStartTime(Airing) {
  if (typeof Airing.ScheduleStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ScheduleStartTime);
  });
  return this.sageAPI.invoke("GetScheduleStartTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ScheduleStartTime=json.Result;
  return json.Result;
});
   }

    // GetShow
   GetShow(Airing) {
  if (typeof Airing.Show !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Show);
  });
  return this.sageAPI.invoke("GetShow", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.Show=json.Result;
  return json.Result;
});
   }

    // GetTrackNumber
   GetTrackNumber(Airing) {
  if (typeof Airing.TrackNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.TrackNumber);
  });
  return this.sageAPI.invoke("GetTrackNumber", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.TrackNumber=json.Result;
  return json.Result;
});
   }

    // GetWatchedDuration
   GetWatchedDuration(Airing) {
  if (typeof Airing.WatchedDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedDuration);
  });
  return this.sageAPI.invoke("GetWatchedDuration", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.WatchedDuration=json.Result;
  return json.Result;
});
   }

    // GetWatchedEndTime
   GetWatchedEndTime(Airing) {
  if (typeof Airing.WatchedEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedEndTime);
  });
  return this.sageAPI.invoke("GetWatchedEndTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.WatchedEndTime=json.Result;
  return json.Result;
});
   }

    // GetWatchedStartTime
   GetWatchedStartTime(Airing) {
  if (typeof Airing.WatchedStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.WatchedStartTime);
  });
  return this.sageAPI.invoke("GetWatchedStartTime", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.WatchedStartTime=json.Result;
  return json.Result;
});
   }

    // IsAiringAttributeSet
   IsAiringAttributeSet(Airing, Attribute) {
  return this.sageAPI.invoke("IsAiringAttributeSet", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),Attribute]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAiringHDTV
   IsAiringHDTV(Airing) {
  if (typeof Airing.IsAiringHDTV !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsAiringHDTV);
  });
  return this.sageAPI.invoke("IsAiringHDTV", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsAiringHDTV=json.Result;
  return json.Result;
});
   }

    // IsAiringObject
   IsAiringObject(Airing) {
  return this.sageAPI.invoke("IsAiringObject", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDontLike
   IsDontLike(Airing) {
  if (typeof Airing.IsDontLike !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsDontLike);
  });
  return this.sageAPI.invoke("IsDontLike", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsDontLike=json.Result;
  return json.Result;
});
   }

    // IsFavorite
   IsFavorite(Airing) {
  if (typeof Airing.IsFavorite !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsFavorite);
  });
  return this.sageAPI.invoke("IsFavorite", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsFavorite=json.Result;
  return json.Result;
});
   }

    // IsManualRecord
   IsManualRecord(Airing) {
  if (typeof Airing.IsManualRecord !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsManualRecord);
  });
  return this.sageAPI.invoke("IsManualRecord", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsManualRecord=json.Result;
  return json.Result;
});
   }

    // IsNotManualOrFavorite
   IsNotManualOrFavorite(Airing) {
  if (typeof Airing.IsNotManualOrFavorite !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsNotManualOrFavorite);
  });
  return this.sageAPI.invoke("IsNotManualOrFavorite", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsNotManualOrFavorite=json.Result;
  return json.Result;
});
   }

    // IsWatched
   IsWatched(Airing) {
  if (typeof Airing.IsWatched !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsWatched);
  });
  return this.sageAPI.invoke("IsWatched", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsWatched=json.Result;
  return json.Result;
});
   }

    // IsWatchedCompletely
   IsWatchedCompletely(Airing) {
  if (typeof Airing.IsWatchedCompletely !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsWatchedCompletely);
  });
  return this.sageAPI.invoke("IsWatchedCompletely", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsWatchedCompletely=json.Result;
  return json.Result;
});
   }

    // PrintAiringLong
   PrintAiringLong(Airing) {
  return this.sageAPI.invoke("PrintAiringLong", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintAiringMedium
   PrintAiringMedium(Airing) {
  return this.sageAPI.invoke("PrintAiringMedium", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintAiringShort
   PrintAiringShort(Airing) {
  return this.sageAPI.invoke("PrintAiringShort", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Record
   Record(Airing) {
  return this.sageAPI.invoke("Record", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDontLike
   SetDontLike(Airing) {
  return this.sageAPI.invoke("SetDontLike", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetManualRecordProperty
   SetManualRecordProperty(Airing, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetManualRecordProperty", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingName
   SetRecordingName(Airing, Name) {
  return this.sageAPI.invoke("SetRecordingName", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingQuality
   SetRecordingQuality(Airing, Quality) {
  return this.sageAPI.invoke("SetRecordingQuality", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingTimes
   SetRecordingTimes(Airing, StartTime, StopTime) {
  return this.sageAPI.invoke("SetRecordingTimes", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),StartTime,StopTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWatched
   SetWatched(Airing) {
  return this.sageAPI.invoke("SetWatched", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID)]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWatchedTimes
   SetWatchedTimes(Airing, WatchedEndTime, RealStartTime) {
  return this.sageAPI.invoke("SetWatchedTimes", [(Airing.MediaFileID?'mediafile:'+Airing.MediaFileID:'airing:'+Airing.AiringID),WatchedEndTime,RealStartTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Airing
AiringAPI.AiringAttributeList="AiringAttributeList";
AiringAPI.AiringChannelName="AiringChannelName";
AiringAPI.AiringChannelNumber="AiringChannelNumber";
AiringAPI.AiringDuration="AiringDuration";
AiringAPI.AiringEndTime="AiringEndTime";
AiringAPI.AiringID="AiringID";
AiringAPI.AiringPartNumber="AiringPartNumber";
AiringAPI.AiringPremiereFinaleInfo="AiringPremiereFinaleInfo";
AiringAPI.AiringRatings="AiringRatings";
AiringAPI.AiringStartTime="AiringStartTime";
AiringAPI.AiringTitle="AiringTitle";
AiringAPI.AiringTotalParts="AiringTotalParts";
AiringAPI.Channel="Channel";
AiringAPI.ExtraAiringDetails="ExtraAiringDetails";
AiringAPI.LatestWatchedTime="LatestWatchedTime";
AiringAPI.ParentalLimitsExceeded="ParentalLimitsExceeded";
AiringAPI.ParentalRating="ParentalRating";
AiringAPI.RealWatchedEndTime="RealWatchedEndTime";
AiringAPI.RealWatchedStartTime="RealWatchedStartTime";
AiringAPI.RecordingName="RecordingName";
AiringAPI.RecordingQuality="RecordingQuality";
AiringAPI.ScheduleDuration="ScheduleDuration";
AiringAPI.ScheduleEndTime="ScheduleEndTime";
AiringAPI.ScheduleRecordingRecurrence="ScheduleRecordingRecurrence";
AiringAPI.ScheduleStartTime="ScheduleStartTime";
AiringAPI.Show="Show";
AiringAPI.TrackNumber="TrackNumber";
AiringAPI.WatchedDuration="WatchedDuration";
AiringAPI.WatchedEndTime="WatchedEndTime";
AiringAPI.WatchedStartTime="WatchedStartTime";
AiringAPI.IsAiringHDTV="IsAiringHDTV";
AiringAPI.IsDontLike="IsDontLike";
AiringAPI.IsFavorite="IsFavorite";
AiringAPI.IsManualRecord="IsManualRecord";
AiringAPI.IsNotManualOrFavorite="IsNotManualOrFavorite";
AiringAPI.IsWatched="IsWatched";
AiringAPI.IsWatchedCompletely="IsWatchedCompletely";
    export default AiringAPI;
