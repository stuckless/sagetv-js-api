class ShowAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddShow
   AddShow(Title, IsFirstRun, Episode, Description, Duration, Category, SubCategory, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate) {
  return this.sageAPI.invoke("AddShow", [Title,IsFirstRun,Episode,Description,Duration,Category,SubCategory,PeopleList,RolesListForPeopleList,Rated,ExpandedRatingsList,Year,ParentalRating,MiscList,ExternalID,Language,OriginalAirDate]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddShow
   AddShow(Title, IsFirstRun, Episode, Description, Duration, Categories, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate, SeasonNumber, EpisodeNumber) {
  return this.sageAPI.invoke("AddShow", [Title,IsFirstRun,Episode,Description,Duration,Categories,PeopleList,RolesListForPeopleList,Rated,ExpandedRatingsList,Year,ParentalRating,MiscList,ExternalID,Language,OriginalAirDate,SeasonNumber,EpisodeNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringsForShow
   GetAiringsForShow(Show, StartingAfterTime) {
  return this.sageAPI.invoke("GetAiringsForShow", ['show:'+Show.ShowID,StartingAfterTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImage
   GetMovieImage(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImage", ['show:'+Show.ShowID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageAtIndex
   GetMovieImageAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageAtIndex", ['show:'+Show.ShowID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageCount
   GetMovieImageCount(Show) {
  if (typeof Show.MovieImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieImageCount);
  });
  return this.sageAPI.invoke("GetMovieImageCount", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.MovieImageCount=json.Result;
  return json.Result;
});
   }

    // GetMovieImageURL
   GetMovieImageURL(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURL", ['show:'+Show.ShowID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageURLAtIndex
   GetMovieImageURLAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURLAtIndex", ['show:'+Show.ShowID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieStarRating
   GetMovieStarRating(Show) {
  if (typeof Show.MovieStarRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieStarRating);
  });
  return this.sageAPI.invoke("GetMovieStarRating", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.MovieStarRating=json.Result;
  return json.Result;
});
   }

    // GetOriginalAiringDate
   GetOriginalAiringDate(Show) {
  if (typeof Show.OriginalAiringDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.OriginalAiringDate);
  });
  return this.sageAPI.invoke("GetOriginalAiringDate", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.OriginalAiringDate=json.Result;
  return json.Result;
});
   }

    // GetPeopleAndCharacterInShowInRole
   GetPeopleAndCharacterInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRole", ['show:'+Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterInShowInRoles
   GetPeopleAndCharacterInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRoles", ['show:'+Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterListInShow
   GetPeopleAndCharacterListInShow(Show) {
  if (typeof Show.PeopleAndCharacterListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleAndCharacterListInShow);
  });
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShow", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleAndCharacterListInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleAndCharacterListInShowInRole
   GetPeopleAndCharacterListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRole", ['show:'+Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterListInShowInRoles
   GetPeopleAndCharacterListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRoles", ['show:'+Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleInShow
   GetPeopleInShow(Show) {
  if (typeof Show.PeopleInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleInShow);
  });
  return this.sageAPI.invoke("GetPeopleInShow", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleInShowInRole
   GetPeopleInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleInShowInRole", ['show:'+Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleInShowInRoles
   GetPeopleInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleInShowInRoles", ['show:'+Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleListInShow
   GetPeopleListInShow(Show) {
  if (typeof Show.PeopleListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleListInShow);
  });
  return this.sageAPI.invoke("GetPeopleListInShow", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleListInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleListInShowInRole
   GetPeopleListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleListInShowInRole", ['show:'+Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleListInShowInRoles
   GetPeopleListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleListInShowInRoles", ['show:'+Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonListInShow
   GetPersonListInShow(Show) {
  if (typeof Show.PersonListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PersonListInShow);
  });
  return this.sageAPI.invoke("GetPersonListInShow", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PersonListInShow=json.Result;
  return json.Result;
});
   }

    // GetPersonListInShowInRole
   GetPersonListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPersonListInShowInRole", ['show:'+Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonListInShowInRoles
   GetPersonListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPersonListInShowInRoles", ['show:'+Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRoleTypes
   GetRoleTypes() {
  return this.sageAPI.invoke("GetRoleTypes", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRolesInShow
   GetRolesInShow(Show) {
  if (typeof Show.RolesInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.RolesInShow);
  });
  return this.sageAPI.invoke("GetRolesInShow", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.RolesInShow=json.Result;
  return json.Result;
});
   }

    // GetSDEPGInProgressSportStatus
   GetSDEPGInProgressSportStatus(ExternalIDs) {
  return this.sageAPI.invoke("GetSDEPGInProgressSportStatus", [ExternalIDs]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowCategoriesList
   GetShowCategoriesList(Show) {
  if (typeof Show.ShowCategoriesList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowCategoriesList);
  });
  return this.sageAPI.invoke("GetShowCategoriesList", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowCategoriesList=json.Result;
  return json.Result;
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show) {
  if (typeof Show.ShowCategoriesString !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowCategoriesString);
  });
  return this.sageAPI.invoke("GetShowCategoriesString", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowCategoriesString=json.Result;
  return json.Result;
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show, Delimiter) {
  return this.sageAPI.invoke("GetShowCategoriesString", ['show:'+Show.ShowID,Delimiter]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowCategory
   GetShowCategory(Show) {
  if (typeof Show.ShowCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowCategory);
  });
  return this.sageAPI.invoke("GetShowCategory", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowCategory=json.Result;
  return json.Result;
});
   }

    // GetShowDescription
   GetShowDescription(Show) {
  if (typeof Show.ShowDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowDescription);
  });
  return this.sageAPI.invoke("GetShowDescription", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowDescription=json.Result;
  return json.Result;
});
   }

    // GetShowDuration
   GetShowDuration(Show) {
  if (typeof Show.ShowDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowDuration);
  });
  return this.sageAPI.invoke("GetShowDuration", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowDuration=json.Result;
  return json.Result;
});
   }

    // GetShowEpisode
   GetShowEpisode(Show) {
  if (typeof Show.ShowEpisode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowEpisode);
  });
  return this.sageAPI.invoke("GetShowEpisode", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowEpisode=json.Result;
  return json.Result;
});
   }

    // GetShowEpisodeNumber
   GetShowEpisodeNumber(Show) {
  if (typeof Show.ShowEpisodeNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowEpisodeNumber);
  });
  return this.sageAPI.invoke("GetShowEpisodeNumber", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowEpisodeNumber=json.Result;
  return json.Result;
});
   }

    // GetShowExpandedRatings
   GetShowExpandedRatings(Show) {
  if (typeof Show.ShowExpandedRatings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowExpandedRatings);
  });
  return this.sageAPI.invoke("GetShowExpandedRatings", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowExpandedRatings=json.Result;
  return json.Result;
});
   }

    // GetShowExternalID
   GetShowExternalID(Show) {
  if (typeof Show.ShowExternalID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowExternalID);
  });
  return this.sageAPI.invoke("GetShowExternalID", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowExternalID=json.Result;
  return json.Result;
});
   }

    // GetShowForExternalID
   GetShowForExternalID(ExternalID) {
  return this.sageAPI.invoke("GetShowForExternalID", [ExternalID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowImage
   GetShowImage(Show, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetShowImage", ['show:'+Show.ShowID,Type,Index,Fallback]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowImageCount
   GetShowImageCount(Show, Type) {
  return this.sageAPI.invoke("GetShowImageCount", ['show:'+Show.ShowID,Type]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowLanguage
   GetShowLanguage(Show) {
  if (typeof Show.ShowLanguage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowLanguage);
  });
  return this.sageAPI.invoke("GetShowLanguage", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowLanguage=json.Result;
  return json.Result;
});
   }

    // GetShowMisc
   GetShowMisc(Show) {
  if (typeof Show.ShowMisc !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowMisc);
  });
  return this.sageAPI.invoke("GetShowMisc", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowMisc=json.Result;
  return json.Result;
});
   }

    // GetShowParentalRating
   GetShowParentalRating(Show) {
  if (typeof Show.ShowParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowParentalRating);
  });
  return this.sageAPI.invoke("GetShowParentalRating", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowParentalRating=json.Result;
  return json.Result;
});
   }

    // GetShowRated
   GetShowRated(Show) {
  if (typeof Show.ShowRated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowRated);
  });
  return this.sageAPI.invoke("GetShowRated", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowRated=json.Result;
  return json.Result;
});
   }

    // GetShowSeasonNumber
   GetShowSeasonNumber(Show) {
  if (typeof Show.ShowSeasonNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowSeasonNumber);
  });
  return this.sageAPI.invoke("GetShowSeasonNumber", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowSeasonNumber=json.Result;
  return json.Result;
});
   }

    // GetShowSeriesInfo
   GetShowSeriesInfo(Show) {
  if (typeof Show.ShowSeriesInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowSeriesInfo);
  });
  return this.sageAPI.invoke("GetShowSeriesInfo", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowSeriesInfo=json.Result;
  return json.Result;
});
   }

    // GetShowSubCategory
   GetShowSubCategory(Show) {
  if (typeof Show.ShowSubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowSubCategory);
  });
  return this.sageAPI.invoke("GetShowSubCategory", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowSubCategory=json.Result;
  return json.Result;
});
   }

    // GetShowTitle
   GetShowTitle(Show) {
  if (typeof Show.ShowTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowTitle);
  });
  return this.sageAPI.invoke("GetShowTitle", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowTitle=json.Result;
  return json.Result;
});
   }

    // GetShowYear
   GetShowYear(Show) {
  if (typeof Show.ShowYear !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowYear);
  });
  return this.sageAPI.invoke("GetShowYear", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ShowYear=json.Result;
  return json.Result;
});
   }

    // HasMovieImage
   HasMovieImage(Show) {
  if (typeof Show.HasMovieImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.HasMovieImage);
  });
  return this.sageAPI.invoke("HasMovieImage", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.HasMovieImage=json.Result;
  return json.Result;
});
   }

    // IsMovie
   IsMovie(Show) {
  if (typeof Show.IsMovie !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.IsMovie);
  });
  return this.sageAPI.invoke("IsMovie", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.IsMovie=json.Result;
  return json.Result;
});
   }

    // IsSDEPGInProgressSport
   IsSDEPGInProgressSport(ExternalIDs) {
  return this.sageAPI.invoke("IsSDEPGInProgressSport", [ExternalIDs]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsShowEPGDataUnique
   IsShowEPGDataUnique(Show) {
  if (typeof Show.IsShowEPGDataUnique !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.IsShowEPGDataUnique);
  });
  return this.sageAPI.invoke("IsShowEPGDataUnique", ['show:'+Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.IsShowEPGDataUnique=json.Result;
  return json.Result;
});
   }

    // IsShowFirstRun
   IsShowFirstRun(Airing) {
  return this.sageAPI.invoke("IsShowFirstRun", [Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsShowObject
   IsShowObject(Show) {
  return this.sageAPI.invoke("IsShowObject", ['show:'+Show.ShowID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsShowReRun
   IsShowReRun(Airing) {
  return this.sageAPI.invoke("IsShowReRun", [Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Show
ShowAPI.MovieImageCount="MovieImageCount";
ShowAPI.MovieStarRating="MovieStarRating";
ShowAPI.OriginalAiringDate="OriginalAiringDate";
ShowAPI.PeopleAndCharacterListInShow="PeopleAndCharacterListInShow";
ShowAPI.PeopleInShow="PeopleInShow";
ShowAPI.PeopleListInShow="PeopleListInShow";
ShowAPI.PersonListInShow="PersonListInShow";
ShowAPI.RolesInShow="RolesInShow";
ShowAPI.ShowCategoriesList="ShowCategoriesList";
ShowAPI.ShowCategoriesString="ShowCategoriesString";
ShowAPI.ShowCategory="ShowCategory";
ShowAPI.ShowDescription="ShowDescription";
ShowAPI.ShowDuration="ShowDuration";
ShowAPI.ShowEpisode="ShowEpisode";
ShowAPI.ShowEpisodeNumber="ShowEpisodeNumber";
ShowAPI.ShowExpandedRatings="ShowExpandedRatings";
ShowAPI.ShowExternalID="ShowExternalID";
ShowAPI.ShowLanguage="ShowLanguage";
ShowAPI.ShowMisc="ShowMisc";
ShowAPI.ShowParentalRating="ShowParentalRating";
ShowAPI.ShowRated="ShowRated";
ShowAPI.ShowSeasonNumber="ShowSeasonNumber";
ShowAPI.ShowSeriesInfo="ShowSeriesInfo";
ShowAPI.ShowSubCategory="ShowSubCategory";
ShowAPI.ShowTitle="ShowTitle";
ShowAPI.ShowYear="ShowYear";
ShowAPI.HasMovieImage="HasMovieImage";
ShowAPI.IsMovie="IsMovie";
ShowAPI.IsShowEPGDataUnique="IsShowEPGDataUnique";
    export default ShowAPI;
