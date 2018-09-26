<template>
  <h3 class="pane-header">
    <slot></slot>
  </h3>
</template>

<script>
  export default {
    name: 'PaneHeader'
  }
</script>

<style lang="scss" scoped>
  h3.pane-header {
    font-size: 20px;
    margin-top: 0;
  }
</style>