class PluginAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AreClientPluginsSupported
   AreClientPluginsSupported() {
  return this.sageAPI.invoke("AreClientPluginsSupported", {
});
   }

    // CanPluginBeDisabled
   CanPluginBeDisabled(Plugin) {
  if (typeof Plugin.BeDisabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.BeDisabled);
  });
  return this.sageAPI.invoke("CanPluginBeDisabled", {
'Plugin':Plugin.ID
});
   }

    // DisablePlugin
   DisablePlugin(Plugin) {
  return this.sageAPI.invoke("DisablePlugin", {
'Plugin':Plugin.ID
});
   }

    // EnablePlugin
   EnablePlugin(Plugin) {
  return this.sageAPI.invoke("EnablePlugin", {
'Plugin':Plugin.ID
});
   }

    // GetAllAvailablePlugins
   GetAllAvailablePlugins() {
  return this.sageAPI.invoke("GetAllAvailablePlugins", {
});
   }

    // GetAllPluginVersions
   GetAllPluginVersions(Plugin) {
  if (typeof Plugin.AllPluginVersions !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.AllPluginVersions);
  });
  return this.sageAPI.invoke("GetAllPluginVersions", {
'Plugin':Plugin.ID
});
   }

    // GetAvailablePluginForID
   GetAvailablePluginForID(PluginID) {
  return this.sageAPI.invoke("GetAvailablePluginForID", {
'PluginID':PluginID
});
   }

    // GetClientPluginIncompatabilityReason
   GetClientPluginIncompatabilityReason(Plugin) {
  if (typeof Plugin.ClientPluginIncompatabilityReason !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ClientPluginIncompatabilityReason);
  });
  return this.sageAPI.invoke("GetClientPluginIncompatabilityReason", {
'Plugin':Plugin.ID
});
   }

    // GetClientPluginProgress
   GetClientPluginProgress() {
  return this.sageAPI.invoke("GetClientPluginProgress", {
});
   }

    // GetInstalledClientPlugins
   GetInstalledClientPlugins() {
  return this.sageAPI.invoke("GetInstalledClientPlugins", {
});
   }

    // GetInstalledPlugins
   GetInstalledPlugins() {
  return this.sageAPI.invoke("GetInstalledPlugins", {
});
   }

    // GetPluginAuthor
   GetPluginAuthor(Plugin) {
  if (typeof Plugin.Author !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Author);
  });
  return this.sageAPI.invoke("GetPluginAuthor", {
'Plugin':Plugin.ID
});
   }

    // GetPluginConfigHelpText
   GetPluginConfigHelpText(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigHelpText", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginConfigLabel
   GetPluginConfigLabel(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigLabel", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginConfigOptions
   GetPluginConfigOptions(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigOptions", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginConfigSettings
   GetPluginConfigSettings(Plugin) {
  if (typeof Plugin.ConfigSettings !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ConfigSettings);
  });
  return this.sageAPI.invoke("GetPluginConfigSettings", {
'Plugin':Plugin.ID
});
   }

    // GetPluginConfigType
   GetPluginConfigType(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigType", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginConfigValue
   GetPluginConfigValue(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValue", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginConfigValues
   GetPluginConfigValues(Plugin, SettingName) {
  return this.sageAPI.invoke("GetPluginConfigValues", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
});
   }

    // GetPluginCreationDate
   GetPluginCreationDate(Plugin) {
  if (typeof Plugin.CreationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.CreationDate);
  });
  return this.sageAPI.invoke("GetPluginCreationDate", {
'Plugin':Plugin.ID
});
   }

    // GetPluginDemoVideos
   GetPluginDemoVideos(Plugin) {
  if (typeof Plugin.DemoVideos !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.DemoVideos);
  });
  return this.sageAPI.invoke("GetPluginDemoVideos", {
'Plugin':Plugin.ID
});
   }

    // GetPluginDependencies
   GetPluginDependencies(Plugin) {
  if (typeof Plugin.Dependencies !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Dependencies);
  });
  return this.sageAPI.invoke("GetPluginDependencies", {
'Plugin':Plugin.ID
});
   }

    // GetPluginDescription
   GetPluginDescription(Plugin) {
  if (typeof Plugin.Description !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Description);
  });
  return this.sageAPI.invoke("GetPluginDescription", {
'Plugin':Plugin.ID
});
   }

    // GetPluginIdentifier
   GetPluginIdentifier(Plugin) {
  if (typeof Plugin.Identifier !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Identifier);
  });
  return this.sageAPI.invoke("GetPluginIdentifier", {
'Plugin':Plugin.ID
});
   }

    // GetPluginImplementation
   GetPluginImplementation(Plugin) {
  if (typeof Plugin.Implementation !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Implementation);
  });
  return this.sageAPI.invoke("GetPluginImplementation", {
'Plugin':Plugin.ID
});
   }

    // GetPluginIncompatabilityReason
   GetPluginIncompatabilityReason(Plugin) {
  if (typeof Plugin.IncompatabilityReason !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.IncompatabilityReason);
  });
  return this.sageAPI.invoke("GetPluginIncompatabilityReason", {
'Plugin':Plugin.ID
});
   }

    // GetPluginInstallDate
   GetPluginInstallDate(Plugin) {
  if (typeof Plugin.InstallDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.InstallDate);
  });
  return this.sageAPI.invoke("GetPluginInstallDate", {
'Plugin':Plugin.ID
});
   }

    // GetPluginModificationDate
   GetPluginModificationDate(Plugin) {
  if (typeof Plugin.ModificationDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ModificationDate);
  });
  return this.sageAPI.invoke("GetPluginModificationDate", {
'Plugin':Plugin.ID
});
   }

    // GetPluginName
   GetPluginName(Plugin) {
  if (typeof Plugin.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Name);
  });
  return this.sageAPI.invoke("GetPluginName", {
'Plugin':Plugin.ID
});
   }

    // GetPluginProgress
   GetPluginProgress() {
  return this.sageAPI.invoke("GetPluginProgress", {
});
   }

    // GetPluginReleaseNotes
   GetPluginReleaseNotes(Plugin) {
  if (typeof Plugin.ReleaseNotes !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ReleaseNotes);
  });
  return this.sageAPI.invoke("GetPluginReleaseNotes", {
'Plugin':Plugin.ID
});
   }

    // GetPluginResourcePath
   GetPluginResourcePath(Plugin) {
  if (typeof Plugin.ResourcePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ResourcePath);
  });
  return this.sageAPI.invoke("GetPluginResourcePath", {
'Plugin':Plugin.ID
});
   }

    // GetPluginScreenshots
   GetPluginScreenshots(Plugin) {
  if (typeof Plugin.Screenshots !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Screenshots);
  });
  return this.sageAPI.invoke("GetPluginScreenshots", {
'Plugin':Plugin.ID
});
   }

    // GetPluginType
   GetPluginType(Plugin) {
  if (typeof Plugin.Type !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Type);
  });
  return this.sageAPI.invoke("GetPluginType", {
'Plugin':Plugin.ID
});
   }

    // GetPluginVersion
   GetPluginVersion(Plugin) {
  if (typeof Plugin.Version !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Version);
  });
  return this.sageAPI.invoke("GetPluginVersion", {
'Plugin':Plugin.ID
});
   }

    // GetPluginWebsites
   GetPluginWebsites(Plugin) {
  if (typeof Plugin.Websites !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Websites);
  });
  return this.sageAPI.invoke("GetPluginWebsites", {
'Plugin':Plugin.ID
});
   }

    // GetSageTVPluginRegistry
   GetSageTVPluginRegistry() {
  return this.sageAPI.invoke("GetSageTVPluginRegistry", {
});
   }

    // InstallClientPlugin
   InstallClientPlugin(Plugin) {
  return this.sageAPI.invoke("InstallClientPlugin", {
'Plugin':Plugin.ID
});
   }

    // InstallPlugin
   InstallPlugin(Plugin) {
  return this.sageAPI.invoke("InstallPlugin", {
'Plugin':Plugin.ID
});
   }

    // IsClientPluginCompatible
   IsClientPluginCompatible(Plugin) {
  if (typeof Plugin.ClientPluginCompatible !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ClientPluginCompatible);
  });
  return this.sageAPI.invoke("IsClientPluginCompatible", {
'Plugin':Plugin.ID
});
   }

    // IsClientPluginInstalled
   IsClientPluginInstalled(Plugin) {
  if (typeof Plugin.ClientPluginInstalled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ClientPluginInstalled);
  });
  return this.sageAPI.invoke("IsClientPluginInstalled", {
'Plugin':Plugin.ID
});
   }

    // IsClientPluginInstalledSameVersion
   IsClientPluginInstalledSameVersion(Plugin) {
  if (typeof Plugin.ClientPluginInstalledSameVersion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.ClientPluginInstalledSameVersion);
  });
  return this.sageAPI.invoke("IsClientPluginInstalledSameVersion", {
'Plugin':Plugin.ID
});
   }

    // IsPluginBeta
   IsPluginBeta(Plugin) {
  if (typeof Plugin.Beta !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Beta);
  });
  return this.sageAPI.invoke("IsPluginBeta", {
'Plugin':Plugin.ID
});
   }

    // IsPluginCompatible
   IsPluginCompatible(Plugin) {
  if (typeof Plugin.Compatible !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Compatible);
  });
  return this.sageAPI.invoke("IsPluginCompatible", {
'Plugin':Plugin.ID
});
   }

    // IsPluginConfigurable
   IsPluginConfigurable(Plugin) {
  if (typeof Plugin.Configurable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Configurable);
  });
  return this.sageAPI.invoke("IsPluginConfigurable", {
'Plugin':Plugin.ID
});
   }

    // IsPluginDesktopOnly
   IsPluginDesktopOnly(Plugin) {
  if (typeof Plugin.DesktopOnly !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.DesktopOnly);
  });
  return this.sageAPI.invoke("IsPluginDesktopOnly", {
'Plugin':Plugin.ID
});
   }

    // IsPluginEnabled
   IsPluginEnabled(Plugin) {
  if (typeof Plugin.Enabled !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Enabled);
  });
  return this.sageAPI.invoke("IsPluginEnabled", {
'Plugin':Plugin.ID
});
   }

    // IsPluginFailed
   IsPluginFailed(Plugin) {
  if (typeof Plugin.Failed !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Failed);
  });
  return this.sageAPI.invoke("IsPluginFailed", {
'Plugin':Plugin.ID
});
   }

    // IsPluginInstalled
   IsPluginInstalled(Plugin) {
  if (typeof Plugin.Installed !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.Installed);
  });
  return this.sageAPI.invoke("IsPluginInstalled", {
'Plugin':Plugin.ID
});
   }

    // IsPluginInstalledSameVersion
   IsPluginInstalledSameVersion(Plugin) {
  if (typeof Plugin.InstalledSameVersion !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Plugin.InstalledSameVersion);
  });
  return this.sageAPI.invoke("IsPluginInstalledSameVersion", {
'Plugin':Plugin.ID
});
   }

    // IsPluginObject
   IsPluginObject(Plugin) {
  return this.sageAPI.invoke("IsPluginObject", {
'Plugin':Plugin.ID
});
   }

    // IsPluginStartupComplete
   IsPluginStartupComplete() {
  return this.sageAPI.invoke("IsPluginStartupComplete", {
});
   }

    // RefreshAvailablePlugins
   RefreshAvailablePlugins() {
  return this.sageAPI.invoke("RefreshAvailablePlugins", {
});
   }

    // ResetPluginConfiguration
   ResetPluginConfiguration(Plugin) {
  return this.sageAPI.invoke("ResetPluginConfiguration", {
'Plugin':Plugin.ID
});
   }

    // SetPluginConfigValue
   SetPluginConfigValue(Plugin, SettingName, SettingValue) {
  return this.sageAPI.invoke("SetPluginConfigValue", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
,
'SettingValue':SettingValue
});
   }

    // SetPluginConfigValues
   SetPluginConfigValues(Plugin, SettingName, SettingValues) {
  return this.sageAPI.invoke("SetPluginConfigValues", {
'Plugin':Plugin.ID
,
'SettingName':SettingName
,
'SettingValues':SettingValues
});
   }

    // UninstallPlugin
   UninstallPlugin(Plugin) {
  return this.sageAPI.invoke("UninstallPlugin", {
'Plugin':Plugin.ID
});
   }
}

    export default PluginAPI;
