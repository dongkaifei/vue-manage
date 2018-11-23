import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/orders',
          name: 'orders',
          component: ()=> import(/* webpackChunkName: 'orders' */ `./views/Orders.vue`)
        },
        {
          path: '/users',
          name: 'users',
          component: ()=> import(/* webpackChunkName: 'users' */ `./views/Users.vue`)
        },
        {
          path: '/goods',
          name: 'goods',
          component: ()=> import(/* webpackChunkName: 'goods' */ `./views/Goods.vue`)
        },
        {
          path: '/admins',
          name: 'admins',
          component: ()=> import(/* webpackChunkName: 'admins' */ `./views/Admins.vue`)
        },
        {
          path: '/mysetting',
          name: 'mysetting',
          component: ()=> import(/* webpackChunkName: 'mysetting' */ `./views/Mysetting.vue`)
        },
        {
          path: '/readme',
          name: 'readme',
          component: ()=> import(/* webpackChunkName: 'readme' */ `./views/Readme.vue`)
        },
        {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: 'about' */ `./views/About.vue`)
        }
      ]
    }
  ]
})
