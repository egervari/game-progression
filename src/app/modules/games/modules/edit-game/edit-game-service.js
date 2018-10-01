import Vue from 'vue';

import {Game} from "@/app/models/game";

export const editGameService = {
  getGame: function(gameId, onSuccess, onFailure) {
    Vue.http.get(`games/${gameId}`)
      .then(response => response.json())
      .then(game => new Game(game))
      .then(onSuccess)
      .catch(onFailure);
  },

  updateGame: function(game, onSuccess, onFailure) {
    Vue.http.put(`games/${game.id}`, game)
      .then(response => response.json())
      .then(game => new Game(game))
      .then(onSuccess)
      .catch(onFailure);
  }
};