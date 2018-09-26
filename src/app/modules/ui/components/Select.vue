<template>
  <select class="select">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'Select'
  }
</script>

<style lang="scss" scoped>
  select.select {
    padding: 0.4rem;
  }
</style>