class AlbumAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetAlbumArt
   GetAlbumArt(Album) {
  if (typeof Album.AlbumArt !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumArt);
  });
  return this.sageAPI.invoke("GetAlbumArt", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumArt=json.Result;
  return json.Result;
});
   }

    // GetAlbumArtist
   GetAlbumArtist(Album) {
  if (typeof Album.AlbumArtist !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumArtist);
  });
  return this.sageAPI.invoke("GetAlbumArtist", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumArtist=json.Result;
  return json.Result;
});
   }

    // GetAlbumGenre
   GetAlbumGenre(Album) {
  if (typeof Album.AlbumGenre !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumGenre);
  });
  return this.sageAPI.invoke("GetAlbumGenre", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumGenre=json.Result;
  return json.Result;
});
   }

    // GetAlbumName
   GetAlbumName(Album) {
  if (typeof Album.AlbumName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumName);
  });
  return this.sageAPI.invoke("GetAlbumName", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumName=json.Result;
  return json.Result;
});
   }

    // GetAlbumTracks
   GetAlbumTracks(Album) {
  if (typeof Album.AlbumTracks !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumTracks);
  });
  return this.sageAPI.invoke("GetAlbumTracks", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumTracks=json.Result;
  return json.Result;
});
   }

    // GetAlbumYear
   GetAlbumYear(Album) {
  if (typeof Album.AlbumYear !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.AlbumYear);
  });
  return this.sageAPI.invoke("GetAlbumYear", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.AlbumYear=json.Result;
  return json.Result;
});
   }

    // GetAlbums
   GetAlbums() {
  return this.sageAPI.invoke("GetAlbums", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllMusicArtists
   GetAllMusicArtists() {
  return this.sageAPI.invoke("GetAllMusicArtists", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllMusicForArtist
   GetAllMusicForArtist(Artist) {
  return this.sageAPI.invoke("GetAllMusicForArtist", [Artist]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllMusicForGenre
   GetAllMusicForGenre(Genre) {
  return this.sageAPI.invoke("GetAllMusicForGenre", [Genre]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllMusicGenres
   GetAllMusicGenres() {
  return this.sageAPI.invoke("GetAllMusicGenres", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNumberOfTracks
   GetNumberOfTracks(Album) {
  if (typeof Album.NumberOfTracks !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.NumberOfTracks);
  });
  return this.sageAPI.invoke("GetNumberOfTracks", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.NumberOfTracks=json.Result;
  return json.Result;
});
   }

    // HasAlbumArt
   HasAlbumArt(Album) {
  if (typeof Album.HasAlbumArt !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.HasAlbumArt);
  });
  return this.sageAPI.invoke("HasAlbumArt", ['album:'+Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.HasAlbumArt=json.Result;
  return json.Result;
});
   }

    // IsAlbumObject
   IsAlbumObject(Album) {
  return this.sageAPI.invoke("IsAlbumObject", ['album:'+Album.AlbumID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Album
AlbumAPI.AlbumArt="AlbumArt";
AlbumAPI.AlbumArtist="AlbumArtist";
AlbumAPI.AlbumGenre="AlbumGenre";
AlbumAPI.AlbumName="AlbumName";
AlbumAPI.AlbumTracks="AlbumTracks";
AlbumAPI.AlbumYear="AlbumYear";
AlbumAPI.NumberOfTracks="NumberOfTracks";
AlbumAPI.HasAlbumArt="HasAlbumArt";
    export default AlbumAPI;
