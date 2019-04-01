import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    }
  ]
})
