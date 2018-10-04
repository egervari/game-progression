import Vue from 'vue';

import {Game} from "@/app/models/game";

export const editGameService = {
  getGame: function(gameId) {
    return Vue.http.get(`games/${gameId}`)
      .then(response => response.json())
      .then(game => new Game(game));
  },

  updateGame: function(game) {
    return Vue.http.put(`games/${game.id}`, game)
      .then(response => response.json())
      .then(game => new Game(game));
  }
};