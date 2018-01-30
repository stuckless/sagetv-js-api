class Security {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // AddSecurityProfile
   AddSecurityProfile(Profile) {
  return this.sageAPI.invoke("AddSecurityProfile", {
'Profile':Profile
});
   }

    // GetActiveSecurityProfile
   GetActiveSecurityProfile() {
  return this.sageAPI.invoke("GetActiveSecurityProfile", {
});
   }

    // GetDefaultSecurityProfile
   GetDefaultSecurityProfile() {
  return this.sageAPI.invoke("GetDefaultSecurityProfile", {
});
   }

    // GetPredefinedPermissions
   GetPredefinedPermissions() {
  return this.sageAPI.invoke("GetPredefinedPermissions", {
});
   }

    // GetSecurityProfiles
   GetSecurityProfiles() {
  return this.sageAPI.invoke("GetSecurityProfiles", {
});
   }

    // HasPermission
   HasPermission(Permission, Profile) {
  return this.sageAPI.invoke("HasPermission", {
'Permission':Permission
,
'Profile':Profile
});
   }

    // HasPermission
   HasPermission(Permission) {
  return this.sageAPI.invoke("HasPermission", {
'Permission':Permission
});
   }

    // RemoveSecurityProfile
   RemoveSecurityProfile(Profile) {
  return this.sageAPI.invoke("RemoveSecurityProfile", {
'Profile':Profile
});
   }

    // SetActiveSecurityProfile
   SetActiveSecurityProfile(Profile) {
  return this.sageAPI.invoke("SetActiveSecurityProfile", {
'Profile':Profile
});
   }

    // SetDefaultSecurityProfile
   SetDefaultSecurityProfile(Profile) {
  return this.sageAPI.invoke("SetDefaultSecurityProfile", {
'Profile':Profile
});
   }

    // SetPermission
   SetPermission(Permission, Profile, Allowed) {
  return this.sageAPI.invoke("SetPermission", {
'Permission':Permission
,
'Profile':Profile
,
'Allowed':Allowed
});
   }
}

    export default Security;
