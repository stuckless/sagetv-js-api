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
  return this.sageAPI.invoke("CancelRecord", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearDontLike
   ClearDontLike(Airing) {
  return this.sageAPI.invoke("ClearDontLike", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearWatched
   ClearWatched(Airing) {
  return this.sageAPI.invoke("ClearWatched", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringAttributeList
   GetAiringAttributeList(Airing) {
  if (typeof Airing.AttributeList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.AttributeList);
  });
  return this.sageAPI.invoke("GetAiringAttributeList", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AttributeList=json.Result;
  return json.Result;
});
   }

    // GetAiringChannelName
   GetAiringChannelName(Airing) {
  if (typeof Airing.ChannelName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ChannelName);
  });
  return this.sageAPI.invoke("GetAiringChannelName", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ChannelName=json.Result;
  return json.Result;
});
   }

    // GetAiringChannelNumber
   GetAiringChannelNumber(Airing) {
  if (typeof Airing.ChannelNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ChannelNumber);
  });
  return this.sageAPI.invoke("GetAiringChannelNumber", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ChannelNumber=json.Result;
  return json.Result;
});
   }

    // GetAiringDuration
   GetAiringDuration(Airing) {
  if (typeof Airing.Duration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Duration);
  });
  return this.sageAPI.invoke("GetAiringDuration", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.Duration=json.Result;
  return json.Result;
});
   }

    // GetAiringEndTime
   GetAiringEndTime(Airing) {
  if (typeof Airing.EndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.EndTime);
  });
  return this.sageAPI.invoke("GetAiringEndTime", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.EndTime=json.Result;
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
  return this.sageAPI.invoke("GetAiringID", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.AiringID=json.Result;
  return json.Result;
});
   }

    // GetAiringOnAfter
   GetAiringOnAfter(Airing) {
  if (typeof Airing.OnAfter !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.OnAfter);
  });
  return this.sageAPI.invoke("GetAiringOnAfter", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.OnAfter=json.Result;
  return json.Result;
});
   }

    // GetAiringOnBefore
   GetAiringOnBefore(Airing) {
  if (typeof Airing.OnBefore !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.OnBefore);
  });
  return this.sageAPI.invoke("GetAiringOnBefore", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.OnBefore=json.Result;
  return json.Result;
});
   }

    // GetAiringPartNumber
   GetAiringPartNumber(Airing) {
  if (typeof Airing.PartNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PartNumber);
  });
  return this.sageAPI.invoke("GetAiringPartNumber", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.PartNumber=json.Result;
  return json.Result;
});
   }

    // GetAiringPremiereFinaleInfo
   GetAiringPremiereFinaleInfo(Airing) {
  if (typeof Airing.PremiereFinaleInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PremiereFinaleInfo);
  });
  return this.sageAPI.invoke("GetAiringPremiereFinaleInfo", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.PremiereFinaleInfo=json.Result;
  return json.Result;
});
   }

    // GetAiringRatings
   GetAiringRatings(Airing) {
  if (typeof Airing.Ratings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Ratings);
  });
  return this.sageAPI.invoke("GetAiringRatings", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.Ratings=json.Result;
  return json.Result;
});
   }

    // GetAiringStartTime
   GetAiringStartTime(Airing) {
  if (typeof Airing.StartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.StartTime);
  });
  return this.sageAPI.invoke("GetAiringStartTime", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.StartTime=json.Result;
  return json.Result;
});
   }

    // GetAiringTitle
   GetAiringTitle(Airing) {
  if (typeof Airing.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Title);
  });
  return this.sageAPI.invoke("GetAiringTitle", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.Title=json.Result;
  return json.Result;
});
   }

    // GetAiringTotalParts
   GetAiringTotalParts(Airing) {
  if (typeof Airing.TotalParts !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.TotalParts);
  });
  return this.sageAPI.invoke("GetAiringTotalParts", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.TotalParts=json.Result;
  return json.Result;
});
   }

    // GetChannel
   GetChannel(Airing) {
  if (typeof Airing.Channel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.Channel);
  });
  return this.sageAPI.invoke("GetChannel", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetExtraAiringDetails", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetLatestWatchedTime", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.LatestWatchedTime=json.Result;
  return json.Result;
});
   }

    // GetManualRecordProperty
   GetManualRecordProperty(Airing, PropertyName) {
  return this.sageAPI.invoke("GetManualRecordProperty", [Airing.AiringID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileForAiring
   GetMediaFileForAiring(Airing) {
  if (typeof Airing.MediaFileForAiring !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.MediaFileForAiring);
  });
  return this.sageAPI.invoke("GetMediaFileForAiring", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.MediaFileForAiring=json.Result;
  return json.Result;
});
   }

    // GetParentalLimitsExceeded
   GetParentalLimitsExceeded(Airing) {
  if (typeof Airing.ParentalLimitsExceeded !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.ParentalLimitsExceeded);
  });
  return this.sageAPI.invoke("GetParentalLimitsExceeded", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetParentalRating", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.ParentalRating=json.Result;
  return json.Result;
});
   }

    // GetPlayableAiring
   GetPlayableAiring(Airing) {
  if (typeof Airing.PlayableAiring !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.PlayableAiring);
  });
  return this.sageAPI.invoke("GetPlayableAiring", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.PlayableAiring=json.Result;
  return json.Result;
});
   }

    // GetRealWatchedEndTime
   GetRealWatchedEndTime(Airing) {
  if (typeof Airing.RealWatchedEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.RealWatchedEndTime);
  });
  return this.sageAPI.invoke("GetRealWatchedEndTime", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetRealWatchedStartTime", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetRecordingName", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetRecordingQuality", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetScheduleDuration", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetScheduleEndTime", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetScheduleRecordingRecurrence", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetScheduleStartTime", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetShow", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetTrackNumber", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetWatchedDuration", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetWatchedEndTime", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("GetWatchedStartTime", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.WatchedStartTime=json.Result;
  return json.Result;
});
   }

    // IsAiringAttributeSet
   IsAiringAttributeSet(Airing, Attribute) {
  return this.sageAPI.invoke("IsAiringAttributeSet", [Airing.AiringID,Attribute]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAiringHDTV
   IsAiringHDTV(Airing) {
  if (typeof Airing.IsAiringHDTV !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsAiringHDTV);
  });
  return this.sageAPI.invoke("IsAiringHDTV", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsAiringHDTV=json.Result;
  return json.Result;
});
   }

    // IsAiringObject
   IsAiringObject(Airing) {
  return this.sageAPI.invoke("IsAiringObject", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDontLike
   IsDontLike(Airing) {
  if (typeof Airing.IsDontLike !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Airing.IsDontLike);
  });
  return this.sageAPI.invoke("IsDontLike", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("IsFavorite", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("IsManualRecord", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNotManualOrFavorite", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("IsWatched", [Airing.AiringID]).then((json)=>{
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
  return this.sageAPI.invoke("IsWatchedCompletely", [Airing.AiringID]).then((json)=>{
  if (!json || !json.Result) return null;
  Airing.IsWatchedCompletely=json.Result;
  return json.Result;
});
   }

    // PrintAiringLong
   PrintAiringLong(Airing) {
  return this.sageAPI.invoke("PrintAiringLong", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintAiringMedium
   PrintAiringMedium(Airing) {
  return this.sageAPI.invoke("PrintAiringMedium", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintAiringShort
   PrintAiringShort(Airing) {
  return this.sageAPI.invoke("PrintAiringShort", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Record
   Record(Airing) {
  return this.sageAPI.invoke("Record", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDontLike
   SetDontLike(Airing) {
  return this.sageAPI.invoke("SetDontLike", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetManualRecordProperty
   SetManualRecordProperty(Airing, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetManualRecordProperty", [Airing.AiringID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingName
   SetRecordingName(Airing, Name) {
  return this.sageAPI.invoke("SetRecordingName", [Airing.AiringID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingQuality
   SetRecordingQuality(Airing, Quality) {
  return this.sageAPI.invoke("SetRecordingQuality", [Airing.AiringID,Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRecordingTimes
   SetRecordingTimes(Airing, StartTime, StopTime) {
  return this.sageAPI.invoke("SetRecordingTimes", [Airing.AiringID,StartTime,StopTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWatched
   SetWatched(Airing) {
  return this.sageAPI.invoke("SetWatched", [Airing.AiringID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWatchedTimes
   SetWatchedTimes(Airing, WatchedEndTime, RealStartTime) {
  return this.sageAPI.invoke("SetWatchedTimes", [Airing.AiringID,WatchedEndTime,RealStartTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default AiringAPI;
