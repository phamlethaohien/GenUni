import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QA from '../views/QA.vue'
import School from '../views/School.vue'
import Happy_learning from '../views/Happy_learning.vue'



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
  },
  {
    path: '/school',
    name: 'School',
    component: School
  },
  {
    path: '/happy_learning',
    name: 'Happy_learning',
    component: Happy_learning
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
