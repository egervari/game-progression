<template>
  <em class="emphasis">
    <slot></slot>
  </em>
</template>

<script>
  export default {
    name: 'Emphasis'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  em.emphasis {
    color: $light-blue;
    font-style: normal;
    font-weight: normal;
  }
</style>