import Vue from 'vue';

import i18n from '../i18n';
import {Language} from "@/app/models/language";
import {Profile} from "@/app/models/profile";

export const appService = {
  getLanguages: function(onSuccess, onFailure) {
    Vue.http.get('languages')
      .then(response => response.json())
      .then(languages => languages.map(language => new Language(language)))
      .then(onSuccess)
      .catch(onFailure);
  },

  getProfile: function(onSuccess, onFailure) {
    Vue.http.get('profile')
      .then(response => response.json())
      .then(profile => new Profile(profile))
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
    i18n.locale = Language.getLanguageById(languages, languageId).code
  }
};