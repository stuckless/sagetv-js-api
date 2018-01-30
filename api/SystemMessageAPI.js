class SystemMessageAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // DeleteAllSystemMessages
   DeleteAllSystemMessages() {
  return this.sageAPI.invoke("DeleteAllSystemMessages", {
});
   }

    // DeleteSystemMessage
   DeleteSystemMessage(message) {
  return this.sageAPI.invoke("DeleteSystemMessage", {
'message':message
});
   }

    // GetSystemAlertLevel
   GetSystemAlertLevel() {
  return this.sageAPI.invoke("GetSystemAlertLevel", {
});
   }

    // GetSystemMessageEndTime
   GetSystemMessageEndTime(message) {
  if (typeof message.EndTime !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.EndTime);
  });
  return this.sageAPI.invoke("GetSystemMessageEndTime", {
'message':message
});
   }

    // GetSystemMessageLevel
   GetSystemMessageLevel(message) {
  if (typeof message.Level !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.Level);
  });
  return this.sageAPI.invoke("GetSystemMessageLevel", {
'message':message
});
   }

    // GetSystemMessageRepeatCount
   GetSystemMessageRepeatCount(message) {
  if (typeof message.RepeatCount !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.RepeatCount);
  });
  return this.sageAPI.invoke("GetSystemMessageRepeatCount", {
'message':message
});
   }

    // GetSystemMessageString
   GetSystemMessageString(message) {
  if (typeof message.String !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.String);
  });
  return this.sageAPI.invoke("GetSystemMessageString", {
'message':message
});
   }

    // GetSystemMessageTime
   GetSystemMessageTime(message) {
  if (typeof message.Time !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.Time);
  });
  return this.sageAPI.invoke("GetSystemMessageTime", {
'message':message
});
   }

    // GetSystemMessageTypeCode
   GetSystemMessageTypeCode(message) {
  if (typeof message.TypeCode !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.TypeCode);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeCode", {
'message':message
});
   }

    // GetSystemMessageTypeName
   GetSystemMessageTypeName(message) {
  if (typeof message.TypeName !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.TypeName);
  });
  return this.sageAPI.invoke("GetSystemMessageTypeName", {
'message':message
});
   }

    // GetSystemMessageVariable
   GetSystemMessageVariable(message, VarName) {
  return this.sageAPI.invoke("GetSystemMessageVariable", {
'message':message
,
'VarName':VarName
});
   }

    // GetSystemMessageVariableNames
   GetSystemMessageVariableNames(message) {
  if (typeof message.VariableNames !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(message.VariableNames);
  });
  return this.sageAPI.invoke("GetSystemMessageVariableNames", {
'message':message
});
   }

    // GetSystemMessages
   GetSystemMessages() {
  return this.sageAPI.invoke("GetSystemMessages", {
});
   }

    // IsSystemMessageObject
   IsSystemMessageObject(SystemMessage) {
  return this.sageAPI.invoke("IsSystemMessageObject", {
'SystemMessage':SystemMessage.ID
});
   }

    // PostSystemMessage
   PostSystemMessage(MessageCode, MessageLevel, MessageString, MessageVariables) {
  return this.sageAPI.invoke("PostSystemMessage", {
'MessageCode':MessageCode
,
'MessageLevel':MessageLevel
,
'MessageString':MessageString
,
'MessageVariables':MessageVariables
});
   }

    // ResetSystemAlertLevel
   ResetSystemAlertLevel() {
  return this.sageAPI.invoke("ResetSystemAlertLevel", {
});
   }
}

    export default SystemMessageAPI;
