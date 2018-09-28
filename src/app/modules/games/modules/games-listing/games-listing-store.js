import { GamesListingStoreKeys } from "@/app/modules/games/modules/games-listing/games-listing-store-keys";
import { gamesListingService } from "@/app/modules/games/modules/games-listing/games-listing-service";

const countObjectKeys = obj => {
  return Object.keys(obj).reduce(
    (total, key) => total + (obj[key] ? 1 : 0),
    0
  );
}
export default {
  state: {
    games: [],
    filters: {
      platform: 0,
      completion: "all",
      sortBy: "priority",
      searchText: ""
    },
    gameSelections: {}
  },
  getters: {
    numberOfSelections: state => {
      return countObjectKeys(state.gameSelections);

    /*  return Object.keys(state.gameSelections).reduce(
        (total, key) => total + (state.gameSelections[key] ? 1 : 0),
        0
      );*/
    }
  },
  mutations: {
    [GamesListingStoreKeys.Mutations.RetrieveGamesSuccess]: function(
      state,
      games
    ) {
      state.games = games;
    },
    [GamesListingStoreKeys.Mutations.RetrieveGamesFailure]: function() {},
    [GamesListingStoreKeys.Mutations.SetPlatformFilter]: function(
      state,
      platform
    ) {
      // instead of doing this
      //  state.filters = {
      //  ...state.filters,
      //        platform: platform
      //    };
      // should be able to safely do this
      state.filters.platform = platform;
    },
    [GamesListingStoreKeys.Mutations.SetCompletionFilter]: function(
      state,
      completion
    ) {
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
    [GamesListingStoreKeys.Mutations.SetSearchText]: function(
      state,
      searchText
    ) {
      state.filters = {
        ...state.filters,
        searchText: searchText
      };
    },
    [GamesListingStoreKeys.Mutations.ToggleGameSelection]: function(
      state,
      gameId
    ) {
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
      gamesListingService.getGames(
        state.filters,
        games =>
          commit(GamesListingStoreKeys.Mutations.RetrieveGamesSuccess, games),
        error =>
          commit(GamesListingStoreKeys.Mutations.RetrieveGamesFailure, error)
      );
    },
    [GamesListingStoreKeys.Actions.SetPlatformFilter]: function(
      { commit, dispatch },
      platform
    ) {
      commit(GamesListingStoreKeys.Mutations.SetPlatformFilter, platform);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetCompletionFilter]: function(
      { commit, dispatch },
      completion
    ) {
      commit(GamesListingStoreKeys.Mutations.SetCompletionFilter, completion);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSortBy]: function(
      { commit, dispatch },
      sortBy
    ) {
      commit(GamesListingStoreKeys.Mutations.SetSortBy, sortBy);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.SetSearchText]: function(
      { commit, dispatch },
      searchText
    ) {
      commit(GamesListingStoreKeys.Mutations.SetSearchText, searchText);
      dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
    },
    [GamesListingStoreKeys.Actions.DeleteSelectedGames]: function({
      commit,
      dispatch,
      state
    }) {
      gamesListingService.deleteGames(state.gameSelections, () => {
        commit(GamesListingStoreKeys.Mutations.ClearGameSelections);
        dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
      });
    }
  }
};
