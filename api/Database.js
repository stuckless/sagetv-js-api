class Database {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // DataIntersection
   DataIntersection(DataSet1, DataSet2) {
  return this.sageAPI.invoke("DataIntersection", [DataSet1,DataSet2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // DataUnion
   DataUnion(DataSet1, DataSet2) {
  return this.sageAPI.invoke("DataUnion", [DataSet1,DataSet2]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FilterByBoolMethod
   FilterByBoolMethod(Data, Method, MatchValue) {
  return this.sageAPI.invoke("FilterByBoolMethod", [Data,Method,MatchValue]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FilterByMethod
   FilterByMethod(Data, Method, MatchValue, MatchedPasses) {
  return this.sageAPI.invoke("FilterByMethod", [Data,Method,MatchValue,MatchedPasses]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FilterByMethodRegex
   FilterByMethodRegex(Data, Method, RegexPattern, MatchedPasses, CompleteMatch) {
  return this.sageAPI.invoke("FilterByMethodRegex", [Data,Method,RegexPattern,MatchedPasses,CompleteMatch]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // FilterByRange
   FilterByRange(Data, Method, LowerBoundInclusive, UpperBoundExclusive, KeepWithinBounds) {
  return this.sageAPI.invoke("FilterByRange", [Data,Method,LowerBoundInclusive,UpperBoundExclusive,KeepWithinBounds]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringsOnChannelAtTime
   GetAiringsOnChannelAtTime(Channel, StartTime, EndTime, MustStartDuringTime) {
  return this.sageAPI.invoke("GetAiringsOnChannelAtTime", [Channel,StartTime,EndTime,MustStartDuringTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAiringsOnViewableChannelsAtTime
   GetAiringsOnViewableChannelsAtTime(StartTime, EndTime, MustStartDuringTime) {
  return this.sageAPI.invoke("GetAiringsOnViewableChannelsAtTime", [StartTime,EndTime,MustStartDuringTime]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllCategories
   GetAllCategories() {
  return this.sageAPI.invoke("GetAllCategories", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllCategories
   GetAllCategories(MediaMask) {
  return this.sageAPI.invoke("GetAllCategories", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllGroupingCategories
   GetAllGroupingCategories() {
  return this.sageAPI.invoke("GetAllGroupingCategories", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllGroupingCategories
   GetAllGroupingCategories(MediaMask) {
  return this.sageAPI.invoke("GetAllGroupingCategories", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllNonMusicWithPerson
   GetAllNonMusicWithPerson(Person) {
  return this.sageAPI.invoke("GetAllNonMusicWithPerson", [Person]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllNonMusicWithTitle
   GetAllNonMusicWithTitle(Title) {
  return this.sageAPI.invoke("GetAllNonMusicWithTitle", [Title]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllPeople
   GetAllPeople() {
  return this.sageAPI.invoke("GetAllPeople", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllPeople
   GetAllPeople(MediaMask) {
  return this.sageAPI.invoke("GetAllPeople", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllTitles
   GetAllTitles() {
  return this.sageAPI.invoke("GetAllTitles", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetAllTitles
   GetAllTitles(MediaMask) {
  return this.sageAPI.invoke("GetAllTitles", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetChannelsOnLineup
   GetChannelsOnLineup(Lineup) {
  return this.sageAPI.invoke("GetChannelsOnLineup", [Lineup]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetDatabaseLastModifiedTime
   GetDatabaseLastModifiedTime(MediaMask) {
  return this.sageAPI.invoke("GetDatabaseLastModifiedTime", [MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetFilesWithImportPrefix
   GetFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
  return this.sageAPI.invoke("GetFilesWithImportPrefix", [MediaData,ImportPrefix,IncludeFiles,IncludeFolders,GroupFolders]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaFilesWithImportPrefix
   GetMediaFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
  return this.sageAPI.invoke("GetMediaFilesWithImportPrefix", [MediaData,ImportPrefix,IncludeFiles,IncludeFolders,GroupFolders]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GetMediaMask
   GetMediaMask(DBObject) {
  return this.sageAPI.invoke("GetMediaMask", [DBObject]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GroupByArrayMethod
   GroupByArrayMethod(Data, Method) {
  return this.sageAPI.invoke("GroupByArrayMethod", [Data,Method]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // GroupByMethod
   GroupByMethod(Data, Method) {
  return this.sageAPI.invoke("GroupByMethod", [Data,Method]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // HasMediaMask
   HasMediaMask(DBObject, MediaMask) {
  return this.sageAPI.invoke("HasMediaMask", [DBObject,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // IsDatabaseMemoryMaxed
   IsDatabaseMemoryMaxed() {
  return this.sageAPI.invoke("IsDatabaseMemoryMaxed", []).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByPerson
   SearchByPerson(SearchString) {
  return this.sageAPI.invoke("SearchByPerson", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByPerson
   SearchByPerson(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByPerson", [SearchString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByText
   SearchByText(SearchString) {
  return this.sageAPI.invoke("SearchByText", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByText
   SearchByText(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByText", [SearchString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByTitle
   SearchByTitle(SearchString) {
  return this.sageAPI.invoke("SearchByTitle", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchByTitle
   SearchByTitle(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByTitle", [SearchString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForChannel
   SearchForChannel(SearchString) {
  return this.sageAPI.invoke("SearchForChannel", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForChannel
   SearchForChannel(SearchString, IncludeNonViewable) {
  return this.sageAPI.invoke("SearchForChannel", [SearchString,IncludeNonViewable]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeople
   SearchForPeople(SearchString) {
  return this.sageAPI.invoke("SearchForPeople", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeople
   SearchForPeople(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchForPeople", [SearchString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeopleNTE
   SearchForPeopleNTE(NTEString) {
  return this.sageAPI.invoke("SearchForPeopleNTE", [NTEString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeopleNTE
   SearchForPeopleNTE(NTEString, MediaMask) {
  return this.sageAPI.invoke("SearchForPeopleNTE", [NTEString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeopleRegex
   SearchForPeopleRegex(RegexPattern) {
  return this.sageAPI.invoke("SearchForPeopleRegex", [RegexPattern]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForPeopleRegex
   SearchForPeopleRegex(RegexPattern, MediaMask) {
  return this.sageAPI.invoke("SearchForPeopleRegex", [RegexPattern,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitles
   SearchForTitles(SearchString) {
  return this.sageAPI.invoke("SearchForTitles", [SearchString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitles
   SearchForTitles(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchForTitles", [SearchString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitlesNTE
   SearchForTitlesNTE(NTEString) {
  return this.sageAPI.invoke("SearchForTitlesNTE", [NTEString]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitlesNTE
   SearchForTitlesNTE(NTEString, MediaMask) {
  return this.sageAPI.invoke("SearchForTitlesNTE", [NTEString,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitlesRegex
   SearchForTitlesRegex(RegexPattern) {
  return this.sageAPI.invoke("SearchForTitlesRegex", [RegexPattern]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchForTitlesRegex
   SearchForTitlesRegex(RegexPattern, MediaMask) {
  return this.sageAPI.invoke("SearchForTitlesRegex", [RegexPattern,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedExactFields
   SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedExactFields", [SearchString,CaseSensitive,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedExactFields
   SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedExactFields", [SearchString,CaseSensitive,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFields
   SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFields", [SearchString,CaseSensitive,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFields
   SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFields", [SearchString,CaseSensitive,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFieldsNTE
   SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFieldsNTE", [NTEString,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFieldsNTE
   SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFieldsNTE", [NTEString,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFieldsRegex
   SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFieldsRegex", [RegexPattern,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SearchSelectedFieldsRegex
   SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFieldsRegex", [RegexPattern,Titles,Episode,Description,People,Category,Rated,ExtendedRatings,Year,Misc,MediaMask]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // Sort
   Sort(Data, Descending, SortTechnique) {
  return this.sageAPI.invoke("Sort", [Data,Descending,SortTechnique]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // SortLexical
   SortLexical(Data, Descending, SortByMethod) {
  return this.sageAPI.invoke("SortLexical", [Data,Descending,SortByMethod]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }

    // StripLeadingArticles
   StripLeadingArticles(Text) {
  return this.sageAPI.invoke("StripLeadingArticles", [Text]).then((json)=>{
   if (json && json.Result) return json.Result;
   return json;
});

   }
}

// Field Constants for null
    export default Database;
