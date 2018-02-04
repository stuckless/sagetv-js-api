class AlbumAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetAlbumArt
   GetAlbumArt(Album) {
  if (typeof Album.Art !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Art);
  });
  return this.sageAPI.invoke("GetAlbumArt", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Art=json.Result;
  return json.Result;
});
   }

    // GetAlbumArtist
   GetAlbumArtist(Album) {
  if (typeof Album.Artist !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Artist);
  });
  return this.sageAPI.invoke("GetAlbumArtist", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Artist=json.Result;
  return json.Result;
});
   }

    // GetAlbumGenre
   GetAlbumGenre(Album) {
  if (typeof Album.Genre !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Genre);
  });
  return this.sageAPI.invoke("GetAlbumGenre", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Genre=json.Result;
  return json.Result;
});
   }

    // GetAlbumName
   GetAlbumName(Album) {
  if (typeof Album.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Name);
  });
  return this.sageAPI.invoke("GetAlbumName", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Name=json.Result;
  return json.Result;
});
   }

    // GetAlbumTracks
   GetAlbumTracks(Album) {
  if (typeof Album.Tracks !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Tracks);
  });
  return this.sageAPI.invoke("GetAlbumTracks", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Tracks=json.Result;
  return json.Result;
});
   }

    // GetAlbumYear
   GetAlbumYear(Album) {
  if (typeof Album.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Year);
  });
  return this.sageAPI.invoke("GetAlbumYear", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.Year=json.Result;
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
  return this.sageAPI.invoke("GetNumberOfTracks", [Album.AlbumID]).then((json)=>{
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
  return this.sageAPI.invoke("HasAlbumArt", [Album.AlbumID]).then((json)=>{
  if (!json || !json.Result) return null;
  Album.HasAlbumArt=json.Result;
  return json.Result;
});
   }

    // IsAlbumObject
   IsAlbumObject(Album) {
  return this.sageAPI.invoke("IsAlbumObject", [Album.AlbumID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default AlbumAPI;
