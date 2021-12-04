import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VModal from 'vue-js-modal'
Vue.use(VModal)

import AOS from 'aos' 
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  router,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
