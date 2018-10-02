<template>
  <Pane>
    <FormGroup>
      <FormField>
        <Label>{{ $t('games.editGame.labels.numberOfHoursPlayed') }}</Label>
        <input name="numberOfHoursPlayed"
               v-model.number="game.numberOfHoursPlayed"
               v-validate="'required|min_value:0'"
               :change="$emit('change', game)" />
        <ErrorMessage v-show="errors.has('numberOfHoursPlayed')">
          {{ errors.first('numberOfHoursPlayed') }}
        </ErrorMessage>
      </FormField>
      <FormField>
        <Label>{{ $t('games.editGame.labels.priority') }}</Label>
        <select name="priority"
                v-model.number="game.priority"
                v-validate="'min_value:1'"
                :change="$emit('change', game)">
          <option value="0" disabled>
            {{ $t('games.addGame.placeholders.priority') }}
          </option>
          <option v-for="number in priorityNumbers"
                  :key="number"
                  :value="number">
            {{ number }}
          </option>
        </select>
        <ErrorMessage v-show="errors.has('priority')">
          {{ errors.first('priority') }}
        </ErrorMessage>
      </FormField>
      <p>
        <label>
          <input name="isComplete"
                 type="checkbox"
                 v-model="game.isComplete"
                 :change="$emit('change', game)" />
          {{ $t('games.editGame.labels.isComplete') }}
        </label>
      </p>
    </FormGroup>
  </Pane>
</template>

<script>
  import {Game} from "@/app/models/game";

  export default {
    name: 'EditGameForm',
    components: {},
    props: {
      value: {
        type: Game,
        required: true
      }
    },
    data: function() {
      return {
        game: { ...this.value }
      }
    },
    computed: {
      priorityNumbers: function() {
        return Game.getPriorityArray();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>