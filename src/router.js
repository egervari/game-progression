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
      component: () => import(/* webpackChunkName: "games" */ './app/modules/games/Games'),
      children: [
        {
          path: 'listing',
          name: 'games-listing',
          component: () => import('./app/modules/games/modules/games-listing/GamesListing')
        },
        {
          path: 'add-game',
          name: 'add-game',
          component: () => import('./app/modules/games/modules/add-game/AddGame')
        },
        {
          path: ':gameId',
          name: 'edit-game',
          component: () => import('./app/modules/games/modules/edit-game/EditGame')
        },
      ]
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './app/modules/profile/Profile'),
      children: [
        {
          path: 'details',
          name: 'profile-details',
          component: () => import(/* webpackChunkName: "profile-details" */ './app/modules/profile/modules/profile-details/ProfileDetails'),
        },
        {
          path: 'edit',
          name: 'edit-profile',
          component: () => import(/* webpackChunkName: "edit-profile" */ './app/modules/profile/modules/edit-profile/EditProfile'),
        }
      ]
    }
  ]
})
