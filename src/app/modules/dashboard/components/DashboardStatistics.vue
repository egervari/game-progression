<template>
  <Pane id="dashboard-statistics">
    <section>
      <PaneHeader>
        {{ $t('dashboard.labels.timeRemaining') }}:
        <Emphasis>
          {{ totalDaysRemaining }} {{ $t('dashboard.labels.days') }}
        </Emphasis>
      </PaneHeader>
      <p>
        <strong>{{ $t('dashboard.labels.numberOfUnfinishedGames') }}: </strong>
        <Emphasis>{{ numberOfUnfinishedGames }}</Emphasis>
      </p>
      <ProgressBar :value="numberOfUnfinishedGames"
                   :total="numberOfTotalGames">
      </ProgressBar>
      <p>
        <strong>{{ $t('dashboard.labels.numberOfFinishedGames') }}: </strong>
        <Emphasis>{{ numberOfFinishedGames }}</Emphasis>
      </p>
      <ProgressBar :value="numberOfFinishedGames"
                   :total="numberOfTotalGames"
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
  import {Game} from "@/app/models/game";

  export default {
    name: 'DashboardStatistics',
    components: {Emphasis, PaneHeader, Pane, ProgressBar },
    props: {
      games: {
        required: true
      }
    },
    computed: {
      totalDaysRemaining: function() {
        return Game.getTotalDaysRemaining(this.games);
      },

      numberOfUnfinishedGames: function() {
        return this.numberOfTotalGames - this.numberOfFinishedGames;
      },

      numberOfFinishedGames: function() {
        return Game.numberOfFinishedGames(this.games);
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