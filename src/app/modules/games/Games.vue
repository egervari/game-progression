<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'games',
    mounted: function() {
      this.$store.dispatch('retrievePlatforms');
    }
  }
</script>

<style lang="scss" scoped>

</style>