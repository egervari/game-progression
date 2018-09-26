<template>
  <footer id="footer">
    <a>English</a> | <a>Francais</a>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  footer#footer {
    background: $dark-blue;
    color: $text-on-dark;
    padding: 1rem 2rem;
    text-align: center;
  }
</style>