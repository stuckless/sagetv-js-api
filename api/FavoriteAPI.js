class FavoriteAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddFavorite
   AddFavorite(Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
  return this.sageAPI.invoke("AddFavorite", [Title,FirstRuns,ReRuns,Category,SubCategory,Person,RoleForPerson,Rated,Year,ParentalRating,Network,ChannelCallSign,Timeslot,Keyword]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConfirmManualRecordOverFavoritePriority
   ConfirmManualRecordOverFavoritePriority(ManualRecordAiring, FavoriteAiring) {
  return this.sageAPI.invoke("ConfirmManualRecordOverFavoritePriority", [ManualRecordAiring,FavoriteAiring]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateFavoritePriority
   CreateFavoritePriority(HigherPriorityFavorite, LowerPriorityFavorite) {
  return this.sageAPI.invoke("CreateFavoritePriority", [HigherPriorityFavorite,LowerPriorityFavorite]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DoesFavoriteMatchAiring
   DoesFavoriteMatchAiring(Favorite, Airing) {
  return this.sageAPI.invoke("DoesFavoriteMatchAiring", ['favorite:'+Favorite.FavoriteID,Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteAirings
   GetFavoriteAirings(Favorite) {
  if (typeof Favorite.FavoriteAirings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteAirings);
  });
  return this.sageAPI.invoke("GetFavoriteAirings", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteAirings=json.Result;
  return json.Result;
});
   }

    // GetFavoriteAutomaticConversionDestination
   GetFavoriteAutomaticConversionDestination(Favorite) {
  if (typeof Favorite.FavoriteAutomaticConversionDestination !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteAutomaticConversionDestination);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionDestination", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteAutomaticConversionDestination=json.Result;
  return json.Result;
});
   }

    // GetFavoriteAutomaticConversionFormat
   GetFavoriteAutomaticConversionFormat(Favorite) {
  if (typeof Favorite.FavoriteAutomaticConversionFormat !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteAutomaticConversionFormat);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionFormat", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteAutomaticConversionFormat=json.Result;
  return json.Result;
});
   }

    // GetFavoriteCategory
   GetFavoriteCategory(Favorite) {
  if (typeof Favorite.FavoriteCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteCategory);
  });
  return this.sageAPI.invoke("GetFavoriteCategory", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteCategory=json.Result;
  return json.Result;
});
   }

    // GetFavoriteChannel
   GetFavoriteChannel(Favorite) {
  if (typeof Favorite.FavoriteChannel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteChannel);
  });
  return this.sageAPI.invoke("GetFavoriteChannel", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteChannel=json.Result;
  return json.Result;
});
   }

    // GetFavoriteDescription
   GetFavoriteDescription(Favorite) {
  if (typeof Favorite.FavoriteDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteDescription);
  });
  return this.sageAPI.invoke("GetFavoriteDescription", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteDescription=json.Result;
  return json.Result;
});
   }

    // GetFavoriteForAiring
   GetFavoriteForAiring(Airing) {
  return this.sageAPI.invoke("GetFavoriteForAiring", [Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteForID
   GetFavoriteForID(FavoriteID) {
  return this.sageAPI.invoke("GetFavoriteForID", [FavoriteID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteID
   GetFavoriteID(Favorite) {
  if (typeof Favorite.FavoriteID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteID);
  });
  return this.sageAPI.invoke("GetFavoriteID", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteID=json.Result;
  return json.Result;
});
   }

    // GetFavoriteKeyword
   GetFavoriteKeyword(Favorite) {
  if (typeof Favorite.FavoriteKeyword !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteKeyword);
  });
  return this.sageAPI.invoke("GetFavoriteKeyword", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteKeyword=json.Result;
  return json.Result;
});
   }

    // GetFavoriteNetwork
   GetFavoriteNetwork(Favorite) {
  if (typeof Favorite.FavoriteNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteNetwork);
  });
  return this.sageAPI.invoke("GetFavoriteNetwork", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteNetwork=json.Result;
  return json.Result;
});
   }

    // GetFavoriteParentalRating
   GetFavoriteParentalRating(Favorite) {
  if (typeof Favorite.FavoriteParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteParentalRating);
  });
  return this.sageAPI.invoke("GetFavoriteParentalRating", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteParentalRating=json.Result;
  return json.Result;
});
   }

    // GetFavoritePerson
   GetFavoritePerson(Favorite) {
  if (typeof Favorite.FavoritePerson !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoritePerson);
  });
  return this.sageAPI.invoke("GetFavoritePerson", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoritePerson=json.Result;
  return json.Result;
});
   }

    // GetFavoritePersonRole
   GetFavoritePersonRole(Favorite) {
  if (typeof Favorite.FavoritePersonRole !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoritePersonRole);
  });
  return this.sageAPI.invoke("GetFavoritePersonRole", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoritePersonRole=json.Result;
  return json.Result;
});
   }

    // GetFavoritePresentationName
   GetFavoritePresentationName(Favorite) {
  if (typeof Favorite.FavoritePresentationName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoritePresentationName);
  });
  return this.sageAPI.invoke("GetFavoritePresentationName", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoritePresentationName=json.Result;
  return json.Result;
});
   }

    // GetFavoritePresentationPrefix
   GetFavoritePresentationPrefix(Favorite) {
  if (typeof Favorite.FavoritePresentationPrefix !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoritePresentationPrefix);
  });
  return this.sageAPI.invoke("GetFavoritePresentationPrefix", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoritePresentationPrefix=json.Result;
  return json.Result;
});
   }

    // GetFavoriteProperties
   GetFavoriteProperties(Favorite) {
  if (typeof Favorite.FavoriteProperties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteProperties);
  });
  return this.sageAPI.invoke("GetFavoriteProperties", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteProperties=json.Result;
  return json.Result;
});
   }

    // GetFavoriteProperty
   GetFavoriteProperty(Favorite, PropertyName) {
  return this.sageAPI.invoke("GetFavoriteProperty", ['favorite:'+Favorite.FavoriteID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteQuality
   GetFavoriteQuality(Favorite) {
  if (typeof Favorite.FavoriteQuality !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteQuality);
  });
  return this.sageAPI.invoke("GetFavoriteQuality", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteQuality=json.Result;
  return json.Result;
});
   }

    // GetFavoriteRated
   GetFavoriteRated(Favorite) {
  if (typeof Favorite.FavoriteRated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteRated);
  });
  return this.sageAPI.invoke("GetFavoriteRated", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteRated=json.Result;
  return json.Result;
});
   }

    // GetFavoriteSubCategory
   GetFavoriteSubCategory(Favorite) {
  if (typeof Favorite.FavoriteSubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteSubCategory);
  });
  return this.sageAPI.invoke("GetFavoriteSubCategory", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteSubCategory=json.Result;
  return json.Result;
});
   }

    // GetFavoriteTimeslot
   GetFavoriteTimeslot(Favorite) {
  if (typeof Favorite.FavoriteTimeslot !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteTimeslot);
  });
  return this.sageAPI.invoke("GetFavoriteTimeslot", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteTimeslot=json.Result;
  return json.Result;
});
   }

    // GetFavoriteTitle
   GetFavoriteTitle(Favorite) {
  if (typeof Favorite.FavoriteTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteTitle);
  });
  return this.sageAPI.invoke("GetFavoriteTitle", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteTitle=json.Result;
  return json.Result;
});
   }

    // GetFavoriteYear
   GetFavoriteYear(Favorite) {
  if (typeof Favorite.FavoriteYear !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.FavoriteYear);
  });
  return this.sageAPI.invoke("GetFavoriteYear", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteYear=json.Result;
  return json.Result;
});
   }

    // GetFavorites
   GetFavorites() {
  return this.sageAPI.invoke("GetFavorites", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoritesForAiring
   GetFavoritesForAiring(Airing) {
  return this.sageAPI.invoke("GetFavoritesForAiring", [Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetKeepAtMost
   GetKeepAtMost(Favorite) {
  if (typeof Favorite.KeepAtMost !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.KeepAtMost);
  });
  return this.sageAPI.invoke("GetKeepAtMost", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.KeepAtMost=json.Result;
  return json.Result;
});
   }

    // GetStartPadding
   GetStartPadding(Favorite) {
  if (typeof Favorite.StartPadding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.StartPadding);
  });
  return this.sageAPI.invoke("GetStartPadding", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.StartPadding=json.Result;
  return json.Result;
});
   }

    // GetStopPadding
   GetStopPadding(Favorite) {
  if (typeof Favorite.StopPadding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.StopPadding);
  });
  return this.sageAPI.invoke("GetStopPadding", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.StopPadding=json.Result;
  return json.Result;
});
   }

    // IsAutoDelete
   IsAutoDelete(Favorite) {
  if (typeof Favorite.IsAutoDelete !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsAutoDelete);
  });
  return this.sageAPI.invoke("IsAutoDelete", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsAutoDelete=json.Result;
  return json.Result;
});
   }

    // IsDeleteAfterAutomaticConversion
   IsDeleteAfterAutomaticConversion(Favorite) {
  if (typeof Favorite.IsDeleteAfterAutomaticConversion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsDeleteAfterAutomaticConversion);
  });
  return this.sageAPI.invoke("IsDeleteAfterAutomaticConversion", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsDeleteAfterAutomaticConversion=json.Result;
  return json.Result;
});
   }

    // IsFavoriteEnabled
   IsFavoriteEnabled(Favorite) {
  if (typeof Favorite.IsFavoriteEnabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsFavoriteEnabled);
  });
  return this.sageAPI.invoke("IsFavoriteEnabled", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsFavoriteEnabled=json.Result;
  return json.Result;
});
   }

    // IsFavoriteObject
   IsFavoriteObject(Favorite) {
  return this.sageAPI.invoke("IsFavoriteObject", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFirstRuns
   IsFirstRuns(Favorite) {
  if (typeof Favorite.IsFirstRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsFirstRuns);
  });
  return this.sageAPI.invoke("IsFirstRuns", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsFirstRuns=json.Result;
  return json.Result;
});
   }

    // IsFirstRunsAndReRuns
   IsFirstRunsAndReRuns(Favorite) {
  if (typeof Favorite.IsFirstRunsAndReRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsFirstRunsAndReRuns);
  });
  return this.sageAPI.invoke("IsFirstRunsAndReRuns", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsFirstRunsAndReRuns=json.Result;
  return json.Result;
});
   }

    // IsFirstRunsOnly
   IsFirstRunsOnly(Favorite) {
  if (typeof Favorite.IsFirstRunsOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsFirstRunsOnly);
  });
  return this.sageAPI.invoke("IsFirstRunsOnly", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsFirstRunsOnly=json.Result;
  return json.Result;
});
   }

    // IsReRuns
   IsReRuns(Favorite) {
  if (typeof Favorite.IsReRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsReRuns);
  });
  return this.sageAPI.invoke("IsReRuns", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsReRuns=json.Result;
  return json.Result;
});
   }

    // IsReRunsOnly
   IsReRunsOnly(Favorite) {
  if (typeof Favorite.IsReRunsOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsReRunsOnly);
  });
  return this.sageAPI.invoke("IsReRunsOnly", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsReRunsOnly=json.Result;
  return json.Result;
});
   }

    // RemoveFavorite
   RemoveFavorite(Favorite) {
  return this.sageAPI.invoke("RemoveFavorite", ['favorite:'+Favorite.FavoriteID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDeleteAfterAutomaticConversion
   SetDeleteAfterAutomaticConversion(Favorite, DeleteAfterAutomaticConversion) {
  return this.sageAPI.invoke("SetDeleteAfterAutomaticConversion", ['favorite:'+Favorite.FavoriteID,DeleteAfterAutomaticConversion]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDontAutodelete
   SetDontAutodelete(Favorite, DontAutoDelete) {
  return this.sageAPI.invoke("SetDontAutodelete", ['favorite:'+Favorite.FavoriteID,DontAutoDelete]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteAutomaticConversionDestination
   SetFavoriteAutomaticConversionDestination(Favorite, Folder) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionDestination", ['favorite:'+Favorite.FavoriteID,Folder]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteAutomaticConversionFormat
   SetFavoriteAutomaticConversionFormat(Favorite, Format) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionFormat", ['favorite:'+Favorite.FavoriteID,Format]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteCategories
   SetFavoriteCategories(Favorite, Category, SubCategory) {
  return this.sageAPI.invoke("SetFavoriteCategories", ['favorite:'+Favorite.FavoriteID,Category,SubCategory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteChannel
   SetFavoriteChannel(Favorite, Channel) {
  return this.sageAPI.invoke("SetFavoriteChannel", ['favorite:'+Favorite.FavoriteID,Channel]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteEnabled
   SetFavoriteEnabled(Favorite, Enabled) {
  return this.sageAPI.invoke("SetFavoriteEnabled", ['favorite:'+Favorite.FavoriteID,Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteKeyword
   SetFavoriteKeyword(Favorite, Keyword) {
  return this.sageAPI.invoke("SetFavoriteKeyword", ['favorite:'+Favorite.FavoriteID,Keyword]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteNetwork
   SetFavoriteNetwork(Favorite, Network) {
  return this.sageAPI.invoke("SetFavoriteNetwork", ['favorite:'+Favorite.FavoriteID,Network]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteParentalRating
   SetFavoriteParentalRating(Favorite, ParentalRating) {
  return this.sageAPI.invoke("SetFavoriteParentalRating", ['favorite:'+Favorite.FavoriteID,ParentalRating]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoritePerson
   SetFavoritePerson(Favorite, Person, Role) {
  return this.sageAPI.invoke("SetFavoritePerson", ['favorite:'+Favorite.FavoriteID,Person,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteProperty
   SetFavoriteProperty(Favorite, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetFavoriteProperty", ['favorite:'+Favorite.FavoriteID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteQuality
   SetFavoriteQuality(Favorite, Quality) {
  return this.sageAPI.invoke("SetFavoriteQuality", ['favorite:'+Favorite.FavoriteID,Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteRated
   SetFavoriteRated(Favorite, Rated) {
  return this.sageAPI.invoke("SetFavoriteRated", ['favorite:'+Favorite.FavoriteID,Rated]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteTimeslot
   SetFavoriteTimeslot(Favorite, Timeslot) {
  return this.sageAPI.invoke("SetFavoriteTimeslot", ['favorite:'+Favorite.FavoriteID,Timeslot]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteTitle
   SetFavoriteTitle(Favorite, Title) {
  return this.sageAPI.invoke("SetFavoriteTitle", ['favorite:'+Favorite.FavoriteID,Title]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteYear
   SetFavoriteYear(Favorite, Year) {
  return this.sageAPI.invoke("SetFavoriteYear", ['favorite:'+Favorite.FavoriteID,Year]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetKeepAtMost
   SetKeepAtMost(Favorite, NumberToKeep) {
  return this.sageAPI.invoke("SetKeepAtMost", ['favorite:'+Favorite.FavoriteID,NumberToKeep]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRunStatus
   SetRunStatus(Favorite, FirstRuns, ReRuns) {
  return this.sageAPI.invoke("SetRunStatus", ['favorite:'+Favorite.FavoriteID,FirstRuns,ReRuns]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetStartPadding
   SetStartPadding(Favorite, StartPadding) {
  return this.sageAPI.invoke("SetStartPadding", ['favorite:'+Favorite.FavoriteID,StartPadding]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetStopPadding
   SetStopPadding(Favorite, StopPadding) {
  return this.sageAPI.invoke("SetStopPadding", ['favorite:'+Favorite.FavoriteID,StopPadding]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UpdateFavorite
   UpdateFavorite(Favorite, Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
  return this.sageAPI.invoke("UpdateFavorite", ['favorite:'+Favorite.FavoriteID,Title,FirstRuns,ReRuns,Category,SubCategory,Person,RoleForPerson,Rated,Year,ParentalRating,Network,ChannelCallSign,Timeslot,Keyword]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Favorite
FavoriteAPI.FavoriteAirings="FavoriteAirings";
FavoriteAPI.FavoriteAutomaticConversionDestination="FavoriteAutomaticConversionDestination";
FavoriteAPI.FavoriteAutomaticConversionFormat="FavoriteAutomaticConversionFormat";
FavoriteAPI.FavoriteCategory="FavoriteCategory";
FavoriteAPI.FavoriteChannel="FavoriteChannel";
FavoriteAPI.FavoriteDescription="FavoriteDescription";
FavoriteAPI.FavoriteID="FavoriteID";
FavoriteAPI.FavoriteKeyword="FavoriteKeyword";
FavoriteAPI.FavoriteNetwork="FavoriteNetwork";
FavoriteAPI.FavoriteParentalRating="FavoriteParentalRating";
FavoriteAPI.FavoritePerson="FavoritePerson";
FavoriteAPI.FavoritePersonRole="FavoritePersonRole";
FavoriteAPI.FavoritePresentationName="FavoritePresentationName";
FavoriteAPI.FavoritePresentationPrefix="FavoritePresentationPrefix";
FavoriteAPI.FavoriteProperties="FavoriteProperties";
FavoriteAPI.FavoriteQuality="FavoriteQuality";
FavoriteAPI.FavoriteRated="FavoriteRated";
FavoriteAPI.FavoriteSubCategory="FavoriteSubCategory";
FavoriteAPI.FavoriteTimeslot="FavoriteTimeslot";
FavoriteAPI.FavoriteTitle="FavoriteTitle";
FavoriteAPI.FavoriteYear="FavoriteYear";
FavoriteAPI.KeepAtMost="KeepAtMost";
FavoriteAPI.StartPadding="StartPadding";
FavoriteAPI.StopPadding="StopPadding";
FavoriteAPI.IsAutoDelete="IsAutoDelete";
FavoriteAPI.IsDeleteAfterAutomaticConversion="IsDeleteAfterAutomaticConversion";
FavoriteAPI.IsFavoriteEnabled="IsFavoriteEnabled";
FavoriteAPI.IsFirstRuns="IsFirstRuns";
FavoriteAPI.IsFirstRunsAndReRuns="IsFirstRunsAndReRuns";
FavoriteAPI.IsFirstRunsOnly="IsFirstRunsOnly";
FavoriteAPI.IsReRuns="IsReRuns";
FavoriteAPI.IsReRunsOnly="IsReRunsOnly";
    export default FavoriteAPI;
