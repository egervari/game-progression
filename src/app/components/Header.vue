<template>
  <header id="header">
    <h1>{{ $t('app.title') }}</h1>
    <UserProfileHeader v-bind:profile="profile"></UserProfileHeader>
  </header>
</template>

<script>
  import UserProfileHeader from './UserProfileHeader';

  export default {
    name: 'Header',
    components: { UserProfileHeader },
    props: ['profile']
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  header#header {
    align-items: center;
    background: $dark-blue;
    color: $text-on-dark;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 0 2rem;

    h1 {
      font-size: 30px;
      font-weight: normal;
      margin: 0;
    }
  }
</style>