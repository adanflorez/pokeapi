import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/lista-pokemon',
    name: 'pokemon-list',
    component: () => import('@/views/List.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
