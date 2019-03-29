import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import storeDef from './store'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
const store = new Vuex.Store(storeDef)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
