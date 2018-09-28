import Vue from 'vue';

export const editGameService = {
  getGame: function(gameId, onSuccess, onFailure) {
    Vue.http.get(`games/${gameId}`)
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  },

  updateGame: function(game, onSuccess, onFailure) {
    Vue.http.put(`games/${game.id}`, game)
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
};