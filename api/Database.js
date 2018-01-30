class Database {
   constructor(sageAPI) {
      this.sageAPI=sageAPI;
   }


    // DataIntersection
   DataIntersection(DataSet1, DataSet2) {
  return this.sageAPI.invoke("DataIntersection", {
'DataSet1':DataSet1
,
'DataSet2':DataSet2
});
   }

    // DataUnion
   DataUnion(DataSet1, DataSet2) {
  return this.sageAPI.invoke("DataUnion", {
'DataSet1':DataSet1
,
'DataSet2':DataSet2
});
   }

    // FilterByBoolMethod
   FilterByBoolMethod(Data, Method, MatchValue) {
  return this.sageAPI.invoke("FilterByBoolMethod", {
'Data':Data
,
'Method':Method
,
'MatchValue':MatchValue
});
   }

    // FilterByMethod
   FilterByMethod(Data, Method, MatchValue, MatchedPasses) {
  return this.sageAPI.invoke("FilterByMethod", {
'Data':Data
,
'Method':Method
,
'MatchValue':MatchValue
,
'MatchedPasses':MatchedPasses
});
   }

    // FilterByMethodRegex
   FilterByMethodRegex(Data, Method, RegexPattern, MatchedPasses, CompleteMatch) {
  return this.sageAPI.invoke("FilterByMethodRegex", {
'Data':Data
,
'Method':Method
,
'RegexPattern':RegexPattern
,
'MatchedPasses':MatchedPasses
,
'CompleteMatch':CompleteMatch
});
   }

    // FilterByRange
   FilterByRange(Data, Method, LowerBoundInclusive, UpperBoundExclusive, KeepWithinBounds) {
  return this.sageAPI.invoke("FilterByRange", {
'Data':Data
,
'Method':Method
,
'LowerBoundInclusive':LowerBoundInclusive
,
'UpperBoundExclusive':UpperBoundExclusive
,
'KeepWithinBounds':KeepWithinBounds
});
   }

    // GetAiringsOnChannelAtTime
   GetAiringsOnChannelAtTime(Channel, StartTime, EndTime, MustStartDuringTime) {
  return this.sageAPI.invoke("GetAiringsOnChannelAtTime", {
'Channel':Channel
,
'StartTime':StartTime
,
'EndTime':EndTime
,
'MustStartDuringTime':MustStartDuringTime
});
   }

    // GetAiringsOnViewableChannelsAtTime
   GetAiringsOnViewableChannelsAtTime(StartTime, EndTime, MustStartDuringTime) {
  return this.sageAPI.invoke("GetAiringsOnViewableChannelsAtTime", {
'StartTime':StartTime
,
'EndTime':EndTime
,
'MustStartDuringTime':MustStartDuringTime
});
   }

    // GetAllCategories
   GetAllCategories() {
  return this.sageAPI.invoke("GetAllCategories", {
});
   }

    // GetAllCategories
   GetAllCategories(MediaMask) {
  return this.sageAPI.invoke("GetAllCategories", {
'MediaMask':MediaMask
});
   }

    // GetAllGroupingCategories
   GetAllGroupingCategories() {
  return this.sageAPI.invoke("GetAllGroupingCategories", {
});
   }

    // GetAllGroupingCategories
   GetAllGroupingCategories(MediaMask) {
  return this.sageAPI.invoke("GetAllGroupingCategories", {
'MediaMask':MediaMask
});
   }

    // GetAllNonMusicWithPerson
   GetAllNonMusicWithPerson(Person) {
  return this.sageAPI.invoke("GetAllNonMusicWithPerson", {
'Person':Person
});
   }

    // GetAllNonMusicWithTitle
   GetAllNonMusicWithTitle(Title) {
  return this.sageAPI.invoke("GetAllNonMusicWithTitle", {
'Title':Title
});
   }

    // GetAllPeople
   GetAllPeople() {
  return this.sageAPI.invoke("GetAllPeople", {
});
   }

    // GetAllPeople
   GetAllPeople(MediaMask) {
  return this.sageAPI.invoke("GetAllPeople", {
'MediaMask':MediaMask
});
   }

    // GetAllTitles
   GetAllTitles() {
  return this.sageAPI.invoke("GetAllTitles", {
});
   }

    // GetAllTitles
   GetAllTitles(MediaMask) {
  return this.sageAPI.invoke("GetAllTitles", {
'MediaMask':MediaMask
});
   }

    // GetChannelsOnLineup
   GetChannelsOnLineup(Lineup) {
  return this.sageAPI.invoke("GetChannelsOnLineup", {
'Lineup':Lineup
});
   }

    // GetDatabaseLastModifiedTime
   GetDatabaseLastModifiedTime(MediaMask) {
  return this.sageAPI.invoke("GetDatabaseLastModifiedTime", {
'MediaMask':MediaMask
});
   }

    // GetFilesWithImportPrefix
   GetFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
  return this.sageAPI.invoke("GetFilesWithImportPrefix", {
'MediaData':MediaData
,
'ImportPrefix':ImportPrefix
,
'IncludeFiles':IncludeFiles
,
'IncludeFolders':IncludeFolders
,
'GroupFolders':GroupFolders
});
   }

    // GetMediaFilesWithImportPrefix
   GetMediaFilesWithImportPrefix(MediaData, ImportPrefix, IncludeFiles, IncludeFolders, GroupFolders) {
  return this.sageAPI.invoke("GetMediaFilesWithImportPrefix", {
'MediaData':MediaData
,
'ImportPrefix':ImportPrefix
,
'IncludeFiles':IncludeFiles
,
'IncludeFolders':IncludeFolders
,
'GroupFolders':GroupFolders
});
   }

    // GetMediaMask
   GetMediaMask(DBObject) {
  return this.sageAPI.invoke("GetMediaMask", {
'DBObject':DBObject
});
   }

    // GroupByArrayMethod
   GroupByArrayMethod(Data, Method) {
  return this.sageAPI.invoke("GroupByArrayMethod", {
'Data':Data
,
'Method':Method
});
   }

    // GroupByMethod
   GroupByMethod(Data, Method) {
  return this.sageAPI.invoke("GroupByMethod", {
'Data':Data
,
'Method':Method
});
   }

    // HasMediaMask
   HasMediaMask(DBObject, MediaMask) {
  return this.sageAPI.invoke("HasMediaMask", {
'DBObject':DBObject
,
'MediaMask':MediaMask
});
   }

    // IsDatabaseMemoryMaxed
   IsDatabaseMemoryMaxed() {
  return this.sageAPI.invoke("IsDatabaseMemoryMaxed", {
});
   }

    // SearchByPerson
   SearchByPerson(SearchString) {
  return this.sageAPI.invoke("SearchByPerson", {
'SearchString':SearchString
});
   }

    // SearchByPerson
   SearchByPerson(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByPerson", {
'SearchString':SearchString
,
'MediaMask':MediaMask
});
   }

    // SearchByText
   SearchByText(SearchString) {
  return this.sageAPI.invoke("SearchByText", {
'SearchString':SearchString
});
   }

    // SearchByText
   SearchByText(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByText", {
'SearchString':SearchString
,
'MediaMask':MediaMask
});
   }

    // SearchByTitle
   SearchByTitle(SearchString) {
  return this.sageAPI.invoke("SearchByTitle", {
'SearchString':SearchString
});
   }

    // SearchByTitle
   SearchByTitle(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchByTitle", {
'SearchString':SearchString
,
'MediaMask':MediaMask
});
   }

    // SearchForChannel
   SearchForChannel(SearchString) {
  return this.sageAPI.invoke("SearchForChannel", {
'SearchString':SearchString
});
   }

    // SearchForChannel
   SearchForChannel(SearchString, IncludeNonViewable) {
  return this.sageAPI.invoke("SearchForChannel", {
'SearchString':SearchString
,
'IncludeNonViewable':IncludeNonViewable
});
   }

    // SearchForPeople
   SearchForPeople(SearchString) {
  return this.sageAPI.invoke("SearchForPeople", {
'SearchString':SearchString
});
   }

    // SearchForPeople
   SearchForPeople(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchForPeople", {
'SearchString':SearchString
,
'MediaMask':MediaMask
});
   }

    // SearchForPeopleNTE
   SearchForPeopleNTE(NTEString) {
  return this.sageAPI.invoke("SearchForPeopleNTE", {
'NTEString':NTEString
});
   }

    // SearchForPeopleNTE
   SearchForPeopleNTE(NTEString, MediaMask) {
  return this.sageAPI.invoke("SearchForPeopleNTE", {
'NTEString':NTEString
,
'MediaMask':MediaMask
});
   }

    // SearchForPeopleRegex
   SearchForPeopleRegex(RegexPattern) {
  return this.sageAPI.invoke("SearchForPeopleRegex", {
'RegexPattern':RegexPattern
});
   }

    // SearchForPeopleRegex
   SearchForPeopleRegex(RegexPattern, MediaMask) {
  return this.sageAPI.invoke("SearchForPeopleRegex", {
'RegexPattern':RegexPattern
,
'MediaMask':MediaMask
});
   }

    // SearchForTitles
   SearchForTitles(SearchString) {
  return this.sageAPI.invoke("SearchForTitles", {
'SearchString':SearchString
});
   }

    // SearchForTitles
   SearchForTitles(SearchString, MediaMask) {
  return this.sageAPI.invoke("SearchForTitles", {
'SearchString':SearchString
,
'MediaMask':MediaMask
});
   }

    // SearchForTitlesNTE
   SearchForTitlesNTE(NTEString) {
  return this.sageAPI.invoke("SearchForTitlesNTE", {
'NTEString':NTEString
});
   }

    // SearchForTitlesNTE
   SearchForTitlesNTE(NTEString, MediaMask) {
  return this.sageAPI.invoke("SearchForTitlesNTE", {
'NTEString':NTEString
,
'MediaMask':MediaMask
});
   }

    // SearchForTitlesRegex
   SearchForTitlesRegex(RegexPattern) {
  return this.sageAPI.invoke("SearchForTitlesRegex", {
'RegexPattern':RegexPattern
});
   }

    // SearchForTitlesRegex
   SearchForTitlesRegex(RegexPattern, MediaMask) {
  return this.sageAPI.invoke("SearchForTitlesRegex", {
'RegexPattern':RegexPattern
,
'MediaMask':MediaMask
});
   }

    // SearchSelectedExactFields
   SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedExactFields", {
