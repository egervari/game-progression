<template>
  <Pane id="game-filters">
    <FormField>
      <Label>
        Platform
      </Label>
      <Select v-model="filters.platform"
              v-on:change="onPlatformFilterChanged">
        <option :value="null">All</option>
        <option v-for="platform in platforms"
                :value="platform.id">
          {{ platform.name }}
        </option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Completion
      </Label>
      <Select v-model="filters.completion"
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
      <Select v-model="filters.sortBy"
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
             v-model="filters.searchText"
             v-on:change="onSearchTextChanged" />
    </FormField>

    <Button type="normal">Add Game</Button>
    <Button type="warn">Delete Games</Button>
  </Pane>
</template>

<script>
  import FormField from '../../ui/components/FormField';
  import Label from '../../ui/components/Label';
  import Pane from '../../ui/components/Pane';
  import Button from "@/app/modules/ui/components/Button";
  import Input from "@/app/modules/ui/components/Input";
  import Select from "@/app/modules/ui/components/Select";

  export default {
    name: 'GameFilters',
    components: {Select, Input, Button, FormField, Label, Pane },
    props: ['filters', 'platforms'],
    methods: {
      onPlatformFilterChanged: function(platform) {
        this.$store.dispatch('setPlatformFilter', Number(platform));
      },

      onCompletionFilterChanged: function(completion) {
        this.$store.dispatch('setCompletionFilter', completion);
      },

      onSortByChanged: function(sortBy) {
        this.$store.dispatch('setSortBy', sortBy);
      },

      onSearchTextChanged: function(searchText) {
        this.$store.dispatch('setSearchText', searchText);
      }
    }
  }
</script>

<style lang="scss" scoped>
  #game-filters {
    flex-shrink: 0;
  }
</style>