<template>
  <div class="game-card-details">
    <h3>{{ game.name }}</h3>
    <Emphasis>{{ getGamePlatformName() }}</Emphasis>
    <p>
      <strong>{{ $t('games.gamesListing.labels.estimatedCompleted') }}: </strong>
      <Emphasis>{{ estimatedCompletion }}%</Emphasis>
    </p>
    <p>
      <strong>{{ $t('games.gamesListing.labels.completionDate') }}: </strong>
      <Emphasis>09/30/2018</Emphasis>
    </p>
  </div>
</template>

<script>
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  import {Game} from "@/app/models/game";
  import {Platform} from "@/app/modules/games/models/platform";
  export default {
    name: 'GameCardDetails',
    components: {Emphasis},
    props: ['game', 'platforms'],
    computed: {
      estimatedCompletion: function() {
        if (this.game.isComplete) {
          return 100;
        } else {
          return Game.getEstimatedCompletion(this.game);
        }
      }
    },
    methods: {
      getGamePlatformName: function() {
        return Platform.getPlatformNameById(this.platforms, this.game.platformId);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .game-card-details {
    flex-grow: 1;
    padding: 1rem;

    h3 {
      margin-top: 0;
      margin-bottom: 0.25rem;
    }

    p {
      &:not(:first-of-type) {
        margin-top: 0;
      }

      margin-bottom: 0.25rem;
    }
  }
</style>