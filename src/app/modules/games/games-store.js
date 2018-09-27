import addGameStore from './modules/add-game/add-game-store';
import editGameStore from './modules/edit-game/edit-game-store';
import gamesListingStore from './modules/games-listing/games-listing-store';
import {GamesStoreKeys} from "@/app/modules/games/modules/games-store-keys";

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
    [GamesStoreKeys.Mutations.RetrievePlatformsSuccess]: function(state, platforms) {
      state.platforms = platforms;
    },
    [GamesStoreKeys.Mutations.RetrievePlatformsFailure]: function() {

    }
  },
  actions: {
    [GamesStoreKeys.Actions.RetrievePlatforms]: function({ commit }) {
      fetch('http://localhost:3000/platforms')
        .then(response => response.json())
        .then(platforms => commit(GamesStoreKeys.Mutations.RetrievePlatformsSuccess, platforms))
        .catch(error => commit(GamesStoreKeys.Mutations.RetrievePlatformsFailure, error))
    }
  }
};