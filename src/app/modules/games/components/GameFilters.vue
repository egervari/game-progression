<template>
  <Pane class="game-filters">
    <FormField>
      <Label>
        Platform
      </Label>
      <Select>
        <option>All</option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Completion
      </Label>
      <Select>
        <option>All</option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Sort
      </Label>
      <Select>
        <option>Priority</option>
      </Select>
    </FormField>

    <FormField>
      <Label>
        Search
      </Label>
      <Input placeholder="Enter a game name..." />
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
    components: {Select, Input, Button, FormField, Label, Pane }
  }
</script>

<style lang="scss" scoped>

</style>