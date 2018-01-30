class Configuration {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddLibraryImportPath
   AddLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddLibraryImportPath", {
'NewPath':NewPath
});
   }

    // AddMusicLibraryImportPath
   AddMusicLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddMusicLibraryImportPath", {
'NewPath':NewPath
});
   }

    // AddPictureLibraryImportPath
   AddPictureLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddPictureLibraryImportPath", {
'NewPath':NewPath
});
   }

    // AddRemoteForInfraredTuningPlugin
   AddRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("AddRemoteForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // AddVideoDirectory
   AddVideoDirectory(Directory, Rule, Size) {
  return this.sageAPI.invoke("AddVideoDirectory", {
'Directory':Directory
,
'Rule':Rule
,
'Size':Size
});
   }

    // AddVideoLibraryImportPath
   AddVideoLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddVideoLibraryImportPath", {
'NewPath':NewPath
});
   }

    // CanDoNativeOutputResolution
   CanDoNativeOutputResolution() {
  return this.sageAPI.invoke("CanDoNativeOutputResolution", {
});
   }

    // ChangeVideoDirectory
   ChangeVideoDirectory(OldDirectory, NewDirectory, NewRule, NewSize) {
  return this.sageAPI.invoke("ChangeVideoDirectory", {
'OldDirectory':OldDirectory
,
'NewDirectory':NewDirectory
,
'NewRule':NewRule
,
'NewSize':NewSize
});
   }

    // GetAllTimeZones
   GetAllTimeZones() {
  return this.sageAPI.invoke("GetAllTimeZones", {
});
   }

    // GetAnalogVideoFormat
   GetAnalogVideoFormat() {
  return this.sageAPI.invoke("GetAnalogVideoFormat", {
});
   }

    // GetAspectRatioMode
   GetAspectRatioMode() {
  return this.sageAPI.invoke("GetAspectRatioMode", {
});
   }

    // GetAspectRatioModes
   GetAspectRatioModes() {
  return this.sageAPI.invoke("GetAspectRatioModes", {
});
   }

    // GetAudioDecoderFilter
   GetAudioDecoderFilter() {
  return this.sageAPI.invoke("GetAudioDecoderFilter", {
});
   }

    // GetAudioDecoderFilters
   GetAudioDecoderFilters() {
  return this.sageAPI.invoke("GetAudioDecoderFilters", {
});
   }

    // GetAudioDelay
   GetAudioDelay() {
  return this.sageAPI.invoke("GetAudioDelay", {
});
   }

    // GetAudioOutput
   GetAudioOutput() {
  return this.sageAPI.invoke("GetAudioOutput", {
});
   }

    // GetAudioOutputOptions
   GetAudioOutputOptions() {
  return this.sageAPI.invoke("GetAudioOutputOptions", {
});
   }

    // GetAudioRenderFilter
   GetAudioRenderFilter() {
  return this.sageAPI.invoke("GetAudioRenderFilter", {
});
   }

    // GetAudioRendererFilters
   GetAudioRendererFilters() {
  return this.sageAPI.invoke("GetAudioRendererFilters", {
});
   }

    // GetAutodialForInternet
   GetAutodialForInternet() {
  return this.sageAPI.invoke("GetAutodialForInternet", {
});
   }

    // GetAvailableCountries
   GetAvailableCountries() {
  return this.sageAPI.invoke("GetAvailableCountries", {
});
   }

    // GetAvailableUILanguages
   GetAvailableUILanguages() {
  return this.sageAPI.invoke("GetAvailableUILanguages", {
});
   }

    // GetBitTimeForInfraredTuningPlugin
   GetBitTimeForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetBitTimeForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetButtonDelayForInfraredTuningPlugin
   GetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetButtonDelayForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetCarrierFrequencyForInfraredTuningPlugin
   GetCarrierFrequencyForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetCarrierFrequencyForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetCommandsForInfraredTuningPlugin
   GetCommandsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetCommandsForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetConfirmCommandForInfraredTuningPlugin
   GetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetConfirmCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetCountry
   GetCountry() {
  return this.sageAPI.invoke("GetCountry", {
});
   }

    // GetCurrentlyAiringProgramsStartLive
   GetCurrentlyAiringProgramsStartLive() {
  return this.sageAPI.invoke("GetCurrentlyAiringProgramsStartLive", {
});
   }

    // GetDVBCRegion
   GetDVBCRegion() {
  return this.sageAPI.invoke("GetDVBCRegion", {
});
   }

    // GetDVBCRegions
   GetDVBCRegions() {
  return this.sageAPI.invoke("GetDVBCRegions", {
});
   }

    // GetDVBSRegion
   GetDVBSRegion() {
  return this.sageAPI.invoke("GetDVBSRegion", {
});
   }

    // GetDVBSRegions
   GetDVBSRegions() {
  return this.sageAPI.invoke("GetDVBSRegions", {
});
   }

    // GetDVBTRegion
   GetDVBTRegion() {
  return this.sageAPI.invoke("GetDVBTRegion", {
});
   }

    // GetDVBTRegions
   GetDVBTRegions() {
  return this.sageAPI.invoke("GetDVBTRegions", {
});
   }

    // GetDVDAudioDecoderFilter
   GetDVDAudioDecoderFilter() {
  return this.sageAPI.invoke("GetDVDAudioDecoderFilter", {
});
   }

    // GetDVDAudioRenderFilter
   GetDVDAudioRenderFilter() {
  return this.sageAPI.invoke("GetDVDAudioRenderFilter", {
});
   }

    // GetDVDDXVADeinterlaceMode
   GetDVDDXVADeinterlaceMode() {
  return this.sageAPI.invoke("GetDVDDXVADeinterlaceMode", {
});
   }

    // GetDVDDXVAMpegMode
   GetDVDDXVAMpegMode() {
  return this.sageAPI.invoke("GetDVDDXVAMpegMode", {
});
   }

    // GetDVDVideoDecoderFilter
   GetDVDVideoDecoderFilter() {
  return this.sageAPI.invoke("GetDVDVideoDecoderFilter", {
});
   }

    // GetDVDVideoRenderFilter
   GetDVDVideoRenderFilter() {
  return this.sageAPI.invoke("GetDVDVideoRenderFilter", {
});
   }

    // GetDXVADeinterlaceMode
   GetDXVADeinterlaceMode() {
  return this.sageAPI.invoke("GetDXVADeinterlaceMode", {
});
   }

    // GetDXVADeinterlaceModes
   GetDXVADeinterlaceModes() {
  return this.sageAPI.invoke("GetDXVADeinterlaceModes", {
});
   }

    // GetDXVAMpegMode
   GetDXVAMpegMode() {
  return this.sageAPI.invoke("GetDXVAMpegMode", {
});
   }

    // GetDXVAMpegModes
   GetDXVAMpegModes() {
  return this.sageAPI.invoke("GetDXVAMpegModes", {
});
   }

    // GetDefaultAudioLanguage
   GetDefaultAudioLanguage() {
  return this.sageAPI.invoke("GetDefaultAudioLanguage", {
});
   }

    // GetDefaultRecordingQuality
   GetDefaultRecordingQuality() {
  return this.sageAPI.invoke("GetDefaultRecordingQuality", {
});
   }

    // GetDefaultSubpicLanguage
   GetDefaultSubpicLanguage() {
  return this.sageAPI.invoke("GetDefaultSubpicLanguage", {
});
   }

    // GetDiskspaceRuleForVideoDirectory
   GetDiskspaceRuleForVideoDirectory(Directory) {
  return this.sageAPI.invoke("GetDiskspaceRuleForVideoDirectory", {
'Directory':Directory
});
   }

    // GetDiskspaceSizeForVideoDirectory
   GetDiskspaceSizeForVideoDirectory(Directory) {
  return this.sageAPI.invoke("GetDiskspaceSizeForVideoDirectory", {
'Directory':Directory
});
   }

    // GetDisplayAspectRatio
   GetDisplayAspectRatio() {
  return this.sageAPI.invoke("GetDisplayAspectRatio", {
});
   }

    // GetDscalerMode
   GetDscalerMode() {
  return this.sageAPI.invoke("GetDscalerMode", {
});
   }

    // GetDscalerModes
   GetDscalerModes() {
  return this.sageAPI.invoke("GetDscalerModes", {
});
   }

    // GetDscalerPlugin
   GetDscalerPlugin() {
  return this.sageAPI.invoke("GetDscalerPlugin", {
});
   }

    // GetDscalerPlugins
   GetDscalerPlugins() {
  return this.sageAPI.invoke("GetDscalerPlugins", {
});
   }

    // GetHDMIAutodetectedConnector
   GetHDMIAutodetectedConnector() {
  return this.sageAPI.invoke("GetHDMIAutodetectedConnector", {
});
   }

    // GetIRCodesLinkedToSageCommand
   GetIRCodesLinkedToSageCommand(SageCommand) {
  return this.sageAPI.invoke("GetIRCodesLinkedToSageCommand", {
'SageCommand':SageCommand
});
   }

    // GetInactivityTimeout
   GetInactivityTimeout() {
  return this.sageAPI.invoke("GetInactivityTimeout", {
});
   }

    // GetInfraredReceiverPort
   GetInfraredReceiverPort() {
  return this.sageAPI.invoke("GetInfraredReceiverPort", {
});
   }

    // GetInfraredTuningPlugins
   GetInfraredTuningPlugins() {
  return this.sageAPI.invoke("GetInfraredTuningPlugins", {
});
   }

    // GetKeystrokesLinkedToSageCommand
   GetKeystrokesLinkedToSageCommand(SageCommand) {
  return this.sageAPI.invoke("GetKeystrokesLinkedToSageCommand", {
'SageCommand':SageCommand
});
   }

    // GetLibraryImportPaths
   GetLibraryImportPaths() {
  return this.sageAPI.invoke("GetLibraryImportPaths", {
});
   }

    // GetMaxChannelDigitsForInfraredTuningPlugin
   GetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetMaxChannelDigitsForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetMixerAudioInputPaths
   GetMixerAudioInputPaths() {
  return this.sageAPI.invoke("GetMixerAudioInputPaths", {
});
   }

    // GetMusicLibraryImportPaths
   GetMusicLibraryImportPaths() {
  return this.sageAPI.invoke("GetMusicLibraryImportPaths", {
});
   }

    // GetNameForIRCode
   GetNameForIRCode(IRCode) {
  return this.sageAPI.invoke("GetNameForIRCode", {
'IRCode':IRCode
});
   }

    // GetOverscanInsetBottom
   GetOverscanInsetBottom() {
  return this.sageAPI.invoke("GetOverscanInsetBottom", {
});
   }

    // GetOverscanInsetLeft
   GetOverscanInsetLeft() {
  return this.sageAPI.invoke("GetOverscanInsetLeft", {
});
   }

    // GetOverscanInsetRight
   GetOverscanInsetRight() {
  return this.sageAPI.invoke("GetOverscanInsetRight", {
});
   }

    // GetOverscanInsetTop
   GetOverscanInsetTop() {
  return this.sageAPI.invoke("GetOverscanInsetTop", {
});
   }

    // GetOverscanInsets
   GetOverscanInsets() {
  return this.sageAPI.invoke("GetOverscanInsets", {
});
   }

    // GetOverscanOffsetX
   GetOverscanOffsetX() {
  return this.sageAPI.invoke("GetOverscanOffsetX", {
});
   }

    // GetOverscanOffsetY
   GetOverscanOffsetY() {
  return this.sageAPI.invoke("GetOverscanOffsetY", {
});
   }

    // GetOverscanScaleHeight
   GetOverscanScaleHeight() {
  return this.sageAPI.invoke("GetOverscanScaleHeight", {
});
   }

    // GetOverscanScaleWidth
   GetOverscanScaleWidth() {
  return this.sageAPI.invoke("GetOverscanScaleWidth", {
});
   }

    // GetPictureLibraryImportPaths
   GetPictureLibraryImportPaths() {
  return this.sageAPI.invoke("GetPictureLibraryImportPaths", {
});
   }

    // GetPrefixCommandForInfraredTuningPlugin
   GetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetPrefixCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetProperty
   GetProperty(PropertyName, DefaultValue) {
  return this.sageAPI.invoke("GetProperty", {
'PropertyName':PropertyName
,
'DefaultValue':DefaultValue
});
   }

    // GetRatingsUnderParentalLock
   GetRatingsUnderParentalLock() {
  return this.sageAPI.invoke("GetRatingsUnderParentalLock", {
});
   }

    // GetRecordingQualities
   GetRecordingQualities() {
  return this.sageAPI.invoke("GetRecordingQualities", {
});
   }

    // GetRecordingQualityBitrate
   GetRecordingQualityBitrate(Quality) {
  return this.sageAPI.invoke("GetRecordingQualityBitrate", {
'Quality':Quality
});
   }

    // GetRecordingQualityFormat
   GetRecordingQualityFormat(Quality) {
  return this.sageAPI.invoke("GetRecordingQualityFormat", {
'Quality':Quality
});
   }

    // GetRemotesForInfraredTuningPlugin
   GetRemotesForInfraredTuningPlugin(PluginName, PluginPortNumber) {
  return this.sageAPI.invoke("GetRemotesForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
});
   }

    // GetSageCommandLinkedToIRCode
   GetSageCommandLinkedToIRCode(IRCode) {
  return this.sageAPI.invoke("GetSageCommandLinkedToIRCode", {
'IRCode':IRCode
});
   }

    // GetSageCommandLinkedToKeystroke
   GetSageCommandLinkedToKeystroke(Keystroke) {
  return this.sageAPI.invoke("GetSageCommandLinkedToKeystroke", {
'Keystroke':Keystroke
});
   }

    // GetScreenSaverTimeout
   GetScreenSaverTimeout() {
  return this.sageAPI.invoke("GetScreenSaverTimeout", {
});
   }

    // GetSequenceDelayForInfraredTuningPlugin
   GetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetSequenceDelayForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // GetServerProperty
   GetServerProperty(PropertyName, DefaultValue) {
  return this.sageAPI.invoke("GetServerProperty", {
'PropertyName':PropertyName
,
'DefaultValue':DefaultValue
});
   }

    // GetServerSubpropertiesThatAreBranches
   GetServerSubpropertiesThatAreBranches(PropertyName) {
  return this.sageAPI.invoke("GetServerSubpropertiesThatAreBranches", {
'PropertyName':PropertyName
});
   }

    // GetServerSubpropertiesThatAreLeaves
   GetServerSubpropertiesThatAreLeaves(PropertyName) {
  return this.sageAPI.invoke("GetServerSubpropertiesThatAreLeaves", {
'PropertyName':PropertyName
});
   }

    // GetSubpicAudioLanguageOptions
   GetSubpicAudioLanguageOptions() {
  return this.sageAPI.invoke("GetSubpicAudioLanguageOptions", {
});
   }

    // GetSubpropertiesThatAreBranches
   GetSubpropertiesThatAreBranches(PropertyName) {
  return this.sageAPI.invoke("GetSubpropertiesThatAreBranches", {
'PropertyName':PropertyName
});
   }

    // GetSubpropertiesThatAreLeaves
   GetSubpropertiesThatAreLeaves(PropertyName) {
  return this.sageAPI.invoke("GetSubpropertiesThatAreLeaves", {
'PropertyName':PropertyName
});
   }

    // GetTimeZone
   GetTimeZone() {
  return this.sageAPI.invoke("GetTimeZone", {
});
   }

    // GetUILanguage
   GetUILanguage() {
  return this.sageAPI.invoke("GetUILanguage", {
});
   }

    // GetVideoBackgroundColor
   GetVideoBackgroundColor() {
  return this.sageAPI.invoke("GetVideoBackgroundColor", {
});
   }

    // GetVideoDecoderFilter
   GetVideoDecoderFilter() {
  return this.sageAPI.invoke("GetVideoDecoderFilter", {
});
   }

    // GetVideoDecoderFilters
   GetVideoDecoderFilters() {
  return this.sageAPI.invoke("GetVideoDecoderFilters", {
});
   }

    // GetVideoDirectories
   GetVideoDirectories() {
  return this.sageAPI.invoke("GetVideoDirectories", {
});
   }

    // GetVideoDiskspaceRules
   GetVideoDiskspaceRules() {
  return this.sageAPI.invoke("GetVideoDiskspaceRules", {
});
   }

    // GetVideoLibraryImportPaths
   GetVideoLibraryImportPaths() {
  return this.sageAPI.invoke("GetVideoLibraryImportPaths", {
});
   }

    // GetVideoOffsetX
   GetVideoOffsetX(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoOffsetX", {
'AspectRatioMode':AspectRatioMode
});
   }

    // GetVideoOffsetY
   GetVideoOffsetY(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoOffsetY", {
'AspectRatioMode':AspectRatioMode
});
   }

    // GetVideoOrbitingDuration
   GetVideoOrbitingDuration() {
  return this.sageAPI.invoke("GetVideoOrbitingDuration", {
});
   }

    // GetVideoZoomX
   GetVideoZoomX(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoZoomX", {
'AspectRatioMode':AspectRatioMode
});
   }

    // GetVideoZoomY
   GetVideoZoomY(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoZoomY", {
'AspectRatioMode':AspectRatioMode
});
   }

    // HasDirectX9
   HasDirectX9() {
  return this.sageAPI.invoke("HasDirectX9", {
});
   }

    // HasEVRSupport
   HasEVRSupport() {
  return this.sageAPI.invoke("HasEVRSupport", {
});
   }

    // HasPVR350TVOutput
   HasPVR350TVOutput() {
  return this.sageAPI.invoke("HasPVR350TVOutput", {
});
   }

    // HasParentalLockCode
   HasParentalLockCode() {
  return this.sageAPI.invoke("HasParentalLockCode", {
});
   }

    // IsAcceleratedDrawingEnabled
   IsAcceleratedDrawingEnabled() {
  return this.sageAPI.invoke("IsAcceleratedDrawingEnabled", {
});
   }

    // IsAdvancedDeinterlacingEnabled
   IsAdvancedDeinterlacingEnabled() {
  return this.sageAPI.invoke("IsAdvancedDeinterlacingEnabled", {
});
   }

    // IsAdvancedDeinterlacingSupported
   IsAdvancedDeinterlacingSupported() {
  return this.sageAPI.invoke("IsAdvancedDeinterlacingSupported", {
});
   }

    // IsDscalerDoubleRefresh
   IsDscalerDoubleRefresh() {
  return this.sageAPI.invoke("IsDscalerDoubleRefresh", {
});
   }

    // IsDscalerEnabled
   IsDscalerEnabled() {
  return this.sageAPI.invoke("IsDscalerEnabled", {
});
   }

    // IsDscalerOddFieldFirst
   IsDscalerOddFieldFirst() {
  return this.sageAPI.invoke("IsDscalerOddFieldFirst", {
});
   }

    // IsIntelligentRecordingDisabled
   IsIntelligentRecordingDisabled() {
  return this.sageAPI.invoke("IsIntelligentRecordingDisabled", {
});
   }

    // IsMajorMinorDTVChannelTuningEnabled
   IsMajorMinorDTVChannelTuningEnabled() {
  return this.sageAPI.invoke("IsMajorMinorDTVChannelTuningEnabled", {
});
   }

    // IsMutedOnAlternateSpeedPlayback
   IsMutedOnAlternateSpeedPlayback() {
  return this.sageAPI.invoke("IsMutedOnAlternateSpeedPlayback", {
});
   }

    // IsNativeOutputResolutionEnabled
   IsNativeOutputResolutionEnabled() {
  return this.sageAPI.invoke("IsNativeOutputResolutionEnabled", {
});
   }

    // IsPVR350OSDEnabled
   IsPVR350OSDEnabled() {
  return this.sageAPI.invoke("IsPVR350OSDEnabled", {
});
   }

    // IsPVR350TVOutputEnabled
   IsPVR350TVOutputEnabled() {
  return this.sageAPI.invoke("IsPVR350TVOutputEnabled", {
});
   }

    // IsParentalControlEnabled
   IsParentalControlEnabled() {
  return this.sageAPI.invoke("IsParentalControlEnabled", {
});
   }

    // IsPlaceshifterLoginCachingAllowed
   IsPlaceshifterLoginCachingAllowed() {
  return this.sageAPI.invoke("IsPlaceshifterLoginCachingAllowed", {
});
   }

    // IsProvideoPentium4FixEnabled
   IsProvideoPentium4FixEnabled() {
  return this.sageAPI.invoke("IsProvideoPentium4FixEnabled", {
});
   }

    // IsRatingUnderParentalLock
   IsRatingUnderParentalLock(Rating) {
  return this.sageAPI.invoke("IsRatingUnderParentalLock", {
'Rating':Rating
});
   }

    // IsSageTVServerEnabled
   IsSageTVServerEnabled() {
  return this.sageAPI.invoke("IsSageTVServerEnabled", {
});
   }

    // IsScreenSaverOnSleepEnabled
   IsScreenSaverOnSleepEnabled() {
  return this.sageAPI.invoke("IsScreenSaverOnSleepEnabled", {
});
   }

    // IsSoftwareDecodingDisabled
   IsSoftwareDecodingDisabled() {
  return this.sageAPI.invoke("IsSoftwareDecodingDisabled", {
});
   }

    // IsSyncSystemClockWithServerEnabled
   IsSyncSystemClockWithServerEnabled() {
  return this.sageAPI.invoke("IsSyncSystemClockWithServerEnabled", {
});
   }

    // IsVideoRendererDefault
   IsVideoRendererDefault() {
  return this.sageAPI.invoke("IsVideoRendererDefault", {
});
   }

    // IsVideoRendererEVR
   IsVideoRendererEVR() {
  return this.sageAPI.invoke("IsVideoRendererEVR", {
});
   }

    // IsVideoRendererOverlay
   IsVideoRendererOverlay() {
  return this.sageAPI.invoke("IsVideoRendererOverlay", {
});
   }

    // IsVideoRendererVMR9
   IsVideoRendererVMR9() {
  return this.sageAPI.invoke("IsVideoRendererVMR9", {
});
   }

    // LearnCommandForInfraredTuningPlugin
   LearnCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
  return this.sageAPI.invoke("LearnCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'CommandName':CommandName
});
   }

    // LinkIRCodeToSageCommand
   LinkIRCodeToSageCommand(IRCode, SageCommand) {
  return this.sageAPI.invoke("LinkIRCodeToSageCommand", {
'IRCode':IRCode
,
'SageCommand':SageCommand
});
   }

    // LinkKeystrokeToSageCommand
   LinkKeystrokeToSageCommand(Keystroke, SageCommand) {
  return this.sageAPI.invoke("LinkKeystrokeToSageCommand", {
'Keystroke':Keystroke
,
'SageCommand':SageCommand
});
   }

    // RemoveCommandForInfraredTuningPlugin
   RemoveCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
  return this.sageAPI.invoke("RemoveCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'CommandName':CommandName
});
   }

    // RemoveLibraryImportPath
   RemoveLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveLibraryImportPath", {
