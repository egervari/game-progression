<template>
  <section class="form-group">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'FormGroup'
  }
</script>

<style lang="scss" scoped>
  .form-group {
    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>