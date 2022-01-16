import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueToast from 'vue-toast-notification';
import HomeContainer from "@/components/Layout";
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false

const PageNotFound = {template: '<div>Page Not Found</div>'};

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", component: HomeContainer},
    {path: "*", component: PageNotFound},
  ]
});

Vue.use(VueRouter);
Vue.use(VueToast, {position: "top-left", queue: true});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
