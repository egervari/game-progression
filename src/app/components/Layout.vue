<template>
  <article id="layout">
    <slot></slot>
  </article>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style lang="scss" scoped>
  article#layout {
    display: flex;
    flex-direction: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>