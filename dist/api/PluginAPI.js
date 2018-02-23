(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.PluginAPI = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var PluginAPI = function () {
    function PluginAPI(sageAPI) {
      _classCallCheck(this, PluginAPI);

      this.sageAPI = sageAPI;
    }

    // AreClientPluginsSupported


    _createClass(PluginAPI, [{
      key: "AreClientPluginsSupported",
      value: function AreClientPluginsSupported() {
        return this.sageAPI.invoke("AreClientPluginsSupported", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CanPluginBeDisabled",
      value: function CanPluginBeDisabled(Plugin) {
        if (typeof Plugin.CanPluginBeDisabled !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.CanPluginBeDisabled);
        });
        return this.sageAPI.invoke("CanPluginBeDisabled", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.CanPluginBeDisabled = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "DisablePlugin",
      value: function DisablePlugin(Plugin) {
        return this.sageAPI.invoke("DisablePlugin", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "EnablePlugin",
      value: function EnablePlugin(Plugin) {
        return this.sageAPI.invoke("EnablePlugin", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllAvailablePlugins",
      value: function GetAllAvailablePlugins() {
        return this.sageAPI.invoke("GetAllAvailablePlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllPluginVersions",
      value: function GetAllPluginVersions(Plugin) {
        return this.sageAPI.invoke("GetAllPluginVersions", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAvailablePluginForID",
      value: function GetAvailablePluginForID(PluginID) {
        return this.sageAPI.invoke("GetAvailablePluginForID", [PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetClientPluginIncompatabilityReason",
      value: function GetClientPluginIncompatabilityReason(Plugin) {
        if (typeof Plugin.ClientPluginIncompatabilityReason !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.ClientPluginIncompatabilityReason);
        });
        return this.sageAPI.invoke("GetClientPluginIncompatabilityReason", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.ClientPluginIncompatabilityReason = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetClientPluginProgress",
      value: function GetClientPluginProgress() {
        return this.sageAPI.invoke("GetClientPluginProgress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInstalledClientPlugins",
      value: function GetInstalledClientPlugins() {
        return this.sageAPI.invoke("GetInstalledClientPlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetInstalledPlugins",
      value: function GetInstalledPlugins() {
        return this.sageAPI.invoke("GetInstalledPlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginAuthor",
      value: function GetPluginAuthor(Plugin) {
        if (typeof Plugin.PluginAuthor !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginAuthor);
        });
        return this.sageAPI.invoke("GetPluginAuthor", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginAuthor = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginConfigHelpText",
      value: function GetPluginConfigHelpText(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigHelpText", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginConfigLabel",
      value: function GetPluginConfigLabel(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigLabel", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginConfigOptions",
      value: function GetPluginConfigOptions(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigOptions", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginConfigSettings",
      value: function GetPluginConfigSettings(Plugin) {
        if (typeof Plugin.PluginConfigSettings !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginConfigSettings);
        });
        return this.sageAPI.invoke("GetPluginConfigSettings", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginConfigSettings = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginConfigType",
      value: function GetPluginConfigType(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigType", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginConfigValue",
      value: function GetPluginConfigValue(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigValue", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginConfigValues",
      value: function GetPluginConfigValues(Plugin, SettingName) {
        return this.sageAPI.invoke("GetPluginConfigValues", ['plugin:' + Plugin.PluginID, SettingName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginCreationDate",
      value: function GetPluginCreationDate(Plugin) {
        if (typeof Plugin.PluginCreationDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginCreationDate);
        });
        return this.sageAPI.invoke("GetPluginCreationDate", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginCreationDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginDemoVideos",
      value: function GetPluginDemoVideos(Plugin) {
        if (typeof Plugin.PluginDemoVideos !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginDemoVideos);
        });
        return this.sageAPI.invoke("GetPluginDemoVideos", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginDemoVideos = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginDependencies",
      value: function GetPluginDependencies(Plugin) {
        if (typeof Plugin.PluginDependencies !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginDependencies);
        });
        return this.sageAPI.invoke("GetPluginDependencies", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginDependencies = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginDescription",
      value: function GetPluginDescription(Plugin) {
        if (typeof Plugin.PluginDescription !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginDescription);
        });
        return this.sageAPI.invoke("GetPluginDescription", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginDescription = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginIdentifier",
      value: function GetPluginIdentifier(Plugin) {
        if (typeof Plugin.PluginIdentifier !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginIdentifier);
        });
        return this.sageAPI.invoke("GetPluginIdentifier", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginIdentifier = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginImplementation",
      value: function GetPluginImplementation(Plugin) {
        if (typeof Plugin.PluginImplementation !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginImplementation);
        });
        return this.sageAPI.invoke("GetPluginImplementation", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginImplementation = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginIncompatabilityReason",
      value: function GetPluginIncompatabilityReason(Plugin) {
        if (typeof Plugin.PluginIncompatabilityReason !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginIncompatabilityReason);
        });
        return this.sageAPI.invoke("GetPluginIncompatabilityReason", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginIncompatabilityReason = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginInstallDate",
      value: function GetPluginInstallDate(Plugin) {
        if (typeof Plugin.PluginInstallDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginInstallDate);
        });
        return this.sageAPI.invoke("GetPluginInstallDate", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginInstallDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginModificationDate",
      value: function GetPluginModificationDate(Plugin) {
        if (typeof Plugin.PluginModificationDate !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginModificationDate);
        });
        return this.sageAPI.invoke("GetPluginModificationDate", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginModificationDate = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginName",
      value: function GetPluginName(Plugin) {
        if (typeof Plugin.PluginName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginName);
        });
        return this.sageAPI.invoke("GetPluginName", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginProgress",
      value: function GetPluginProgress() {
        return this.sageAPI.invoke("GetPluginProgress", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetPluginReleaseNotes",
      value: function GetPluginReleaseNotes(Plugin) {
        if (typeof Plugin.PluginReleaseNotes !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginReleaseNotes);
        });
        return this.sageAPI.invoke("GetPluginReleaseNotes", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginReleaseNotes = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginResourcePath",
      value: function GetPluginResourcePath(Plugin) {
        if (typeof Plugin.PluginResourcePath !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginResourcePath);
        });
        return this.sageAPI.invoke("GetPluginResourcePath", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginResourcePath = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginScreenshots",
      value: function GetPluginScreenshots(Plugin) {
        if (typeof Plugin.PluginScreenshots !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginScreenshots);
        });
        return this.sageAPI.invoke("GetPluginScreenshots", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginScreenshots = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginType",
      value: function GetPluginType(Plugin) {
        if (typeof Plugin.PluginType !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginType);
        });
        return this.sageAPI.invoke("GetPluginType", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginType = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginVersion",
      value: function GetPluginVersion(Plugin) {
        if (typeof Plugin.PluginVersion !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginVersion);
        });
        return this.sageAPI.invoke("GetPluginVersion", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginVersion = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetPluginWebsites",
      value: function GetPluginWebsites(Plugin) {
        if (typeof Plugin.PluginWebsites !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.PluginWebsites);
        });
        return this.sageAPI.invoke("GetPluginWebsites", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.PluginWebsites = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetSageTVPluginRegistry",
      value: function GetSageTVPluginRegistry() {
        return this.sageAPI.invoke("GetSageTVPluginRegistry", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "InstallClientPlugin",
      value: function InstallClientPlugin(Plugin) {
        return this.sageAPI.invoke("InstallClientPlugin", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "InstallPlugin",
      value: function InstallPlugin(Plugin) {
        return this.sageAPI.invoke("InstallPlugin", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsClientPluginCompatible",
      value: function IsClientPluginCompatible(Plugin) {
        if (typeof Plugin.IsClientPluginCompatible !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsClientPluginCompatible);
        });
        return this.sageAPI.invoke("IsClientPluginCompatible", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsClientPluginCompatible = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsClientPluginInstalled",
      value: function IsClientPluginInstalled(Plugin) {
        if (typeof Plugin.IsClientPluginInstalled !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsClientPluginInstalled);
        });
        return this.sageAPI.invoke("IsClientPluginInstalled", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsClientPluginInstalled = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsClientPluginInstalledSameVersion",
      value: function IsClientPluginInstalledSameVersion(Plugin) {
        if (typeof Plugin.IsClientPluginInstalledSameVersion !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsClientPluginInstalledSameVersion);
        });
        return this.sageAPI.invoke("IsClientPluginInstalledSameVersion", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsClientPluginInstalledSameVersion = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginBeta",
      value: function IsPluginBeta(Plugin) {
        if (typeof Plugin.IsPluginBeta !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginBeta);
        });
        return this.sageAPI.invoke("IsPluginBeta", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginBeta = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginCompatible",
      value: function IsPluginCompatible(Plugin) {
        if (typeof Plugin.IsPluginCompatible !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginCompatible);
        });
        return this.sageAPI.invoke("IsPluginCompatible", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginCompatible = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginConfigurable",
      value: function IsPluginConfigurable(Plugin) {
        if (typeof Plugin.IsPluginConfigurable !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginConfigurable);
        });
        return this.sageAPI.invoke("IsPluginConfigurable", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginConfigurable = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginDesktopOnly",
      value: function IsPluginDesktopOnly(Plugin) {
        if (typeof Plugin.IsPluginDesktopOnly !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginDesktopOnly);
        });
        return this.sageAPI.invoke("IsPluginDesktopOnly", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginDesktopOnly = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginEnabled",
      value: function IsPluginEnabled(Plugin) {
        if (typeof Plugin.IsPluginEnabled !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginEnabled);
        });
        return this.sageAPI.invoke("IsPluginEnabled", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginEnabled = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginFailed",
      value: function IsPluginFailed(Plugin) {
        if (typeof Plugin.IsPluginFailed !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginFailed);
        });
        return this.sageAPI.invoke("IsPluginFailed", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginFailed = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginInstalled",
      value: function IsPluginInstalled(Plugin) {
        if (typeof Plugin.IsPluginInstalled !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginInstalled);
        });
        return this.sageAPI.invoke("IsPluginInstalled", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginInstalled = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginInstalledSameVersion",
      value: function IsPluginInstalledSameVersion(Plugin) {
        if (typeof Plugin.IsPluginInstalledSameVersion !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Plugin.IsPluginInstalledSameVersion);
        });
        return this.sageAPI.invoke("IsPluginInstalledSameVersion", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (!json || !json.Result) return null;
          Plugin.IsPluginInstalledSameVersion = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsPluginObject",
      value: function IsPluginObject(Plugin) {
        return this.sageAPI.invoke("IsPluginObject", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsPluginStartupComplete",
      value: function IsPluginStartupComplete() {
        return this.sageAPI.invoke("IsPluginStartupComplete", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RefreshAvailablePlugins",
      value: function RefreshAvailablePlugins() {
        return this.sageAPI.invoke("RefreshAvailablePlugins", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ResetPluginConfiguration",
      value: function ResetPluginConfiguration(Plugin) {
        return this.sageAPI.invoke("ResetPluginConfiguration", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPluginConfigValue",
      value: function SetPluginConfigValue(Plugin, SettingName, SettingValue) {
        return this.sageAPI.invoke("SetPluginConfigValue", ['plugin:' + Plugin.PluginID, SettingName, SettingValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetPluginConfigValues",
      value: function SetPluginConfigValues(Plugin, SettingName, SettingValues) {
        return this.sageAPI.invoke("SetPluginConfigValues", ['plugin:' + Plugin.PluginID, SettingName, SettingValues]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "UninstallPlugin",
      value: function UninstallPlugin(Plugin) {
        return this.sageAPI.invoke("UninstallPlugin", ['plugin:' + Plugin.PluginID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return PluginAPI;
  }();

  // Field Constants for Plugin
  PluginAPI.CanPluginBeDisabled = "CanPluginBeDisabled";
  PluginAPI.ClientPluginIncompatabilityReason = "ClientPluginIncompatabilityReason";
  PluginAPI.PluginAuthor = "PluginAuthor";
  PluginAPI.PluginConfigSettings = "PluginConfigSettings";
  PluginAPI.PluginCreationDate = "PluginCreationDate";
  PluginAPI.PluginDemoVideos = "PluginDemoVideos";
  PluginAPI.PluginDependencies = "PluginDependencies";
  PluginAPI.PluginDescription = "PluginDescription";
  PluginAPI.PluginIdentifier = "PluginIdentifier";
  PluginAPI.PluginImplementation = "PluginImplementation";
  PluginAPI.PluginIncompatabilityReason = "PluginIncompatabilityReason";
  PluginAPI.PluginInstallDate = "PluginInstallDate";
  PluginAPI.PluginModificationDate = "PluginModificationDate";
  PluginAPI.PluginName = "PluginName";
  PluginAPI.PluginReleaseNotes = "PluginReleaseNotes";
  PluginAPI.PluginResourcePath = "PluginResourcePath";
  PluginAPI.PluginScreenshots = "PluginScreenshots";
  PluginAPI.PluginType = "PluginType";
  PluginAPI.PluginVersion = "PluginVersion";
  PluginAPI.PluginWebsites = "PluginWebsites";
  PluginAPI.IsClientPluginCompatible = "IsClientPluginCompatible";
  PluginAPI.IsClientPluginInstalled = "IsClientPluginInstalled";
  PluginAPI.IsClientPluginInstalledSameVersion = "IsClientPluginInstalledSameVersion";
  PluginAPI.IsPluginBeta = "IsPluginBeta";
  PluginAPI.IsPluginCompatible = "IsPluginCompatible";
  PluginAPI.IsPluginConfigurable = "IsPluginConfigurable";
  PluginAPI.IsPluginDesktopOnly = "IsPluginDesktopOnly";
  PluginAPI.IsPluginEnabled = "IsPluginEnabled";
  PluginAPI.IsPluginFailed = "IsPluginFailed";
  PluginAPI.IsPluginInstalled = "IsPluginInstalled";
  PluginAPI.IsPluginInstalledSameVersion = "IsPluginInstalledSameVersion";
  exports.default = PluginAPI;
});