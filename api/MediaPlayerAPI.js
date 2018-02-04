class MediaPlayerAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // ApplyRelativeSubtitleAdjustment
   ApplyRelativeSubtitleAdjustment(SubCount) {
  return this.sageAPI.invoke("ApplyRelativeSubtitleAdjustment", [SubCount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanAdjustSubtitleTiming
   CanAdjustSubtitleTiming() {
  return this.sageAPI.invoke("CanAdjustSubtitleTiming", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ChannelDown
   ChannelDown() {
  return this.sageAPI.invoke("ChannelDown", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ChannelSet
   ChannelSet(ChannelNumber) {
  return this.sageAPI.invoke("ChannelSet", [ChannelNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ChannelUp
   ChannelUp() {
  return this.sageAPI.invoke("ChannelUp", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearRecentChannels
   ClearRecentChannels() {
  return this.sageAPI.invoke("ClearRecentChannels", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CloseAndWaitUntilClosed
   CloseAndWaitUntilClosed() {
  return this.sageAPI.invoke("CloseAndWaitUntilClosed", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDAngleChange
   DVDAngleChange(AngleNum) {
  return this.sageAPI.invoke("DVDAngleChange", [AngleNum]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDAudioChange
   DVDAudioChange(AudioNum) {
  return this.sageAPI.invoke("DVDAudioChange", [AudioNum]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDChapterNext
   DVDChapterNext() {
  return this.sageAPI.invoke("DVDChapterNext", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDChapterPrevious
   DVDChapterPrevious() {
  return this.sageAPI.invoke("DVDChapterPrevious", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDChapterSet
   DVDChapterSet(ChapterNumber) {
  return this.sageAPI.invoke("DVDChapterSet", [ChapterNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDEnter
   DVDEnter() {
  return this.sageAPI.invoke("DVDEnter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDMenu
   DVDMenu() {
  return this.sageAPI.invoke("DVDMenu", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDReturn
   DVDReturn() {
  return this.sageAPI.invoke("DVDReturn", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDSubtitleChange
   DVDSubtitleChange(SubtitleNum) {
  return this.sageAPI.invoke("DVDSubtitleChange", [SubtitleNum]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDSubtitleToggle
   DVDSubtitleToggle() {
  return this.sageAPI.invoke("DVDSubtitleToggle", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDTitleMenu
   DVDTitleMenu() {
  return this.sageAPI.invoke("DVDTitleMenu", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDTitleNext
   DVDTitleNext() {
  return this.sageAPI.invoke("DVDTitleNext", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDTitlePrevious
   DVDTitlePrevious() {
  return this.sageAPI.invoke("DVDTitlePrevious", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DirectPlaybackControl
   DirectPlaybackControl(Code, Param1, Param2) {
  return this.sageAPI.invoke("DirectPlaybackControl", [Code,Param1,Param2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DoesCurrentMediaFileHaveVideo
   DoesCurrentMediaFileHaveVideo() {
  return this.sageAPI.invoke("DoesCurrentMediaFileHaveVideo", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAvailableSeekingEnd
   GetAvailableSeekingEnd() {
  return this.sageAPI.invoke("GetAvailableSeekingEnd", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAvailableSeekingStart
   GetAvailableSeekingStart() {
  return this.sageAPI.invoke("GetAvailableSeekingStart", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetBluRayTitleDescription
   GetBluRayTitleDescription(TitleNum) {
  return this.sageAPI.invoke("GetBluRayTitleDescription", [TitleNum]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentMediaFile
   GetCurrentMediaFile() {
  return this.sageAPI.invoke("GetCurrentMediaFile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentMediaTitle
   GetCurrentMediaTitle() {
  return this.sageAPI.invoke("GetCurrentMediaTitle", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentPlaylist
   GetCurrentPlaylist() {
  return this.sageAPI.invoke("GetCurrentPlaylist", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentPlaylistIndex
   GetCurrentPlaylistIndex() {
  return this.sageAPI.invoke("GetCurrentPlaylistIndex", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDAvailableLanguages
   GetDVDAvailableLanguages() {
  return this.sageAPI.invoke("GetDVDAvailableLanguages", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDAvailableSubpictures
   GetDVDAvailableSubpictures() {
  return this.sageAPI.invoke("GetDVDAvailableSubpictures", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentAngle
   GetDVDCurrentAngle() {
  return this.sageAPI.invoke("GetDVDCurrentAngle", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentChapter
   GetDVDCurrentChapter() {
  return this.sageAPI.invoke("GetDVDCurrentChapter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentDomain
   GetDVDCurrentDomain() {
  return this.sageAPI.invoke("GetDVDCurrentDomain", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentLanguage
   GetDVDCurrentLanguage() {
  return this.sageAPI.invoke("GetDVDCurrentLanguage", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentSubpicture
   GetDVDCurrentSubpicture() {
  return this.sageAPI.invoke("GetDVDCurrentSubpicture", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDCurrentTitle
   GetDVDCurrentTitle() {
  return this.sageAPI.invoke("GetDVDCurrentTitle", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDNumberOfAngles
   GetDVDNumberOfAngles() {
  return this.sageAPI.invoke("GetDVDNumberOfAngles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDNumberOfChapters
   GetDVDNumberOfChapters() {
  return this.sageAPI.invoke("GetDVDNumberOfChapters", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDNumberOfTitles
   GetDVDNumberOfTitles() {
  return this.sageAPI.invoke("GetDVDNumberOfTitles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaDuration
   GetMediaDuration() {
  return this.sageAPI.invoke("GetMediaDuration", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaPlayerClosedCaptionState
   GetMediaPlayerClosedCaptionState() {
  return this.sageAPI.invoke("GetMediaPlayerClosedCaptionState", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaTime
   GetMediaTime() {
  return this.sageAPI.invoke("GetMediaTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPlaybackRate
   GetPlaybackRate() {
  return this.sageAPI.invoke("GetPlaybackRate", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRawMediaTime
   GetRawMediaTime() {
  return this.sageAPI.invoke("GetRawMediaTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRecentChannels
   GetRecentChannels() {
  return this.sageAPI.invoke("GetRecentChannels", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubtitleDelay
   GetSubtitleDelay() {
  return this.sageAPI.invoke("GetSubtitleDelay", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoSnapshot
   GetVideoSnapshot() {
  return this.sageAPI.invoke("GetVideoSnapshot", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVolume
   GetVolume() {
  return this.sageAPI.invoke("GetVolume", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasMediaFile
   HasMediaFile() {
  return this.sageAPI.invoke("HasMediaFile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCorrectParentalLockCode
   IsCorrectParentalLockCode(ParentalLockCode) {
  return this.sageAPI.invoke("IsCorrectParentalLockCode", [ParentalLockCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCurrentMediaFileDVD
   IsCurrentMediaFileDVD() {
  return this.sageAPI.invoke("IsCurrentMediaFileDVD", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCurrentMediaFileMusic
   IsCurrentMediaFileMusic() {
  return this.sageAPI.invoke("IsCurrentMediaFileMusic", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCurrentMediaFileRecording
   IsCurrentMediaFileRecording() {
  return this.sageAPI.invoke("IsCurrentMediaFileRecording", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMediaPlayerFullyLoaded
   IsMediaPlayerFullyLoaded() {
  return this.sageAPI.invoke("IsMediaPlayerFullyLoaded", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMediaPlayerLoading
   IsMediaPlayerLoading() {
  return this.sageAPI.invoke("IsMediaPlayerLoading", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMediaPlayerSignalLost
   IsMediaPlayerSignalLost() {
  return this.sageAPI.invoke("IsMediaPlayerSignalLost", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMuted
   IsMuted() {
  return this.sageAPI.invoke("IsMuted", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPlaying
   IsPlaying() {
  return this.sageAPI.invoke("IsPlaying", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsShowingDVDMenu
   IsShowingDVDMenu() {
  return this.sageAPI.invoke("IsShowingDVDMenu", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LockTuner
   LockTuner(CaptureDeviceInput) {
  return this.sageAPI.invoke("LockTuner", [CaptureDeviceInput]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Pause
   Pause() {
  return this.sageAPI.invoke("Pause", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Play
   Play() {
  return this.sageAPI.invoke("Play", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PlayFaster
   PlayFaster() {
  return this.sageAPI.invoke("PlayFaster", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PlayPause
   PlayPause() {
  return this.sageAPI.invoke("PlayPause", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PlaySlower
   PlaySlower() {
  return this.sageAPI.invoke("PlaySlower", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReloadCurrentFile
   ReloadCurrentFile() {
  return this.sageAPI.invoke("ReloadCurrentFile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Seek
   Seek(Time) {
  return this.sageAPI.invoke("Seek", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMediaPlayerClosedCaptionState
   SetMediaPlayerClosedCaptionState(CCType) {
  return this.sageAPI.invoke("SetMediaPlayerClosedCaptionState", [CCType]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMute
   SetMute(Muted) {
  return this.sageAPI.invoke("SetMute", [Muted]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPlaybackRate
   SetPlaybackRate(PlaybackRate) {
  return this.sageAPI.invoke("SetPlaybackRate", [PlaybackRate]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSubtitleDelay
   SetSubtitleDelay(DelayMsec) {
  return this.sageAPI.invoke("SetSubtitleDelay", [DelayMsec]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoAlwaysOnTop
   SetVideoAlwaysOnTop(OnTop) {
  return this.sageAPI.invoke("SetVideoAlwaysOnTop", [OnTop]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVolume
   SetVolume(Amount) {
  return this.sageAPI.invoke("SetVolume", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SkipBackwards
   SkipBackwards() {
  return this.sageAPI.invoke("SkipBackwards", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SkipBackwards2
   SkipBackwards2() {
  return this.sageAPI.invoke("SkipBackwards2", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SkipForward
   SkipForward() {
  return this.sageAPI.invoke("SkipForward", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SkipForward2
   SkipForward2() {
  return this.sageAPI.invoke("SkipForward2", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartPlaylist
   StartPlaylist(Playlist) {
  return this.sageAPI.invoke("StartPlaylist", [Playlist]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartPlaylistAt
   StartPlaylistAt(Playlist, StartIndex) {
  return this.sageAPI.invoke("StartPlaylistAt", [Playlist,StartIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // VolumeAdjust
   VolumeAdjust(Amount) {
  return this.sageAPI.invoke("VolumeAdjust", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // VolumeDown
   VolumeDown() {
  return this.sageAPI.invoke("VolumeDown", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // VolumeUp
   VolumeUp() {
  return this.sageAPI.invoke("VolumeUp", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Watch
   Watch(Content) {
  return this.sageAPI.invoke("Watch", [Content]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // WatchLive
   WatchLive(CaptureDeviceInput, PauseBufferSize) {
  return this.sageAPI.invoke("WatchLive", [CaptureDeviceInput,PauseBufferSize]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // WatchLive
   WatchLive(CaptureDeviceInput, PauseBufferSize, PhysicalChannel) {
  return this.sageAPI.invoke("WatchLive", [CaptureDeviceInput,PauseBufferSize,PhysicalChannel]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // WatchLocalFile
   WatchLocalFile(file) {
  return this.sageAPI.invoke("WatchLocalFile", [file]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default MediaPlayerAPI;
