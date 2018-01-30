class Global {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddGlobalContext
   AddGlobalContext(Name, Value) {
  return this.sageAPI.invoke("AddGlobalContext", {
'Name':Name
,
'Value':Value
});
   }

    // AddStaticContext
   AddStaticContext(Name, Value) {
  return this.sageAPI.invoke("AddStaticContext", {
'Name':Name
,
'Value':Value
});
   }

    // ApplyServiceLevelToLineup
   ApplyServiceLevelToLineup(Lineup, ServiceLevel) {
  return this.sageAPI.invoke("ApplyServiceLevelToLineup", {
'Lineup':Lineup
,
'ServiceLevel':ServiceLevel
});
   }

    // AreAiringsSameShow
   AreAiringsSameShow(Airing1, Airing2) {
  return this.sageAPI.invoke("AreAiringsSameShow", {
'Airing1':Airing1
,
'Airing2':Airing2
});
   }

    // AreScreenshotsSupported
   AreScreenshotsSupported() {
  return this.sageAPI.invoke("AreScreenshotsSupported", {
});
   }

    // AreThereUnresolvedConflicts
   AreThereUnresolvedConflicts() {
  return this.sageAPI.invoke("AreThereUnresolvedConflicts", {
});
   }

    // CDBurnTheBurnList
   CDBurnTheBurnList(BurnList) {
  return this.sageAPI.invoke("CDBurnTheBurnList", {
'BurnList':BurnList
});
   }

    // CDCancelBurn
   CDCancelBurn() {
  return this.sageAPI.invoke("CDCancelBurn", {
});
   }

    // CDCancelRip
   CDCancelRip() {
  return this.sageAPI.invoke("CDCancelRip", {
});
   }

    // CDGetCurrentBurnStatus
   CDGetCurrentBurnStatus() {
  return this.sageAPI.invoke("CDGetCurrentBurnStatus", {
});
   }

    // CDGetCurrentRipStatus
   CDGetCurrentRipStatus() {
  return this.sageAPI.invoke("CDGetCurrentRipStatus", {
});
   }

    // CDRipToLibrary
   CDRipToLibrary(LibraryDir, BitrateKbps) {
  return this.sageAPI.invoke("CDRipToLibrary", {
'LibraryDir':LibraryDir
,
'BitrateKbps':BitrateKbps
});
   }

    // CachePlaceshifterLogin
   CachePlaceshifterLogin() {
  return this.sageAPI.invoke("CachePlaceshifterLogin", {
});
   }

    // CanCachePlaceshifterLogin
   CanCachePlaceshifterLogin() {
  return this.sageAPI.invoke("CanCachePlaceshifterLogin", {
});
   }

    // CancelBackgroundFileDownload
   CancelBackgroundFileDownload(DestFile) {
  return this.sageAPI.invoke("CancelBackgroundFileDownload", {
'DestFile':DestFile
});
   }

    // CancelFileCopy
   CancelFileCopy() {
  return this.sageAPI.invoke("CancelFileCopy", {
});
   }

    // CancelFileDownload
   CancelFileDownload() {
  return this.sageAPI.invoke("CancelFileDownload", {
});
   }

    // CloseOptionsMenu
   CloseOptionsMenu() {
  return this.sageAPI.invoke("CloseOptionsMenu", {
});
   }

    // CloseOptionsMenu
   CloseOptionsMenu(WidgetName, WaitForClose) {
  return this.sageAPI.invoke("CloseOptionsMenu", {
'WidgetName':WidgetName
,
'WaitForClose':WaitForClose
});
   }

    // CreateTimedRecording
   CreateTimedRecording(Channel, StartTime, StopTime, Recurrence) {
  return this.sageAPI.invoke("CreateTimedRecording", {
'Channel':Channel
,
'StartTime':StartTime
,
'StopTime':StopTime
,
'Recurrence':Recurrence
});
   }

    // DVDBurnTheBurnList
   DVDBurnTheBurnList(BurnList) {
  return this.sageAPI.invoke("DVDBurnTheBurnList", {
'BurnList':BurnList
});
   }

    // DVDCancelBurn
   DVDCancelBurn() {
  return this.sageAPI.invoke("DVDCancelBurn", {
});
   }

    // DVDGetCurrentBurnStatus
   DVDGetCurrentBurnStatus() {
  return this.sageAPI.invoke("DVDGetCurrentBurnStatus", {
});
   }

    // DebugLog
   DebugLog(DebugString) {
  return this.sageAPI.invoke("DebugLog", {
'DebugString':DebugString
});
   }

    // DiscoverSageTVServers
   DiscoverSageTVServers(Timeout) {
  return this.sageAPI.invoke("DiscoverSageTVServers", {
'Timeout':Timeout
});
   }

    // EnsureVisibilityForVariable
   EnsureVisibilityForVariable(Name, Value, DisplayIndex) {
  return this.sageAPI.invoke("EnsureVisibilityForVariable", {
'Name':Name
,
'Value':Value
,
'DisplayIndex':DisplayIndex
});
   }

    // Exit
   Exit() {
  return this.sageAPI.invoke("Exit", {
});
   }

    // Fork
   Fork() {
  return this.sageAPI.invoke("Fork", {
});
   }

    // GetAiringsThatWontBeRecorded
   GetAiringsThatWontBeRecorded(OnlyUnresolved) {
  return this.sageAPI.invoke("GetAiringsThatWontBeRecorded", {
'OnlyUnresolved':OnlyUnresolved
});
   }

    // GetAllLineups
   GetAllLineups() {
  return this.sageAPI.invoke("GetAllLineups", {
});
   }

    // GetApplicationLaunchTime
   GetApplicationLaunchTime() {
  return this.sageAPI.invoke("GetApplicationLaunchTime", {
});
   }

    // GetBackgroundFileDownloadStatus
   GetBackgroundFileDownloadStatus(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadStatus", {
'DestFile':DestFile
});
   }

    // GetBackgroundFileDownloadStreamTime
   GetBackgroundFileDownloadStreamTime(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadStreamTime", {
'DestFile':DestFile
});
   }

    // GetBackgroundFileDownloadTotalSize
   GetBackgroundFileDownloadTotalSize(DestFile) {
  return this.sageAPI.invoke("GetBackgroundFileDownloadTotalSize", {
'DestFile':DestFile
});
   }

    // GetChildUIComponentForVariable
   GetChildUIComponentForVariable(UIComponent, MatchName, MatchValue) {
  return this.sageAPI.invoke("GetChildUIComponentForVariable", {
'UIComponent':UIComponent
,
'MatchName':MatchName
,
'MatchValue':MatchValue
});
   }

    // GetClientServerConnectionProgress
   GetClientServerConnectionProgress() {
  return this.sageAPI.invoke("GetClientServerConnectionProgress", {
});
   }

    // GetConnectedClients
   GetConnectedClients() {
  return this.sageAPI.invoke("GetConnectedClients", {
});
   }

    // GetCurrentlyRecordingMediaFiles
   GetCurrentlyRecordingMediaFiles() {
  return this.sageAPI.invoke("GetCurrentlyRecordingMediaFiles", {
});
   }

    // GetDataFromTableFocusedOffset
   GetDataFromTableFocusedOffset(UIComponent, Offset, WrapIndex) {
  return this.sageAPI.invoke("GetDataFromTableFocusedOffset", {
'UIComponent':UIComponent
,
'Offset':Offset
,
'WrapIndex':WrapIndex
});
   }

    // GetDataFromTableVisiblePosition
   GetDataFromTableVisiblePosition(UIComponent, Offset, WrapIndex) {
  return this.sageAPI.invoke("GetDataFromTableVisiblePosition", {
'UIComponent':UIComponent
,
'Offset':Offset
,
'WrapIndex':WrapIndex
});
   }

    // GetDisplayResolution
   GetDisplayResolution() {
  return this.sageAPI.invoke("GetDisplayResolution", {
});
   }

    // GetDisplayResolutionDetails
   GetDisplayResolutionDetails(Resolution) {
  return this.sageAPI.invoke("GetDisplayResolutionDetails", {
'Resolution':Resolution
});
   }

    // GetDisplayResolutionHeight
   GetDisplayResolutionHeight() {
  return this.sageAPI.invoke("GetDisplayResolutionHeight", {
});
   }

    // GetDisplayResolutionOptions
   GetDisplayResolutionOptions() {
  return this.sageAPI.invoke("GetDisplayResolutionOptions", {
});
   }

    // GetDisplayResolutionWidth
   GetDisplayResolutionWidth() {
  return this.sageAPI.invoke("GetDisplayResolutionWidth", {
});
   }

    // GetEPGProperty
   GetEPGProperty(EPGDataSource, Property, Parameter) {
  return this.sageAPI.invoke("GetEPGProperty", {
'EPGDataSource':EPGDataSource
,
'Property':Property
,
'Parameter':Parameter
});
   }

    // GetEPGUpdateState
   GetEPGUpdateState() {
  return this.sageAPI.invoke("GetEPGUpdateState", {
});
   }

    // GetEmbeddedPanel
   GetEmbeddedPanel() {
  return this.sageAPI.invoke("GetEmbeddedPanel", {
});
   }

    // GetFileCopyStatus
   GetFileCopyStatus() {
  return this.sageAPI.invoke("GetFileCopyStatus", {
});
   }

    // GetFileDownloadStatus
   GetFileDownloadStatus() {
  return this.sageAPI.invoke("GetFileDownloadStatus", {
});
   }

    // GetFileDownloadStreamTime
   GetFileDownloadStreamTime() {
  return this.sageAPI.invoke("GetFileDownloadStreamTime", {
});
   }

    // GetFocusContext
   GetFocusContext() {
  return this.sageAPI.invoke("GetFocusContext", {
});
   }

    // GetFullUIHeight
   GetFullUIHeight() {
  return this.sageAPI.invoke("GetFullUIHeight", {
});
   }

    // GetFullUIWidth
   GetFullUIWidth() {
  return this.sageAPI.invoke("GetFullUIWidth", {
});
   }

    // GetHotplugStorageMap
   GetHotplugStorageMap() {
  return this.sageAPI.invoke("GetHotplugStorageMap", {
});
   }

    // GetLastEPGDownloadTime
   GetLastEPGDownloadTime() {
  return this.sageAPI.invoke("GetLastEPGDownloadTime", {
});
   }

    // GetLineupsForZipCodeFromEPGServer
   GetLineupsForZipCodeFromEPGServer(ZipCode) {
  return this.sageAPI.invoke("GetLineupsForZipCodeFromEPGServer", {
'ZipCode':ZipCode
});
   }

    // GetLocalMarketsFromEPGServer
   GetLocalMarketsFromEPGServer() {
  return this.sageAPI.invoke("GetLocalMarketsFromEPGServer", {
});
   }

    // GetLogo
   GetLogo(LogoName) {
  return this.sageAPI.invoke("GetLogo", {
'LogoName':LogoName
});
   }

    // GetOS
   GetOS() {
  return this.sageAPI.invoke("GetOS", {
});
   }

    // GetPreferredDisplayResolutions
   GetPreferredDisplayResolutions() {
  return this.sageAPI.invoke("GetPreferredDisplayResolutions", {
});
   }

    // GetRecentlyWatched
   GetRecentlyWatched(DurationToLookBack) {
  return this.sageAPI.invoke("GetRecentlyWatched", {
'DurationToLookBack':DurationToLookBack
});
   }

    // GetRemoteClientVersion
   GetRemoteClientVersion() {
  return this.sageAPI.invoke("GetRemoteClientVersion", {
});
   }

    // GetRemoteUIType
   GetRemoteUIType() {
  return this.sageAPI.invoke("GetRemoteUIType", {
});
   }

    // GetSageCommandNames
   GetSageCommandNames() {
  return this.sageAPI.invoke("GetSageCommandNames", {
});
   }

    // GetScheduledRecordings
   GetScheduledRecordings() {
  return this.sageAPI.invoke("GetScheduledRecordings", {
});
   }

    // GetScheduledRecordingsForDevice
   GetScheduledRecordingsForDevice(CaptureDevice) {
  return this.sageAPI.invoke("GetScheduledRecordingsForDevice", {
'CaptureDevice':CaptureDevice
});
   }

    // GetScheduledRecordingsForDeviceForTime
   GetScheduledRecordingsForDeviceForTime(CaptureDevice, StartTime, StopTime) {
  return this.sageAPI.invoke("GetScheduledRecordingsForDeviceForTime", {
'CaptureDevice':CaptureDevice
,
'StartTime':StartTime
,
'StopTime':StopTime
});
   }

    // GetScheduledRecordingsForTime
   GetScheduledRecordingsForTime(StartTime, StopTime) {
  return this.sageAPI.invoke("GetScheduledRecordingsForTime", {
'StartTime':StartTime
,
'StopTime':StopTime
});
   }

    // GetServerAddress
   GetServerAddress() {
  return this.sageAPI.invoke("GetServerAddress", {
});
   }

    // GetSuggestedIntelligentRecordings
   GetSuggestedIntelligentRecordings() {
  return this.sageAPI.invoke("GetSuggestedIntelligentRecordings", {
});
   }

    // GetTableFocusedPosition
   GetTableFocusedPosition(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedPosition", {
'UIComponent':UIComponent
});
   }

    // GetTableFocusedVisibleColumn
   GetTableFocusedVisibleColumn(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisibleColumn", {
'UIComponent':UIComponent
});
   }

    // GetTableFocusedVisiblePosition
   GetTableFocusedVisiblePosition(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisiblePosition", {
'UIComponent':UIComponent
});
   }

    // GetTableFocusedVisibleRow
   GetTableFocusedVisibleRow(UIComponent) {
  return this.sageAPI.invoke("GetTableFocusedVisibleRow", {
'UIComponent':UIComponent
});
   }

    // GetTextForUIComponent
   GetTextForUIComponent(UIComponent) {
  return this.sageAPI.invoke("GetTextForUIComponent", {
'UIComponent':UIComponent
});
   }

    // GetTimeUntilNextEPGDownload
   GetTimeUntilNextEPGDownload() {
  return this.sageAPI.invoke("GetTimeUntilNextEPGDownload", {
});
   }

    // GetTotalDiskspaceAvailable
   GetTotalDiskspaceAvailable() {
  return this.sageAPI.invoke("GetTotalDiskspaceAvailable", {
});
   }

    // GetTotalLibraryDuration
   GetTotalLibraryDuration() {
  return this.sageAPI.invoke("GetTotalLibraryDuration", {
});
   }

    // GetTotalVideoDuration
   GetTotalVideoDuration() {
  return this.sageAPI.invoke("GetTotalVideoDuration", {
});
   }

    // GetUIComponentContext
   GetUIComponentContext() {
  return this.sageAPI.invoke("GetUIComponentContext", {
});
   }

    // GetUIComponentForVariable
   GetUIComponentForVariable(MatchName, MatchValue) {
  return this.sageAPI.invoke("GetUIComponentForVariable", {
'MatchName':MatchName
,
'MatchValue':MatchValue
});
   }

    // GetUIComponentHeight
   GetUIComponentHeight(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentHeight", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentHeightf
   GetUIComponentHeightf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentHeightf", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentLastFocusedChild
   GetUIComponentLastFocusedChild(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentLastFocusedChild", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentPositionX
   GetUIComponentPositionX(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionX", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentPositionXf
   GetUIComponentPositionXf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionXf", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentPositionY
   GetUIComponentPositionY(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionY", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentPositionYf
   GetUIComponentPositionYf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentPositionYf", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentWidth
   GetUIComponentWidth(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentWidth", {
'UIComponent':UIComponent
});
   }

    // GetUIComponentWidthf
   GetUIComponentWidthf(UIComponent) {
  return this.sageAPI.invoke("GetUIComponentWidthf", {
'UIComponent':UIComponent
});
   }

    // GetUIContextName
   GetUIContextName() {
  return this.sageAPI.invoke("GetUIContextName", {
});
   }

    // GetUIContextNames
   GetUIContextNames() {
  return this.sageAPI.invoke("GetUIContextNames", {
});
   }

    // GetUsedLibraryDiskspace
   GetUsedLibraryDiskspace() {
  return this.sageAPI.invoke("GetUsedLibraryDiskspace", {
});
   }

    // GetUsedVideoDiskspace
   GetUsedVideoDiskspace() {
  return this.sageAPI.invoke("GetUsedVideoDiskspace", {
});
   }

    // GetVariableFromContext
   GetVariableFromContext(MatchName, MatchValue, LookupName) {
  return this.sageAPI.invoke("GetVariableFromContext", {
'MatchName':MatchName
,
'MatchValue':MatchValue
,
'LookupName':LookupName
});
   }

    // GetVariableFromUIComponent
   GetVariableFromUIComponent(UIComponent, VarName) {
  return this.sageAPI.invoke("GetVariableFromUIComponent", {
'UIComponent':UIComponent
,
'VarName':VarName
});
   }

    // GetVisibilityForVariable
   GetVisibilityForVariable(MatchName, MatchValue) {
  return this.sageAPI.invoke("GetVisibilityForVariable", {
'MatchName':MatchName
,
'MatchValue':MatchValue
});
   }

    // IsAsleep
   IsAsleep() {
  return this.sageAPI.invoke("IsAsleep", {
});
   }

    // IsBackgroundFileDownloadProgressivePlay
   IsBackgroundFileDownloadProgressivePlay(DestFile) {
  return this.sageAPI.invoke("IsBackgroundFileDownloadProgressivePlay", {
'DestFile':DestFile
});
   }

    // IsChannelDownloadComplete
   IsChannelDownloadComplete(Lineup) {
  return this.sageAPI.invoke("IsChannelDownloadComplete", {
'Lineup':Lineup
});
   }

    // IsClient
   IsClient() {
  return this.sageAPI.invoke("IsClient", {
});
   }

    // IsClientDisconnected
   IsClientDisconnected() {
  return this.sageAPI.invoke("IsClientDisconnected", {
});
   }

    // IsDesktopUI
   IsDesktopUI() {
  return this.sageAPI.invoke("IsDesktopUI", {
});
   }

    // IsDoingLibraryImportScan
   IsDoingLibraryImportScan() {
  return this.sageAPI.invoke("IsDoingLibraryImportScan", {
});
   }

    // IsEmbeddedServer
   IsEmbeddedServer() {
  return this.sageAPI.invoke("IsEmbeddedServer", {
});
   }

    // IsEmbeddedSystem
   IsEmbeddedSystem() {
  return this.sageAPI.invoke("IsEmbeddedSystem", {
});
   }

    // IsFileDownloadProgressivePlay
   IsFileDownloadProgressivePlay() {
  return this.sageAPI.invoke("IsFileDownloadProgressivePlay", {
});
   }

    // IsFullScreen
   IsFullScreen() {
  return this.sageAPI.invoke("IsFullScreen", {
});
   }

    // IsLinuxOS
   IsLinuxOS() {
  return this.sageAPI.invoke("IsLinuxOS", {
});
   }

    // IsMacOS
   IsMacOS() {
  return this.sageAPI.invoke("IsMacOS", {
});
   }

    // IsOptionsMenuOpen
   IsOptionsMenuOpen() {
  return this.sageAPI.invoke("IsOptionsMenuOpen", {
});
   }

    // IsPVR
   IsPVR() {
  return this.sageAPI.invoke("IsPVR", {
});
   }

    // IsRemoteUI
   IsRemoteUI() {
  return this.sageAPI.invoke("IsRemoteUI", {
});
   }

    // IsSDEPGServiceAvailable
   IsSDEPGServiceAvailable() {
  return this.sageAPI.invoke("IsSDEPGServiceAvailable", {
});
   }

    // IsServerUI
   IsServerUI() {
  return this.sageAPI.invoke("IsServerUI", {
});
   }

    // IsTableTransitionToNext
   IsTableTransitionToNext(UIComponent) {
  return this.sageAPI.invoke("IsTableTransitionToNext", {
'UIComponent':UIComponent
});
   }

    // IsTableTransitionToPrevious
   IsTableTransitionToPrevious(UIComponent) {
  return this.sageAPI.invoke("IsTableTransitionToPrevious", {
'UIComponent':UIComponent
});
   }

    // IsTouchUI
   IsTouchUI() {
  return this.sageAPI.invoke("IsTouchUI", {
});
   }

    // IsTransitioningFromMenu
   IsTransitioningFromMenu(MenuName) {
  return this.sageAPI.invoke("IsTransitioningFromMenu", {
'MenuName':MenuName
});
   }

    // IsTransitioningFromMenus
   IsTransitioningFromMenus(MenuNames) {
  return this.sageAPI.invoke("IsTransitioningFromMenus", {
'MenuNames':MenuNames
});
   }

    // IsTransitioningToMenu
   IsTransitioningToMenu(MenuName) {
  return this.sageAPI.invoke("IsTransitioningToMenu", {
'MenuName':MenuName
});
   }

    // IsTransitioningToMenus
   IsTransitioningToMenus(MenuNames) {
  return this.sageAPI.invoke("IsTransitioningToMenus", {
'MenuNames':MenuNames
});
   }

    // IsWindowsOS
   IsWindowsOS() {
  return this.sageAPI.invoke("IsWindowsOS", {
});
   }

    // PassiveListen
   PassiveListen() {
  return this.sageAPI.invoke("PassiveListen", {
});
   }

    // PrepareForFirmwareLoad
   PrepareForFirmwareLoad() {
  return this.sageAPI.invoke("PrepareForFirmwareLoad", {
});
   }

    // Refresh
   Refresh() {
  return this.sageAPI.invoke("Refresh", {
});
   }

    // RefreshArea
   RefreshArea(WidgetName) {
  return this.sageAPI.invoke("RefreshArea", {
'WidgetName':WidgetName
});
   }

    // RefreshAreaForVariable
   RefreshAreaForVariable(Name, Value) {
  return this.sageAPI.invoke("RefreshAreaForVariable", {
'Name':Name
,
'Value':Value
});
   }

    // ReloadSystemHooks
   ReloadSystemHooks() {
  return this.sageAPI.invoke("ReloadSystemHooks", {
});
   }

    // RemoveUnusedLineups
   RemoveUnusedLineups() {
  return this.sageAPI.invoke("RemoveUnusedLineups", {
});
   }

    // Repaint
   Repaint() {
  return this.sageAPI.invoke("Repaint", {
});
   }

    // RepaintArea
   RepaintArea(WidgetName) {
  return this.sageAPI.invoke("RepaintArea", {
'WidgetName':WidgetName
});
   }

    // RunLibraryImportScan
   RunLibraryImportScan(WaitUntilDone) {
  return this.sageAPI.invoke("RunLibraryImportScan", {
'WaitUntilDone':WaitUntilDone
});
   }

    // SageCommand
   SageCommand(Command) {
  return this.sageAPI.invoke("SageCommand", {
'Command':Command
});
   }

    // SageCommand
   SageCommand(Command, Payload) {
  return this.sageAPI.invoke("SageCommand", {
'Command':Command
,
'Payload':Payload
});
   }

    // SaveScreenshotToFile
   SaveScreenshotToFile(FilePath) {
  return this.sageAPI.invoke("SaveScreenshotToFile", {
'FilePath':FilePath
});
   }

    // SendEventToUIComponent
   SendEventToUIComponent(UIComponent, Command, RepeatCount) {
  return this.sageAPI.invoke("SendEventToUIComponent", {
'UIComponent':UIComponent
,
'Command':Command
,
'RepeatCount':RepeatCount
});
   }

    // SetDisplayResolution
   SetDisplayResolution(Resolution) {
  return this.sageAPI.invoke("SetDisplayResolution", {
'Resolution':Resolution
});
   }

    // SetEPGProperty
   SetEPGProperty(EPGDataSource, Property, Value) {
  return this.sageAPI.invoke("SetEPGProperty", {
'EPGDataSource':EPGDataSource
,
'Property':Property
,
'Value':Value
});
   }

    // SetEmbeddedPanelBounds
   SetEmbeddedPanelBounds(x, y, width, height) {
  return this.sageAPI.invoke("SetEmbeddedPanelBounds", {
'x':x
,
'y':y
,
'width':width
,
'height':height
});
   }

    // SetFocusForVariable
   SetFocusForVariable(Name, Value) {
  return this.sageAPI.invoke("SetFocusForVariable", {
'Name':Name
,
'Value':Value
});
   }

    // SetFocusToUIComponent
   SetFocusToUIComponent(UIComponent) {
  return this.sageAPI.invoke("SetFocusToUIComponent", {
'UIComponent':UIComponent
});
   }

    // SetFullScreen
   SetFullScreen(FullScreen) {
  return this.sageAPI.invoke("SetFullScreen", {
'FullScreen':FullScreen
});
   }

    // SetRemoteEventEncryptionEnabled
   SetRemoteEventEncryptionEnabled(EnableEncryption) {
  return this.sageAPI.invoke("SetRemoteEventEncryptionEnabled", {
'EnableEncryption':EnableEncryption
});
   }

    // SetVariableForUIComponent
   SetVariableForUIComponent(UIComponent, VarName, VarValue) {
  return this.sageAPI.invoke("SetVariableForUIComponent", {
'UIComponent':UIComponent
,
'VarName':VarName
,
'VarValue':VarValue
});
   }

    // StartBackgroundFileDownload
   StartBackgroundFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartBackgroundFileDownload", {
'ServerAddress':ServerAddress
,
'SourceFile':SourceFile
,
'DestFile':DestFile
,
'RequestProperties':RequestProperties
});
   }

    // StartCircularFileDownload
   StartCircularFileDownload(ServerAddress, SourceFile, DestFile) {
  return this.sageAPI.invoke("StartCircularFileDownload", {
'ServerAddress':ServerAddress
,
'SourceFile':SourceFile
,
'DestFile':DestFile
});
   }

    // StartCircularFileDownload
   StartCircularFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartCircularFileDownload", {
