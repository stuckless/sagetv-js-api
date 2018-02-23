class Global {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddGlobalContext
   AddGlobalContext(Name, Value) {
  return this.sageAPI.invoke("AddGlobalContext", [Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddStaticContext
   AddStaticContext(Name, Value) {
  return this.sageAPI.invoke("AddStaticContext", [Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ApplyServiceLevelToLineup
   ApplyServiceLevelToLineup(Lineup, ServiceLevel) {
  return this.sageAPI.invoke("ApplyServiceLevelToLineup", [Lineup,ServiceLevel]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AreAiringsSameShow
   AreAiringsSameShow(Airing1, Airing2) {
  return this.sageAPI.invoke("AreAiringsSameShow", [Airing1,Airing2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AreScreenshotsSupported
   AreScreenshotsSupported() {
  return this.sageAPI.invoke("AreScreenshotsSupported", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AreThereUnresolvedConflicts
   AreThereUnresolvedConflicts() {
  return this.sageAPI.invoke("AreThereUnresolvedConflicts", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDBurnTheBurnList
   CDBurnTheBurnList(BurnList) {
  return this.sageAPI.invoke("CDBurnTheBurnList", [BurnList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDCancelBurn
   CDCancelBurn() {
  return this.sageAPI.invoke("CDCancelBurn", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDCancelRip
   CDCancelRip() {
  return this.sageAPI.invoke("CDCancelRip", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDGetCurrentBurnStatus
   CDGetCurrentBurnStatus() {
  return this.sageAPI.invoke("CDGetCurrentBurnStatus", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDGetCurrentRipStatus
   CDGetCurrentRipStatus() {
  return this.sageAPI.invoke("CDGetCurrentRipStatus", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CDRipToLibrary
   CDRipToLibrary(LibraryDir, BitrateKbps) {
  return this.sageAPI.invoke("CDRipToLibrary", [LibraryDir,BitrateKbps]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CachePlaceshifterLogin
   CachePlaceshifterLogin() {
  return this.sageAPI.invoke("CachePlaceshifterLogin", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanCachePlaceshifterLogin
   CanCachePlaceshifterLogin() {
  return this.sageAPI.invoke("CanCachePlaceshifterLogin", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CancelBackgroundFileDownload
   CancelBackgroundFileDownload(DestFile) {
  return this.sageAPI.invoke("CancelBackgroundFileDownload", [DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CancelFileCopy
   CancelFileCopy() {
  return this.sageAPI.invoke("CancelFileCopy", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CancelFileDownload
   CancelFileDownload() {
  return this.sageAPI.invoke("CancelFileDownload", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CloseOptionsMenu
   CloseOptionsMenu() {
  return this.sageAPI.invoke("CloseOptionsMenu", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CloseOptionsMenu
   CloseOptionsMenu(WidgetName, WaitForClose) {
  return this.sageAPI.invoke("CloseOptionsMenu", [WidgetName,WaitForClose]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateTimedRecording
   CreateTimedRecording(Channel, StartTime, StopTime, Recurrence) {
  return this.sageAPI.invoke("CreateTimedRecording", [Channel,StartTime,StopTime,Recurrence]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDBurnTheBurnList
   DVDBurnTheBurnList(BurnList) {
  return this.sageAPI.invoke("DVDBurnTheBurnList", [BurnList]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDCancelBurn
   DVDCancelBurn() {
  return this.sageAPI.invoke("DVDCancelBurn", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DVDGetCurrentBurnStatus
   DVDGetCurrentBurnStatus() {
  return this.sageAPI.invoke("DVDGetCurrentBurnStatus", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DebugLog
   DebugLog(DebugString) {
  return this.sageAPI.invoke("DebugLog", [DebugString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DiscoverSageTVServers
   DiscoverSageTVServers(Timeout) {
  return this.sageAPI.invoke("DiscoverSageTVServers", [Timeout]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // EnsureVisibilityForVariable
   EnsureVisibilityForVariable(Name, Value, DisplayIndex) {
  return this.sageAPI.invoke("EnsureVisibilityForVariable", [Name,Value,DisplayIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Exit
   Exit() {
  return this.sageAPI.invoke("Exit", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Fork
   Fork() {
  return this.sageAPI.invoke("Fork", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringsThatWontBeRecorded
   GetAiringsThatWontBeRecorded(OnlyUnresolved) {
  return this.sageAPI.invoke("GetAiringsThatWontBeRecorded", [OnlyUnresolved]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllLineups
   GetAllLineups() {
  return this.sageAPI.invoke("GetAllLineups", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetApplicationLaunchTime
   GetApplicationLaunchTime() {
  return this.sageAPI.invoke("GetApplicationLaunchTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetBackgroundFileDownloadStatus
   GetBackgroundFileDownloadStatus(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadStatus", [DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetBackgroundFileDownloadStreamTime
   GetBackgroundFileDownloadStreamTime(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadStreamTime", [DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetBackgroundFileDownloadTotalSize
   GetBackgroundFileDownloadTotalSize(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadTotalSize", [DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChildUIComponentForVariable
   GetChildUIComponentForVariable(UIComponent, MatchName, MatchValue) {
  return this.sageAPI.invoke("GetChildUIComponentForVariable", [UIComponent,MatchName,MatchValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetClientServerConnectionProgress
   GetClientServerConnectionProgress() {
  return this.sageAPI.invoke("GetClientServerConnectionProgress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetConnectedClients
   GetConnectedClients() {
  return this.sageAPI.invoke("GetConnectedClients", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentlyRecordingMediaFiles
   GetCurrentlyRecordingMediaFiles() {
  return this.sageAPI.invoke("GetCurrentlyRecordingMediaFiles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDataFromTableFocusedOffset
   GetDataFromTableFocusedOffset(UIComponent, Offset, WrapIndex) {
  return this.sageAPI.invoke("GetDataFromTableFocusedOffset", [UIComponent,Offset,WrapIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDataFromTableVisiblePosition
   GetDataFromTableVisiblePosition(UIComponent, Offset, WrapIndex) {
  return this.sageAPI.invoke("GetDataFromTableVisiblePosition", [UIComponent,Offset,WrapIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayResolution
   GetDisplayResolution() {
  return this.sageAPI.invoke("GetDisplayResolution", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayResolutionDetails
   GetDisplayResolutionDetails(Resolution) {
  return this.sageAPI.invoke("GetDisplayResolutionDetails", [Resolution]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayResolutionHeight
   GetDisplayResolutionHeight() {
  return this.sageAPI.invoke("GetDisplayResolutionHeight", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayResolutionOptions
   GetDisplayResolutionOptions() {
  return this.sageAPI.invoke("GetDisplayResolutionOptions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDisplayResolutionWidth
   GetDisplayResolutionWidth() {
  return this.sageAPI.invoke("GetDisplayResolutionWidth", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEPGProperty
   GetEPGProperty(EPGDataSource, Property, Parameter) {
  return this.sageAPI.invoke("GetEPGProperty", [EPGDataSource,Property,Parameter]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEPGUpdateState
   GetEPGUpdateState() {
  return this.sageAPI.invoke("GetEPGUpdateState", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEmbeddedPanel
   GetEmbeddedPanel() {
  return this.sageAPI.invoke("GetEmbeddedPanel", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileCopyStatus
   GetFileCopyStatus() {
  return this.sageAPI.invoke("GetFileCopyStatus", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileDownloadStatus
   GetFileDownloadStatus() {
  return this.sageAPI.invoke("GetFileDownloadStatus", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileDownloadStreamTime
   GetFileDownloadStreamTime() {
  return this.sageAPI.invoke("GetFileDownloadStreamTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFocusContext
   GetFocusContext() {
  return this.sageAPI.invoke("GetFocusContext", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFullUIHeight
   GetFullUIHeight() {
  return this.sageAPI.invoke("GetFullUIHeight", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFullUIWidth
   GetFullUIWidth() {
  return this.sageAPI.invoke("GetFullUIWidth", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetHotplugStorageMap
   GetHotplugStorageMap() {
  return this.sageAPI.invoke("GetHotplugStorageMap", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLastEPGDownloadTime
   GetLastEPGDownloadTime() {
  return this.sageAPI.invoke("GetLastEPGDownloadTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLineupsForZipCodeFromEPGServer
   GetLineupsForZipCodeFromEPGServer(ZipCode) {
  return this.sageAPI.invoke("GetLineupsForZipCodeFromEPGServer", [ZipCode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalMarketsFromEPGServer
   GetLocalMarketsFromEPGServer() {
  return this.sageAPI.invoke("GetLocalMarketsFromEPGServer", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLogo
   GetLogo(LogoName) {
  return this.sageAPI.invoke("GetLogo", [LogoName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetOS
   GetOS() {
  return this.sageAPI.invoke("GetOS", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPreferredDisplayResolutions
   GetPreferredDisplayResolutions() {
  return this.sageAPI.invoke("GetPreferredDisplayResolutions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRecentlyWatched
   GetRecentlyWatched(DurationToLookBack) {
  return this.sageAPI.invoke("GetRecentlyWatched", [DurationToLookBack]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRemoteClientVersion
   GetRemoteClientVersion() {
  return this.sageAPI.invoke("GetRemoteClientVersion", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetRemoteUIType
   GetRemoteUIType() {
  return this.sageAPI.invoke("GetRemoteUIType", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSageCommandNames
   GetSageCommandNames() {
  return this.sageAPI.invoke("GetSageCommandNames", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScheduledRecordings
   GetScheduledRecordings() {
  return this.sageAPI.invoke("GetScheduledRecordings", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScheduledRecordingsForDevice
   GetScheduledRecordingsForDevice(CaptureDevice) {
  return this.sageAPI.invoke("GetScheduledRecordingsForDevice", [CaptureDevice]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScheduledRecordingsForDeviceForTime
   GetScheduledRecordingsForDeviceForTime(CaptureDevice, StartTime, StopTime) {
  return this.sageAPI.invoke("GetScheduledRecordingsForDeviceForTime", [CaptureDevice,StartTime,StopTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScheduledRecordingsForTime
   GetScheduledRecordingsForTime(StartTime, StopTime) {
  return this.sageAPI.invoke("GetScheduledRecordingsForTime", [StartTime,StopTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetServerAddress
   GetServerAddress() {
  return this.sageAPI.invoke("GetServerAddress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSuggestedIntelligentRecordings
   GetSuggestedIntelligentRecordings() {
  return this.sageAPI.invoke("GetSuggestedIntelligentRecordings", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTableFocusedPosition
   GetTableFocusedPosition(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedPosition", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTableFocusedVisibleColumn
   GetTableFocusedVisibleColumn(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisibleColumn", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTableFocusedVisiblePosition
   GetTableFocusedVisiblePosition(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisiblePosition", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTableFocusedVisibleRow
   GetTableFocusedVisibleRow(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisibleRow", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTextForUIComponent
   GetTextForUIComponent(UIComponent) {
  return this.sageAPI.invoke("GetTextForUIComponent", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTimeUntilNextEPGDownload
   GetTimeUntilNextEPGDownload() {
  return this.sageAPI.invoke("GetTimeUntilNextEPGDownload", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTotalDiskspaceAvailable
   GetTotalDiskspaceAvailable() {
  return this.sageAPI.invoke("GetTotalDiskspaceAvailable", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTotalLibraryDuration
   GetTotalLibraryDuration() {
  return this.sageAPI.invoke("GetTotalLibraryDuration", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTotalVideoDuration
   GetTotalVideoDuration() {
  return this.sageAPI.invoke("GetTotalVideoDuration", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentContext
   GetUIComponentContext() {
  return this.sageAPI.invoke("GetUIComponentContext", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentForVariable
   GetUIComponentForVariable(MatchName, MatchValue) {
  return this.sageAPI.invoke("GetUIComponentForVariable", [MatchName,MatchValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentHeight
   GetUIComponentHeight(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentHeight", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentHeightf
   GetUIComponentHeightf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentHeightf", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentLastFocusedChild
   GetUIComponentLastFocusedChild(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentLastFocusedChild", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentPositionX
   GetUIComponentPositionX(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionX", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentPositionXf
   GetUIComponentPositionXf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionXf", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentPositionY
   GetUIComponentPositionY(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionY", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentPositionYf
   GetUIComponentPositionYf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionYf", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentWidth
   GetUIComponentWidth(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentWidth", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIComponentWidthf
   GetUIComponentWidthf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentWidthf", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIContextName
   GetUIContextName() {
  return this.sageAPI.invoke("GetUIContextName", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIContextNames
   GetUIContextNames() {
  return this.sageAPI.invoke("GetUIContextNames", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUsedLibraryDiskspace
   GetUsedLibraryDiskspace() {
  return this.sageAPI.invoke("GetUsedLibraryDiskspace", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUsedVideoDiskspace
   GetUsedVideoDiskspace() {
  return this.sageAPI.invoke("GetUsedVideoDiskspace", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVariableFromContext
   GetVariableFromContext(MatchName, MatchValue, LookupName) {
  return this.sageAPI.invoke("GetVariableFromContext", [MatchName,MatchValue,LookupName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVariableFromUIComponent
   GetVariableFromUIComponent(UIComponent, VarName) {
  return this.sageAPI.invoke("GetVariableFromUIComponent", [UIComponent,VarName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetVisibilityForVariable
   GetVisibilityForVariable(MatchName, MatchValue) {
  return this.sageAPI.invoke("GetVisibilityForVariable", [MatchName,MatchValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsAsleep
   IsAsleep() {
  return this.sageAPI.invoke("IsAsleep", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsBackgroundFileDownloadProgressivePlay
   IsBackgroundFileDownloadProgressivePlay(DestFile) {
  return this.sageAPI.invoke("IsBackgroundFileDownloadProgressivePlay", [DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsChannelDownloadComplete
   IsChannelDownloadComplete(Lineup) {
  return this.sageAPI.invoke("IsChannelDownloadComplete", [Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsClient
   IsClient() {
  return this.sageAPI.invoke("IsClient", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsClientDisconnected
   IsClientDisconnected() {
  return this.sageAPI.invoke("IsClientDisconnected", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDesktopUI
   IsDesktopUI() {
  return this.sageAPI.invoke("IsDesktopUI", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDoingLibraryImportScan
   IsDoingLibraryImportScan() {
  return this.sageAPI.invoke("IsDoingLibraryImportScan", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsEmbeddedServer
   IsEmbeddedServer() {
  return this.sageAPI.invoke("IsEmbeddedServer", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsEmbeddedSystem
   IsEmbeddedSystem() {
  return this.sageAPI.invoke("IsEmbeddedSystem", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFileDownloadProgressivePlay
   IsFileDownloadProgressivePlay() {
  return this.sageAPI.invoke("IsFileDownloadProgressivePlay", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFullScreen
   IsFullScreen() {
  return this.sageAPI.invoke("IsFullScreen", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsLinuxOS
   IsLinuxOS() {
  return this.sageAPI.invoke("IsLinuxOS", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMacOS
   IsMacOS() {
  return this.sageAPI.invoke("IsMacOS", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsOptionsMenuOpen
   IsOptionsMenuOpen() {
  return this.sageAPI.invoke("IsOptionsMenuOpen", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPVR
   IsPVR() {
  return this.sageAPI.invoke("IsPVR", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsRemoteUI
   IsRemoteUI() {
  return this.sageAPI.invoke("IsRemoteUI", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSDEPGServiceAvailable
   IsSDEPGServiceAvailable() {
  return this.sageAPI.invoke("IsSDEPGServiceAvailable", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsServerUI
   IsServerUI() {
  return this.sageAPI.invoke("IsServerUI", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTableTransitionToNext
   IsTableTransitionToNext(UIComponent) {
  return this.sageAPI.invoke("IsTableTransitionToNext", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTableTransitionToPrevious
   IsTableTransitionToPrevious(UIComponent) {
  return this.sageAPI.invoke("IsTableTransitionToPrevious", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTouchUI
   IsTouchUI() {
  return this.sageAPI.invoke("IsTouchUI", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTransitioningFromMenu
   IsTransitioningFromMenu(MenuName) {
  return this.sageAPI.invoke("IsTransitioningFromMenu", [MenuName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTransitioningFromMenus
   IsTransitioningFromMenus(MenuNames) {
  return this.sageAPI.invoke("IsTransitioningFromMenus", [MenuNames]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTransitioningToMenu
   IsTransitioningToMenu(MenuName) {
  return this.sageAPI.invoke("IsTransitioningToMenu", [MenuName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsTransitioningToMenus
   IsTransitioningToMenus(MenuNames) {
  return this.sageAPI.invoke("IsTransitioningToMenus", [MenuNames]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsWindowsOS
   IsWindowsOS() {
  return this.sageAPI.invoke("IsWindowsOS", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PassiveListen
   PassiveListen() {
  return this.sageAPI.invoke("PassiveListen", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrepareForFirmwareLoad
   PrepareForFirmwareLoad() {
  return this.sageAPI.invoke("PrepareForFirmwareLoad", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Refresh
   Refresh() {
  return this.sageAPI.invoke("Refresh", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RefreshArea
   RefreshArea(WidgetName) {
  return this.sageAPI.invoke("RefreshArea", [WidgetName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RefreshAreaForVariable
   RefreshAreaForVariable(Name, Value) {
  return this.sageAPI.invoke("RefreshAreaForVariable", [Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReloadSystemHooks
   ReloadSystemHooks() {
  return this.sageAPI.invoke("ReloadSystemHooks", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveUnusedLineups
   RemoveUnusedLineups() {
  return this.sageAPI.invoke("RemoveUnusedLineups", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Repaint
   Repaint() {
  return this.sageAPI.invoke("Repaint", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RepaintArea
   RepaintArea(WidgetName) {
  return this.sageAPI.invoke("RepaintArea", [WidgetName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RunLibraryImportScan
   RunLibraryImportScan(WaitUntilDone) {
  return this.sageAPI.invoke("RunLibraryImportScan", [WaitUntilDone]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SageCommand
   SageCommand(Command) {
  return this.sageAPI.invoke("SageCommand", [Command]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SageCommand
   SageCommand(Command, Payload) {
  return this.sageAPI.invoke("SageCommand", [Command,Payload]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SaveScreenshotToFile
   SaveScreenshotToFile(FilePath) {
  return this.sageAPI.invoke("SaveScreenshotToFile", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SendEventToUIComponent
   SendEventToUIComponent(UIComponent, Command, RepeatCount) {
  return this.sageAPI.invoke("SendEventToUIComponent", [UIComponent,Command,RepeatCount]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDisplayResolution
   SetDisplayResolution(Resolution) {
  return this.sageAPI.invoke("SetDisplayResolution", [Resolution]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetEPGProperty
   SetEPGProperty(EPGDataSource, Property, Value) {
  return this.sageAPI.invoke("SetEPGProperty", [EPGDataSource,Property,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetEmbeddedPanelBounds
   SetEmbeddedPanelBounds(x, y, width, height) {
  return this.sageAPI.invoke("SetEmbeddedPanelBounds", [x,y,width,height]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFocusForVariable
   SetFocusForVariable(Name, Value) {
  return this.sageAPI.invoke("SetFocusForVariable", [Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFocusToUIComponent
   SetFocusToUIComponent(UIComponent) {
  return this.sageAPI.invoke("SetFocusToUIComponent", [UIComponent]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetFullScreen
   SetFullScreen(FullScreen) {
  return this.sageAPI.invoke("SetFullScreen", [FullScreen]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRemoteEventEncryptionEnabled
   SetRemoteEventEncryptionEnabled(EnableEncryption) {
  return this.sageAPI.invoke("SetRemoteEventEncryptionEnabled", [EnableEncryption]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetVariableForUIComponent
   SetVariableForUIComponent(UIComponent, VarName, VarValue) {
  return this.sageAPI.invoke("SetVariableForUIComponent", [UIComponent,VarName,VarValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartBackgroundFileDownload
   StartBackgroundFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartBackgroundFileDownload", [ServerAddress,SourceFile,DestFile,RequestProperties]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartCircularFileDownload
   StartCircularFileDownload(ServerAddress, SourceFile, DestFile) {
  return this.sageAPI.invoke("StartCircularFileDownload", [ServerAddress,SourceFile,DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartCircularFileDownload
   StartCircularFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartCircularFileDownload", [ServerAddress,SourceFile,DestFile,RequestProperties]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartFileCopy
   StartFileCopy(Filename, SourceDirectory, DestDirectory) {
  return this.sageAPI.invoke("StartFileCopy", [Filename,SourceDirectory,DestDirectory]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartFileDownload
   StartFileDownload(ServerAddress, SourceFile, DestFile) {
  return this.sageAPI.invoke("StartFileDownload", [ServerAddress,SourceFile,DestFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StartFileDownload
   StartFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartFileDownload", [ServerAddress,SourceFile,DestFile,RequestProperties]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SwitchEmbeddedModeTo
   SwitchEmbeddedModeTo(NewMode) {
  return this.sageAPI.invoke("SwitchEmbeddedModeTo", [NewMode]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // TransmitCommandUsingInfraredTuningPlugin
   TransmitCommandUsingInfraredTuningPlugin(TuningPlugin, TuningPluginPort, RemoteName, CommandName, RepeatFactor) {
  return this.sageAPI.invoke("TransmitCommandUsingInfraredTuningPlugin", [TuningPlugin,TuningPluginPort,RemoteName,CommandName,RepeatFactor]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UpdateLocatorServer
   UpdateLocatorServer() {
  return this.sageAPI.invoke("UpdateLocatorServer", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for null
    export default Global;
