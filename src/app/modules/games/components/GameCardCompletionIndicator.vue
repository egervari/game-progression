<template>
  <div class="game-card-completion-indicator">&nbsp;</div>
</template>

<script>
  export default {
    name: 'GameCardCompletionIndicator'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  .game-card-completion-indicator {
    background: $green;
    width: 1rem;
    height: 100%;
  }
</style>