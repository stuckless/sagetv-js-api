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
  return this.sageAPI.invoke("AddToPlaylist", [Playlist.PlaylistID,NewItem]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DoesPlaylistHaveVideo
   DoesPlaylistHaveVideo(Playlist) {
  return this.sageAPI.invoke("DoesPlaylistHaveVideo", [Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetName
   GetName(Playlist) {
  if (typeof Playlist.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Name);
  });
  return this.sageAPI.invoke("GetName", [Playlist.PlaylistID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNumberOfPlaylistItems", [Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.NumberOfPlaylistItems=json.Result;
  return json.Result;
});
   }

    // GetPlaylistItemAt
   GetPlaylistItemAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemAt", [Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaylistItemTypeAt
   GetPlaylistItemTypeAt(Playlist, Index) {
  return this.sageAPI.invoke("GetPlaylistItemTypeAt", [Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaylistItems
   GetPlaylistItems(Playlist) {
  if (typeof Playlist.Items !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Items);
  });
  return this.sageAPI.invoke("GetPlaylistItems", [Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.Items=json.Result;
  return json.Result;
});
   }

    // GetPlaylistProperties
   GetPlaylistProperties(Playlist) {
  if (typeof Playlist.Properties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Playlist.Properties);
  });
  return this.sageAPI.invoke("GetPlaylistProperties", [Playlist.PlaylistID]).then((json)=>{
  if (!json || !json.Result) return null;
  Playlist.Properties=json.Result;
  return json.Result;
});
   }

    // GetPlaylistProperty
   GetPlaylistProperty(Playlist, PropertyName) {
  return this.sageAPI.invoke("GetPlaylistProperty", [Playlist.PlaylistID,PropertyName]).then((json)=>{
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
  return this.sageAPI.invoke("InsertIntoPlaylist", [Playlist.PlaylistID,InsertIndex,NewItem]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPlaylistObject
   IsPlaylistObject(Playlist) {
  return this.sageAPI.invoke("IsPlaylistObject", [Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MovePlaylistItemDown
   MovePlaylistItemDown(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemDown", [Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MovePlaylistItemUp
   MovePlaylistItemUp(Playlist, Index) {
  return this.sageAPI.invoke("MovePlaylistItemUp", [Playlist.PlaylistID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylist
   RemovePlaylist(Playlist) {
  return this.sageAPI.invoke("RemovePlaylist", [Playlist.PlaylistID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylistItem
   RemovePlaylistItem(Playlist, Item) {
  return this.sageAPI.invoke("RemovePlaylistItem", [Playlist.PlaylistID,Item]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePlaylistItemAt
   RemovePlaylistItemAt(Playlist, ItemIndex) {
  return this.sageAPI.invoke("RemovePlaylistItemAt", [Playlist.PlaylistID,ItemIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetName
   SetName(Playlist, Name) {
  return this.sageAPI.invoke("SetName", [Playlist.PlaylistID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPlaylistProperty
   SetPlaylistProperty(Playlist, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetPlaylistProperty", [Playlist.PlaylistID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default PlaylistAPI;
