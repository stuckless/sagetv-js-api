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
    global.ShowAPI = mod.exports;
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

  var ShowAPI = function () {
    function ShowAPI(sageAPI) {
      _classCallCheck(this, ShowAPI);

      this.sageAPI = sageAPI;
    }

    // AddShow


    _createClass(ShowAPI, [{
      key: "AddShow",
      value: function AddShow(Title, IsFirstRun, Episode, Description, Duration, Category, SubCategory, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate) {
        return this.sageAPI.invoke("AddShow", [Title, IsFirstRun, Episode, Description, Duration, Category, SubCategory, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddShow",
      value: function AddShow(Title, IsFirstRun, Episode, Description, Duration, Categories, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate, SeasonNumber, EpisodeNumber) {
        return this.sageAPI.invoke("AddShow", [Title, IsFirstRun, Episode, Description, Duration, Categories, PeopleList, RolesListForPeopleList, Rated, ExpandedRatingsList, Year, ParentalRating, MiscList, ExternalID, Language, OriginalAirDate, SeasonNumber, EpisodeNumber]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringsForShow",
      value: function GetAiringsForShow(Show, StartingAfterTime) {
        return this.sageAPI.invoke("GetAiringsForShow", ['show:' + Show.ShowID, StartingAfterTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMovieImage",
      value: function GetMovieImage(Show, Thumb) {
        return this.sageAPI.invoke("GetMovieImage", ['show:' + Show.ShowID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMovieImageAtIndex",
      value: function GetMovieImageAtIndex(Show, Index, Thumb) {
        return this.sageAPI.invoke("GetMovieImageAtIndex", ['show:' + Show.ShowID, Index, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMovieImageCount",
      value: function GetMovieImageCount(Show) {
        if (typeof Show.MovieImageCount !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.MovieImageCount);
        });
        return this.sageAPI.invoke("GetMovieImageCount", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.MovieImageCount = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetMovieImageURL",
      value: function GetMovieImageURL(Show, Thumb) {
        return this.sageAPI.invoke("GetMovieImageURL", ['show:' + Show.ShowID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMovieImageURLAtIndex",
      value: function GetMovieImageURLAtIndex(Show, Index, Thumb) {
        return this.sageAPI.invoke("GetMovieImageURLAtIndex", ['show:' + Show.ShowID, Index, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMovieStarRating",
      value: function GetMovieStarRating(Show) {
        if (typeof Show.MovieStarRating !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.MovieStarRating);
        });
        return this.sageAPI.invoke("GetMovieStarRating", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.MovieStarRating = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetOriginalAiringDate",
      value: function GetOriginalAiringDate(Show) {
        if (typeof Show.OriginalAiringDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.OriginalAiringDate);
        });
        return this.sageAPI.invoke("GetOriginalAiringDate", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.OriginalAiringDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPeopleAndCharacterInShowInRole",
      value: function GetPeopleAndCharacterInShowInRole(Show, Role) {
        return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRole", ['show:' + Show.ShowID, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleAndCharacterInShowInRoles",
      value: function GetPeopleAndCharacterInShowInRoles(Show, RoleList) {
        return this.sageAPI.invoke("GetPeopleAndCharacterInShowInRoles", ['show:' + Show.ShowID, RoleList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleAndCharacterListInShow",
      value: function GetPeopleAndCharacterListInShow(Show) {
        if (typeof Show.PeopleAndCharacterListInShow !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.PeopleAndCharacterListInShow);
        });
        return this.sageAPI.invoke("GetPeopleAndCharacterListInShow", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.PeopleAndCharacterListInShow = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPeopleAndCharacterListInShowInRole",
      value: function GetPeopleAndCharacterListInShowInRole(Show, Role) {
        return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRole", ['show:' + Show.ShowID, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleAndCharacterListInShowInRoles",
      value: function GetPeopleAndCharacterListInShowInRoles(Show, RoleList) {
        return this.sageAPI.invoke("GetPeopleAndCharacterListInShowInRoles", ['show:' + Show.ShowID, RoleList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleInShow",
      value: function GetPeopleInShow(Show) {
        if (typeof Show.PeopleInShow !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.PeopleInShow);
        });
        return this.sageAPI.invoke("GetPeopleInShow", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.PeopleInShow = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPeopleInShowInRole",
      value: function GetPeopleInShowInRole(Show, Role) {
        return this.sageAPI.invoke("GetPeopleInShowInRole", ['show:' + Show.ShowID, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleInShowInRoles",
      value: function GetPeopleInShowInRoles(Show, RoleList) {
        return this.sageAPI.invoke("GetPeopleInShowInRoles", ['show:' + Show.ShowID, RoleList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleListInShow",
      value: function GetPeopleListInShow(Show) {
        if (typeof Show.PeopleListInShow !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.PeopleListInShow);
        });
        return this.sageAPI.invoke("GetPeopleListInShow", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.PeopleListInShow = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPeopleListInShowInRole",
      value: function GetPeopleListInShowInRole(Show, Role) {
        return this.sageAPI.invoke("GetPeopleListInShowInRole", ['show:' + Show.ShowID, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPeopleListInShowInRoles",
      value: function GetPeopleListInShowInRoles(Show, RoleList) {
        return this.sageAPI.invoke("GetPeopleListInShowInRoles", ['show:' + Show.ShowID, RoleList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPersonListInShow",
      value: function GetPersonListInShow(Show) {
        if (typeof Show.PersonListInShow !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.PersonListInShow);
        });
        return this.sageAPI.invoke("GetPersonListInShow", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.PersonListInShow = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPersonListInShowInRole",
      value: function GetPersonListInShowInRole(Show, Role) {
        return this.sageAPI.invoke("GetPersonListInShowInRole", ['show:' + Show.ShowID, Role]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPersonListInShowInRoles",
      value: function GetPersonListInShowInRoles(Show, RoleList) {
        return this.sageAPI.invoke("GetPersonListInShowInRoles", ['show:' + Show.ShowID, RoleList]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRoleTypes",
      value: function GetRoleTypes() {
        return this.sageAPI.invoke("GetRoleTypes", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetRolesInShow",
      value: function GetRolesInShow(Show) {
        if (typeof Show.RolesInShow !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.RolesInShow);
        });
        return this.sageAPI.invoke("GetRolesInShow", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.RolesInShow = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSDEPGInProgressSportStatus",
      value: function GetSDEPGInProgressSportStatus(ExternalIDs) {
        return this.sageAPI.invoke("GetSDEPGInProgressSportStatus", [ExternalIDs]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetShowCategoriesList",
      value: function GetShowCategoriesList(Show) {
        if (typeof Show.ShowCategoriesList !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowCategoriesList);
        });
        return this.sageAPI.invoke("GetShowCategoriesList", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowCategoriesList = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowCategoriesString",
      value: function GetShowCategoriesString(Show) {
        if (typeof Show.ShowCategoriesString !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowCategoriesString);
        });
        return this.sageAPI.invoke("GetShowCategoriesString", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowCategoriesString = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowCategoriesString",
      value: function GetShowCategoriesString(Show, Delimiter) {
        return this.sageAPI.invoke("GetShowCategoriesString", ['show:' + Show.ShowID, Delimiter]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetShowCategory",
      value: function GetShowCategory(Show) {
        if (typeof Show.ShowCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowCategory);
        });
        return this.sageAPI.invoke("GetShowCategory", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowDescription",
      value: function GetShowDescription(Show) {
        if (typeof Show.ShowDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowDescription);
        });
        return this.sageAPI.invoke("GetShowDescription", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowDuration",
      value: function GetShowDuration(Show) {
        if (typeof Show.ShowDuration !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowDuration);
        });
        return this.sageAPI.invoke("GetShowDuration", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowDuration = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowEpisode",
      value: function GetShowEpisode(Show) {
        if (typeof Show.ShowEpisode !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowEpisode);
        });
        return this.sageAPI.invoke("GetShowEpisode", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowEpisode = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowEpisodeNumber",
      value: function GetShowEpisodeNumber(Show) {
        if (typeof Show.ShowEpisodeNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowEpisodeNumber);
        });
        return this.sageAPI.invoke("GetShowEpisodeNumber", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowEpisodeNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowExpandedRatings",
      value: function GetShowExpandedRatings(Show) {
        if (typeof Show.ShowExpandedRatings !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowExpandedRatings);
        });
        return this.sageAPI.invoke("GetShowExpandedRatings", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowExpandedRatings = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowExternalID",
      value: function GetShowExternalID(Show) {
        if (typeof Show.ShowExternalID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowExternalID);
        });
        return this.sageAPI.invoke("GetShowExternalID", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowExternalID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowForExternalID",
      value: function GetShowForExternalID(ExternalID) {
        return this.sageAPI.invoke("GetShowForExternalID", [ExternalID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetShowImage",
      value: function GetShowImage(Show, Type, Index, Fallback) {
        return this.sageAPI.invoke("GetShowImage", ['show:' + Show.ShowID, Type, Index, Fallback]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetShowImageCount",
      value: function GetShowImageCount(Show, Type) {
        return this.sageAPI.invoke("GetShowImageCount", ['show:' + Show.ShowID, Type]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetShowLanguage",
      value: function GetShowLanguage(Show) {
        if (typeof Show.ShowLanguage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowLanguage);
        });
        return this.sageAPI.invoke("GetShowLanguage", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowLanguage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowMisc",
      value: function GetShowMisc(Show) {
        if (typeof Show.ShowMisc !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowMisc);
        });
        return this.sageAPI.invoke("GetShowMisc", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowMisc = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowParentalRating",
      value: function GetShowParentalRating(Show) {
        if (typeof Show.ShowParentalRating !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowParentalRating);
        });
        return this.sageAPI.invoke("GetShowParentalRating", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowParentalRating = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowRated",
      value: function GetShowRated(Show) {
        if (typeof Show.ShowRated !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowRated);
        });
        return this.sageAPI.invoke("GetShowRated", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowRated = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowSeasonNumber",
      value: function GetShowSeasonNumber(Show) {
        if (typeof Show.ShowSeasonNumber !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowSeasonNumber);
        });
        return this.sageAPI.invoke("GetShowSeasonNumber", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowSeasonNumber = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowSeriesInfo",
      value: function GetShowSeriesInfo(Show) {
        if (typeof Show.ShowSeriesInfo !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowSeriesInfo);
        });
        return this.sageAPI.invoke("GetShowSeriesInfo", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowSeriesInfo = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowSubCategory",
      value: function GetShowSubCategory(Show) {
        if (typeof Show.ShowSubCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowSubCategory);
        });
        return this.sageAPI.invoke("GetShowSubCategory", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowSubCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowTitle",
      value: function GetShowTitle(Show) {
        if (typeof Show.ShowTitle !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowTitle);
        });
        return this.sageAPI.invoke("GetShowTitle", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowTitle = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetShowYear",
      value: function GetShowYear(Show) {
        if (typeof Show.ShowYear !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.ShowYear);
        });
        return this.sageAPI.invoke("GetShowYear", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.ShowYear = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "HasMovieImage",
      value: function HasMovieImage(Show) {
        if (typeof Show.HasMovieImage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.HasMovieImage);
        });
        return this.sageAPI.invoke("HasMovieImage", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.HasMovieImage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsMovie",
      value: function IsMovie(Show) {
        if (typeof Show.IsMovie !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.IsMovie);
        });
        return this.sageAPI.invoke("IsMovie", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.IsMovie = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsSDEPGInProgressSport",
      value: function IsSDEPGInProgressSport(ExternalIDs) {
        return this.sageAPI.invoke("IsSDEPGInProgressSport", [ExternalIDs]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsShowEPGDataUnique",
      value: function IsShowEPGDataUnique(Show) {
        if (typeof Show.IsShowEPGDataUnique !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Show.IsShowEPGDataUnique);
        });
        return this.sageAPI.invoke("IsShowEPGDataUnique", ['show:' + Show.ShowID]).then(function (json) {
          if (!json || !json.Result) return null;
          Show.IsShowEPGDataUnique = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsShowFirstRun",
      value: function IsShowFirstRun(Airing) {
        return this.sageAPI.invoke("IsShowFirstRun", [Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsShowObject",
      value: function IsShowObject(Show) {
        return this.sageAPI.invoke("IsShowObject", ['show:' + Show.ShowID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsShowReRun",
      value: function IsShowReRun(Airing) {
        return this.sageAPI.invoke("IsShowReRun", [Airing]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return ShowAPI;
  }();

  // Field Constants for Show
  ShowAPI.MovieImageCount = "MovieImageCount";
  ShowAPI.MovieStarRating = "MovieStarRating";
  ShowAPI.OriginalAiringDate = "OriginalAiringDate";
  ShowAPI.PeopleAndCharacterListInShow = "PeopleAndCharacterListInShow";
  ShowAPI.PeopleInShow = "PeopleInShow";
  ShowAPI.PeopleListInShow = "PeopleListInShow";
  ShowAPI.PersonListInShow = "PersonListInShow";
  ShowAPI.RolesInShow = "RolesInShow";
  ShowAPI.ShowCategoriesList = "ShowCategoriesList";
  ShowAPI.ShowCategoriesString = "ShowCategoriesString";
  ShowAPI.ShowCategory = "ShowCategory";
  ShowAPI.ShowDescription = "ShowDescription";
  ShowAPI.ShowDuration = "ShowDuration";
  ShowAPI.ShowEpisode = "ShowEpisode";
  ShowAPI.ShowEpisodeNumber = "ShowEpisodeNumber";
  ShowAPI.ShowExpandedRatings = "ShowExpandedRatings";
  ShowAPI.ShowExternalID = "ShowExternalID";
  ShowAPI.ShowLanguage = "ShowLanguage";
  ShowAPI.ShowMisc = "ShowMisc";
  ShowAPI.ShowParentalRating = "ShowParentalRating";
  ShowAPI.ShowRated = "ShowRated";
  ShowAPI.ShowSeasonNumber = "ShowSeasonNumber";
  ShowAPI.ShowSeriesInfo = "ShowSeriesInfo";
  ShowAPI.ShowSubCategory = "ShowSubCategory";
  ShowAPI.ShowTitle = "ShowTitle";
  ShowAPI.ShowYear = "ShowYear";
  ShowAPI.HasMovieImage = "HasMovieImage";
  ShowAPI.IsMovie = "IsMovie";
  ShowAPI.IsShowEPGDataUnique = "IsShowEPGDataUnique";
  exports.default = ShowAPI;
});