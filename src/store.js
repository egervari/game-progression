import Vue from 'vue'
import Vuex from 'vuex'

import dashboardStore from "@/app/modules/dashboard/dashboard-store";
import gamesStore from "@/app/modules/games/games-store";
import profileStore from "@/app/modules/profile/profile-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dashboardStore,
    gamesStore,
    profileStore
  },
  state: {
    languages: [],
    profile: null
  },
  mutations: {
    retrieveLanguagesSuccess: function(state, languages) {
      state.languages = languages;
    },
    retrieveLanguagesFailure: function() {

    },
    retrieveProfileSuccess: function(state, profile) {
      state.profile = profile;
    },
    retrieveProfileFailure: function() {

    }
  },
  actions: {
    retrieveLanguages: function({ commit }) {
      fetch('http://localhost:3000/languages')
        .then(response => response.json())
        .then(languages => commit('retrieveLanguagesSuccess', languages))
        .catch(error => commit('retrieveLanguagesFailure', error))
    },

    retrieveProfile: function({ commit }) {
      fetch('http://localhost:3000/profile')
        .then(response => response.json())
        .then(profile => commit('retrieveProfileSuccess', profile))
        .catch(error => commit('retrieveProfileFailure', error))
    }
  }
})
