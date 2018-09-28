const NumberOfPriorities = 10;
const NumberOfHoursInADay = 24;

export const Game = {
  createGame: function() {
    return {
      name: '',
      image: '',
      platformId: 0,
      numberOfHoursToComplete: '',
      priority: 0
    };
  },

  numberOfFinishedGames: function(games) {
    return games.reduce((total, game) => {
      return total + (game.isComplete ? 1 : 0)
    }, 0);
  },

  getTotalDaysRemaining: function(games) {
    return Number(
      games.reduce((total, game) => {
        return total + Math.max(
          game.numberOfHoursToComplete - game.numberOfHoursPlayed, 0
        ) / NumberOfHoursInADay;
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
    return new Array(NumberOfPriorities).fill(1).map((number, index) => number + index);
  }
};