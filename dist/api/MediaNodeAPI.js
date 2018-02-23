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
    global.MediaNodeAPI = mod.exports;
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

  var MediaNodeAPI = function () {
    function MediaNodeAPI(sageAPI) {
      _classCallCheck(this, MediaNodeAPI);

      this.sageAPI = sageAPI;
    }

    // AppendNodeFilter


    _createClass(MediaNodeAPI, [{
      key: "AppendNodeFilter",
      value: function AppendNodeFilter(MediaNode, Technique, MatchPasses) {
        return this.sageAPI.invoke("AppendNodeFilter", ['medianode:' + MediaNode.MediaNodeID, Technique, MatchPasses]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "CreateMediaNode",
      value: function CreateMediaNode(PrimaryLabel, SecondaryLabel, Thumbnail, Icon, DataObject) {
        return this.sageAPI.invoke("CreateMediaNode", [PrimaryLabel, SecondaryLabel, Thumbnail, Icon, DataObject]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetAllNodeDescendants",
      value: function GetAllNodeDescendants(MediaNode) {
        if (typeof MediaNode.AllNodeDescendants !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.AllNodeDescendants);
        });
        return this.sageAPI.invoke("GetAllNodeDescendants", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.AllNodeDescendants = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetChildrenCheckedCount",
      value: function GetChildrenCheckedCount(MediaNode, State) {
        return this.sageAPI.invoke("GetChildrenCheckedCount", ['medianode:' + MediaNode.MediaNodeID, State]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetChildrenCheckedNodes",
      value: function GetChildrenCheckedNodes(MediaNode, State) {
        return this.sageAPI.invoke("GetChildrenCheckedNodes", ['medianode:' + MediaNode.MediaNodeID, State]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaSource",
      value: function GetMediaSource(Name) {
        return this.sageAPI.invoke("GetMediaSource", [Name]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetMediaView",
      value: function GetMediaView(Name, Data) {
        return this.sageAPI.invoke("GetMediaView", [Name, Data]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodeChildAt",
      value: function GetNodeChildAt(MediaNode, Index) {
        return this.sageAPI.invoke("GetNodeChildAt", ['medianode:' + MediaNode.MediaNodeID, Index]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodeChildren",
      value: function GetNodeChildren(MediaNode) {
        return this.sageAPI.invoke("GetNodeChildren", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodeDataObject",
      value: function GetNodeDataObject(MediaNode) {
        if (typeof MediaNode.NodeDataObject !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeDataObject);
        });
        return this.sageAPI.invoke("GetNodeDataObject", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeDataObject = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeDataType",
      value: function GetNodeDataType(MediaNode) {
        if (typeof MediaNode.NodeDataType !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeDataType);
        });
        return this.sageAPI.invoke("GetNodeDataType", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeDataType = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeFilterTechnique",
      value: function GetNodeFilterTechnique(MediaNode, FilterIndex) {
        return this.sageAPI.invoke("GetNodeFilterTechnique", ['medianode:' + MediaNode.MediaNodeID, FilterIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodeFullPath",
      value: function GetNodeFullPath(MediaNode) {
        if (typeof MediaNode.NodeFullPath !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeFullPath);
        });
        return this.sageAPI.invoke("GetNodeFullPath", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeFullPath = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeIcon",
      value: function GetNodeIcon(MediaNode) {
        if (typeof MediaNode.NodeIcon !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeIcon);
        });
        return this.sageAPI.invoke("GetNodeIcon", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeIcon = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeNumChildren",
      value: function GetNodeNumChildren(MediaNode) {
        if (typeof MediaNode.NodeNumChildren !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeNumChildren);
        });
        return this.sageAPI.invoke("GetNodeNumChildren", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeNumChildren = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeNumFilters",
      value: function GetNodeNumFilters(MediaNode) {
        if (typeof MediaNode.NodeNumFilters !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeNumFilters);
        });
        return this.sageAPI.invoke("GetNodeNumFilters", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeNumFilters = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeParent",
      value: function GetNodeParent(MediaNode) {
        return this.sageAPI.invoke("GetNodeParent", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodePrimaryLabel",
      value: function GetNodePrimaryLabel(MediaNode) {
        if (typeof MediaNode.NodePrimaryLabel !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodePrimaryLabel);
        });
        return this.sageAPI.invoke("GetNodePrimaryLabel", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodePrimaryLabel = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeProperty",
      value: function GetNodeProperty(MediaNode, PropertyName) {
        return this.sageAPI.invoke("GetNodeProperty", ['medianode:' + MediaNode.MediaNodeID, PropertyName]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "GetNodeSecondaryLabel",
      value: function GetNodeSecondaryLabel(MediaNode) {
        if (typeof MediaNode.NodeSecondaryLabel !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeSecondaryLabel);
        });
        return this.sageAPI.invoke("GetNodeSecondaryLabel", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeSecondaryLabel = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeSortTechnique",
      value: function GetNodeSortTechnique(MediaNode) {
        if (typeof MediaNode.NodeSortTechnique !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeSortTechnique);
        });
        return this.sageAPI.invoke("GetNodeSortTechnique", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeSortTechnique = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeThumbnail",
      value: function GetNodeThumbnail(MediaNode) {
        if (typeof MediaNode.NodeThumbnail !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeThumbnail);
        });
        return this.sageAPI.invoke("GetNodeThumbnail", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeThumbnail = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetNodeTypePath",
      value: function GetNodeTypePath(MediaNode) {
        if (typeof MediaNode.NodeTypePath !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.NodeTypePath);
        });
        return this.sageAPI.invoke("GetNodeTypePath", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.NodeTypePath = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "GetRelativeMediaSource",
      value: function GetRelativeMediaSource(Name, RelativeRoot) {
        return this.sageAPI.invoke("GetRelativeMediaSource", [Name, RelativeRoot]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsMediaNodeObject",
      value: function IsMediaNodeObject(Object) {
        return this.sageAPI.invoke("IsMediaNodeObject", [Object]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsNodeFilterMatching",
      value: function IsNodeFilterMatching(MediaNode, FilterIndex) {
        return this.sageAPI.invoke("IsNodeFilterMatching", ['medianode:' + MediaNode.MediaNodeID, FilterIndex]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "IsNodeFolder",
      value: function IsNodeFolder(MediaNode) {
        if (typeof MediaNode.IsNodeFolder !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.IsNodeFolder);
        });
        return this.sageAPI.invoke("IsNodeFolder", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.IsNodeFolder = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsNodeHierarchyRealized",
      value: function IsNodeHierarchyRealized(MediaNode) {
        if (typeof MediaNode.IsNodeHierarchyRealized !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.IsNodeHierarchyRealized);
        });
        return this.sageAPI.invoke("IsNodeHierarchyRealized", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.IsNodeHierarchyRealized = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsNodePlayable",
      value: function IsNodePlayable(MediaNode) {
        if (typeof MediaNode.IsNodePlayable !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.IsNodePlayable);
        });
        return this.sageAPI.invoke("IsNodePlayable", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.IsNodePlayable = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsNodeSortAscending",
      value: function IsNodeSortAscending(MediaNode) {
        if (typeof MediaNode.IsNodeSortAscending !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.IsNodeSortAscending);
        });
        return this.sageAPI.invoke("IsNodeSortAscending", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.IsNodeSortAscending = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "IsNodeVirtual",
      value: function IsNodeVirtual(MediaNode) {
        if (typeof MediaNode.IsNodeVirtual !== 'undefined') return new Promise(function (resolve, reject) {
          resolve(MediaNode.IsNodeVirtual);
        });
        return this.sageAPI.invoke("IsNodeVirtual", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (!json || !json.Result) return null;
          MediaNode.IsNodeVirtual = json.Result;
          return json.Result;
        });
      }
    }, {
      key: "RefreshNode",
      value: function RefreshNode(MediaNode) {
        return this.sageAPI.invoke("RefreshNode", ['medianode:' + MediaNode.MediaNodeID]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetAllChildrenChecked",
      value: function SetAllChildrenChecked(MediaNode, State) {
        return this.sageAPI.invoke("SetAllChildrenChecked", ['medianode:' + MediaNode.MediaNodeID, State]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetNodeChecked",
      value: function SetNodeChecked(MediaNode, State) {
        return this.sageAPI.invoke("SetNodeChecked", ['medianode:' + MediaNode.MediaNodeID, State]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetNodeFilter",
      value: function SetNodeFilter(MediaNode, Technique, MatchPasses) {
        return this.sageAPI.invoke("SetNodeFilter", ['medianode:' + MediaNode.MediaNodeID, Technique, MatchPasses]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }, {
      key: "SetNodeSort",
      value: function SetNodeSort(MediaNode, Technique, Ascending) {
        return this.sageAPI.invoke("SetNodeSort", ['medianode:' + MediaNode.MediaNodeID, Technique, Ascending]).then(function (json) {
          if (json && json.Result) return json.Result;
          return json;
        });
      }
    }]);

    return MediaNodeAPI;
  }();

  // Field Constants for MediaNode
  MediaNodeAPI.AllNodeDescendants = "AllNodeDescendants";
  MediaNodeAPI.NodeDataObject = "NodeDataObject";
  MediaNodeAPI.NodeDataType = "NodeDataType";
  MediaNodeAPI.NodeFullPath = "NodeFullPath";
  MediaNodeAPI.NodeIcon = "NodeIcon";
  MediaNodeAPI.NodeNumChildren = "NodeNumChildren";
  MediaNodeAPI.NodeNumFilters = "NodeNumFilters";
  MediaNodeAPI.NodePrimaryLabel = "NodePrimaryLabel";
  MediaNodeAPI.NodeSecondaryLabel = "NodeSecondaryLabel";
  MediaNodeAPI.NodeSortTechnique = "NodeSortTechnique";
  MediaNodeAPI.NodeThumbnail = "NodeThumbnail";
  MediaNodeAPI.NodeTypePath = "NodeTypePath";
  MediaNodeAPI.IsNodeFolder = "IsNodeFolder";
  MediaNodeAPI.IsNodeHierarchyRealized = "IsNodeHierarchyRealized";
  MediaNodeAPI.IsNodePlayable = "IsNodePlayable";
  MediaNodeAPI.IsNodeSortAscending = "IsNodeSortAscending";
  MediaNodeAPI.IsNodeVirtual = "IsNodeVirtual";
  exports.default = MediaNodeAPI;
});