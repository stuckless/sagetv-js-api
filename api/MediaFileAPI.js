class MediaFileAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddMediaFile
   AddMediaFile(File, NamePrefix) {
  return this.sageAPI.invoke("AddMediaFile", {
'File':File
,
'NamePrefix':NamePrefix
});
   }

    // AutorotatePictureFile
   AutorotatePictureFile(MediaFile) {
  return this.sageAPI.invoke("AutorotatePictureFile", {
'MediaFile':MediaFile.ID
});
   }

    // CanAutorotatePictureFile
   CanAutorotatePictureFile(MediaFile) {
  if (typeof MediaFile.AutorotatePictureFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.AutorotatePictureFile);
  });
  return this.sageAPI.invoke("CanAutorotatePictureFile", {
'MediaFile':MediaFile.ID
});
   }

    // CopyToLocalFile
   CopyToLocalFile(MediaFile, LocalFile) {
  return this.sageAPI.invoke("CopyToLocalFile", {
'MediaFile':MediaFile.ID
,
'LocalFile':LocalFile
});
   }

    // CreateTempMediaFile
   CreateTempMediaFile(FilePath) {
  return this.sageAPI.invoke("CreateTempMediaFile", {
'FilePath':FilePath
});
   }

    // DeleteFile
   DeleteFile(MediaFile) {
  return this.sageAPI.invoke("DeleteFile", {
'MediaFile':MediaFile.ID
});
   }

    // DeleteFileWithoutPrejudice
   DeleteFileWithoutPrejudice(MediaFile) {
  return this.sageAPI.invoke("DeleteFileWithoutPrejudice", {
'MediaFile':MediaFile.ID
});
   }

    // FlipPictureFile
   FlipPictureFile(MediaFile, Horizontal) {
  return this.sageAPI.invoke("FlipPictureFile", {
'MediaFile':MediaFile.ID
,
'Horizontal':Horizontal
});
   }

    // GenerateThumbnail
   GenerateThumbnail(MediaFile, Time, Width, Height, File) {
  return this.sageAPI.invoke("GenerateThumbnail", {
'MediaFile':MediaFile.ID
,
'Time':Time
,
'Width':Width
,
'Height':Height
,
'File':File
});
   }

    // GetAlbumForFile
   GetAlbumForFile(MediaFile) {
  if (typeof MediaFile.AlbumForFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.AlbumForFile);
  });
  return this.sageAPI.invoke("GetAlbumForFile", {
'MediaFile':MediaFile.ID
});
   }

    // GetDurationForSegment
   GetDurationForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetDurationForSegment", {
'MediaFile':MediaFile.ID
,
'SegmentNumber':SegmentNumber
});
   }

    // GetEndForSegment
   GetEndForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetEndForSegment", {
'MediaFile':MediaFile.ID
,
'SegmentNumber':SegmentNumber
});
   }

    // GetFileDuration
   GetFileDuration(MediaFile) {
  if (typeof MediaFile.FileDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileDuration);
  });
  return this.sageAPI.invoke("GetFileDuration", {
'MediaFile':MediaFile.ID
});
   }

    // GetFileEndTime
   GetFileEndTime(MediaFile) {
  if (typeof MediaFile.FileEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileEndTime);
  });
  return this.sageAPI.invoke("GetFileEndTime", {
'MediaFile':MediaFile.ID
});
   }

    // GetFileForSegment
   GetFileForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetFileForSegment", {
