class CaptureDeviceInputAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AutoScanChannelInfo
   AutoScanChannelInfo(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoScanChannelInfo", [CaptureDeviceInput.CaptureDeviceInputID,ChannelNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AutoTuneChannelTest
   AutoTuneChannelTest(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoTuneChannelTest", [CaptureDeviceInput.CaptureDeviceInputID,ChannelNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConfigureInputForEPGDataLineup
   ConfigureInputForEPGDataLineup(CaptureDeviceInput, Lineup) {
  return this.sageAPI.invoke("ConfigureInputForEPGDataLineup", [CaptureDeviceInput.CaptureDeviceInputID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ConfigureInputWithoutEPGData
   ConfigureInputWithoutEPGData(CaptureDeviceInput) {
  return this.sageAPI.invoke("ConfigureInputWithoutEPGData", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureBrightness
   GetCaptureBrightness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureBrightness", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureContrast
   GetCaptureContrast(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureContrast", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceForInput
   GetCaptureDeviceForInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceForInput", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
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
  return this.sageAPI.invoke("GetCaptureDeviceInputBroadcastStandard", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputName
   GetCaptureDeviceInputName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceInputName", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
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
  return this.sageAPI.invoke("GetCaptureHue", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureSaturation
   GetCaptureSaturation(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSaturation", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureSharpness
   GetCaptureSharpness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSharpness", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetConstantRFChannelInput
   GetConstantRFChannelInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetConstantRFChannelInput", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTunerRemoteName
   GetInfraredTunerRemoteName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTunerRemoteName", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTuningPlugin
   GetInfraredTuningPlugin(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPlugin", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInfraredTuningPluginPortNumber
   GetInfraredTuningPluginPortNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPluginPortNumber", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInputMaximumChannelNumber
   GetInputMaximumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMaximumChannelNumber", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInputMinimumChannelNumber
   GetInputMinimumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMinimumChannelNumber", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLineupForCaptureDeviceInput
   GetLineupForCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetLineupForCaptureDeviceInput", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPhysicalInputType
   GetPhysicalInputType(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetPhysicalInputType", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSignalStrength
   GetSignalStrength(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetSignalStrength", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceInputAudioVideo
   IsCaptureDeviceInputAudioVideo(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsCaptureDeviceInputAudioVideo", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsExternallyTunedRFInput
   IsExternallyTunedRFInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsExternallyTunedRFInput", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsRFSignalCableTV
   IsRFSignalCableTV(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsRFSignalCableTV", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ReleaseCaptureDeviceInput
   ReleaseCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("ReleaseCaptureDeviceInput", [CaptureDeviceInput.CaptureDeviceInputID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureBrightness
   SetCaptureBrightness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureBrightness", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureContrast
   SetCaptureContrast(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureContrast", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureHue
   SetCaptureHue(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureHue", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureSaturation
   SetCaptureSaturation(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSaturation", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureSharpness
   SetCaptureSharpness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSharpness", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInfraredTunerRemoteName
   SetInfraredTunerRemoteName(CaptureDeviceInput, ExternalDeviceName) {
  return this.sageAPI.invoke("SetInfraredTunerRemoteName", [CaptureDeviceInput.CaptureDeviceInputID,ExternalDeviceName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetInfraredTuningPluginAndPort
   SetInfraredTuningPluginAndPort(CaptureDeviceInput, PluginName, PluginPortNumber) {
  return this.sageAPI.invoke("SetInfraredTuningPluginAndPort", [CaptureDeviceInput.CaptureDeviceInputID,PluginName,PluginPortNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetRFSignalIsCableTV
   SetRFSignalIsCableTV(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetRFSignalIsCableTV", [CaptureDeviceInput.CaptureDeviceInputID,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default CaptureDeviceInputAPI;
