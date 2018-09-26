<template>
  <Layout>
    <Header v-bind:profile="profile"></Header>
    <Navigation></Navigation>
    <MainContent>
      <router-view/>
    </MainContent>
    <Footer v-bind:languages="languages"></Footer>
  </Layout>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  import Layout from './components/Layout';
  import MainContent from './components/MainContent';
  import Navigation from './components/Navigation';

  export default {
    components: { Footer, Header, Layout, MainContent, Navigation },
    mounted: function() {
      this.$store.dispatch('retrieveProfile');
      this.$store.dispatch('retrieveLanguages');
    },
    computed: {
      profile: function() {
        return this.$store.state.profile;
      },
      languages: function() {
        return this.$store.state.languages;
      }
    }
  }
</script>

<style lang="scss">
  @import 'styles/colors';

  html,
  body {
    margin: 0;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
</style>