import addGameStore from './modules/add-game/add-game-store';
import editGameStore from './modules/edit-game/edit-game-store';

export default {
  modules: {
    addGameState: addGameStore,
    editGameState: editGameStore
  },
  state: {
    games: [],
    filters: {
      platform: 0,
      completion: 'all',
      sortBy: 'priority',
      searchText: ''
    },
    platforms: []
  },
  mutations: {
    retrieveGamesSuccess: function(state, games) {
      state.games = games;
    },
    retrieveGamesFailure: function() {

    },
    retrievePlatformsSuccess: function(state, platforms) {
      state.platforms = platforms;
    },
    retrievePlatformsFailure: function() {

    },
    setPlatformFilter: function(state, platform) {
      state.filters = {
        ...state.filters,
        platform: platform
      };
    },
    setCompletionFilter: function(state, completion) {
      state.filters = {
        ...state.filters,
        completion: completion
      };
    },
    setSortBy: function(state, sortBy) {
      state.filters = {
        ...state.filters,
        sortBy: sortBy
      };
    },
    setSearchText: function(state, searchText) {
      state.filters = {
        ...state.filters,
        searchText: searchText
      };
    }
  },
  actions: {
    retrieveGames: function({ commit, state }) {
      fetch(
        'http://localhost:3000/games?' +
        `_sort=${state.filters.sortBy}&` +
        (state.filters.platform ? `platformId=${state.filters.platform}&` : '') +
        (state.filters.completion === 'complete' ? 'isComplete=true&' : '') +
        (state.filters.completion === 'not-complete' ? 'isComplete=false&' : '') +
        (state.filters.searchText.length > 0 ? `name_like=${state.filters.searchText}&` : '')
      )
        .then(response => response.json())
        .then(games => commit('retrieveGamesSuccess', games))
        .catch(error => commit('retrieveGamesFailure', error))
    },
    retrievePlatforms: function({ commit }) {
      fetch('http://localhost:3000/platforms')
        .then(response => response.json())
        .then(platforms => commit('retrievePlatformsSuccess', platforms))
        .catch(error => commit('retrievePlatformsFailure', error))
    },
    setPlatformFilter: function({ commit, dispatch }, platform) {
      commit('setPlatformFilter', platform);
      dispatch('retrieveGames');
    },
    setCompletionFilter: function({ commit, dispatch }, completion) {
      commit('setCompletionFilter', completion);
      dispatch('retrieveGames');
    },
    setSortBy: function({ commit, dispatch }, sortBy) {
      commit('setSortBy', sortBy);
      dispatch('retrieveGames');
    },
    setSearchText: function({ commit, dispatch }, searchText) {
      commit('setSearchText', searchText);
      dispatch('retrieveGames');
    }
  }
};