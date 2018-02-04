class MediaFileAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddMediaFile
   AddMediaFile(File, NamePrefix) {
  return this.sageAPI.invoke("AddMediaFile", [File,NamePrefix]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AutorotatePictureFile
   AutorotatePictureFile(MediaFile) {
  return this.sageAPI.invoke("AutorotatePictureFile", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanAutorotatePictureFile
   CanAutorotatePictureFile(MediaFile) {
  if (typeof MediaFile.CanAutorotatePictureFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.CanAutorotatePictureFile);
  });
  return this.sageAPI.invoke("CanAutorotatePictureFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.CanAutorotatePictureFile=json.Result;
  return json.Result;
});
   }

    // CopyToLocalFile
   CopyToLocalFile(MediaFile, LocalFile) {
  return this.sageAPI.invoke("CopyToLocalFile", [MediaFile.MediaFileID,LocalFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateTempMediaFile
   CreateTempMediaFile(FilePath) {
  return this.sageAPI.invoke("CreateTempMediaFile", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteFile
   DeleteFile(MediaFile) {
  return this.sageAPI.invoke("DeleteFile", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteFileWithoutPrejudice
   DeleteFileWithoutPrejudice(MediaFile) {
  return this.sageAPI.invoke("DeleteFileWithoutPrejudice", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FlipPictureFile
   FlipPictureFile(MediaFile, Horizontal) {
  return this.sageAPI.invoke("FlipPictureFile", [MediaFile.MediaFileID,Horizontal]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GenerateThumbnail
   GenerateThumbnail(MediaFile, Time, Width, Height, File) {
  return this.sageAPI.invoke("GenerateThumbnail", [MediaFile.MediaFileID,Time,Width,Height,File]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAlbumForFile
   GetAlbumForFile(MediaFile) {
  if (typeof MediaFile.AlbumForFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.AlbumForFile);
  });
  return this.sageAPI.invoke("GetAlbumForFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.AlbumForFile=json.Result;
  return json.Result;
});
   }

    // GetDurationForSegment
   GetDurationForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetDurationForSegment", [MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEndForSegment
   GetEndForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetEndForSegment", [MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileDuration
   GetFileDuration(MediaFile) {
  if (typeof MediaFile.FileDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileDuration);
  });
  return this.sageAPI.invoke("GetFileDuration", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FileDuration=json.Result;
  return json.Result;
});
   }

    // GetFileEndTime
   GetFileEndTime(MediaFile) {
  if (typeof MediaFile.FileEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileEndTime);
  });
  return this.sageAPI.invoke("GetFileEndTime", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FileEndTime=json.Result;
  return json.Result;
});
   }

    // GetFileForSegment
   GetFileForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetFileForSegment", [MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileStartTime
   GetFileStartTime(MediaFile) {
  if (typeof MediaFile.FileStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileStartTime);
  });
  return this.sageAPI.invoke("GetFileStartTime", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FileStartTime=json.Result;
  return json.Result;
});
   }

    // GetFullImage
   GetFullImage(MediaFile) {
  if (typeof MediaFile.FullImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FullImage);
  });
  return this.sageAPI.invoke("GetFullImage", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FullImage=json.Result;
  return json.Result;
});
   }

    // GetMediaFileAiring
   GetMediaFileAiring(MediaFile) {
  if (typeof MediaFile.Airing !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Airing);
  });
  return this.sageAPI.invoke("GetMediaFileAiring", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.Airing=json.Result;
  return json.Result;
});
   }

    // GetMediaFileEncoding
   GetMediaFileEncoding(MediaFile) {
  if (typeof MediaFile.Encoding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Encoding);
  });
  return this.sageAPI.invoke("GetMediaFileEncoding", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.Encoding=json.Result;
  return json.Result;
});
   }

    // GetMediaFileForFilePath
   GetMediaFileForFilePath(FilePath) {
  return this.sageAPI.invoke("GetMediaFileForFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileForID
   GetMediaFileForID(id) {
  return this.sageAPI.invoke("GetMediaFileForID", [id]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileFormatDescription
   GetMediaFileFormatDescription(MediaFile) {
  if (typeof MediaFile.FormatDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FormatDescription);
  });
  return this.sageAPI.invoke("GetMediaFileFormatDescription", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FormatDescription=json.Result;
  return json.Result;
});
   }

    // GetMediaFileID
   GetMediaFileID(MediaFile) {
  if (typeof MediaFile.MediaFileID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileID);
  });
  return this.sageAPI.invoke("GetMediaFileID", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileID=json.Result;
  return json.Result;
});
   }

    // GetMediaFileMetadata
   GetMediaFileMetadata(MediaFile, Name) {
  return this.sageAPI.invoke("GetMediaFileMetadata", [MediaFile.MediaFileID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileMetadataProperties
   GetMediaFileMetadataProperties(MediaFile) {
  if (typeof MediaFile.MetadataProperties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MetadataProperties);
  });
  return this.sageAPI.invoke("GetMediaFileMetadataProperties", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MetadataProperties=json.Result;
  return json.Result;
});
   }

    // GetMediaFileRelativePath
   GetMediaFileRelativePath(MediaFile) {
  if (typeof MediaFile.RelativePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.RelativePath);
  });
  return this.sageAPI.invoke("GetMediaFileRelativePath", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.RelativePath=json.Result;
  return json.Result;
});
   }

    // GetMediaFiles
   GetMediaFiles() {
  return this.sageAPI.invoke("GetMediaFiles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFiles
   GetMediaFiles(MediaMask) {
  return this.sageAPI.invoke("GetMediaFiles", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaTitle
   GetMediaTitle(MediaFile) {
  if (typeof MediaFile.MediaTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaTitle);
  });
  return this.sageAPI.invoke("GetMediaTitle", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaTitle=json.Result;
  return json.Result;
});
   }

    // GetNumberOfSegments
   GetNumberOfSegments(MediaFile) {
  if (typeof MediaFile.NumberOfSegments !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.NumberOfSegments);
  });
  return this.sageAPI.invoke("GetNumberOfSegments", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.NumberOfSegments=json.Result;
  return json.Result;
});
   }

    // GetParentDirectory
   GetParentDirectory(MediaFile) {
  if (typeof MediaFile.ParentDirectory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.ParentDirectory);
  });
  return this.sageAPI.invoke("GetParentDirectory", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.ParentDirectory=json.Result;
  return json.Result;
});
   }

    // GetSegmentFiles
   GetSegmentFiles(MediaFile) {
  if (typeof MediaFile.SegmentFiles !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.SegmentFiles);
  });
  return this.sageAPI.invoke("GetSegmentFiles", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.SegmentFiles=json.Result;
  return json.Result;
});
   }

    // GetSize
   GetSize(MediaFile) {
  if (typeof MediaFile.Size !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Size);
  });
  return this.sageAPI.invoke("GetSize", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.Size=json.Result;
  return json.Result;
});
   }

    // GetStartForSegment
   GetStartForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetStartForSegment", [MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetStartTimesForSegments
   GetStartTimesForSegments(MediaFile) {
  if (typeof MediaFile.StartTimesForSegments !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.StartTimesForSegments);
  });
  return this.sageAPI.invoke("GetStartTimesForSegments", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.StartTimesForSegments=json.Result;
  return json.Result;
});
   }

    // GetThumbnail
   GetThumbnail(MediaFile) {
  if (typeof MediaFile.Thumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Thumbnail);
  });
  return this.sageAPI.invoke("GetThumbnail", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.Thumbnail=json.Result;
  return json.Result;
});
   }

    // HasAnyThumbnail
   HasAnyThumbnail(MediaFile) {
  if (typeof MediaFile.HasAnyThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.HasAnyThumbnail);
  });
  return this.sageAPI.invoke("HasAnyThumbnail", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.HasAnyThumbnail=json.Result;
  return json.Result;
});
   }

    // HasSpecificThumbnail
   HasSpecificThumbnail(MediaFile) {
  if (typeof MediaFile.HasSpecificThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.HasSpecificThumbnail);
  });
  return this.sageAPI.invoke("HasSpecificThumbnail", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.HasSpecificThumbnail=json.Result;
  return json.Result;
});
   }

    // IsBluRay
   IsBluRay(MediaFile) {
  if (typeof MediaFile.IsBluRay !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsBluRay);
  });
  return this.sageAPI.invoke("IsBluRay", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsBluRay=json.Result;
  return json.Result;
});
   }

    // IsCompleteRecording
   IsCompleteRecording(MediaFile) {
  if (typeof MediaFile.IsCompleteRecording !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsCompleteRecording);
  });
  return this.sageAPI.invoke("IsCompleteRecording", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsCompleteRecording=json.Result;
  return json.Result;
});
   }

    // IsDVD
   IsDVD(MediaFile) {
  if (typeof MediaFile.IsDVD !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsDVD);
  });
  return this.sageAPI.invoke("IsDVD", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsDVD=json.Result;
  return json.Result;
});
   }

    // IsDVDDrive
   IsDVDDrive(MediaFile) {
  if (typeof MediaFile.IsDVDDrive !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsDVDDrive);
  });
  return this.sageAPI.invoke("IsDVDDrive", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsDVDDrive=json.Result;
  return json.Result;
});
   }

    // IsFileCurrentlyRecording
   IsFileCurrentlyRecording(MediaFile) {
  if (typeof MediaFile.IsFileCurrentlyRecording !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsFileCurrentlyRecording);
  });
  return this.sageAPI.invoke("IsFileCurrentlyRecording", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsFileCurrentlyRecording=json.Result;
  return json.Result;
});
   }

    // IsLibraryFile
   IsLibraryFile(MediaFile) {
  if (typeof MediaFile.IsLibraryFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsLibraryFile);
  });
  return this.sageAPI.invoke("IsLibraryFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsLibraryFile=json.Result;
  return json.Result;
});
   }

    // IsLocalFile
   IsLocalFile(MediaFile) {
  if (typeof MediaFile.IsLocalFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsLocalFile);
  });
  return this.sageAPI.invoke("IsLocalFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsLocalFile=json.Result;
  return json.Result;
});
   }

    // IsMediaFileObject
   IsMediaFileObject(Object) {
  return this.sageAPI.invoke("IsMediaFileObject", [Object]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMusicFile
   IsMusicFile(MediaFile) {
  if (typeof MediaFile.IsMusicFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsMusicFile);
  });
  return this.sageAPI.invoke("IsMusicFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsMusicFile=json.Result;
  return json.Result;
});
   }

    // IsPictureFile
   IsPictureFile(MediaFile) {
  if (typeof MediaFile.IsPictureFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsPictureFile);
  });
  return this.sageAPI.invoke("IsPictureFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsPictureFile=json.Result;
  return json.Result;
});
   }

    // IsTVFile
   IsTVFile(MediaFile) {
  if (typeof MediaFile.IsTVFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsTVFile);
  });
  return this.sageAPI.invoke("IsTVFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsTVFile=json.Result;
  return json.Result;
});
   }

    // IsThumbnailLoaded
   IsThumbnailLoaded(MediaFile) {
  if (typeof MediaFile.IsThumbnailLoaded !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsThumbnailLoaded);
  });
  return this.sageAPI.invoke("IsThumbnailLoaded", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsThumbnailLoaded=json.Result;
  return json.Result;
});
   }

    // IsVideoFile
   IsVideoFile(MediaFile) {
  if (typeof MediaFile.IsVideoFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.IsVideoFile);
  });
  return this.sageAPI.invoke("IsVideoFile", [MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsVideoFile=json.Result;
  return json.Result;
});
   }

    // MoveFileToLibrary
   MoveFileToLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveFileToLibrary", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MoveTVFileOutOfLibrary
   MoveTVFileOutOfLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveTVFileOutOfLibrary", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RegeneratePictureThumbnail
   RegeneratePictureThumbnail(MediaFile) {
  return this.sageAPI.invoke("RegeneratePictureThumbnail", [MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RotatePictureFile
   RotatePictureFile(MediaFile, Degrees) {
  return this.sageAPI.invoke("RotatePictureFile", [MediaFile.MediaFileID,Degrees]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileAiring
   SetMediaFileAiring(MediaFile, Airing) {
  return this.sageAPI.invoke("SetMediaFileAiring", [MediaFile.MediaFileID,Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileMetadata
   SetMediaFileMetadata(MediaFile, Name, Value) {
  return this.sageAPI.invoke("SetMediaFileMetadata", [MediaFile.MediaFileID,Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileShow
   SetMediaFileShow(MediaFile, Show) {
  return this.sageAPI.invoke("SetMediaFileShow", [MediaFile.MediaFileID,Show]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default MediaFileAPI;