'RemovePath':RemovePath
});
   }

    // RemoveMusicLibraryImportPath
   RemoveMusicLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveMusicLibraryImportPath", {
'RemovePath':RemovePath
});
   }

    // RemovePictureLibraryImportPath
   RemovePictureLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemovePictureLibraryImportPath", {
'RemovePath':RemovePath
});
   }

    // RemoveProperty
   RemoveProperty(PropertyName) {
  return this.sageAPI.invoke("RemoveProperty", {
'PropertyName':PropertyName
});
   }

    // RemovePropertyAndChildren
   RemovePropertyAndChildren(PropertyName) {
  return this.sageAPI.invoke("RemovePropertyAndChildren", {
'PropertyName':PropertyName
});
   }

    // RemoveRemoteForInfraredTuningPlugin
   RemoveRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("RemoveRemoteForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
});
   }

    // RemoveServerProperty
   RemoveServerProperty(PropertyName) {
  return this.sageAPI.invoke("RemoveServerProperty", {
'PropertyName':PropertyName
});
   }

    // RemoveServerPropertyAndChildren
   RemoveServerPropertyAndChildren(PropertyName) {
  return this.sageAPI.invoke("RemoveServerPropertyAndChildren", {
'PropertyName':PropertyName
});
   }

    // RemoveVideoDirectory
   RemoveVideoDirectory(Directory) {
  return this.sageAPI.invoke("RemoveVideoDirectory", {
'Directory':Directory
});
   }

    // RemoveVideoLibraryImportPath
   RemoveVideoLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveVideoLibraryImportPath", {
