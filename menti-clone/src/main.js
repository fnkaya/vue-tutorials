import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import App from './App.vue'

import router from './router'
import store from './store'
import { firestorePlugin } from "vuefire";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import {Vuelidate} from "vuelidate";

Vue.config.productionTip = false

Vue.use(firestorePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
