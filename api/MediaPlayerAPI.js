class MediaPlayerAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // ApplyRelativeSubtitleAdjustment
   ApplyRelativeSubtitleAdjustment(SubCount) {
  return this.sageAPI.invoke("ApplyRelativeSubtitleAdjustment", {
'SubCount':SubCount
});
   }

    // CanAdjustSubtitleTiming
   CanAdjustSubtitleTiming() {
  return this.sageAPI.invoke("CanAdjustSubtitleTiming", {
});
   }

    // ChannelDown
   ChannelDown() {
  return this.sageAPI.invoke("ChannelDown", {
});
   }

    // ChannelSet
   ChannelSet(ChannelNumber) {
  return this.sageAPI.invoke("ChannelSet", {
'ChannelNumber':ChannelNumber
});
   }

    // ChannelUp
   ChannelUp() {
  return this.sageAPI.invoke("ChannelUp", {
});
   }

    // ClearRecentChannels
   ClearRecentChannels() {
  return this.sageAPI.invoke("ClearRecentChannels", {
});
   }

    // CloseAndWaitUntilClosed
   CloseAndWaitUntilClosed() {
  return this.sageAPI.invoke("CloseAndWaitUntilClosed", {
});
   }

    // DVDAngleChange
   DVDAngleChange(AngleNum) {
  return this.sageAPI.invoke("DVDAngleChange", {
'AngleNum':AngleNum
});
   }

    // DVDAudioChange
   DVDAudioChange(AudioNum) {
  return this.sageAPI.invoke("DVDAudioChange", {
'AudioNum':AudioNum
});
   }

    // DVDChapterNext
   DVDChapterNext() {
  return this.sageAPI.invoke("DVDChapterNext", {
});
   }

    // DVDChapterPrevious
   DVDChapterPrevious() {
  return this.sageAPI.invoke("DVDChapterPrevious", {
});
   }

    // DVDChapterSet
   DVDChapterSet(ChapterNumber) {
  return this.sageAPI.invoke("DVDChapterSet", {
'ChapterNumber':ChapterNumber
});
   }

    // DVDEnter
   DVDEnter() {
  return this.sageAPI.invoke("DVDEnter", {
});
   }

    // DVDMenu
   DVDMenu() {
  return this.sageAPI.invoke("DVDMenu", {
});
   }

    // DVDReturn
   DVDReturn() {
  return this.sageAPI.invoke("DVDReturn", {
});
   }

    // DVDSubtitleChange
   DVDSubtitleChange(SubtitleNum) {
  return this.sageAPI.invoke("DVDSubtitleChange", {
'SubtitleNum':SubtitleNum
});
   }

    // DVDSubtitleToggle
   DVDSubtitleToggle() {
  return this.sageAPI.invoke("DVDSubtitleToggle", {
});
   }

    // DVDTitleMenu
   DVDTitleMenu() {
  return this.sageAPI.invoke("DVDTitleMenu", {
});
   }

    // DVDTitleNext
   DVDTitleNext() {
  return this.sageAPI.invoke("DVDTitleNext", {
});
   }

    // DVDTitlePrevious
   DVDTitlePrevious() {
  return this.sageAPI.invoke("DVDTitlePrevious", {
});
   }

    // DirectPlaybackControl
   DirectPlaybackControl(Code, Param1, Param2) {
  return this.sageAPI.invoke("DirectPlaybackControl", {
'Code':Code
,
'Param1':Param1
,
'Param2':Param2
});
   }

    // DoesCurrentMediaFileHaveVideo
   DoesCurrentMediaFileHaveVideo() {
  return this.sageAPI.invoke("DoesCurrentMediaFileHaveVideo", {
});
   }

    // GetAvailableSeekingEnd
   GetAvailableSeekingEnd() {
  return this.sageAPI.invoke("GetAvailableSeekingEnd", {
});
   }

    // GetAvailableSeekingStart
   GetAvailableSeekingStart() {
  return this.sageAPI.invoke("GetAvailableSeekingStart", {
});
   }

    // GetBluRayTitleDescription
   GetBluRayTitleDescription(TitleNum) {
  return this.sageAPI.invoke("GetBluRayTitleDescription", {
'TitleNum':TitleNum
});
   }

    // GetCurrentMediaFile
   GetCurrentMediaFile() {
  return this.sageAPI.invoke("GetCurrentMediaFile", {
});
   }

    // GetCurrentMediaTitle
   GetCurrentMediaTitle() {
  return this.sageAPI.invoke("GetCurrentMediaTitle", {
});
   }

    // GetCurrentPlaylist
   GetCurrentPlaylist() {
  return this.sageAPI.invoke("GetCurrentPlaylist", {
});
   }

    // GetCurrentPlaylistIndex
   GetCurrentPlaylistIndex() {
  return this.sageAPI.invoke("GetCurrentPlaylistIndex", {
});
   }

    // GetDVDAvailableLanguages
   GetDVDAvailableLanguages() {
  return this.sageAPI.invoke("GetDVDAvailableLanguages", {
});
   }

    // GetDVDAvailableSubpictures
   GetDVDAvailableSubpictures() {
  return this.sageAPI.invoke("GetDVDAvailableSubpictures", {
});
   }

    // GetDVDCurrentAngle
   GetDVDCurrentAngle() {
  return this.sageAPI.invoke("GetDVDCurrentAngle", {
});
   }

    // GetDVDCurrentChapter
   GetDVDCurrentChapter() {
  return this.sageAPI.invoke("GetDVDCurrentChapter", {
});
   }

    // GetDVDCurrentDomain
   GetDVDCurrentDomain() {
  return this.sageAPI.invoke("GetDVDCurrentDomain", {
});
   }

    // GetDVDCurrentLanguage
   GetDVDCurrentLanguage() {
  return this.sageAPI.invoke("GetDVDCurrentLanguage", {
});
   }

    // GetDVDCurrentSubpicture
   GetDVDCurrentSubpicture() {
  return this.sageAPI.invoke("GetDVDCurrentSubpicture", {
});
   }

    // GetDVDCurrentTitle
   GetDVDCurrentTitle() {
  return this.sageAPI.invoke("GetDVDCurrentTitle", {
});
   }

    // GetDVDNumberOfAngles
   GetDVDNumberOfAngles() {
  return this.sageAPI.invoke("GetDVDNumberOfAngles", {
});
   }

    // GetDVDNumberOfChapters
   GetDVDNumberOfChapters() {
  return this.sageAPI.invoke("GetDVDNumberOfChapters", {
});
   }

    // GetDVDNumberOfTitles
   GetDVDNumberOfTitles() {
  return this.sageAPI.invoke("GetDVDNumberOfTitles", {
});
   }

    // GetMediaDuration
   GetMediaDuration() {
  return this.sageAPI.invoke("GetMediaDuration", {
});
   }

    // GetMediaPlayerClosedCaptionState
   GetMediaPlayerClosedCaptionState() {
  return this.sageAPI.invoke("GetMediaPlayerClosedCaptionState", {
});
   }

    // GetMediaTime
   GetMediaTime() {
  return this.sageAPI.invoke("GetMediaTime", {
});
   }

    // GetPlaybackRate
   GetPlaybackRate() {
  return this.sageAPI.invoke("GetPlaybackRate", {
});
   }

    // GetRawMediaTime
   GetRawMediaTime() {
  return this.sageAPI.invoke("GetRawMediaTime", {
});
   }

    // GetRecentChannels
   GetRecentChannels() {
  return this.sageAPI.invoke("GetRecentChannels", {
});
   }

    // GetSubtitleDelay
   GetSubtitleDelay() {
  return this.sageAPI.invoke("GetSubtitleDelay", {
});
   }

    // GetVideoSnapshot
   GetVideoSnapshot() {
  return this.sageAPI.invoke("GetVideoSnapshot", {
});
   }

    // GetVolume
   GetVolume() {
  return this.sageAPI.invoke("GetVolume", {
});
   }

    // HasMediaFile
   HasMediaFile() {
  return this.sageAPI.invoke("HasMediaFile", {
});
   }

    // IsCorrectParentalLockCode
   IsCorrectParentalLockCode(ParentalLockCode) {
  return this.sageAPI.invoke("IsCorrectParentalLockCode", {
'ParentalLockCode':ParentalLockCode
});
   }

    // IsCurrentMediaFileDVD
   IsCurrentMediaFileDVD() {
  return this.sageAPI.invoke("IsCurrentMediaFileDVD", {
});
   }

    // IsCurrentMediaFileMusic
   IsCurrentMediaFileMusic() {
  return this.sageAPI.invoke("IsCurrentMediaFileMusic", {
});
   }

    // IsCurrentMediaFileRecording
   IsCurrentMediaFileRecording() {
  return this.sageAPI.invoke("IsCurrentMediaFileRecording", {
});
   }

    // IsMediaPlayerFullyLoaded
   IsMediaPlayerFullyLoaded() {
  return this.sageAPI.invoke("IsMediaPlayerFullyLoaded", {
});
   }

    // IsMediaPlayerLoading
   IsMediaPlayerLoading() {
  return this.sageAPI.invoke("IsMediaPlayerLoading", {
});
   }

    // IsMediaPlayerSignalLost
   IsMediaPlayerSignalLost() {
  return this.sageAPI.invoke("IsMediaPlayerSignalLost", {
});
   }

    // IsMuted
   IsMuted() {
  return this.sageAPI.invoke("IsMuted", {
});
   }

    // IsPlaying
   IsPlaying() {
  return this.sageAPI.invoke("IsPlaying", {
});
   }

    // IsShowingDVDMenu
   IsShowingDVDMenu() {
  return this.sageAPI.invoke("IsShowingDVDMenu", {
});
   }

    // LockTuner
   LockTuner(CaptureDeviceInput) {
  return this.sageAPI.invoke("LockTuner", {
'CaptureDeviceInput':CaptureDeviceInput
});
   }

    // Pause
   Pause() {
  return this.sageAPI.invoke("Pause", {
});
   }

    // Play
   Play() {
  return this.sageAPI.invoke("Play", {
});
   }

    // PlayFaster
   PlayFaster() {
  return this.sageAPI.invoke("PlayFaster", {
});
   }

    // PlayPause
   PlayPause() {
  return this.sageAPI.invoke("PlayPause", {
});
   }

    // PlaySlower
   PlaySlower() {
  return this.sageAPI.invoke("PlaySlower", {
});
   }

    // ReloadCurrentFile
   ReloadCurrentFile() {
  return this.sageAPI.invoke("ReloadCurrentFile", {
});
   }

    // Seek
   Seek(Time) {
  return this.sageAPI.invoke("Seek", {
'Time':Time
});
   }

    // SetMediaPlayerClosedCaptionState
   SetMediaPlayerClosedCaptionState(CCType) {
  return this.sageAPI.invoke("SetMediaPlayerClosedCaptionState", {
'CCType':CCType
});
   }

    // SetMute
   SetMute(Muted) {
  return this.sageAPI.invoke("SetMute", {
'Muted':Muted
});
   }

    // SetPlaybackRate
   SetPlaybackRate(PlaybackRate) {
  return this.sageAPI.invoke("SetPlaybackRate", {
'PlaybackRate':PlaybackRate
});
   }

    // SetSubtitleDelay
   SetSubtitleDelay(DelayMsec) {
  return this.sageAPI.invoke("SetSubtitleDelay", {
'DelayMsec':DelayMsec
});
   }

    // SetVideoAlwaysOnTop
   SetVideoAlwaysOnTop(OnTop) {
  return this.sageAPI.invoke("SetVideoAlwaysOnTop", {
'OnTop':OnTop
});
   }

    // SetVolume
   SetVolume(Amount) {
  return this.sageAPI.invoke("SetVolume", {
'Amount':Amount
});
   }

    // SkipBackwards
   SkipBackwards() {
  return this.sageAPI.invoke("SkipBackwards", {
});
   }

    // SkipBackwards2
   SkipBackwards2() {
  return this.sageAPI.invoke("SkipBackwards2", {
});
   }

    // SkipForward
   SkipForward() {
  return this.sageAPI.invoke("SkipForward", {
});
   }

    // SkipForward2
   SkipForward2() {
  return this.sageAPI.invoke("SkipForward2", {
});
   }

    // StartPlaylist
   StartPlaylist(Playlist) {
  return this.sageAPI.invoke("StartPlaylist", {
'Playlist':Playlist
});
   }

    // StartPlaylistAt
   StartPlaylistAt(Playlist, StartIndex) {
  return this.sageAPI.invoke("StartPlaylistAt", {
'Playlist':Playlist
,
'StartIndex':StartIndex
});
   }

    // VolumeAdjust
   VolumeAdjust(Amount) {
  return this.sageAPI.invoke("VolumeAdjust", {
'Amount':Amount
});
   }

    // VolumeDown
   VolumeDown() {
  return this.sageAPI.invoke("VolumeDown", {
});
   }

    // VolumeUp
   VolumeUp() {
  return this.sageAPI.invoke("VolumeUp", {
});
   }

    // Watch
   Watch(Content) {
  return this.sageAPI.invoke("Watch", {
'Content':Content
});
   }

    // WatchLive
   WatchLive(CaptureDeviceInput, PauseBufferSize) {
  return this.sageAPI.invoke("WatchLive", {
'CaptureDeviceInput':CaptureDeviceInput
,
'PauseBufferSize':PauseBufferSize
});
   }

    // WatchLive
   WatchLive(CaptureDeviceInput, PauseBufferSize, PhysicalChannel) {
  return this.sageAPI.invoke("WatchLive", {
'CaptureDeviceInput':CaptureDeviceInput
,
'PauseBufferSize':PauseBufferSize
,
'PhysicalChannel':PhysicalChannel
});
   }

    // WatchLocalFile
   WatchLocalFile(file) {
  return this.sageAPI.invoke("WatchLocalFile", {
'file':file
});
   }
}

    export default MediaPlayerAPI;
