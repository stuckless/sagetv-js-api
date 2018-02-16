class TranscodeAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddTranscodeFormat
   AddTranscodeFormat(FormatName, FormatDetails) {
  return this.sageAPI.invoke("AddTranscodeFormat", [FormatName,FormatDetails]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddTranscodeJob
   AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode) {
  return this.sageAPI.invoke("AddTranscodeJob", [SourceMediaFile,FormatName,DestinationFile,DeleteSourceAfterTranscode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddTranscodeJob
   AddTranscodeJob(SourceMediaFile, FormatName, DestinationFile, DeleteSourceAfterTranscode, ClipTimeStart, ClipDuration) {
  return this.sageAPI.invoke("AddTranscodeJob", [SourceMediaFile,FormatName,DestinationFile,DeleteSourceAfterTranscode,ClipTimeStart,ClipDuration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanFileBeTranscoded
   CanFileBeTranscoded(MediaFile) {
  return this.sageAPI.invoke("CanFileBeTranscoded", [MediaFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CancelTranscodeJob
   CancelTranscodeJob(JobID) {
  return this.sageAPI.invoke("CancelTranscodeJob", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearTranscodedJobs
   ClearTranscodedJobs() {
  return this.sageAPI.invoke("ClearTranscodedJobs", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeFormatDetails
   GetTranscodeFormatDetails(FormatName) {
  return this.sageAPI.invoke("GetTranscodeFormatDetails", [FormatName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeFormats
   GetTranscodeFormats() {
  return this.sageAPI.invoke("GetTranscodeFormats", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobClipDuration
   GetTranscodeJobClipDuration(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobClipDuration", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobClipStart
   GetTranscodeJobClipStart(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobClipStart", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobCompletePercent
   GetTranscodeJobCompletePercent(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobCompletePercent", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobDestFile
   GetTranscodeJobDestFile(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobDestFile", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobFormat
   GetTranscodeJobFormat(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobFormat", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobShouldKeepOriginal
   GetTranscodeJobShouldKeepOriginal(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobShouldKeepOriginal", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobSourceFile
   GetTranscodeJobSourceFile(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobSourceFile", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobStatus
   GetTranscodeJobStatus(JobID) {
  return this.sageAPI.invoke("GetTranscodeJobStatus", [JobID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTranscodeJobs
   GetTranscodeJobs() {
  return this.sageAPI.invoke("GetTranscodeJobs", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveTranscodeFormat
   RemoveTranscodeFormat(FormatName) {
  return this.sageAPI.invoke("RemoveTranscodeFormat", [FormatName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Transcode
    export default TranscodeAPI;
