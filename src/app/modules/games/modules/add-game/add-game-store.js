import {AddGameStoreKeys} from "@/app/modules/games/modules/add-game/add-game-store-keys";
import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";

import {addGameService} from "@/app/modules/games/modules/add-game/add-game-service";

export default {
  state: {

  },
  mutations: {
    [AddGameStoreKeys.Mutations.SaveGameFailure]: function() {
    }
  },
  actions: {
    [AddGameStoreKeys.Actions.SaveGame]: function({ commit, dispatch }, game) {
      return addGameService.createGame(game)
      .then(()=>dispatch(GamesListingStoreKeys.Actions.RetrieveGames))
      .catch((error)=>commit(AddGameStoreKeys.Mutations.SaveGameFailure, error))
    
    }
  }
};