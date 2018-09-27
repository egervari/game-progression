<template>
  <section id="user-profile-header"
           @click="goToProfile()">
    <img src="../assets/profile-image.jpg" />
    {{ fullName }}
  </section>
</template>

<script>
  export default {
    name: 'UserProfileHeader',
    props: ['profile'],
    computed: {
      fullName: function() {
        return this.profile ?
          this.profile.firstName + ' ' + this.profile.lastName :
          '';
      }
    },
    methods: {
      goToProfile: function() {
        this.$router.replace('/profile');
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