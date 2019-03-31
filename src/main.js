import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import storeDef from './store'
import routerDef from './router'
import '@/plugins/codemirror'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

const store = new Vuex.Store(storeDef)
const router = new VueRouter(routerDef)

import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
