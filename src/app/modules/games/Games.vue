<template>
  <section id="games">
    <GameFilters></GameFilters>
    <GameListing></GameListing>
  </section>
</template>

<script>
  import GameFilters from './components/GameFilters';
  import GameListing from "@/app/modules/games/components/GameListing";

  export default {
    name: 'games',
    components: {GameListing, GameFilters }
  }
</script>
