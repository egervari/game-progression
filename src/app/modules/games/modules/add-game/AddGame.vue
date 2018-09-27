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
          <Input v-bind:value="game.name"
                 @change="game.name = $event" />
        </FormField>
        <FormField>
          <Label>Image URL</Label>
          <Input v-bind:value="game.image"
                 @change="game.image = $event"/>
        </FormField>
        <FormField>
          <Label>Platform</Label>
          <Select v-bind:value="game.platformId"
                  @change="game.platformId = $event">
            <option value="0">Choose a Platform...</option>
            <option v-for="platform in platforms"
                    v-bind:key="platform.id"
                    v-bind:value="platform.id">
              {{ platform.name }}
            </option>
          </Select>
        </FormField>
        <FormField>
          <Label>Number of Hours to Complete</Label>
          <Input v-bind:value="game.numberOfHoursToComplete"
                 @change="game.numberOfHoursToComplete = $event"/>
        </FormField>
        <FormField>
          <Label>Priority</Label>
          <Select v-bind:value="game.priority"
                  @change="game.priority = $event">
            <option v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    v-bind:key="number"
                    v-bind:value="number">
              {{ number }}
            </option>
          </Select>
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
  import Input from "@/app/modules/ui/components/Input";
  import Select from "@/app/modules/ui/components/Select";
  import {AddGameStoreKeys} from "@/app/modules/games/modules/add-game/add-game-store-keys";
  import Label from "@/app/modules/ui/components/Label";
  export default {
    name: 'AddGame',
    components: {Label, Select, Input, FormField, FormGroup, Button, Actions, SectionHeader, Pane},
    data: function() {
      return {
        game: {
          name: '',
          image: '',
          platformId: 0,
          numberOfHoursToComplete: '',
          priority: 1
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