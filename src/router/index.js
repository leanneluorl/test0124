import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Home
  },
  {
    path: '/recipe',
    name: 'Recipe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipe.vue')
  },
  {
    path: '/rummage',
    name: 'Rummage',
    component: () => import('../views/News.vue')
  },
  {
    path: '/ur-stock',
    name: 'UrStock',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/ur-table',
    name: 'UrTable',
    component: () => import('../views/Direction.vue')
  },
  {
    path: '/station',
    name: 'Station',
    component: () => import('../views/Station.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
