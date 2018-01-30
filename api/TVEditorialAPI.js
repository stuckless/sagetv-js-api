class TVEditorialAPI {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // GetAllTVEditorials
   GetAllTVEditorials() {
  return this.sageAPI.invoke("GetAllTVEditorials", {
});
   }

    // GetEditorialAirDate
   GetEditorialAirDate(TVEditorial) {
  if (typeof TVEditorial.EditorialAirDate !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialAirDate);
  });
  return this.sageAPI.invoke("GetEditorialAirDate", {
'TVEditorial':TVEditorial.ID
});
   }

    // GetEditorialImage
   GetEditorialImage(TVEditorial) {
  if (typeof TVEditorial.EditorialImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialImage);
  });
  return this.sageAPI.invoke("GetEditorialImage", {
'TVEditorial':TVEditorial.ID
});
   }

    // GetEditorialNetwork
   GetEditorialNetwork(TVEditorial) {
  if (typeof TVEditorial.EditorialNetwork !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialNetwork);
  });
  return this.sageAPI.invoke("GetEditorialNetwork", {
'TVEditorial':TVEditorial.ID
});
   }

    // GetEditorialShow
   GetEditorialShow(TVEditorial) {
  if (typeof TVEditorial.EditorialShow !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialShow);
  });
  return this.sageAPI.invoke("GetEditorialShow", {
'TVEditorial':TVEditorial.ID
});
   }

    // GetEditorialText
   GetEditorialText(TVEditorial) {
  if (typeof TVEditorial.EditorialText !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialText);
  });
  return this.sageAPI.invoke("GetEditorialText", {
'TVEditorial':TVEditorial.ID
});
   }

    // GetEditorialTitle
   GetEditorialTitle(TVEditorial) {
  if (typeof TVEditorial.EditorialTitle !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialTitle);
  });
  return this.sageAPI.invoke("GetEditorialTitle", {
'TVEditorial':TVEditorial.ID
});
   }

    // HasEditorialImage
   HasEditorialImage(TVEditorial) {
  if (typeof TVEditorial.EditorialImage !== 'undefined') return new Promise(function(resolve, reject) {
     resolve(TVEditorial.EditorialImage);
  });
  return this.sageAPI.invoke("HasEditorialImage", {
'TVEditorial':TVEditorial.ID
});
   }
}

    export default TVEditorialAPI;
