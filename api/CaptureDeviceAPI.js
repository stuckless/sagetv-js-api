class CaptureDeviceAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddInputForRFChannel
   AddInputForRFChannel(CaptureDevice, RFChannel) {
  return this.sageAPI.invoke("AddInputForRFChannel", [CaptureDevice.CaptureDeviceID,RFChannel]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetActiveCaptureDevices
   GetActiveCaptureDevices() {
  return this.sageAPI.invoke("GetActiveCaptureDevices", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAudioCaptureSources
   GetAudioCaptureSources() {
  return this.sageAPI.invoke("GetAudioCaptureSources", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceAudioSource
   GetCaptureDeviceAudioSource(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceAudioSource", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceBroadcastStandard
   GetCaptureDeviceBroadcastStandard(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceBroadcastStandard", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceCurrentRecordFile
   GetCaptureDeviceCurrentRecordFile(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceCurrentRecordFile", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceDefaultQuality
   GetCaptureDeviceDefaultQuality(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceDefaultQuality", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceInputs
   GetCaptureDeviceInputs(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceInputs", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceMerit
   GetCaptureDeviceMerit(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceMerit", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDeviceQualities
   GetCaptureDeviceQualities(CaptureDevice) {
  return this.sageAPI.invoke("GetCaptureDeviceQualities", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCaptureDevices
   GetCaptureDevices() {
  return this.sageAPI.invoke("GetCaptureDevices", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetConfiguredCaptureDeviceInputs
   GetConfiguredCaptureDeviceInputs() {
  return this.sageAPI.invoke("GetConfiguredCaptureDeviceInputs", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLastUsedCaptureDevice
   GetLastUsedCaptureDevice() {
  return this.sageAPI.invoke("GetLastUsedCaptureDevice", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetLastUsedCaptureDeviceInput
   GetLastUsedCaptureDeviceInput(CaptureDevice) {
  return this.sageAPI.invoke("GetLastUsedCaptureDeviceInput", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceANetworkEncoder
   IsCaptureDeviceANetworkEncoder(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceANetworkEncoder", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceFunctioning
   IsCaptureDeviceFunctioning(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceFunctioning", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceHardwareEncoder
   IsCaptureDeviceHardwareEncoder(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceHardwareEncoder", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsCaptureDeviceInUseByALiveClient
   IsCaptureDeviceInUseByALiveClient(CaptureDevice) {
  return this.sageAPI.invoke("IsCaptureDeviceInUseByALiveClient", [CaptureDevice.CaptureDeviceID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureDeviceAudioSource
   SetCaptureDeviceAudioSource(CaptureDevice, AudioSource) {
  return this.sageAPI.invoke("SetCaptureDeviceAudioSource", [CaptureDevice.CaptureDeviceID,AudioSource]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureDeviceDTVStandard
   SetCaptureDeviceDTVStandard(CaptureDevice, DTVStandard) {
  return this.sageAPI.invoke("SetCaptureDeviceDTVStandard", [CaptureDevice.CaptureDeviceID,DTVStandard]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureDeviceDefaultQuality
   SetCaptureDeviceDefaultQuality(CaptureDevice, Quality) {
  return this.sageAPI.invoke("SetCaptureDeviceDefaultQuality", [CaptureDevice.CaptureDeviceID,Quality]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetCaptureDeviceMerit
   SetCaptureDeviceMerit(CaptureDevice, Merit) {
  return this.sageAPI.invoke("SetCaptureDeviceMerit", [CaptureDevice.CaptureDeviceID,Merit]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default CaptureDeviceAPI;
