import Vue from 'vue'
import App from './App.vue'
import router from "@/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, faYoutube)

Vue.component('fa-icon', FontAwesomeIcon)


import '@/assets/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
