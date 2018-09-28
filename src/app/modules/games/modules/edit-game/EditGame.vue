<template>
  <form id="add-game"
        v-if="game"
        @submit.prevent="saveGame">
    <Pane>
      <SectionHeader>
        {{ $t('games.editGame.title', [game.name] )}}
      </SectionHeader>
      <Actions>
        <Button type="submit"
                variant="save">
          {{ $t('games.editGame.actions.save') }}
        </Button>
        <Button variant="normal"
                @click="goToGames()">
          {{ $t('games.editGame.actions.cancel') }}
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>{{ $t('games.editGame.labels.numberOfHoursPlayed') }}</Label>
          <input name="numberOfHoursPlayed"
                 v-model.number="game.numberOfHoursPlayed"
                 v-validate="'required|min_value:0'" />
          <ErrorMessage v-show="errors.has('numberOfHoursPlayed')">
            {{ errors.first('numberOfHoursPlayed') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('games.editGame.labels.priority') }}</Label>
          <select name="priority"
                  v-model.number="game.priority"
                  v-validate="'min_value:1'">
            <option value="0" disabled>
              {{ $t('games.addGame.placeholders.priority') }}
            </option>
            <option v-for="number in priorityNumbers"
                    v-bind:key="number"
                    v-bind:value="number">
              {{ number }}
            </option>
          </select>
          <ErrorMessage v-show="errors.has('priority')">
            {{ errors.first('priority') }}
          </ErrorMessage>
        </FormField>
        <p>
          <label>
            <input name="isComplete"
                   type="checkbox"
                   v-model="game.isComplete" />
            {{ $t('games.editGame.labels.isComplete') }}
          </label>
        </p>
      </FormGroup>
    </Pane>
  </form>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Actions from "@/app/modules/ui/components/Actions";
  import Button from "@/app/modules/ui/components/Button";
  import {EditGameStoreKeys} from "@/app/modules/games/modules/edit-game/edit-game-store-keys";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import FormField from "@/app/modules/ui/components/FormField";
  import Label from "@/app/modules/ui/components/Label";
  import ErrorMessage from "@/app/modules/ui/components/ErrorMessage";
  import {Game} from "@/app/models/game";
  export default {
    name: 'EditGame',
    components: {ErrorMessage, Label, FormField, FormGroup, Button, Actions, SectionHeader, Pane},
    mounted: function() {
      this.$store.dispatch(EditGameStoreKeys.Actions.RetrieveGame, this.$route.params.gameId);
    },
    computed: {
      game: function() {
        return this.$store.state.gamesState.editGameState.game;
      },
      priorityNumbers: function() {
        return Game.getPriorityArray();
      }
    },
    methods: {
      saveGame: function() {
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch(EditGameStoreKeys.Actions.UpdateGame, this.game);
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