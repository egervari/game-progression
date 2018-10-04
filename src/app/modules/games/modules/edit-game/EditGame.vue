<template>
  <form id="add-game"
        v-if="game"
        @submit.prevent="saveGame">
    <EditGameFormActions :game="game"
                         @cancelled="goToGames">
    </EditGameFormActions>

    <EditGameForm v-if="game"
                  :value="game"
                  @change="modifiedGame = $event">
    </EditGameForm>
  </form>
</template>

<script>
  import EditGameForm from "@/app/modules/games/modules/edit-game/components/EditGameForm";
  import EditGameFormActions from "@/app/modules/games/modules/edit-game/components/EditGameFormActions";

  import {EditGameStoreKeys} from "@/app/modules/games/modules/edit-game/edit-game-store-keys";
  import {Game} from "@/app/models/game";

  export default {
    name: 'EditGame',
    components: {EditGameFormActions, EditGameForm},
    mounted: function() {
      this.$store.dispatch(EditGameStoreKeys.Actions.RetrieveGame, this.$route.params.gameId);
    },
    data: function() {
      return {
        modifiedGame: new Game()
      };
    },
    computed: {
      game: function() {
        return this.$store.state.gamesState.editGameState.game;
      }
    },
    methods: {
      saveGame: function() {
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch(EditGameStoreKeys.Actions.UpdateGame, this.modifiedGame)
              .then(() => this.$router.replace('/games/listing'));
          }
        });
      },

      goToGames: function() {
        this.$router.replace('/games/listing');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>