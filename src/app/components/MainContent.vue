<template>
  <main id="main-content">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: "MainContent"
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  main#main-content {
    background: $light-blue;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem;
  }
</style>