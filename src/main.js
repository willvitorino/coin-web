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

// const apikey = '33b14ab7-d5c7-46b6-9ee4-49bb9222abe3'
Vue.prototype.$http = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'deflate, gzip',
    'X-CMC_PRO_API_KEY': '33b14ab7-d5c7-46b6-9ee4-49bb9222abe3',
    'Allow-Origin': '*'
  }
})

Vue.prototype.$localeNumber = Intl.NumberFormat('pt-BR').format

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
