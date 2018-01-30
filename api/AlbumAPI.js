class AlbumAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetAlbumArt
   GetAlbumArt(Album) {
  if (typeof Album.Art !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Art);
  });
  return this.sageAPI.invoke("GetAlbumArt", {
'Album':Album.ID
});
   }

    // GetAlbumArtist
   GetAlbumArtist(Album) {
  if (typeof Album.Artist !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Artist);
  });
  return this.sageAPI.invoke("GetAlbumArtist", {
'Album':Album.ID
});
   }

    // GetAlbumGenre
   GetAlbumGenre(Album) {
  if (typeof Album.Genre !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Genre);
  });
  return this.sageAPI.invoke("GetAlbumGenre", {
'Album':Album.ID
});
   }

    // GetAlbumName
   GetAlbumName(Album) {
  if (typeof Album.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Name);
  });
  return this.sageAPI.invoke("GetAlbumName", {
'Album':Album.ID
});
   }

    // GetAlbumTracks
   GetAlbumTracks(Album) {
  if (typeof Album.Tracks !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Tracks);
  });
  return this.sageAPI.invoke("GetAlbumTracks", {
'Album':Album.ID
});
   }

    // GetAlbumYear
   GetAlbumYear(Album) {
  if (typeof Album.Year !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Year);
  });
  return this.sageAPI.invoke("GetAlbumYear", {
'Album':Album.ID
});
   }

    // GetAlbums
   GetAlbums() {
  return this.sageAPI.invoke("GetAlbums", {
});
   }

    // GetAllMusicArtists
   GetAllMusicArtists() {
  return this.sageAPI.invoke("GetAllMusicArtists", {
});
   }

    // GetAllMusicForArtist
   GetAllMusicForArtist(Artist) {
  return this.sageAPI.invoke("GetAllMusicForArtist", {
'Artist':Artist
});
   }

    // GetAllMusicForGenre
   GetAllMusicForGenre(Genre) {
  return this.sageAPI.invoke("GetAllMusicForGenre", {
'Genre':Genre
});
   }

    // GetAllMusicGenres
   GetAllMusicGenres() {
  return this.sageAPI.invoke("GetAllMusicGenres", {
});
   }

    // GetNumberOfTracks
   GetNumberOfTracks(Album) {
  if (typeof Album.NumberOfTracks !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.NumberOfTracks);
  });
  return this.sageAPI.invoke("GetNumberOfTracks", {
'Album':Album.ID
});
   }

    // HasAlbumArt
   HasAlbumArt(Album) {
  if (typeof Album.Art !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Album.Art);
  });
  return this.sageAPI.invoke("HasAlbumArt", {
'Album':Album.ID
});
   }

    // IsAlbumObject
   IsAlbumObject(Album) {
  return this.sageAPI.invoke("IsAlbumObject", {
'Album':Album.ID
});
   }
}

    export default AlbumAPI;
