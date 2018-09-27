<template>
  <Pane id="profile-details-pane">
    <article>
      <p>
        <strong>Name: </strong>
        <Emphasis>{{ fullName }}</Emphasis>
      </p>
      <p>
        <strong>Language: </strong>
        <Emphasis> {{ profile.languageId }}</Emphasis>
      </p>
      <p>
        <strong>Average Number of Hours to Game Per Day: </strong>
        <Emphasis>{{ profile.averageNumberOfHoursPerDay }}</Emphasis>
      </p>
    </article>
  </Pane>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  export default {
    name: 'ProfileDetailsPane',
    components: {Emphasis, Pane},
    props: ['profile'],
    computed: {
      fullName: function() {
        return this.profile.firstName + ' ' + this.profile.lastName;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>