<template>
  <section id="game-listing">
    <GameCard v-for="game in games"
              :key="game.id"
              :game="game"
              :selected="isGameSelected(game.id)"
              :platforms="platforms">
    </GameCard>
  </section>
</template>

<script>
  import GameCard from "@/app/modules/games/modules/games-listing/components/GameCard";
  export default {
    name: 'GameCards',
    components: {GameCard},
    props: {
      games: Array,
      platforms: Array,
      gameSelections: Object
    },
    methods: {
      isGameSelected: function(gameId) {
        return this.gameSelections[gameId];
      }
    }
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