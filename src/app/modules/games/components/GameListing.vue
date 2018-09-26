<template>
  <section id="game-listing">
    <GameCard></GameCard>
    <GameCard></GameCard>
    <GameCard></GameCard>
    <GameCard></GameCard>
  </section>
</template>

<script>
  import GameCard from "@/app/modules/games/components/GameCard";
  export default {
    name: 'GameListing',
    components: {GameCard}
  }
</script>

<style lang="scss" scoped>
  #game-listing {
    display: flex;
    flex-wrap: wrap;
  }
</style>