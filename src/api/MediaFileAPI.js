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
  return this.sageAPI.invoke("AutorotatePictureFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanAutorotatePictureFile
   CanAutorotatePictureFile(MediaFile) {
  if (typeof MediaFile.CanAutorotatePictureFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.CanAutorotatePictureFile);
  });
  return this.sageAPI.invoke("CanAutorotatePictureFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.CanAutorotatePictureFile=json.Result;
  return json.Result;
});
   }

    // CopyToLocalFile
   CopyToLocalFile(MediaFile, LocalFile) {
  return this.sageAPI.invoke("CopyToLocalFile", ['mediafile:'+MediaFile.MediaFileID,LocalFile]).then((json)=>{
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
  return this.sageAPI.invoke("DeleteFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteFileWithoutPrejudice
   DeleteFileWithoutPrejudice(MediaFile) {
  return this.sageAPI.invoke("DeleteFileWithoutPrejudice", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FlipPictureFile
   FlipPictureFile(MediaFile, Horizontal) {
  return this.sageAPI.invoke("FlipPictureFile", ['mediafile:'+MediaFile.MediaFileID,Horizontal]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GenerateThumbnail
   GenerateThumbnail(MediaFile, Time, Width, Height, File) {
  return this.sageAPI.invoke("GenerateThumbnail", ['mediafile:'+MediaFile.MediaFileID,Time,Width,Height,File]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAlbumForFile
   GetAlbumForFile(MediaFile) {
  if (typeof MediaFile.AlbumForFile !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.AlbumForFile);
  });
  return this.sageAPI.invoke("GetAlbumForFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.AlbumForFile=json.Result;
  return json.Result;
});
   }

    // GetDurationForSegment
   GetDurationForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetDurationForSegment", ['mediafile:'+MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEndForSegment
   GetEndForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetEndForSegment", ['mediafile:'+MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileDuration
   GetFileDuration(MediaFile) {
  if (typeof MediaFile.FileDuration !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileDuration);
  });
  return this.sageAPI.invoke("GetFileDuration", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetFileEndTime", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FileEndTime=json.Result;
  return json.Result;
});
   }

    // GetFileForSegment
   GetFileForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetFileForSegment", ['mediafile:'+MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileStartTime
   GetFileStartTime(MediaFile) {
  if (typeof MediaFile.FileStartTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.FileStartTime);
  });
  return this.sageAPI.invoke("GetFileStartTime", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetFullImage", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.FullImage=json.Result;
  return json.Result;
});
   }

    // GetMediaFileAiring
   GetMediaFileAiring(MediaFile) {
  if (typeof MediaFile.MediaFileAiring !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileAiring);
  });
  return this.sageAPI.invoke("GetMediaFileAiring", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileAiring=json.Result;
  return json.Result;
});
   }

    // GetMediaFileEncoding
   GetMediaFileEncoding(MediaFile) {
  if (typeof MediaFile.MediaFileEncoding !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileEncoding);
  });
  return this.sageAPI.invoke("GetMediaFileEncoding", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileEncoding=json.Result;
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
  if (typeof MediaFile.MediaFileFormatDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileFormatDescription);
  });
  return this.sageAPI.invoke("GetMediaFileFormatDescription", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileFormatDescription=json.Result;
  return json.Result;
});
   }

    // GetMediaFileID
   GetMediaFileID(MediaFile) {
  if (typeof MediaFile.MediaFileID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileID);
  });
  return this.sageAPI.invoke("GetMediaFileID", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileID=json.Result;
  return json.Result;
});
   }

    // GetMediaFileMetadata
   GetMediaFileMetadata(MediaFile, Name) {
  return this.sageAPI.invoke("GetMediaFileMetadata", ['mediafile:'+MediaFile.MediaFileID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFileMetadataProperties
   GetMediaFileMetadataProperties(MediaFile) {
  if (typeof MediaFile.MediaFileMetadataProperties !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileMetadataProperties);
  });
  return this.sageAPI.invoke("GetMediaFileMetadataProperties", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileMetadataProperties=json.Result;
  return json.Result;
});
   }

    // GetMediaFileRelativePath
   GetMediaFileRelativePath(MediaFile) {
  if (typeof MediaFile.MediaFileRelativePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.MediaFileRelativePath);
  });
  return this.sageAPI.invoke("GetMediaFileRelativePath", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.MediaFileRelativePath=json.Result;
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
  return this.sageAPI.invoke("GetMediaTitle", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNumberOfSegments", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetParentDirectory", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSegmentFiles", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetSize", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.Size=json.Result;
  return json.Result;
});
   }

    // GetStartForSegment
   GetStartForSegment(MediaFile, SegmentNumber) {
  return this.sageAPI.invoke("GetStartForSegment", ['mediafile:'+MediaFile.MediaFileID,SegmentNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetStartTimesForSegments
   GetStartTimesForSegments(MediaFile) {
  if (typeof MediaFile.StartTimesForSegments !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaFile.StartTimesForSegments);
  });
  return this.sageAPI.invoke("GetStartTimesForSegments", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("GetThumbnail", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("HasAnyThumbnail", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("HasSpecificThumbnail", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsBluRay", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsCompleteRecording", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsDVD", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsDVDDrive", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsFileCurrentlyRecording", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsLibraryFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsLocalFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsMusicFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPictureFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsTVFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsThumbnailLoaded", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
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
  return this.sageAPI.invoke("IsVideoFile", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaFile.IsVideoFile=json.Result;
  return json.Result;
});
   }

    // MoveFileToLibrary
   MoveFileToLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveFileToLibrary", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // MoveTVFileOutOfLibrary
   MoveTVFileOutOfLibrary(MediaFile) {
  return this.sageAPI.invoke("MoveTVFileOutOfLibrary", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RegeneratePictureThumbnail
   RegeneratePictureThumbnail(MediaFile) {
  return this.sageAPI.invoke("RegeneratePictureThumbnail", ['mediafile:'+MediaFile.MediaFileID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RotatePictureFile
   RotatePictureFile(MediaFile, Degrees) {
  return this.sageAPI.invoke("RotatePictureFile", ['mediafile:'+MediaFile.MediaFileID,Degrees]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileAiring
   SetMediaFileAiring(MediaFile, Airing) {
  return this.sageAPI.invoke("SetMediaFileAiring", ['mediafile:'+MediaFile.MediaFileID,Airing]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileMetadata
   SetMediaFileMetadata(MediaFile, Name, Value) {
  return this.sageAPI.invoke("SetMediaFileMetadata", ['mediafile:'+MediaFile.MediaFileID,Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaFileShow
   SetMediaFileShow(MediaFile, Show) {
  return this.sageAPI.invoke("SetMediaFileShow", ['mediafile:'+MediaFile.MediaFileID,Show]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for MediaFile
MediaFileAPI.CanAutorotatePictureFile="CanAutorotatePictureFile";
MediaFileAPI.AlbumForFile="AlbumForFile";
MediaFileAPI.FileDuration="FileDuration";
MediaFileAPI.FileEndTime="FileEndTime";
MediaFileAPI.FileStartTime="FileStartTime";
MediaFileAPI.FullImage="FullImage";
MediaFileAPI.MediaFileAiring="MediaFileAiring";
MediaFileAPI.MediaFileEncoding="MediaFileEncoding";
MediaFileAPI.MediaFileFormatDescription="MediaFileFormatDescription";
MediaFileAPI.MediaFileID="MediaFileID";
MediaFileAPI.MediaFileMetadataProperties="MediaFileMetadataProperties";
MediaFileAPI.MediaFileRelativePath="MediaFileRelativePath";
MediaFileAPI.MediaTitle="MediaTitle";
MediaFileAPI.NumberOfSegments="NumberOfSegments";
MediaFileAPI.ParentDirectory="ParentDirectory";
MediaFileAPI.SegmentFiles="SegmentFiles";
MediaFileAPI.Size="Size";
MediaFileAPI.StartTimesForSegments="StartTimesForSegments";
MediaFileAPI.Thumbnail="Thumbnail";
MediaFileAPI.HasAnyThumbnail="HasAnyThumbnail";
MediaFileAPI.HasSpecificThumbnail="HasSpecificThumbnail";
MediaFileAPI.IsBluRay="IsBluRay";
MediaFileAPI.IsCompleteRecording="IsCompleteRecording";
MediaFileAPI.IsDVD="IsDVD";
MediaFileAPI.IsDVDDrive="IsDVDDrive";
MediaFileAPI.IsFileCurrentlyRecording="IsFileCurrentlyRecording";
MediaFileAPI.IsLibraryFile="IsLibraryFile";
MediaFileAPI.IsLocalFile="IsLocalFile";
MediaFileAPI.IsMusicFile="IsMusicFile";
MediaFileAPI.IsPictureFile="IsPictureFile";
MediaFileAPI.IsTVFile="IsTVFile";
MediaFileAPI.IsThumbnailLoaded="IsThumbnailLoaded";
MediaFileAPI.IsVideoFile="IsVideoFile";
// Metadata Field Constants for a MediaFile
MediaFileAPI.MetadataProperties={};
MediaFileAPI.MetadataProperties.Title="Title";
MediaFileAPI.MetadataProperties.EpisodeName="EpisodeName";
MediaFileAPI.MetadataProperties.Genre="Genre";
MediaFileAPI.MetadataProperties.GenreID="GenreID";
MediaFileAPI.MetadataProperties.Description="Description";
MediaFileAPI.MetadataProperties.Year="Year";
MediaFileAPI.MetadataProperties.Language="Language";
MediaFileAPI.MetadataProperties.Rated="Rated";
MediaFileAPI.MetadataProperties.ParentalRating="ParentalRating";
MediaFileAPI.MetadataProperties.RunningTime="RunningTime";
MediaFileAPI.MetadataProperties.OriginalAirDate="OriginalAirDate";
MediaFileAPI.MetadataProperties.ExtendedRatings="ExtendedRatings";
MediaFileAPI.MetadataProperties.Misc="Misc";
MediaFileAPI.MetadataProperties.PartNumber="PartNumber";
MediaFileAPI.MetadataProperties.TotalParts="TotalParts";
MediaFileAPI.MetadataProperties.HDTV="HDTV";
MediaFileAPI.MetadataProperties.CC="CC";
MediaFileAPI.MetadataProperties.Stereo="Stereo";
MediaFileAPI.MetadataProperties.Subtitled="Subtitled";
MediaFileAPI.MetadataProperties.Premiere="Premiere";
MediaFileAPI.MetadataProperties.SeasonPremiere="SeasonPremiere";
MediaFileAPI.MetadataProperties.SeriesPremiere="SeriesPremiere";
MediaFileAPI.MetadataProperties.ChannelPremiere="ChannelPremiere";
MediaFileAPI.MetadataProperties.SeasonFinal="SeasonFinal";
MediaFileAPI.MetadataProperties.SeriesFinale="SeriesFinale";
MediaFileAPI.MetadataProperties.SAP="SAP";
MediaFileAPI.MetadataProperties.ExternalID="ExternalID";
MediaFileAPI.MetadataProperties.Width="Width";
MediaFileAPI.MetadataProperties.Height="Height";
MediaFileAPI.MetadataProperties.Track="Track";
MediaFileAPI.MetadataProperties.TotalTracks="TotalTracks";
MediaFileAPI.MetadataProperties.Comment="Comment";
MediaFileAPI.MetadataProperties.AiringTime="AiringTime";
MediaFileAPI.MetadataProperties.ThumbnailOffset="ThumbnailOffset";
MediaFileAPI.MetadataProperties.ThumbnailSize="ThumbnailSize";
MediaFileAPI.MetadataProperties.ThumbnailDesc="ThumbnailDesc";
MediaFileAPI.MetadataProperties.Duration="Duration";
MediaFileAPI.MetadataProperties.Picture_Resolution="Picture.Resolution";
MediaFileAPI.MetadataProperties.MediaTitle="MediaTitle";
MediaFileAPI.MetadataProperties.MediaType="MediaType";
MediaFileAPI.MetadataProperties.SeasonNumber="SeasonNumber";
MediaFileAPI.MetadataProperties.EpisodeNumber="EpisodeNumber";
MediaFileAPI.MetadataProperties.IMDBID="IMDBID";
MediaFileAPI.MetadataProperties.DiscNumber="DiscNumber";
MediaFileAPI.MetadataProperties.MediaProviderID="MediaProviderID";
MediaFileAPI.MetadataProperties.MediaProviderDataID="MediaProviderDataID";
MediaFileAPI.MetadataProperties.UserRating="UserRating";
MediaFileAPI.MetadataProperties.Fanart="Fanart";
MediaFileAPI.MetadataProperties.TrailerUrl="TrailerUrl";
MediaFileAPI.MetadataProperties.SeriesInfoID="SeriesInfoID";
MediaFileAPI.MetadataProperties.EpisodeCount="EpisodeCount";
MediaFileAPI.MetadataProperties.CollectionName="CollectionName";
MediaFileAPI.MetadataProperties.CollectionID="CollectionID";
MediaFileAPI.MetadataProperties.CollectionOverview="CollectionOverview";
MediaFileAPI.MetadataProperties.DefaultPoster="DefaultPoster";
MediaFileAPI.MetadataProperties.DefaultBanner="DefaultBanner";
MediaFileAPI.MetadataProperties.DefaultBackground="DefaultBackground";
MediaFileAPI.MetadataProperties.ScrapedBy="ScrapedBy";
MediaFileAPI.MetadataProperties.ScrapedDate="ScrapedDate";
MediaFileAPI.MetadataProperties.TagLine="TagLine";
MediaFileAPI.MetadataProperties.Quotes="Quotes";
MediaFileAPI.MetadataProperties.Trivia="Trivia";
    export default MediaFileAPI;
