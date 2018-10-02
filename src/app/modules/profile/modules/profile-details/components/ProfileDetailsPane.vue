<template>
  <Pane id="profile-details-pane">
    <article v-if="profile">
      <p>
        <strong>{{ $t('profile.profileDetails.labels.name') }}: </strong>
        <Emphasis>{{ profile.fullName }}</Emphasis>
      </p>
      <p>
        <strong>{{ $t('profile.profileDetails.labels.language') }}: </strong>
        <Emphasis>{{ language.name }}</Emphasis>
      </p>
      <p>
        <strong>{{ $t('profile.profileDetails.labels.averageNumberOfHoursToGamePerDay') }}: </strong>
        <Emphasis>{{ profile.averageNumberOfHoursPerDay }}</Emphasis>
      </p>
    </article>
  </Pane>
</template>

<script>
  import {Language} from "@/app/models/language";
  import {Profile} from "@/app/models/profile";

  export default {
    name: 'ProfileDetailsPane',
    components: {},
    props: {
      profile: Profile,
      languages: Array
    },
    computed: {
      language: function() {
        return Language.getLanguageById(this.languages, this.profile.languageId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>