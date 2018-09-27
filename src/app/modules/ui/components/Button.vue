<template>
  <button v-bind:class="classes"
          v-bind:disabled="disabled"
          @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['type', 'disabled'],
    events: ['click'],
    computed: {
      classes: function () {
        return 'button ' + (this ? this.type : '');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  button.button {
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    min-width: 6.5rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    transition: all 200ms ease;

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }

    &.normal {
      background: $light-blue;
      color: $blue;

      &:hover {
        background: lighten($light-blue, 7.5%);
      }
    }

    &.save {
      background: $green;
      color: $blue;

      &:hover {
        background: lighten($green, 5%);
      }
    }

    &.warn {
      background: $red;
      color: $text-on-dark;

      &:hover {
        background: lighten($red, 5%);
      }
    }
  }
</style>