'MediaFile':MediaFile.ID
,
'SegmentNumber':SegmentNumber
});
   }

    // GetFileStartTime
   GetFileStartTime(MediaFile) {
  if (typeof MediaFile.FileStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileStartTime);
  });
  return this.sageAPI.invoke("GetFileStartTime", {
'MediaFile':MediaFile.ID
});
   }

    // GetFullImage
   GetFullImage(MediaFile) {
  if (typeof MediaFile.FullImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FullImage);
  });
  return this.sageAPI.invoke("GetFullImage", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileAiring
   GetMediaFileAiring(MediaFile) {
  if (typeof MediaFile.Airing !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Airing);
  });
  return this.sageAPI.invoke("GetMediaFileAiring", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileEncoding
   GetMediaFileEncoding(MediaFile) {
  if (typeof MediaFile.Encoding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Encoding);
  });
  return this.sageAPI.invoke("GetMediaFileEncoding", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileForFilePath
   GetMediaFileForFilePath(FilePath) {
  return this.sageAPI.invoke("GetMediaFileForFilePath", {
'FilePath':FilePath
});
   }

    // GetMediaFileForID
   GetMediaFileForID(id) {
  return this.sageAPI.invoke("GetMediaFileForID", {
'id':id
});
   }

    // GetMediaFileFormatDescription
   GetMediaFileFormatDescription(MediaFile) {
  if (typeof MediaFile.FormatDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FormatDescription);
  });
  return this.sageAPI.invoke("GetMediaFileFormatDescription", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileID
   GetMediaFileID(MediaFile) {
  if (typeof MediaFile.ID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.ID);
  });
  return this.sageAPI.invoke("GetMediaFileID", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileMetadata
   GetMediaFileMetadata(MediaFile, Name) {
  return this.sageAPI.invoke("GetMediaFileMetadata", {
'MediaFile':MediaFile.ID
,
'Name':Name
});
   }

    // GetMediaFileMetadataProperties
   GetMediaFileMetadataProperties(MediaFile) {
  if (typeof MediaFile.MetadataProperties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MetadataProperties);
  });
  return this.sageAPI.invoke("GetMediaFileMetadataProperties", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFileRelativePath
   GetMediaFileRelativePath(MediaFile) {
  if (typeof MediaFile.RelativePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.RelativePath);
  });
  return this.sageAPI.invoke("GetMediaFileRelativePath", {
'MediaFile':MediaFile.ID
});
   }

    // GetMediaFiles
   GetMediaFiles() {
  return this.sageAPI.invoke("GetMediaFiles", {
});
   }

    // GetMediaFiles
   GetMediaFiles(MediaMask) {
  return this.sageAPI.invoke("GetMediaFiles", {
'MediaMask':MediaMask
});
   }

    // GetMediaTitle
   GetMediaTitle(MediaFile) {
  if (typeof MediaFile.MediaTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaTitle);
  });
  return this.sageAPI.invoke("GetMediaTitle", {
'MediaFile':MediaFile.ID
});
   }

    // GetNumberOfSegments
   GetNumberOfSegments(MediaFile) {
  if (typeof MediaFile.NumberOfSegments !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.NumberOfSegments);
  });
  return this.sageAPI.invoke("GetNumberOfSegments", {
'MediaFile':MediaFile.ID
});
   }

    // GetParentDirectory
   GetParentDirectory(MediaFile) {
  if (typeof MediaFile.ParentDirectory !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.ParentDirectory);
  });
  return this.sageAPI.invoke("GetParentDirectory", {
'MediaFile':MediaFile.ID
});
   }

    // GetSegmentFiles
   GetSegmentFiles(MediaFile) {
  if (typeof MediaFile.SegmentFiles !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.SegmentFiles);
  });
  return this.sageAPI.invoke("GetSegmentFiles", {
'MediaFile':MediaFile.ID
});
   }

    // GetSize
   GetSize(MediaFile) {
  if (typeof MediaFile.Size !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Size);
  });
  return this.sageAPI.invoke("GetSize", {
'MediaFile':MediaFile.ID
});
   }

    // GetStartForSegment
   GetStartForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetStartForSegment", {
