<template>
  <article class="game-card">
    <GameCardCompletionIndicator></GameCardCompletionIndicator>
    <GameCardDetails></GameCardDetails>
    <img src="../../../assets/profile-image.jpg" />
  </article>
</template>

<script>
  import GameCardCompletionIndicator from "@/app/modules/games/components/GameCardCompletionIndicator";
  import GameCardDetails from "@/app/modules/games/components/GameCardDetails";
  export default {
    name: 'GameCard',
    components: {GameCardDetails, GameCardCompletionIndicator}
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  article.game-card {
    align-items: end;
    background: $blue;
    color: $text-on-dark;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    &:hover {
      background: lighten($blue, 5%);
    }

    &:nth-child(odd) {
      margin-right: 1rem;
      width: calc(50% - 1rem);
    }

    &:nth-child(even) {
      margin-right: 0;
      width: calc(50%);
    }

    img {
      margin: 1rem;
      width: 5rem;
    }
  }
</style>