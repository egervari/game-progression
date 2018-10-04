import Vue from 'vue';

export const addGameService = {
  createGame: function(game) {
    return Vue.http.post('games', game);
  }
};