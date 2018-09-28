<template>
  <form id="add-game"
        @submit.prevent="saveGame">
    <Pane>
      <SectionHeader>
        {{ $t('games.addGame.title' )}}
      </SectionHeader>
      <Actions>
        <Button type="submit"
                variant="save">
          {{ $t('games.addGame.actions.save') }}
        </Button>
        <Button variant="normal"
                @click="goToGames()">
          {{ $t('games.addGame.actions.cancel') }}
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>
            {{ $t('games.addGame.labels.name') }}
          </Label>
          <input name="name"
                 v-model.trim="game.name"
                 v-validate="'required'" />
          <ErrorMessage v-show="errors.has('name')">
            {{ errors.first('name') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('games.addGame.labels.imageUrl') }}</Label>
          <input name="image"
                 v-model.trim="game.image"
                 v-validate="'required'" />
          <ErrorMessage v-show="errors.has('image')">
            {{ errors.first('image') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('games.addGame.labels.platform') }}</Label>
          <select name="platformId"
                  v-model.number="game.platformId"
                  v-validate="'min_value:1'">
            <option value="0" disabled>
              {{ $t('games.addGame.placeholders.platform') }}
            </option>
            <option v-for="platform in platforms"
                    v-bind:key="platform.id"
                    v-bind:value="platform.id">
              {{ platform.name }}
            </option>
          </select>
          <ErrorMessage v-show="errors.has('platformId')">
            {{ errors.first('platformId') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>
            {{ $t('games.addGame.labels.numberOfHoursToComplete') }}
          </Label>
          <input name="numberOfHoursToComplete"
                 type="number"
                 v-model.number="game.numberOfHoursToComplete"
                 v-validate="'required|min_value:0'" />
          <ErrorMessage v-show="errors.has('numberOfHoursToComplete')">
            {{ errors.first('numberOfHoursToComplete') }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>
            {{ $t('games.addGame.labels.priority') }}
          </Label>
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
      </FormGroup>
    </Pane>
  </form>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Actions from "@/app/modules/ui/components/Actions";
  import Button from "@/app/modules/ui/components/Button";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import FormField from "@/app/modules/ui/components/FormField";
  import {AddGameStoreKeys} from "@/app/modules/games/modules/add-game/add-game-store-keys";
  import Label from "@/app/modules/ui/components/Label";
  import ErrorMessage from "@/app/modules/ui/components/ErrorMessage";
  import {Game} from "@/app/models/game";
  export default {
    name: 'AddGame',
    components: {ErrorMessage, Label, FormField, FormGroup, Button, Actions, SectionHeader, Pane},
    data: function() {
      return {
        game: Game.createGame()
      }
    },
    computed: {
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      },
      priorityNumbers: function() {
        return Game.getPriorityArray();
      }
    },
    methods: {
      saveGame: function() {
        this.$validator.validate().then(isValid => {
          if (isValid) {
            this.$store.dispatch(AddGameStoreKeys.Actions.SaveGame, {
              ...this.game,
              dateCreated: new Date().toISOString(),
              numberOfHoursPlayed: 0
            });
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