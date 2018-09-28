export const Platform = {
  getPlatformNameById: function(platforms, platformId) {
    return platforms.length > 0 ?
      platforms.find(platform => platform.id === platformId).name :
      '';
  }
};