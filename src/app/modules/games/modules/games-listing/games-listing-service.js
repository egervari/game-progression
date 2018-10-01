import Vue from 'vue';

import {Game} from "@/app/models/game";

export const gamesListingService = {
  getGames: function(filters, onSuccess, onFailure) {
    Vue.http.get(
      'games?' +
      `_sort=${filters.sortBy}&_order=desc&` +
      (filters.platform ? `platformId=${filters.platform}&` : '') +
      (filters.completion === 'complete' ? 'isComplete=true&' : '') +
      (filters.completion === 'not-complete' ? 'isComplete=false&' : '') +
      (filters.searchText.length > 0 ? `name_like=${filters.searchText}&` : '')
    )
      .then(response => response.json())
      .then(games => games.map(game => new Game(game)))
      .then(onSuccess)
      .catch(onFailure);
  },

  deleteGames: function(gameSelections, onSuccess) {
    Promise.all(
      Object.keys(gameSelections)
        .filter(key => gameSelections[key])
        .map(key => Vue.http.delete(`games/${key}`))
    ).then(onSuccess);
  }
};