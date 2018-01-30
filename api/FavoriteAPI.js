class FavoriteAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddFavorite
   AddFavorite(Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
  return this.sageAPI.invoke("AddFavorite", {
'Title':Title
,
'FirstRuns':FirstRuns
,
'ReRuns':ReRuns
,
'Category':Category
,
'SubCategory':SubCategory
,
'Person':Person
,
'RoleForPerson':RoleForPerson
,
'Rated':Rated
,
'Year':Year
,
'ParentalRating':ParentalRating
,
'Network':Network
,
'ChannelCallSign':ChannelCallSign
,
'Timeslot':Timeslot
,
'Keyword':Keyword
});
   }

    // ConfirmManualRecordOverFavoritePriority
   ConfirmManualRecordOverFavoritePriority(ManualRecordAiring, FavoriteAiring) {
  return this.sageAPI.invoke("ConfirmManualRecordOverFavoritePriority", {
'ManualRecordAiring':ManualRecordAiring
,
'FavoriteAiring':FavoriteAiring
});
   }

    // CreateFavoritePriority
   CreateFavoritePriority(HigherPriorityFavorite, LowerPriorityFavorite) {
  return this.sageAPI.invoke("CreateFavoritePriority", {
'HigherPriorityFavorite':HigherPriorityFavorite
,
'LowerPriorityFavorite':LowerPriorityFavorite
});
   }

    // DoesFavoriteMatchAiring
   DoesFavoriteMatchAiring(Favorite, Airing) {
  return this.sageAPI.invoke("DoesFavoriteMatchAiring", {
'Favorite':Favorite.ID
,
'Airing':Airing
});
   }

    // GetFavoriteAirings
   GetFavoriteAirings(Favorite) {
  if (typeof Favorite.Airings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Airings);
  });
  return this.sageAPI.invoke("GetFavoriteAirings", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteAutomaticConversionDestination
   GetFavoriteAutomaticConversionDestination(Favorite) {
  if (typeof Favorite.AutomaticConversionDestination !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.AutomaticConversionDestination);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionDestination", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteAutomaticConversionFormat
   GetFavoriteAutomaticConversionFormat(Favorite) {
  if (typeof Favorite.AutomaticConversionFormat !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.AutomaticConversionFormat);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionFormat", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteCategory
   GetFavoriteCategory(Favorite) {
  if (typeof Favorite.Category !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Category);
  });
  return this.sageAPI.invoke("GetFavoriteCategory", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteChannel
   GetFavoriteChannel(Favorite) {
  if (typeof Favorite.Channel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Channel);
  });
  return this.sageAPI.invoke("GetFavoriteChannel", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteDescription
   GetFavoriteDescription(Favorite) {
  if (typeof Favorite.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Description);
  });
  return this.sageAPI.invoke("GetFavoriteDescription", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteForAiring
   GetFavoriteForAiring(Airing) {
  return this.sageAPI.invoke("GetFavoriteForAiring", {
'Airing':Airing
});
   }

    // GetFavoriteForID
   GetFavoriteForID(FavoriteID) {
  return this.sageAPI.invoke("GetFavoriteForID", {
'FavoriteID':FavoriteID
});
   }

    // GetFavoriteID
   GetFavoriteID(Favorite) {
  if (typeof Favorite.ID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.ID);
  });
  return this.sageAPI.invoke("GetFavoriteID", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteKeyword
   GetFavoriteKeyword(Favorite) {
  if (typeof Favorite.Keyword !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Keyword);
  });
  return this.sageAPI.invoke("GetFavoriteKeyword", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteNetwork
   GetFavoriteNetwork(Favorite) {
  if (typeof Favorite.Network !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Network);
  });
  return this.sageAPI.invoke("GetFavoriteNetwork", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteParentalRating
   GetFavoriteParentalRating(Favorite) {
  if (typeof Favorite.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.ParentalRating);
  });
  return this.sageAPI.invoke("GetFavoriteParentalRating", {
'Favorite':Favorite.ID
});
   }

    // GetFavoritePerson
   GetFavoritePerson(Favorite) {
  if (typeof Favorite.Person !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Person);
  });
  return this.sageAPI.invoke("GetFavoritePerson", {
'Favorite':Favorite.ID
});
   }

    // GetFavoritePersonRole
   GetFavoritePersonRole(Favorite) {
  if (typeof Favorite.PersonRole !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PersonRole);
  });
  return this.sageAPI.invoke("GetFavoritePersonRole", {
'Favorite':Favorite.ID
});
   }

    // GetFavoritePresentationName
   GetFavoritePresentationName(Favorite) {
  if (typeof Favorite.PresentationName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PresentationName);
  });
  return this.sageAPI.invoke("GetFavoritePresentationName", {
'Favorite':Favorite.ID
});
   }

    // GetFavoritePresentationPrefix
   GetFavoritePresentationPrefix(Favorite) {
  if (typeof Favorite.PresentationPrefix !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PresentationPrefix);
  });
  return this.sageAPI.invoke("GetFavoritePresentationPrefix", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteProperties
   GetFavoriteProperties(Favorite) {
  if (typeof Favorite.Properties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Properties);
  });
  return this.sageAPI.invoke("GetFavoriteProperties", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteProperty
   GetFavoriteProperty(Favorite, PropertyName) {
  return this.sageAPI.invoke("GetFavoriteProperty", {
'Favorite':Favorite.ID
,
'PropertyName':PropertyName
});
   }

    // GetFavoriteQuality
   GetFavoriteQuality(Favorite) {
  if (typeof Favorite.Quality !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Quality);
  });
  return this.sageAPI.invoke("GetFavoriteQuality", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteRated
   GetFavoriteRated(Favorite) {
  if (typeof Favorite.Rated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Rated);
  });
  return this.sageAPI.invoke("GetFavoriteRated", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteSubCategory
   GetFavoriteSubCategory(Favorite) {
  if (typeof Favorite.SubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.SubCategory);
  });
  return this.sageAPI.invoke("GetFavoriteSubCategory", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteTimeslot
   GetFavoriteTimeslot(Favorite) {
  if (typeof Favorite.Timeslot !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Timeslot);
  });
  return this.sageAPI.invoke("GetFavoriteTimeslot", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteTitle
   GetFavoriteTitle(Favorite) {
  if (typeof Favorite.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Title);
  });
  return this.sageAPI.invoke("GetFavoriteTitle", {
'Favorite':Favorite.ID
});
   }

    // GetFavoriteYear
   GetFavoriteYear(Favorite) {
  if (typeof Favorite.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Year);
  });
  return this.sageAPI.invoke("GetFavoriteYear", {
'Favorite':Favorite.ID
});
   }

    // GetFavorites
   GetFavorites() {
  return this.sageAPI.invoke("GetFavorites", {
});
   }

    // GetFavoritesForAiring
   GetFavoritesForAiring(Airing) {
  return this.sageAPI.invoke("GetFavoritesForAiring", {
'Airing':Airing
});
   }

    // GetKeepAtMost
   GetKeepAtMost(Favorite) {
  if (typeof Favorite.KeepAtMost !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.KeepAtMost);
  });
  return this.sageAPI.invoke("GetKeepAtMost", {
'Favorite':Favorite.ID
});
   }

    // GetStartPadding
   GetStartPadding(Favorite) {
  if (typeof Favorite.StartPadding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.StartPadding);
  });
  return this.sageAPI.invoke("GetStartPadding", {
'Favorite':Favorite.ID
});
   }

    // GetStopPadding
   GetStopPadding(Favorite) {
  if (typeof Favorite.StopPadding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.StopPadding);
  });
  return this.sageAPI.invoke("GetStopPadding", {
'Favorite':Favorite.ID
});
   }

    // IsAutoDelete
   IsAutoDelete(Favorite) {
  if (typeof Favorite.AutoDelete !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.AutoDelete);
  });
  return this.sageAPI.invoke("IsAutoDelete", {
'Favorite':Favorite.ID
});
   }

    // IsDeleteAfterAutomaticConversion
   IsDeleteAfterAutomaticConversion(Favorite) {
  if (typeof Favorite.DeleteAfterAutomaticConversion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.DeleteAfterAutomaticConversion);
  });
  return this.sageAPI.invoke("IsDeleteAfterAutomaticConversion", {
'Favorite':Favorite.ID
});
   }

    // IsFavoriteEnabled
   IsFavoriteEnabled(Favorite) {
  if (typeof Favorite.Enabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Enabled);
  });
  return this.sageAPI.invoke("IsFavoriteEnabled", {
'Favorite':Favorite.ID
});
   }

    // IsFavoriteObject
   IsFavoriteObject(Favorite) {
  return this.sageAPI.invoke("IsFavoriteObject", {
'Favorite':Favorite.ID
});
   }

    // IsFirstRuns
   IsFirstRuns(Favorite) {
  if (typeof Favorite.FirstRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FirstRuns);
  });
  return this.sageAPI.invoke("IsFirstRuns", {
'Favorite':Favorite.ID
});
   }

    // IsFirstRunsAndReRuns
   IsFirstRunsAndReRuns(Favorite) {
  if (typeof Favorite.FirstRunsAndReRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FirstRunsAndReRuns);
  });
  return this.sageAPI.invoke("IsFirstRunsAndReRuns", {
'Favorite':Favorite.ID
});
   }

    // IsFirstRunsOnly
   IsFirstRunsOnly(Favorite) {
  if (typeof Favorite.FirstRunsOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FirstRunsOnly);
  });
  return this.sageAPI.invoke("IsFirstRunsOnly", {
'Favorite':Favorite.ID
});
   }

    // IsReRuns
   IsReRuns(Favorite) {
  if (typeof Favorite.ReRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.ReRuns);
  });
  return this.sageAPI.invoke("IsReRuns", {
'Favorite':Favorite.ID
});
   }

    // IsReRunsOnly
   IsReRunsOnly(Favorite) {
  if (typeof Favorite.ReRunsOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.ReRunsOnly);
  });
  return this.sageAPI.invoke("IsReRunsOnly", {
'Favorite':Favorite.ID
});
   }

    // RemoveFavorite
   RemoveFavorite(Favorite) {
  return this.sageAPI.invoke("RemoveFavorite", {
'Favorite':Favorite.ID
});
   }

    // SetDeleteAfterAutomaticConversion
   SetDeleteAfterAutomaticConversion(Favorite, DeleteAfterAutomaticConversion) {
  return this.sageAPI.invoke("SetDeleteAfterAutomaticConversion", {
'Favorite':Favorite.ID
,
'DeleteAfterAutomaticConversion':DeleteAfterAutomaticConversion
});
   }

    // SetDontAutodelete
   SetDontAutodelete(Favorite, DontAutoDelete) {
  return this.sageAPI.invoke("SetDontAutodelete", {
'Favorite':Favorite.ID
,
'DontAutoDelete':DontAutoDelete
});
   }

    // SetFavoriteAutomaticConversionDestination
   SetFavoriteAutomaticConversionDestination(Favorite, Folder) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionDestination", {
