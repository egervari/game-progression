<template>
  <Pane>
    <SectionHeader>
      {{ $t('games.editGame.title', [game.name] )}}
    </SectionHeader>
    <Actions>
      <Button type="submit"
              variant="save">
        {{ $t('games.editGame.actions.save') }}
      </Button>
      <Button variant="normal"
              @click="$emit('cancelled')">
        {{ $t('games.editGame.actions.cancel') }}
      </Button>
    </Actions>
  </Pane>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Actions from "@/app/modules/ui/components/Actions";
  import Button from "@/app/modules/ui/components/Button";

  import {Game} from "@/app/models/game";

  export default {
    name: 'EditGameFormActions',
    components: {Button, Actions, SectionHeader, Pane},
    props: {
      game: {
        type: Game,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>