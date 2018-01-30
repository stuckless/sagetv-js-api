class ShowAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddShow
   AddShow(Title, IsFirstRun, Episode, Description, Duration, Category, SubCategory, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate) {
  return this.sageAPI.invoke("AddShow", {
'Title':Title
,
'IsFirstRun':IsFirstRun
,
'Episode':Episode
,
'Description':Description
,
'Duration':Duration
,
'Category':Category
,
'SubCategory':SubCategory
,
'PeopleList':PeopleList
,
'RolesListForPeopleList':RolesListForPeopleList
,
'Rated':Rated
,
'ExpandedRatingsList':ExpandedRatingsList
,
'Year':Year
,
'ParentalRating':ParentalRating
,
'MiscList':MiscList
,
'ExternalID':ExternalID
,
'Language':Language
,
'OriginalAirDate':OriginalAirDate
});
   }

    // AddShow
   AddShow(Title, IsFirstRun, Episode, Description, Duration, Categories, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate, SeasonNumber, EpisodeNumber) {
  return this.sageAPI.invoke("AddShow", {
'Title':Title
,
'IsFirstRun':IsFirstRun
,
'Episode':Episode
,
'Description':Description
,
'Duration':Duration
,
'Categories':Categories
,
'PeopleList':PeopleList
,
'RolesListForPeopleList':RolesListForPeopleList
,
'Rated':Rated
,
'ExpandedRatingsList':ExpandedRatingsList
,
'Year':Year
,
'ParentalRating':ParentalRating
,
'MiscList':MiscList
,
'ExternalID':ExternalID
,
'Language':Language
,
'OriginalAirDate':OriginalAirDate
,
'SeasonNumber':SeasonNumber
,
'EpisodeNumber':EpisodeNumber
});
   }

    // GetAiringsForShow
   GetAiringsForShow(Show, StartingAfterTime) {
  return this.sageAPI.invoke("GetAiringsForShow", {
'Show':Show.ID
,
'StartingAfterTime':StartingAfterTime
});
   }

    // GetMovieImage
   GetMovieImage(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImage", {
'Show':Show.ID
,
'Thumb':Thumb
});
   }

    // GetMovieImageAtIndex
   GetMovieImageAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageAtIndex", {
'Show':Show.ID
,
'Index':Index
,
'Thumb':Thumb
});
   }

    // GetMovieImageCount
   GetMovieImageCount(Show) {
  if (typeof Show.MovieImageCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieImageCount);
  });
  return this.sageAPI.invoke("GetMovieImageCount", {
'Show':Show.ID
});
   }

    // GetMovieImageURL
   GetMovieImageURL(Show, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURL", {
'Show':Show.ID
,
'Thumb':Thumb
});
   }

    // GetMovieImageURLAtIndex
   GetMovieImageURLAtIndex(Show, Index, Thumb) {
  return this.sageAPI.invoke("GetMovieImageURLAtIndex", {
'Show':Show.ID
,
'Index':Index
,
'Thumb':Thumb
});
   }

    // GetMovieStarRating
   GetMovieStarRating(Show) {
  if (typeof Show.MovieStarRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieStarRating);
  });
  return this.sageAPI.invoke("GetMovieStarRating", {
'Show':Show.ID
});
   }

    // GetOriginalAiringDate
   GetOriginalAiringDate(Show) {
  if (typeof Show.OriginalAiringDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.OriginalAiringDate);
  });
  return this.sageAPI.invoke("GetOriginalAiringDate", {
'Show':Show.ID
});
   }

    // GetPeopleAndCharacterInShowInRole
   GetPeopleAndCharacterInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRole", {
'Show':Show.ID
,
'Role':Role
});
   }

    // GetPeopleAndCharacterInShowInRoles
   GetPeopleAndCharacterInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRoles", {
'Show':Show.ID
,
'RoleList':RoleList
});
   }

    // GetPeopleAndCharacterListInShow
   GetPeopleAndCharacterListInShow(Show) {
  if (typeof Show.PeopleAndCharacterListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleAndCharacterListInShow);
  });
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShow", {
'Show':Show.ID
});
   }

    // GetPeopleAndCharacterListInShowInRole
   GetPeopleAndCharacterListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRole", {
'Show':Show.ID
,
'Role':Role
});
   }

    // GetPeopleAndCharacterListInShowInRoles
   GetPeopleAndCharacterListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRoles", {
