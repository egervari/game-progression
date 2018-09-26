<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['type'],
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
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-transform: uppercase;

    &:focus {
      outline: none;
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
      color: $text-on-dark;

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