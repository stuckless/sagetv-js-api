(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PersonAPI = mod.exports;
  }
})(this, function (exports) {
  'use strict';

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

  var PersonAPI = function () {
    function PersonAPI(sageAPI) {
      _classCallCheck(this, PersonAPI);

      this.sageAPI = sageAPI;
    }

    // GetPersonBirthplace


    _createClass(PersonAPI, [{
      key: 'GetPersonBirthplace',
      value: function GetPersonBirthplace(Person) {
        if (typeof Person.PersonBirthplace !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Person.PersonBirthplace);
        });
        return this.sageAPI.invoke("GetPersonBirthplace", ['person:' + Person.PersonID]).then(function (json) {
          if (!json || !json.Result) return null;
          Person.PersonBirthplace = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetPersonDateOfBirth',
      value: function GetPersonDateOfBirth(Person) {
        if (typeof Person.PersonDateOfBirth !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Person.PersonDateOfBirth);
        });
        return this.sageAPI.invoke("GetPersonDateOfBirth", ['person:' + Person.PersonID]).then(function (json) {
          if (!json || !json.Result) return null;
          Person.PersonDateOfBirth = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetPersonDateOfDeath',
      value: function GetPersonDateOfDeath(Person) {
        if (typeof Person.PersonDateOfDeath !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Person.PersonDateOfDeath);
        });
        return this.sageAPI.invoke("GetPersonDateOfDeath", ['person:' + Person.PersonID]).then(function (json) {
          if (!json || !json.Result) return null;
          Person.PersonDateOfDeath = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetPersonForID',
      value: function GetPersonForID(PersonID) {
        return this.sageAPI.invoke("GetPersonForID", [PersonID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetPersonID',
      value: function GetPersonID(Person) {
        if (typeof Person.PersonID !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Person.PersonID);
        });
        return this.sageAPI.invoke("GetPersonID", ['person:' + Person.PersonID]).then(function (json) {
          if (!json || !json.Result) return null;
          Person.PersonID = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetPersonImage',
      value: function GetPersonImage(Person, Thumb) {
        return this.sageAPI.invoke("GetPersonImage", ['person:' + Person.PersonID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetPersonImageURL',
      value: function GetPersonImageURL(Person, Thumb) {
        return this.sageAPI.invoke("GetPersonImageURL", ['person:' + Person.PersonID, Thumb]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'HasPersonImage',
      value: function HasPersonImage(Person) {
        if (typeof Person.HasPersonImage !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Person.HasPersonImage);
        });
        return this.sageAPI.invoke("HasPersonImage", ['person:' + Person.PersonID]).then(function (json) {
          if (!json || !json.Result) return null;
          Person.HasPersonImage = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'IsPersonObject',
      value: function IsPersonObject(Object) {
        return this.sageAPI.invoke("IsPersonObject", [Object]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return PersonAPI;
  }();

  // Field Constants for Person
  PersonAPI.PersonBirthplace = "PersonBirthplace";
  PersonAPI.PersonDateOfBirth = "PersonDateOfBirth";
  PersonAPI.PersonDateOfDeath = "PersonDateOfDeath";
  PersonAPI.PersonID = "PersonID";
  PersonAPI.HasPersonImage = "HasPersonImage";
  exports.default = PersonAPI;
});