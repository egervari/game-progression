import Vue from 'vue'
import '@egervari/vue-ui-components';

import App from './app/App.vue'
import http from "./http";
import router from './router'
import store from './store'
import i18n from "./i18n";
import "./validate";

Vue.config.productionTip = false;

new Vue({
  http,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');

