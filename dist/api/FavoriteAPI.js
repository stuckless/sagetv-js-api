(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.FavoriteAPI = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FavoriteAPI = function () {
    function FavoriteAPI(sageAPI) {
      _classCallCheck(this, FavoriteAPI);

      this.sageAPI = sageAPI;
    }

    // AddFavorite


    _createClass(FavoriteAPI, [{
      key: "AddFavorite",
      value: function AddFavorite(Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
        return this.sageAPI.invoke("AddFavorite", [Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ConfirmManualRecordOverFavoritePriority",
      value: function ConfirmManualRecordOverFavoritePriority(ManualRecordAiring, FavoriteAiring) {
        return this.sageAPI.invoke("ConfirmManualRecordOverFavoritePriority", [ManualRecordAiring, FavoriteAiring]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateFavoritePriority",
      value: function CreateFavoritePriority(HigherPriorityFavorite, LowerPriorityFavorite) {
        return this.sageAPI.invoke("CreateFavoritePriority", [HigherPriorityFavorite, LowerPriorityFavorite]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DoesFavoriteMatchAiring",
      value: function DoesFavoriteMatchAiring(Favorite, Airing) {
        return this.sageAPI.invoke("DoesFavoriteMatchAiring", ['favorite:' + Favorite.FavoriteID, Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFavoriteAirings",
      value: function GetFavoriteAirings(Favorite) {
        if (typeof Favorite.FavoriteAirings !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteAirings);
        });
        return this.sageAPI.invoke("GetFavoriteAirings", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteAirings = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteAutomaticConversionDestination",
      value: function GetFavoriteAutomaticConversionDestination(Favorite) {
        if (typeof Favorite.FavoriteAutomaticConversionDestination !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteAutomaticConversionDestination);
        });
        return this.sageAPI.invoke("GetFavoriteAutomaticConversionDestination", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteAutomaticConversionDestination = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteAutomaticConversionFormat",
      value: function GetFavoriteAutomaticConversionFormat(Favorite) {
        if (typeof Favorite.FavoriteAutomaticConversionFormat !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteAutomaticConversionFormat);
        });
        return this.sageAPI.invoke("GetFavoriteAutomaticConversionFormat", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteAutomaticConversionFormat = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteCategory",
      value: function GetFavoriteCategory(Favorite) {
        if (typeof Favorite.FavoriteCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteCategory);
        });
        return this.sageAPI.invoke("GetFavoriteCategory", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteChannel",
      value: function GetFavoriteChannel(Favorite) {
        if (typeof Favorite.FavoriteChannel !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteChannel);
        });
        return this.sageAPI.invoke("GetFavoriteChannel", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteChannel = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteDescription",
      value: function GetFavoriteDescription(Favorite) {
        if (typeof Favorite.FavoriteDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteDescription);
        });
        return this.sageAPI.invoke("GetFavoriteDescription", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteForAiring",
      value: function GetFavoriteForAiring(Airing) {
        return this.sageAPI.invoke("GetFavoriteForAiring", [Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFavoriteForID",
      value: function GetFavoriteForID(FavoriteID) {
        return this.sageAPI.invoke("GetFavoriteForID", [FavoriteID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFavoriteID",
      value: function GetFavoriteID(Favorite) {
        if (typeof Favorite.FavoriteID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteID);
        });
        return this.sageAPI.invoke("GetFavoriteID", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteKeyword",
      value: function GetFavoriteKeyword(Favorite) {
        if (typeof Favorite.FavoriteKeyword !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteKeyword);
        });
        return this.sageAPI.invoke("GetFavoriteKeyword", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteKeyword = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteNetwork",
      value: function GetFavoriteNetwork(Favorite) {
        if (typeof Favorite.FavoriteNetwork !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteNetwork);
        });
        return this.sageAPI.invoke("GetFavoriteNetwork", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteNetwork = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteParentalRating",
      value: function GetFavoriteParentalRating(Favorite) {
        if (typeof Favorite.FavoriteParentalRating !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteParentalRating);
        });
        return this.sageAPI.invoke("GetFavoriteParentalRating", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteParentalRating = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoritePerson",
      value: function GetFavoritePerson(Favorite) {
        if (typeof Favorite.FavoritePerson !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoritePerson);
        });
        return this.sageAPI.invoke("GetFavoritePerson", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoritePerson = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoritePersonRole",
      value: function GetFavoritePersonRole(Favorite) {
        if (typeof Favorite.FavoritePersonRole !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoritePersonRole);
        });
        return this.sageAPI.invoke("GetFavoritePersonRole", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoritePersonRole = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoritePresentationName",
      value: function GetFavoritePresentationName(Favorite) {
        if (typeof Favorite.FavoritePresentationName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoritePresentationName);
        });
        return this.sageAPI.invoke("GetFavoritePresentationName", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoritePresentationName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoritePresentationPrefix",
      value: function GetFavoritePresentationPrefix(Favorite) {
        if (typeof Favorite.FavoritePresentationPrefix !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoritePresentationPrefix);
        });
        return this.sageAPI.invoke("GetFavoritePresentationPrefix", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoritePresentationPrefix = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteProperties",
      value: function GetFavoriteProperties(Favorite) {
        if (typeof Favorite.FavoriteProperties !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteProperties);
        });
        return this.sageAPI.invoke("GetFavoriteProperties", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteProperties = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteProperty",
      value: function GetFavoriteProperty(Favorite, PropertyName) {
        return this.sageAPI.invoke("GetFavoriteProperty", ['favorite:' + Favorite.FavoriteID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFavoriteQuality",
      value: function GetFavoriteQuality(Favorite) {
        if (typeof Favorite.FavoriteQuality !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteQuality);
        });
        return this.sageAPI.invoke("GetFavoriteQuality", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteQuality = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteRated",
      value: function GetFavoriteRated(Favorite) {
        if (typeof Favorite.FavoriteRated !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteRated);
        });
        return this.sageAPI.invoke("GetFavoriteRated", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteRated = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteSubCategory",
      value: function GetFavoriteSubCategory(Favorite) {
        if (typeof Favorite.FavoriteSubCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteSubCategory);
        });
        return this.sageAPI.invoke("GetFavoriteSubCategory", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteSubCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteTimeslot",
      value: function GetFavoriteTimeslot(Favorite) {
        if (typeof Favorite.FavoriteTimeslot !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteTimeslot);
        });
        return this.sageAPI.invoke("GetFavoriteTimeslot", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteTimeslot = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteTitle",
      value: function GetFavoriteTitle(Favorite) {
        if (typeof Favorite.FavoriteTitle !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteTitle);
        });
        return this.sageAPI.invoke("GetFavoriteTitle", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteTitle = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavoriteYear",
      value: function GetFavoriteYear(Favorite) {
        if (typeof Favorite.FavoriteYear !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.FavoriteYear);
        });
        return this.sageAPI.invoke("GetFavoriteYear", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.FavoriteYear = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetFavorites",
      value: function GetFavorites() {
        return this.sageAPI.invoke("GetFavorites", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFavoritesForAiring",
      value: function GetFavoritesForAiring(Airing) {
        return this.sageAPI.invoke("GetFavoritesForAiring", [Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetKeepAtMost",
      value: function GetKeepAtMost(Favorite) {
        if (typeof Favorite.KeepAtMost !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.KeepAtMost);
        });
        return this.sageAPI.invoke("GetKeepAtMost", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.KeepAtMost = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetStartPadding",
      value: function GetStartPadding(Favorite) {
        if (typeof Favorite.StartPadding !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.StartPadding);
        });
        return this.sageAPI.invoke("GetStartPadding", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.StartPadding = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetStopPadding",
      value: function GetStopPadding(Favorite) {
        if (typeof Favorite.StopPadding !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.StopPadding);
        });
        return this.sageAPI.invoke("GetStopPadding", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.StopPadding = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsAutoDelete",
      value: function IsAutoDelete(Favorite) {
        if (typeof Favorite.IsAutoDelete !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsAutoDelete);
        });
        return this.sageAPI.invoke("IsAutoDelete", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsAutoDelete = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsDeleteAfterAutomaticConversion",
      value: function IsDeleteAfterAutomaticConversion(Favorite) {
        if (typeof Favorite.IsDeleteAfterAutomaticConversion !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsDeleteAfterAutomaticConversion);
        });
        return this.sageAPI.invoke("IsDeleteAfterAutomaticConversion", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsDeleteAfterAutomaticConversion = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFavoriteEnabled",
      value: function IsFavoriteEnabled(Favorite) {
        if (typeof Favorite.IsFavoriteEnabled !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsFavoriteEnabled);
        });
        return this.sageAPI.invoke("IsFavoriteEnabled", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsFavoriteEnabled = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFavoriteObject",
      value: function IsFavoriteObject(Favorite) {
        return this.sageAPI.invoke("IsFavoriteObject", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsFirstRuns",
      value: function IsFirstRuns(Favorite) {
        if (typeof Favorite.IsFirstRuns !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsFirstRuns);
        });
        return this.sageAPI.invoke("IsFirstRuns", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsFirstRuns = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFirstRunsAndReRuns",
      value: function IsFirstRunsAndReRuns(Favorite) {
        if (typeof Favorite.IsFirstRunsAndReRuns !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsFirstRunsAndReRuns);
        });
        return this.sageAPI.invoke("IsFirstRunsAndReRuns", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsFirstRunsAndReRuns = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsFirstRunsOnly",
      value: function IsFirstRunsOnly(Favorite) {
        if (typeof Favorite.IsFirstRunsOnly !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsFirstRunsOnly);
        });
        return this.sageAPI.invoke("IsFirstRunsOnly", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsFirstRunsOnly = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsReRuns",
      value: function IsReRuns(Favorite) {
        if (typeof Favorite.IsReRuns !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsReRuns);
        });
        return this.sageAPI.invoke("IsReRuns", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsReRuns = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsReRunsOnly",
      value: function IsReRunsOnly(Favorite) {
        if (typeof Favorite.IsReRunsOnly !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Favorite.IsReRunsOnly);
        });
        return this.sageAPI.invoke("IsReRunsOnly", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (!json || !json.Result) return null;
          Favorite.IsReRunsOnly = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "RemoveFavorite",
      value: function RemoveFavorite(Favorite) {
        return this.sageAPI.invoke("RemoveFavorite", ['favorite:' + Favorite.FavoriteID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDeleteAfterAutomaticConversion",
      value: function SetDeleteAfterAutomaticConversion(Favorite, DeleteAfterAutomaticConversion) {
        return this.sageAPI.invoke("SetDeleteAfterAutomaticConversion", ['favorite:' + Favorite.FavoriteID, DeleteAfterAutomaticConversion]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetDontAutodelete",
      value: function SetDontAutodelete(Favorite, DontAutoDelete) {
        return this.sageAPI.invoke("SetDontAutodelete", ['favorite:' + Favorite.FavoriteID, DontAutoDelete]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteAutomaticConversionDestination",
      value: function SetFavoriteAutomaticConversionDestination(Favorite, Folder) {
        return this.sageAPI.invoke("SetFavoriteAutomaticConversionDestination", ['favorite:' + Favorite.FavoriteID, Folder]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteAutomaticConversionFormat",
      value: function SetFavoriteAutomaticConversionFormat(Favorite, Format) {
        return this.sageAPI.invoke("SetFavoriteAutomaticConversionFormat", ['favorite:' + Favorite.FavoriteID, Format]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteCategories",
      value: function SetFavoriteCategories(Favorite, Category, SubCategory) {
        return this.sageAPI.invoke("SetFavoriteCategories", ['favorite:' + Favorite.FavoriteID, Category, SubCategory]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteChannel",
      value: function SetFavoriteChannel(Favorite, Channel) {
        return this.sageAPI.invoke("SetFavoriteChannel", ['favorite:' + Favorite.FavoriteID, Channel]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteEnabled",
      value: function SetFavoriteEnabled(Favorite, Enabled) {
        return this.sageAPI.invoke("SetFavoriteEnabled", ['favorite:' + Favorite.FavoriteID, Enabled]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteKeyword",
      value: function SetFavoriteKeyword(Favorite, Keyword) {
        return this.sageAPI.invoke("SetFavoriteKeyword", ['favorite:' + Favorite.FavoriteID, Keyword]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteNetwork",
      value: function SetFavoriteNetwork(Favorite, Network) {
        return this.sageAPI.invoke("SetFavoriteNetwork", ['favorite:' + Favorite.FavoriteID, Network]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteParentalRating",
      value: function SetFavoriteParentalRating(Favorite, ParentalRating) {
        return this.sageAPI.invoke("SetFavoriteParentalRating", ['favorite:' + Favorite.FavoriteID, ParentalRating]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoritePerson",
      value: function SetFavoritePerson(Favorite, Person, Role) {
        return this.sageAPI.invoke("SetFavoritePerson", ['favorite:' + Favorite.FavoriteID, Person, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteProperty",
      value: function SetFavoriteProperty(Favorite, PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetFavoriteProperty", ['favorite:' + Favorite.FavoriteID, PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteQuality",
      value: function SetFavoriteQuality(Favorite, Quality) {
        return this.sageAPI.invoke("SetFavoriteQuality", ['favorite:' + Favorite.FavoriteID, Quality]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteRated",
      value: function SetFavoriteRated(Favorite, Rated) {
        return this.sageAPI.invoke("SetFavoriteRated", ['favorite:' + Favorite.FavoriteID, Rated]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteTimeslot",
      value: function SetFavoriteTimeslot(Favorite, Timeslot) {
        return this.sageAPI.invoke("SetFavoriteTimeslot", ['favorite:' + Favorite.FavoriteID, Timeslot]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteTitle",
      value: function SetFavoriteTitle(Favorite, Title) {
        return this.sageAPI.invoke("SetFavoriteTitle", ['favorite:' + Favorite.FavoriteID, Title]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetFavoriteYear",
      value: function SetFavoriteYear(Favorite, Year) {
        return this.sageAPI.invoke("SetFavoriteYear", ['favorite:' + Favorite.FavoriteID, Year]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetKeepAtMost",
      value: function SetKeepAtMost(Favorite, NumberToKeep) {
        return this.sageAPI.invoke("SetKeepAtMost", ['favorite:' + Favorite.FavoriteID, NumberToKeep]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetRunStatus",
      value: function SetRunStatus(Favorite, FirstRuns, ReRuns) {
        return this.sageAPI.invoke("SetRunStatus", ['favorite:' + Favorite.FavoriteID, FirstRuns, ReRuns]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetStartPadding",
      value: function SetStartPadding(Favorite, StartPadding) {
        return this.sageAPI.invoke("SetStartPadding", ['favorite:' + Favorite.FavoriteID, StartPadding]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetStopPadding",
      value: function SetStopPadding(Favorite, StopPadding) {
        return this.sageAPI.invoke("SetStopPadding", ['favorite:' + Favorite.FavoriteID, StopPadding]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UpdateFavorite",
      value: function UpdateFavorite(Favorite, Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword) {
        return this.sageAPI.invoke("UpdateFavorite", ['favorite:' + Favorite.FavoriteID, Title, FirstRuns, ReRuns, Category, SubCategory, Person, RoleForPerson, Rated, Year, ParentalRating, Network, ChannelCallSign, Timeslot, Keyword]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return FavoriteAPI;
  }();

  // Field Constants for Favorite
  FavoriteAPI.FavoriteAirings = "FavoriteAirings";
  FavoriteAPI.FavoriteAutomaticConversionDestination = "FavoriteAutomaticConversionDestination";
  FavoriteAPI.FavoriteAutomaticConversionFormat = "FavoriteAutomaticConversionFormat";
  FavoriteAPI.FavoriteCategory = "FavoriteCategory";
  FavoriteAPI.FavoriteChannel = "FavoriteChannel";
  FavoriteAPI.FavoriteDescription = "FavoriteDescription";
  FavoriteAPI.FavoriteID = "FavoriteID";
  FavoriteAPI.FavoriteKeyword = "FavoriteKeyword";
  FavoriteAPI.FavoriteNetwork = "FavoriteNetwork";
  FavoriteAPI.FavoriteParentalRating = "FavoriteParentalRating";
  FavoriteAPI.FavoritePerson = "FavoritePerson";
  FavoriteAPI.FavoritePersonRole = "FavoritePersonRole";
  FavoriteAPI.FavoritePresentationName = "FavoritePresentationName";
  FavoriteAPI.FavoritePresentationPrefix = "FavoritePresentationPrefix";
  FavoriteAPI.FavoriteProperties = "FavoriteProperties";
  FavoriteAPI.FavoriteQuality = "FavoriteQuality";
  FavoriteAPI.FavoriteRated = "FavoriteRated";
  FavoriteAPI.FavoriteSubCategory = "FavoriteSubCategory";
  FavoriteAPI.FavoriteTimeslot = "FavoriteTimeslot";
  FavoriteAPI.FavoriteTitle = "FavoriteTitle";
  FavoriteAPI.FavoriteYear = "FavoriteYear";
  FavoriteAPI.KeepAtMost = "KeepAtMost";
  FavoriteAPI.StartPadding = "StartPadding";
  FavoriteAPI.StopPadding = "StopPadding";
  FavoriteAPI.IsAutoDelete = "IsAutoDelete";
  FavoriteAPI.IsDeleteAfterAutomaticConversion = "IsDeleteAfterAutomaticConversion";
  FavoriteAPI.IsFavoriteEnabled = "IsFavoriteEnabled";
  FavoriteAPI.IsFirstRuns = "IsFirstRuns";
  FavoriteAPI.IsFirstRunsAndReRuns = "IsFirstRunsAndReRuns";
  FavoriteAPI.IsFirstRunsOnly = "IsFirstRunsOnly";
  FavoriteAPI.IsReRuns = "IsReRuns";
  FavoriteAPI.IsReRunsOnly = "IsReRunsOnly";
  exports.default = FavoriteAPI;
});