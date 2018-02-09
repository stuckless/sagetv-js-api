class UserRecordAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddUserRecord
   AddUserRecord(Store, Key) {
  return this.sageAPI.invoke("AddUserRecord", [Store,Key]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteAllUserRecords
   DeleteAllUserRecords(Store) {
  return this.sageAPI.invoke("DeleteAllUserRecords", [Store]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DeleteUserRecord
   DeleteUserRecord(UserRecord) {
  return this.sageAPI.invoke("DeleteUserRecord", [UserRecord.UserRecordID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllUserRecords
   GetAllUserRecords(Store) {
  return this.sageAPI.invoke("GetAllUserRecords", [Store]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllUserStores
   GetAllUserStores() {
  return this.sageAPI.invoke("GetAllUserStores", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUserRecord
   GetUserRecord(Store, Key) {
  return this.sageAPI.invoke("GetUserRecord", [Store,Key]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUserRecordData
   GetUserRecordData(UserRecord, Name) {
  return this.sageAPI.invoke("GetUserRecordData", [UserRecord.UserRecordID,Name]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetUserRecordNames
   GetUserRecordNames(UserRecord) {
  if (typeof UserRecord.UserRecordNames !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(UserRecord.UserRecordNames);
  });
  return this.sageAPI.invoke("GetUserRecordNames", [UserRecord.UserRecordID]).then((json)=>{
  if (!json || !json.Result) return null;
  UserRecord.UserRecordNames=json.Result;
  return json.Result;
});
   }

    // IsUserRecordObject
   IsUserRecordObject(UserRecord) {
  return this.sageAPI.invoke("IsUserRecordObject", [UserRecord.UserRecordID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetUserRecordData
   SetUserRecordData(UserRecord, Name, Value) {
  return this.sageAPI.invoke("SetUserRecordData", [UserRecord.UserRecordID,Name,Value]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

UserRecordAPI.UserRecordNames="UserRecordNames";
    export default UserRecordAPI;
