<template>
  <div :class="classes">&nbsp;</div>
</template>

<script>
  export default {
    name: 'GameCardCompletionIndicator',
    props: ['game'],
    computed: {
      type: function() {
        if (this.game.isComplete) {
          return 'complete';
        } else if (this.game.numberOfHoursPlayed > 0) {
          return 'in-progress';
        } else {
          return 'not-started';
        }
      },
      classes: function() {
        return 'game-card-completion-indicator ' + this.type
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  .game-card-completion-indicator {
    flex-shrink: 0;
    height: 100%;
    width: 1rem;

    &.complete {
      background: $green;
    }

    &.in-progress {
      background: $orange;
    }

    &.not-started {
      background: $red;
    }
  }
</style>