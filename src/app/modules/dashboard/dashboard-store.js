import Vue from 'vue';

import {DashboardStoreKeys} from "@/app/modules/dashboard/dashboard-store-keys";

export default {
  state: {
    games: []
  },
  mutations: {
    [DashboardStoreKeys.Mutations.RetrieveDashboardGamesSuccess]: function(state, games) {
      state.games = games;
    },
    [DashboardStoreKeys.Mutations.RetrieveDashboardGamesFailure]: function() {

    },
  },
  actions: {
    [DashboardStoreKeys.Actions.RetrieveDashboardGames]: function({ commit }) {
      Vue.http.get('games')
        .then(response => response.json())
        .then(games => commit(DashboardStoreKeys.Mutations.RetrieveDashboardGamesSuccess, games))
        .catch(error => commit(DashboardStoreKeys.Mutations.RetrieveDashboardGamesFailure, error))
    }
  }
};