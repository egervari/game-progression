<template>
  <div class="formField">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'FormField'
  }
</script>

<style lang="scss" scoped>
  .formField {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>