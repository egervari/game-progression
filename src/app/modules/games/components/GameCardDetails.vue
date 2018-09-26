<template>
  <div class="game-card-details">
    <h3>{{ game.name }}</h3>
    <Emphasis>{{ getPlatformNameById(game.platformId) }}</Emphasis>
    <p>
      <strong>Est. Completed: </strong>
      <Emphasis>{{ estimatedCompletion }}%</Emphasis>
    </p>
    <p>
      <strong>Completion Date: </strong>
      <Emphasis>09/30/2018</Emphasis>
    </p>
  </div>
</template>

<script>
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  export default {
    name: 'GameCardDetails',
    components: {Emphasis},
    props: ['game', 'platforms'],
    computed: {
      estimatedCompletion: function() {
        if (this.game.isComplete) {
          return 100;
        } else {
          return Number(
            Math.min(this.game.numberOfHoursPlayed / this.game.numberOfHoursToComplete * 100, 100)
          ).toFixed(1);
        }
      }
    },
    methods: {
      getPlatformNameById: function(platformId) {
        return this.platforms.length > 0 ?
          this.platforms.find(platform => platform.id === platformId).name :
          '';
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