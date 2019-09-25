import Vue from "vue";
import Vuex from "vuex";
import caseInfo from "./modules/caseInfo.js";
import getters from './getter';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    caseInfo
  },
  getters
});
export default store;
