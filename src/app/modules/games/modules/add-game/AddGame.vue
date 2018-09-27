<template>
  <section id="add-game">
    <Pane>
      <SectionHeader>Add Game</SectionHeader>
      <Actions>
        <Button type="save">Save</Button>
        <Button type="normal"
                @click="goToGames()">
          Cancel
        </Button>
      </Actions>
    </Pane>

    <AddGameForm v-bind:platforms="platforms"></AddGameForm>
  </section>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Actions from "@/app/modules/ui/components/Actions";
  import Button from "@/app/modules/ui/components/Button";
  import AddGameForm from "@/app/modules/games/modules/add-game/components/AddGameForm";
  export default {
    name: 'AddGame',
    components: {AddGameForm, Button, Actions, SectionHeader, Pane},
    computed: {
      platforms: function() {
        return this.$store.state.gamesState.platforms;
      }
    },
    methods: {
      goToGames: function() {
        this.$router.replace('/games/listing');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>