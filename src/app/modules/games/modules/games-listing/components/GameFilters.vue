<template>
  <Pane id="game-filters">
    <FormField>
      <Label>
        {{ $t('games.gamesListing.labels.platform') }}
      </Label>
      <select :value="filters.platform"
              v-on:change="onPlatformFilterChanged">
        <option value="0">
          {{ $t('games.gamesListing.filters.platform.all') }}
        </option>
        <option v-for="platform in platforms"
                :key="platform.id"
                :value="platform.id">
          {{ platform.name }}
        </option>
      </select>
    </FormField>

    <FormField>
      <Label>
        {{ $t('games.gamesListing.labels.completion' )}}
      </Label>
      <select :value="filters.completion"
              v-on:change="onCompletionFilterChanged">
        <option value="all">
          {{ $t('games.gamesListing.filters.completion.all') }}
        </option>
        <option value="complete">
          {{ $t('games.gamesListing.filters.completion.complete') }}
        </option>
        <option value="not-complete">
          {{ $t('games.gamesListing.filters.completion.notComplete') }}
        </option>
      </select>
    </FormField>

    <FormField>
      <Label>
        {{ $t('games.gamesListing.labels.sort') }}
      </Label>
      <select :value="filters.sortBy"
              v-on:change="onSortByChanged">
        <option value="priority">
          {{ $t('games.gamesListing.filters.sort.priority') }}
        </option>
        <option value="dateCreated">
          {{ $t('games.gamesListing.filters.sort.dateCreated')}}
        </option>
      </select>
    </FormField>

    <FormField>
      <Label>
        {{ $t('games.gamesListing.labels.search') }}
      </Label>
      <input :placeholder="$t('games.gamesListing.placeholders.searchText')"
             :value="filters.searchText"
             v-on:change="onSearchTextChanged" />
    </FormField>

    <Actions>
      <Button @click="goToAddGame()">
        {{ $t('games.gamesListing.actions.addGame') }}
      </Button>
      <Button variant="warn"
              :disabled="isDeleteDisabled()"
              @click="deleteSelectedGames()">
        {{ $t('games.gamesListing.actions.deleteGames', [numberOfSelections]) }}
      </Button>
    </Actions>
  </Pane>
</template>

<script>
  import {GamesListingStoreKeys} from "@/app/modules/games/modules/games-listing/games-listing-store-keys";

  export default {
    name: 'GameFilters',
    components: {},
    props: {
      filters: Object,
      platforms: Array,
      numberOfSelections: Number
    },
    methods: {
      onPlatformFilterChanged: function(event) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetPlatformFilter, Number(event.target.value));
      },

      onCompletionFilterChanged: function(event) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetCompletionFilter, event.target.value);
      },

      onSortByChanged: function(event) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetSortBy, event.target.value);
      },

      onSearchTextChanged: function(event) {
        this.$store.dispatch(GamesListingStoreKeys.Actions.SetSearchText, event.target.value);
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