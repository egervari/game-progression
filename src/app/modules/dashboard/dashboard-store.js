export default {
  state: {
    games: []
  },
  mutations: {
    retrieveDashboardGamesSuccess: function(state, games) {
      state.games = games;
    },
    retrieveDashboardGamesFailure: function() {

    },
  },
  actions: {
    retrieveDashboardGames: function({ commit }) {
      fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(games => commit('retrieveDashboardGamesSuccess', games))
        .catch(error => commit('retrieveDashboardGamesFailure', error))
    }
  }
};