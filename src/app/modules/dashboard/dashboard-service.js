import Vue from 'vue';

import {Game} from "@/app/models/game";

export const dashboardService = {
  getGames: function() {
    return Vue.http.get('games')
      .then(response => response.json())
      .then(games => games.map(game => new Game(game)))
  }
};