import Vue from 'vue';

import {AddGameStoreKeys} from "@/app/modules/games/modules/add-game/add-game-store-keys";
import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";
import Router from '../../../../../router';

export default {
  state: {

  },
  mutations: {
    [AddGameStoreKeys.Mutations.SaveGameFailure]: function(state, error) {
      console.log(error);
    }
  },
  actions: {
    [AddGameStoreKeys.Actions.SaveGame]: function({ commit, dispatch }, game) {
      Vue.http.post('games', game)
        .then(() => {
          Router.replace('/games/listing');
          dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
        })
        .catch(error => commit(AddGameStoreKeys.Mutations.SaveGameFailure, error))
    }
  }
};