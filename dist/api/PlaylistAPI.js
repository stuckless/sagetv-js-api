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
    global.PlaylistAPI = mod.exports;
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

  var PlaylistAPI = function () {
    function PlaylistAPI(sageAPI) {
      _classCallCheck(this, PlaylistAPI);

      this.sageAPI = sageAPI;
    }

    // AddPlaylist


    _createClass(PlaylistAPI, [{
      key: "AddPlaylist",
      value: function AddPlaylist(Name) {
        return this.sageAPI.invoke("AddPlaylist", [Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddToPlaylist",
      value: function AddToPlaylist(Playlist, NewItem) {
        return this.sageAPI.invoke("AddToPlaylist", ['playlist:' + Playlist.PlaylistID, NewItem]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "DoesPlaylistHaveVideo",
      value: function DoesPlaylistHaveVideo(Playlist) {
        return this.sageAPI.invoke("DoesPlaylistHaveVideo", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetName",
      value: function GetName(Playlist) {
        if (typeof Playlist.Name !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Playlist.Name);
        });
        return this.sageAPI.invoke("GetName", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (!json || !json.Result) return null;
          Playlist.Name = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNowPlayingList",
      value: function GetNowPlayingList() {
        return this.sageAPI.invoke("GetNowPlayingList", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNumberOfPlaylistItems",
      value: function GetNumberOfPlaylistItems(Playlist) {
        if (typeof Playlist.NumberOfPlaylistItems !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Playlist.NumberOfPlaylistItems);
        });
        return this.sageAPI.invoke("GetNumberOfPlaylistItems", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (!json || !json.Result) return null;
          Playlist.NumberOfPlaylistItems = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPlaylistItemAt",
      value: function GetPlaylistItemAt(Playlist, Index) {
        return this.sageAPI.invoke("GetPlaylistItemAt", ['playlist:' + Playlist.PlaylistID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPlaylistItemTypeAt",
      value: function GetPlaylistItemTypeAt(Playlist, Index) {
        return this.sageAPI.invoke("GetPlaylistItemTypeAt", ['playlist:' + Playlist.PlaylistID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPlaylistItems",
      value: function GetPlaylistItems(Playlist) {
        if (typeof Playlist.PlaylistItems !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Playlist.PlaylistItems);
        });
        return this.sageAPI.invoke("GetPlaylistItems", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (!json || !json.Result) return null;
          Playlist.PlaylistItems = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPlaylistProperties",
      value: function GetPlaylistProperties(Playlist) {
        if (typeof Playlist.PlaylistProperties !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Playlist.PlaylistProperties);
        });
        return this.sageAPI.invoke("GetPlaylistProperties", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (!json || !json.Result) return null;
          Playlist.PlaylistProperties = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPlaylistProperty",
      value: function GetPlaylistProperty(Playlist, PropertyName) {
        return this.sageAPI.invoke("GetPlaylistProperty", ['playlist:' + Playlist.PlaylistID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPlaylists",
      value: function GetPlaylists() {
        return this.sageAPI.invoke("GetPlaylists", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "InsertIntoPlaylist",
      value: function InsertIntoPlaylist(Playlist, InsertIndex, NewItem) {
        return this.sageAPI.invoke("InsertIntoPlaylist", ['playlist:' + Playlist.PlaylistID, InsertIndex, NewItem]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPlaylistObject",
      value: function IsPlaylistObject(Playlist) {
        return this.sageAPI.invoke("IsPlaylistObject", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "MovePlaylistItemDown",
      value: function MovePlaylistItemDown(Playlist, Index) {
        return this.sageAPI.invoke("MovePlaylistItemDown", ['playlist:' + Playlist.PlaylistID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "MovePlaylistItemUp",
      value: function MovePlaylistItemUp(Playlist, Index) {
        return this.sageAPI.invoke("MovePlaylistItemUp", ['playlist:' + Playlist.PlaylistID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemovePlaylist",
      value: function RemovePlaylist(Playlist) {
        return this.sageAPI.invoke("RemovePlaylist", ['playlist:' + Playlist.PlaylistID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemovePlaylistItem",
      value: function RemovePlaylistItem(Playlist, Item) {
        return this.sageAPI.invoke("RemovePlaylistItem", ['playlist:' + Playlist.PlaylistID, Item]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemovePlaylistItemAt",
      value: function RemovePlaylistItemAt(Playlist, ItemIndex) {
        return this.sageAPI.invoke("RemovePlaylistItemAt", ['playlist:' + Playlist.PlaylistID, ItemIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetName",
      value: function SetName(Playlist, Name) {
        return this.sageAPI.invoke("SetName", ['playlist:' + Playlist.PlaylistID, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPlaylistProperty",
      value: function SetPlaylistProperty(Playlist, PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetPlaylistProperty", ['playlist:' + Playlist.PlaylistID, PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return PlaylistAPI;
  }();

  // Field Constants for Playlist
  PlaylistAPI.Name = "Name";
  PlaylistAPI.NumberOfPlaylistItems = "NumberOfPlaylistItems";
  PlaylistAPI.PlaylistItems = "PlaylistItems";
  PlaylistAPI.PlaylistProperties = "PlaylistProperties";
  exports.default = PlaylistAPI;
});