import addGameStore from './modules/add-game/add-game-store';
import editGameStore from './modules/edit-game/edit-game-store';
import gamesListingStore from './modules/games-listing/games-listing-store';
import {GamesStoreKeys} from "@/app/modules/games/modules/games-store-keys";
import {gamesService} from "@/app/modules/games/games-service";

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
      gamesService.getPlatforms(
        (platforms) => commit(GamesStoreKeys.Mutations.RetrievePlatformsSuccess, platforms),
        (error) => commit(GamesStoreKeys.Mutations.RetrievePlatformsFailure, error)
      );
    }
  }
};