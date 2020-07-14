import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Vuelidate)

Vue.prototype.$http = axios.create({
  baseURL: 'https://your/api/base/url/here',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$localeNumber = Intl.NumberFormat('pt-BR').format

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