'SearchString':SearchString
,
'CaseSensitive':CaseSensitive
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
});
   }

    // SearchSelectedExactFields
   SearchSelectedExactFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedExactFields", {
'SearchString':SearchString
,
'CaseSensitive':CaseSensitive
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
,
'MediaMask':MediaMask
});
   }

    // SearchSelectedFields
   SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFields", {
'SearchString':SearchString
,
'CaseSensitive':CaseSensitive
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
});
   }

    // SearchSelectedFields
   SearchSelectedFields(SearchString, CaseSensitive, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFields", {
'SearchString':SearchString
,
'CaseSensitive':CaseSensitive
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
,
'MediaMask':MediaMask
});
   }

    // SearchSelectedFieldsNTE
   SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFieldsNTE", {
'NTEString':NTEString
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
});
   }

    // SearchSelectedFieldsNTE
   SearchSelectedFieldsNTE(NTEString, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFieldsNTE", {
'NTEString':NTEString
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
,
'MediaMask':MediaMask
});
   }

    // SearchSelectedFieldsRegex
   SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc) {
  return this.sageAPI.invoke("SearchSelectedFieldsRegex", {
'RegexPattern':RegexPattern
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
});
   }

    // SearchSelectedFieldsRegex
   SearchSelectedFieldsRegex(RegexPattern, Titles, Episode, Description, People, Category, Rated, ExtendedRatings, Year, Misc, MediaMask) {
  return this.sageAPI.invoke("SearchSelectedFieldsRegex", {
'RegexPattern':RegexPattern
,
'Titles':Titles
,
'Episode':Episode
,
'Description':Description
,
'People':People
,
'Category':Category
,
'Rated':Rated
,
'ExtendedRatings':ExtendedRatings
,
'Year':Year
,
'Misc':Misc
,
'MediaMask':MediaMask
});
   }

    // Sort
   Sort(Data, Descending, SortTechnique) {
  return this.sageAPI.invoke("Sort", {
'Data':Data
,
'Descending':Descending
,
'SortTechnique':SortTechnique
});
   }

    // SortLexical
   SortLexical(Data, Descending, SortByMethod) {
  return this.sageAPI.invoke("SortLexical", {
'Data':Data
,
'Descending':Descending
,
'SortByMethod':SortByMethod
});
   }

    // StripLeadingArticles
   StripLeadingArticles(Text) {
  return this.sageAPI.invoke("StripLeadingArticles", {
'Text':Text
});
   }
}

    export default Database;
