import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './app/modules/dashboard/Dashboard')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import(/* webpackChunkName: "games" */ './app/modules/games/Games')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "games" */ './app/modules/profile/Profile')
    }
  ]
})
