import {Model} from "@/app/models/model";

export class Platform extends Model {
  constructor(platform = {}) {
    super(platform.id);

    this.name = platform.name;
  }

  static getPlatformNameById(platforms, platformId) {
    return platforms.length > 0 ?
      platforms.find(platform => platform.id === platformId).name :
      '';
  }
}