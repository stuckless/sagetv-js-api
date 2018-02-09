class WidgetAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddWidget
   AddWidget(WidgetType) {
  return this.sageAPI.invoke("AddWidget", [WidgetType]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddWidgetChild
   AddWidgetChild(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("AddWidgetChild", [WidgetParent,WidgetChild]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // AddWidgetWithSymbol
   AddWidgetWithSymbol(WidgetType, Symbol) {
  return this.sageAPI.invoke("AddWidgetWithSymbol", [WidgetType,Symbol]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // EvaluateExpression
   EvaluateExpression(Expression) {
  return this.sageAPI.invoke("EvaluateExpression", [Expression]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ExecuteWidgetChain
   ExecuteWidgetChain(Widget) {
  return this.sageAPI.invoke("ExecuteWidgetChain", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ExecuteWidgetChainInCurrentMenuContext
   ExecuteWidgetChainInCurrentMenuContext(Widget) {
  return this.sageAPI.invoke("ExecuteWidgetChainInCurrentMenuContext", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FindWidgetBySymbol
   FindWidgetBySymbol(Symbol) {
  return this.sageAPI.invoke("FindWidgetBySymbol", [Symbol]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllWidgets
   GetAllWidgets() {
  return this.sageAPI.invoke("GetAllWidgets", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentMenuWidget
   GetCurrentMenuWidget() {
  return this.sageAPI.invoke("GetCurrentMenuWidget", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetCurrentSTVFile
   GetCurrentSTVFile() {
  return this.sageAPI.invoke("GetCurrentSTVFile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDefaultSTVFile
   GetDefaultSTVFile() {
  return this.sageAPI.invoke("GetDefaultSTVFile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSTVName
   GetSTVName() {
  return this.sageAPI.invoke("GetSTVName", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSTVVersion
   GetSTVVersion() {
  return this.sageAPI.invoke("GetSTVVersion", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUIWidgetContext
   GetUIWidgetContext() {
  return this.sageAPI.invoke("GetUIWidgetContext", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetChild
   GetWidgetChild(Widget, Type, Name) {
  return this.sageAPI.invoke("GetWidgetChild", [Widget.WidgetID,Type,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetChildren
   GetWidgetChildren(Widget) {
  return this.sageAPI.invoke("GetWidgetChildren", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetMenuBackHistory
   GetWidgetMenuBackHistory() {
  return this.sageAPI.invoke("GetWidgetMenuBackHistory", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetMenuHistory
   GetWidgetMenuHistory() {
  return this.sageAPI.invoke("GetWidgetMenuHistory", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetName
   GetWidgetName(Widget) {
  if (typeof Widget.WidgetName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.WidgetName);
  });
  return this.sageAPI.invoke("GetWidgetName", [Widget.WidgetID]).then((json)=>{
  if (!json || !json.Result) return null;
  Widget.WidgetName=json.Result;
  return json.Result;
});
   }

    // GetWidgetParent
   GetWidgetParent(Widget, Type, Name) {
  return this.sageAPI.invoke("GetWidgetParent", [Widget.WidgetID,Type,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetParents
   GetWidgetParents(Widget) {
  return this.sageAPI.invoke("GetWidgetParents", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetProperty
   GetWidgetProperty(Widget, PropertyName) {
  return this.sageAPI.invoke("GetWidgetProperty", [Widget.WidgetID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetWidgetSymbol
   GetWidgetSymbol(Widget) {
  if (typeof Widget.WidgetSymbol !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.WidgetSymbol);
  });
  return this.sageAPI.invoke("GetWidgetSymbol", [Widget.WidgetID]).then((json)=>{
  if (!json || !json.Result) return null;
  Widget.WidgetSymbol=json.Result;
  return json.Result;
});
   }

    // GetWidgetType
   GetWidgetType(Widget) {
  if (typeof Widget.WidgetType !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Widget.WidgetType);
  });
  return this.sageAPI.invoke("GetWidgetType", [Widget.WidgetID]).then((json)=>{
  if (!json || !json.Result) return null;
  Widget.WidgetType=json.Result;
  return json.Result;
});
   }

    // GetWidgetsByType
   GetWidgetsByType(WidgetType) {
  return this.sageAPI.invoke("GetWidgetsByType", [WidgetType]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasWidgetProperty
   HasWidgetProperty(Widget, PropertyName) {
  return this.sageAPI.invoke("HasWidgetProperty", [Widget.WidgetID,PropertyName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ImportSTVFile
   ImportSTVFile(STVFile) {
  return this.sageAPI.invoke("ImportSTVFile", [STVFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // InsertWidgetChild
   InsertWidgetChild(WidgetParent, WidgetChild, ChildIndex) {
  return this.sageAPI.invoke("InsertWidgetChild", [WidgetParent,WidgetChild,ChildIndex]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSTVModified
   IsSTVModified() {
  return this.sageAPI.invoke("IsSTVModified", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsWidgetParentOf
   IsWidgetParentOf(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("IsWidgetParentOf", [WidgetParent,WidgetChild]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LaunchMenuWidget
   LaunchMenuWidget(Widget) {
  return this.sageAPI.invoke("LaunchMenuWidget", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // LoadSTVFile
   LoadSTVFile(STVFile) {
  return this.sageAPI.invoke("LoadSTVFile", [STVFile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveWidget
   RemoveWidget(Widget) {
  return this.sageAPI.invoke("RemoveWidget", [Widget.WidgetID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveWidgetChild
   RemoveWidgetChild(WidgetParent, WidgetChild) {
  return this.sageAPI.invoke("RemoveWidgetChild", [WidgetParent,WidgetChild]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SaveWidgetsAsXML
   SaveWidgetsAsXML(File, Overwrite) {
  return this.sageAPI.invoke("SaveWidgetsAsXML", [File,Overwrite]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWidgetName
   SetWidgetName(Widget, Name) {
  return this.sageAPI.invoke("SetWidgetName", [Widget.WidgetID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetWidgetProperty
   SetWidgetProperty(Widget, PropertyName, PropertyValue) {
  return this.sageAPI.invoke("SetWidgetProperty", [Widget.WidgetID,PropertyName,PropertyValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

WidgetAPI.WidgetName="WidgetName";
WidgetAPI.WidgetSymbol="WidgetSymbol";
WidgetAPI.WidgetType="WidgetType";
    export default WidgetAPI;
