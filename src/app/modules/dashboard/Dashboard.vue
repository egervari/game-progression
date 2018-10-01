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
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";
  import { DashboardStoreKeys } from "@/app/modules/dashboard/dashboard-store-keys";

  export default {
    name: 'dashboard',
    components: {DashboardStatistics, Pane, SectionHeader },
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
