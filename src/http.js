import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
  http: {
  }
};

Vue.url.options.root = 'http://localhost:3000';