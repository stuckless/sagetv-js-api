class PlaylistAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddPlaylist
   AddPlaylist(Name) {
  return this.sageAPI.invoke("AddPlaylist", [Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddToPlaylist
   AddToPlaylist(Playlist, NewItem) {
  return this.sageAPI.invoke("AddToPlaylist", ['playlist:'+Playlist.PlaylistID,NewItem]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DoesPlaylistHaveVideo
   DoesPlaylistHaveVideo(Playlist) {
  return this.sageAPI.invoke("DoesPlaylistHaveVideo", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetName
   GetName(Playlist) {
  if (typeof Playlist.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Name);
  });
  return this.sageAPI.invoke("GetName", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.Name=json.Result;
  return json.Result;
});
   }

    // GetNowPlayingList
   GetNowPlayingList() {
  return this.sageAPI.invoke("GetNowPlayingList", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNumberOfPlaylistItems
   GetNumberOfPlaylistItems(Playlist) {
  if (typeof Playlist.NumberOfPlaylistItems !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.NumberOfPlaylistItems);
  });
  return this.sageAPI.invoke("GetNumberOfPlaylistItems", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.NumberOfPlaylistItems=json.Result;
  return json.Result;
});
   }

    // GetPlaylistItemAt
   GetPlaylistItemAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemAt", ['playlist:'+Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaylistItemTypeAt
   GetPlaylistItemTypeAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemTypeAt", ['playlist:'+Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaylistItems
   GetPlaylistItems(Playlist) {
  if (typeof Playlist.PlaylistItems !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.PlaylistItems);
  });
  return this.sageAPI.invoke("GetPlaylistItems", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.PlaylistItems=json.Result;
  return json.Result;
});
   }

    // GetPlaylistProperties
   GetPlaylistProperties(Playlist) {
  if (typeof Playlist.PlaylistProperties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.PlaylistProperties);
  });
  return this.sageAPI.invoke("GetPlaylistProperties", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.PlaylistProperties=json.Result;
  return json.Result;
});
   }

    // GetPlaylistProperty
   GetPlaylistProperty(Playlist, PropertyName) {
  return this.sageAPI.invoke("GetPlaylistProperty", ['playlist:'+Playlist.PlaylistID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaylists
   GetPlaylists() {
  return this.sageAPI.invoke("GetPlaylists", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // InsertIntoPlaylist
   InsertIntoPlaylist(Playlist, InsertIndex, NewItem) {
  return this.sageAPI.invoke("InsertIntoPlaylist", ['playlist:'+Playlist.PlaylistID,InsertIndex,NewItem]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPlaylistObject
   IsPlaylistObject(Playlist) {
  return this.sageAPI.invoke("IsPlaylistObject", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MovePlaylistItemDown
   MovePlaylistItemDown(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemDown", ['playlist:'+Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MovePlaylistItemUp
   MovePlaylistItemUp(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemUp", ['playlist:'+Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylist
   RemovePlaylist(Playlist) {
  return this.sageAPI.invoke("RemovePlaylist", ['playlist:'+Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylistItem
   RemovePlaylistItem(Playlist, Item) {
  return this.sageAPI.invoke("RemovePlaylistItem", ['playlist:'+Playlist.PlaylistID,Item]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylistItemAt
   RemovePlaylistItemAt(Playlist, ItemIndex) {
  return this.sageAPI.invoke("RemovePlaylistItemAt", ['playlist:'+Playlist.PlaylistID,ItemIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetName
   SetName(Playlist, Name) {
  return this.sageAPI.invoke("SetName", ['playlist:'+Playlist.PlaylistID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPlaylistProperty
   SetPlaylistProperty(Playlist, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetPlaylistProperty", ['playlist:'+Playlist.PlaylistID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Playlist
PlaylistAPI.Name="Name";
PlaylistAPI.NumberOfPlaylistItems="NumberOfPlaylistItems";
PlaylistAPI.PlaylistItems="PlaylistItems";
PlaylistAPI.PlaylistProperties="PlaylistProperties";
    export default PlaylistAPI;
