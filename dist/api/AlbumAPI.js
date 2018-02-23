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
    global.AlbumAPI = mod.exports;
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

  var AlbumAPI = function () {
    function AlbumAPI(sageAPI) {
      _classCallCheck(this, AlbumAPI);

      this.sageAPI = sageAPI;
    }

    // GetAlbumArt


    _createClass(AlbumAPI, [{
      key: 'GetAlbumArt',
      value: function GetAlbumArt(Album) {
        if (typeof Album.AlbumArt !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumArt);
        });
        return this.sageAPI.invoke("GetAlbumArt", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumArt = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbumArtist',
      value: function GetAlbumArtist(Album) {
        if (typeof Album.AlbumArtist !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumArtist);
        });
        return this.sageAPI.invoke("GetAlbumArtist", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumArtist = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbumGenre',
      value: function GetAlbumGenre(Album) {
        if (typeof Album.AlbumGenre !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumGenre);
        });
        return this.sageAPI.invoke("GetAlbumGenre", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumGenre = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbumName',
      value: function GetAlbumName(Album) {
        if (typeof Album.AlbumName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumName);
        });
        return this.sageAPI.invoke("GetAlbumName", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbumTracks',
      value: function GetAlbumTracks(Album) {
        if (typeof Album.AlbumTracks !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumTracks);
        });
        return this.sageAPI.invoke("GetAlbumTracks", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumTracks = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbumYear',
      value: function GetAlbumYear(Album) {
        if (typeof Album.AlbumYear !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.AlbumYear);
        });
        return this.sageAPI.invoke("GetAlbumYear", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.AlbumYear = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'GetAlbums',
      value: function GetAlbums() {
        return this.sageAPI.invoke("GetAlbums", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetAllMusicArtists',
      value: function GetAllMusicArtists() {
        return this.sageAPI.invoke("GetAllMusicArtists", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetAllMusicForArtist',
      value: function GetAllMusicForArtist(Artist) {
        return this.sageAPI.invoke("GetAllMusicForArtist", [Artist]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetAllMusicForGenre',
      value: function GetAllMusicForGenre(Genre) {
        return this.sageAPI.invoke("GetAllMusicForGenre", [Genre]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetAllMusicGenres',
      value: function GetAllMusicGenres() {
        return this.sageAPI.invoke("GetAllMusicGenres", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: 'GetNumberOfTracks',
      value: function GetNumberOfTracks(Album) {
        if (typeof Album.NumberOfTracks !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.NumberOfTracks);
        });
        return this.sageAPI.invoke("GetNumberOfTracks", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.NumberOfTracks = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'HasAlbumArt',
      value: function HasAlbumArt(Album) {
        if (typeof Album.HasAlbumArt !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Album.HasAlbumArt);
        });
        return this.sageAPI.invoke("HasAlbumArt", ['album:' + Album.AlbumID]).then(function (json) {
          if (!json || !json.Result) return null;
          Album.HasAlbumArt = json.Result;
          return json.Result;
        });
      }
    }, {
      key: 'IsAlbumObject',
      value: function IsAlbumObject(Album) {
        return this.sageAPI.invoke("IsAlbumObject", ['album:' + Album.AlbumID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return AlbumAPI;
  }();

  // Field Constants for Album
  AlbumAPI.AlbumArt = "AlbumArt";
  AlbumAPI.AlbumArtist = "AlbumArtist";
  AlbumAPI.AlbumGenre = "AlbumGenre";
  AlbumAPI.AlbumName = "AlbumName";
  AlbumAPI.AlbumTracks = "AlbumTracks";
  AlbumAPI.AlbumYear = "AlbumYear";
  AlbumAPI.NumberOfTracks = "NumberOfTracks";
  AlbumAPI.HasAlbumArt = "HasAlbumArt";
  exports.default = AlbumAPI;
});