'RemovePath':RemovePath
});
   }

    // RenameCommandForInfraredTuningPlugin
   RenameCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, OldCommandName, NewCommandName) {
  return this.sageAPI.invoke("RenameCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'OldCommandName':OldCommandName
,
'NewCommandName':NewCommandName
});
   }

    // RunFilterAutoconfiguration
   RunFilterAutoconfiguration() {
  return this.sageAPI.invoke("RunFilterAutoconfiguration", {
});
   }

    // SaveProperties
   SaveProperties() {
  return this.sageAPI.invoke("SaveProperties", {
});
   }

    // SetAcceleratedDrawingEnabled
   SetAcceleratedDrawingEnabled(Enabled) {
  return this.sageAPI.invoke("SetAcceleratedDrawingEnabled", {
'Enabled':Enabled
});
   }

    // SetAdvancedDeinterlacingEnabled
   SetAdvancedDeinterlacingEnabled(Enabled) {
  return this.sageAPI.invoke("SetAdvancedDeinterlacingEnabled", {
'Enabled':Enabled
});
   }

    // SetAllowPlaceshifterLoginCaching
   SetAllowPlaceshifterLoginCaching(Enabled) {
  return this.sageAPI.invoke("SetAllowPlaceshifterLoginCaching", {
'Enabled':Enabled
});
   }

    // SetAnalogVideoFormat
   SetAnalogVideoFormat(Format) {
  return this.sageAPI.invoke("SetAnalogVideoFormat", {
'Format':Format
});
   }

    // SetAspectRatioMode
   SetAspectRatioMode(AspectRatioMode) {
  return this.sageAPI.invoke("SetAspectRatioMode", {
'AspectRatioMode':AspectRatioMode
});
   }

    // SetAudioDecoderFilter
   SetAudioDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetAudioDecoderFilter", {
