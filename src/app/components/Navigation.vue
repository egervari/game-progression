<template>
  <nav id="navigation">
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/games/listing">Games</router-link>
  </nav>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  nav#navigation {
    background: $blue;
    padding: 0 2rem;

    a {
      color: $text-on-dark;
      display: inline-block;
      padding: 1rem;
      text-decoration: none;
      transition: all 200ms ease;

      &:hover {
        background-color: lighten($blue, 5%);
      }

      &.router-link-exact-active {
        background-color: $menu-highlight;
      }
    }
  }
</style>