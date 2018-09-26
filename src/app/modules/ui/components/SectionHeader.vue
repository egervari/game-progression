<template>
  <h2 class="section-header">
    <slot></slot>
  </h2>
</template>

<script>
  export default {
    name: 'SectionHeader'
  }
</script>

<style lang="scss" scoped>
  h2.section-header {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
  }
</style>