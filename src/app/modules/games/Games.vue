<template>
  <router-view></router-view>
</template>

<script>
  import { GamesStoreKeys } from "@/app/modules/games/modules/games-store-keys";

  export default {
    name: 'games',
    mounted: function() {
      this.$store.dispatch(GamesStoreKeys.Actions.RetrievePlatforms);
    }
  }
</script>

<style lang="scss" scoped>

</style>