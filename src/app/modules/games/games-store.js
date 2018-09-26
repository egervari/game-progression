import addGameStore from './modules/add-game/add-game-store';
import editGameStore from './modules/edit-game/edit-game-store';

export default {
  modules: {
    addGameState: addGameStore,
    editGameState: editGameStore
  },
  state: {
    games: [],
    platforms: []
  },
  mutations: {
    retrieveGamesSuccess: function(state, games) {
      state.games = games;
    },
    retrieveGamesFailure: function() {

    },
    retrievePlatformsSuccess: function(state, platforms) {
      state.platforms = platforms;
    },
    retrievePlatformsFailure: function() {

    },
  },
  actions: {
    retrieveGames: function({ commit }) {
      fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(games => commit('retrieveGamesSuccess', games))
        .catch(error => commit('retrieveGamesFailure', error))
    },
    retrievePlatforms: function({ commit }) {
      fetch('http://localhost:3000/platforms')
        .then(response => response.json())
        .then(platforms => commit('retrievePlatformsSuccess', platforms))
        .catch(error => commit('retrievePlatformsFailure', error))
    }
  }
};