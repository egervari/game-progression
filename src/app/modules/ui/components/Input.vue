<template>
  <input class="input"
         :placeholder="placeholder" />
</template>

<script>
  export default {
    name: 'Input',
    props: ['placeholder']
  }
</script>

<style lang="scss" scoped>
  @import '../../../styles/colors';

  input.input {
    border: none;
    background: lighten($text-on-dark, 5%);
    color: $text-on-white;
    flex-grow: 1;
    font-size: 1em;
    outline: none;
    padding: 0.4rem 0.5rem;

    &:disabled {
      opacity: 0.5;
    }

    &::-webkit-input-placeholder {
      color: $placeholder-text-color;
    }

    &:-moz-placeholder {
      color: $placeholder-text-color;
    }

    &::-moz-placeholder {
      color: $placeholder-text-color;
    }

    &:-ms-input-placeholder {
      color: $placeholder-text-color;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }
  }
</style>