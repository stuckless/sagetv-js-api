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
  return this.sageAPI.invoke("GetNumberOfCharactersInSeries", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.NumberOfCharactersInSeries=json.Result;
  return json.Result;
});
   }

    // GetSeriesActor
   GetSeriesActor(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesActor", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorImage
   GetSeriesActorImage(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImage", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Person,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorImageURL
   GetSeriesActorImageURL(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImageURL", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Person,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesActorList
   GetSeriesActorList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesActorList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesActorList);
  });
  return this.sageAPI.invoke("GetSeriesActorList", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesCategory", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesCategory=json.Result;
  return json.Result;
});
   }

    // GetSeriesCharacter
   GetSeriesCharacter(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesCharacter", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesCharacterForActor
   GetSeriesCharacterForActor(SeriesInfo, Actor) {
  return this.sageAPI.invoke("GetSeriesCharacterForActor", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Actor]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesCharacterList
   GetSeriesCharacterList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesCharacterList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesCharacterList);
  });
  return this.sageAPI.invoke("GetSeriesCharacterList", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesDayOfWeek", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesDescription", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesFinaleDate", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesHistory", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesHourAndMinuteTimeslot", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesID", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesImage", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesImage=json.Result;
  return json.Result;
});
   }

    // GetSeriesImage
   GetSeriesImage(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImage", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageAtIndex
   GetSeriesImageAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageAtIndex", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageCount
   GetSeriesImageCount(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImageCount);
  });
  return this.sageAPI.invoke("GetSeriesImageCount", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesImageURL", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesImageURL=json.Result;
  return json.Result;
});
   }

    // GetSeriesImageURL
   GetSeriesImageURL(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURL", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesImageURLAtIndex
   GetSeriesImageURLAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURLAtIndex", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Index,Thumb]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesInfoProperty", ['seriesinfo:'+SeriesInfo.SeriesInfoID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSeriesNetwork
   GetSeriesNetwork(SeriesInfo) {
  if (typeof SeriesInfo.SeriesNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesNetwork);
  });
  return this.sageAPI.invoke("GetSeriesNetwork", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesPremiereDate", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesSubCategory", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSeriesTitle", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.SeriesTitle=json.Result;
  return json.Result;
});
   }

    // HasSeriesActorImage
   HasSeriesActorImage(SeriesInfo, Person) {
  return this.sageAPI.invoke("HasSeriesActorImage", ['seriesinfo:'+SeriesInfo.SeriesInfoID,Person]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasSeriesImage
   HasSeriesImage(SeriesInfo) {
  if (typeof SeriesInfo.HasSeriesImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.HasSeriesImage);
  });
  return this.sageAPI.invoke("HasSeriesImage", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
  if (!json || !json.Result) return null;
  SeriesInfo.HasSeriesImage=json.Result;
  return json.Result;
});
   }

    // IsSeriesInfoObject
   IsSeriesInfoObject(SeriesInfo) {
  return this.sageAPI.invoke("IsSeriesInfoObject", ['seriesinfo:'+SeriesInfo.SeriesInfoID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSeriesInfoProperty
   SetSeriesInfoProperty(SeriesInfo, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetSeriesInfoProperty", ['seriesinfo:'+SeriesInfo.SeriesInfoID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for SeriesInfo
SeriesInfoAPI.NumberOfCharactersInSeries="NumberOfCharactersInSeries";
SeriesInfoAPI.SeriesActorList="SeriesActorList";
SeriesInfoAPI.SeriesCategory="SeriesCategory";
SeriesInfoAPI.SeriesCharacterList="SeriesCharacterList";
SeriesInfoAPI.SeriesDayOfWeek="SeriesDayOfWeek";
SeriesInfoAPI.SeriesDescription="SeriesDescription";
SeriesInfoAPI.SeriesFinaleDate="SeriesFinaleDate";
SeriesInfoAPI.SeriesHistory="SeriesHistory";
SeriesInfoAPI.SeriesHourAndMinuteTimeslot="SeriesHourAndMinuteTimeslot";
SeriesInfoAPI.SeriesID="SeriesID";
SeriesInfoAPI.SeriesImage="SeriesImage";
SeriesInfoAPI.SeriesImageCount="SeriesImageCount";
SeriesInfoAPI.SeriesImageURL="SeriesImageURL";
SeriesInfoAPI.SeriesNetwork="SeriesNetwork";
SeriesInfoAPI.SeriesPremiereDate="SeriesPremiereDate";
SeriesInfoAPI.SeriesSubCategory="SeriesSubCategory";
SeriesInfoAPI.SeriesTitle="SeriesTitle";
SeriesInfoAPI.HasSeriesImage="HasSeriesImage";
    export default SeriesInfoAPI;
