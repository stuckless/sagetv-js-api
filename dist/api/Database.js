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
    global.Database = mod.exports;
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

  var Database = function () {
    function Database(sageAPI) {
      _classCallCheck(this, Database);

      this.sageAPI = sageAPI;
    }

    // DataIntersection


    _createClass(Database, [{
      key: "DataIntersection",
      value: function DataIntersection(DataSet1, DataSet2) {
        return this.sageAPI.invoke("DataIntersection", [DataSet1, DataSet2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DataUnion",
      value: function DataUnion(DataSet1, DataSet2) {
        return this.sageAPI.invoke("DataUnion", [DataSet1, DataSet2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FilterByBoolMethod",
      value: function FilterByBoolMethod(Data, Method, MatchValue) {
        return this.sageAPI.invoke("FilterByBoolMethod", [Data, Method, MatchValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FilterByMethod",
      value: function FilterByMethod(Data, Method, MatchValue, MatchedPasses) {
        return this.sageAPI.invoke("FilterByMethod", [Data, Method, MatchValue, MatchedPasses]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FilterByMethodRegex",
      value: function FilterByMethodRegex(Data, Method, RegexPattern, MatchedPasses, CompleteMatch) {
        return this.sageAPI.invoke("FilterByMethodRegex", [Data, Method, RegexPattern, MatchedPasses, CompleteMatch]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FilterByRange",
      value: function FilterByRange(Data, Method, LowerBoundInclusive, UpperBoundExclusive, KeepWithinBounds) {
        return this.sageAPI.invoke("FilterByRange", [Data, Method, LowerBoundInclusive, UpperBoundExclusive, KeepWithinBounds]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringsOnChannelAtTime",
      value: function GetAiringsOnChannelAtTime(Channel, StartTime, EndTime, MustStartDuringTime) {
        return this.sageAPI.invoke("GetAiringsOnChannelAtTime", [Channel, StartTime, EndTime, MustStartDuringTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAiringsOnViewableChannelsAtTime",
      value: function GetAiringsOnViewableChannelsAtTime(StartTime, EndTime, MustStartDuringTime) {
        return this.sageAPI.invoke("GetAiringsOnViewableChannelsAtTime", [StartTime, EndTime, MustStartDuringTime]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllCategories",
      value: function GetAllCategories() {
        return this.sageAPI.invoke("GetAllCategories", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllCategories",
      value: function GetAllCategories(MediaMask) {
        return this.sageAPI.invoke("GetAllCategories", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllGroupingCategories",
      value: function GetAllGroupingCategories() {
        return this.sageAPI.invoke("GetAllGroupingCategories", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllGroupingCategories",
      value: function GetAllGroupingCategories(MediaMask) {
        return this.sageAPI.invoke("GetAllGroupingCategories", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllNonMusicWithPerson",
      value: function GetAllNonMusicWithPerson(Person) {
        return this.sageAPI.invoke("GetAllNonMusicWithPerson", [Person]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllNonMusicWithTitle",
      value: function GetAllNonMusicWithTitle(Title) {
        return this.sageAPI.invoke("GetAllNonMusicWithTitle", [Title]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllPeople",
      value: function GetAllPeople() {
        return this.sageAPI.invoke("GetAllPeople", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllPeople",
      value: function GetAllPeople(MediaMask) {
        return this.sageAPI.invoke("GetAllPeople", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllTitles",
      value: function GetAllTitles() {
        return this.sageAPI.invoke("GetAllTitles", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllTitles",
      value: function GetAllTitles(MediaMask) {
        return this.sageAPI.invoke("GetAllTitles", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChannelsOnLineup",
      value: function GetChannelsOnLineup(Lineup) {
        return this.sageAPI.invoke("GetChannelsOnLineup", [Lineup]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDatabaseLastModifiedTime",
      value: function GetDatabaseLastModifiedTime(MediaMask) {
        return this.sageAPI.invoke("GetDatabaseLastModifiedTime", [MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetFilesWithImportPrefix",
      value: function GetFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
        return this.sageAPI.invoke("GetFilesWithImportPrefix", [MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaFilesWithImportPrefix",
      value: function GetMediaFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
        return this.sageAPI.invoke("GetMediaFilesWithImportPrefix", [MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaMask",
      value: function GetMediaMask(DBObject) {
        return this.sageAPI.invoke("GetMediaMask", [DBObject]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GroupByArrayMethod",
      value: function GroupByArrayMethod(Data, Method) {
        return this.sageAPI.invoke("GroupByArrayMethod", [Data, Method]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GroupByMethod",
      value: function GroupByMethod(Data, Method) {
        return this.sageAPI.invoke("GroupByMethod", [Data, Method]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasMediaMask",
      value: function HasMediaMask(DBObject, MediaMask) {
        return this.sageAPI.invoke("HasMediaMask", [DBObject, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsDatabaseMemoryMaxed",
      value: function IsDatabaseMemoryMaxed() {
        return this.sageAPI.invoke("IsDatabaseMemoryMaxed", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByPerson",
      value: function SearchByPerson(SearchString) {
        return this.sageAPI.invoke("SearchByPerson", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByPerson",
      value: function SearchByPerson(SearchString, MediaMask) {
        return this.sageAPI.invoke("SearchByPerson", [SearchString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByText",
      value: function SearchByText(SearchString) {
        return this.sageAPI.invoke("SearchByText", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByText",
      value: function SearchByText(SearchString, MediaMask) {
        return this.sageAPI.invoke("SearchByText", [SearchString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByTitle",
      value: function SearchByTitle(SearchString) {
        return this.sageAPI.invoke("SearchByTitle", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchByTitle",
      value: function SearchByTitle(SearchString, MediaMask) {
        return this.sageAPI.invoke("SearchByTitle", [SearchString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForChannel",
      value: function SearchForChannel(SearchString) {
        return this.sageAPI.invoke("SearchForChannel", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForChannel",
      value: function SearchForChannel(SearchString, IncludeNonViewable) {
        return this.sageAPI.invoke("SearchForChannel", [SearchString, IncludeNonViewable]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeople",
      value: function SearchForPeople(SearchString) {
        return this.sageAPI.invoke("SearchForPeople", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeople",
      value: function SearchForPeople(SearchString, MediaMask) {
        return this.sageAPI.invoke("SearchForPeople", [SearchString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeopleNTE",
      value: function SearchForPeopleNTE(NTEString) {
        return this.sageAPI.invoke("SearchForPeopleNTE", [NTEString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeopleNTE",
      value: function SearchForPeopleNTE(NTEString, MediaMask) {
        return this.sageAPI.invoke("SearchForPeopleNTE", [NTEString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeopleRegex",
      value: function SearchForPeopleRegex(RegexPattern) {
        return this.sageAPI.invoke("SearchForPeopleRegex", [RegexPattern]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForPeopleRegex",
      value: function SearchForPeopleRegex(RegexPattern, MediaMask) {
        return this.sageAPI.invoke("SearchForPeopleRegex", [RegexPattern, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitles",
      value: function SearchForTitles(SearchString) {
        return this.sageAPI.invoke("SearchForTitles", [SearchString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitles",
      value: function SearchForTitles(SearchString, MediaMask) {
        return this.sageAPI.invoke("SearchForTitles", [SearchString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitlesNTE",
      value: function SearchForTitlesNTE(NTEString) {
        return this.sageAPI.invoke("SearchForTitlesNTE", [NTEString]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitlesNTE",
      value: function SearchForTitlesNTE(NTEString, MediaMask) {
        return this.sageAPI.invoke("SearchForTitlesNTE", [NTEString, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitlesRegex",
      value: function SearchForTitlesRegex(RegexPattern) {
        return this.sageAPI.invoke("SearchForTitlesRegex", [RegexPattern]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchForTitlesRegex",
      value: function SearchForTitlesRegex(RegexPattern, MediaMask) {
        return this.sageAPI.invoke("SearchForTitlesRegex", [RegexPattern, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedExactFields",
      value: function SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
        return this.sageAPI.invoke("SearchSelectedExactFields", [SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedExactFields",
      value: function SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
        return this.sageAPI.invoke("SearchSelectedExactFields", [SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFields",
      value: function SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
        return this.sageAPI.invoke("SearchSelectedFields", [SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFields",
      value: function SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
        return this.sageAPI.invoke("SearchSelectedFields", [SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFieldsNTE",
      value: function SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
        return this.sageAPI.invoke("SearchSelectedFieldsNTE", [NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFieldsNTE",
      value: function SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
        return this.sageAPI.invoke("SearchSelectedFieldsNTE", [NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFieldsRegex",
      value: function SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
        return this.sageAPI.invoke("SearchSelectedFieldsRegex", [RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SearchSelectedFieldsRegex",
      value: function SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
        return this.sageAPI.invoke("SearchSelectedFieldsRegex", [RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "Sort",
      value: function Sort(Data, Descending, SortTechnique) {
        return this.sageAPI.invoke("Sort", [Data, Descending, SortTechnique]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SortLexical",
      value: function SortLexical(Data, Descending, SortByMethod) {
        return this.sageAPI.invoke("SortLexical", [Data, Descending, SortByMethod]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "StripLeadingArticles",
      value: function StripLeadingArticles(Text) {
        return this.sageAPI.invoke("StripLeadingArticles", [Text]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return Database;
  }();

  exports.default = Database;
});