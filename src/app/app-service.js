import Vue from 'vue';

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
  }
};