import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import './assets/css/muse-ui.css'
import './assets/css/theme-teal.css'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

import routers from './js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers
})
