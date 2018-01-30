class UserRecordAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddUserRecord
   AddUserRecord(Store, Key) {
  return this.sageAPI.invoke("AddUserRecord", {
'Store':Store
,
'Key':Key
});
   }

    // DeleteAllUserRecords
   DeleteAllUserRecords(Store) {
  return this.sageAPI.invoke("DeleteAllUserRecords", {
'Store':Store
});
   }

    // DeleteUserRecord
   DeleteUserRecord(UserRecord) {
  return this.sageAPI.invoke("DeleteUserRecord", {
'UserRecord':UserRecord.ID
});
   }

    // GetAllUserRecords
   GetAllUserRecords(Store) {
  return this.sageAPI.invoke("GetAllUserRecords", {
'Store':Store
});
   }

    // GetAllUserStores
   GetAllUserStores() {
  return this.sageAPI.invoke("GetAllUserStores", {
});
   }

    // GetUserRecord
   GetUserRecord(Store, Key) {
  return this.sageAPI.invoke("GetUserRecord", {
'Store':Store
,
'Key':Key
});
   }

    // GetUserRecordData
   GetUserRecordData(UserRecord, Name) {
  return this.sageAPI.invoke("GetUserRecordData", {
'UserRecord':UserRecord.ID
,
'Name':Name
});
   }

    // GetUserRecordNames
   GetUserRecordNames(UserRecord) {
  if (typeof UserRecord.Names !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(UserRecord.Names);
  });
  return this.sageAPI.invoke("GetUserRecordNames", {
'UserRecord':UserRecord.ID
});
   }

    // IsUserRecordObject
   IsUserRecordObject(UserRecord) {
  return this.sageAPI.invoke("IsUserRecordObject", {
'UserRecord':UserRecord.ID
});
   }

    // SetUserRecordData
   SetUserRecordData(UserRecord, Name, Value) {
  return this.sageAPI.invoke("SetUserRecordData", {
'UserRecord':UserRecord.ID
,
'Name':Name
,
'Value':Value
});
   }
}

    export default UserRecordAPI;
