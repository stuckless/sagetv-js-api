class PersonAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetPersonBirthplace
   GetPersonBirthplace(Person) {
  if (typeof Person.Birthplace !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.Birthplace);
  });
  return this.sageAPI.invoke("GetPersonBirthplace", {
'Person':Person.ID
});
   }

    // GetPersonDateOfBirth
   GetPersonDateOfBirth(Person) {
  if (typeof Person.DateOfBirth !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.DateOfBirth);
  });
  return this.sageAPI.invoke("GetPersonDateOfBirth", {
'Person':Person.ID
});
   }

    // GetPersonDateOfDeath
   GetPersonDateOfDeath(Person) {
  if (typeof Person.DateOfDeath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.DateOfDeath);
  });
  return this.sageAPI.invoke("GetPersonDateOfDeath", {
'Person':Person.ID
});
   }

    // GetPersonForID
   GetPersonForID(PersonID) {
  return this.sageAPI.invoke("GetPersonForID", {
'PersonID':PersonID
});
   }

    // GetPersonID
   GetPersonID(Person) {
  if (typeof Person.ID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.ID);
  });
  return this.sageAPI.invoke("GetPersonID", {
'Person':Person.ID
});
   }

    // GetPersonImage
   GetPersonImage(Person, Thumb) {
  return this.sageAPI.invoke("GetPersonImage", {
'Person':Person.ID
,
'Thumb':Thumb
});
   }

    // GetPersonImageURL
   GetPersonImageURL(Person, Thumb) {
  return this.sageAPI.invoke("GetPersonImageURL", {
'Person':Person.ID
,
'Thumb':Thumb
});
   }

    // HasPersonImage
   HasPersonImage(Person) {
  if (typeof Person.Image !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.Image);
  });
  return this.sageAPI.invoke("HasPersonImage", {
'Person':Person.ID
});
   }

    // IsPersonObject
   IsPersonObject(Object) {
  return this.sageAPI.invoke("IsPersonObject", {
'Object':Object
});
   }
}

    export default PersonAPI;
