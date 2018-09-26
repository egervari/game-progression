<template>
  <section id="profile">
    <Pane>
      <SectionHeader>My Profile</SectionHeader>
      <Button type="normal">Edit</Button>
    </Pane>

    <ProfileDetails></ProfileDetails>
  </section>
</template>

<script>
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Pane from "@/app/modules/ui/components/Pane";
  import Button from "@/app/modules/ui/components/Button";
  import ProfileDetails from "@/app/modules/profile/components/ProfileDetails";
  export default {
    name: 'Profile',
    components: {ProfileDetails, Button, Pane, SectionHeader}
  }
</script>

<style lang="scss" scoped>
  #profile {

  }
</style>