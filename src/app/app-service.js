import Vue from 'vue';
import i18n from '../i18n';

export const appService = {
  getLanguages: function(onSuccess, onFailure) {
    Vue.http.get('languages')
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  },

  getProfile: function(onSuccess, onFailure) {
    Vue.http.get('profile')
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  },

  setLanguage: function(profile, languageId, onSuccess, onFailure) {
    Vue.http.put('profile', {
      ...profile,
      languageId
    }).then(onSuccess)
      .catch(onFailure);
  },

  setLocale: function(languages, languageId) {
    i18n.locale = languages.find(language => language.id === languageId).code
  }
};