<template>
  <footer id="footer">
    <a v-for="(language, index) in languages"
       v-bind:key="language.id">
      {{ language.name }}
      <span v-if="isLast(index)"> | </span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    props: ['languages'],
    methods: {
      isLast: function(index) {
        return index !== this.languages.length - 1;
      }
    }
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