'FilterName':FilterName
});
   }

    // SetAudioDelay
   SetAudioDelay(Delay) {
  return this.sageAPI.invoke("SetAudioDelay", {
'Delay':Delay
});
   }

    // SetAudioOutput
   SetAudioOutput(AudioOutput) {
  return this.sageAPI.invoke("SetAudioOutput", {
'AudioOutput':AudioOutput
});
   }

    // SetAudioRenderFilter
   SetAudioRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetAudioRenderFilter", {
'FilterName':FilterName
});
   }

    // SetAutodialForInternet
   SetAutodialForInternet(Autodial) {
  return this.sageAPI.invoke("SetAutodialForInternet", {
'Autodial':Autodial
});
   }

    // SetButtonDelayForInfraredTuningPlugin
   SetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
  return this.sageAPI.invoke("SetButtonDelayForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'MsecDelay':MsecDelay
});
   }

    // SetConfirmCommandForInfraredTuningPlugin
   SetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
  return this.sageAPI.invoke("SetConfirmCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'Command':Command
});
   }

    // SetCountry
   SetCountry(Country) {
  return this.sageAPI.invoke("SetCountry", {
'Country':Country
});
   }

    // SetCurrentlyAiringProgramsStartLive
   SetCurrentlyAiringProgramsStartLive(Enabled) {
  return this.sageAPI.invoke("SetCurrentlyAiringProgramsStartLive", {
'Enabled':Enabled
});
   }

    // SetDVBCRegion
   SetDVBCRegion(DVBCRegion) {
  return this.sageAPI.invoke("SetDVBCRegion", {
'DVBCRegion':DVBCRegion
});
   }

    // SetDVBSRegion
   SetDVBSRegion(DVBSRegion) {
  return this.sageAPI.invoke("SetDVBSRegion", {
'DVBSRegion':DVBSRegion
});
   }

    // SetDVBTRegion
   SetDVBTRegion(DVBTRegion) {
  return this.sageAPI.invoke("SetDVBTRegion", {
'DVBTRegion':DVBTRegion
});
   }

    // SetDVDAudioDecoderFilter
   SetDVDAudioDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDAudioDecoderFilter", {
