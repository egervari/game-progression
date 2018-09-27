import Vue from 'vue';
import Router from '../../../../../router';

import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    [EditProfileStoreKeys.Actions.SaveProfile]: function({ commit, rootState }, profile) {
      Vue.http.put('profile', profile)
        .then(response => {
          rootState.profile = response.body;
          Router.replace('/profile/details');
        })
        .catch(error => commit(EditProfileStoreKeys.Actions.SaveProfileFailure, error))
    }
  }
};