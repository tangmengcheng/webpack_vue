import Vue from 'vue'
import Router from 'vue-router'
import A from '@/pages/A'
import B from '@/pages/B'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: A
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    }
  ]
})