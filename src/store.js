import Vue from 'vue'
import Vuex from 'vuex'

import {appStore} from "@/app/app-store";

Vue.use(Vuex);

export default new Vuex.Store(appStore)
