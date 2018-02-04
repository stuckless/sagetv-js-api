class MediaNodeAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AppendNodeFilter
   AppendNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("AppendNodeFilter", [MediaNode.MediaNodeID,Technique,MatchPasses]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // CreateMediaNode
   CreateMediaNode(PrimaryLabel, SecondaryLabel, Thumbnail, Icon, DataObject) {
  return this.sageAPI.invoke("CreateMediaNode", [PrimaryLabel,SecondaryLabel,Thumbnail,Icon,DataObject]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllNodeDescendants
   GetAllNodeDescendants(MediaNode) {
  if (typeof MediaNode.AllNodeDescendants !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.AllNodeDescendants);
  });
  return this.sageAPI.invoke("GetAllNodeDescendants", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.AllNodeDescendants=json.Result;
  return json.Result;
});
   }

    // GetChildrenCheckedCount
   GetChildrenCheckedCount(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedCount", [MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChildrenCheckedNodes
   GetChildrenCheckedNodes(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedNodes", [MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaSource
   GetMediaSource(Name) {
  return this.sageAPI.invoke("GetMediaSource", [Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaView
   GetMediaView(Name, Data) {
  return this.sageAPI.invoke("GetMediaView", [Name,Data]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeChildAt
   GetNodeChildAt(MediaNode, Index) {
  return this.sageAPI.invoke("GetNodeChildAt", [MediaNode.MediaNodeID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeChildren
   GetNodeChildren(MediaNode) {
  if (typeof MediaNode.NodeChildren !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeChildren);
  });
  return this.sageAPI.invoke("GetNodeChildren", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeChildren=json.Result;
  return json.Result;
});
   }

    // GetNodeDataObject
   GetNodeDataObject(MediaNode) {
  if (typeof MediaNode.NodeDataObject !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeDataObject);
  });
  return this.sageAPI.invoke("GetNodeDataObject", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeDataObject=json.Result;
  return json.Result;
});
   }

    // GetNodeDataType
   GetNodeDataType(MediaNode) {
  if (typeof MediaNode.NodeDataType !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeDataType);
  });
  return this.sageAPI.invoke("GetNodeDataType", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeDataType=json.Result;
  return json.Result;
});
   }

    // GetNodeFilterTechnique
   GetNodeFilterTechnique(MediaNode, FilterIndex) {
  return this.sageAPI.invoke("GetNodeFilterTechnique", [MediaNode.MediaNodeID,FilterIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeFullPath
   GetNodeFullPath(MediaNode) {
  if (typeof MediaNode.NodeFullPath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeFullPath);
  });
  return this.sageAPI.invoke("GetNodeFullPath", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeFullPath=json.Result;
  return json.Result;
});
   }

    // GetNodeIcon
   GetNodeIcon(MediaNode) {
  if (typeof MediaNode.NodeIcon !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeIcon);
  });
  return this.sageAPI.invoke("GetNodeIcon", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeIcon=json.Result;
  return json.Result;
});
   }

    // GetNodeNumChildren
   GetNodeNumChildren(MediaNode) {
  if (typeof MediaNode.NodeNumChildren !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeNumChildren);
  });
  return this.sageAPI.invoke("GetNodeNumChildren", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeNumChildren=json.Result;
  return json.Result;
});
   }

    // GetNodeNumFilters
   GetNodeNumFilters(MediaNode) {
  if (typeof MediaNode.NodeNumFilters !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeNumFilters);
  });
  return this.sageAPI.invoke("GetNodeNumFilters", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeNumFilters=json.Result;
  return json.Result;
});
   }

    // GetNodeParent
   GetNodeParent(MediaNode) {
  if (typeof MediaNode.NodeParent !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeParent);
  });
  return this.sageAPI.invoke("GetNodeParent", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeParent=json.Result;
  return json.Result;
});
   }

    // GetNodePrimaryLabel
   GetNodePrimaryLabel(MediaNode) {
  if (typeof MediaNode.NodePrimaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodePrimaryLabel);
  });
  return this.sageAPI.invoke("GetNodePrimaryLabel", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodePrimaryLabel=json.Result;
  return json.Result;
});
   }

    // GetNodeProperty
   GetNodeProperty(MediaNode, PropertyName) {
  return this.sageAPI.invoke("GetNodeProperty", [MediaNode.MediaNodeID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeSecondaryLabel
   GetNodeSecondaryLabel(MediaNode) {
  if (typeof MediaNode.NodeSecondaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSecondaryLabel);
  });
  return this.sageAPI.invoke("GetNodeSecondaryLabel", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeSecondaryLabel=json.Result;
  return json.Result;
});
   }

    // GetNodeSortTechnique
   GetNodeSortTechnique(MediaNode) {
  if (typeof MediaNode.NodeSortTechnique !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSortTechnique);
  });
  return this.sageAPI.invoke("GetNodeSortTechnique", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeSortTechnique=json.Result;
  return json.Result;
});
   }

    // GetNodeThumbnail
   GetNodeThumbnail(MediaNode) {
  if (typeof MediaNode.NodeThumbnail !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeThumbnail);
  });
  return this.sageAPI.invoke("GetNodeThumbnail", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeThumbnail=json.Result;
  return json.Result;
});
   }

    // GetNodeTypePath
   GetNodeTypePath(MediaNode) {
  if (typeof MediaNode.NodeTypePath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeTypePath);
  });
  return this.sageAPI.invoke("GetNodeTypePath", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeTypePath=json.Result;
  return json.Result;
});
   }

    // GetRelativeMediaSource
   GetRelativeMediaSource(Name, RelativeRoot) {
  return this.sageAPI.invoke("GetRelativeMediaSource", [Name,RelativeRoot]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsMediaNodeObject
   IsMediaNodeObject(Object) {
  return this.sageAPI.invoke("IsMediaNodeObject", [Object]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsNodeFilterMatching
   IsNodeFilterMatching(MediaNode, FilterIndex) {
  return this.sageAPI.invoke("IsNodeFilterMatching", [MediaNode.MediaNodeID,FilterIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsNodeFolder
   IsNodeFolder(MediaNode) {
  if (typeof MediaNode.IsNodeFolder !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodeFolder);
  });
  return this.sageAPI.invoke("IsNodeFolder", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodeFolder=json.Result;
  return json.Result;
});
   }

    // IsNodeHierarchyRealized
   IsNodeHierarchyRealized(MediaNode) {
  if (typeof MediaNode.IsNodeHierarchyRealized !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodeHierarchyRealized);
  });
  return this.sageAPI.invoke("IsNodeHierarchyRealized", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodeHierarchyRealized=json.Result;
  return json.Result;
});
   }

    // IsNodePlayable
   IsNodePlayable(MediaNode) {
  if (typeof MediaNode.IsNodePlayable !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodePlayable);
  });
  return this.sageAPI.invoke("IsNodePlayable", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodePlayable=json.Result;
  return json.Result;
});
   }

    // IsNodeSortAscending
   IsNodeSortAscending(MediaNode) {
  if (typeof MediaNode.IsNodeSortAscending !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodeSortAscending);
  });
  return this.sageAPI.invoke("IsNodeSortAscending", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodeSortAscending=json.Result;
  return json.Result;
});
   }

    // IsNodeVirtual
   IsNodeVirtual(MediaNode) {
  if (typeof MediaNode.IsNodeVirtual !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodeVirtual);
  });
  return this.sageAPI.invoke("IsNodeVirtual", [MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodeVirtual=json.Result;
  return json.Result;
});
   }

    // RefreshNode
   RefreshNode(MediaNode) {
  return this.sageAPI.invoke("RefreshNode", [MediaNode.MediaNodeID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAllChildrenChecked
   SetAllChildrenChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetAllChildrenChecked", [MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeChecked
   SetNodeChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetNodeChecked", [MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeFilter
   SetNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("SetNodeFilter", [MediaNode.MediaNodeID,Technique,MatchPasses]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeSort
   SetNodeSort(MediaNode, Technique, Ascending) {
  return this.sageAPI.invoke("SetNodeSort", [MediaNode.MediaNodeID,Technique,Ascending]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default MediaNodeAPI;
