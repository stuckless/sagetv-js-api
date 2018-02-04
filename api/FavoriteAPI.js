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
  return this.sageAPI.invoke("DoesFavoriteMatchAiring", [Favorite.FavoriteID,Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteAirings
   GetFavoriteAirings(Favorite) {
  if (typeof Favorite.Airings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Airings);
  });
  return this.sageAPI.invoke("GetFavoriteAirings", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Airings=json.Result;
  return json.Result;
});
   }

    // GetFavoriteAutomaticConversionDestination
   GetFavoriteAutomaticConversionDestination(Favorite) {
  if (typeof Favorite.AutomaticConversionDestination !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.AutomaticConversionDestination);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionDestination", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.AutomaticConversionDestination=json.Result;
  return json.Result;
});
   }

    // GetFavoriteAutomaticConversionFormat
   GetFavoriteAutomaticConversionFormat(Favorite) {
  if (typeof Favorite.AutomaticConversionFormat !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.AutomaticConversionFormat);
  });
  return this.sageAPI.invoke("GetFavoriteAutomaticConversionFormat", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.AutomaticConversionFormat=json.Result;
  return json.Result;
});
   }

    // GetFavoriteCategory
   GetFavoriteCategory(Favorite) {
  if (typeof Favorite.Category !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Category);
  });
  return this.sageAPI.invoke("GetFavoriteCategory", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Category=json.Result;
  return json.Result;
});
   }

    // GetFavoriteChannel
   GetFavoriteChannel(Favorite) {
  if (typeof Favorite.Channel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Channel);
  });
  return this.sageAPI.invoke("GetFavoriteChannel", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Channel=json.Result;
  return json.Result;
});
   }

    // GetFavoriteDescription
   GetFavoriteDescription(Favorite) {
  if (typeof Favorite.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Description);
  });
  return this.sageAPI.invoke("GetFavoriteDescription", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Description=json.Result;
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
  return this.sageAPI.invoke("GetFavoriteID", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.FavoriteID=json.Result;
  return json.Result;
});
   }

    // GetFavoriteKeyword
   GetFavoriteKeyword(Favorite) {
  if (typeof Favorite.Keyword !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Keyword);
  });
  return this.sageAPI.invoke("GetFavoriteKeyword", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Keyword=json.Result;
  return json.Result;
});
   }

    // GetFavoriteNetwork
   GetFavoriteNetwork(Favorite) {
  if (typeof Favorite.Network !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Network);
  });
  return this.sageAPI.invoke("GetFavoriteNetwork", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Network=json.Result;
  return json.Result;
});
   }

    // GetFavoriteParentalRating
   GetFavoriteParentalRating(Favorite) {
  if (typeof Favorite.ParentalRating !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.ParentalRating);
  });
  return this.sageAPI.invoke("GetFavoriteParentalRating", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.ParentalRating=json.Result;
  return json.Result;
});
   }

    // GetFavoritePerson
   GetFavoritePerson(Favorite) {
  if (typeof Favorite.Person !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Person);
  });
  return this.sageAPI.invoke("GetFavoritePerson", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Person=json.Result;
  return json.Result;
});
   }

    // GetFavoritePersonRole
   GetFavoritePersonRole(Favorite) {
  if (typeof Favorite.PersonRole !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PersonRole);
  });
  return this.sageAPI.invoke("GetFavoritePersonRole", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.PersonRole=json.Result;
  return json.Result;
});
   }

    // GetFavoritePresentationName
   GetFavoritePresentationName(Favorite) {
  if (typeof Favorite.PresentationName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PresentationName);
  });
  return this.sageAPI.invoke("GetFavoritePresentationName", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.PresentationName=json.Result;
  return json.Result;
});
   }

    // GetFavoritePresentationPrefix
   GetFavoritePresentationPrefix(Favorite) {
  if (typeof Favorite.PresentationPrefix !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.PresentationPrefix);
  });
  return this.sageAPI.invoke("GetFavoritePresentationPrefix", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.PresentationPrefix=json.Result;
  return json.Result;
});
   }

    // GetFavoriteProperties
   GetFavoriteProperties(Favorite) {
  if (typeof Favorite.Properties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Properties);
  });
  return this.sageAPI.invoke("GetFavoriteProperties", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Properties=json.Result;
  return json.Result;
});
   }

    // GetFavoriteProperty
   GetFavoriteProperty(Favorite, PropertyName) {
  return this.sageAPI.invoke("GetFavoriteProperty", [Favorite.FavoriteID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFavoriteQuality
   GetFavoriteQuality(Favorite) {
  if (typeof Favorite.Quality !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Quality);
  });
  return this.sageAPI.invoke("GetFavoriteQuality", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Quality=json.Result;
  return json.Result;
});
   }

    // GetFavoriteRated
   GetFavoriteRated(Favorite) {
  if (typeof Favorite.Rated !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Rated);
  });
  return this.sageAPI.invoke("GetFavoriteRated", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Rated=json.Result;
  return json.Result;
});
   }

    // GetFavoriteSubCategory
   GetFavoriteSubCategory(Favorite) {
  if (typeof Favorite.SubCategory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.SubCategory);
  });
  return this.sageAPI.invoke("GetFavoriteSubCategory", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.SubCategory=json.Result;
  return json.Result;
});
   }

    // GetFavoriteTimeslot
   GetFavoriteTimeslot(Favorite) {
  if (typeof Favorite.Timeslot !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Timeslot);
  });
  return this.sageAPI.invoke("GetFavoriteTimeslot", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Timeslot=json.Result;
  return json.Result;
});
   }

    // GetFavoriteTitle
   GetFavoriteTitle(Favorite) {
  if (typeof Favorite.Title !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Title);
  });
  return this.sageAPI.invoke("GetFavoriteTitle", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Title=json.Result;
  return json.Result;
});
   }

    // GetFavoriteYear
   GetFavoriteYear(Favorite) {
  if (typeof Favorite.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.Year);
  });
  return this.sageAPI.invoke("GetFavoriteYear", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.Year=json.Result;
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
  return this.sageAPI.invoke("GetKeepAtMost", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("GetStartPadding", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("GetStopPadding", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsAutoDelete", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsDeleteAfterAutomaticConversion", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsFavoriteEnabled", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsFavoriteEnabled=json.Result;
  return json.Result;
});
   }

    // IsFavoriteObject
   IsFavoriteObject(Favorite) {
  return this.sageAPI.invoke("IsFavoriteObject", [Favorite.FavoriteID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFirstRuns
   IsFirstRuns(Favorite) {
  if (typeof Favorite.IsFirstRuns !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Favorite.IsFirstRuns);
  });
  return this.sageAPI.invoke("IsFirstRuns", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsFirstRunsAndReRuns", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsFirstRunsOnly", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsReRuns", [Favorite.FavoriteID]).then((json)=>{
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
  return this.sageAPI.invoke("IsReRunsOnly", [Favorite.FavoriteID]).then((json)=>{
  if (!json || !json.Result) return null;
  Favorite.IsReRunsOnly=json.Result;
  return json.Result;
});
   }

    // RemoveFavorite
   RemoveFavorite(Favorite) {
  return this.sageAPI.invoke("RemoveFavorite", [Favorite.FavoriteID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDeleteAfterAutomaticConversion
   SetDeleteAfterAutomaticConversion(Favorite, DeleteAfterAutomaticConversion) {
  return this.sageAPI.invoke("SetDeleteAfterAutomaticConversion", [Favorite.FavoriteID,DeleteAfterAutomaticConversion]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDontAutodelete
   SetDontAutodelete(Favorite, DontAutoDelete) {
  return this.sageAPI.invoke("SetDontAutodelete", [Favorite.FavoriteID,DontAutoDelete]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteAutomaticConversionDestination
   SetFavoriteAutomaticConversionDestination(Favorite, Folder) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionDestination", [Favorite.FavoriteID,Folder]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteAutomaticConversionFormat
   SetFavoriteAutomaticConversionFormat(Favorite, Format) {
  return this.sageAPI.invoke("SetFavoriteAutomaticConversionFormat", [Favorite.FavoriteID,Format]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteCategories
   SetFavoriteCategories(Favorite, Category, SubCategory) {
  return this.sageAPI.invoke("SetFavoriteCategories", [Favorite.FavoriteID,Category,SubCategory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteChannel
   SetFavoriteChannel(Favorite, Channel) {
  return this.sageAPI.invoke("SetFavoriteChannel", [Favorite.FavoriteID,Channel]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteEnabled
   SetFavoriteEnabled(Favorite, Enabled) {
  return this.sageAPI.invoke("SetFavoriteEnabled", [Favorite.FavoriteID,Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteKeyword
   SetFavoriteKeyword(Favorite, Keyword) {
  return this.sageAPI.invoke("SetFavoriteKeyword", [Favorite.FavoriteID,Keyword]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteNetwork
   SetFavoriteNetwork(Favorite, Network) {
  return this.sageAPI.invoke("SetFavoriteNetwork", [Favorite.FavoriteID,Network]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteParentalRating
   SetFavoriteParentalRating(Favorite, ParentalRating) {
  return this.sageAPI.invoke("SetFavoriteParentalRating", [Favorite.FavoriteID,ParentalRating]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoritePerson
   SetFavoritePerson(Favorite, Person, Role) {
  return this.sageAPI.invoke("SetFavoritePerson", [Favorite.FavoriteID,Person,Role]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteProperty
   SetFavoriteProperty(Favorite, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetFavoriteProperty", [Favorite.FavoriteID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteQuality
   SetFavoriteQuality(Favorite, Quality) {
  return this.sageAPI.invoke("SetFavoriteQuality", [Favorite.FavoriteID,Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteRated
   SetFavoriteRated(Favorite, Rated) {
  return this.sageAPI.invoke("SetFavoriteRated", [Favorite.FavoriteID,Rated]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteTimeslot
   SetFavoriteTimeslot(Favorite, Timeslot) {
  return this.sageAPI.invoke("SetFavoriteTimeslot", [Favorite.FavoriteID,Timeslot]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteTitle
   SetFavoriteTitle(Favorite, Title) {
  return this.sageAPI.invoke("SetFavoriteTitle", [Favorite.FavoriteID,Title]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFavoriteYear
   SetFavoriteYear(Favorite, Year) {
  return this.sageAPI.invoke("SetFavoriteYear", [Favorite.FavoriteID,Year]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetKeepAtMost
   SetKeepAtMost(Favorite, NumberToKeep) {
  return this.sageAPI.invoke("SetKeepAtMost", [Favorite.FavoriteID,NumberToKeep]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRunStatus
   SetRunStatus(Favorite, FirstRuns, ReRuns) {
  return this.sageAPI.invoke("SetRunStatus", [Favorite.FavoriteID,FirstRuns,ReRuns]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetStartPadding
   SetStartPadding(Favorite, StartPadding) {
  return this.sageAPI.invoke("SetStartPadding", [Favorite.FavoriteID,StartPadding]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetStopPadding
   SetStopPadding(Favorite, StopPadding) {
  return this.sageAPI.invoke("SetStopPadding", [Favorite.FavoriteID,StopPadding]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UpdateFavorite
   UpdateFavorite(Favorite, Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
  return this.sageAPI.invoke("UpdateFavorite", [Favorite.FavoriteID,Title,FirstRuns,ReRuns,Category,SubCategory,Person,RoleForPerson,Rated,Year,ParentalRating,Network,ChannelCallSign,Timeslot,Keyword]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default FavoriteAPI;
