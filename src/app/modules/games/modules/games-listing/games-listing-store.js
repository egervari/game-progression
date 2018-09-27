import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";

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
      state.filters = {
        ...state.filters,
        platform: platform
      };
    },
    [GamesListingStoreKeys.Mutations.SetCompletionFilter]: function(state, completion) {
      state.filters = {
        ...state.filters,
        completion: completion
      };
    },
    [GamesListingStoreKeys.Mutations.SetSortBy]: function(state, sortBy) {
      state.filters = {
        ...state.filters,
        sortBy: sortBy
      };
    },
    [GamesListingStoreKeys.Mutations.SetSearchText]: function(state, searchText) {
      state.filters = {
        ...state.filters,
        searchText: searchText
      };
    },
    [GamesListingStoreKeys.Mutations.ToggleGameSelection]: function(state, gameId) {
      state.gameSelections = {
        ...state.gameSelections,
        [gameId]: !state.gameSelections[gameId]
      };
    }
  },
  actions: {
    [GamesListingStoreKeys.Actions.RetrieveGames]: function({ commit, state }) {
      fetch(
        'http://localhost:3000/games?' +
        `_sort=${state.filters.sortBy}&` +
        (state.filters.platform ? `platformId=${state.filters.platform}&` : '') +
        (state.filters.completion === 'complete' ? 'isComplete=true&' : '') +
        (state.filters.completion === 'not-complete' ? 'isComplete=false&' : '') +
        (state.filters.searchText.length > 0 ? `name_like=${state.filters.searchText}&` : '')
      )
        .then(response => response.json())
        .then(games => commit(GamesListingStoreKeys.Mutations.RetrieveGamesSuccess, games))
        .catch(error => commit(GamesListingStoreKeys.Mutations.RetrieveGamesFailure, error))
    },
    [GamesListingStoreKeys.Actions.SetPlatformFilter]: function({ commit, dispatch }, platform) {
      commit(GamesListingStoreKeys.Mutations.SetPlatformFilter, platform);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetCompletionFilter]: function({ commit, dispatch }, completion) {
      commit(GamesListingStoreKeys.Mutations.SetCompletionFilter, completion);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSortBy]: function({ commit, dispatch }, sortBy) {
      commit(GamesListingStoreKeys.Mutations.SetSortBy, sortBy);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSearchText]: function({ commit, dispatch }, searchText) {
      commit(GamesListingStoreKeys.Mutations.SetSearchText, searchText);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    }
  }
};