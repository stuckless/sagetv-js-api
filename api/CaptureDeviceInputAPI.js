class CaptureDeviceInputAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AutoScanChannelInfo
   AutoScanChannelInfo(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoScanChannelInfo", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,ChannelNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AutoTuneChannelTest
   AutoTuneChannelTest(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoTuneChannelTest", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,ChannelNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConfigureInputForEPGDataLineup
   ConfigureInputForEPGDataLineup(CaptureDeviceInput, Lineup) {
  return this.sageAPI.invoke("ConfigureInputForEPGDataLineup", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConfigureInputWithoutEPGData
   ConfigureInputWithoutEPGData(CaptureDeviceInput) {
  return this.sageAPI.invoke("ConfigureInputWithoutEPGData", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureBrightness
   GetCaptureBrightness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureBrightness", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureContrast
   GetCaptureContrast(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureContrast", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceForInput
   GetCaptureDeviceForInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceForInput", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputBeingViewed
   GetCaptureDeviceInputBeingViewed() {
  return this.sageAPI.invoke("GetCaptureDeviceInputBeingViewed", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputBroadcastStandard
   GetCaptureDeviceInputBroadcastStandard(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceInputBroadcastStandard", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputName
   GetCaptureDeviceInputName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceInputName", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputRecordingMediaFile
   GetCaptureDeviceInputRecordingMediaFile(MediaFile) {
  return this.sageAPI.invoke("GetCaptureDeviceInputRecordingMediaFile", [MediaFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureHue
   GetCaptureHue(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureHue", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureSaturation
   GetCaptureSaturation(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSaturation", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureSharpness
   GetCaptureSharpness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSharpness", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetConstantRFChannelInput
   GetConstantRFChannelInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetConstantRFChannelInput", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTunerRemoteName
   GetInfraredTunerRemoteName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTunerRemoteName", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTuningPlugin
   GetInfraredTuningPlugin(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPlugin", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTuningPluginPortNumber
   GetInfraredTuningPluginPortNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPluginPortNumber", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInputMaximumChannelNumber
   GetInputMaximumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMaximumChannelNumber", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInputMinimumChannelNumber
   GetInputMinimumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMinimumChannelNumber", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLineupForCaptureDeviceInput
   GetLineupForCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetLineupForCaptureDeviceInput", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPhysicalInputType
   GetPhysicalInputType(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetPhysicalInputType", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSignalStrength
   GetSignalStrength(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetSignalStrength", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceInputAudioVideo
   IsCaptureDeviceInputAudioVideo(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsCaptureDeviceInputAudioVideo", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsExternallyTunedRFInput
   IsExternallyTunedRFInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsExternallyTunedRFInput", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsRFSignalCableTV
   IsRFSignalCableTV(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsRFSignalCableTV", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReleaseCaptureDeviceInput
   ReleaseCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("ReleaseCaptureDeviceInput", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureBrightness
   SetCaptureBrightness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureBrightness", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureContrast
   SetCaptureContrast(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureContrast", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureHue
   SetCaptureHue(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureHue", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureSaturation
   SetCaptureSaturation(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSaturation", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureSharpness
   SetCaptureSharpness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSharpness", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInfraredTunerRemoteName
   SetInfraredTunerRemoteName(CaptureDeviceInput, ExternalDeviceName) {
  return this.sageAPI.invoke("SetInfraredTunerRemoteName", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,ExternalDeviceName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInfraredTuningPluginAndPort
   SetInfraredTuningPluginAndPort(CaptureDeviceInput, PluginName, PluginPortNumber) {
  return this.sageAPI.invoke("SetInfraredTuningPluginAndPort", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,PluginName,PluginPortNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRFSignalIsCableTV
   SetRFSignalIsCableTV(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetRFSignalIsCableTV", ['capturedeviceinput:'+CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for CaptureDeviceInput
    export default CaptureDeviceInputAPI;
