<template>
  <div class="actions">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Actions'
  }
</script>

<style lang="scss" scoped>
  .actions {
    display: flex;

    *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
</style>