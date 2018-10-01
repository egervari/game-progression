import {Model} from "@/app/models/model";

export class Profile extends Model {
  constructor(profile = {}) {
    super(profile.id);

    this.firstName = profile.firstName;
    this.lastName = profile.lastName;
    this.image = profile.image;
    this.languageId = profile.languageId;
    this.averageNumberOfHoursPerDay = profile.averageNumberOfHoursPerDay;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
