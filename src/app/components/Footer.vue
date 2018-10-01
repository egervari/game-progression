<template>
  <footer id="footer"
          v-if="profile">
    <span v-for="(language, index) in languages"
          :key="language.id">
      <a :class="getClass(language.id)"
         @click="selectLanguage(language.id)">
        {{ language.name }}
      </a>
      <span v-if="isLast(index)">|</span>
    </span>
  </footer>
</template>

<script>
  import {AppStoreKeys} from "@/app/app-store-keys";

  export default {
    name: "Footer",
    props: ['languages', 'profile'],
    methods: {
      getClass: function(languageId) {
        return this.profile.languageId === languageId ? 'selected' : '';
      },

      selectLanguage: function(languageId) {
        this.$store.dispatch(AppStoreKeys.Actions.SelectLanguage, languageId);
      },

      isLast: function(index) {
        return index !== this.languages.length - 1;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  #footer {
    background: $dark-blue;
    color: $text-on-dark;
    padding: 1rem 2rem;
    text-align: center;

    a {
      cursor: pointer;
      display: inline-block;
      padding: 0 0.5rem;
      transition: all 150ms ease;

      &.selected {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
</style>