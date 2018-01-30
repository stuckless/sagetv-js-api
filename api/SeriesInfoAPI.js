class SeriesInfoAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddSeriesInfo
   AddSeriesInfo(SeriesID, Title, Network, Description, History, PremiereDate, FinaleDate, AirDOW, AirHrMin, ImageURL, People, Characters) {
  return this.sageAPI.invoke("AddSeriesInfo", {
'SeriesID':SeriesID
,
'Title':Title
,
'Network':Network
,
'Description':Description
,
'History':History
,
'PremiereDate':PremiereDate
,
'FinaleDate':FinaleDate
,
'AirDOW':AirDOW
,
'AirHrMin':AirHrMin
,
'ImageURL':ImageURL
,
'People':People
,
'Characters':Characters
});
   }

    // GetAllSeriesInfo
   GetAllSeriesInfo() {
  return this.sageAPI.invoke("GetAllSeriesInfo", {
});
   }

    // GetNumberOfCharactersInSeries
   GetNumberOfCharactersInSeries(SeriesInfo) {
  if (typeof SeriesInfo.NumberOfCharactersInSeries !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.NumberOfCharactersInSeries);
  });
  return this.sageAPI.invoke("GetNumberOfCharactersInSeries", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesActor
   GetSeriesActor(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesActor", {
'SeriesInfo':SeriesInfo.ID
,
'Index':Index
});
   }

    // GetSeriesActorImage
   GetSeriesActorImage(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImage", {
'SeriesInfo':SeriesInfo.ID
,
'Person':Person
,
'Thumb':Thumb
});
   }

    // GetSeriesActorImageURL
   GetSeriesActorImageURL(SeriesInfo, Person, Thumb) {
  return this.sageAPI.invoke("GetSeriesActorImageURL", {
'SeriesInfo':SeriesInfo.ID
,
'Person':Person
,
'Thumb':Thumb
});
   }

    // GetSeriesActorList
   GetSeriesActorList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesActorList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesActorList);
  });
  return this.sageAPI.invoke("GetSeriesActorList", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesCategory
   GetSeriesCategory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesCategory);
  });
  return this.sageAPI.invoke("GetSeriesCategory", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesCharacter
   GetSeriesCharacter(SeriesInfo, Index) {
  return this.sageAPI.invoke("GetSeriesCharacter", {
'SeriesInfo':SeriesInfo.ID
,
'Index':Index
});
   }

    // GetSeriesCharacterForActor
   GetSeriesCharacterForActor(SeriesInfo, Actor) {
  return this.sageAPI.invoke("GetSeriesCharacterForActor", {
'SeriesInfo':SeriesInfo.ID
,
'Actor':Actor
});
   }

    // GetSeriesCharacterList
   GetSeriesCharacterList(SeriesInfo) {
  if (typeof SeriesInfo.SeriesCharacterList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesCharacterList);
  });
  return this.sageAPI.invoke("GetSeriesCharacterList", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesDayOfWeek
   GetSeriesDayOfWeek(SeriesInfo) {
  if (typeof SeriesInfo.SeriesDayOfWeek !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesDayOfWeek);
  });
  return this.sageAPI.invoke("GetSeriesDayOfWeek", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesDescription
   GetSeriesDescription(SeriesInfo) {
  if (typeof SeriesInfo.SeriesDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesDescription);
  });
  return this.sageAPI.invoke("GetSeriesDescription", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesFinaleDate
   GetSeriesFinaleDate(SeriesInfo) {
  if (typeof SeriesInfo.SeriesFinaleDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesFinaleDate);
  });
  return this.sageAPI.invoke("GetSeriesFinaleDate", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesHistory
   GetSeriesHistory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesHistory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesHistory);
  });
  return this.sageAPI.invoke("GetSeriesHistory", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesHourAndMinuteTimeslot
   GetSeriesHourAndMinuteTimeslot(SeriesInfo) {
  if (typeof SeriesInfo.SeriesHourAndMinuteTimeslot !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesHourAndMinuteTimeslot);
  });
  return this.sageAPI.invoke("GetSeriesHourAndMinuteTimeslot", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesID
   GetSeriesID(SeriesInfo) {
  if (typeof SeriesInfo.SeriesID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesID);
  });
  return this.sageAPI.invoke("GetSeriesID", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesImage
   GetSeriesImage(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImage);
  });
  return this.sageAPI.invoke("GetSeriesImage", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesImage
   GetSeriesImage(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImage", {
'SeriesInfo':SeriesInfo.ID
,
'Thumb':Thumb
});
   }

    // GetSeriesImageAtIndex
   GetSeriesImageAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageAtIndex", {