'Show':Show.ID
,
'RoleList':RoleList
});
   }

    // GetPeopleInShow
   GetPeopleInShow(Show) {
  if (typeof Show.PeopleInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleInShow);
  });
  return this.sageAPI.invoke("GetPeopleInShow", {
'Show':Show.ID
});
   }

    // GetPeopleInShowInRole
   GetPeopleInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleInShowInRole", {
'Show':Show.ID
,
'Role':Role
});
   }

    // GetPeopleInShowInRoles
   GetPeopleInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleInShowInRoles", {
'Show':Show.ID
,
'RoleList':RoleList
});
   }

    // GetPeopleListInShow
   GetPeopleListInShow(Show) {
  if (typeof Show.PeopleListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PeopleListInShow);
  });
  return this.sageAPI.invoke("GetPeopleListInShow", {
'Show':Show.ID
});
   }

    // GetPeopleListInShowInRole
   GetPeopleListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPeopleListInShowInRole", {
'Show':Show.ID
,
'Role':Role
});
   }

    // GetPeopleListInShowInRoles
   GetPeopleListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPeopleListInShowInRoles", {
'Show':Show.ID
,
'RoleList':RoleList
});
   }

    // GetPersonListInShow
   GetPersonListInShow(Show) {
  if (typeof Show.PersonListInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.PersonListInShow);
  });
  return this.sageAPI.invoke("GetPersonListInShow", {
'Show':Show.ID
});
   }

    // GetPersonListInShowInRole
   GetPersonListInShowInRole(Show, Role) {
  return this.sageAPI.invoke("GetPersonListInShowInRole", {
'Show':Show.ID
,
'Role':Role
});
   }

    // GetPersonListInShowInRoles
   GetPersonListInShowInRoles(Show, RoleList) {
  return this.sageAPI.invoke("GetPersonListInShowInRoles", {
'Show':Show.ID
,
'RoleList':RoleList
});
   }

    // GetRoleTypes
   GetRoleTypes() {
  return this.sageAPI.invoke("GetRoleTypes", {
});
   }

    // GetRolesInShow
   GetRolesInShow(Show) {
  if (typeof Show.RolesInShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.RolesInShow);
  });
  return this.sageAPI.invoke("GetRolesInShow", {
'Show':Show.ID
});
   }

    // GetSDEPGInProgressSportStatus
   GetSDEPGInProgressSportStatus(ExternalIDs) {
  return this.sageAPI.invoke("GetSDEPGInProgressSportStatus", {
'ExternalIDs':ExternalIDs
});
   }

    // GetShowCategoriesList
   GetShowCategoriesList(Show) {
  if (typeof Show.CategoriesList !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.CategoriesList);
  });
  return this.sageAPI.invoke("GetShowCategoriesList", {
'Show':Show.ID
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show) {
  if (typeof Show.CategoriesString !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.CategoriesString);
  });
  return this.sageAPI.invoke("GetShowCategoriesString", {
'Show':Show.ID
});
   }

    // GetShowCategoriesString
   GetShowCategoriesString(Show, Delimiter) {
  return this.sageAPI.invoke("GetShowCategoriesString", {
'Show':Show.ID
,
'Delimiter':Delimiter
});
   }

    // GetShowCategory
   GetShowCategory(Show) {
  if (typeof Show.Category !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Category);
  });
  return this.sageAPI.invoke("GetShowCategory", {
'Show':Show.ID
});
   }

    // GetShowDescription
   GetShowDescription(Show) {
  if (typeof Show.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Description);
  });
  return this.sageAPI.invoke("GetShowDescription", {
'Show':Show.ID
});
   }

    // GetShowDuration
   GetShowDuration(Show) {
  if (typeof Show.Duration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Duration);
  });
  return this.sageAPI.invoke("GetShowDuration", {
'Show':Show.ID
});
   }

    // GetShowEpisode
   GetShowEpisode(Show) {
  if (typeof Show.Episode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Episode);
  });
  return this.sageAPI.invoke("GetShowEpisode", {
'Show':Show.ID
});
   }

    // GetShowEpisodeNumber
   GetShowEpisodeNumber(Show) {
  if (typeof Show.EpisodeNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.EpisodeNumber);
  });
  return this.sageAPI.invoke("GetShowEpisodeNumber", {
'Show':Show.ID
});
   }

    // GetShowExpandedRatings
   GetShowExpandedRatings(Show) {
  if (typeof Show.ExpandedRatings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ExpandedRatings);
  });
  return this.sageAPI.invoke("GetShowExpandedRatings", {
'Show':Show.ID
});
   }

    // GetShowExternalID
   GetShowExternalID(Show) {
  if (typeof Show.ExternalID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ExternalID);
  });
  return this.sageAPI.invoke("GetShowExternalID", {
'Show':Show.ID
});
   }

    // GetShowForExternalID
   GetShowForExternalID(ExternalID) {
  return this.sageAPI.invoke("GetShowForExternalID", {
'ExternalID':ExternalID
});
   }

    // GetShowImage
   GetShowImage(Show, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetShowImage", {
'Show':Show.ID
,
'Type':Type
,
'Index':Index
,
'Fallback':Fallback
});
   }

    // GetShowImageCount
   GetShowImageCount(Show, Type) {
  return this.sageAPI.invoke("GetShowImageCount", {
'Show':Show.ID
,
'Type':Type
});
   }

    // GetShowLanguage
   GetShowLanguage(Show) {
  if (typeof Show.Language !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Language);
  });
  return this.sageAPI.invoke("GetShowLanguage", {
'Show':Show.ID
});
   }

    // GetShowMisc
   GetShowMisc(Show) {
  if (typeof Show.Misc !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Misc);
  });
  return this.sageAPI.invoke("GetShowMisc", {
'Show':Show.ID
});
   }

    // GetShowParentalRating
   GetShowParentalRating(Show) {
  if (typeof Show.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.ParentalRating);
  });
  return this.sageAPI.invoke("GetShowParentalRating", {
'Show':Show.ID
});
   }

    // GetShowRated
   GetShowRated(Show) {
  if (typeof Show.Rated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Rated);
  });
  return this.sageAPI.invoke("GetShowRated", {
'Show':Show.ID
});
   }

    // GetShowSeasonNumber
   GetShowSeasonNumber(Show) {
  if (typeof Show.SeasonNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SeasonNumber);
  });
  return this.sageAPI.invoke("GetShowSeasonNumber", {
'Show':Show.ID
});
   }

    // GetShowSeriesInfo
   GetShowSeriesInfo(Show) {
  if (typeof Show.SeriesInfo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SeriesInfo);
  });
  return this.sageAPI.invoke("GetShowSeriesInfo", {
'Show':Show.ID
});
   }

    // GetShowSubCategory
   GetShowSubCategory(Show) {
  if (typeof Show.SubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.SubCategory);
  });
  return this.sageAPI.invoke("GetShowSubCategory", {
'Show':Show.ID
});
   }

    // GetShowTitle
   GetShowTitle(Show) {
  if (typeof Show.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Title);
  });
  return this.sageAPI.invoke("GetShowTitle", {
'Show':Show.ID
});
   }

    // GetShowYear
   GetShowYear(Show) {
  if (typeof Show.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Year);
  });
  return this.sageAPI.invoke("GetShowYear", {
'Show':Show.ID
});
   }

    // HasMovieImage
   HasMovieImage(Show) {
  if (typeof Show.MovieImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.MovieImage);
  });
  return this.sageAPI.invoke("HasMovieImage", {
'Show':Show.ID
});
   }

    // IsMovie
   IsMovie(Show) {
  if (typeof Show.Movie !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.Movie);
  });
  return this.sageAPI.invoke("IsMovie", {
'Show':Show.ID
});
   }

    // IsSDEPGInProgressSport
   IsSDEPGInProgressSport(ExternalIDs) {
  return this.sageAPI.invoke("IsSDEPGInProgressSport", {
'ExternalIDs':ExternalIDs
});
   }

    // IsShowEPGDataUnique
   IsShowEPGDataUnique(Show) {
  if (typeof Show.EPGDataUnique !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Show.EPGDataUnique);
  });
  return this.sageAPI.invoke("IsShowEPGDataUnique", {
'Show':Show.ID
});
   }

    // IsShowFirstRun
   IsShowFirstRun(Airing) {
  return this.sageAPI.invoke("IsShowFirstRun", {
'Airing':Airing
});
   }

    // IsShowObject
   IsShowObject(Show) {
  return this.sageAPI.invoke("IsShowObject", {
'Show':Show.ID
});
   }

    // IsShowReRun
   IsShowReRun(Airing) {
  return this.sageAPI.invoke("IsShowReRun", {
'Airing':Airing
});
   }
}

    export default ShowAPI;
