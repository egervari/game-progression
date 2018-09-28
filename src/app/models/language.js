export const Language = {
  getLanguageById: function(languages, languageId) {
    return languages.find(language => language.id === languageId);
  }
};