class CaptureDeviceInputAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AutoScanChannelInfo
   AutoScanChannelInfo(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoScanChannelInfo", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'ChannelNumber':ChannelNumber
});
   }

    // AutoTuneChannelTest
   AutoTuneChannelTest(CaptureDeviceInput, ChannelNumber) {
  return this.sageAPI.invoke("AutoTuneChannelTest", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'ChannelNumber':ChannelNumber
});
   }

    // ConfigureInputForEPGDataLineup
   ConfigureInputForEPGDataLineup(CaptureDeviceInput, Lineup) {
  return this.sageAPI.invoke("ConfigureInputForEPGDataLineup", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Lineup':Lineup
});
   }

    // ConfigureInputWithoutEPGData
   ConfigureInputWithoutEPGData(CaptureDeviceInput) {
  return this.sageAPI.invoke("ConfigureInputWithoutEPGData", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureBrightness
   GetCaptureBrightness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureBrightness", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureContrast
   GetCaptureContrast(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureContrast", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureDeviceForInput
   GetCaptureDeviceForInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceForInput", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureDeviceInputBeingViewed
   GetCaptureDeviceInputBeingViewed() {
  return this.sageAPI.invoke("GetCaptureDeviceInputBeingViewed", {
});
   }

    // GetCaptureDeviceInputBroadcastStandard
   GetCaptureDeviceInputBroadcastStandard(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceInputBroadcastStandard", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureDeviceInputName
   GetCaptureDeviceInputName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureDeviceInputName", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureDeviceInputRecordingMediaFile
   GetCaptureDeviceInputRecordingMediaFile(MediaFile) {
  return this.sageAPI.invoke("GetCaptureDeviceInputRecordingMediaFile", {
'MediaFile':MediaFile
});
   }

    // GetCaptureHue
   GetCaptureHue(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureHue", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureSaturation
   GetCaptureSaturation(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSaturation", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetCaptureSharpness
   GetCaptureSharpness(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetCaptureSharpness", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetConstantRFChannelInput
   GetConstantRFChannelInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetConstantRFChannelInput", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetInfraredTunerRemoteName
   GetInfraredTunerRemoteName(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTunerRemoteName", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetInfraredTuningPlugin
   GetInfraredTuningPlugin(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPlugin", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetInfraredTuningPluginPortNumber
   GetInfraredTuningPluginPortNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInfraredTuningPluginPortNumber", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetInputMaximumChannelNumber
   GetInputMaximumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMaximumChannelNumber", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetInputMinimumChannelNumber
   GetInputMinimumChannelNumber(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetInputMinimumChannelNumber", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetLineupForCaptureDeviceInput
   GetLineupForCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetLineupForCaptureDeviceInput", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetPhysicalInputType
   GetPhysicalInputType(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetPhysicalInputType", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // GetSignalStrength
   GetSignalStrength(CaptureDeviceInput) {
  return this.sageAPI.invoke("GetSignalStrength", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // IsCaptureDeviceInputAudioVideo
   IsCaptureDeviceInputAudioVideo(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsCaptureDeviceInputAudioVideo", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // IsExternallyTunedRFInput
   IsExternallyTunedRFInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsExternallyTunedRFInput", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // IsRFSignalCableTV
   IsRFSignalCableTV(CaptureDeviceInput) {
  return this.sageAPI.invoke("IsRFSignalCableTV", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // ReleaseCaptureDeviceInput
   ReleaseCaptureDeviceInput(CaptureDeviceInput) {
  return this.sageAPI.invoke("ReleaseCaptureDeviceInput", {
'CaptureDeviceInput':CaptureDeviceInput.ID
});
   }

    // SetCaptureBrightness
   SetCaptureBrightness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureBrightness", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }

    // SetCaptureContrast
   SetCaptureContrast(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureContrast", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }

    // SetCaptureHue
   SetCaptureHue(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureHue", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }

    // SetCaptureSaturation
   SetCaptureSaturation(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSaturation", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }

    // SetCaptureSharpness
   SetCaptureSharpness(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetCaptureSharpness", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }

    // SetInfraredTunerRemoteName
   SetInfraredTunerRemoteName(CaptureDeviceInput, ExternalDeviceName) {
  return this.sageAPI.invoke("SetInfraredTunerRemoteName", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'ExternalDeviceName':ExternalDeviceName
});
   }

    // SetInfraredTuningPluginAndPort
   SetInfraredTuningPluginAndPort(CaptureDeviceInput, PluginName, PluginPortNumber) {
  return this.sageAPI.invoke("SetInfraredTuningPluginAndPort", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'PluginName':PluginName
,
'PluginPortNumber':PluginPortNumber
});
   }

    // SetRFSignalIsCableTV
   SetRFSignalIsCableTV(CaptureDeviceInput, Value) {
  return this.sageAPI.invoke("SetRFSignalIsCableTV", {
'CaptureDeviceInput':CaptureDeviceInput.ID
,
'Value':Value
});
   }
}

    export default CaptureDeviceInputAPI;
