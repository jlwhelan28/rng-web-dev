import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import { YOUTUBE_API_KEY } from "../dev.env.js"

Vue.config.productionTip = false
Vue.prototype.$YOUTUBE_API_KEY = YOUTUBE_API_KEY

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
