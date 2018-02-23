class Security {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddSecurityProfile
   AddSecurityProfile(Profile) {
  return this.sageAPI.invoke("AddSecurityProfile", [Profile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetActiveSecurityProfile
   GetActiveSecurityProfile() {
  return this.sageAPI.invoke("GetActiveSecurityProfile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDefaultSecurityProfile
   GetDefaultSecurityProfile() {
  return this.sageAPI.invoke("GetDefaultSecurityProfile", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPredefinedPermissions
   GetPredefinedPermissions() {
  return this.sageAPI.invoke("GetPredefinedPermissions", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetSecurityProfiles
   GetSecurityProfiles() {
  return this.sageAPI.invoke("GetSecurityProfiles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasPermission
   HasPermission(Permission, Profile) {
  return this.sageAPI.invoke("HasPermission", [Permission,Profile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasPermission
   HasPermission(Permission) {
  return this.sageAPI.invoke("HasPermission", [Permission]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // RemoveSecurityProfile
   RemoveSecurityProfile(Profile) {
  return this.sageAPI.invoke("RemoveSecurityProfile", [Profile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetActiveSecurityProfile
   SetActiveSecurityProfile(Profile) {
  return this.sageAPI.invoke("SetActiveSecurityProfile", [Profile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetDefaultSecurityProfile
   SetDefaultSecurityProfile(Profile) {
  return this.sageAPI.invoke("SetDefaultSecurityProfile", [Profile]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SetPermission
   SetPermission(Permission, Profile, Allowed) {
  return this.sageAPI.invoke("SetPermission", [Permission,Profile,Allowed]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for null
    export default Security;
