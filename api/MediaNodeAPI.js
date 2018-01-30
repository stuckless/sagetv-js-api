class MediaNodeAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AppendNodeFilter
   AppendNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("AppendNodeFilter", {
'MediaNode':MediaNode.ID
,
'Technique':Technique
,
'MatchPasses':MatchPasses
});
   }

    // CreateMediaNode
   CreateMediaNode(PrimaryLabel, SecondaryLabel, Thumbnail, Icon, DataObject) {
  return this.sageAPI.invoke("CreateMediaNode", {
'PrimaryLabel':PrimaryLabel
,
'SecondaryLabel':SecondaryLabel
,
'Thumbnail':Thumbnail
,
'Icon':Icon
,
'DataObject':DataObject
});
   }

    // GetAllNodeDescendants
   GetAllNodeDescendants(MediaNode) {
  if (typeof MediaNode.AllNodeDescendants !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.AllNodeDescendants);
  });
  return this.sageAPI.invoke("GetAllNodeDescendants", {
'MediaNode':MediaNode.ID
});
   }

    // GetChildrenCheckedCount
   GetChildrenCheckedCount(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedCount", {
'MediaNode':MediaNode.ID
,
'State':State
});
   }

    // GetChildrenCheckedNodes
   GetChildrenCheckedNodes(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedNodes", {
'MediaNode':MediaNode.ID
,
'State':State
});
   }

    // GetMediaSource
   GetMediaSource(Name) {
  return this.sageAPI.invoke("GetMediaSource", {
'Name':Name
});
   }

    // GetMediaView
   GetMediaView(Name, Data) {
  return this.sageAPI.invoke("GetMediaView", {
'Name':Name
,
'Data':Data
});
   }

    // GetNodeChildAt
   GetNodeChildAt(MediaNode, Index) {
  return this.sageAPI.invoke("GetNodeChildAt", {
'MediaNode':MediaNode.ID
,
'Index':Index
});
   }

    // GetNodeChildren
   GetNodeChildren(MediaNode) {
  if (typeof MediaNode.NodeChildren !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeChildren);
  });
  return this.sageAPI.invoke("GetNodeChildren", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeDataObject
   GetNodeDataObject(MediaNode) {
  if (typeof MediaNode.NodeDataObject !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeDataObject);
  });
  return this.sageAPI.invoke("GetNodeDataObject", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeDataType
   GetNodeDataType(MediaNode) {
  if (typeof MediaNode.NodeDataType !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeDataType);
  });
  return this.sageAPI.invoke("GetNodeDataType", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeFilterTechnique
   GetNodeFilterTechnique(MediaNode, FilterIndex) {
  return this.sageAPI.invoke("GetNodeFilterTechnique", {
'MediaNode':MediaNode.ID
,
'FilterIndex':FilterIndex
});
   }

    // GetNodeFullPath
   GetNodeFullPath(MediaNode) {
  if (typeof MediaNode.NodeFullPath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeFullPath);
  });
  return this.sageAPI.invoke("GetNodeFullPath", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeIcon
   GetNodeIcon(MediaNode) {
  if (typeof MediaNode.NodeIcon !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeIcon);
  });
  return this.sageAPI.invoke("GetNodeIcon", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeNumChildren
   GetNodeNumChildren(MediaNode) {
  if (typeof MediaNode.NodeNumChildren !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeNumChildren);
  });
  return this.sageAPI.invoke("GetNodeNumChildren", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeNumFilters
   GetNodeNumFilters(MediaNode) {
  if (typeof MediaNode.NodeNumFilters !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeNumFilters);
  });
  return this.sageAPI.invoke("GetNodeNumFilters", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeParent
   GetNodeParent(MediaNode) {
  if (typeof MediaNode.NodeParent !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeParent);
  });
  return this.sageAPI.invoke("GetNodeParent", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodePrimaryLabel
   GetNodePrimaryLabel(MediaNode) {
  if (typeof MediaNode.NodePrimaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodePrimaryLabel);
  });
  return this.sageAPI.invoke("GetNodePrimaryLabel", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeProperty
   GetNodeProperty(MediaNode, PropertyName) {
  return this.sageAPI.invoke("GetNodeProperty", {
'MediaNode':MediaNode.ID
,
'PropertyName':PropertyName
});
   }

    // GetNodeSecondaryLabel
   GetNodeSecondaryLabel(MediaNode) {
  if (typeof MediaNode.NodeSecondaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSecondaryLabel);
  });
  return this.sageAPI.invoke("GetNodeSecondaryLabel", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeSortTechnique
   GetNodeSortTechnique(MediaNode) {
  if (typeof MediaNode.NodeSortTechnique !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSortTechnique);
  });
  return this.sageAPI.invoke("GetNodeSortTechnique", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeThumbnail
   GetNodeThumbnail(MediaNode) {
  if (typeof MediaNode.NodeThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeThumbnail);
  });
  return this.sageAPI.invoke("GetNodeThumbnail", {
'MediaNode':MediaNode.ID
});
   }

    // GetNodeTypePath
   GetNodeTypePath(MediaNode) {
  if (typeof MediaNode.NodeTypePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeTypePath);
  });
  return this.sageAPI.invoke("GetNodeTypePath", {
'MediaNode':MediaNode.ID
});
   }

    // GetRelativeMediaSource
   GetRelativeMediaSource(Name, RelativeRoot) {
  return this.sageAPI.invoke("GetRelativeMediaSource", {
'Name':Name
,
'RelativeRoot':RelativeRoot
});
   }

    // IsMediaNodeObject
   IsMediaNodeObject(Object) {
  return this.sageAPI.invoke("IsMediaNodeObject", {
'Object':Object
});
   }

    // IsNodeFilterMatching
   IsNodeFilterMatching(MediaNode, FilterIndex) {
  return this.sageAPI.invoke("IsNodeFilterMatching", {
'MediaNode':MediaNode.ID
,
'FilterIndex':FilterIndex
});
   }

    // IsNodeFolder
   IsNodeFolder(MediaNode) {
  if (typeof MediaNode.NodeFolder !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeFolder);
  });
  return this.sageAPI.invoke("IsNodeFolder", {
'MediaNode':MediaNode.ID
});
   }

    // IsNodeHierarchyRealized
   IsNodeHierarchyRealized(MediaNode) {
  if (typeof MediaNode.NodeHierarchyRealized !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeHierarchyRealized);
  });
  return this.sageAPI.invoke("IsNodeHierarchyRealized", {
'MediaNode':MediaNode.ID
});
   }

    // IsNodePlayable
   IsNodePlayable(MediaNode) {
  if (typeof MediaNode.NodePlayable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodePlayable);
  });
  return this.sageAPI.invoke("IsNodePlayable", {
'MediaNode':MediaNode.ID
});
   }

    // IsNodeSortAscending
   IsNodeSortAscending(MediaNode) {
  if (typeof MediaNode.NodeSortAscending !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSortAscending);
  });
  return this.sageAPI.invoke("IsNodeSortAscending", {
'MediaNode':MediaNode.ID
});
   }

    // IsNodeVirtual
   IsNodeVirtual(MediaNode) {
  if (typeof MediaNode.NodeVirtual !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeVirtual);
  });
  return this.sageAPI.invoke("IsNodeVirtual", {
'MediaNode':MediaNode.ID
});
   }

    // RefreshNode
   RefreshNode(MediaNode) {
  return this.sageAPI.invoke("RefreshNode", {
'MediaNode':MediaNode.ID
});
   }

    // SetAllChildrenChecked
   SetAllChildrenChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetAllChildrenChecked", {
'MediaNode':MediaNode.ID
,
'State':State
});
   }

    // SetNodeChecked
   SetNodeChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetNodeChecked", {
'MediaNode':MediaNode.ID
,
'State':State
});
   }

    // SetNodeFilter
   SetNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("SetNodeFilter", {
'MediaNode':MediaNode.ID
,
'Technique':Technique
,
'MatchPasses':MatchPasses
});
   }

    // SetNodeSort
   SetNodeSort(MediaNode, Technique, Ascending) {
  return this.sageAPI.invoke("SetNodeSort", {
'MediaNode':MediaNode.ID
,
'Technique':Technique
,
'Ascending':Ascending
});
   }
}

    export default MediaNodeAPI;
