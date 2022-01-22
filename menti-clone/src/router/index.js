import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:sessionId',
    name: 'Session',
    component: () => import('@/views/Session.vue')
  },
  {
    path: '/:sessionId/question',
    name: 'SessionQuestion',
    component: () => import('@/views/SessionQuestion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
