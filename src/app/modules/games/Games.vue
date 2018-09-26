<template>
  <section id="games">
    <GameFilters v-bind:filters="filters"
                 v-bind:platforms="platforms">
    </GameFilters>
    <GameListing v-bind:games="games"
                 v-bind:platforms="platforms">
    </GameListing>
  </section>
</template>

<script>
  import GameFilters from './components/GameFilters';
  import GameListing from "@/app/modules/games/components/GameListing";

  export default {
    name: 'games',
    components: {GameListing, GameFilters },
    mounted: function() {
      this.$store.dispatch('retrieveGames');
      this.$store.dispatch('retrievePlatforms');
    },
    computed: {
      games: function() {
        return this.$store.state.gamesState.games;
      },
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      },
      filters: function() {
        return this.$store.state.gamesState.filters;
      }
    }
  }
</script>

<style lang="scss" scoped>
  section#games {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>