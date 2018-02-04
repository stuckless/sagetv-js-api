class SystemMessageAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // DeleteAllSystemMessages
   DeleteAllSystemMessages() {
  return this.sageAPI.invoke("DeleteAllSystemMessages", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteSystemMessage
   DeleteSystemMessage(message) {
  return this.sageAPI.invoke("DeleteSystemMessage", [message]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSystemAlertLevel
   GetSystemAlertLevel() {
  return this.sageAPI.invoke("GetSystemAlertLevel", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSystemMessageEndTime
   GetSystemMessageEndTime(message) {
  if (typeof message.EndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.EndTime);
  });
  return this.sageAPI.invoke("GetSystemMessageEndTime", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.EndTime=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageLevel
   GetSystemMessageLevel(message) {
  if (typeof message.Level !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.Level);
  });
  return this.sageAPI.invoke("GetSystemMessageLevel", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.Level=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageRepeatCount
   GetSystemMessageRepeatCount(message) {
  if (typeof message.RepeatCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.RepeatCount);
  });
  return this.sageAPI.invoke("GetSystemMessageRepeatCount", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.RepeatCount=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageString
   GetSystemMessageString(message) {
  if (typeof message.String !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.String);
  });
  return this.sageAPI.invoke("GetSystemMessageString", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.String=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTime
   GetSystemMessageTime(message) {
  if (typeof message.Time !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.Time);
  });
  return this.sageAPI.invoke("GetSystemMessageTime", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.Time=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTypeCode
   GetSystemMessageTypeCode(message) {
  if (typeof message.TypeCode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.TypeCode);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeCode", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.TypeCode=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTypeName
   GetSystemMessageTypeName(message) {
  if (typeof message.TypeName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.TypeName);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeName", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.TypeName=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageVariable
   GetSystemMessageVariable(message, VarName) {
  return this.sageAPI.invoke("GetSystemMessageVariable", [message,VarName]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSystemMessageVariableNames
   GetSystemMessageVariableNames(message) {
  if (typeof message.VariableNames !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.VariableNames);
  });
  return this.sageAPI.invoke("GetSystemMessageVariableNames", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.VariableNames=json.Result;
  return json.Result;
});
   }

    // GetSystemMessages
   GetSystemMessages() {
  return this.sageAPI.invoke("GetSystemMessages", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsSystemMessageObject
   IsSystemMessageObject(SystemMessage) {
  return this.sageAPI.invoke("IsSystemMessageObject", [SystemMessage.SystemMessageID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // PostSystemMessage
   PostSystemMessage(MessageCode, MessageLevel, MessageString, MessageVariables) {
  return this.sageAPI.invoke("PostSystemMessage", [MessageCode,MessageLevel,MessageString,MessageVariables]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // ResetSystemAlertLevel
   ResetSystemAlertLevel() {
  return this.sageAPI.invoke("ResetSystemAlertLevel", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default SystemMessageAPI;