'SeriesInfo':SeriesInfo.ID
,
'Index':Index
,
'Thumb':Thumb
});
   }

    // GetSeriesImageCount
   GetSeriesImageCount(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImageCount);
  });
  return this.sageAPI.invoke("GetSeriesImageCount", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesImageURL
   GetSeriesImageURL(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImageURL !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImageURL);
  });
  return this.sageAPI.invoke("GetSeriesImageURL", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesImageURL
   GetSeriesImageURL(SeriesInfo, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURL", {
'SeriesInfo':SeriesInfo.ID
,
'Thumb':Thumb
});
   }

    // GetSeriesImageURLAtIndex
   GetSeriesImageURLAtIndex(SeriesInfo, Index, Thumb) {
  return this.sageAPI.invoke("GetSeriesImageURLAtIndex", {
'SeriesInfo':SeriesInfo.ID
,
'Index':Index
,
'Thumb':Thumb
});
   }

    // GetSeriesInfoForID
   GetSeriesInfoForID(SeriesID) {
  return this.sageAPI.invoke("GetSeriesInfoForID", {
'SeriesID':SeriesID
});
   }

    // GetSeriesInfoProperty
   GetSeriesInfoProperty(SeriesInfo, PropertyName) {
  return this.sageAPI.invoke("GetSeriesInfoProperty", {
'SeriesInfo':SeriesInfo.ID
,
'PropertyName':PropertyName
});
   }

    // GetSeriesNetwork
   GetSeriesNetwork(SeriesInfo) {
  if (typeof SeriesInfo.SeriesNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesNetwork);
  });
  return this.sageAPI.invoke("GetSeriesNetwork", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesPremiereDate
   GetSeriesPremiereDate(SeriesInfo) {
  if (typeof SeriesInfo.SeriesPremiereDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesPremiereDate);
  });
  return this.sageAPI.invoke("GetSeriesPremiereDate", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesSubCategory
   GetSeriesSubCategory(SeriesInfo) {
  if (typeof SeriesInfo.SeriesSubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesSubCategory);
  });
  return this.sageAPI.invoke("GetSeriesSubCategory", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // GetSeriesTitle
   GetSeriesTitle(SeriesInfo) {
  if (typeof SeriesInfo.SeriesTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesTitle);
  });
  return this.sageAPI.invoke("GetSeriesTitle", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // HasSeriesActorImage
   HasSeriesActorImage(SeriesInfo, Person) {
  return this.sageAPI.invoke("HasSeriesActorImage", {
'SeriesInfo':SeriesInfo.ID
,
'Person':Person
});
   }

    // HasSeriesImage
   HasSeriesImage(SeriesInfo) {
  if (typeof SeriesInfo.SeriesImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(SeriesInfo.SeriesImage);
  });
  return this.sageAPI.invoke("HasSeriesImage", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // IsSeriesInfoObject
   IsSeriesInfoObject(SeriesInfo) {
  return this.sageAPI.invoke("IsSeriesInfoObject", {
'SeriesInfo':SeriesInfo.ID
});
   }

    // SetSeriesInfoProperty
   SetSeriesInfoProperty(SeriesInfo, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetSeriesInfoProperty", {
'SeriesInfo':SeriesInfo.ID
,
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }
}

    export default SeriesInfoAPI;