'Favorite':Favorite.ID
,
'Folder':Folder
});
   }

    // SetFavoriteAutomaticConversionFormat
   SetFavoriteAutomaticConversionFormat(Favorite, Format) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionFormat", {
'Favorite':Favorite.ID
,
'Format':Format
});
   }

    // SetFavoriteCategories
   SetFavoriteCategories(Favorite, Category, SubCategory) {
  return this.sageAPI.invoke("SetFavoriteCategories", {
'Favorite':Favorite.ID
,
'Category':Category
,
'SubCategory':SubCategory
});
   }

    // SetFavoriteChannel
   SetFavoriteChannel(Favorite, Channel) {
  return this.sageAPI.invoke("SetFavoriteChannel", {
'Favorite':Favorite.ID
,
'Channel':Channel
});
   }

    // SetFavoriteEnabled
   SetFavoriteEnabled(Favorite, Enabled) {
  return this.sageAPI.invoke("SetFavoriteEnabled", {
'Favorite':Favorite.ID
,
'Enabled':Enabled
});
   }

    // SetFavoriteKeyword
   SetFavoriteKeyword(Favorite, Keyword) {
  return this.sageAPI.invoke("SetFavoriteKeyword", {
'Favorite':Favorite.ID
,
'Keyword':Keyword
});
   }

    // SetFavoriteNetwork
   SetFavoriteNetwork(Favorite, Network) {
  return this.sageAPI.invoke("SetFavoriteNetwork", {
'Favorite':Favorite.ID
,
'Network':Network
});
   }

    // SetFavoriteParentalRating
   SetFavoriteParentalRating(Favorite, ParentalRating) {
  return this.sageAPI.invoke("SetFavoriteParentalRating", {
'Favorite':Favorite.ID
,
'ParentalRating':ParentalRating
});
   }

    // SetFavoritePerson
   SetFavoritePerson(Favorite, Person, Role) {
  return this.sageAPI.invoke("SetFavoritePerson", {
'Favorite':Favorite.ID
,
'Person':Person
,
'Role':Role
});
   }

    // SetFavoriteProperty
   SetFavoriteProperty(Favorite, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetFavoriteProperty", {
'Favorite':Favorite.ID
,
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }

    // SetFavoriteQuality
   SetFavoriteQuality(Favorite, Quality) {
  return this.sageAPI.invoke("SetFavoriteQuality", {
'Favorite':Favorite.ID
,
'Quality':Quality
});
   }

    // SetFavoriteRated
   SetFavoriteRated(Favorite, Rated) {
  return this.sageAPI.invoke("SetFavoriteRated", {
'Favorite':Favorite.ID
,
'Rated':Rated
});
   }

    // SetFavoriteTimeslot
   SetFavoriteTimeslot(Favorite, Timeslot) {
  return this.sageAPI.invoke("SetFavoriteTimeslot", {
'Favorite':Favorite.ID
,
'Timeslot':Timeslot
});
   }

    // SetFavoriteTitle
   SetFavoriteTitle(Favorite, Title) {
  return this.sageAPI.invoke("SetFavoriteTitle", {
'Favorite':Favorite.ID
,
'Title':Title
});
   }

    // SetFavoriteYear
   SetFavoriteYear(Favorite, Year) {
  return this.sageAPI.invoke("SetFavoriteYear", {
'Favorite':Favorite.ID
,
'Year':Year
});
   }

    // SetKeepAtMost
   SetKeepAtMost(Favorite, NumberToKeep) {
  return this.sageAPI.invoke("SetKeepAtMost", {
'Favorite':Favorite.ID
,
'NumberToKeep':NumberToKeep
});
   }

    // SetRunStatus
   SetRunStatus(Favorite, FirstRuns, ReRuns) {
  return this.sageAPI.invoke("SetRunStatus", {
'Favorite':Favorite.ID
,
'FirstRuns':FirstRuns
,
'ReRuns':ReRuns
});
   }

    // SetStartPadding
   SetStartPadding(Favorite, StartPadding) {
  return this.sageAPI.invoke("SetStartPadding", {
'Favorite':Favorite.ID
,
'StartPadding':StartPadding
});
   }

    // SetStopPadding
   SetStopPadding(Favorite, StopPadding) {
  return this.sageAPI.invoke("SetStopPadding", {
'Favorite':Favorite.ID
,
'StopPadding':StopPadding
});
   }

    // UpdateFavorite
   UpdateFavorite(Favorite, Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
  return this.sageAPI.invoke("UpdateFavorite", {
'Favorite':Favorite.ID
,
'Title':Title
,
'FirstRuns':FirstRuns
,
'ReRuns':ReRuns
,
'Category':Category
,
'SubCategory':SubCategory
,
'Person':Person
,
'RoleForPerson':RoleForPerson
,
'Rated':Rated
,
'Year':Year
,
'ParentalRating':ParentalRating
,
'Network':Network
,
'ChannelCallSign':ChannelCallSign
,
'Timeslot':Timeslot
,
'Keyword':Keyword
});
   }
}

    export default FavoriteAPI;
