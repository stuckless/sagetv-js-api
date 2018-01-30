class WidgetAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddWidget
   AddWidget(WidgetType) {
  return this.sageAPI.invoke("AddWidget", {
'WidgetType':WidgetType
});
   }

    // AddWidgetChild
   AddWidgetChild(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("AddWidgetChild", {
'WidgetParent':WidgetParent
,
'WidgetChild':WidgetChild
});
   }

    // AddWidgetWithSymbol
   AddWidgetWithSymbol(WidgetType, Symbol) {
  return this.sageAPI.invoke("AddWidgetWithSymbol", {
'WidgetType':WidgetType
,
'Symbol':Symbol
});
   }

    // EvaluateExpression
   EvaluateExpression(Expression) {
  return this.sageAPI.invoke("EvaluateExpression", {
'Expression':Expression
});
   }

    // ExecuteWidgetChain
   ExecuteWidgetChain(Widget) {
  return this.sageAPI.invoke("ExecuteWidgetChain", {
'Widget':Widget.ID
});
   }

    // ExecuteWidgetChainInCurrentMenuContext
   ExecuteWidgetChainInCurrentMenuContext(Widget) {
  return this.sageAPI.invoke("ExecuteWidgetChainInCurrentMenuContext", {
'Widget':Widget.ID
});
   }

    // FindWidgetBySymbol
   FindWidgetBySymbol(Symbol) {
  return this.sageAPI.invoke("FindWidgetBySymbol", {
'Symbol':Symbol
});
   }

    // GetAllWidgets
   GetAllWidgets() {
  return this.sageAPI.invoke("GetAllWidgets", {
});
   }

    // GetCurrentMenuWidget
   GetCurrentMenuWidget() {
  return this.sageAPI.invoke("GetCurrentMenuWidget", {
});
   }

    // GetCurrentSTVFile
   GetCurrentSTVFile() {
  return this.sageAPI.invoke("GetCurrentSTVFile", {
});
   }

    // GetDefaultSTVFile
   GetDefaultSTVFile() {
  return this.sageAPI.invoke("GetDefaultSTVFile", {
});
   }

    // GetSTVName
   GetSTVName() {
  return this.sageAPI.invoke("GetSTVName", {
});
   }

    // GetSTVVersion
   GetSTVVersion() {
  return this.sageAPI.invoke("GetSTVVersion", {
});
   }

    // GetUIWidgetContext
   GetUIWidgetContext() {
  return this.sageAPI.invoke("GetUIWidgetContext", {
});
   }

    // GetWidgetChild
   GetWidgetChild(Widget, Type, Name) {
  return this.sageAPI.invoke("GetWidgetChild", {
'Widget':Widget.ID
,
'Type':Type
,
'Name':Name
});
   }

    // GetWidgetChildren
   GetWidgetChildren(Widget) {
  if (typeof Widget.Children !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.Children);
  });
  return this.sageAPI.invoke("GetWidgetChildren", {
'Widget':Widget.ID
});
   }

    // GetWidgetMenuBackHistory
   GetWidgetMenuBackHistory() {
  return this.sageAPI.invoke("GetWidgetMenuBackHistory", {
});
   }

    // GetWidgetMenuHistory
   GetWidgetMenuHistory() {
  return this.sageAPI.invoke("GetWidgetMenuHistory", {
});
   }

    // GetWidgetName
   GetWidgetName(Widget) {
  if (typeof Widget.Name !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.Name);
  });
  return this.sageAPI.invoke("GetWidgetName", {
'Widget':Widget.ID
});
   }

    // GetWidgetParent
   GetWidgetParent(Widget, Type, Name) {
  return this.sageAPI.invoke("GetWidgetParent", {
'Widget':Widget.ID
,
'Type':Type
,
'Name':Name
});
   }

    // GetWidgetParents
   GetWidgetParents(Widget) {
  if (typeof Widget.Parents !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.Parents);
  });
  return this.sageAPI.invoke("GetWidgetParents", {
'Widget':Widget.ID
});
   }

    // GetWidgetProperty
   GetWidgetProperty(Widget, PropertyName) {
  return this.sageAPI.invoke("GetWidgetProperty", {
'Widget':Widget.ID
,
'PropertyName':PropertyName
});
   }

    // GetWidgetSymbol
   GetWidgetSymbol(Widget) {
  if (typeof Widget.Symbol !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.Symbol);
  });
  return this.sageAPI.invoke("GetWidgetSymbol", {
'Widget':Widget.ID
});
   }

    // GetWidgetType
   GetWidgetType(Widget) {
  if (typeof Widget.Type !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.Type);
  });
  return this.sageAPI.invoke("GetWidgetType", {
'Widget':Widget.ID
});
   }

    // GetWidgetsByType
   GetWidgetsByType(WidgetType) {
  return this.sageAPI.invoke("GetWidgetsByType", {
'WidgetType':WidgetType
});
   }

    // HasWidgetProperty
   HasWidgetProperty(Widget, PropertyName) {
  return this.sageAPI.invoke("HasWidgetProperty", {
'Widget':Widget.ID
,
'PropertyName':PropertyName
});
   }

    // ImportSTVFile
   ImportSTVFile(STVFile) {
  return this.sageAPI.invoke("ImportSTVFile", {
'STVFile':STVFile
});
   }

    // InsertWidgetChild
   InsertWidgetChild(WidgetParent, WidgetChild, ChildIndex) {
  return this.sageAPI.invoke("InsertWidgetChild", {
'WidgetParent':WidgetParent
,
'WidgetChild':WidgetChild
,
'ChildIndex':ChildIndex
});
   }

    // IsSTVModified
   IsSTVModified() {
  return this.sageAPI.invoke("IsSTVModified", {
});
   }

    // IsWidgetParentOf
   IsWidgetParentOf(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("IsWidgetParentOf", {
'WidgetParent':WidgetParent
,
'WidgetChild':WidgetChild
});
   }

    // LaunchMenuWidget
   LaunchMenuWidget(Widget) {
  return this.sageAPI.invoke("LaunchMenuWidget", {
'Widget':Widget.ID
});
   }

    // LoadSTVFile
   LoadSTVFile(STVFile) {
  return this.sageAPI.invoke("LoadSTVFile", {
'STVFile':STVFile
});
   }

    // RemoveWidget
   RemoveWidget(Widget) {
  return this.sageAPI.invoke("RemoveWidget", {
'Widget':Widget.ID
});
   }

    // RemoveWidgetChild
   RemoveWidgetChild(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("RemoveWidgetChild", {
'WidgetParent':WidgetParent
,
'WidgetChild':WidgetChild
});
   }

    // SaveWidgetsAsXML
   SaveWidgetsAsXML(File, Overwrite) {
  return this.sageAPI.invoke("SaveWidgetsAsXML", {
'File':File
,
'Overwrite':Overwrite
});
   }

    // SetWidgetName
   SetWidgetName(Widget, Name) {
  return this.sageAPI.invoke("SetWidgetName", {
'Widget':Widget.ID
,
'Name':Name
});
   }

    // SetWidgetProperty
   SetWidgetProperty(Widget, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetWidgetProperty", {
'Widget':Widget.ID
,
'PropertyName':PropertyName
,
'PropertyValue':PropertyValue
});
   }
}

    export default WidgetAPI;
