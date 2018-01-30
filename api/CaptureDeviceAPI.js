class CaptureDeviceAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddInputForRFChannel
   AddInputForRFChannel(CaptureDevice, RFChannel) {
  return this.sageAPI.invoke("AddInputForRFChannel", {
'CaptureDevice':CaptureDevice.ID
,
'RFChannel':RFChannel
});
   }

    // GetActiveCaptureDevices
   GetActiveCaptureDevices() {
  return this.sageAPI.invoke("GetActiveCaptureDevices", {
});
   }

    // GetAudioCaptureSources
   GetAudioCaptureSources() {
  return this.sageAPI.invoke("GetAudioCaptureSources", {
});
   }

    // GetCaptureDeviceAudioSource
   GetCaptureDeviceAudioSource(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceAudioSource", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceBroadcastStandard
   GetCaptureDeviceBroadcastStandard(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceBroadcastStandard", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceCurrentRecordFile
   GetCaptureDeviceCurrentRecordFile(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceCurrentRecordFile", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceDefaultQuality
   GetCaptureDeviceDefaultQuality(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceDefaultQuality", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceInputs
   GetCaptureDeviceInputs(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceInputs", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceMerit
   GetCaptureDeviceMerit(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceMerit", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDeviceQualities
   GetCaptureDeviceQualities(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceQualities", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // GetCaptureDevices
   GetCaptureDevices() {
  return this.sageAPI.invoke("GetCaptureDevices", {
});
   }

    // GetConfiguredCaptureDeviceInputs
   GetConfiguredCaptureDeviceInputs() {
  return this.sageAPI.invoke("GetConfiguredCaptureDeviceInputs", {
});
   }

    // GetLastUsedCaptureDevice
   GetLastUsedCaptureDevice() {
  return this.sageAPI.invoke("GetLastUsedCaptureDevice", {
});
   }

    // GetLastUsedCaptureDeviceInput
   GetLastUsedCaptureDeviceInput(CaptureDevice) {
  return this.sageAPI.invoke("GetLastUsedCaptureDeviceInput", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // IsCaptureDeviceANetworkEncoder
   IsCaptureDeviceANetworkEncoder(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceANetworkEncoder", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // IsCaptureDeviceFunctioning
   IsCaptureDeviceFunctioning(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceFunctioning", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // IsCaptureDeviceHardwareEncoder
   IsCaptureDeviceHardwareEncoder(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceHardwareEncoder", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // IsCaptureDeviceInUseByALiveClient
   IsCaptureDeviceInUseByALiveClient(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceInUseByALiveClient", {
'CaptureDevice':CaptureDevice.ID
});
   }

    // SetCaptureDeviceAudioSource
   SetCaptureDeviceAudioSource(CaptureDevice, AudioSource) {
  return this.sageAPI.invoke("SetCaptureDeviceAudioSource", {
'CaptureDevice':CaptureDevice.ID
,
'AudioSource':AudioSource
});
   }

    // SetCaptureDeviceDTVStandard
   SetCaptureDeviceDTVStandard(CaptureDevice, DTVStandard) {
  return this.sageAPI.invoke("SetCaptureDeviceDTVStandard", {
'CaptureDevice':CaptureDevice.ID
,
'DTVStandard':DTVStandard
});
   }

    // SetCaptureDeviceDefaultQuality
   SetCaptureDeviceDefaultQuality(CaptureDevice, Quality) {
  return this.sageAPI.invoke("SetCaptureDeviceDefaultQuality", {
'CaptureDevice':CaptureDevice.ID
,
'Quality':Quality
});
   }

    // SetCaptureDeviceMerit
   SetCaptureDeviceMerit(CaptureDevice, Merit) {
  return this.sageAPI.invoke("SetCaptureDeviceMerit", {
'CaptureDevice':CaptureDevice.ID
,
'Merit':Merit
});
   }
}

    export default CaptureDeviceAPI;
