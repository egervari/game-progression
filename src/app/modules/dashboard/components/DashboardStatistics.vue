<template>
  <Pane id="dashboard-statistics">
    <section>
      <PaneHeader>
        Time Remaining: <Emphasis>312.4 Days</Emphasis>
      </PaneHeader>
      <p>
        <strong>Number of Unfinished Games: </strong>
        <Emphasis>78</Emphasis>
      </p>
      <ProgressBar v-bind:value="80"
                   v-bind:total="100"
                   type="unfinished">
      </ProgressBar>
      <p>
        <strong>Number of Finished Games: </strong>
        <Emphasis>12</Emphasis>
      </p>
      <ProgressBar v-bind:value="20"
                   v-bind:total="100"
                   type="finished">
      </ProgressBar>
    </section>
  </Pane>
</template>

<script>
  import Pane from '../../ui/components/Pane';
  import ProgressBar from './ProgressBar';
  import PaneHeader from "@/app/modules/ui/components/PaneHeader";
  import Emphasis from "@/app/modules/ui/components/Emphasis";

  export default {
    name: 'DashboardStatistics',
    components: {Emphasis, PaneHeader, Pane, ProgressBar }
  }
</script>

<style lang="scss" scoped>
  #dashboard-statistics {
    section {
      width: 100%;
    }
  }
</style>