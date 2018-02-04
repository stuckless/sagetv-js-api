class SeriesInfoAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddSeriesInfo
   AddSeriesInfo(SeriesID, Title, Network, Description, History, PremiereDate, FinaleDate, AirDOW, AirHrMin, ImageURL, People, Characters) {
  return this.sageAPI.invoke("AddSeriesInfo", [SeriesID,Title,Network,Description,History,PremiereDate,FinaleDate,AirDOW,AirHrMin,ImageURL,People,Characters]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllSeriesInfo
   GetAllSeriesInfo() {
  return this.sageAPI.invoke("GetAllSeriesInfo", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNumberOfCharactersInSeries
   GetNumberOfCharactersInSeries(SeriesInfo) {
  if (typeof SeriesInfo.NumberOfCharactersInSeries !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.NumberOfCharactersInSeries);
  });
  return this.sageAPI.invoke("GetNumberOfCharactersInSeries", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.NumberOfCharactersInSeries=json.Result;
  return json.Result;
});
   }

    // GetSeriesActor
   GetSeriesActor(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesActor", [SeriesInfo.SeriesInfoID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorImage
   GetSeriesActorImage(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImage", [SeriesInfo.SeriesInfoID,Person,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorImageURL
   GetSeriesActorImageURL(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImageURL", [SeriesInfo.SeriesInfoID,Person,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorList
   GetSeriesActorList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesActorList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesActorList);
  });
  return this.sageAPI.invoke("GetSeriesActorList", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesActorList=json.Result;
  return json.Result;
});
   }

    // GetSeriesCategory
   GetSeriesCategory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesCategory);
  });
  return this.sageAPI.invoke("GetSeriesCategory", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesCategory=json.Result;
  return json.Result;
});
   }

    // GetSeriesCharacter
   GetSeriesCharacter(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesCharacter", [SeriesInfo.SeriesInfoID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesCharacterForActor
   GetSeriesCharacterForActor(SeriesInfo, Actor) {
  return this.sageAPI.invoke("GetSeriesCharacterForActor", [SeriesInfo.SeriesInfoID,Actor]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesCharacterList
   GetSeriesCharacterList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesCharacterList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesCharacterList);
  });
  return this.sageAPI.invoke("GetSeriesCharacterList", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesCharacterList=json.Result;
  return json.Result;
});
   }

    // GetSeriesDayOfWeek
   GetSeriesDayOfWeek(SeriesInfo) {
  if (typeof SeriesInfo.SeriesDayOfWeek !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesDayOfWeek);
  });
  return this.sageAPI.invoke("GetSeriesDayOfWeek", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesDayOfWeek=json.Result;
  return json.Result;
});
   }

    // GetSeriesDescription
   GetSeriesDescription(SeriesInfo) {
  if (typeof SeriesInfo.SeriesDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesDescription);
  });
  return this.sageAPI.invoke("GetSeriesDescription", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesDescription=json.Result;
  return json.Result;
});
   }

    // GetSeriesFinaleDate
   GetSeriesFinaleDate(SeriesInfo) {
  if (typeof SeriesInfo.SeriesFinaleDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesFinaleDate);
  });
  return this.sageAPI.invoke("GetSeriesFinaleDate", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesFinaleDate=json.Result;
  return json.Result;
});
   }

    // GetSeriesHistory
   GetSeriesHistory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesHistory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesHistory);
  });
  return this.sageAPI.invoke("GetSeriesHistory", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesHistory=json.Result;
  return json.Result;
});
   }

    // GetSeriesHourAndMinuteTimeslot
   GetSeriesHourAndMinuteTimeslot(SeriesInfo) {
  if (typeof SeriesInfo.SeriesHourAndMinuteTimeslot !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesHourAndMinuteTimeslot);
  });
  return this.sageAPI.invoke("GetSeriesHourAndMinuteTimeslot", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesHourAndMinuteTimeslot=json.Result;
  return json.Result;
});
   }

    // GetSeriesID
   GetSeriesID(SeriesInfo) {
  if (typeof SeriesInfo.SeriesID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesID);
  });
  return this.sageAPI.invoke("GetSeriesID", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesID=json.Result;
  return json.Result;
});
   }

    // GetSeriesImage
   GetSeriesImage(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImage);
  });
  return this.sageAPI.invoke("GetSeriesImage", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesImage=json.Result;
  return json.Result;
});
   }

    // GetSeriesImage
   GetSeriesImage(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImage", [SeriesInfo.SeriesInfoID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageAtIndex
   GetSeriesImageAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageAtIndex", [SeriesInfo.SeriesInfoID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageCount
   GetSeriesImageCount(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImageCount);
  });
  return this.sageAPI.invoke("GetSeriesImageCount", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesImageCount=json.Result;
  return json.Result;
});
   }

    // GetSeriesImageURL
   GetSeriesImageURL(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImageURL !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImageURL);
  });
  return this.sageAPI.invoke("GetSeriesImageURL", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesImageURL=json.Result;
  return json.Result;
});
   }

    // GetSeriesImageURL
   GetSeriesImageURL(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURL", [SeriesInfo.SeriesInfoID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageURLAtIndex
   GetSeriesImageURLAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURLAtIndex", [SeriesInfo.SeriesInfoID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesInfoForID
   GetSeriesInfoForID(SeriesID) {
  return this.sageAPI.invoke("GetSeriesInfoForID", [SeriesID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesInfoProperty
   GetSeriesInfoProperty(SeriesInfo, PropertyName) {
  return this.sageAPI.invoke("GetSeriesInfoProperty", [SeriesInfo.SeriesInfoID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesNetwork
   GetSeriesNetwork(SeriesInfo) {
  if (typeof SeriesInfo.SeriesNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesNetwork);
  });
  return this.sageAPI.invoke("GetSeriesNetwork", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesNetwork=json.Result;
  return json.Result;
});
   }

    // GetSeriesPremiereDate
   GetSeriesPremiereDate(SeriesInfo) {
  if (typeof SeriesInfo.SeriesPremiereDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesPremiereDate);
  });
  return this.sageAPI.invoke("GetSeriesPremiereDate", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesPremiereDate=json.Result;
  return json.Result;
});
   }

    // GetSeriesSubCategory
   GetSeriesSubCategory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesSubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesSubCategory);
  });
  return this.sageAPI.invoke("GetSeriesSubCategory", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesSubCategory=json.Result;
  return json.Result;
});
   }

    // GetSeriesTitle
   GetSeriesTitle(SeriesInfo) {
  if (typeof SeriesInfo.SeriesTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesTitle);
  });
  return this.sageAPI.invoke("GetSeriesTitle", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesTitle=json.Result;
  return json.Result;
});
   }

    // HasSeriesActorImage
   HasSeriesActorImage(SeriesInfo, Person) {
  return this.sageAPI.invoke("HasSeriesActorImage", [SeriesInfo.SeriesInfoID,Person]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasSeriesImage
   HasSeriesImage(SeriesInfo) {
  if (typeof SeriesInfo.HasSeriesImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.HasSeriesImage);
  });
  return this.sageAPI.invoke("HasSeriesImage", [SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.HasSeriesImage=json.Result;
  return json.Result;
});
   }

    // IsSeriesInfoObject
   IsSeriesInfoObject(SeriesInfo) {
  return this.sageAPI.invoke("IsSeriesInfoObject", [SeriesInfo.SeriesInfoID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSeriesInfoProperty
   SetSeriesInfoProperty(SeriesInfo, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetSeriesInfoProperty", [SeriesInfo.SeriesInfoID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default SeriesInfoAPI;
