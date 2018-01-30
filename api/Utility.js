class Utility {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddElement
   AddElement(Data, Value) {
  return this.sageAPI.invoke("AddElement", {
'Data':Data
,
'Value':Value
});
   }

    // AddToGrouping
   AddToGrouping(Grouping, Key, Value) {
  return this.sageAPI.invoke("AddToGrouping", {
'Grouping':Grouping
,
'Key':Key
,
'Value':Value
});
   }

    // Animate
   Animate(WidgetName, LayerName, AnimationName, Duration) {
  return this.sageAPI.invoke("Animate", {
'WidgetName':WidgetName
,
'LayerName':LayerName
,
'AnimationName':AnimationName
,
'Duration':Duration
});
   }

    // AnimateDelayed
   AnimateDelayed(WidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateDelayed", {
'WidgetName':WidgetName
,
'LayerName':LayerName
,
'AnimationName':AnimationName
,
'Duration':Duration
,
'StartDelay':StartDelay
,
'Interruptable':Interruptable
});
   }

    // AnimateTransition
   AnimateTransition(SourceWidgetName, TargetWidgetName, LayerName, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateTransition", {
'SourceWidgetName':SourceWidgetName
,
'TargetWidgetName':TargetWidgetName
,
'LayerName':LayerName
,
'AnimationName':AnimationName
,
'Duration':Duration
,
'StartDelay':StartDelay
,
'Interruptable':Interruptable
});
   }

    // AnimateVariable
   AnimateVariable(WidgetName, LayerName, VarName, VarValue, AnimationName, Duration, StartDelay, Interruptable) {
  return this.sageAPI.invoke("AnimateVariable", {
'WidgetName':WidgetName
,
'LayerName':LayerName
,
'VarName':VarName
,
'VarValue':VarValue
,
'AnimationName':AnimationName
,
'Duration':Duration
,
'StartDelay':StartDelay
,
'Interruptable':Interruptable
});
   }

    // AreCoreAnimationsEnabled
   AreCoreAnimationsEnabled() {
  return this.sageAPI.invoke("AreCoreAnimationsEnabled", {
});
   }

    // AreCoreAnimationsSupported
   AreCoreAnimationsSupported() {
  return this.sageAPI.invoke("AreCoreAnimationsSupported", {
});
   }

    // CalculateMD5Sum
   CalculateMD5Sum(FilePath) {
  return this.sageAPI.invoke("CalculateMD5Sum", {
'FilePath':FilePath
});
   }

    // CalculateSHA1Hash
   CalculateSHA1Hash(EncodeString) {
  return this.sageAPI.invoke("CalculateSHA1Hash", {
'EncodeString':EncodeString
});
   }

    // ClearMenuCache
   ClearMenuCache() {
  return this.sageAPI.invoke("ClearMenuCache", {
});
   }

    // ConvertNteChars
   ConvertNteChars(NteString) {
  return this.sageAPI.invoke("ConvertNteChars", {
'NteString':NteString
});
   }

    // CreateArray
   CreateArray(Value) {
  return this.sageAPI.invoke("CreateArray", {
'Value':Value
});
   }

    // CreateFilePath
   CreateFilePath(Directory, File) {
  return this.sageAPI.invoke("CreateFilePath", {
'Directory':Directory
,
'File':File
});
   }

    // CreateNewDirectory
   CreateNewDirectory(DirectoryPath) {
  return this.sageAPI.invoke("CreateNewDirectory", {
'DirectoryPath':DirectoryPath
});
   }

    // CreateNewLocalDirectory
   CreateNewLocalDirectory(DirectoryPath) {
  return this.sageAPI.invoke("CreateNewLocalDirectory", {
'DirectoryPath':DirectoryPath
});
   }

    // CreateTimeSpan
   CreateTimeSpan(StartTime, EndTime) {
  return this.sageAPI.invoke("CreateTimeSpan", {
'StartTime':StartTime
,
'EndTime':EndTime
});
   }

    // DateFormat
   DateFormat(Format, Date) {
  return this.sageAPI.invoke("DateFormat", {
'Format':Format
,
'Date':Date
});
   }

    // DeleteFilePath
   DeleteFilePath(FilePath) {
  return this.sageAPI.invoke("DeleteFilePath", {
'FilePath':FilePath
});
   }

    // DeleteLocalFilePath
   DeleteLocalFilePath(FilePath) {
  return this.sageAPI.invoke("DeleteLocalFilePath", {
'FilePath':FilePath
});
   }

    // DidImageLoadFail
   DidImageLoadFail(Image) {
  return this.sageAPI.invoke("DidImageLoadFail", {
'Image':Image
});
   }

    // DirectoryListing
   DirectoryListing(DirectoryPath) {
  return this.sageAPI.invoke("DirectoryListing", {
'DirectoryPath':DirectoryPath
});
   }

    // DirectoryListing
   DirectoryListing(DirectoryPath, MediaMask) {
  return this.sageAPI.invoke("DirectoryListing", {
'DirectoryPath':DirectoryPath
,
'MediaMask':MediaMask
});
   }

    // DumpServerThreadStates
   DumpServerThreadStates() {
  return this.sageAPI.invoke("DumpServerThreadStates", {
});
   }

    // DurFormat
   DurFormat(Format, Duration) {
  return this.sageAPI.invoke("DurFormat", {
'Format':Format
,
'Duration':Duration
});
   }

    // ExecuteProcess
   ExecuteProcess(CommandString, Arguments, WorkingDirectory, ConsoleApp) {
  return this.sageAPI.invoke("ExecuteProcess", {
'CommandString':CommandString
,
'Arguments':Arguments
,
'WorkingDirectory':WorkingDirectory
,
'ConsoleApp':ConsoleApp
});
   }

    // ExecuteProcessReturnOutput
   ExecuteProcessReturnOutput(CommandString, Arguments, WorkingDirectory, ReturnStdout, ReturnStderr) {
  return this.sageAPI.invoke("ExecuteProcessReturnOutput", {
'CommandString':CommandString
,
'Arguments':Arguments
,
'WorkingDirectory':WorkingDirectory
,
'ReturnStdout':ReturnStdout
,
'ReturnStderr':ReturnStderr
});
   }

    // FindComparativeElement
   FindComparativeElement(Data, Criteria, Method) {
  return this.sageAPI.invoke("FindComparativeElement", {
'Data':Data
,
'Criteria':Criteria
,
'Method':Method
});
   }

    // FindElementIndex
   FindElementIndex(Data, Element) {
  return this.sageAPI.invoke("FindElementIndex", {
'Data':Data
,
'Element':Element
});
   }

    // GetAbsoluteFilePath
   GetAbsoluteFilePath(FilePath) {
  return this.sageAPI.invoke("GetAbsoluteFilePath", {
'FilePath':FilePath
});
   }

    // GetDNSAddress
   GetDNSAddress() {
  return this.sageAPI.invoke("GetDNSAddress", {
});
   }

    // GetDiskFreeSpace
   GetDiskFreeSpace(DrivePath) {
  return this.sageAPI.invoke("GetDiskFreeSpace", {
'DrivePath':DrivePath
});
   }

    // GetDiskTotalSpace
   GetDiskTotalSpace(DrivePath) {
  return this.sageAPI.invoke("GetDiskTotalSpace", {
'DrivePath':DrivePath
});
   }

    // GetElement
   GetElement(Data, Index) {
  return this.sageAPI.invoke("GetElement", {
'Data':Data
,
'Index':Index
});
   }

    // GetFileAsString
   GetFileAsString(FilePath) {
  return this.sageAPI.invoke("GetFileAsString", {
'FilePath':FilePath
});
   }

    // GetFileExtensionFromPath
   GetFileExtensionFromPath(FilePath) {
  return this.sageAPI.invoke("GetFileExtensionFromPath", {
'FilePath':FilePath
});
   }

    // GetFileNameFromPath
   GetFileNameFromPath(FilePath) {
  return this.sageAPI.invoke("GetFileNameFromPath", {
'FilePath':FilePath
});
   }

    // GetFilePathSize
   GetFilePathSize(FilePath) {
  return this.sageAPI.invoke("GetFilePathSize", {
'FilePath':FilePath
});
   }

    // GetFileSystemRoots
   GetFileSystemRoots() {
  return this.sageAPI.invoke("GetFileSystemRoots", {
});
   }

    // GetFileSystemType
   GetFileSystemType(DrivePath) {
  return this.sageAPI.invoke("GetFileSystemType", {
'DrivePath':DrivePath
});
   }

    // GetGatewayAddress
   GetGatewayAddress() {
  return this.sageAPI.invoke("GetGatewayAddress", {
});
   }

    // GetImageAsBufferedImage
   GetImageAsBufferedImage(Resource) {
  return this.sageAPI.invoke("GetImageAsBufferedImage", {
'Resource':Resource
});
   }

    // GetLocalFileAsString
   GetLocalFileAsString(FilePath) {
  return this.sageAPI.invoke("GetLocalFileAsString", {
'FilePath':FilePath
});
   }

    // GetLocalFilePathSize
   GetLocalFilePathSize(FilePath) {
  return this.sageAPI.invoke("GetLocalFilePathSize", {
'FilePath':FilePath
});
   }

    // GetLocalFileSystemRoots
   GetLocalFileSystemRoots() {
  return this.sageAPI.invoke("GetLocalFileSystemRoots", {
});
   }

    // GetLocalIPAddress
   GetLocalIPAddress() {
  return this.sageAPI.invoke("GetLocalIPAddress", {
});
   }

    // GetLocalPathLastModifiedTime
   GetLocalPathLastModifiedTime(FilePath) {
  return this.sageAPI.invoke("GetLocalPathLastModifiedTime", {
'FilePath':FilePath
});
   }

    // GetMetaImageAspectRatio
   GetMetaImageAspectRatio(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageAspectRatio", {
'MetaImage':MetaImage
});
   }

    // GetMetaImageBytes
   GetMetaImageBytes(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageBytes", {
'MetaImage':MetaImage
});
   }

    // GetMetaImageSourceFile
   GetMetaImageSourceFile(MetaImage) {
  return this.sageAPI.invoke("GetMetaImageSourceFile", {
'MetaImage':MetaImage
});
   }

    // GetPathLastModifiedTime
   GetPathLastModifiedTime(FilePath) {
  return this.sageAPI.invoke("GetPathLastModifiedTime", {
'FilePath':FilePath
});
   }

    // GetPathParentDirectory
   GetPathParentDirectory(FilePath) {
  return this.sageAPI.invoke("GetPathParentDirectory", {
'FilePath':FilePath
});
   }

    // GetScaledImageAsBufferedImage
   GetScaledImageAsBufferedImage(Resource, Width, Height) {
  return this.sageAPI.invoke("GetScaledImageAsBufferedImage", {
'Resource':Resource
,
'Width':Width
,
'Height':Height
});
   }

    // GetSubgroup
   GetSubgroup(Grouping, Key) {
  return this.sageAPI.invoke("GetSubgroup", {
'Grouping':Grouping
,
'Key':Key
});
   }

    // GetSubnetMask
   GetSubnetMask() {
  return this.sageAPI.invoke("GetSubnetMask", {
});
   }

    // GetTimeSinceLastInput
   GetTimeSinceLastInput() {
  return this.sageAPI.invoke("GetTimeSinceLastInput", {
});
   }

    // GetUIRefreshLock
   GetUIRefreshLock() {
  return this.sageAPI.invoke("GetUIRefreshLock", {
});
   }

    // GetWorkingDirectory
   GetWorkingDirectory() {
  return this.sageAPI.invoke("GetWorkingDirectory", {
});
   }

    // GuessMajorFileType
   GuessMajorFileType(Filename) {
  return this.sageAPI.invoke("GuessMajorFileType", {
'Filename':Filename
});
   }

    // HasLocalFilesystem
   HasLocalFilesystem() {
  return this.sageAPI.invoke("HasLocalFilesystem", {
});
   }

    // If
   If(Condition, True, False) {
  return this.sageAPI.invoke("If", {
'Condition':Condition
,
'True':True
,
'False':False
});
   }

    // IsDirectoryPath
   IsDirectoryPath(FilePath) {
  return this.sageAPI.invoke("IsDirectoryPath", {
'FilePath':FilePath
});
   }

    // IsEmpty
   IsEmpty(Data) {
  return this.sageAPI.invoke("IsEmpty", {
'Data':Data
});
   }

    // IsFilePath
   IsFilePath(FilePath) {
  return this.sageAPI.invoke("IsFilePath", {
'FilePath':FilePath
});
   }

    // IsFilePathHidden
   IsFilePathHidden(FilePath) {
  return this.sageAPI.invoke("IsFilePathHidden", {
'FilePath':FilePath
});
   }

    // IsImageLoaded
   IsImageLoaded(Image) {
  return this.sageAPI.invoke("IsImageLoaded", {
'Image':Image
});
   }

    // IsImportableFileType
   IsImportableFileType(Filename) {
  return this.sageAPI.invoke("IsImportableFileType", {
'Filename':Filename
});
   }

    // IsLocalDirectoryPath
   IsLocalDirectoryPath(FilePath) {
  return this.sageAPI.invoke("IsLocalDirectoryPath", {
'FilePath':FilePath
});
   }

    // IsLocalFilePath
   IsLocalFilePath(FilePath) {
  return this.sageAPI.invoke("IsLocalFilePath", {
'FilePath':FilePath
});
   }

    // IsLocalFilePathHidden
   IsLocalFilePathHidden(FilePath) {
  return this.sageAPI.invoke("IsLocalFilePathHidden", {
'FilePath':FilePath
});
   }

    // IsLocalRestartNeeded
   IsLocalRestartNeeded() {
  return this.sageAPI.invoke("IsLocalRestartNeeded", {
});
   }

    // IsMetaImage
   IsMetaImage(MetaImage) {
  return this.sageAPI.invoke("IsMetaImage", {
'MetaImage':MetaImage
});
   }

    // IsServerRestartNeeded
   IsServerRestartNeeded() {
  return this.sageAPI.invoke("IsServerRestartNeeded", {
});
   }

    // Keystroke
   Keystroke(Character, System) {
  return this.sageAPI.invoke("Keystroke", {
'Character':Character
,
'System':System
});
   }

    // LoadImage
   LoadImage(Resource) {
  return this.sageAPI.invoke("LoadImage", {
'Resource':Resource
});
   }

    // LoadImageFile
   LoadImageFile(FilePath) {
  return this.sageAPI.invoke("LoadImageFile", {
'FilePath':FilePath
});
   }

    // LocalDirectoryListing
   LocalDirectoryListing(DirectoryPath) {
  return this.sageAPI.invoke("LocalDirectoryListing", {
'DirectoryPath':DirectoryPath
});
   }

    // LocalizeString
   LocalizeString(EnglishText) {
  return this.sageAPI.invoke("LocalizeString", {
'EnglishText':EnglishText
});
   }

    // LookupIPForLocatorID
   LookupIPForLocatorID(LocatorID) {
  return this.sageAPI.invoke("LookupIPForLocatorID", {
'LocatorID':LocatorID
});
   }

    // Max
   Max(Value1, Value2) {
  return this.sageAPI.invoke("Max", {
'Value1':Value1
,
'Value2':Value2
});
   }

    // Min
   Min(Value1, Value2) {
  return this.sageAPI.invoke("Min", {
'Value1':Value1
,
'Value2':Value2
});
   }

    // NumberFormat
   NumberFormat(Format, Number) {
  return this.sageAPI.invoke("NumberFormat", {
'Format':Format
,
'Number':Number
});
   }

    // PrintCurrentTime
   PrintCurrentTime() {
  return this.sageAPI.invoke("PrintCurrentTime", {
});
   }

    // PrintDate
   PrintDate(Date) {
  return this.sageAPI.invoke("PrintDate", {
'Date':Date
});
   }

    // PrintDateFull
   PrintDateFull(Date) {
  return this.sageAPI.invoke("PrintDateFull", {
'Date':Date
});
   }

    // PrintDateLong
   PrintDateLong(Date) {
  return this.sageAPI.invoke("PrintDateLong", {
'Date':Date
});
   }

    // PrintDateShort
   PrintDateShort(Date) {
  return this.sageAPI.invoke("PrintDateShort", {
'Date':Date
});
   }

    // PrintDuration
   PrintDuration(Duration) {
  return this.sageAPI.invoke("PrintDuration", {
'Duration':Duration
});
   }

    // PrintDurationShort
   PrintDurationShort(Duration) {
  return this.sageAPI.invoke("PrintDurationShort", {
'Duration':Duration
});
   }

    // PrintDurationWithSeconds
   PrintDurationWithSeconds(Duration) {
  return this.sageAPI.invoke("PrintDurationWithSeconds", {
'Duration':Duration
});
   }

    // PrintTime
   PrintTime(Time) {
  return this.sageAPI.invoke("PrintTime", {
'Time':Time
});
   }

    // PrintTimeFull
   PrintTimeFull(Time) {
  return this.sageAPI.invoke("PrintTimeFull", {
'Time':Time
});
   }

    // PrintTimeLong
   PrintTimeLong(Time) {
  return this.sageAPI.invoke("PrintTimeLong", {
'Time':Time
});
   }

    // PrintTimeShort
   PrintTimeShort(Time) {
  return this.sageAPI.invoke("PrintTimeShort", {
'Time':Time
});
   }

    // QueryServerMacAddress
   QueryServerMacAddress(Hostname) {
  return this.sageAPI.invoke("QueryServerMacAddress", {
'Hostname':Hostname
});
   }

    // ReformatDeviceAtPathAsEXT3
   ReformatDeviceAtPathAsEXT3(DrivePath) {
  return this.sageAPI.invoke("ReformatDeviceAtPathAsEXT3", {
'DrivePath':DrivePath
});
   }

    // ReleaseUIRefreshLock
   ReleaseUIRefreshLock() {
  return this.sageAPI.invoke("ReleaseUIRefreshLock", {
});
   }

    // ReloadNameserverCache
   ReloadNameserverCache() {
  return this.sageAPI.invoke("ReloadNameserverCache", {
});
   }

    // RemoveElement
   RemoveElement(Data, Value) {
  return this.sageAPI.invoke("RemoveElement", {
'Data':Data
,
'Value':Value
});
   }

    // RemoveElementAtIndex
   RemoveElementAtIndex(Data, Index) {
  return this.sageAPI.invoke("RemoveElementAtIndex", {
'Data':Data
,
'Index':Index
});
   }

    // RenameFilePath
   RenameFilePath(OriginalFilePath, NewFilePath) {
  return this.sageAPI.invoke("RenameFilePath", {
'OriginalFilePath':OriginalFilePath
,
'NewFilePath':NewFilePath
});
   }

    // Restart
   Restart() {
  return this.sageAPI.invoke("Restart", {
});
   }

    // Round
   Round(Number) {
  return this.sageAPI.invoke("Round", {
'Number':Number
});
   }

    // SaveImageToFile
   SaveImageToFile(MetaImage, File, Width, Height) {
  return this.sageAPI.invoke("SaveImageToFile", {
'MetaImage':MetaImage
,
'File':File
,
'Width':Width
,
'Height':Height
});
   }

    // ScaleBufferedImage
   ScaleBufferedImage(JavaBufferedImage, Width, Height, Alpha) {
  return this.sageAPI.invoke("ScaleBufferedImage", {
'JavaBufferedImage':JavaBufferedImage
,
'Width':Width
,
'Height':Height
,
'Alpha':Alpha
});
   }

    // ScanWirelessAPs
   ScanWirelessAPs() {
  return this.sageAPI.invoke("ScanWirelessAPs", {
});
   }

    // SendNetworkCommand
   SendNetworkCommand(Hostname, Port, Command) {
  return this.sageAPI.invoke("SendNetworkCommand", {
'Hostname':Hostname
,
'Port':Port
,
'Command':Command
});
   }

    // ServerRestart
   ServerRestart() {
  return this.sageAPI.invoke("ServerRestart", {
});
   }

    // SetCoreAnimationsEnabled
   SetCoreAnimationsEnabled(Enabled) {
  return this.sageAPI.invoke("SetCoreAnimationsEnabled", {
'Enabled':Enabled
});
   }

    // SetElement
   SetElement(Data, Index, Value) {
  return this.sageAPI.invoke("SetElement", {
'Data':Data
,
'Index':Index
,
'Value':Value
});
   }

    // SetScrollPosition
   SetScrollPosition(RelativeX, RelativeY) {
  return this.sageAPI.invoke("SetScrollPosition", {
'RelativeX':RelativeX
,
'RelativeY':RelativeY
});
   }

    // Size
   Size(Data) {
  return this.sageAPI.invoke("Size", {
'Data':Data
});
   }

    // StringEndsWith
   StringEndsWith(FullString, MatchString) {
  return this.sageAPI.invoke("StringEndsWith", {
'FullString':FullString
,
'MatchString':MatchString
});
   }

    // StringIndexOf
   StringIndexOf(FullString, MatchString) {
  return this.sageAPI.invoke("StringIndexOf", {
'FullString':FullString
,
'MatchString':MatchString
});
   }

    // StringIndexOfNTE
   StringIndexOfNTE(FullString, MatchStringNTE) {
  return this.sageAPI.invoke("StringIndexOfNTE", {
'FullString':FullString
,
'MatchStringNTE':MatchStringNTE
});
   }

    // StringLastIndexOf
   StringLastIndexOf(FullString, MatchString) {
  return this.sageAPI.invoke("StringLastIndexOf", {
'FullString':FullString
,
'MatchString':MatchString
});
   }

    // StringStartsWith
   StringStartsWith(FullString, MatchString) {
  return this.sageAPI.invoke("StringStartsWith", {
'FullString':FullString
,
'MatchString':MatchString
});
   }

    // StringStartsWithNTE
   StringStartsWithNTE(FullString, MatchStringNTE) {
  return this.sageAPI.invoke("StringStartsWithNTE", {
'FullString':FullString
,
'MatchStringNTE':MatchStringNTE
});
   }

    // Substring
   Substring(String, StartIndex, EndIndex) {
  return this.sageAPI.invoke("Substring", {
'String':String
,
'StartIndex':StartIndex
,
'EndIndex':EndIndex
});
   }

    // SubstringBegin
   SubstringBegin(String, EndOffset) {
  return this.sageAPI.invoke("SubstringBegin", {
'String':String
,
'EndOffset':EndOffset
});
   }

    // TestPlaceshifterConnectivity
   TestPlaceshifterConnectivity(LocatorID) {
  return this.sageAPI.invoke("TestPlaceshifterConnectivity", {
'LocatorID':LocatorID
});
   }

    // Time
   Time() {
  return this.sageAPI.invoke("Time", {
});
   }

    // UnloadImage
   UnloadImage(ResPath) {
  return this.sageAPI.invoke("UnloadImage", {
'ResPath':ResPath
});
   }

    // Wait
   Wait(Time) {
  return this.sageAPI.invoke("Wait", {
'Time':Time
});
   }

    // WriteStringToFile
   WriteStringToFile(FilePath, Data) {
  return this.sageAPI.invoke("WriteStringToFile", {
'FilePath':FilePath
,
'Data':Data
});
   }

    // WriteStringToLocalFile
   WriteStringToLocalFile(FilePath, Data) {
  return this.sageAPI.invoke("WriteStringToLocalFile", {
'FilePath':FilePath
,
'Data':Data
});
   }
}

    export default Utility;
