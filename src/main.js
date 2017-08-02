// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$axios = axios

Vue.filter('formatNumber', n => {
  let str = n.toString()
  if (str.length < 4) {
    return str
  } else if (str.length < 7) {
    return str.slice(0, str.length - 3) + 'K'
  } else if (str.length < 10) {
    return str.slice(0, str.length - 6) + 'M'
  } else if (str.length < 13) {
    return str.slice(0, str.length - 9) + 'B'
  }
})

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
