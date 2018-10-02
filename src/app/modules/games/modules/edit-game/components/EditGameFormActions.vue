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
      <Button @click="$emit('cancelled')">
        {{ $t('games.editGame.actions.cancel') }}
      </Button>
    </Actions>
  </Pane>
</template>

<script>
  import {Game} from "@/app/models/game";

  export default {
    name: 'EditGameFormActions',
    components: {},
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