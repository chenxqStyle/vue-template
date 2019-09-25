import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalDirective from "./directive"
import Api from "./api"

import ElementUI from "element-ui"

Vue.config.productionTip = false
Vue.use(ElementUI);
GlobalDirective(Vue);

Vue.prototype.$Api = Api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
