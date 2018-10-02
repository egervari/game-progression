<template>
  <section id="profile">
    <Pane>
      <SectionHeader>{{ $t('profile.profileDetails.title' )}}</SectionHeader>
      <Button @click="goToEditProfile()">
        {{ $t('profile.profileDetails.actions.edit' )}}
      </Button>
    </Pane>

    <ProfileDetailsPane v-if="profile"
                        :profile="profile"
                        :languages="languages">
    </ProfileDetailsPane>
  </section>
</template>

<script>
  import ProfileDetailsPane from "@/app/modules/profile/modules/profile-details/components/ProfileDetailsPane";

  export default {
    name: 'ProfileDetails',
    components: {ProfileDetailsPane},
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