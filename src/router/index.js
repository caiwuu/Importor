/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-26 15:47:05
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../../test/vue-router.esm.js'
import Home from '../views/Home.vue'
import ComponentImport from '@/utils/componentImport'
let { componentImport } = new ComponentImport()
  .on('mounted', (vm, entry) => {
    console.log(entry + ' in mounted')
  })
  .on('unmounted', (vm, entry) => {
    console.log(entry + ' in unmounted')
  })
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Test1',
    name: 'Test1',
    component: () =>
      componentImport(import('../views/Test1.vue'), 'app1', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
  // {
  //   path: '/Test1',
  //   name: 'Test1',
  //   component: () =>import('../views/Test1.vue')
  // },
  {
    path: '/Test2',
    name: 'Test',
    component: () =>
      componentImport(import('../views/Test2.vue'), 'app2', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
  {
    path: '/Test3/*',
    name: 'Test3',
    component: () =>
      componentImport(import('../views/Test3.vue'), 'app3', {
        origin: 'http://localhost:8081',
        cssScope: true,
        proxy: false,
        activeRoute: '/Test3/about3',
        // prefix: '',
      }),
  },
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
