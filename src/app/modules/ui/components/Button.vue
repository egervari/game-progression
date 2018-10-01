<template>
  <button :class="classes"
          :disabled="disabled"
          :type="type"
          @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      variant: {
        type: String,
        default: 'normal'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    events: ['click'],
    computed: {
      classes: function () {
        return 'button ' + (this ? this.variant : '');
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