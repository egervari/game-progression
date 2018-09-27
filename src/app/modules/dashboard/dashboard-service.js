import Vue from 'vue';

export const dashboardService = {
  getGames: function(onSuccess, onFailure) {
    Vue.http.get('games')
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure)
  }
};