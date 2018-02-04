class PersonAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetPersonBirthplace
   GetPersonBirthplace(Person) {
  if (typeof Person.Birthplace !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.Birthplace);
  });
  return this.sageAPI.invoke("GetPersonBirthplace", [Person.PersonID]).then((json)=>{
  if (!json || !json.Result) return null;
  Person.Birthplace=json.Result;
  return json.Result;
});
   }

    // GetPersonDateOfBirth
   GetPersonDateOfBirth(Person) {
  if (typeof Person.DateOfBirth !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.DateOfBirth);
  });
  return this.sageAPI.invoke("GetPersonDateOfBirth", [Person.PersonID]).then((json)=>{
  if (!json || !json.Result) return null;
  Person.DateOfBirth=json.Result;
  return json.Result;
});
   }

    // GetPersonDateOfDeath
   GetPersonDateOfDeath(Person) {
  if (typeof Person.DateOfDeath !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.DateOfDeath);
  });
  return this.sageAPI.invoke("GetPersonDateOfDeath", [Person.PersonID]).then((json)=>{
  if (!json || !json.Result) return null;
  Person.DateOfDeath=json.Result;
  return json.Result;
});
   }

    // GetPersonForID
   GetPersonForID(PersonID) {
  return this.sageAPI.invoke("GetPersonForID", [PersonID]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonID
   GetPersonID(Person) {
  if (typeof Person.PersonID !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.PersonID);
  });
  return this.sageAPI.invoke("GetPersonID", [Person.PersonID]).then((json)=>{
  if (!json || !json.Result) return null;
  Person.PersonID=json.Result;
  return json.Result;
});
   }

    // GetPersonImage
   GetPersonImage(Person, Thumb) {
  return this.sageAPI.invoke("GetPersonImage", [Person.PersonID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetPersonImageURL
   GetPersonImageURL(Person, Thumb) {
  return this.sageAPI.invoke("GetPersonImageURL", [Person.PersonID,Thumb]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasPersonImage
   HasPersonImage(Person) {
  if (typeof Person.HasPersonImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(Person.HasPersonImage);
  });
  return this.sageAPI.invoke("HasPersonImage", [Person.PersonID]).then((json)=>{
  if (!json || !json.Result) return null;
  Person.HasPersonImage=json.Result;
  return json.Result;
});
   }

    // IsPersonObject
   IsPersonObject(Object) {
  return this.sageAPI.invoke("IsPersonObject", [Object]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

    export default PersonAPI;
