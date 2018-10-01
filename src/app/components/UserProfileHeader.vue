<template>
  <section id="user-profile-header"
           v-if="profile"
           @click="goToProfile()">
    <img src="../assets/profile-image.jpg" />
    {{ profile.fullName }}
  </section>
</template>

<script>
  export default {
    name: 'UserProfileHeader',
    props: ['profile'],
    methods: {
      goToProfile: function() {
        this.$router.replace('/profile/details');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/colors';

  #user-profile-header {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 1.25rem;
    padding: 1rem;
    transition: all 200ms ease;

    &:hover {
      background: lighten($dark-blue, 5%);
    }

    img {
      border-radius: 100%;
      margin-right: 1rem;
      width: 4rem;
    }
  }
</style>