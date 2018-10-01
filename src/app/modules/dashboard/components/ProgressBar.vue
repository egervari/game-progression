<template>
  <progress class="progress-bar"
            :value="value"
            :max="total"
            :class="type">
  </progress>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: {
      value: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 100
      },
      type: {
        type: String,
        default: 'unfinished',
        validator: function(value) {
          return ['unfinished', 'finished'].includes(value);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  progress.progress-bar {
    border: none;
    height: 2rem;
    width: 100%;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-progress-bar {
      border-radius: 0.25rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    &::-webkit-progress-value {
      border-radius: 0.25rem;
      transition: all 100ms ease;
    }

    &.finished {
      &::-webkit-progress-bar {
        background-color: $light-green;
      }

      &::-webkit-progress-value {
        background: $green;
      }
    }

    &.unfinished {
      &::-webkit-progress-bar {
        background-color: $light-red;
      }

      &::-webkit-progress-value {
        background: $red;
      }
    }
  }
</style>