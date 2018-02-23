class PluginAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AreClientPluginsSupported
   AreClientPluginsSupported() {
  return this.sageAPI.invoke("AreClientPluginsSupported", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CanPluginBeDisabled
   CanPluginBeDisabled(Plugin) {
  if (typeof Plugin.CanPluginBeDisabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.CanPluginBeDisabled);
  });
  return this.sageAPI.invoke("CanPluginBeDisabled", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.CanPluginBeDisabled=json.Result;
  return json.Result;
});
   }

    // DisablePlugin
   DisablePlugin(Plugin) {
  return this.sageAPI.invoke("DisablePlugin", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // EnablePlugin
   EnablePlugin(Plugin) {
  return this.sageAPI.invoke("EnablePlugin", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllAvailablePlugins
   GetAllAvailablePlugins() {
  return this.sageAPI.invoke("GetAllAvailablePlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllPluginVersions
   GetAllPluginVersions(Plugin) {
  return this.sageAPI.invoke("GetAllPluginVersions", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAvailablePluginForID
   GetAvailablePluginForID(PluginID) {
  return this.sageAPI.invoke("GetAvailablePluginForID", [PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetClientPluginIncompatabilityReason
   GetClientPluginIncompatabilityReason(Plugin) {
  if (typeof Plugin.ClientPluginIncompatabilityReason !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ClientPluginIncompatabilityReason);
  });
  return this.sageAPI.invoke("GetClientPluginIncompatabilityReason", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.ClientPluginIncompatabilityReason=json.Result;
  return json.Result;
});
   }

    // GetClientPluginProgress
   GetClientPluginProgress() {
  return this.sageAPI.invoke("GetClientPluginProgress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInstalledClientPlugins
   GetInstalledClientPlugins() {
  return this.sageAPI.invoke("GetInstalledClientPlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetInstalledPlugins
   GetInstalledPlugins() {
  return this.sageAPI.invoke("GetInstalledPlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginAuthor
   GetPluginAuthor(Plugin) {
  if (typeof Plugin.PluginAuthor !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginAuthor);
  });
  return this.sageAPI.invoke("GetPluginAuthor", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginAuthor=json.Result;
  return json.Result;
});
   }

    // GetPluginConfigHelpText
   GetPluginConfigHelpText(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigHelpText", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigLabel
   GetPluginConfigLabel(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigLabel", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigOptions
   GetPluginConfigOptions(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigOptions", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigSettings
   GetPluginConfigSettings(Plugin) {
  if (typeof Plugin.PluginConfigSettings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginConfigSettings);
  });
  return this.sageAPI.invoke("GetPluginConfigSettings", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginConfigSettings=json.Result;
  return json.Result;
});
   }

    // GetPluginConfigType
   GetPluginConfigType(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigType", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigValue
   GetPluginConfigValue(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValue", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigValues
   GetPluginConfigValues(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValues", ['plugin:'+Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginCreationDate
   GetPluginCreationDate(Plugin) {
  if (typeof Plugin.PluginCreationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginCreationDate);
  });
  return this.sageAPI.invoke("GetPluginCreationDate", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginCreationDate=json.Result;
  return json.Result;
});
   }

    // GetPluginDemoVideos
   GetPluginDemoVideos(Plugin) {
  if (typeof Plugin.PluginDemoVideos !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginDemoVideos);
  });
  return this.sageAPI.invoke("GetPluginDemoVideos", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginDemoVideos=json.Result;
  return json.Result;
});
   }

    // GetPluginDependencies
   GetPluginDependencies(Plugin) {
  if (typeof Plugin.PluginDependencies !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginDependencies);
  });
  return this.sageAPI.invoke("GetPluginDependencies", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginDependencies=json.Result;
  return json.Result;
});
   }

    // GetPluginDescription
   GetPluginDescription(Plugin) {
  if (typeof Plugin.PluginDescription !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginDescription);
  });
  return this.sageAPI.invoke("GetPluginDescription", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginDescription=json.Result;
  return json.Result;
});
   }

    // GetPluginIdentifier
   GetPluginIdentifier(Plugin) {
  if (typeof Plugin.PluginIdentifier !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginIdentifier);
  });
  return this.sageAPI.invoke("GetPluginIdentifier", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginIdentifier=json.Result;
  return json.Result;
});
   }

    // GetPluginImplementation
   GetPluginImplementation(Plugin) {
  if (typeof Plugin.PluginImplementation !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginImplementation);
  });
  return this.sageAPI.invoke("GetPluginImplementation", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginImplementation=json.Result;
  return json.Result;
});
   }

    // GetPluginIncompatabilityReason
   GetPluginIncompatabilityReason(Plugin) {
  if (typeof Plugin.PluginIncompatabilityReason !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginIncompatabilityReason);
  });
  return this.sageAPI.invoke("GetPluginIncompatabilityReason", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginIncompatabilityReason=json.Result;
  return json.Result;
});
   }

    // GetPluginInstallDate
   GetPluginInstallDate(Plugin) {
  if (typeof Plugin.PluginInstallDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginInstallDate);
  });
  return this.sageAPI.invoke("GetPluginInstallDate", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginInstallDate=json.Result;
  return json.Result;
});
   }

    // GetPluginModificationDate
   GetPluginModificationDate(Plugin) {
  if (typeof Plugin.PluginModificationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginModificationDate);
  });
  return this.sageAPI.invoke("GetPluginModificationDate", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginModificationDate=json.Result;
  return json.Result;
});
   }

    // GetPluginName
   GetPluginName(Plugin) {
  if (typeof Plugin.PluginName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginName);
  });
  return this.sageAPI.invoke("GetPluginName", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginName=json.Result;
  return json.Result;
});
   }

    // GetPluginProgress
   GetPluginProgress() {
  return this.sageAPI.invoke("GetPluginProgress", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginReleaseNotes
   GetPluginReleaseNotes(Plugin) {
  if (typeof Plugin.PluginReleaseNotes !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginReleaseNotes);
  });
  return this.sageAPI.invoke("GetPluginReleaseNotes", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginReleaseNotes=json.Result;
  return json.Result;
});
   }

    // GetPluginResourcePath
   GetPluginResourcePath(Plugin) {
  if (typeof Plugin.PluginResourcePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginResourcePath);
  });
  return this.sageAPI.invoke("GetPluginResourcePath", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginResourcePath=json.Result;
  return json.Result;
});
   }

    // GetPluginScreenshots
   GetPluginScreenshots(Plugin) {
  if (typeof Plugin.PluginScreenshots !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginScreenshots);
  });
  return this.sageAPI.invoke("GetPluginScreenshots", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginScreenshots=json.Result;
  return json.Result;
});
   }

    // GetPluginType
   GetPluginType(Plugin) {
  if (typeof Plugin.PluginType !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginType);
  });
  return this.sageAPI.invoke("GetPluginType", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginType=json.Result;
  return json.Result;
});
   }

    // GetPluginVersion
   GetPluginVersion(Plugin) {
  if (typeof Plugin.PluginVersion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginVersion);
  });
  return this.sageAPI.invoke("GetPluginVersion", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginVersion=json.Result;
  return json.Result;
});
   }

    // GetPluginWebsites
   GetPluginWebsites(Plugin) {
  if (typeof Plugin.PluginWebsites !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.PluginWebsites);
  });
  return this.sageAPI.invoke("GetPluginWebsites", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.PluginWebsites=json.Result;
  return json.Result;
});
   }

    // GetSageTVPluginRegistry
   GetSageTVPluginRegistry() {
  return this.sageAPI.invoke("GetSageTVPluginRegistry", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // InstallClientPlugin
   InstallClientPlugin(Plugin) {
  return this.sageAPI.invoke("InstallClientPlugin", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // InstallPlugin
   InstallPlugin(Plugin) {
  return this.sageAPI.invoke("InstallPlugin", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsClientPluginCompatible
   IsClientPluginCompatible(Plugin) {
  if (typeof Plugin.IsClientPluginCompatible !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsClientPluginCompatible);
  });
  return this.sageAPI.invoke("IsClientPluginCompatible", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsClientPluginCompatible=json.Result;
  return json.Result;
});
   }

    // IsClientPluginInstalled
   IsClientPluginInstalled(Plugin) {
  if (typeof Plugin.IsClientPluginInstalled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsClientPluginInstalled);
  });
  return this.sageAPI.invoke("IsClientPluginInstalled", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsClientPluginInstalled=json.Result;
  return json.Result;
});
   }

    // IsClientPluginInstalledSameVersion
   IsClientPluginInstalledSameVersion(Plugin) {
  if (typeof Plugin.IsClientPluginInstalledSameVersion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsClientPluginInstalledSameVersion);
  });
  return this.sageAPI.invoke("IsClientPluginInstalledSameVersion", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsClientPluginInstalledSameVersion=json.Result;
  return json.Result;
});
   }

    // IsPluginBeta
   IsPluginBeta(Plugin) {
  if (typeof Plugin.IsPluginBeta !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginBeta);
  });
  return this.sageAPI.invoke("IsPluginBeta", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginBeta=json.Result;
  return json.Result;
});
   }

    // IsPluginCompatible
   IsPluginCompatible(Plugin) {
  if (typeof Plugin.IsPluginCompatible !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginCompatible);
  });
  return this.sageAPI.invoke("IsPluginCompatible", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginCompatible=json.Result;
  return json.Result;
});
   }

    // IsPluginConfigurable
   IsPluginConfigurable(Plugin) {
  if (typeof Plugin.IsPluginConfigurable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginConfigurable);
  });
  return this.sageAPI.invoke("IsPluginConfigurable", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginConfigurable=json.Result;
  return json.Result;
});
   }

    // IsPluginDesktopOnly
   IsPluginDesktopOnly(Plugin) {
  if (typeof Plugin.IsPluginDesktopOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginDesktopOnly);
  });
  return this.sageAPI.invoke("IsPluginDesktopOnly", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginDesktopOnly=json.Result;
  return json.Result;
});
   }

    // IsPluginEnabled
   IsPluginEnabled(Plugin) {
  if (typeof Plugin.IsPluginEnabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginEnabled);
  });
  return this.sageAPI.invoke("IsPluginEnabled", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginEnabled=json.Result;
  return json.Result;
});
   }

    // IsPluginFailed
   IsPluginFailed(Plugin) {
  if (typeof Plugin.IsPluginFailed !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginFailed);
  });
  return this.sageAPI.invoke("IsPluginFailed", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginFailed=json.Result;
  return json.Result;
});
   }

    // IsPluginInstalled
   IsPluginInstalled(Plugin) {
  if (typeof Plugin.IsPluginInstalled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginInstalled);
  });
  return this.sageAPI.invoke("IsPluginInstalled", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginInstalled=json.Result;
  return json.Result;
});
   }

    // IsPluginInstalledSameVersion
   IsPluginInstalledSameVersion(Plugin) {
  if (typeof Plugin.IsPluginInstalledSameVersion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsPluginInstalledSameVersion);
  });
  return this.sageAPI.invoke("IsPluginInstalledSameVersion", ['plugin:'+Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginInstalledSameVersion=json.Result;
  return json.Result;
});
   }

    // IsPluginObject
   IsPluginObject(Plugin) {
  return this.sageAPI.invoke("IsPluginObject", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsPluginStartupComplete
   IsPluginStartupComplete() {
  return this.sageAPI.invoke("IsPluginStartupComplete", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RefreshAvailablePlugins
   RefreshAvailablePlugins() {
  return this.sageAPI.invoke("RefreshAvailablePlugins", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ResetPluginConfiguration
   ResetPluginConfiguration(Plugin) {
  return this.sageAPI.invoke("ResetPluginConfiguration", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPluginConfigValue
   SetPluginConfigValue(Plugin, SettingName, SettingValue) {
  return this.sageAPI.invoke("SetPluginConfigValue", ['plugin:'+Plugin.PluginID,SettingName,SettingValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPluginConfigValues
   SetPluginConfigValues(Plugin, SettingName, SettingValues) {
  return this.sageAPI.invoke("SetPluginConfigValues", ['plugin:'+Plugin.PluginID,SettingName,SettingValues]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UninstallPlugin
   UninstallPlugin(Plugin) {
  return this.sageAPI.invoke("UninstallPlugin", ['plugin:'+Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for Plugin
PluginAPI.CanPluginBeDisabled="CanPluginBeDisabled";
PluginAPI.ClientPluginIncompatabilityReason="ClientPluginIncompatabilityReason";
PluginAPI.PluginAuthor="PluginAuthor";
PluginAPI.PluginConfigSettings="PluginConfigSettings";
PluginAPI.PluginCreationDate="PluginCreationDate";
PluginAPI.PluginDemoVideos="PluginDemoVideos";
PluginAPI.PluginDependencies="PluginDependencies";
PluginAPI.PluginDescription="PluginDescription";
PluginAPI.PluginIdentifier="PluginIdentifier";
PluginAPI.PluginImplementation="PluginImplementation";
PluginAPI.PluginIncompatabilityReason="PluginIncompatabilityReason";
PluginAPI.PluginInstallDate="PluginInstallDate";
PluginAPI.PluginModificationDate="PluginModificationDate";
PluginAPI.PluginName="PluginName";
PluginAPI.PluginReleaseNotes="PluginReleaseNotes";
PluginAPI.PluginResourcePath="PluginResourcePath";
PluginAPI.PluginScreenshots="PluginScreenshots";
PluginAPI.PluginType="PluginType";
PluginAPI.PluginVersion="PluginVersion";
PluginAPI.PluginWebsites="PluginWebsites";
PluginAPI.IsClientPluginCompatible="IsClientPluginCompatible";
PluginAPI.IsClientPluginInstalled="IsClientPluginInstalled";
PluginAPI.IsClientPluginInstalledSameVersion="IsClientPluginInstalledSameVersion";
PluginAPI.IsPluginBeta="IsPluginBeta";
PluginAPI.IsPluginCompatible="IsPluginCompatible";
PluginAPI.IsPluginConfigurable="IsPluginConfigurable";
PluginAPI.IsPluginDesktopOnly="IsPluginDesktopOnly";
PluginAPI.IsPluginEnabled="IsPluginEnabled";
PluginAPI.IsPluginFailed="IsPluginFailed";
PluginAPI.IsPluginInstalled="IsPluginInstalled";
PluginAPI.IsPluginInstalledSameVersion="IsPluginInstalledSameVersion";
    export default PluginAPI;
