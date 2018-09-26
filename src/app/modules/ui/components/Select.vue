<template>
  <select class="select">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'Select'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  select.select {
    background: lighten($text-on-dark, 5%);
    color: $text-on-white;
    padding: 0.4rem;
  }
</style>