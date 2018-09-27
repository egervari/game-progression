<template>
  <Pane id="game-filters">
    <FormField>
      <Label>
        Platform
      </Label>
      <Select v-bind:value="filters.platform"
              v-on:change="onPlatformFilterChanged">
        <option value="0">All</option>
        <option v-for="platform in platforms"
                v-bind:key="platform.id"
                :value="platform.id">
          {{ platform.name }}
        </option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Completion
      </Label>
      <Select v-bind:value="filters.completion"
              v-on:change="onCompletionFilterChanged">
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="not-complete">Not Complete</option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Sort
      </Label>
      <Select v-bind:value="filters.sortBy"
              v-on:change="onSortByChanged">
        <option value="priority">Priority</option>
        <option value="dateCreated">Date Created</option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Search
      </Label>
      <Input placeholder="Enter a game name..."
             v-bind:value="filters.searchText"
             v-on:change="onSearchTextChanged" />
    </FormField>

    <Actions>
      <Button type="normal"
              @click="goToAddGame()">
        Add Game
      </Button>
      <Button type="warn"
              v-bind:disabled="isDeleteDisabled()"
              @click="deleteSelectedGames()">
        Delete {{ numberOfSelections }} Games
      </Button>
    </Actions>
  </Pane>
</template>

<script>
  import FormField from '../../../../ui/components/FormField';
  import Label from '../../../../ui/components/Label';
  import Pane from '../../../../ui/components/Pane';
  import Button from "@/app/modules/ui/components/Button";
  import Input from "@/app/modules/ui/components/Input";
  import Select from "@/app/modules/ui/components/Select";
  import Actions from "@/app/modules/ui/components/Actions";
  import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";

  export default {
    name: 'GameFilters',
    components: {Actions, Select, Input, Button, FormField, Label, Pane },
    props: ['filters', 'platforms', 'numberOfSelections'],
    methods: {
      onPlatformFilterChanged: function(platform) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetPlatformFilter, Number(platform));
      },

      onCompletionFilterChanged: function(completion) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetCompletionFilter, completion);
      },

      onSortByChanged: function(sortBy) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetSortBy, sortBy);
      },

      onSearchTextChanged: function(searchText) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetSearchText, searchText);
      },

      goToAddGame: function() {
        this.$router.push('/games/add-game');
      },

      isDeleteDisabled: function() {
        return this.numberOfSelections === 0;
      },

      deleteSelectedGames: function() {
        this.$store.dispatch(GamesListingStoreKeys.Actions.DeleteSelectedGames);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #game-filters {
    flex-shrink: 0;
  }
</style>