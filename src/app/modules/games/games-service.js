import Vue from 'vue';

import {Platform} from "@/app/modules/games/models/platform";

export const gamesService = {
  getPlatforms: function() {
    return Vue.http.get('platforms')
      .then(response => response.json())
      .then(platforms => platforms.map(platform => new Platform(platform)));
  }
};