'FilterName':FilterName
});
   }

    // SetDVDAudioRenderFilter
   SetDVDAudioRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDAudioRenderFilter", {
'FilterName':FilterName
});
   }

    // SetDVDDXVADeinterlaceMode
   SetDVDDXVADeinterlaceMode(DeinterlaceMode) {
  return this.sageAPI.invoke("SetDVDDXVADeinterlaceMode", {
'DeinterlaceMode':DeinterlaceMode
});
   }

    // SetDVDDXVAMpegMode
   SetDVDDXVAMpegMode(DXVAMode) {
  return this.sageAPI.invoke("SetDVDDXVAMpegMode", {
'DXVAMode':DXVAMode
});
   }

    // SetDVDVideoDecoderFilter
   SetDVDVideoDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDVideoDecoderFilter", {
'FilterName':FilterName
});
   }

    // SetDVDVideoRenderFilter
   SetDVDVideoRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDVideoRenderFilter", {
'FilterName':FilterName
});
   }

    // SetDXVADeinterlaceMode
   SetDXVADeinterlaceMode(DeinterlaceMode) {
  return this.sageAPI.invoke("SetDXVADeinterlaceMode", {
'DeinterlaceMode':DeinterlaceMode
});
   }

    // SetDXVAMpegMode
   SetDXVAMpegMode(DXVAMode) {
  return this.sageAPI.invoke("SetDXVAMpegMode", {
'DXVAMode':DXVAMode
});
   }

    // SetDefaultAudioLanguage
   SetDefaultAudioLanguage(Language) {
  return this.sageAPI.invoke("SetDefaultAudioLanguage", {
'Language':Language
});
   }

    // SetDefaultRecordingQuality
   SetDefaultRecordingQuality(Quality) {
  return this.sageAPI.invoke("SetDefaultRecordingQuality", {
'Quality':Quality
});
   }

    // SetDefaultSubpicLanguage
   SetDefaultSubpicLanguage(Language) {
  return this.sageAPI.invoke("SetDefaultSubpicLanguage", {
'Language':Language
});
   }

    // SetDisplayAspectRatio
   SetDisplayAspectRatio(DisplayAspectRatio) {
  return this.sageAPI.invoke("SetDisplayAspectRatio", {
'DisplayAspectRatio':DisplayAspectRatio
});
   }

    // SetDscalerDoubleRefresh
   SetDscalerDoubleRefresh(Enabled) {
  return this.sageAPI.invoke("SetDscalerDoubleRefresh", {
'Enabled':Enabled
});
   }

    // SetDscalerEnabled
   SetDscalerEnabled(Enabled) {
  return this.sageAPI.invoke("SetDscalerEnabled", {
'Enabled':Enabled
});
   }

    // SetDscalerMode
   SetDscalerMode(DscalerMode) {
  return this.sageAPI.invoke("SetDscalerMode", {
'DscalerMode':DscalerMode
});
   }

    // SetDscalerOddFieldFirst
   SetDscalerOddFieldFirst(Enabled) {
  return this.sageAPI.invoke("SetDscalerOddFieldFirst", {
'Enabled':Enabled
});
   }

    // SetDscalerPlugin
   SetDscalerPlugin(PluginName) {
  return this.sageAPI.invoke("SetDscalerPlugin", {
'PluginName':PluginName
});
   }

    // SetInactivityTimeout
   SetInactivityTimeout(Timeout) {
  return this.sageAPI.invoke("SetInactivityTimeout", {
'Timeout':Timeout
});
   }

    // SetInfraredReceiverPort
   SetInfraredReceiverPort(Port) {
  return this.sageAPI.invoke("SetInfraredReceiverPort", {
'Port':Port
});
   }

    // SetIntelligentRecordingDisabled
   SetIntelligentRecordingDisabled(Disabled) {
  return this.sageAPI.invoke("SetIntelligentRecordingDisabled", {
'Disabled':Disabled
});
   }

    // SetMajorMinorDTVChannelTuningEnabled
   SetMajorMinorDTVChannelTuningEnabled(Enabled) {
  return this.sageAPI.invoke("SetMajorMinorDTVChannelTuningEnabled", {
'Enabled':Enabled
});
   }

    // SetMaxChannelDigitsForInfraredTuningPlugin
   SetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, NumberOfDigits) {
  return this.sageAPI.invoke("SetMaxChannelDigitsForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'NumberOfDigits':NumberOfDigits
});
   }

    // SetMuteOnAlternateSpeedPlayback
   SetMuteOnAlternateSpeedPlayback(Enabled) {
  return this.sageAPI.invoke("SetMuteOnAlternateSpeedPlayback", {
'Enabled':Enabled
});
   }

    // SetNameForIRCode
   SetNameForIRCode(IRCode, Name) {
  return this.sageAPI.invoke("SetNameForIRCode", {
'IRCode':IRCode
,
'Name':Name
});
   }

    // SetNativeOutputResolutionEnabled
   SetNativeOutputResolutionEnabled(Enabled) {
  return this.sageAPI.invoke("SetNativeOutputResolutionEnabled", {
'Enabled':Enabled
});
   }

    // SetOverscanOffsetX
   SetOverscanOffsetX(Amount) {
  return this.sageAPI.invoke("SetOverscanOffsetX", {
'Amount':Amount
});
   }

    // SetOverscanOffsetY
   SetOverscanOffsetY(Amount) {
  return this.sageAPI.invoke("SetOverscanOffsetY", {
'Amount':Amount
});
   }

    // SetOverscanScaleHeight
   SetOverscanScaleHeight(Amount) {
  return this.sageAPI.invoke("SetOverscanScaleHeight", {
'Amount':Amount
});
   }

    // SetOverscanScaleWidth
   SetOverscanScaleWidth(Amount) {
  return this.sageAPI.invoke("SetOverscanScaleWidth", {
'Amount':Amount
});
   }

    // SetPVR350OSDEnabled
   SetPVR350OSDEnabled(Enabled) {
  return this.sageAPI.invoke("SetPVR350OSDEnabled", {
'Enabled':Enabled
});
   }

    // SetPVR350TVOutputEnabled
   SetPVR350TVOutputEnabled(Enabled) {
  return this.sageAPI.invoke("SetPVR350TVOutputEnabled", {
'Enabled':Enabled
});
   }

    // SetParentalControlEnabled
   SetParentalControlEnabled(Enabled) {
  return this.sageAPI.invoke("SetParentalControlEnabled", {
'Enabled':Enabled
});
   }

    // SetParentalLockCode
   SetParentalLockCode(ParentalLockCode) {
  return this.sageAPI.invoke("SetParentalLockCode", {
'ParentalLockCode':ParentalLockCode
});
   }

    // SetPrefixCommandForInfraredTuningPlugin
   SetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
  return this.sageAPI.invoke("SetPrefixCommandForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'Command':Command
});
   }

    // SetProperty
   SetProperty(PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetProperty", {
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }

    // SetProvideoPentium4FixEnabled
   SetProvideoPentium4FixEnabled(Enabled) {
  return this.sageAPI.invoke("SetProvideoPentium4FixEnabled", {
'Enabled':Enabled
});
   }

    // SetRatingUnderParentalControl
   SetRatingUnderParentalControl(Rating, Restricted) {
  return this.sageAPI.invoke("SetRatingUnderParentalControl", {
'Rating':Rating
,
'Restricted':Restricted
});
   }

    // SetSageTVServerEnabled
   SetSageTVServerEnabled(Enabled) {
  return this.sageAPI.invoke("SetSageTVServerEnabled", {
'Enabled':Enabled
});
   }

    // SetScreenSaverOnSleepEnabled
   SetScreenSaverOnSleepEnabled(Enabled) {
  return this.sageAPI.invoke("SetScreenSaverOnSleepEnabled", {
'Enabled':Enabled
});
   }

    // SetScreenSaverTimeout
   SetScreenSaverTimeout(Timeout) {
  return this.sageAPI.invoke("SetScreenSaverTimeout", {
'Timeout':Timeout
});
   }

    // SetSequenceDelayForInfraredTuningPlugin
   SetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
  return this.sageAPI.invoke("SetSequenceDelayForInfraredTuningPlugin", {
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
,
'RemoteName':RemoteName
,
'MsecDelay':MsecDelay
});
   }

    // SetServerProperty
   SetServerProperty(PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetServerProperty", {
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }

    // SetSoftwareDecodingDisabled
   SetSoftwareDecodingDisabled(Disabled) {
  return this.sageAPI.invoke("SetSoftwareDecodingDisabled", {
'Disabled':Disabled
});
   }

    // SetSyncSystemClockWithServerEnabled
   SetSyncSystemClockWithServerEnabled(Enabled) {
  return this.sageAPI.invoke("SetSyncSystemClockWithServerEnabled", {
'Enabled':Enabled
});
   }

    // SetTimeZone
   SetTimeZone(TimeZone) {
  return this.sageAPI.invoke("SetTimeZone", {
'TimeZone':TimeZone
});
   }

    // SetUILanguage
   SetUILanguage(Language) {
  return this.sageAPI.invoke("SetUILanguage", {
'Language':Language
});
   }

    // SetVideoBackgroundColor
   SetVideoBackgroundColor(Color) {
  return this.sageAPI.invoke("SetVideoBackgroundColor", {
'Color':Color
});
   }

    // SetVideoDecoderFilter
   SetVideoDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetVideoDecoderFilter", {
