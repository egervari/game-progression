import Vue from 'vue';

export const gamesService = {
  getPlatforms: function(onSuccess, onFailure) {
    Vue.http.get('platforms')
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
};