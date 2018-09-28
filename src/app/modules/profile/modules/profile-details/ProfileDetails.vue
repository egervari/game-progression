<template>
  <section id="profile">
    <Pane>
      <SectionHeader>{{ $t('profile.profileDetails.title' )}}</SectionHeader>
      <Button variant="normal"
              @click="goToEditProfile()">
        {{ $t('profile.profileDetails.actions.edit' )}}
      </Button>
    </Pane>

    <ProfileDetailsPane v-if="profile"
                        v-bind:profile="profile"
                        v-bind:languages="languages">
    </ProfileDetailsPane>
  </section>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import Button from "@/app/modules/ui/components/Button";
  import ProfileDetailsPane from "@/app/modules/profile/modules/profile-details/components/ProfileDetailsPane";
  export default {
    name: 'ProfileDetails',
    components: {ProfileDetailsPane, Button, SectionHeader, Pane},
    computed: {
      profile: function() {
        return this.$store.state.profile;
      },
      languages: function() {
        return this.$store.state.languages;
      }
    },
    methods: {
      goToEditProfile: function() {
        this.$router.replace('/profile/edit');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>