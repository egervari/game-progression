import Vue from 'vue';

export const addGameService = {
  createGame: function(game, onSuccess, onFailure) {
    Vue.http.post('games', game)
      .then(onSuccess)
      .catch(onFailure);
  }
};