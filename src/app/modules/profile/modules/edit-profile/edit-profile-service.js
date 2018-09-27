import Vue from 'vue';

export const editProfileService = {
  saveProfile: function(profile, onSuccess, onFailure) {
    Vue.http.put('profile', profile)
      .then(response => onSuccess(response.body))
      .catch(onFailure)
  }
};