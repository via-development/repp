import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import('../views/InviteView.vue')
  },

  {
    path: '/premium',
    name: 'premium',
    component: () => import('../views/PremiumView.vue')
  },

  {
    path: '/servers',
    name: 'serverselect',
    component: () => import('../views/ServerSelect.vue')
  },

  
  {
    path: '/error',
    name: 'autherror',
    component: () => import('../views/AuthError.vue')
  },


  {
    path: '/login',
    name: 'login',
    component: () => import('../views/RedirectView.vue')
  },
  {
    path: '/callback',
    name: 'callback',
    component: () => import('../views/CallbackView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
