class TranscodeAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddTranscodeFormat
   AddTranscodeFormat(FormatName, FormatDetails) {
  return this.sageAPI.invoke("AddTranscodeFormat", {
'FormatName':FormatName
,
'FormatDetails':FormatDetails
});
   }

    // AddTranscodeJob
   AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode) {
  return this.sageAPI.invoke("AddTranscodeJob", {
'SourceMediaFile':SourceMediaFile
,
'FormatName':FormatName
,
'DestinationFile':DestinationFile
,
'DeleteSourceAfterTranscode':DeleteSourceAfterTranscode
});
   }

    // AddTranscodeJob
   AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode, ClipTimeStart, ClipDuration) {
  return this.sageAPI.invoke("AddTranscodeJob", {
'SourceMediaFile':SourceMediaFile
,
'FormatName':FormatName
,
'DestinationFile':DestinationFile
,
'DeleteSourceAfterTranscode':DeleteSourceAfterTranscode
,
'ClipTimeStart':ClipTimeStart
,
'ClipDuration':ClipDuration
});
   }

    // CanFileBeTranscoded
   CanFileBeTranscoded(MediaFile) {
  return this.sageAPI.invoke("CanFileBeTranscoded", {
'MediaFile':MediaFile
});
   }

    // CancelTranscodeJob
   CancelTranscodeJob(JobID) {
  return this.sageAPI.invoke("CancelTranscodeJob", {
'JobID':JobID
});
   }

    // ClearTranscodedJobs
   ClearTranscodedJobs() {
  return this.sageAPI.invoke("ClearTranscodedJobs", {
});
   }

    // GetTranscodeFormatDetails
   GetTranscodeFormatDetails(FormatName) {
  return this.sageAPI.invoke("GetTranscodeFormatDetails", {
'FormatName':FormatName
});
   }

    // GetTranscodeFormats
   GetTranscodeFormats() {
  return this.sageAPI.invoke("GetTranscodeFormats", {
});
   }

    // GetTranscodeJobClipDuration
   GetTranscodeJobClipDuration(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobClipDuration", {
'JobID':JobID
});
   }

    // GetTranscodeJobClipStart
   GetTranscodeJobClipStart(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobClipStart", {
'JobID':JobID
});
   }

    // GetTranscodeJobCompletePercent
   GetTranscodeJobCompletePercent(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobCompletePercent", {
'JobID':JobID
});
   }

    // GetTranscodeJobDestFile
   GetTranscodeJobDestFile(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobDestFile", {
'JobID':JobID
});
   }

    // GetTranscodeJobFormat
   GetTranscodeJobFormat(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobFormat", {
'JobID':JobID
});
   }

    // GetTranscodeJobShouldKeepOriginal
   GetTranscodeJobShouldKeepOriginal(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobShouldKeepOriginal", {
'JobID':JobID
});
   }

    // GetTranscodeJobSourceFile
   GetTranscodeJobSourceFile(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobSourceFile", {
'JobID':JobID
});
   }

    // GetTranscodeJobStatus
   GetTranscodeJobStatus(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobStatus", {
'JobID':JobID
});
   }

    // GetTranscodeJobs
   GetTranscodeJobs() {
  return this.sageAPI.invoke("GetTranscodeJobs", {
});
   }

    // RemoveTranscodeFormat
   RemoveTranscodeFormat(FormatName) {
  return this.sageAPI.invoke("RemoveTranscodeFormat", {
'FormatName':FormatName
});
   }
}

    export default TranscodeAPI;
