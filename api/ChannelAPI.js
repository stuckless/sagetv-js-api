class ChannelAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddChannel
   AddChannel(CallSign, Name, Network, StationID) {
  return this.sageAPI.invoke("AddChannel", {
'CallSign':CallSign
,
'Name':Name
,
'Network':Network
,
'StationID':StationID
});
   }

    // ClearChannelMappingOnLineup
   ClearChannelMappingOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("ClearChannelMappingOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // ClearPhysicalChannelMappingsOnLineup
   ClearPhysicalChannelMappingsOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("ClearPhysicalChannelMappingsOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // GetAllChannels
   GetAllChannels() {
  return this.sageAPI.invoke("GetAllChannels", {
});
   }

    // GetChannelDescription
   GetChannelDescription(Channel) {
  if (typeof Channel.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Description);
  });
  return this.sageAPI.invoke("GetChannelDescription", {
'Channel':Channel.ID
});
   }

    // GetChannelForStationID
   GetChannelForStationID(StationID) {
  return this.sageAPI.invoke("GetChannelForStationID", {
'StationID':StationID
});
   }

    // GetChannelLogo
   GetChannelLogo(Channel) {
  if (typeof Channel.Logo !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Logo);
  });
  return this.sageAPI.invoke("GetChannelLogo", {
'Channel':Channel.ID
});
   }

    // GetChannelLogo
   GetChannelLogo(Channel, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetChannelLogo", {
'Channel':Channel.ID
,
'Type':Type
,
'Index':Index
,
'Fallback':Fallback
});
   }

    // GetChannelLogoCount
   GetChannelLogoCount(Channel) {
  if (typeof Channel.LogoCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.LogoCount);
  });
  return this.sageAPI.invoke("GetChannelLogoCount", {
'Channel':Channel.ID
});
   }

    // GetChannelLogoURL
   GetChannelLogoURL(Channel) {
  if (typeof Channel.LogoURL !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.LogoURL);
  });
  return this.sageAPI.invoke("GetChannelLogoURL", {
'Channel':Channel.ID
});
   }

    // GetChannelLogoURL
   GetChannelLogoURL(Channel, Type, Index, Fallback) {
  return this.sageAPI.invoke("GetChannelLogoURL", {
'Channel':Channel.ID
,
'Type':Type
,
'Index':Index
,
'Fallback':Fallback
});
   }

    // GetChannelName
   GetChannelName(Channel) {
  if (typeof Channel.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Name);
  });
  return this.sageAPI.invoke("GetChannelName", {
'Channel':Channel.ID
});
   }

    // GetChannelNetwork
   GetChannelNetwork(Channel) {
  if (typeof Channel.Network !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Network);
  });
  return this.sageAPI.invoke("GetChannelNetwork", {
'Channel':Channel.ID
});
   }

    // GetChannelNumber
   GetChannelNumber(Channel) {
  if (typeof Channel.Number !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Number);
  });
  return this.sageAPI.invoke("GetChannelNumber", {
'Channel':Channel.ID
});
   }

    // GetChannelNumberForLineup
   GetChannelNumberForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetChannelNumberForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // GetChannelNumbersForLineup
   GetChannelNumbersForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetChannelNumbersForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // GetPhysicalChannelNumberForLineup
   GetPhysicalChannelNumberForLineup(Channel, Lineup) {
  return this.sageAPI.invoke("GetPhysicalChannelNumberForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // GetStationID
   GetStationID(Channel) {
  if (typeof Channel.StationID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.StationID);
  });
  return this.sageAPI.invoke("GetStationID", {
'Channel':Channel.ID
});
   }

    // IsChannelObject
   IsChannelObject(Channel) {
  return this.sageAPI.invoke("IsChannelObject", {
'Channel':Channel.ID
});
   }

    // IsChannelRemappedOnLineup
   IsChannelRemappedOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsChannelRemappedOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // IsChannelViewable
   IsChannelViewable(Channel) {
  if (typeof Channel.Viewable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Channel.Viewable);
  });
  return this.sageAPI.invoke("IsChannelViewable", {
'Channel':Channel.ID
});
   }

    // IsChannelViewableOnLineup
   IsChannelViewableOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsChannelViewableOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // IsChannelViewableOnNumberOnLineup
   IsChannelViewableOnNumberOnLineup(Channel, ChannelNumber, Lineup) {
  return this.sageAPI.invoke("IsChannelViewableOnNumberOnLineup", {
'Channel':Channel.ID
,
'ChannelNumber':ChannelNumber
,
'Lineup':Lineup
});
   }

    // IsPhysicalChannelRemappedOnLineup
   IsPhysicalChannelRemappedOnLineup(Channel, Lineup) {
  return this.sageAPI.invoke("IsPhysicalChannelRemappedOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
});
   }

    // SetChannelMappingForLineup
   SetChannelMappingForLineup(Channel, Lineup, NewNumber) {
  return this.sageAPI.invoke("SetChannelMappingForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
,
'NewNumber':NewNumber
});
   }

    // SetChannelMappingsForLineup
   SetChannelMappingsForLineup(Channel, Lineup, NewNumbers) {
  return this.sageAPI.invoke("SetChannelMappingsForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
,
'NewNumbers':NewNumbers
});
   }

    // SetChannelViewabilityForChannelNumberOnLineup
   SetChannelViewabilityForChannelNumberOnLineup(Channel, ChannelNumber, Lineup, Viewable) {
  return this.sageAPI.invoke("SetChannelViewabilityForChannelNumberOnLineup", {
'Channel':Channel.ID
,
'ChannelNumber':ChannelNumber
,
'Lineup':Lineup
,
'Viewable':Viewable
});
   }

    // SetChannelViewabilityForChannelOnLineup
   SetChannelViewabilityForChannelOnLineup(Channel, Lineup, Viewable) {
  return this.sageAPI.invoke("SetChannelViewabilityForChannelOnLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
,
'Viewable':Viewable
});
   }

    // SetPhysicalChannelMappingForLineup
   SetPhysicalChannelMappingForLineup(Channel, Lineup, NewNumber) {
  return this.sageAPI.invoke("SetPhysicalChannelMappingForLineup", {
'Channel':Channel.ID
,
'Lineup':Lineup
,
'NewNumber':NewNumber
});
   }
}

    export default ChannelAPI;
