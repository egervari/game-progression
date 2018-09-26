<template>
  <section id="dashboard">
    <Pane>
      <SectionHeader>Your Dashboard</SectionHeader>
    </Pane>

    <DashboardStatistics></DashboardStatistics>
  </section>
</template>

<script>
  import DashboardStatistics from "@/app/modules/dashboard/components/DashboardStatistics";
  import Pane from "@/app/modules/ui/components/Pane";
  import SectionHeader from "@/app/modules/ui/components/SectionHeader";

  export default {
    name: 'dashboard',
    components: {DashboardStatistics, Pane, SectionHeader }
  }
</script>
