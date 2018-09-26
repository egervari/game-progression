<template>
  <Pane class="game-filters">
    <FormField>
      <Label>
        Platform
      </Label>
      <select>
        <option>All</option>
      </select>
    </FormField>

    <FormField>
      <Label>
        Completion
      </Label>
      <select>
        <option>All</option>
      </select>
    </FormField>

    <FormField>
      <Label>
        Sort
      </Label>
      <select>
        <option>Priority</option>
      </select>
    </FormField>

    <FormField>
      <Label>
        Search
      </Label>
      <input />
    </FormField>

    <button>Add Game</button>
    <button>Delete Games</button>
  </Pane>
</template>

<script>
  import FormField from '../../ui/components/FormField';
  import Label from '../../ui/components/Label';
  import Pane from '../../ui/components/Pane';

  export default {
    name: 'GameFilters',
    components: { FormField, Label, Pane }
  }
</script>

<style lang="scss" scoped>

</style>