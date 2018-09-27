<template>
  <section id="games-listing">
    <GameFilters v-bind:filters="filters"
                 v-bind:platforms="platforms">
    </GameFilters>
    <GameCards v-bind:games="games"
               v-bind:platforms="platforms">
    </GameCards>
  </section>
</template>

<script>
  import GameFilters from "@/app/modules/games/modules/games-listing/components/GameFilters";
  import GameCards from "@/app/modules/games/modules/games-listing/components/GameCards";
  export default {
    name: 'GamesListing',
    components: {GameCards, GameFilters},
    mounted: function() {
      this.$store.dispatch('retrieveGames');
    },
    computed: {
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      },
      games: function() {
        return this.$store.state.gamesState.gamesListingState.games;
      },
      filters: function() {
        return this.$store.state.gamesState.gamesListingState.filters;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #games-listing {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>