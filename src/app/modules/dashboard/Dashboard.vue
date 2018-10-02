<template>
  <section id="dashboard">
    <Pane>
      <SectionHeader>{{ $t('dashboard.title')}}</SectionHeader>
    </Pane>

    <DashboardStatistics :games="games"></DashboardStatistics>
  </section>
</template>

<script>
  import DashboardStatistics from "@/app/modules/dashboard/components/DashboardStatistics";
  import { DashboardStoreKeys } from "@/app/modules/dashboard/dashboard-store-keys";

  export default {
    name: 'dashboard',
    components: { DashboardStatistics },
    mounted: function() {
      this.$store.dispatch(DashboardStoreKeys.Actions.RetrieveDashboardGames);
    },
    computed: {
      games: function() {
        return this.$store.state.dashboardState.games;
      }
    }
  }
</script>
