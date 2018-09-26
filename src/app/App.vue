<template>
  <Layout>
    <Header></Header>
    <Navigation></Navigation>
    <MainContent>
      <router-view/>
    </MainContent>
    <Footer></Footer>
  </Layout>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  import Layout from './components/Layout';
  import MainContent from './components/MainContent';
  import Navigation from './components/Navigation';

  export default {
    components: { Footer, Header, Layout, MainContent, Navigation }
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