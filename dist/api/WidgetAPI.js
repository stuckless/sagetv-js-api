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
    global.WidgetAPI = mod.exports;
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

  var WidgetAPI = function () {
    function WidgetAPI(sageAPI) {
      _classCallCheck(this, WidgetAPI);

      this.sageAPI = sageAPI;
    }

    // AddWidget


    _createClass(WidgetAPI, [{
      key: "AddWidget",
      value: function AddWidget(WidgetType) {
        return this.sageAPI.invoke("AddWidget", [WidgetType]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddWidgetChild",
      value: function AddWidgetChild(WidgetParent, WidgetChild) {
        return this.sageAPI.invoke("AddWidgetChild", [WidgetParent, WidgetChild]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "AddWidgetWithSymbol",
      value: function AddWidgetWithSymbol(WidgetType, _Symbol) {
        return this.sageAPI.invoke("AddWidgetWithSymbol", [WidgetType, _Symbol]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "EvaluateExpression",
      value: function EvaluateExpression(Expression) {
        return this.sageAPI.invoke("EvaluateExpression", [Expression]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ExecuteWidgetChain",
      value: function ExecuteWidgetChain(Widget) {
        return this.sageAPI.invoke("ExecuteWidgetChain", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ExecuteWidgetChainInCurrentMenuContext",
      value: function ExecuteWidgetChainInCurrentMenuContext(Widget) {
        return this.sageAPI.invoke("ExecuteWidgetChainInCurrentMenuContext", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "FindWidgetBySymbol",
      value: function FindWidgetBySymbol(_Symbol2) {
        return this.sageAPI.invoke("FindWidgetBySymbol", [_Symbol2]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllWidgets",
      value: function GetAllWidgets() {
        return this.sageAPI.invoke("GetAllWidgets", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentMenuWidget",
      value: function GetCurrentMenuWidget() {
        return this.sageAPI.invoke("GetCurrentMenuWidget", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetCurrentSTVFile",
      value: function GetCurrentSTVFile() {
        return this.sageAPI.invoke("GetCurrentSTVFile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetDefaultSTVFile",
      value: function GetDefaultSTVFile() {
        return this.sageAPI.invoke("GetDefaultSTVFile", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSTVName",
      value: function GetSTVName() {
        return this.sageAPI.invoke("GetSTVName", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetSTVVersion",
      value: function GetSTVVersion() {
        return this.sageAPI.invoke("GetSTVVersion", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetUIWidgetContext",
      value: function GetUIWidgetContext() {
        return this.sageAPI.invoke("GetUIWidgetContext", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetChild",
      value: function GetWidgetChild(Widget, Type, Name) {
        return this.sageAPI.invoke("GetWidgetChild", ['widget:' + Widget.WidgetID, Type, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetChildren",
      value: function GetWidgetChildren(Widget) {
        return this.sageAPI.invoke("GetWidgetChildren", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetMenuBackHistory",
      value: function GetWidgetMenuBackHistory() {
        return this.sageAPI.invoke("GetWidgetMenuBackHistory", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetMenuHistory",
      value: function GetWidgetMenuHistory() {
        return this.sageAPI.invoke("GetWidgetMenuHistory", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetName",
      value: function GetWidgetName(Widget) {
        if (typeof Widget.WidgetName !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Widget.WidgetName);
        });
        return this.sageAPI.invoke("GetWidgetName", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (!json || !json.Result) return null;
          Widget.WidgetName = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWidgetParent",
      value: function GetWidgetParent(Widget, Type, Name) {
        return this.sageAPI.invoke("GetWidgetParent", ['widget:' + Widget.WidgetID, Type, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetParents",
      value: function GetWidgetParents(Widget) {
        return this.sageAPI.invoke("GetWidgetParents", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetProperty",
      value: function GetWidgetProperty(Widget, PropertyName) {
        return this.sageAPI.invoke("GetWidgetProperty", ['widget:' + Widget.WidgetID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetWidgetSymbol",
      value: function GetWidgetSymbol(Widget) {
        if (typeof Widget.WidgetSymbol !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Widget.WidgetSymbol);
        });
        return this.sageAPI.invoke("GetWidgetSymbol", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (!json || !json.Result) return null;
          Widget.WidgetSymbol = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWidgetType",
      value: function GetWidgetType(Widget) {
        if (typeof Widget.WidgetType !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(Widget.WidgetType);
        });
        return this.sageAPI.invoke("GetWidgetType", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (!json || !json.Result) return null;
          Widget.WidgetType = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetWidgetsByType",
      value: function GetWidgetsByType(WidgetType) {
        return this.sageAPI.invoke("GetWidgetsByType", [WidgetType]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "HasWidgetProperty",
      value: function HasWidgetProperty(Widget, PropertyName) {
        return this.sageAPI.invoke("HasWidgetProperty", ['widget:' + Widget.WidgetID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "ImportSTVFile",
      value: function ImportSTVFile(STVFile) {
        return this.sageAPI.invoke("ImportSTVFile", [STVFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "InsertWidgetChild",
      value: function InsertWidgetChild(WidgetParent, WidgetChild, ChildIndex) {
        return this.sageAPI.invoke("InsertWidgetChild", [WidgetParent, WidgetChild, ChildIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsSTVModified",
      value: function IsSTVModified() {
        return this.sageAPI.invoke("IsSTVModified", []).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsWidgetParentOf",
      value: function IsWidgetParentOf(WidgetParent, WidgetChild) {
        return this.sageAPI.invoke("IsWidgetParentOf", [WidgetParent, WidgetChild]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LaunchMenuWidget",
      value: function LaunchMenuWidget(Widget) {
        return this.sageAPI.invoke("LaunchMenuWidget", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "LoadSTVFile",
      value: function LoadSTVFile(STVFile) {
        return this.sageAPI.invoke("LoadSTVFile", [STVFile]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveWidget",
      value: function RemoveWidget(Widget) {
        return this.sageAPI.invoke("RemoveWidget", ['widget:' + Widget.WidgetID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "RemoveWidgetChild",
      value: function RemoveWidgetChild(WidgetParent, WidgetChild) {
        return this.sageAPI.invoke("RemoveWidgetChild", [WidgetParent, WidgetChild]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SaveWidgetsAsXML",
      value: function SaveWidgetsAsXML(File, Overwrite) {
        return this.sageAPI.invoke("SaveWidgetsAsXML", [File, Overwrite]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWidgetName",
      value: function SetWidgetName(Widget, Name) {
        return this.sageAPI.invoke("SetWidgetName", ['widget:' + Widget.WidgetID, Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetWidgetProperty",
      value: function SetWidgetProperty(Widget, PropertyName, PropertyValue) {
        return this.sageAPI.invoke("SetWidgetProperty", ['widget:' + Widget.WidgetID, PropertyName, PropertyValue]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return WidgetAPI;
  }();

  // Field Constants for Widget
  WidgetAPI.WidgetName = "WidgetName";
  WidgetAPI.WidgetSymbol = "WidgetSymbol";
  WidgetAPI.WidgetType = "WidgetType";
  exports.default = WidgetAPI;
});