import Router from '../../../../../router';

import {EditProfileStoreKeys} from "@/app/modules/profile/modules/edit-profile/edit-profile-store-keys";
import {editProfileService} from "@/app/modules/profile/modules/edit-profile/edit-profile-service";

export default {
  state: {

  },
  mutations: {

  },
  actions: {
    [EditProfileStoreKeys.Actions.SaveProfile]: function({ commit, rootState }, profile) {
      editProfileService.saveProfile(
        profile,
        profile => {
          rootState.profile = profile;
          Router.replace('/profile/details');
        },
        error => commit(EditProfileStoreKeys.Actions.SaveProfileFailure, error)
      );
    }
  }
};