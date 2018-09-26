<template>
  <Pane id="dashboard-statistics">
    <section>
      <PaneHeader>
        Time Remaining: <Emphasis>{{ totalDaysRemaining }} Days</Emphasis>
      </PaneHeader>
      <p>
        <strong>Number of Unfinished Games: </strong>
        <Emphasis>{{ numberOfUnfinishedGames }}</Emphasis>
      </p>
      <ProgressBar v-bind:value="numberOfUnfinishedGames"
                   v-bind:total="numberOfTotalGames"
                   type="unfinished">
      </ProgressBar>
      <p>
        <strong>Number of Finished Games: </strong>
        <Emphasis>{{ numberOfFinishedGames }}</Emphasis>
      </p>
      <ProgressBar v-bind:value="numberOfFinishedGames"
                   v-bind:total="numberOfTotalGames"
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
    components: {Emphasis, PaneHeader, Pane, ProgressBar },
    props: ['games'],
    computed: {
      totalDaysRemaining: function() {
        return Number(
          this.games.reduce((total, game) => {
            return total + Math.max(game.numberOfHoursToComplete - game.numberOfHoursPlayed, 0) / 24;
          }, 0)
        ).toFixed(1);
      },

      numberOfUnfinishedGames: function() {
        return this.numberOfTotalGames - this.numberOfFinishedGames;
      },

      numberOfFinishedGames: function() {
        return this.games.reduce((total, game) => {
          return total + (game.isComplete ? 1 : 0)
        }, 0);
      },

      numberOfTotalGames: function() {
        return this.games.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
  #dashboard-statistics {
    section {
      width: 100%;
    }
  }
</style>