<template>
  <Pane id="profile-details">
    <article>
      <p>
        <strong>Name: </strong>
        <Emphasis>Katie Egervari</Emphasis>
      </p>
      <p>
        <strong>Language: </strong>
        <Emphasis>English</Emphasis>
      </p>
      <p>
        <strong>Average Number of Hours to Game Per Day: </strong>
        <Emphasis>2</Emphasis>
      </p>
    </article>
  </Pane>
</template>

<script>
  import Pane from "@/app/modules/ui/components/Pane";
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  export default {
    name: 'ProfileDetails',
    components: {Emphasis, Pane}
  }
</script>

<style lang="scss" scoped>

</style>