'FilterName':FilterName
});
   }

    // SetVideoOffsetX
   SetVideoOffsetX(AspectRatioMode, PixelOffset) {
  return this.sageAPI.invoke("SetVideoOffsetX", {
'AspectRatioMode':AspectRatioMode
,
'PixelOffset':PixelOffset
});
   }

    // SetVideoOffsetY
   SetVideoOffsetY(AspectRatioMode, PixelOffset) {
  return this.sageAPI.invoke("SetVideoOffsetY", {
'AspectRatioMode':AspectRatioMode
,
'PixelOffset':PixelOffset
});
   }

    // SetVideoOrbitingDuration
   SetVideoOrbitingDuration(Duration) {
  return this.sageAPI.invoke("SetVideoOrbitingDuration", {
'Duration':Duration
});
   }

    // SetVideoRendererToDefault
   SetVideoRendererToDefault() {
  return this.sageAPI.invoke("SetVideoRendererToDefault", {
});
   }

    // SetVideoRendererToEVR
   SetVideoRendererToEVR() {
  return this.sageAPI.invoke("SetVideoRendererToEVR", {
});
   }

    // SetVideoRendererToOverlay
   SetVideoRendererToOverlay() {
  return this.sageAPI.invoke("SetVideoRendererToOverlay", {
});
   }

    // SetVideoRendererToVMR9
   SetVideoRendererToVMR9() {
  return this.sageAPI.invoke("SetVideoRendererToVMR9", {
});
   }

    // SetVideoZoomX
   SetVideoZoomX(AspectRatioMode, ScaleFactor) {
  return this.sageAPI.invoke("SetVideoZoomX", {
'AspectRatioMode':AspectRatioMode
,
'ScaleFactor':ScaleFactor
});
   }

    // SetVideoZoomY
   SetVideoZoomY(AspectRatioMode, ScaleFactor) {
  return this.sageAPI.invoke("SetVideoZoomY", {
'AspectRatioMode':AspectRatioMode
,
'ScaleFactor':ScaleFactor
});
   }

    // UnlinkIRCodeFromSageCommands
   UnlinkIRCodeFromSageCommands(IRCode) {
  return this.sageAPI.invoke("UnlinkIRCodeFromSageCommands", {
'IRCode':IRCode
});
   }

    // UnlinkKeystrokeFromSageCommands
   UnlinkKeystrokeFromSageCommands(Keystroke) {
  return this.sageAPI.invoke("UnlinkKeystrokeFromSageCommands", {
'Keystroke':Keystroke
});
   }
}

    export default Configuration;
