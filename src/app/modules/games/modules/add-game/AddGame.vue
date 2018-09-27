<template>
  <section id="add-game">
    <Pane>
      <SectionHeader>Add Game</SectionHeader>
      <Actions>
        <Button type="save"
                @click="saveGame()">
          Save
        </Button>
        <Button type="normal"
                @click="goToGames()">
          Cancel
        </Button>
      </Actions>
    </Pane>

    <Pane>
      <FormGroup>
        <FormField>
          <Label>Name</Label>
          <input v-model="game.name" />
        </FormField>
        <FormField>
          <Label>Image URL</Label>
          <input v-model="game.image" />
        </FormField>
        <FormField>
          <Label>Platform</Label>
          <select v-model="game.platformId">
            <option value="0" disabled>Choose a Platform...</option>
            <option v-for="platform in platforms"
                    v-bind:key="platform.id"
                    v-bind:value="platform.id">
              {{ platform.name }}
            </option>
          </select>
        </FormField>
        <FormField>
          <Label>Number of Hours to Complete</Label>
          <input v-model="game.numberOfHoursToComplete" />
        </FormField>
        <FormField>
          <Label>Priority</Label>
          <select v-model="game.priority">
            <option value="0" disabled>Choose a priority</option>
            <option v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    v-bind:key="number"
                    v-bind:value="number">
              {{ number }}
            </option>
          </select>
        </FormField>
      </FormGroup>
    </Pane>
  </section>
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
  export default {
    name: 'AddGame',
    components: {Label, FormField, FormGroup, Button, Actions, SectionHeader, Pane},
    data: function() {
      return {
        game: {
          name: '',
          image: '',
          platformId: 0,
          numberOfHoursToComplete: '',
          priority: 0
        }
      }
    },
    computed: {
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      }
    },
    methods: {
      saveGame: function() {
        this.$store.dispatch(AddGameStoreKeys.Actions.SaveGame, {
          ...this.game,
          dateCreated: new Date().toISOString(),
          numberOfHoursToComplete: Number(this.game.numberOfHoursToComplete),
          numberOfHoursPlayed: 0,
          platformId: Number(this.game.platformId),
          priority: Number(this.game.priority)
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