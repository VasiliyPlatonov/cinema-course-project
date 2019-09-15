import Vue from 'vue'
import Router from 'vue-router'

/* components */
import Home from './views/Home'
import Movies from './views/movies/Index'
import Settings from './views/Settings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
