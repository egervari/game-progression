<template>
  <form id="add-game"
        @submit="saveGame">
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
          <input v-model="game.name" />
          <ErrorMessage v-if="errors.name">
            {{ errors.name }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('games.addGame.labels.imageUrl') }}</Label>
          <input v-model="game.image" />
          <ErrorMessage v-if="errors.image">
            {{ errors.image }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>{{ $t('games.addGame.labels.platform') }}</Label>
          <select v-model="game.platformId">
            <option value="0" disabled>
              {{ $t('games.addGame.placeholders.platform') }}
            </option>
            <option v-for="platform in platforms"
                    v-bind:key="platform.id"
                    v-bind:value="platform.id">
              {{ platform.name }}
            </option>
          </select>
          <ErrorMessage v-if="errors.platformId">
            {{ errors.platformId }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>
            {{ $t('games.addGame.labels.numberOfHoursToComplete') }}
          </Label>
          <input v-model="game.numberOfHoursToComplete"
                 type="number" />
          <ErrorMessage v-if="errors.numberOfHoursToComplete">
            {{ errors.numberOfHoursToComplete }}
          </ErrorMessage>
        </FormField>
        <FormField>
          <Label>
            {{ $t('games.addGame.labels.priority') }}
          </Label>
          <select v-model="game.priority">
            <option value="0" disabled>
              {{ $t('games.addGame.placeholders.priority') }}
            </option>
            <option v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    v-bind:key="number"
                    v-bind:value="number">
              {{ number }}
            </option>
          </select>
          <ErrorMessage v-if="errors.priority">
            {{ errors.priority }}
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
  export default {
    name: 'AddGame',
    components: {ErrorMessage, Label, FormField, FormGroup, Button, Actions, SectionHeader, Pane},
    data: function() {
      return {
        game: {
          name: '',
          image: '',
          platformId: 0,
          numberOfHoursToComplete: '',
          priority: 0
        },
        errors: {}
      }
    },
    computed: {
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      }
    },
    methods: {
      isValid: function() {
        this.errors = {};

        if (!this.game.name) {
          this.errors.name = 'The name is required';
        }

        if (!this.game.image) {
          this.errors.image = 'The image is required';
        }

        if (this.game.platformId === 0) {
          this.errors.platformId = 'The platform must be selected';
        }

        if (!this.game.numberOfHoursToComplete) {
          this.errors.numberOfHoursToComplete = 'The number of hours is required';
        }

        if (this.game.priority === 0) {
          this.errors.priority = 'The number of hours is required';
        }

        return Object.keys(this.errors).length === 0;
      },

      saveGame: function(event) {
        event.preventDefault();

        if (this.isValid()) {
          this.$store.dispatch(AddGameStoreKeys.Actions.SaveGame, {
            ...this.game,
            dateCreated: new Date().toISOString(),
            numberOfHoursToComplete: Number(this.game.numberOfHoursToComplete),
            numberOfHoursPlayed: 0,
            platformId: Number(this.game.platformId),
            priority: Number(this.game.priority)
          });
        }
      },

      goToGames: function() {
        this.$router.replace('/games/listing');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>