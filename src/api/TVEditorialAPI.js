class TVEditorialAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetAllTVEditorials
   GetAllTVEditorials() {
  return this.sageAPI.invoke("GetAllTVEditorials", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetEditorialAirDate
   GetEditorialAirDate(TVEditorial) {
  if (typeof TVEditorial.EditorialAirDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialAirDate);
  });
  return this.sageAPI.invoke("GetEditorialAirDate", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialAirDate=json.Result;
  return json.Result;
});
   }

    // GetEditorialImage
   GetEditorialImage(TVEditorial) {
  if (typeof TVEditorial.EditorialImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialImage);
  });
  return this.sageAPI.invoke("GetEditorialImage", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialImage=json.Result;
  return json.Result;
});
   }

    // GetEditorialNetwork
   GetEditorialNetwork(TVEditorial) {
  if (typeof TVEditorial.EditorialNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialNetwork);
  });
  return this.sageAPI.invoke("GetEditorialNetwork", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialNetwork=json.Result;
  return json.Result;
});
   }

    // GetEditorialShow
   GetEditorialShow(TVEditorial) {
  if (typeof TVEditorial.EditorialShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialShow);
  });
  return this.sageAPI.invoke("GetEditorialShow", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialShow=json.Result;
  return json.Result;
});
   }

    // GetEditorialText
   GetEditorialText(TVEditorial) {
  if (typeof TVEditorial.EditorialText !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialText);
  });
  return this.sageAPI.invoke("GetEditorialText", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialText=json.Result;
  return json.Result;
});
   }

    // GetEditorialTitle
   GetEditorialTitle(TVEditorial) {
  if (typeof TVEditorial.EditorialTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialTitle);
  });
  return this.sageAPI.invoke("GetEditorialTitle", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.EditorialTitle=json.Result;
  return json.Result;
});
   }

    // HasEditorialImage
   HasEditorialImage(TVEditorial) {
  if (typeof TVEditorial.HasEditorialImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.HasEditorialImage);
  });
  return this.sageAPI.invoke("HasEditorialImage", ['tveditorial:'+TVEditorial.TVEditorialID]).then((json)=>{
  if (!json || !json.Result) return null;
  TVEditorial.HasEditorialImage=json.Result;
  return json.Result;
});
   }
}

// Field Constants for TVEditorial
TVEditorialAPI.EditorialAirDate="EditorialAirDate";
TVEditorialAPI.EditorialImage="EditorialImage";
TVEditorialAPI.EditorialNetwork="EditorialNetwork";
TVEditorialAPI.EditorialShow="EditorialShow";
TVEditorialAPI.EditorialText="EditorialText";
TVEditorialAPI.EditorialTitle="EditorialTitle";
TVEditorialAPI.HasEditorialImage="HasEditorialImage";
    export default TVEditorialAPI;
