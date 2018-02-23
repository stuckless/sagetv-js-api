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
    global.SeriesInfoAPI = mod.exports;
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

  var SeriesInfoAPI = function () {
    function SeriesInfoAPI(sageAPI) {
      _classCallCheck(this, SeriesInfoAPI);

      this.sageAPI = sageAPI;
    }

    // AddSeriesInfo


    _createClass(SeriesInfoAPI, [{
      key: "AddSeriesInfo",
      value: function AddSeriesInfo(SeriesID, Title, Network, Description, History, PremiereDate, FinaleDate, AirDOW, AirHrMin, ImageURL, People, Characters) {
        return this.sageAPI.invoke("AddSeriesInfo", [SeriesID, Title, Network, Description, History, PremiereDate, FinaleDate, AirDOW, AirHrMin, ImageURL, People, Characters]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllSeriesInfo",
      value: function GetAllSeriesInfo() {
        return this.sageAPI.invoke("GetAllSeriesInfo", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNumberOfCharactersInSeries",
      value: function GetNumberOfCharactersInSeries(SeriesInfo) {
        if (typeof SeriesInfo.NumberOfCharactersInSeries !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.NumberOfCharactersInSeries);
        });
        return this.sageAPI.invoke("GetNumberOfCharactersInSeries", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.NumberOfCharactersInSeries = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesActor",
      value: function GetSeriesActor(SeriesInfo, Index) {
        return this.sageAPI.invoke("GetSeriesActor", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesActorImage",
      value: function GetSeriesActorImage(SeriesInfo, Person, Thumb) {
        return this.sageAPI.invoke("GetSeriesActorImage", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Person, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesActorImageURL",
      value: function GetSeriesActorImageURL(SeriesInfo, Person, Thumb) {
        return this.sageAPI.invoke("GetSeriesActorImageURL", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Person, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesActorList",
      value: function GetSeriesActorList(SeriesInfo) {
        if (typeof SeriesInfo.SeriesActorList !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesActorList);
        });
        return this.sageAPI.invoke("GetSeriesActorList", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesActorList = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesCategory",
      value: function GetSeriesCategory(SeriesInfo) {
        if (typeof SeriesInfo.SeriesCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesCategory);
        });
        return this.sageAPI.invoke("GetSeriesCategory", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesCharacter",
      value: function GetSeriesCharacter(SeriesInfo, Index) {
        return this.sageAPI.invoke("GetSeriesCharacter", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesCharacterForActor",
      value: function GetSeriesCharacterForActor(SeriesInfo, Actor) {
        return this.sageAPI.invoke("GetSeriesCharacterForActor", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Actor]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesCharacterList",
      value: function GetSeriesCharacterList(SeriesInfo) {
        if (typeof SeriesInfo.SeriesCharacterList !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesCharacterList);
        });
        return this.sageAPI.invoke("GetSeriesCharacterList", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesCharacterList = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesDayOfWeek",
      value: function GetSeriesDayOfWeek(SeriesInfo) {
        if (typeof SeriesInfo.SeriesDayOfWeek !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesDayOfWeek);
        });
        return this.sageAPI.invoke("GetSeriesDayOfWeek", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesDayOfWeek = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesDescription",
      value: function GetSeriesDescription(SeriesInfo) {
        if (typeof SeriesInfo.SeriesDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesDescription);
        });
        return this.sageAPI.invoke("GetSeriesDescription", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesFinaleDate",
      value: function GetSeriesFinaleDate(SeriesInfo) {
        if (typeof SeriesInfo.SeriesFinaleDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesFinaleDate);
        });
        return this.sageAPI.invoke("GetSeriesFinaleDate", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesFinaleDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesHistory",
      value: function GetSeriesHistory(SeriesInfo) {
        if (typeof SeriesInfo.SeriesHistory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesHistory);
        });
        return this.sageAPI.invoke("GetSeriesHistory", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesHistory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesHourAndMinuteTimeslot",
      value: function GetSeriesHourAndMinuteTimeslot(SeriesInfo) {
        if (typeof SeriesInfo.SeriesHourAndMinuteTimeslot !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesHourAndMinuteTimeslot);
        });
        return this.sageAPI.invoke("GetSeriesHourAndMinuteTimeslot", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesHourAndMinuteTimeslot = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesID",
      value: function GetSeriesID(SeriesInfo) {
        if (typeof SeriesInfo.SeriesID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesID);
        });
        return this.sageAPI.invoke("GetSeriesID", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesImage",
      value: function GetSeriesImage(SeriesInfo) {
        if (typeof SeriesInfo.SeriesImage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesImage);
        });
        return this.sageAPI.invoke("GetSeriesImage", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesImage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesImage",
      value: function GetSeriesImage(SeriesInfo, Thumb) {
        return this.sageAPI.invoke("GetSeriesImage", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesImageAtIndex",
      value: function GetSeriesImageAtIndex(SeriesInfo, Index, Thumb) {
        return this.sageAPI.invoke("GetSeriesImageAtIndex", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Index, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesImageCount",
      value: function GetSeriesImageCount(SeriesInfo) {
        if (typeof SeriesInfo.SeriesImageCount !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesImageCount);
        });
        return this.sageAPI.invoke("GetSeriesImageCount", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesImageCount = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesImageURL",
      value: function GetSeriesImageURL(SeriesInfo) {
        if (typeof SeriesInfo.SeriesImageURL !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesImageURL);
        });
        return this.sageAPI.invoke("GetSeriesImageURL", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesImageURL = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesImageURL",
      value: function GetSeriesImageURL(SeriesInfo, Thumb) {
        return this.sageAPI.invoke("GetSeriesImageURL", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesImageURLAtIndex",
      value: function GetSeriesImageURLAtIndex(SeriesInfo, Index, Thumb) {
        return this.sageAPI.invoke("GetSeriesImageURLAtIndex", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Index, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesInfoForID",
      value: function GetSeriesInfoForID(SeriesID) {
        return this.sageAPI.invoke("GetSeriesInfoForID", [SeriesID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesInfoProperty",
      value: function GetSeriesInfoProperty(SeriesInfo, PropertyName) {
        return this.sageAPI.invoke("GetSeriesInfoProperty", ['seriesinfo:' + SeriesInfo.SeriesInfoID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSeriesNetwork",
      value: function GetSeriesNetwork(SeriesInfo) {
        if (typeof SeriesInfo.SeriesNetwork !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesNetwork);
        });
        return this.sageAPI.invoke("GetSeriesNetwork", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesNetwork = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesPremiereDate",
      value: function GetSeriesPremiereDate(SeriesInfo) {
        if (typeof SeriesInfo.SeriesPremiereDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesPremiereDate);
        });
        return this.sageAPI.invoke("GetSeriesPremiereDate", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesPremiereDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesSubCategory",
      value: function GetSeriesSubCategory(SeriesInfo) {
        if (typeof SeriesInfo.SeriesSubCategory !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesSubCategory);
        });
        return this.sageAPI.invoke("GetSeriesSubCategory", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesSubCategory = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSeriesTitle",
      value: function GetSeriesTitle(SeriesInfo) {
        if (typeof SeriesInfo.SeriesTitle !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.SeriesTitle);
        });
        return this.sageAPI.invoke("GetSeriesTitle", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.SeriesTitle = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "HasSeriesActorImage",
      value: function HasSeriesActorImage(SeriesInfo, Person) {
        return this.sageAPI.invoke("HasSeriesActorImage", ['seriesinfo:' + SeriesInfo.SeriesInfoID, Person]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasSeriesImage",
      value: function HasSeriesImage(SeriesInfo) {
        if (typeof SeriesInfo.HasSeriesImage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(SeriesInfo.HasSeriesImage);
        });
        return this.sageAPI.invoke("HasSeriesImage", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (!json || !json.Result) return null;
          SeriesInfo.HasSeriesImage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsSeriesInfoObject",
      value: function IsSeriesInfoObject(SeriesInfo) {
        return this.sageAPI.invoke("IsSeriesInfoObject", ['seriesinfo:' + SeriesInfo.SeriesInfoID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetSeriesInfoProperty",
      value: function SetSeriesInfoProperty(SeriesInfo, PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetSeriesInfoProperty", ['seriesinfo:' + SeriesInfo.SeriesInfoID, PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return SeriesInfoAPI;
  }();

  // Field Constants for SeriesInfo
  SeriesInfoAPI.NumberOfCharactersInSeries = "NumberOfCharactersInSeries";
  SeriesInfoAPI.SeriesActorList = "SeriesActorList";
  SeriesInfoAPI.SeriesCategory = "SeriesCategory";
  SeriesInfoAPI.SeriesCharacterList = "SeriesCharacterList";
  SeriesInfoAPI.SeriesDayOfWeek = "SeriesDayOfWeek";
  SeriesInfoAPI.SeriesDescription = "SeriesDescription";
  SeriesInfoAPI.SeriesFinaleDate = "SeriesFinaleDate";
  SeriesInfoAPI.SeriesHistory = "SeriesHistory";
  SeriesInfoAPI.SeriesHourAndMinuteTimeslot = "SeriesHourAndMinuteTimeslot";
  SeriesInfoAPI.SeriesID = "SeriesID";
  SeriesInfoAPI.SeriesImage = "SeriesImage";
  SeriesInfoAPI.SeriesImageCount = "SeriesImageCount";
  SeriesInfoAPI.SeriesImageURL = "SeriesImageURL";
  SeriesInfoAPI.SeriesNetwork = "SeriesNetwork";
  SeriesInfoAPI.SeriesPremiereDate = "SeriesPremiereDate";
  SeriesInfoAPI.SeriesSubCategory = "SeriesSubCategory";
  SeriesInfoAPI.SeriesTitle = "SeriesTitle";
  SeriesInfoAPI.HasSeriesImage = "HasSeriesImage";
  exports.default = SeriesInfoAPI;
});