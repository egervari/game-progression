<template>
  <p class="error-message">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: 'ErrorMessage'
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  .error-message {
    color: $red;
    font-style: italic;
    font-weight: 600;
    margin-top: 0.75rem;
    margin-bottom: 0;
    white-space: normal;
  }
</style>