import Vue from 'vue';

import {Game} from "@/app/models/game";

export const gamesListingService = {
  getGames: function(filters) {
    return Vue.http.get(
      'games?' +
      `_sort=${filters.sortBy}&_order=desc&` +
      (filters.platform ? `platformId=${filters.platform}&` : '') +
      (filters.completion === 'complete' ? 'isComplete=true&' : '') +
      (filters.completion === 'not-complete' ? 'isComplete=false&' : '') +
      (filters.searchText.length > 0 ? `name_like=${filters.searchText}&` : '')
    )
      .then(response => response.json())
      .then(games => games.map(game => new Game(game)));
  },

  deleteGames: function(gameSelections) {
    return Promise.all(
      Object.keys(gameSelections)
        .filter(key => gameSelections[key])
        .map(key => Vue.http.delete(`games/${key}`))
    );
  }
};