class MediaNodeAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AppendNodeFilter
   AppendNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("AppendNodeFilter", ['medianode:'+MediaNode.MediaNodeID,Technique,MatchPasses]).then((json)=>{
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
  return this.sageAPI.invoke("GetAllNodeDescendants", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.AllNodeDescendants=json.Result;
  return json.Result;
});
   }

    // GetChildrenCheckedCount
   GetChildrenCheckedCount(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedCount", ['medianode:'+MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChildrenCheckedNodes
   GetChildrenCheckedNodes(MediaNode, State) {
  return this.sageAPI.invoke("GetChildrenCheckedNodes", ['medianode:'+MediaNode.MediaNodeID,State]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeChildAt", ['medianode:'+MediaNode.MediaNodeID,Index]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeChildren
   GetNodeChildren(MediaNode) {
  return this.sageAPI.invoke("GetNodeChildren", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeDataObject
   GetNodeDataObject(MediaNode) {
  if (typeof MediaNode.NodeDataObject !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeDataObject);
  });
  return this.sageAPI.invoke("GetNodeDataObject", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeDataType", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeDataType=json.Result;
  return json.Result;
});
   }

    // GetNodeFilterTechnique
   GetNodeFilterTechnique(MediaNode, FilterIndex) {
  return this.sageAPI.invoke("GetNodeFilterTechnique", ['medianode:'+MediaNode.MediaNodeID,FilterIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeFullPath
   GetNodeFullPath(MediaNode) {
  if (typeof MediaNode.NodeFullPath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeFullPath);
  });
  return this.sageAPI.invoke("GetNodeFullPath", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeIcon", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeNumChildren", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeNumFilters", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodeNumFilters=json.Result;
  return json.Result;
});
   }

    // GetNodeParent
   GetNodeParent(MediaNode) {
  return this.sageAPI.invoke("GetNodeParent", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodePrimaryLabel
   GetNodePrimaryLabel(MediaNode) {
  if (typeof MediaNode.NodePrimaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodePrimaryLabel);
  });
  return this.sageAPI.invoke("GetNodePrimaryLabel", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.NodePrimaryLabel=json.Result;
  return json.Result;
});
   }

    // GetNodeProperty
   GetNodeProperty(MediaNode, PropertyName) {
  return this.sageAPI.invoke("GetNodeProperty", ['medianode:'+MediaNode.MediaNodeID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetNodeSecondaryLabel
   GetNodeSecondaryLabel(MediaNode) {
  if (typeof MediaNode.NodeSecondaryLabel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.NodeSecondaryLabel);
  });
  return this.sageAPI.invoke("GetNodeSecondaryLabel", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeSortTechnique", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeThumbnail", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("GetNodeTypePath", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNodeFilterMatching", ['medianode:'+MediaNode.MediaNodeID,FilterIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsNodeFolder
   IsNodeFolder(MediaNode) {
  if (typeof MediaNode.IsNodeFolder !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(MediaNode.IsNodeFolder);
  });
  return this.sageAPI.invoke("IsNodeFolder", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNodeHierarchyRealized", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNodePlayable", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNodeSortAscending", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
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
  return this.sageAPI.invoke("IsNodeVirtual", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
  if (!json || !json.Result) return null;
  MediaNode.IsNodeVirtual=json.Result;
  return json.Result;
});
   }

    // RefreshNode
   RefreshNode(MediaNode) {
  return this.sageAPI.invoke("RefreshNode", ['medianode:'+MediaNode.MediaNodeID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetAllChildrenChecked
   SetAllChildrenChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetAllChildrenChecked", ['medianode:'+MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeChecked
   SetNodeChecked(MediaNode, State) {
  return this.sageAPI.invoke("SetNodeChecked", ['medianode:'+MediaNode.MediaNodeID,State]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeFilter
   SetNodeFilter(MediaNode, Technique, MatchPasses) {
  return this.sageAPI.invoke("SetNodeFilter", ['medianode:'+MediaNode.MediaNodeID,Technique,MatchPasses]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetNodeSort
   SetNodeSort(MediaNode, Technique, Ascending) {
  return this.sageAPI.invoke("SetNodeSort", ['medianode:'+MediaNode.MediaNodeID,Technique,Ascending]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for MediaNode
MediaNodeAPI.AllNodeDescendants="AllNodeDescendants";
MediaNodeAPI.NodeDataObject="NodeDataObject";
MediaNodeAPI.NodeDataType="NodeDataType";
MediaNodeAPI.NodeFullPath="NodeFullPath";
MediaNodeAPI.NodeIcon="NodeIcon";
MediaNodeAPI.NodeNumChildren="NodeNumChildren";
MediaNodeAPI.NodeNumFilters="NodeNumFilters";
MediaNodeAPI.NodePrimaryLabel="NodePrimaryLabel";
MediaNodeAPI.NodeSecondaryLabel="NodeSecondaryLabel";
MediaNodeAPI.NodeSortTechnique="NodeSortTechnique";
MediaNodeAPI.NodeThumbnail="NodeThumbnail";
MediaNodeAPI.NodeTypePath="NodeTypePath";
MediaNodeAPI.IsNodeFolder="IsNodeFolder";
MediaNodeAPI.IsNodeHierarchyRealized="IsNodeHierarchyRealized";
MediaNodeAPI.IsNodePlayable="IsNodePlayable";
MediaNodeAPI.IsNodeSortAscending="IsNodeSortAscending";
MediaNodeAPI.IsNodeVirtual="IsNodeVirtual";
    export default MediaNodeAPI;
