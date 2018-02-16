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
  if (typeof message.SystemMessageEndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageEndTime);
  });
  return this.sageAPI.invoke("GetSystemMessageEndTime", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageEndTime=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageLevel
   GetSystemMessageLevel(message) {
  if (typeof message.SystemMessageLevel !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageLevel);
  });
  return this.sageAPI.invoke("GetSystemMessageLevel", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageLevel=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageRepeatCount
   GetSystemMessageRepeatCount(message) {
  if (typeof message.SystemMessageRepeatCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageRepeatCount);
  });
  return this.sageAPI.invoke("GetSystemMessageRepeatCount", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageRepeatCount=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageString
   GetSystemMessageString(message) {
  if (typeof message.SystemMessageString !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageString);
  });
  return this.sageAPI.invoke("GetSystemMessageString", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageString=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTime
   GetSystemMessageTime(message) {
  if (typeof message.SystemMessageTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageTime);
  });
  return this.sageAPI.invoke("GetSystemMessageTime", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageTime=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTypeCode
   GetSystemMessageTypeCode(message) {
  if (typeof message.SystemMessageTypeCode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageTypeCode);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeCode", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageTypeCode=json.Result;
  return json.Result;
});
   }

    // GetSystemMessageTypeName
   GetSystemMessageTypeName(message) {
  if (typeof message.SystemMessageTypeName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageTypeName);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeName", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageTypeName=json.Result;
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
  if (typeof message.SystemMessageVariableNames !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.SystemMessageVariableNames);
  });
  return this.sageAPI.invoke("GetSystemMessageVariableNames", [message]).then((json)=>{
  if (!json || !json.Result) return null;
  message.SystemMessageVariableNames=json.Result;
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
  return this.sageAPI.invoke("IsSystemMessageObject", ['systemmessage:'+SystemMessage.SystemMessageID]).then((json)=>{
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

// Field Constants for SystemMessage
SystemMessageAPI.SystemMessageEndTime="SystemMessageEndTime";
SystemMessageAPI.SystemMessageLevel="SystemMessageLevel";
SystemMessageAPI.SystemMessageRepeatCount="SystemMessageRepeatCount";
SystemMessageAPI.SystemMessageString="SystemMessageString";
SystemMessageAPI.SystemMessageTime="SystemMessageTime";
SystemMessageAPI.SystemMessageTypeCode="SystemMessageTypeCode";
SystemMessageAPI.SystemMessageTypeName="SystemMessageTypeName";
SystemMessageAPI.SystemMessageVariableNames="SystemMessageVariableNames";
    export default SystemMessageAPI;