'MediaFile':MediaFile.ID
,
'SegmentNumber':SegmentNumber
});
   }

    // GetStartTimesForSegments
   GetStartTimesForSegments(MediaFile) {
  if (typeof MediaFile.StartTimesForSegments !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.StartTimesForSegments);
  });
  return this.sageAPI.invoke("GetStartTimesForSegments", {
'MediaFile':MediaFile.ID
});
   }

    // GetThumbnail
   GetThumbnail(MediaFile) {
  if (typeof MediaFile.Thumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.Thumbnail);
  });
  return this.sageAPI.invoke("GetThumbnail", {
'MediaFile':MediaFile.ID
});
   }

    // HasAnyThumbnail
   HasAnyThumbnail(MediaFile) {
  if (typeof MediaFile.AnyThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.AnyThumbnail);
  });
  return this.sageAPI.invoke("HasAnyThumbnail", {
'MediaFile':MediaFile.ID
});
   }

    // HasSpecificThumbnail
   HasSpecificThumbnail(MediaFile) {
  if (typeof MediaFile.SpecificThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.SpecificThumbnail);
  });
  return this.sageAPI.invoke("HasSpecificThumbnail", {
'MediaFile':MediaFile.ID
});
   }

    // IsBluRay
   IsBluRay(MediaFile) {
  if (typeof MediaFile.BluRay !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.BluRay);
  });
  return this.sageAPI.invoke("IsBluRay", {
'MediaFile':MediaFile.ID
});
   }

    // IsCompleteRecording
   IsCompleteRecording(MediaFile) {
  if (typeof MediaFile.CompleteRecording !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.CompleteRecording);
  });
  return this.sageAPI.invoke("IsCompleteRecording", {
'MediaFile':MediaFile.ID
});
   }

    // IsDVD
   IsDVD(MediaFile) {
  if (typeof MediaFile.DVD !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.DVD);
  });
  return this.sageAPI.invoke("IsDVD", {
'MediaFile':MediaFile.ID
});
   }

    // IsDVDDrive
   IsDVDDrive(MediaFile) {
  if (typeof MediaFile.DVDDrive !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.DVDDrive);
  });
  return this.sageAPI.invoke("IsDVDDrive", {
'MediaFile':MediaFile.ID
});
   }

    // IsFileCurrentlyRecording
   IsFileCurrentlyRecording(MediaFile) {
  if (typeof MediaFile.FileCurrentlyRecording !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileCurrentlyRecording);
  });
  return this.sageAPI.invoke("IsFileCurrentlyRecording", {
'MediaFile':MediaFile.ID
});
   }

    // IsLibraryFile
   IsLibraryFile(MediaFile) {
  if (typeof MediaFile.LibraryFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.LibraryFile);
  });
  return this.sageAPI.invoke("IsLibraryFile", {
'MediaFile':MediaFile.ID
});
   }

    // IsLocalFile
   IsLocalFile(MediaFile) {
  if (typeof MediaFile.LocalFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.LocalFile);
  });
  return this.sageAPI.invoke("IsLocalFile", {
'MediaFile':MediaFile.ID
});
   }

    // IsMediaFileObject
   IsMediaFileObject(Object) {
  return this.sageAPI.invoke("IsMediaFileObject", {
'Object':Object
});
   }

    // IsMusicFile
   IsMusicFile(MediaFile) {
  if (typeof MediaFile.MusicFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MusicFile);
  });
  return this.sageAPI.invoke("IsMusicFile", {
'MediaFile':MediaFile.ID
});
   }

    // IsPictureFile
   IsPictureFile(MediaFile) {
  if (typeof MediaFile.PictureFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.PictureFile);
  });
  return this.sageAPI.invoke("IsPictureFile", {
'MediaFile':MediaFile.ID
});
   }

    // IsTVFile
   IsTVFile(MediaFile) {
  if (typeof MediaFile.TVFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.TVFile);
  });
  return this.sageAPI.invoke("IsTVFile", {
'MediaFile':MediaFile.ID
});
   }

    // IsThumbnailLoaded
   IsThumbnailLoaded(MediaFile) {
  if (typeof MediaFile.ThumbnailLoaded !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.ThumbnailLoaded);
  });
  return this.sageAPI.invoke("IsThumbnailLoaded", {
'MediaFile':MediaFile.ID
});
   }

    // IsVideoFile
   IsVideoFile(MediaFile) {
  if (typeof MediaFile.VideoFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.VideoFile);
  });
  return this.sageAPI.invoke("IsVideoFile", {
'MediaFile':MediaFile.ID
});
   }

    // MoveFileToLibrary
   MoveFileToLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveFileToLibrary", {
'MediaFile':MediaFile.ID
});
   }

    // MoveTVFileOutOfLibrary
   MoveTVFileOutOfLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveTVFileOutOfLibrary", {
'MediaFile':MediaFile.ID
});
   }

    // RegeneratePictureThumbnail
   RegeneratePictureThumbnail(MediaFile) {
  return this.sageAPI.invoke("RegeneratePictureThumbnail", {
'MediaFile':MediaFile.ID
});
   }

    // RotatePictureFile
   RotatePictureFile(MediaFile, Degrees) {
  return this.sageAPI.invoke("RotatePictureFile", {
'MediaFile':MediaFile.ID
,
'Degrees':Degrees
});
   }

    // SetMediaFileAiring
   SetMediaFileAiring(MediaFile, Airing) {
  return this.sageAPI.invoke("SetMediaFileAiring", {
'MediaFile':MediaFile.ID
,
'Airing':Airing
});
   }

    // SetMediaFileMetadata
   SetMediaFileMetadata(MediaFile, Name, Value) {
  return this.sageAPI.invoke("SetMediaFileMetadata", {
'MediaFile':MediaFile.ID
,
'Name':Name
,
'Value':Value
});
   }

    // SetMediaFileShow
   SetMediaFileShow(MediaFile, Show) {
  return this.sageAPI.invoke("SetMediaFileShow", {
'MediaFile':MediaFile.ID
,
'Show':Show
});
   }
}

    export default MediaFileAPI;
