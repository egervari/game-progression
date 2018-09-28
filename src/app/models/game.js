export const Game = {
  numberOfFinishedGames: function(games) {
    return games.reduce((total, game) => {
      return total + (game.isComplete ? 1 : 0)
    }, 0);
  },

  getTotalDaysRemaining: function(games) {
    return Number(
      games.reduce((total, game) => {
        return total + Math.max(game.numberOfHoursToComplete - game.numberOfHoursPlayed, 0) / 24;
      }, 0)
    ).toFixed(1);
  },

  isGameInProgress: function(game) {
    return game.numberOfHoursPlayed > 0;
  },

  getEstimatedCompletion: function(game) {
    return Number(
      Math.min(game.numberOfHoursPlayed / game.numberOfHoursToComplete * 100, 100)
    ).toFixed(1);
  },

  getPriorityArray: function() {
    return new Array(10).fill(1).map((number, index) => number + index);
  }
};