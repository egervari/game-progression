import dashboardStore from "@/app/modules/dashboard/dashboard-store";
import gamesStore from "@/app/modules/games/games-store";
import profileStore from "@/app/modules/profile/profile-store";
import {AppStoreKeys} from "@/app/app-store-keys";
import {appService} from "@/app/app-service";

export const appStore = {
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

    },
    [AppStoreKeys.Mutations.SetLanguageSuccess]: function(state, languageId) {
      state.profile = {
        ...state.profile,
        languageId
      };
    },
    [AppStoreKeys.Mutations.SetLanguageFailure]: function() {

    }
  },
  actions: {
    [AppStoreKeys.Actions.RetrieveLanguages]: function({ commit }) {
      appService.getLanguages(
        languages => commit(AppStoreKeys.Mutations.RetrieveLanguagesSuccess, languages),
        error => commit(AppStoreKeys.Mutations.RetrieveLanguagesFailure, error)
      );
    },
    [AppStoreKeys.Actions.RetrieveProfile]: function({ commit, state }) {
      appService.getProfile(
        profile => {
          commit(AppStoreKeys.Mutations.RetrieveProfileSuccess, profile);
          appService.setLocale(state.languages, profile.languageId);
        },
        error => commit(AppStoreKeys.Mutations.RetrieveProfileFailure, error)
      );
    },
    [AppStoreKeys.Actions.SelectLanguage]: function({ commit, state }, languageId) {
      appService.setLanguage(
        state.profile,
        languageId,
        () => {
          commit(AppStoreKeys.Mutations.SetLanguageSuccess, languageId);
          appService.setLocale(state.languages, languageId);
        },
        error => commit(AppStoreKeys.Mutations.SetLanguageFailure, error)
      );
    }
  }
};