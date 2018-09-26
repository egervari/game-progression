<template>
  <div class="game-card-details">
    <h3>Super Mario Odyssey</h3>
    <Emphasis>Switch</Emphasis>
    <p>
      <strong>Est. Completed: </strong>
      <Emphasis>100%</Emphasis>
    </p>
    <p>
      <strong>Completion Date: </strong>
      <Emphasis>09/30/2018</Emphasis>
    </p>
  </div>
</template>

<script>
  import Emphasis from "@/app/modules/ui/components/Emphasis";
  export default {
    name: 'GameCardDetails',
    components: {Emphasis}
  }
</script>

<style lang="scss" scoped>
  .game-card-details {
    flex-grow: 1;
    padding: 1rem;

    h3 {
      margin-top: 0;
      margin-bottom: 0.25rem;
    }

    p {
      &:not(:first-of-type) {
        margin-top: 0;
      }

      margin-bottom: 0.25rem;
    }
  }
</style>