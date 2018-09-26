<template>
  <label class="label">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'Label'
  }
</script>

<style lang="scss" scoped>
  label.label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
</style>