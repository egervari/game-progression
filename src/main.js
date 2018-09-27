import Vue from 'vue'

import App from './app/App.vue'
import http from "./http";
import router from './router'
import store from './store'

Vue.config.productionTip = false;

new Vue({
  http,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
