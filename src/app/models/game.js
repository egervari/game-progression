import {Model} from "@/app/models/model";

export class Game extends Model {
  static NumberOfPriorities = 10;
  static NumberOfHoursInADay = 24;

  constructor(game = {}) {
    super(game.id);

    this.name = game.name || '';
    this.image = game.image || '';
    this.platformId = game.platformId || 0;
    this.numberOfHoursPlayed = game.numberOfHoursPlayed || 0;
    this.numberOfHoursToComplete = game.numberOfHoursToComplete || 0;
    this.priority = game.priority || 0;
    this.isComplete = game.isComplete || false;
  }

  get isInProgress() {
    return this.numberOfHoursPlayed > 0;
  }

  get estimatedCompletionPercentage() {
    return Number(
      Math.min(this.numberOfHoursPlayed / this.numberOfHoursToComplete * 100, 100)
    ).toFixed(1);
  }

  get numberOfHoursUnplayed() {
    return Math.max(
      this.numberOfHoursToComplete - this.numberOfHoursPlayed, 0
    );
  }

  static numberOfFinishedGames(games) {
    return games.reduce((total, game) => {
      return total + (game.isComplete ? 1 : 0)
    }, 0);
  }

  static getTotalDaysRemaining(games) {
    return Number(
      games.reduce((total, game) => {
        return total + game.numberOfHoursUnplayed / Game.NumberOfHoursInADay;
      }, 0)
    ).toFixed(1);
  }

  static getPriorityArray() {
    return new Array(Game.NumberOfPriorities)
      .fill(1)
      .map((number, index) => number + index);
  }
}