<template>
  <section id="games-listing">
    <GameFilters v-bind:filters="filters"
                 v-bind:platforms="platforms"
                 v-bind:numberOfSelections="numberOfSelections">
    </GameFilters>
    <GameCards v-bind:games="games"
               v-bind:platforms="platforms"
               v-bind:game-selections="gameSelections">
    </GameCards>
  </section>
</template>

<script>
  import GameFilters from "@/app/modules/games/modules/games-listing/components/GameFilters";
  import GameCards from "@/app/modules/games/modules/games-listing/components/GameCards";
  import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";
  export default {
    name: 'GamesListing',
    components: {GameCards, GameFilters},
    mounted: function() {
      this.$store.dispatch(GamesListingStoreKeys.Actions.RetrieveGames);
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
      },
      gameSelections: function() {
        return this.$store.state.gamesState.gamesListingState.gameSelections;
      },
      numberOfSelections: function() {
        return Object.keys(this.gameSelections).reduce(
          (total, key) => total + (this.gameSelections[key] ? 1 : 0),
          0
        );
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