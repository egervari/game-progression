<template>
  <section id="user-profile-header">
    <img src="../../assets/profile-image.jpg" />
    Katie Egervari
  </section>
</template>

<style lang="scss" scoped>
  @import '../styles/colors';

  #user-profile-header {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 1.25rem;
    padding: 1rem;

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