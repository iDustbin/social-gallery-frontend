import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Profile
    },
    {
      path: '/:name',
      name: 'profile',
      component: () => import('./views/Profile')
    }
  ]
})
