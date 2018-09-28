<template>
  <Pane id="profile-details-pane">
    <article>
      <p>
        <strong>{{ $t('profile.profileDetails.labels.name') }}: </strong>
        <Emphasis>{{ fullName }}</Emphasis>
      </p>
      <p>
        <strong>{{ $t('profile.profileDetails.labels.language') }}: </strong>
        <Emphasis> {{ language.name }}</Emphasis>
      </p>
      <p>
        <strong>{{ $t('profile.profileDetails.labels.averageNumberOfHoursToGamePerDay') }}: </strong>
        <Emphasis>{{ profile.averageNumberOfHoursPerDay }}</Emphasis>
      </p>
    </article>
  </Pane>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  import {Language} from "@/app/models/language";
  import {Profile} from "@/app/models/profile";
  export default {
    name: 'ProfileDetailsPane',
    components: {Emphasis, Pane},
    props: ['profile', 'languages'],
    computed: {
      fullName: function() {
        return Profile.getFullName(this.profile);
      },
      language: function() {
        return Language.getLanguageById(this.languages, this.profile.languageId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>