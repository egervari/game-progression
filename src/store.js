import Vue from 'vue'
import Vuex from 'vuex'

import dashboardStore from "@/app/modules/dashboard/dashboard-store";
import gamesStore from "@/app/modules/games/games-store";
import profileStore from "@/app/modules/profile/profile-store";
import {AppStoreKeys} from "@/app/app-store-keys";

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
      fetch('http://localhost:3000/languages')
        .then(response => response.json())
        .then(languages => commit(AppStoreKeys.Mutations.RetrieveLanguagesSuccess, languages))
        .catch(error => commit(AppStoreKeys.Mutations.RetrieveLanguagesFailure, error))
    },
    [AppStoreKeys.Actions.RetrieveProfile]: function({ commit }) {
      fetch('http://localhost:3000/profile')
        .then(response => response.json())
        .then(profile => commit(AppStoreKeys.Mutations.RetrieveProfileSuccess, profile))
        .catch(error => commit(AppStoreKeys.Mutations.RetrieveProfileFailure, error))
    }
  }
})
