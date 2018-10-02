import { Game } from "@/app/models/game";

describe('Game', () => {
  let game;

  describe('when a game is completed', () => {
    beforeEach(() => {
      game = new Game({ isComplete: true });
    });

    it('should not be in progress', () => {
      expect(game.isInProgress).toEqual(false);
    });

    it('should have an estimated completion percentage of 100.0', () => {
      expect(game.estimatedCompletionPercentage).toEqual("100.0");
    });

    it('should have zero number of hours unplayed', () => {
      expect(game.numberOfHoursUnplayed).toEqual(0);
    });
  });

  describe('When a game has been played for some length of time', () => {
    beforeEach(() => {
      game = new Game({
        numberOfHoursPlayed: 15,
        numberOfHoursToComplete: 20
      });
    });

    it('should be in progress', () => {
      expect(game.isInProgress).toEqual(true);
    });

    it('should have the correct value rounded to 1 decimal place as a string', () => {
      expect(game.estimatedCompletionPercentage).toEqual("75.0");
    });

    it('should have number of hours unplayed be the difference of the hours to complete', () => {
      expect(game.numberOfHoursUnplayed).toEqual(5);
    });
  });

  describe('When a game has not been played', () => {
    beforeEach(() => {
      game = new Game({
        numberOfHoursPlayed: 0,
        numberOfHoursToComplete: 20
      });
    });

    it('should not be in progress', () => {
      expect(game.isInProgress).toEqual(false);
    });

    it('should not have any estimated completion percentage', () => {
      expect(game.estimatedCompletionPercentage).toEqual("0.0");
    });

    it('should have number of hours unplayed equal to the hours to complete', () => {
      expect(game.numberOfHoursUnplayed).toEqual(game.numberOfHoursToComplete);
    });
  });

  describe('when there is a list of games', () => {
    let games = [];

    describe('and that list has zero games in it', () => {
      it('should have no finished games', () => {
        expect(Game.numberOfFinishedGames(games)).toEqual(0);
      });

      it('should have no days remaining rounded to 1 decimal place as a string', () => {
        expect(Game.getTotalDaysRemaining(games)).toEqual("0.0");
      });
    });

    describe('and that list has one unfinished game in it', () => {
      beforeEach(() => {
        games.push(new Game(
          { isComplete: true, numberOfHoursPlayed: 5, numberOfHoursToComplete: 20 }
          ));
        games.push(new Game(
          { isComplete: false, numberOfHoursPlayed: 5, numberOfHoursToComplete: 20 }
          ));
      });

      it('should have 1 finished games', () => {
        expect(Game.numberOfFinishedGames(games)).toEqual(1);
      });

      it('should have days remaining for the uncompleted game', () => {
        expect(Game.getTotalDaysRemaining(games)).toEqual("1.3");
      });
    });
  });

  describe('getPriorityArray()', () => {
    it('should return an array containing 10 priority values', () => {
      const actual = Game.getPriorityArray();
      expect(actual.length).toEqual(10);

      for(let i = 0; i < 10; i++) {
        expect(actual[i]).toEqual(i + 1);
      }
    });
  });
});