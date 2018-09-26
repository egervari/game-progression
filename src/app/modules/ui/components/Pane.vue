<template>
  <section class="pane">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: "Pane"
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  .pane {
    align-items: flex-end;
    background-color: $blue;
    border-radius: 0.5rem;
    color: $text-on-dark;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem;

    > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
</style>