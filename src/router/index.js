import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QA from '../views/QA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/QA',
    name: 'QA',
    component: QA
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
