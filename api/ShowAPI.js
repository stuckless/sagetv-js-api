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
  return this.sageAPI.invoke("GetAiringsForShow", [Show.ShowID,StartingAfterTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImage
   GetMovieImage(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImage", [Show.ShowID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageAtIndex
   GetMovieImageAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageAtIndex", [Show.ShowID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageCount
   GetMovieImageCount(Show) {
  if (typeof Show.MovieImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieImageCount);
  });
  return this.sageAPI.invoke("GetMovieImageCount", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.MovieImageCount=json.Result;
  return json.Result;
});
   }

    // GetMovieImageURL
   GetMovieImageURL(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURL", [Show.ShowID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieImageURLAtIndex
   GetMovieImageURLAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURLAtIndex", [Show.ShowID,Index,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMovieStarRating
   GetMovieStarRating(Show) {
  if (typeof Show.MovieStarRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieStarRating);
  });
  return this.sageAPI.invoke("GetMovieStarRating", [Show.ShowID]).then((json)=>{
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
  return this.sageAPI.invoke("GetOriginalAiringDate", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.OriginalAiringDate=json.Result;
  return json.Result;
});
   }

    // GetPeopleAndCharacterInShowInRole
   GetPeopleAndCharacterInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRole", [Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterInShowInRoles
   GetPeopleAndCharacterInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRoles", [Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterListInShow
   GetPeopleAndCharacterListInShow(Show) {
  if (typeof Show.PeopleAndCharacterListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleAndCharacterListInShow);
  });
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShow", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleAndCharacterListInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleAndCharacterListInShowInRole
   GetPeopleAndCharacterListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRole", [Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleAndCharacterListInShowInRoles
   GetPeopleAndCharacterListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRoles", [Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleInShow
   GetPeopleInShow(Show) {
  if (typeof Show.PeopleInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleInShow);
  });
  return this.sageAPI.invoke("GetPeopleInShow", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleInShowInRole
   GetPeopleInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleInShowInRole", [Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleInShowInRoles
   GetPeopleInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleInShowInRoles", [Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleListInShow
   GetPeopleListInShow(Show) {
  if (typeof Show.PeopleListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleListInShow);
  });
  return this.sageAPI.invoke("GetPeopleListInShow", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PeopleListInShow=json.Result;
  return json.Result;
});
   }

    // GetPeopleListInShowInRole
   GetPeopleListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleListInShowInRole", [Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPeopleListInShowInRoles
   GetPeopleListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleListInShowInRoles", [Show.ShowID,RoleList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonListInShow
   GetPersonListInShow(Show) {
  if (typeof Show.PersonListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PersonListInShow);
  });
  return this.sageAPI.invoke("GetPersonListInShow", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.PersonListInShow=json.Result;
  return json.Result;
});
   }

    // GetPersonListInShowInRole
   GetPersonListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPersonListInShowInRole", [Show.ShowID,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonListInShowInRoles
   GetPersonListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPersonListInShowInRoles", [Show.ShowID,RoleList]).then((json)=>{
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
  return this.sageAPI.invoke("GetRolesInShow", [Show.ShowID]).then((json)=>{
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
  if (typeof Show.CategoriesList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.CategoriesList);
  });
  return this.sageAPI.invoke("GetShowCategoriesList", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.CategoriesList=json.Result;
  return json.Result;
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show) {
  if (typeof Show.CategoriesString !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.CategoriesString);
  });
  return this.sageAPI.invoke("GetShowCategoriesString", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.CategoriesString=json.Result;
  return json.Result;
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show, Delimiter) {
  return this.sageAPI.invoke("GetShowCategoriesString", [Show.ShowID,Delimiter]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowCategory
   GetShowCategory(Show) {
  if (typeof Show.Category !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Category);
  });
  return this.sageAPI.invoke("GetShowCategory", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Category=json.Result;
  return json.Result;
});
   }

    // GetShowDescription
   GetShowDescription(Show) {
  if (typeof Show.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Description);
  });
  return this.sageAPI.invoke("GetShowDescription", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Description=json.Result;
  return json.Result;
});
   }

    // GetShowDuration
   GetShowDuration(Show) {
  if (typeof Show.Duration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Duration);
  });
  return this.sageAPI.invoke("GetShowDuration", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Duration=json.Result;
  return json.Result;
});
   }

    // GetShowEpisode
   GetShowEpisode(Show) {
  if (typeof Show.Episode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Episode);
  });
  return this.sageAPI.invoke("GetShowEpisode", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Episode=json.Result;
  return json.Result;
});
   }

    // GetShowEpisodeNumber
   GetShowEpisodeNumber(Show) {
  if (typeof Show.EpisodeNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.EpisodeNumber);
  });
  return this.sageAPI.invoke("GetShowEpisodeNumber", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.EpisodeNumber=json.Result;
  return json.Result;
});
   }

    // GetShowExpandedRatings
   GetShowExpandedRatings(Show) {
  if (typeof Show.ExpandedRatings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ExpandedRatings);
  });
  return this.sageAPI.invoke("GetShowExpandedRatings", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ExpandedRatings=json.Result;
  return json.Result;
});
   }

    // GetShowExternalID
   GetShowExternalID(Show) {
  if (typeof Show.ShowExternalID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ShowExternalID);
  });
  return this.sageAPI.invoke("GetShowExternalID", [Show.ShowID]).then((json)=>{
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
  return this.sageAPI.invoke("GetShowImage", [Show.ShowID,Type,Index,Fallback]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowImageCount
   GetShowImageCount(Show, Type) {
  return this.sageAPI.invoke("GetShowImageCount", [Show.ShowID,Type]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetShowLanguage
   GetShowLanguage(Show) {
  if (typeof Show.Language !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Language);
  });
  return this.sageAPI.invoke("GetShowLanguage", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Language=json.Result;
  return json.Result;
});
   }

    // GetShowMisc
   GetShowMisc(Show) {
  if (typeof Show.Misc !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Misc);
  });
  return this.sageAPI.invoke("GetShowMisc", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Misc=json.Result;
  return json.Result;
});
   }

    // GetShowParentalRating
   GetShowParentalRating(Show) {
  if (typeof Show.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ParentalRating);
  });
  return this.sageAPI.invoke("GetShowParentalRating", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.ParentalRating=json.Result;
  return json.Result;
});
   }

    // GetShowRated
   GetShowRated(Show) {
  if (typeof Show.Rated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Rated);
  });
  return this.sageAPI.invoke("GetShowRated", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Rated=json.Result;
  return json.Result;
});
   }

    // GetShowSeasonNumber
   GetShowSeasonNumber(Show) {
  if (typeof Show.SeasonNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SeasonNumber);
  });
  return this.sageAPI.invoke("GetShowSeasonNumber", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.SeasonNumber=json.Result;
  return json.Result;
});
   }

    // GetShowSeriesInfo
   GetShowSeriesInfo(Show) {
  if (typeof Show.SeriesInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SeriesInfo);
  });
  return this.sageAPI.invoke("GetShowSeriesInfo", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.SeriesInfo=json.Result;
  return json.Result;
});
   }

    // GetShowSubCategory
   GetShowSubCategory(Show) {
  if (typeof Show.SubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SubCategory);
  });
  return this.sageAPI.invoke("GetShowSubCategory", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.SubCategory=json.Result;
  return json.Result;
});
   }

    // GetShowTitle
   GetShowTitle(Show) {
  if (typeof Show.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Title);
  });
  return this.sageAPI.invoke("GetShowTitle", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Title=json.Result;
  return json.Result;
});
   }

    // GetShowYear
   GetShowYear(Show) {
  if (typeof Show.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Year);
  });
  return this.sageAPI.invoke("GetShowYear", [Show.ShowID]).then((json)=>{
  if (!json || !json.Result) return null;
  Show.Year=json.Result;
  return json.Result;
});
   }

    // HasMovieImage
   HasMovieImage(Show) {
  if (typeof Show.HasMovieImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.HasMovieImage);
  });
  return this.sageAPI.invoke("HasMovieImage", [Show.ShowID]).then((json)=>{
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
  return this.sageAPI.invoke("IsMovie", [Show.ShowID]).then((json)=>{
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
  return this.sageAPI.invoke("IsShowEPGDataUnique", [Show.ShowID]).then((json)=>{
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
  return this.sageAPI.invoke("IsShowObject", [Show.ShowID]).then((json)=>{
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

    export default ShowAPI;
