<template>
  <select class="select"
          v-bind:value="value"
          v-on:change="onChange">
    <slot></slot>
  </select>
</template>

<script>
  export default {
    name: 'Select',
    event: 'change',
    props: ['value'],
    methods: {
      onChange: function(event) {
        this.$emit('change', event.target.value);
      }
    }
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