import addGameStore from './modules/add-game/add-game-store';
import editGameStore from './modules/edit-game/edit-game-store';
import gamesListingStore from './modules/games-listing/games-listing-store';

export default {
  modules: {
    addGameState: addGameStore,
    editGameState: editGameStore,
    gamesListingState: gamesListingStore
  },
  state: {
    platforms: []
  },
  mutations: {
    retrievePlatformsSuccess: function(state, platforms) {
      state.platforms = platforms;
    },
    retrievePlatformsFailure: function() {

    }
  },
  actions: {
    retrievePlatforms: function({ commit }) {
      fetch('http://localhost:3000/platforms')
        .then(response => response.json())
        .then(platforms => commit('retrievePlatformsSuccess', platforms))
        .catch(error => commit('retrievePlatformsFailure', error))
    }
  }
};