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
  return this.sageAPI.invoke("CanPluginBeDisabled", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.CanPluginBeDisabled=json.Result;
  return json.Result;
});
   }

    // DisablePlugin
   DisablePlugin(Plugin) {
  return this.sageAPI.invoke("DisablePlugin", [Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // EnablePlugin
   EnablePlugin(Plugin) {
  return this.sageAPI.invoke("EnablePlugin", [Plugin.PluginID]).then((json)=>{
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
  if (typeof Plugin.AllPluginVersions !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.AllPluginVersions);
  });
  return this.sageAPI.invoke("GetAllPluginVersions", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.AllPluginVersions=json.Result;
  return json.Result;
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
  return this.sageAPI.invoke("GetClientPluginIncompatabilityReason", [Plugin.PluginID]).then((json)=>{
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
  if (typeof Plugin.Author !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Author);
  });
  return this.sageAPI.invoke("GetPluginAuthor", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Author=json.Result;
  return json.Result;
});
   }

    // GetPluginConfigHelpText
   GetPluginConfigHelpText(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigHelpText", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigLabel
   GetPluginConfigLabel(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigLabel", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigOptions
   GetPluginConfigOptions(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigOptions", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigSettings
   GetPluginConfigSettings(Plugin) {
  if (typeof Plugin.ConfigSettings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ConfigSettings);
  });
  return this.sageAPI.invoke("GetPluginConfigSettings", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.ConfigSettings=json.Result;
  return json.Result;
});
   }

    // GetPluginConfigType
   GetPluginConfigType(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigType", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigValue
   GetPluginConfigValue(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValue", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginConfigValues
   GetPluginConfigValues(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValues", [Plugin.PluginID,SettingName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPluginCreationDate
   GetPluginCreationDate(Plugin) {
  if (typeof Plugin.CreationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.CreationDate);
  });
  return this.sageAPI.invoke("GetPluginCreationDate", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.CreationDate=json.Result;
  return json.Result;
});
   }

    // GetPluginDemoVideos
   GetPluginDemoVideos(Plugin) {
  if (typeof Plugin.DemoVideos !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.DemoVideos);
  });
  return this.sageAPI.invoke("GetPluginDemoVideos", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.DemoVideos=json.Result;
  return json.Result;
});
   }

    // GetPluginDependencies
   GetPluginDependencies(Plugin) {
  if (typeof Plugin.Dependencies !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Dependencies);
  });
  return this.sageAPI.invoke("GetPluginDependencies", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Dependencies=json.Result;
  return json.Result;
});
   }

    // GetPluginDescription
   GetPluginDescription(Plugin) {
  if (typeof Plugin.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Description);
  });
  return this.sageAPI.invoke("GetPluginDescription", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Description=json.Result;
  return json.Result;
});
   }

    // GetPluginIdentifier
   GetPluginIdentifier(Plugin) {
  if (typeof Plugin.Identifier !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Identifier);
  });
  return this.sageAPI.invoke("GetPluginIdentifier", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Identifier=json.Result;
  return json.Result;
});
   }

    // GetPluginImplementation
   GetPluginImplementation(Plugin) {
  if (typeof Plugin.Implementation !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Implementation);
  });
  return this.sageAPI.invoke("GetPluginImplementation", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Implementation=json.Result;
  return json.Result;
});
   }

    // GetPluginIncompatabilityReason
   GetPluginIncompatabilityReason(Plugin) {
  if (typeof Plugin.IncompatabilityReason !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IncompatabilityReason);
  });
  return this.sageAPI.invoke("GetPluginIncompatabilityReason", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IncompatabilityReason=json.Result;
  return json.Result;
});
   }

    // GetPluginInstallDate
   GetPluginInstallDate(Plugin) {
  if (typeof Plugin.InstallDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.InstallDate);
  });
  return this.sageAPI.invoke("GetPluginInstallDate", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.InstallDate=json.Result;
  return json.Result;
});
   }

    // GetPluginModificationDate
   GetPluginModificationDate(Plugin) {
  if (typeof Plugin.ModificationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ModificationDate);
  });
  return this.sageAPI.invoke("GetPluginModificationDate", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.ModificationDate=json.Result;
  return json.Result;
});
   }

    // GetPluginName
   GetPluginName(Plugin) {
  if (typeof Plugin.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Name);
  });
  return this.sageAPI.invoke("GetPluginName", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Name=json.Result;
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
  if (typeof Plugin.ReleaseNotes !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ReleaseNotes);
  });
  return this.sageAPI.invoke("GetPluginReleaseNotes", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.ReleaseNotes=json.Result;
  return json.Result;
});
   }

    // GetPluginResourcePath
   GetPluginResourcePath(Plugin) {
  if (typeof Plugin.ResourcePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ResourcePath);
  });
  return this.sageAPI.invoke("GetPluginResourcePath", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.ResourcePath=json.Result;
  return json.Result;
});
   }

    // GetPluginScreenshots
   GetPluginScreenshots(Plugin) {
  if (typeof Plugin.Screenshots !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Screenshots);
  });
  return this.sageAPI.invoke("GetPluginScreenshots", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Screenshots=json.Result;
  return json.Result;
});
   }

    // GetPluginType
   GetPluginType(Plugin) {
  if (typeof Plugin.Type !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Type);
  });
  return this.sageAPI.invoke("GetPluginType", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Type=json.Result;
  return json.Result;
});
   }

    // GetPluginVersion
   GetPluginVersion(Plugin) {
  if (typeof Plugin.Version !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Version);
  });
  return this.sageAPI.invoke("GetPluginVersion", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Version=json.Result;
  return json.Result;
});
   }

    // GetPluginWebsites
   GetPluginWebsites(Plugin) {
  if (typeof Plugin.Websites !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Websites);
  });
  return this.sageAPI.invoke("GetPluginWebsites", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.Websites=json.Result;
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
  return this.sageAPI.invoke("InstallClientPlugin", [Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // InstallPlugin
   InstallPlugin(Plugin) {
  return this.sageAPI.invoke("InstallPlugin", [Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsClientPluginCompatible
   IsClientPluginCompatible(Plugin) {
  if (typeof Plugin.IsClientPluginCompatible !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IsClientPluginCompatible);
  });
  return this.sageAPI.invoke("IsClientPluginCompatible", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsClientPluginInstalled", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsClientPluginInstalledSameVersion", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginBeta", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginCompatible", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginConfigurable", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginDesktopOnly", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginEnabled", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginFailed", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginInstalled", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("IsPluginInstalledSameVersion", [Plugin.PluginID]).then((json)=>{
  if (!json || !json.Result) return null;
  Plugin.IsPluginInstalledSameVersion=json.Result;
  return json.Result;
});
   }

    // IsPluginObject
   IsPluginObject(Plugin) {
  return this.sageAPI.invoke("IsPluginObject", [Plugin.PluginID]).then((json)=>{
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
  return this.sageAPI.invoke("ResetPluginConfiguration", [Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPluginConfigValue
   SetPluginConfigValue(Plugin, SettingName, SettingValue) {
  return this.sageAPI.invoke("SetPluginConfigValue", [Plugin.PluginID,SettingName,SettingValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPluginConfigValues
   SetPluginConfigValues(Plugin, SettingName, SettingValues) {
  return this.sageAPI.invoke("SetPluginConfigValues", [Plugin.PluginID,SettingName,SettingValues]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // UninstallPlugin
   UninstallPlugin(Plugin) {
  return this.sageAPI.invoke("UninstallPlugin", [Plugin.PluginID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default PluginAPI;
