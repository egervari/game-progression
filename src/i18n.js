import Vue from 'vue';
import VueI18n from "vue-i18n";

import en from "@/app/assets/i18n/en";
import fr from "@/app/assets/i18n/fr";

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en',
  messages: { en, fr }
});