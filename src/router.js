import Vue from 'vue'
import Router from 'vue-router'
// import Home from './App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/HelloWorld.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./components/GuildDescription.vue')
    },
    {
      path: '/:gametitle',
      component: () => import('./components/GameDetail.vue'),
    },
    {
      // Catch all at lowest matching priority to 404 bad URLS
      path: '*',
      component: () => import('./components/NotFound.vue')
    },
  ]
})
