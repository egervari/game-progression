<template>
  <section id="game-listing">
    <GameCard v-for="game in games"
              v-bind:game="game"
              v-bind:platforms="platforms">
    </GameCard>
  </section>
</template>

<script>
  import GameCard from "@/app/modules/games/components/GameCard";
  export default {
    name: 'GameListing',
    components: {GameCard},
    props: ['games', 'platforms']
  }
</script>

<style lang="scss" scoped>
  #game-listing {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.10);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.20);
    }
  }
</style>