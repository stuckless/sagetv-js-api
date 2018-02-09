class ChannelAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddChannel
   AddChannel(CallSign, Name, Network, StationID) {
  return this.sageAPI.invoke("AddChannel", [CallSign,Name,Network,StationID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearChannelMappingOnLineup
   ClearChannelMappingOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("ClearChannelMappingOnLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ClearPhysicalChannelMappingsOnLineup
   ClearPhysicalChannelMappingsOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("ClearPhysicalChannelMappingsOnLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllChannels
   GetAllChannels() {
  return this.sageAPI.invoke("GetAllChannels", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelDescription
   GetChannelDescription(Channel) {
  if (typeof Channel.ChannelDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelDescription);
  });
  return this.sageAPI.invoke("GetChannelDescription", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelDescription=json.Result;
  return json.Result;
});
   }

    // GetChannelForStationID
   GetChannelForStationID(StationID) {
  return this.sageAPI.invoke("GetChannelForStationID", [StationID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelLogo
   GetChannelLogo(Channel) {
  if (typeof Channel.ChannelLogo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelLogo);
  });
  return this.sageAPI.invoke("GetChannelLogo", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelLogo=json.Result;
  return json.Result;
});
   }

    // GetChannelLogo
   GetChannelLogo(Channel, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetChannelLogo", [Channel.ChannelID,Type,Index,Fallback]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelLogoCount
   GetChannelLogoCount(Channel) {
  if (typeof Channel.ChannelLogoCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelLogoCount);
  });
  return this.sageAPI.invoke("GetChannelLogoCount", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelLogoCount=json.Result;
  return json.Result;
});
   }

    // GetChannelLogoURL
   GetChannelLogoURL(Channel) {
  if (typeof Channel.ChannelLogoURL !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelLogoURL);
  });
  return this.sageAPI.invoke("GetChannelLogoURL", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelLogoURL=json.Result;
  return json.Result;
});
   }

    // GetChannelLogoURL
   GetChannelLogoURL(Channel, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetChannelLogoURL", [Channel.ChannelID,Type,Index,Fallback]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelName
   GetChannelName(Channel) {
  if (typeof Channel.ChannelName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelName);
  });
  return this.sageAPI.invoke("GetChannelName", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelName=json.Result;
  return json.Result;
});
   }

    // GetChannelNetwork
   GetChannelNetwork(Channel) {
  if (typeof Channel.ChannelNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelNetwork);
  });
  return this.sageAPI.invoke("GetChannelNetwork", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelNetwork=json.Result;
  return json.Result;
});
   }

    // GetChannelNumber
   GetChannelNumber(Channel) {
  if (typeof Channel.ChannelNumber !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.ChannelNumber);
  });
  return this.sageAPI.invoke("GetChannelNumber", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.ChannelNumber=json.Result;
  return json.Result;
});
   }

    // GetChannelNumberForLineup
   GetChannelNumberForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetChannelNumberForLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelNumbersForLineup
   GetChannelNumbersForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetChannelNumbersForLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPhysicalChannelNumberForLineup
   GetPhysicalChannelNumberForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetPhysicalChannelNumberForLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetStationID
   GetStationID(Channel) {
  if (typeof Channel.StationID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.StationID);
  });
  return this.sageAPI.invoke("GetStationID", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.StationID=json.Result;
  return json.Result;
});
   }

    // IsChannelObject
   IsChannelObject(Channel) {
  return this.sageAPI.invoke("IsChannelObject", [Channel.ChannelID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsChannelRemappedOnLineup
   IsChannelRemappedOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsChannelRemappedOnLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsChannelViewable
   IsChannelViewable(Channel) {
  if (typeof Channel.IsChannelViewable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.IsChannelViewable);
  });
  return this.sageAPI.invoke("IsChannelViewable", [Channel.ChannelID]).then((json)=>{
  if (!json || !json.Result) return null;
  Channel.IsChannelViewable=json.Result;
  return json.Result;
});
   }

    // IsChannelViewableOnLineup
   IsChannelViewableOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsChannelViewableOnLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsChannelViewableOnNumberOnLineup
   IsChannelViewableOnNumberOnLineup(Channel, ChannelNumber, Lineup) {
  return this.sageAPI.invoke("IsChannelViewableOnNumberOnLineup", [Channel.ChannelID,ChannelNumber,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPhysicalChannelRemappedOnLineup
   IsPhysicalChannelRemappedOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsPhysicalChannelRemappedOnLineup", [Channel.ChannelID,Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetChannelMappingForLineup
   SetChannelMappingForLineup(Channel, Lineup, NewNumber) {
  return this.sageAPI.invoke("SetChannelMappingForLineup", [Channel.ChannelID,Lineup,NewNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetChannelMappingsForLineup
   SetChannelMappingsForLineup(Channel, Lineup, NewNumbers) {
  return this.sageAPI.invoke("SetChannelMappingsForLineup", [Channel.ChannelID,Lineup,NewNumbers]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetChannelViewabilityForChannelNumberOnLineup
   SetChannelViewabilityForChannelNumberOnLineup(Channel, ChannelNumber, Lineup, Viewable) {
  return this.sageAPI.invoke("SetChannelViewabilityForChannelNumberOnLineup", [Channel.ChannelID,ChannelNumber,Lineup,Viewable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetChannelViewabilityForChannelOnLineup
   SetChannelViewabilityForChannelOnLineup(Channel, Lineup, Viewable) {
  return this.sageAPI.invoke("SetChannelViewabilityForChannelOnLineup", [Channel.ChannelID,Lineup,Viewable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPhysicalChannelMappingForLineup
   SetPhysicalChannelMappingForLineup(Channel, Lineup, NewNumber) {
  return this.sageAPI.invoke("SetPhysicalChannelMappingForLineup", [Channel.ChannelID,Lineup,NewNumber]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

ChannelAPI.ChannelDescription="ChannelDescription";
ChannelAPI.ChannelLogo="ChannelLogo";
ChannelAPI.ChannelLogoCount="ChannelLogoCount";
ChannelAPI.ChannelLogoURL="ChannelLogoURL";
ChannelAPI.ChannelName="ChannelName";
ChannelAPI.ChannelNetwork="ChannelNetwork";
ChannelAPI.ChannelNumber="ChannelNumber";
ChannelAPI.StationID="StationID";
ChannelAPI.IsChannelViewable="IsChannelViewable";
    export default ChannelAPI;
