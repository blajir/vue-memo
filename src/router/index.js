import Vue from 'vue'
import Router from 'vue-router'
import All from '@/page/All'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'All',
      component: All
    }
  ]
})