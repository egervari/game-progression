export const Profile = {
  getFullName: function(profile) {
    return profile ?
      profile.firstName + ' ' + profile.lastName :
      '';
  }
};