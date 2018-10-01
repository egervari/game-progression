import {Model} from "@/app/models/model";

export class Language extends Model {
  constructor(language = {}) {
    super(language.id);

    this.code = language.code;
    this.name = language.name;
  }

  static getLanguageById(languages, languageId) {
    return languages.find(language => language.id === languageId);
  }
}