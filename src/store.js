import Vue from 'vue'
import Vuex from 'vuex'

import dashboardStore from "@/app/modules/dashboard/dashboard-store";
import gamesStore from "@/app/modules/games/games-store";
import profileStore from "@/app/modules/profile/profile-store";
import {AppStoreKeys} from "@/app/app-store-keys";
import {appService} from "@/app/app-service";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboardState: dashboardStore,
    gamesState: gamesStore,
    profileState: profileStore
  },
  state: {
    languages: [],
    profile: null
  },
  mutations: {
    [AppStoreKeys.Mutations.RetrieveLanguagesSuccess]: function(state, languages) {
      state.languages = languages;
    },
    [AppStoreKeys.Mutations.RetrieveLanguagesFailure]: function() {

    },
    [AppStoreKeys.Mutations.RetrieveProfileSuccess]: function(state, profile) {
      state.profile = profile;
    },
    [AppStoreKeys.Mutations.RetrieveProfileFailure]: function() {

    }
  },
  actions: {
    [AppStoreKeys.Actions.RetrieveLanguages]: function({ commit }) {
      appService.getLanguages(
        languages => commit(AppStoreKeys.Mutations.RetrieveLanguagesSuccess, languages),
        error => commit(AppStoreKeys.Mutations.RetrieveLanguagesFailure, error)
      );
    },
    [AppStoreKeys.Actions.RetrieveProfile]: function({ commit }) {
      appService.getProfile(
        profile => commit(AppStoreKeys.Mutations.RetrieveProfileSuccess, profile),
        error => commit(AppStoreKeys.Mutations.RetrieveProfileFailure, error)
      );
    }
  }
})
