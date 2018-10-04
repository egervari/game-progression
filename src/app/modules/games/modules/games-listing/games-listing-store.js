import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";
import {gamesListingService} from "@/app/modules/games/modules/games-listing/games-listing-service";

export default {
  state: {
    games: [],
    filters: {
      platform: 0,
      completion: 'all',
      sortBy: 'priority',
      searchText: ''
    },
    gameSelections: {}
  },
  mutations: {
    [GamesListingStoreKeys.Mutations.RetrieveGamesSuccess]: function(state, games) {
      state.games = games;
    },
    [GamesListingStoreKeys.Mutations.RetrieveGamesFailure]: function() {

    },
    [GamesListingStoreKeys.Mutations.SetPlatformFilter]: function(state, platform) {
      state.filters.platform = platform;
    },
    [GamesListingStoreKeys.Mutations.SetCompletionFilter]: function(state, completion) {
      state.filters.completion = completion;
    },
    [GamesListingStoreKeys.Mutations.SetSortBy]: function(state, sortBy) {
      state.filters.sortBy = sortBy;
    },
    [GamesListingStoreKeys.Mutations.SetSearchText]: function(state, searchText) {
      state.filters.searchText = searchText;
    },
    [GamesListingStoreKeys.Mutations.ToggleGameSelection]: function(state, gameId) {
      state.gameSelections = {
        ...state.gameSelections,
        [gameId]: !state.gameSelections[gameId]
      };
    },
    [GamesListingStoreKeys.Mutations.ClearGameSelections]: function(state) {
      state.gameSelections = {};
    }
  },
  actions: {
    [GamesListingStoreKeys.Actions.RetrieveGames]: function({ commit, state }) {
      return gamesListingService.getGames(state.filters)
        .then(games => commit(GamesListingStoreKeys.Mutations.RetrieveGamesSuccess, games))
        .catch(error => commit(GamesListingStoreKeys.Mutations.RetrieveGamesFailure, error));
    },
    [GamesListingStoreKeys.Actions.SetPlatformFilter]: function({ commit, dispatch }, platform) {
      commit(GamesListingStoreKeys.Mutations.SetPlatformFilter, platform);

      return dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetCompletionFilter]: function({ commit, dispatch }, completion) {
      commit(GamesListingStoreKeys.Mutations.SetCompletionFilter, completion);

      return dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSortBy]: function({ commit, dispatch }, sortBy) {
      commit(GamesListingStoreKeys.Mutations.SetSortBy, sortBy);

      return dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSearchText]: function({ commit, dispatch }, searchText) {
      commit(GamesListingStoreKeys.Mutations.SetSearchText, searchText);

      return dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.DeleteSelectedGames]: function({ commit, dispatch, state }) {
      return gamesListingService.deleteGames(state.gameSelections)
        .then(() => {
          commit(GamesListingStoreKeys.Mutations.ClearGameSelections);
          dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
        });
    }
  }
};