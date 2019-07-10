import Vue from "vue";
import Vuex from "vuex";
import caseInfo from "./modules/caseInfo.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    caseInfo
  }
});
export default store;
