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
      global.TVEditorialAPI = mod.exports;
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

   var TVEditorialAPI = function () {
      function TVEditorialAPI(sageAPI) {
         _classCallCheck(this, TVEditorialAPI);

         this.sageAPI = sageAPI;
      }

      // GetAllTVEditorials


      _createClass(TVEditorialAPI, [{
         key: "GetAllTVEditorials",
         value: function GetAllTVEditorials() {
            return this.sageAPI.invoke("GetAllTVEditorials", []).then(function (json) {
               if (json && json.Result) return json.Result;
               return json;
            });
         }
      }, {
         key: "GetEditorialAirDate",
         value: function GetEditorialAirDate(TVEditorial) {
            if (typeof TVEditorial.EditorialAirDate !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialAirDate);
            });
            return this.sageAPI.invoke("GetEditorialAirDate", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialAirDate = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "GetEditorialImage",
         value: function GetEditorialImage(TVEditorial) {
            if (typeof TVEditorial.EditorialImage !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialImage);
            });
            return this.sageAPI.invoke("GetEditorialImage", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialImage = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "GetEditorialNetwork",
         value: function GetEditorialNetwork(TVEditorial) {
            if (typeof TVEditorial.EditorialNetwork !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialNetwork);
            });
            return this.sageAPI.invoke("GetEditorialNetwork", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialNetwork = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "GetEditorialShow",
         value: function GetEditorialShow(TVEditorial) {
            if (typeof TVEditorial.EditorialShow !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialShow);
            });
            return this.sageAPI.invoke("GetEditorialShow", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialShow = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "GetEditorialText",
         value: function GetEditorialText(TVEditorial) {
            if (typeof TVEditorial.EditorialText !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialText);
            });
            return this.sageAPI.invoke("GetEditorialText", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialText = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "GetEditorialTitle",
         value: function GetEditorialTitle(TVEditorial) {
            if (typeof TVEditorial.EditorialTitle !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.EditorialTitle);
            });
            return this.sageAPI.invoke("GetEditorialTitle", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.EditorialTitle = json.Result;
               return json.Result;
            });
         }
      }, {
         key: "HasEditorialImage",
         value: function HasEditorialImage(TVEditorial) {
            if (typeof TVEditorial.HasEditorialImage !== 'undefined') return new Promise(function (resolve, reject) {
               resolve(TVEditorial.HasEditorialImage);
            });
            return this.sageAPI.invoke("HasEditorialImage", ['tveditorial:' + TVEditorial.TVEditorialID]).then(function (json) {
               if (!json || !json.Result) return null;
               TVEditorial.HasEditorialImage = json.Result;
               return json.Result;
            });
         }
      }]);

      return TVEditorialAPI;
   }();

   // Field Constants for TVEditorial
   TVEditorialAPI.EditorialAirDate = "EditorialAirDate";
   TVEditorialAPI.EditorialImage = "EditorialImage";
   TVEditorialAPI.EditorialNetwork = "EditorialNetwork";
   TVEditorialAPI.EditorialShow = "EditorialShow";
   TVEditorialAPI.EditorialText = "EditorialText";
   TVEditorialAPI.EditorialTitle = "EditorialTitle";
   TVEditorialAPI.HasEditorialImage = "HasEditorialImage";
   exports.default = TVEditorialAPI;
});