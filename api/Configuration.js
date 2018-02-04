class Configuration {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddLibraryImportPath
   AddLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddLibraryImportPath", [NewPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddMusicLibraryImportPath
   AddMusicLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddMusicLibraryImportPath", [NewPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddPictureLibraryImportPath
   AddPictureLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddPictureLibraryImportPath", [NewPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddRemoteForInfraredTuningPlugin
   AddRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("AddRemoteForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddVideoDirectory
   AddVideoDirectory(Directory, Rule, Size) {
  return this.sageAPI.invoke("AddVideoDirectory", [Directory,Rule,Size]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddVideoLibraryImportPath
   AddVideoLibraryImportPath(NewPath) {
  return this.sageAPI.invoke("AddVideoLibraryImportPath", [NewPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanDoNativeOutputResolution
   CanDoNativeOutputResolution() {
  return this.sageAPI.invoke("CanDoNativeOutputResolution", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ChangeVideoDirectory
   ChangeVideoDirectory(OldDirectory, NewDirectory, NewRule, NewSize) {
  return this.sageAPI.invoke("ChangeVideoDirectory", [OldDirectory,NewDirectory,NewRule,NewSize]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllTimeZones
   GetAllTimeZones() {
  return this.sageAPI.invoke("GetAllTimeZones", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAnalogVideoFormat
   GetAnalogVideoFormat() {
  return this.sageAPI.invoke("GetAnalogVideoFormat", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAspectRatioMode
   GetAspectRatioMode() {
  return this.sageAPI.invoke("GetAspectRatioMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAspectRatioModes
   GetAspectRatioModes() {
  return this.sageAPI.invoke("GetAspectRatioModes", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioDecoderFilter
   GetAudioDecoderFilter() {
  return this.sageAPI.invoke("GetAudioDecoderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioDecoderFilters
   GetAudioDecoderFilters() {
  return this.sageAPI.invoke("GetAudioDecoderFilters", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioDelay
   GetAudioDelay() {
  return this.sageAPI.invoke("GetAudioDelay", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioOutput
   GetAudioOutput() {
  return this.sageAPI.invoke("GetAudioOutput", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioOutputOptions
   GetAudioOutputOptions() {
  return this.sageAPI.invoke("GetAudioOutputOptions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioRenderFilter
   GetAudioRenderFilter() {
  return this.sageAPI.invoke("GetAudioRenderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioRendererFilters
   GetAudioRendererFilters() {
  return this.sageAPI.invoke("GetAudioRendererFilters", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAutodialForInternet
   GetAutodialForInternet() {
  return this.sageAPI.invoke("GetAutodialForInternet", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAvailableCountries
   GetAvailableCountries() {
  return this.sageAPI.invoke("GetAvailableCountries", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAvailableUILanguages
   GetAvailableUILanguages() {
  return this.sageAPI.invoke("GetAvailableUILanguages", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetBitTimeForInfraredTuningPlugin
   GetBitTimeForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetBitTimeForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetButtonDelayForInfraredTuningPlugin
   GetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetButtonDelayForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCarrierFrequencyForInfraredTuningPlugin
   GetCarrierFrequencyForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetCarrierFrequencyForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCommandsForInfraredTuningPlugin
   GetCommandsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetCommandsForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetConfirmCommandForInfraredTuningPlugin
   GetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetConfirmCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCountry
   GetCountry() {
  return this.sageAPI.invoke("GetCountry", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentlyAiringProgramsStartLive
   GetCurrentlyAiringProgramsStartLive() {
  return this.sageAPI.invoke("GetCurrentlyAiringProgramsStartLive", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBCRegion
   GetDVBCRegion() {
  return this.sageAPI.invoke("GetDVBCRegion", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBCRegions
   GetDVBCRegions() {
  return this.sageAPI.invoke("GetDVBCRegions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBSRegion
   GetDVBSRegion() {
  return this.sageAPI.invoke("GetDVBSRegion", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBSRegions
   GetDVBSRegions() {
  return this.sageAPI.invoke("GetDVBSRegions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBTRegion
   GetDVBTRegion() {
  return this.sageAPI.invoke("GetDVBTRegion", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVBTRegions
   GetDVBTRegions() {
  return this.sageAPI.invoke("GetDVBTRegions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDAudioDecoderFilter
   GetDVDAudioDecoderFilter() {
  return this.sageAPI.invoke("GetDVDAudioDecoderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDAudioRenderFilter
   GetDVDAudioRenderFilter() {
  return this.sageAPI.invoke("GetDVDAudioRenderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDDXVADeinterlaceMode
   GetDVDDXVADeinterlaceMode() {
  return this.sageAPI.invoke("GetDVDDXVADeinterlaceMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDDXVAMpegMode
   GetDVDDXVAMpegMode() {
  return this.sageAPI.invoke("GetDVDDXVAMpegMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDVideoDecoderFilter
   GetDVDVideoDecoderFilter() {
  return this.sageAPI.invoke("GetDVDVideoDecoderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDVDVideoRenderFilter
   GetDVDVideoRenderFilter() {
  return this.sageAPI.invoke("GetDVDVideoRenderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDXVADeinterlaceMode
   GetDXVADeinterlaceMode() {
  return this.sageAPI.invoke("GetDXVADeinterlaceMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDXVADeinterlaceModes
   GetDXVADeinterlaceModes() {
  return this.sageAPI.invoke("GetDXVADeinterlaceModes", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDXVAMpegMode
   GetDXVAMpegMode() {
  return this.sageAPI.invoke("GetDXVAMpegMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDXVAMpegModes
   GetDXVAMpegModes() {
  return this.sageAPI.invoke("GetDXVAMpegModes", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDefaultAudioLanguage
   GetDefaultAudioLanguage() {
  return this.sageAPI.invoke("GetDefaultAudioLanguage", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDefaultRecordingQuality
   GetDefaultRecordingQuality() {
  return this.sageAPI.invoke("GetDefaultRecordingQuality", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDefaultSubpicLanguage
   GetDefaultSubpicLanguage() {
  return this.sageAPI.invoke("GetDefaultSubpicLanguage", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDiskspaceRuleForVideoDirectory
   GetDiskspaceRuleForVideoDirectory(Directory) {
  return this.sageAPI.invoke("GetDiskspaceRuleForVideoDirectory", [Directory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDiskspaceSizeForVideoDirectory
   GetDiskspaceSizeForVideoDirectory(Directory) {
  return this.sageAPI.invoke("GetDiskspaceSizeForVideoDirectory", [Directory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayAspectRatio
   GetDisplayAspectRatio() {
  return this.sageAPI.invoke("GetDisplayAspectRatio", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDscalerMode
   GetDscalerMode() {
  return this.sageAPI.invoke("GetDscalerMode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDscalerModes
   GetDscalerModes() {
  return this.sageAPI.invoke("GetDscalerModes", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDscalerPlugin
   GetDscalerPlugin() {
  return this.sageAPI.invoke("GetDscalerPlugin", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDscalerPlugins
   GetDscalerPlugins() {
  return this.sageAPI.invoke("GetDscalerPlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetHDMIAutodetectedConnector
   GetHDMIAutodetectedConnector() {
  return this.sageAPI.invoke("GetHDMIAutodetectedConnector", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetIRCodesLinkedToSageCommand
   GetIRCodesLinkedToSageCommand(SageCommand) {
  return this.sageAPI.invoke("GetIRCodesLinkedToSageCommand", [SageCommand]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInactivityTimeout
   GetInactivityTimeout() {
  return this.sageAPI.invoke("GetInactivityTimeout", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredReceiverPort
   GetInfraredReceiverPort() {
  return this.sageAPI.invoke("GetInfraredReceiverPort", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTuningPlugins
   GetInfraredTuningPlugins() {
  return this.sageAPI.invoke("GetInfraredTuningPlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetKeystrokesLinkedToSageCommand
   GetKeystrokesLinkedToSageCommand(SageCommand) {
  return this.sageAPI.invoke("GetKeystrokesLinkedToSageCommand", [SageCommand]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLibraryImportPaths
   GetLibraryImportPaths() {
  return this.sageAPI.invoke("GetLibraryImportPaths", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMaxChannelDigitsForInfraredTuningPlugin
   GetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetMaxChannelDigitsForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMixerAudioInputPaths
   GetMixerAudioInputPaths() {
  return this.sageAPI.invoke("GetMixerAudioInputPaths", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMusicLibraryImportPaths
   GetMusicLibraryImportPaths() {
  return this.sageAPI.invoke("GetMusicLibraryImportPaths", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNameForIRCode
   GetNameForIRCode(IRCode) {
  return this.sageAPI.invoke("GetNameForIRCode", [IRCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanInsetBottom
   GetOverscanInsetBottom() {
  return this.sageAPI.invoke("GetOverscanInsetBottom", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanInsetLeft
   GetOverscanInsetLeft() {
  return this.sageAPI.invoke("GetOverscanInsetLeft", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanInsetRight
   GetOverscanInsetRight() {
  return this.sageAPI.invoke("GetOverscanInsetRight", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanInsetTop
   GetOverscanInsetTop() {
  return this.sageAPI.invoke("GetOverscanInsetTop", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanInsets
   GetOverscanInsets() {
  return this.sageAPI.invoke("GetOverscanInsets", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanOffsetX
   GetOverscanOffsetX() {
  return this.sageAPI.invoke("GetOverscanOffsetX", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanOffsetY
   GetOverscanOffsetY() {
  return this.sageAPI.invoke("GetOverscanOffsetY", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanScaleHeight
   GetOverscanScaleHeight() {
  return this.sageAPI.invoke("GetOverscanScaleHeight", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOverscanScaleWidth
   GetOverscanScaleWidth() {
  return this.sageAPI.invoke("GetOverscanScaleWidth", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPictureLibraryImportPaths
   GetPictureLibraryImportPaths() {
  return this.sageAPI.invoke("GetPictureLibraryImportPaths", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPrefixCommandForInfraredTuningPlugin
   GetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetPrefixCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetProperty
   GetProperty(PropertyName, DefaultValue) {
  return this.sageAPI.invoke("GetProperty", [PropertyName,DefaultValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRatingsUnderParentalLock
   GetRatingsUnderParentalLock() {
  return this.sageAPI.invoke("GetRatingsUnderParentalLock", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRecordingQualities
   GetRecordingQualities() {
  return this.sageAPI.invoke("GetRecordingQualities", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRecordingQualityBitrate
   GetRecordingQualityBitrate(Quality) {
  return this.sageAPI.invoke("GetRecordingQualityBitrate", [Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRecordingQualityFormat
   GetRecordingQualityFormat(Quality) {
  return this.sageAPI.invoke("GetRecordingQualityFormat", [Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRemotesForInfraredTuningPlugin
   GetRemotesForInfraredTuningPlugin(PluginName, PluginPortNumber) {
  return this.sageAPI.invoke("GetRemotesForInfraredTuningPlugin", [PluginName,PluginPortNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSageCommandLinkedToIRCode
   GetSageCommandLinkedToIRCode(IRCode) {
  return this.sageAPI.invoke("GetSageCommandLinkedToIRCode", [IRCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSageCommandLinkedToKeystroke
   GetSageCommandLinkedToKeystroke(Keystroke) {
  return this.sageAPI.invoke("GetSageCommandLinkedToKeystroke", [Keystroke]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScreenSaverTimeout
   GetScreenSaverTimeout() {
  return this.sageAPI.invoke("GetScreenSaverTimeout", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSequenceDelayForInfraredTuningPlugin
   GetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("GetSequenceDelayForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetServerProperty
   GetServerProperty(PropertyName, DefaultValue) {
  return this.sageAPI.invoke("GetServerProperty", [PropertyName,DefaultValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetServerSubpropertiesThatAreBranches
   GetServerSubpropertiesThatAreBranches(PropertyName) {
  return this.sageAPI.invoke("GetServerSubpropertiesThatAreBranches", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetServerSubpropertiesThatAreLeaves
   GetServerSubpropertiesThatAreLeaves(PropertyName) {
  return this.sageAPI.invoke("GetServerSubpropertiesThatAreLeaves", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubpicAudioLanguageOptions
   GetSubpicAudioLanguageOptions() {
  return this.sageAPI.invoke("GetSubpicAudioLanguageOptions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubpropertiesThatAreBranches
   GetSubpropertiesThatAreBranches(PropertyName) {
  return this.sageAPI.invoke("GetSubpropertiesThatAreBranches", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubpropertiesThatAreLeaves
   GetSubpropertiesThatAreLeaves(PropertyName) {
  return this.sageAPI.invoke("GetSubpropertiesThatAreLeaves", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTimeZone
   GetTimeZone() {
  return this.sageAPI.invoke("GetTimeZone", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUILanguage
   GetUILanguage() {
  return this.sageAPI.invoke("GetUILanguage", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoBackgroundColor
   GetVideoBackgroundColor() {
  return this.sageAPI.invoke("GetVideoBackgroundColor", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoDecoderFilter
   GetVideoDecoderFilter() {
  return this.sageAPI.invoke("GetVideoDecoderFilter", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoDecoderFilters
   GetVideoDecoderFilters() {
  return this.sageAPI.invoke("GetVideoDecoderFilters", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoDirectories
   GetVideoDirectories() {
  return this.sageAPI.invoke("GetVideoDirectories", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoDiskspaceRules
   GetVideoDiskspaceRules() {
  return this.sageAPI.invoke("GetVideoDiskspaceRules", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoLibraryImportPaths
   GetVideoLibraryImportPaths() {
  return this.sageAPI.invoke("GetVideoLibraryImportPaths", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoOffsetX
   GetVideoOffsetX(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoOffsetX", [AspectRatioMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoOffsetY
   GetVideoOffsetY(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoOffsetY", [AspectRatioMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoOrbitingDuration
   GetVideoOrbitingDuration() {
  return this.sageAPI.invoke("GetVideoOrbitingDuration", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoZoomX
   GetVideoZoomX(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoZoomX", [AspectRatioMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVideoZoomY
   GetVideoZoomY(AspectRatioMode) {
  return this.sageAPI.invoke("GetVideoZoomY", [AspectRatioMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasDirectX9
   HasDirectX9() {
  return this.sageAPI.invoke("HasDirectX9", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasEVRSupport
   HasEVRSupport() {
  return this.sageAPI.invoke("HasEVRSupport", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasPVR350TVOutput
   HasPVR350TVOutput() {
  return this.sageAPI.invoke("HasPVR350TVOutput", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasParentalLockCode
   HasParentalLockCode() {
  return this.sageAPI.invoke("HasParentalLockCode", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAcceleratedDrawingEnabled
   IsAcceleratedDrawingEnabled() {
  return this.sageAPI.invoke("IsAcceleratedDrawingEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAdvancedDeinterlacingEnabled
   IsAdvancedDeinterlacingEnabled() {
  return this.sageAPI.invoke("IsAdvancedDeinterlacingEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAdvancedDeinterlacingSupported
   IsAdvancedDeinterlacingSupported() {
  return this.sageAPI.invoke("IsAdvancedDeinterlacingSupported", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDscalerDoubleRefresh
   IsDscalerDoubleRefresh() {
  return this.sageAPI.invoke("IsDscalerDoubleRefresh", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDscalerEnabled
   IsDscalerEnabled() {
  return this.sageAPI.invoke("IsDscalerEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDscalerOddFieldFirst
   IsDscalerOddFieldFirst() {
  return this.sageAPI.invoke("IsDscalerOddFieldFirst", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsIntelligentRecordingDisabled
   IsIntelligentRecordingDisabled() {
  return this.sageAPI.invoke("IsIntelligentRecordingDisabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMajorMinorDTVChannelTuningEnabled
   IsMajorMinorDTVChannelTuningEnabled() {
  return this.sageAPI.invoke("IsMajorMinorDTVChannelTuningEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMutedOnAlternateSpeedPlayback
   IsMutedOnAlternateSpeedPlayback() {
  return this.sageAPI.invoke("IsMutedOnAlternateSpeedPlayback", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsNativeOutputResolutionEnabled
   IsNativeOutputResolutionEnabled() {
  return this.sageAPI.invoke("IsNativeOutputResolutionEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPVR350OSDEnabled
   IsPVR350OSDEnabled() {
  return this.sageAPI.invoke("IsPVR350OSDEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPVR350TVOutputEnabled
   IsPVR350TVOutputEnabled() {
  return this.sageAPI.invoke("IsPVR350TVOutputEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsParentalControlEnabled
   IsParentalControlEnabled() {
  return this.sageAPI.invoke("IsParentalControlEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPlaceshifterLoginCachingAllowed
   IsPlaceshifterLoginCachingAllowed() {
  return this.sageAPI.invoke("IsPlaceshifterLoginCachingAllowed", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsProvideoPentium4FixEnabled
   IsProvideoPentium4FixEnabled() {
  return this.sageAPI.invoke("IsProvideoPentium4FixEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsRatingUnderParentalLock
   IsRatingUnderParentalLock(Rating) {
  return this.sageAPI.invoke("IsRatingUnderParentalLock", [Rating]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSageTVServerEnabled
   IsSageTVServerEnabled() {
  return this.sageAPI.invoke("IsSageTVServerEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsScreenSaverOnSleepEnabled
   IsScreenSaverOnSleepEnabled() {
  return this.sageAPI.invoke("IsScreenSaverOnSleepEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSoftwareDecodingDisabled
   IsSoftwareDecodingDisabled() {
  return this.sageAPI.invoke("IsSoftwareDecodingDisabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSyncSystemClockWithServerEnabled
   IsSyncSystemClockWithServerEnabled() {
  return this.sageAPI.invoke("IsSyncSystemClockWithServerEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsVideoRendererDefault
   IsVideoRendererDefault() {
  return this.sageAPI.invoke("IsVideoRendererDefault", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsVideoRendererEVR
   IsVideoRendererEVR() {
  return this.sageAPI.invoke("IsVideoRendererEVR", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsVideoRendererOverlay
   IsVideoRendererOverlay() {
  return this.sageAPI.invoke("IsVideoRendererOverlay", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsVideoRendererVMR9
   IsVideoRendererVMR9() {
  return this.sageAPI.invoke("IsVideoRendererVMR9", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LearnCommandForInfraredTuningPlugin
   LearnCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
  return this.sageAPI.invoke("LearnCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,CommandName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LinkIRCodeToSageCommand
   LinkIRCodeToSageCommand(IRCode, SageCommand) {
  return this.sageAPI.invoke("LinkIRCodeToSageCommand", [IRCode,SageCommand]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LinkKeystrokeToSageCommand
   LinkKeystrokeToSageCommand(Keystroke, SageCommand) {
  return this.sageAPI.invoke("LinkKeystrokeToSageCommand", [Keystroke,SageCommand]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveCommandForInfraredTuningPlugin
   RemoveCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, CommandName) {
  return this.sageAPI.invoke("RemoveCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,CommandName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveLibraryImportPath
   RemoveLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveLibraryImportPath", [RemovePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveMusicLibraryImportPath
   RemoveMusicLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveMusicLibraryImportPath", [RemovePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePictureLibraryImportPath
   RemovePictureLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemovePictureLibraryImportPath", [RemovePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveProperty
   RemoveProperty(PropertyName) {
  return this.sageAPI.invoke("RemoveProperty", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemovePropertyAndChildren
   RemovePropertyAndChildren(PropertyName) {
  return this.sageAPI.invoke("RemovePropertyAndChildren", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveRemoteForInfraredTuningPlugin
   RemoveRemoteForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName) {
  return this.sageAPI.invoke("RemoveRemoteForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveServerProperty
   RemoveServerProperty(PropertyName) {
  return this.sageAPI.invoke("RemoveServerProperty", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveServerPropertyAndChildren
   RemoveServerPropertyAndChildren(PropertyName) {
  return this.sageAPI.invoke("RemoveServerPropertyAndChildren", [PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveVideoDirectory
   RemoveVideoDirectory(Directory) {
  return this.sageAPI.invoke("RemoveVideoDirectory", [Directory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveVideoLibraryImportPath
   RemoveVideoLibraryImportPath(RemovePath) {
  return this.sageAPI.invoke("RemoveVideoLibraryImportPath", [RemovePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RenameCommandForInfraredTuningPlugin
   RenameCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, OldCommandName, NewCommandName) {
  return this.sageAPI.invoke("RenameCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,OldCommandName,NewCommandName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RunFilterAutoconfiguration
   RunFilterAutoconfiguration() {
  return this.sageAPI.invoke("RunFilterAutoconfiguration", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SaveProperties
   SaveProperties() {
  return this.sageAPI.invoke("SaveProperties", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAcceleratedDrawingEnabled
   SetAcceleratedDrawingEnabled(Enabled) {
  return this.sageAPI.invoke("SetAcceleratedDrawingEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAdvancedDeinterlacingEnabled
   SetAdvancedDeinterlacingEnabled(Enabled) {
  return this.sageAPI.invoke("SetAdvancedDeinterlacingEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAllowPlaceshifterLoginCaching
   SetAllowPlaceshifterLoginCaching(Enabled) {
  return this.sageAPI.invoke("SetAllowPlaceshifterLoginCaching", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAnalogVideoFormat
   SetAnalogVideoFormat(Format) {
  return this.sageAPI.invoke("SetAnalogVideoFormat", [Format]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAspectRatioMode
   SetAspectRatioMode(AspectRatioMode) {
  return this.sageAPI.invoke("SetAspectRatioMode", [AspectRatioMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAudioDecoderFilter
   SetAudioDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetAudioDecoderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAudioDelay
   SetAudioDelay(Delay) {
  return this.sageAPI.invoke("SetAudioDelay", [Delay]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAudioOutput
   SetAudioOutput(AudioOutput) {
  return this.sageAPI.invoke("SetAudioOutput", [AudioOutput]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAudioRenderFilter
   SetAudioRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetAudioRenderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAutodialForInternet
   SetAutodialForInternet(Autodial) {
  return this.sageAPI.invoke("SetAutodialForInternet", [Autodial]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetButtonDelayForInfraredTuningPlugin
   SetButtonDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
  return this.sageAPI.invoke("SetButtonDelayForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,MsecDelay]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetConfirmCommandForInfraredTuningPlugin
   SetConfirmCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
  return this.sageAPI.invoke("SetConfirmCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,Command]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCountry
   SetCountry(Country) {
  return this.sageAPI.invoke("SetCountry", [Country]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCurrentlyAiringProgramsStartLive
   SetCurrentlyAiringProgramsStartLive(Enabled) {
  return this.sageAPI.invoke("SetCurrentlyAiringProgramsStartLive", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVBCRegion
   SetDVBCRegion(DVBCRegion) {
  return this.sageAPI.invoke("SetDVBCRegion", [DVBCRegion]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVBSRegion
   SetDVBSRegion(DVBSRegion) {
  return this.sageAPI.invoke("SetDVBSRegion", [DVBSRegion]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVBTRegion
   SetDVBTRegion(DVBTRegion) {
  return this.sageAPI.invoke("SetDVBTRegion", [DVBTRegion]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDAudioDecoderFilter
   SetDVDAudioDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDAudioDecoderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDAudioRenderFilter
   SetDVDAudioRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDAudioRenderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDDXVADeinterlaceMode
   SetDVDDXVADeinterlaceMode(DeinterlaceMode) {
  return this.sageAPI.invoke("SetDVDDXVADeinterlaceMode", [DeinterlaceMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDDXVAMpegMode
   SetDVDDXVAMpegMode(DXVAMode) {
  return this.sageAPI.invoke("SetDVDDXVAMpegMode", [DXVAMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDVideoDecoderFilter
   SetDVDVideoDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDVideoDecoderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDVDVideoRenderFilter
   SetDVDVideoRenderFilter(FilterName) {
  return this.sageAPI.invoke("SetDVDVideoRenderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDXVADeinterlaceMode
   SetDXVADeinterlaceMode(DeinterlaceMode) {
  return this.sageAPI.invoke("SetDXVADeinterlaceMode", [DeinterlaceMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDXVAMpegMode
   SetDXVAMpegMode(DXVAMode) {
  return this.sageAPI.invoke("SetDXVAMpegMode", [DXVAMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDefaultAudioLanguage
   SetDefaultAudioLanguage(Language) {
  return this.sageAPI.invoke("SetDefaultAudioLanguage", [Language]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDefaultRecordingQuality
   SetDefaultRecordingQuality(Quality) {
  return this.sageAPI.invoke("SetDefaultRecordingQuality", [Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDefaultSubpicLanguage
   SetDefaultSubpicLanguage(Language) {
  return this.sageAPI.invoke("SetDefaultSubpicLanguage", [Language]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDisplayAspectRatio
   SetDisplayAspectRatio(DisplayAspectRatio) {
  return this.sageAPI.invoke("SetDisplayAspectRatio", [DisplayAspectRatio]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDscalerDoubleRefresh
   SetDscalerDoubleRefresh(Enabled) {
  return this.sageAPI.invoke("SetDscalerDoubleRefresh", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDscalerEnabled
   SetDscalerEnabled(Enabled) {
  return this.sageAPI.invoke("SetDscalerEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDscalerMode
   SetDscalerMode(DscalerMode) {
  return this.sageAPI.invoke("SetDscalerMode", [DscalerMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDscalerOddFieldFirst
   SetDscalerOddFieldFirst(Enabled) {
  return this.sageAPI.invoke("SetDscalerOddFieldFirst", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDscalerPlugin
   SetDscalerPlugin(PluginName) {
  return this.sageAPI.invoke("SetDscalerPlugin", [PluginName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInactivityTimeout
   SetInactivityTimeout(Timeout) {
  return this.sageAPI.invoke("SetInactivityTimeout", [Timeout]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInfraredReceiverPort
   SetInfraredReceiverPort(Port) {
  return this.sageAPI.invoke("SetInfraredReceiverPort", [Port]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetIntelligentRecordingDisabled
   SetIntelligentRecordingDisabled(Disabled) {
  return this.sageAPI.invoke("SetIntelligentRecordingDisabled", [Disabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMajorMinorDTVChannelTuningEnabled
   SetMajorMinorDTVChannelTuningEnabled(Enabled) {
  return this.sageAPI.invoke("SetMajorMinorDTVChannelTuningEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMaxChannelDigitsForInfraredTuningPlugin
   SetMaxChannelDigitsForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, NumberOfDigits) {
  return this.sageAPI.invoke("SetMaxChannelDigitsForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,NumberOfDigits]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetMuteOnAlternateSpeedPlayback
   SetMuteOnAlternateSpeedPlayback(Enabled) {
  return this.sageAPI.invoke("SetMuteOnAlternateSpeedPlayback", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNameForIRCode
   SetNameForIRCode(IRCode, Name) {
  return this.sageAPI.invoke("SetNameForIRCode", [IRCode,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNativeOutputResolutionEnabled
   SetNativeOutputResolutionEnabled(Enabled) {
  return this.sageAPI.invoke("SetNativeOutputResolutionEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetOverscanOffsetX
   SetOverscanOffsetX(Amount) {
  return this.sageAPI.invoke("SetOverscanOffsetX", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetOverscanOffsetY
   SetOverscanOffsetY(Amount) {
  return this.sageAPI.invoke("SetOverscanOffsetY", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetOverscanScaleHeight
   SetOverscanScaleHeight(Amount) {
  return this.sageAPI.invoke("SetOverscanScaleHeight", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetOverscanScaleWidth
   SetOverscanScaleWidth(Amount) {
  return this.sageAPI.invoke("SetOverscanScaleWidth", [Amount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPVR350OSDEnabled
   SetPVR350OSDEnabled(Enabled) {
  return this.sageAPI.invoke("SetPVR350OSDEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPVR350TVOutputEnabled
   SetPVR350TVOutputEnabled(Enabled) {
  return this.sageAPI.invoke("SetPVR350TVOutputEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetParentalControlEnabled
   SetParentalControlEnabled(Enabled) {
  return this.sageAPI.invoke("SetParentalControlEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetParentalLockCode
   SetParentalLockCode(ParentalLockCode) {
  return this.sageAPI.invoke("SetParentalLockCode", [ParentalLockCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPrefixCommandForInfraredTuningPlugin
   SetPrefixCommandForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, Command) {
  return this.sageAPI.invoke("SetPrefixCommandForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,Command]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetProperty
   SetProperty(PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetProperty", [PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetProvideoPentium4FixEnabled
   SetProvideoPentium4FixEnabled(Enabled) {
  return this.sageAPI.invoke("SetProvideoPentium4FixEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRatingUnderParentalControl
   SetRatingUnderParentalControl(Rating, Restricted) {
  return this.sageAPI.invoke("SetRatingUnderParentalControl", [Rating,Restricted]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSageTVServerEnabled
   SetSageTVServerEnabled(Enabled) {
  return this.sageAPI.invoke("SetSageTVServerEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetScreenSaverOnSleepEnabled
   SetScreenSaverOnSleepEnabled(Enabled) {
  return this.sageAPI.invoke("SetScreenSaverOnSleepEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetScreenSaverTimeout
   SetScreenSaverTimeout(Timeout) {
  return this.sageAPI.invoke("SetScreenSaverTimeout", [Timeout]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSequenceDelayForInfraredTuningPlugin
   SetSequenceDelayForInfraredTuningPlugin(PluginName, PluginPortNumber, RemoteName, MsecDelay) {
  return this.sageAPI.invoke("SetSequenceDelayForInfraredTuningPlugin", [PluginName,PluginPortNumber,RemoteName,MsecDelay]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetServerProperty
   SetServerProperty(PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetServerProperty", [PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSoftwareDecodingDisabled
   SetSoftwareDecodingDisabled(Disabled) {
  return this.sageAPI.invoke("SetSoftwareDecodingDisabled", [Disabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetSyncSystemClockWithServerEnabled
   SetSyncSystemClockWithServerEnabled(Enabled) {
  return this.sageAPI.invoke("SetSyncSystemClockWithServerEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetTimeZone
   SetTimeZone(TimeZone) {
  return this.sageAPI.invoke("SetTimeZone", [TimeZone]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetUILanguage
   SetUILanguage(Language) {
  return this.sageAPI.invoke("SetUILanguage", [Language]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoBackgroundColor
   SetVideoBackgroundColor(Color) {
  return this.sageAPI.invoke("SetVideoBackgroundColor", [Color]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoDecoderFilter
   SetVideoDecoderFilter(FilterName) {
  return this.sageAPI.invoke("SetVideoDecoderFilter", [FilterName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoOffsetX
   SetVideoOffsetX(AspectRatioMode, PixelOffset) {
  return this.sageAPI.invoke("SetVideoOffsetX", [AspectRatioMode,PixelOffset]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoOffsetY
   SetVideoOffsetY(AspectRatioMode, PixelOffset) {
  return this.sageAPI.invoke("SetVideoOffsetY", [AspectRatioMode,PixelOffset]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoOrbitingDuration
   SetVideoOrbitingDuration(Duration) {
  return this.sageAPI.invoke("SetVideoOrbitingDuration", [Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoRendererToDefault
   SetVideoRendererToDefault() {
  return this.sageAPI.invoke("SetVideoRendererToDefault", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoRendererToEVR
   SetVideoRendererToEVR() {
  return this.sageAPI.invoke("SetVideoRendererToEVR", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoRendererToOverlay
   SetVideoRendererToOverlay() {
  return this.sageAPI.invoke("SetVideoRendererToOverlay", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoRendererToVMR9
   SetVideoRendererToVMR9() {
  return this.sageAPI.invoke("SetVideoRendererToVMR9", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoZoomX
   SetVideoZoomX(AspectRatioMode, ScaleFactor) {
  return this.sageAPI.invoke("SetVideoZoomX", [AspectRatioMode,ScaleFactor]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVideoZoomY
   SetVideoZoomY(AspectRatioMode, ScaleFactor) {
  return this.sageAPI.invoke("SetVideoZoomY", [AspectRatioMode,ScaleFactor]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UnlinkIRCodeFromSageCommands
   UnlinkIRCodeFromSageCommands(IRCode) {
  return this.sageAPI.invoke("UnlinkIRCodeFromSageCommands", [IRCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UnlinkKeystrokeFromSageCommands
   UnlinkKeystrokeFromSageCommands(Keystroke) {
  return this.sageAPI.invoke("UnlinkKeystrokeFromSageCommands", [Keystroke]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default Configuration;
