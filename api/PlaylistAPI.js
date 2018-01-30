class PlaylistAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddPlaylist
   AddPlaylist(Name) {
  return this.sageAPI.invoke("AddPlaylist", {
'Name':Name
});
   }

    // AddToPlaylist
   AddToPlaylist(Playlist, NewItem) {
  return this.sageAPI.invoke("AddToPlaylist", {
'Playlist':Playlist.ID
,
'NewItem':NewItem
});
   }

    // DoesPlaylistHaveVideo
   DoesPlaylistHaveVideo(Playlist) {
  return this.sageAPI.invoke("DoesPlaylistHaveVideo", {
'Playlist':Playlist.ID
});
   }

    // GetName
   GetName(Playlist) {
  if (typeof Playlist.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Name);
  });
  return this.sageAPI.invoke("GetName", {
'Playlist':Playlist.ID
});
   }

    // GetNowPlayingList
   GetNowPlayingList() {
  return this.sageAPI.invoke("GetNowPlayingList", {
});
   }

    // GetNumberOfPlaylistItems
   GetNumberOfPlaylistItems(Playlist) {
  if (typeof Playlist.NumberOfPlaylistItems !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.NumberOfPlaylistItems);
  });
  return this.sageAPI.invoke("GetNumberOfPlaylistItems", {
'Playlist':Playlist.ID
});
   }

    // GetPlaylistItemAt
   GetPlaylistItemAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemAt", {
'Playlist':Playlist.ID
,
'Index':Index
});
   }

    // GetPlaylistItemTypeAt
   GetPlaylistItemTypeAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemTypeAt", {
'Playlist':Playlist.ID
,
'Index':Index
});
   }

    // GetPlaylistItems
   GetPlaylistItems(Playlist) {
  if (typeof Playlist.Items !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Items);
  });
  return this.sageAPI.invoke("GetPlaylistItems", {
'Playlist':Playlist.ID
});
   }

    // GetPlaylistProperties
   GetPlaylistProperties(Playlist) {
  if (typeof Playlist.Properties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Properties);
  });
  return this.sageAPI.invoke("GetPlaylistProperties", {
'Playlist':Playlist.ID
});
   }

    // GetPlaylistProperty
   GetPlaylistProperty(Playlist, PropertyName) {
  return this.sageAPI.invoke("GetPlaylistProperty", {
'Playlist':Playlist.ID
,
'PropertyName':PropertyName
});
   }

    // GetPlaylists
   GetPlaylists() {
  return this.sageAPI.invoke("GetPlaylists", {
});
   }

    // InsertIntoPlaylist
   InsertIntoPlaylist(Playlist, InsertIndex, NewItem) {
  return this.sageAPI.invoke("InsertIntoPlaylist", {
'Playlist':Playlist.ID
,
'InsertIndex':InsertIndex
,
'NewItem':NewItem
});
   }

    // IsPlaylistObject
   IsPlaylistObject(Playlist) {
  return this.sageAPI.invoke("IsPlaylistObject", {
'Playlist':Playlist.ID
});
   }

    // MovePlaylistItemDown
   MovePlaylistItemDown(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemDown", {
'Playlist':Playlist.ID
,
'Index':Index
});
   }

    // MovePlaylistItemUp
   MovePlaylistItemUp(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemUp", {
'Playlist':Playlist.ID
,
'Index':Index
});
   }

    // RemovePlaylist
   RemovePlaylist(Playlist) {
  return this.sageAPI.invoke("RemovePlaylist", {
'Playlist':Playlist.ID
});
   }

    // RemovePlaylistItem
   RemovePlaylistItem(Playlist, Item) {
  return this.sageAPI.invoke("RemovePlaylistItem", {
'Playlist':Playlist.ID
,
'Item':Item
});
   }

    // RemovePlaylistItemAt
   RemovePlaylistItemAt(Playlist, ItemIndex) {
  return this.sageAPI.invoke("RemovePlaylistItemAt", {
'Playlist':Playlist.ID
,
'ItemIndex':ItemIndex
});
   }

    // SetName
   SetName(Playlist, Name) {
  return this.sageAPI.invoke("SetName", {
'Playlist':Playlist.ID
,
'Name':Name
});
   }

    // SetPlaylistProperty
   SetPlaylistProperty(Playlist, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetPlaylistProperty", {
'Playlist':Playlist.ID
,
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }
}

    export default PlaylistAPI;
