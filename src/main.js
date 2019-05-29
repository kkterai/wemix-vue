import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 

import axios from 'axios'
import VueAxios from 'vue-axios'
import { securedAxiosInstance } from './backend/axios'
import router from './router'


Vue.use(Vuetify, VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  securedAxiosInstance,
  router
}).$mount('#app')
