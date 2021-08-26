/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-25 17:23:36
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from './vue-router.esm'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/Test3/app3',
  },
  {
    path: '/Test3/app3',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Test3/about3',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
