<template>
  <section id="dashboard">
    <Pane>
      <SectionHeader>Your Dashboard</SectionHeader>
    </Pane>

    <DashboardStatistics v-bind:games="games"></DashboardStatistics>
  </section>
</template>

<script>
  import DashboardStatistics from "@/app/modules/dashboard/components/DashboardStatistics";
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";

  export default {
    name: 'dashboard',
    components: {DashboardStatistics, Pane, SectionHeader },
    mounted: function() {
      this.$store.dispatch('retrieveDashboardGames');
    },
    computed: {
      games: function() {
        return this.$store.state.dashboardState.games;
      }
    }
  }
</script>
