import Vue from 'vue';

import {Game} from "@/app/models/game";

export const dashboardService = {
  getGames: function(onSuccess, onFailure) {
    Vue.http.get('games')
      .then(response => response.json())
      .then(games => games.map(game => new Game(game)))
      .then(onSuccess)
      .catch(onFailure)
  }
};