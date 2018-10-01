import Vue from 'vue';

import {Profile} from "@/app/models/profile";

export const editProfileService = {
  saveProfile: function(profile, onSuccess, onFailure) {
    Vue.http.put('profile', profile)
      .then(response => new Profile(response.body))
      .then(onSuccess)
      .catch(onFailure)
  }
};