'ServerAddress':ServerAddress
,
'SourceFile':SourceFile
,
'DestFile':DestFile
,
'RequestProperties':RequestProperties
});
   }

    // StartFileCopy
   StartFileCopy(Filename, SourceDirectory, DestDirectory) {
  return this.sageAPI.invoke("StartFileCopy", {
'Filename':Filename
,
'SourceDirectory':SourceDirectory
,
'DestDirectory':DestDirectory
});
   }

    // StartFileDownload
   StartFileDownload(ServerAddress, SourceFile, DestFile) {
  return this.sageAPI.invoke("StartFileDownload", {
'ServerAddress':ServerAddress
,
'SourceFile':SourceFile
,
'DestFile':DestFile
});
   }

    // StartFileDownload
   StartFileDownload(ServerAddress, SourceFile, DestFile, RequestProperties) {
  return this.sageAPI.invoke("StartFileDownload", {
'ServerAddress':ServerAddress
,
'SourceFile':SourceFile
,
'DestFile':DestFile
,
'RequestProperties':RequestProperties
});
   }

    // SwitchEmbeddedModeTo
   SwitchEmbeddedModeTo(NewMode) {
  return this.sageAPI.invoke("SwitchEmbeddedModeTo", {
'NewMode':NewMode
});
   }

    // TransmitCommandUsingInfraredTuningPlugin
   TransmitCommandUsingInfraredTuningPlugin(TuningPlugin, TuningPluginPort, RemoteName, CommandName, RepeatFactor) {
  return this.sageAPI.invoke("TransmitCommandUsingInfraredTuningPlugin", {
'TuningPlugin':TuningPlugin
,
'TuningPluginPort':TuningPluginPort
,
'RemoteName':RemoteName
,
'CommandName':CommandName
,
'RepeatFactor':RepeatFactor
});
   }

    // UpdateLocatorServer
   UpdateLocatorServer() {
  return this.sageAPI.invoke("UpdateLocatorServer", {
});
   }
}

    export default Global;
