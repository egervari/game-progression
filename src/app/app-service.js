import Vue from 'vue';

import i18n from '../i18n';
import {Language} from "@/app/models/language";
import {Profile} from "@/app/models/profile";

export const appService = {
  getLanguages: function() {
    return Vue.http.get('languages')
      .then(response => response.json())
      .then(languages => languages.map(language => new Language(language)));
  },

  getProfile: function() {
    return Vue.http.get('profile')
      .then(response => response.json())
      .then(profile => new Profile(profile));
  },

  setLanguage: function(profile, languageId) {
    return Vue.http.put('profile', {
      ...profile,
      languageId
    });
  },

  setLocale: function(languages, languageId) {
    i18n.locale = Language.getLanguageById(languages, languageId).code
  }
};