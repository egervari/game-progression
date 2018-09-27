<template>
  <Pane>
    <FormGroup>
      <FormField>
        <Label>Name</Label>
        <Input v-bind:value="game.name" />
      </FormField>
      <FormField>
        <Label>Image URL</Label>
        <Input v-bind:value="game.image" />
      </FormField>
      <FormField>
        <Label>Platform</Label>
        <Select v-bind:value="game.platformId">
          <option value="">Choose a Platform...</option>
          <option v-for="platform in platforms"
                  v-bind:key="platform.id"
                  v-bind:value="platform.id">
            {{ platform.name }}
          </option>
        </Select>
      </FormField>
      <FormField>
        <Label>Number of Hours to Complete</Label>
        <Input v-bind:value="game.numberOfHoursToComplete" />
      </FormField>
      <FormField>
        <Label>Priority</Label>
        <Select v-bind:value="game.priority">
          <option v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  v-bind:key="number"
                  v-bind:value="number">
            {{ number }}
          </option>
        </Select>
      </FormField>
    </FormGroup>
  </Pane>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import FormGroup from "@/app/modules/ui/components/FormGroup";
  import FormField from "@/app/modules/ui/components/FormField";
  import Label from "@/app/modules/ui/components/Label";
  import Select from "@/app/modules/ui/components/Select";
  import Input from "@/app/modules/ui/components/Input";
  export default {
    name: 'AddGameForm',
    components: {Input, Select, Label, FormField, FormGroup, Pane},
    props: ['platforms'],
    data: function() {
      return {
        game: {
          priority: 1
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>