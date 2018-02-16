class Utility {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddElement
   AddElement(Data, Value) {
  return this.sageAPI.invoke("AddElement", [Data,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddToGrouping
   AddToGrouping(Grouping, Key, Value) {
  return this.sageAPI.invoke("AddToGrouping", [Grouping,Key,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Animate
   Animate(WidgetName, LayerName, AnimationName, Duration) {
  return this.sageAPI.invoke("Animate", [WidgetName,LayerName,AnimationName,Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AnimateDelayed
   AnimateDelayed(WidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateDelayed", [WidgetName,LayerName,AnimationName,Duration,StartDelay,Interruptable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AnimateTransition
   AnimateTransition(SourceWidgetName, TargetWidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateTransition", [SourceWidgetName,TargetWidgetName,LayerName,AnimationName,Duration,StartDelay,Interruptable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AnimateVariable
   AnimateVariable(WidgetName, LayerName, VarName, VarValue, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateVariable", [WidgetName,LayerName,VarName,VarValue,AnimationName,Duration,StartDelay,Interruptable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AreCoreAnimationsEnabled
   AreCoreAnimationsEnabled() {
  return this.sageAPI.invoke("AreCoreAnimationsEnabled", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AreCoreAnimationsSupported
   AreCoreAnimationsSupported() {
  return this.sageAPI.invoke("AreCoreAnimationsSupported", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CalculateMD5Sum
   CalculateMD5Sum(FilePath) {
  return this.sageAPI.invoke("CalculateMD5Sum", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CalculateSHA1Hash
   CalculateSHA1Hash(EncodeString) {
  return this.sageAPI.invoke("CalculateSHA1Hash", [EncodeString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearMenuCache
   ClearMenuCache() {
  return this.sageAPI.invoke("ClearMenuCache", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConvertNteChars
   ConvertNteChars(NteString) {
  return this.sageAPI.invoke("ConvertNteChars", [NteString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateArray
   CreateArray(Value) {
  return this.sageAPI.invoke("CreateArray", [Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateFilePath
   CreateFilePath(Directory, File) {
  return this.sageAPI.invoke("CreateFilePath", [Directory,File]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateNewDirectory
   CreateNewDirectory(DirectoryPath) {
  return this.sageAPI.invoke("CreateNewDirectory", [DirectoryPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateNewLocalDirectory
   CreateNewLocalDirectory(DirectoryPath) {
  return this.sageAPI.invoke("CreateNewLocalDirectory", [DirectoryPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateTimeSpan
   CreateTimeSpan(StartTime, EndTime) {
  return this.sageAPI.invoke("CreateTimeSpan", [StartTime,EndTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DateFormat
   DateFormat(Format, Date) {
  return this.sageAPI.invoke("DateFormat", [Format,Date]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteFilePath
   DeleteFilePath(FilePath) {
  return this.sageAPI.invoke("DeleteFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteLocalFilePath
   DeleteLocalFilePath(FilePath) {
  return this.sageAPI.invoke("DeleteLocalFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DidImageLoadFail
   DidImageLoadFail(Image) {
  return this.sageAPI.invoke("DidImageLoadFail", [Image]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DirectoryListing
   DirectoryListing(DirectoryPath) {
  return this.sageAPI.invoke("DirectoryListing", [DirectoryPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DirectoryListing
   DirectoryListing(DirectoryPath, MediaMask) {
  return this.sageAPI.invoke("DirectoryListing", [DirectoryPath,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DumpServerThreadStates
   DumpServerThreadStates() {
  return this.sageAPI.invoke("DumpServerThreadStates", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DurFormat
   DurFormat(Format, Duration) {
  return this.sageAPI.invoke("DurFormat", [Format,Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ExecuteProcess
   ExecuteProcess(CommandString, Arguments, WorkingDirectory, ConsoleApp) {
  return this.sageAPI.invoke("ExecuteProcess", [CommandString,Arguments,WorkingDirectory,ConsoleApp]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ExecuteProcessReturnOutput
   ExecuteProcessReturnOutput(CommandString, Arguments, WorkingDirectory, ReturnStdout, ReturnStderr) {
  return this.sageAPI.invoke("ExecuteProcessReturnOutput", [CommandString,Arguments,WorkingDirectory,ReturnStdout,ReturnStderr]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FindComparativeElement
   FindComparativeElement(Data, Criteria, Method) {
  return this.sageAPI.invoke("FindComparativeElement", [Data,Criteria,Method]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FindElementIndex
   FindElementIndex(Data, Element) {
  return this.sageAPI.invoke("FindElementIndex", [Data,Element]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAbsoluteFilePath
   GetAbsoluteFilePath(FilePath) {
  return this.sageAPI.invoke("GetAbsoluteFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDNSAddress
   GetDNSAddress() {
  return this.sageAPI.invoke("GetDNSAddress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDiskFreeSpace
   GetDiskFreeSpace(DrivePath) {
  return this.sageAPI.invoke("GetDiskFreeSpace", [DrivePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDiskTotalSpace
   GetDiskTotalSpace(DrivePath) {
  return this.sageAPI.invoke("GetDiskTotalSpace", [DrivePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetElement
   GetElement(Data, Index) {
  return this.sageAPI.invoke("GetElement", [Data,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileAsString
   GetFileAsString(FilePath) {
  return this.sageAPI.invoke("GetFileAsString", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileExtensionFromPath
   GetFileExtensionFromPath(FilePath) {
  return this.sageAPI.invoke("GetFileExtensionFromPath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileNameFromPath
   GetFileNameFromPath(FilePath) {
  return this.sageAPI.invoke("GetFileNameFromPath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFilePathSize
   GetFilePathSize(FilePath) {
  return this.sageAPI.invoke("GetFilePathSize", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileSystemRoots
   GetFileSystemRoots() {
  return this.sageAPI.invoke("GetFileSystemRoots", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFileSystemType
   GetFileSystemType(DrivePath) {
  return this.sageAPI.invoke("GetFileSystemType", [DrivePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetGatewayAddress
   GetGatewayAddress() {
  return this.sageAPI.invoke("GetGatewayAddress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetImageAsBufferedImage
   GetImageAsBufferedImage(Resource) {
  return this.sageAPI.invoke("GetImageAsBufferedImage", [Resource]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalFileAsString
   GetLocalFileAsString(FilePath) {
  return this.sageAPI.invoke("GetLocalFileAsString", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalFilePathSize
   GetLocalFilePathSize(FilePath) {
  return this.sageAPI.invoke("GetLocalFilePathSize", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalFileSystemRoots
   GetLocalFileSystemRoots() {
  return this.sageAPI.invoke("GetLocalFileSystemRoots", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalIPAddress
   GetLocalIPAddress() {
  return this.sageAPI.invoke("GetLocalIPAddress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLocalPathLastModifiedTime
   GetLocalPathLastModifiedTime(FilePath) {
  return this.sageAPI.invoke("GetLocalPathLastModifiedTime", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMetaImageAspectRatio
   GetMetaImageAspectRatio(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageAspectRatio", [MetaImage]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMetaImageBytes
   GetMetaImageBytes(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageBytes", [MetaImage]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMetaImageSourceFile
   GetMetaImageSourceFile(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageSourceFile", [MetaImage]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPathLastModifiedTime
   GetPathLastModifiedTime(FilePath) {
  return this.sageAPI.invoke("GetPathLastModifiedTime", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPathParentDirectory
   GetPathParentDirectory(FilePath) {
  return this.sageAPI.invoke("GetPathParentDirectory", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetScaledImageAsBufferedImage
   GetScaledImageAsBufferedImage(Resource, Width, Height) {
  return this.sageAPI.invoke("GetScaledImageAsBufferedImage", [Resource,Width,Height]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubgroup
   GetSubgroup(Grouping, Key) {
  return this.sageAPI.invoke("GetSubgroup", [Grouping,Key]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSubnetMask
   GetSubnetMask() {
  return this.sageAPI.invoke("GetSubnetMask", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetTimeSinceLastInput
   GetTimeSinceLastInput() {
  return this.sageAPI.invoke("GetTimeSinceLastInput", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIRefreshLock
   GetUIRefreshLock() {
  return this.sageAPI.invoke("GetUIRefreshLock", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWindowsRegistryDWORDValue
   GetWindowsRegistryDWORDValue(Root, Key, Name) {
  return this.sageAPI.invoke("GetWindowsRegistryDWORDValue", [Root,Key,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWindowsRegistryNames
   GetWindowsRegistryNames(Root, Key) {
  return this.sageAPI.invoke("GetWindowsRegistryNames", [Root,Key]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWindowsRegistryStringValue
   GetWindowsRegistryStringValue(Root, Key, Name) {
  return this.sageAPI.invoke("GetWindowsRegistryStringValue", [Root,Key,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWorkingDirectory
   GetWorkingDirectory() {
  return this.sageAPI.invoke("GetWorkingDirectory", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GuessMajorFileType
   GuessMajorFileType(Filename) {
  return this.sageAPI.invoke("GuessMajorFileType", [Filename]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasLocalFilesystem
   HasLocalFilesystem() {
  return this.sageAPI.invoke("HasLocalFilesystem", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // If
   If(Condition, True, False) {
  return this.sageAPI.invoke("If", [Condition,True,False]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDirectoryPath
   IsDirectoryPath(FilePath) {
  return this.sageAPI.invoke("IsDirectoryPath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsEmpty
   IsEmpty(Data) {
  return this.sageAPI.invoke("IsEmpty", [Data]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFilePath
   IsFilePath(FilePath) {
  return this.sageAPI.invoke("IsFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsFilePathHidden
   IsFilePathHidden(FilePath) {
  return this.sageAPI.invoke("IsFilePathHidden", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsImageLoaded
   IsImageLoaded(Image) {
  return this.sageAPI.invoke("IsImageLoaded", [Image]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsImportableFileType
   IsImportableFileType(Filename) {
  return this.sageAPI.invoke("IsImportableFileType", [Filename]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsLocalDirectoryPath
   IsLocalDirectoryPath(FilePath) {
  return this.sageAPI.invoke("IsLocalDirectoryPath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsLocalFilePath
   IsLocalFilePath(FilePath) {
  return this.sageAPI.invoke("IsLocalFilePath", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsLocalFilePathHidden
   IsLocalFilePathHidden(FilePath) {
  return this.sageAPI.invoke("IsLocalFilePathHidden", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsLocalRestartNeeded
   IsLocalRestartNeeded() {
  return this.sageAPI.invoke("IsLocalRestartNeeded", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMetaImage
   IsMetaImage(MetaImage) {
  return this.sageAPI.invoke("IsMetaImage", [MetaImage]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsServerRestartNeeded
   IsServerRestartNeeded() {
  return this.sageAPI.invoke("IsServerRestartNeeded", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Keystroke
   Keystroke(Character, System) {
  return this.sageAPI.invoke("Keystroke", [Character,System]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LoadImage
   LoadImage(Resource) {
  return this.sageAPI.invoke("LoadImage", [Resource]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LoadImageFile
   LoadImageFile(FilePath) {
  return this.sageAPI.invoke("LoadImageFile", [FilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LocalDirectoryListing
   LocalDirectoryListing(DirectoryPath) {
  return this.sageAPI.invoke("LocalDirectoryListing", [DirectoryPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LocalizeString
   LocalizeString(EnglishText) {
  return this.sageAPI.invoke("LocalizeString", [EnglishText]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LookupIPForLocatorID
   LookupIPForLocatorID(LocatorID) {
  return this.sageAPI.invoke("LookupIPForLocatorID", [LocatorID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Max
   Max(Value1, Value2) {
  return this.sageAPI.invoke("Max", [Value1,Value2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Min
   Min(Value1, Value2) {
  return this.sageAPI.invoke("Min", [Value1,Value2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // NumberFormat
   NumberFormat(Format, Number) {
  return this.sageAPI.invoke("NumberFormat", [Format,Number]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PlaySound
   PlaySound(SoundFile) {
  return this.sageAPI.invoke("PlaySound", [SoundFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintCurrentTime
   PrintCurrentTime() {
  return this.sageAPI.invoke("PrintCurrentTime", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDate
   PrintDate(Date) {
  return this.sageAPI.invoke("PrintDate", [Date]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDateFull
   PrintDateFull(Date) {
  return this.sageAPI.invoke("PrintDateFull", [Date]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDateLong
   PrintDateLong(Date) {
  return this.sageAPI.invoke("PrintDateLong", [Date]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDateShort
   PrintDateShort(Date) {
  return this.sageAPI.invoke("PrintDateShort", [Date]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDuration
   PrintDuration(Duration) {
  return this.sageAPI.invoke("PrintDuration", [Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDurationShort
   PrintDurationShort(Duration) {
  return this.sageAPI.invoke("PrintDurationShort", [Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintDurationWithSeconds
   PrintDurationWithSeconds(Duration) {
  return this.sageAPI.invoke("PrintDurationWithSeconds", [Duration]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintTime
   PrintTime(Time) {
  return this.sageAPI.invoke("PrintTime", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintTimeFull
   PrintTimeFull(Time) {
  return this.sageAPI.invoke("PrintTimeFull", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintTimeLong
   PrintTimeLong(Time) {
  return this.sageAPI.invoke("PrintTimeLong", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PrintTimeShort
   PrintTimeShort(Time) {
  return this.sageAPI.invoke("PrintTimeShort", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // QueryServerMacAddress
   QueryServerMacAddress(Hostname) {
  return this.sageAPI.invoke("QueryServerMacAddress", [Hostname]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReformatDeviceAtPathAsEXT3
   ReformatDeviceAtPathAsEXT3(DrivePath) {
  return this.sageAPI.invoke("ReformatDeviceAtPathAsEXT3", [DrivePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReleaseUIRefreshLock
   ReleaseUIRefreshLock() {
  return this.sageAPI.invoke("ReleaseUIRefreshLock", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReloadNameserverCache
   ReloadNameserverCache() {
  return this.sageAPI.invoke("ReloadNameserverCache", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveElement
   RemoveElement(Data, Value) {
  return this.sageAPI.invoke("RemoveElement", [Data,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveElementAtIndex
   RemoveElementAtIndex(Data, Index) {
  return this.sageAPI.invoke("RemoveElementAtIndex", [Data,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveWindowsRegistryValue
   RemoveWindowsRegistryValue(Root, Key, Name) {
  return this.sageAPI.invoke("RemoveWindowsRegistryValue", [Root,Key,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RenameFilePath
   RenameFilePath(OriginalFilePath, NewFilePath) {
  return this.sageAPI.invoke("RenameFilePath", [OriginalFilePath,NewFilePath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Restart
   Restart() {
  return this.sageAPI.invoke("Restart", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Round
   Round(Number) {
  return this.sageAPI.invoke("Round", [Number]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SaveImageToFile
   SaveImageToFile(MetaImage, File, Width, Height) {
  return this.sageAPI.invoke("SaveImageToFile", [MetaImage,File,Width,Height]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ScaleBufferedImage
   ScaleBufferedImage(JavaBufferedImage, Width, Height, Alpha) {
  return this.sageAPI.invoke("ScaleBufferedImage", [JavaBufferedImage,Width,Height,Alpha]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ScanWirelessAPs
   ScanWirelessAPs() {
  return this.sageAPI.invoke("ScanWirelessAPs", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SendNetworkCommand
   SendNetworkCommand(Hostname, Port, Command) {
  return this.sageAPI.invoke("SendNetworkCommand", [Hostname,Port,Command]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ServerRestart
   ServerRestart() {
  return this.sageAPI.invoke("ServerRestart", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCoreAnimationsEnabled
   SetCoreAnimationsEnabled(Enabled) {
  return this.sageAPI.invoke("SetCoreAnimationsEnabled", [Enabled]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetElement
   SetElement(Data, Index, Value) {
  return this.sageAPI.invoke("SetElement", [Data,Index,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetScrollPosition
   SetScrollPosition(RelativeX, RelativeY) {
  return this.sageAPI.invoke("SetScrollPosition", [RelativeX,RelativeY]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWindowsRegistryDWORDValue
   SetWindowsRegistryDWORDValue(Root, Key, Name, Value) {
  return this.sageAPI.invoke("SetWindowsRegistryDWORDValue", [Root,Key,Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWindowsRegistryStringValue
   SetWindowsRegistryStringValue(Root, Key, Name, Value) {
  return this.sageAPI.invoke("SetWindowsRegistryStringValue", [Root,Key,Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Size
   Size(Data) {
  return this.sageAPI.invoke("Size", [Data]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringEndsWith
   StringEndsWith(FullString, MatchString) {
  return this.sageAPI.invoke("StringEndsWith", [FullString,MatchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringIndexOf
   StringIndexOf(FullString, MatchString) {
  return this.sageAPI.invoke("StringIndexOf", [FullString,MatchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringIndexOfNTE
   StringIndexOfNTE(FullString, MatchStringNTE) {
  return this.sageAPI.invoke("StringIndexOfNTE", [FullString,MatchStringNTE]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringLastIndexOf
   StringLastIndexOf(FullString, MatchString) {
  return this.sageAPI.invoke("StringLastIndexOf", [FullString,MatchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringStartsWith
   StringStartsWith(FullString, MatchString) {
  return this.sageAPI.invoke("StringStartsWith", [FullString,MatchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StringStartsWithNTE
   StringStartsWithNTE(FullString, MatchStringNTE) {
  return this.sageAPI.invoke("StringStartsWithNTE", [FullString,MatchStringNTE]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Substring
   Substring(String, StartIndex, EndIndex) {
  return this.sageAPI.invoke("Substring", [String,StartIndex,EndIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SubstringBegin
   SubstringBegin(String, EndOffset) {
  return this.sageAPI.invoke("SubstringBegin", [String,EndOffset]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // TestPlaceshifterConnectivity
   TestPlaceshifterConnectivity(LocatorID) {
  return this.sageAPI.invoke("TestPlaceshifterConnectivity", [LocatorID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Time
   Time() {
  return this.sageAPI.invoke("Time", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UnloadImage
   UnloadImage(ResPath) {
  return this.sageAPI.invoke("UnloadImage", [ResPath]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Wait
   Wait(Time) {
  return this.sageAPI.invoke("Wait", [Time]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // WriteStringToFile
   WriteStringToFile(FilePath, Data) {
  return this.sageAPI.invoke("WriteStringToFile", [FilePath,Data]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // WriteStringToLocalFile
   WriteStringToLocalFile(FilePath, Data) {
  return this.sageAPI.invoke("WriteStringToLocalFile", [FilePath,Data]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for null
    export default Utility;
