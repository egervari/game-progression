<template>
  <article class="game-card"
           @dblclick="goToEditGame()">
    <GameCardCompletionIndicator v-bind:game="game"></GameCardCompletionIndicator>
    <GameCardDetails v-bind:game="game"
                     v-bind:platforms="platforms">
    </GameCardDetails>
    <img :src="game.image" />
  </article>
</template>

<script>
  import GameCardCompletionIndicator from "@/app/modules/games/modules/games-listing/components/GameCardCompletionIndicator";
  import GameCardDetails from "@/app/modules/games/modules/games-listing/components/GameCardDetails";
  export default {
    name: 'GameCard',
    components: {GameCardDetails, GameCardCompletionIndicator},
    props: ['game', 'platforms'],
    methods: {
      goToEditGame: function() {
        this.$router.push('/games/edit-game')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../../../styles/colors';

  article.game-card {
    align-items: end;
    background: $blue;
    color: $text-on-dark;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    transition: all 150ms ease;

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