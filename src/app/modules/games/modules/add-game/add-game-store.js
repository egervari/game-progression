import {AddGameStoreKeys} from "@/app/modules/games/modules/add-game/add-game-store-keys";
import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";
import Router from '../../../../../router';
import {addGameService} from "@/app/modules/games/modules/add-game/add-game-service";

export default {
  state: {

  },
  mutations: {
    [AddGameStoreKeys.Mutations.SaveGameFailure]: function(state, error) {
    }
  },
  actions: {
    [AddGameStoreKeys.Actions.SaveGame]: function({ commit, dispatch }, game) {
      addGameService.createGame(
        game,
        () => {
          Router.replace('/games/listing');
          dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
        },
        error => commit(AddGameStoreKeys.Mutations.SaveGameFailure, error)
      );
    }
  }
};