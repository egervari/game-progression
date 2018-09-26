<template>
  <section id="games">
    <GameFilters></GameFilters>
  </section>
</template>

<script>
  import GameFilters from './components/GameFilters';

  export default {
    name: 'games',
    components: { GameFilters }
  }
</script>
