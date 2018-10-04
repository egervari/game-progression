import Vue from 'vue';

import {Profile} from "@/app/models/profile";

export const editProfileService = {
  saveProfile: function(profile) {
    return Vue.http.put('profile', profile)
      .then(response => new Profile(response.body))
  }
};