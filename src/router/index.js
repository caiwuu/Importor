/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-17 20:29:04
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppImport from '@/utils/appImport'
let { appImport } = new AppImport()
  .on('mounted', (vm, entry) => {
    console.log(entry + ' in mounted')
  })
  .on('unmounted', (vm, entry) => {
    console.log(entry + ' in unmounted')
  })
Vue.use(VueRouter)
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
      appImport(import('../views/Test1.vue'), 'app1', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
  {
    path: '/Test2',
    name: 'Test',
    component: () =>
      appImport(import('../views/Test2.vue'), 'app2', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
  {
    path: '/Test3',
    name: 'Test3',
    component: () =>
      appImport(import('../views/Test3.vue'), 'app3', {
        origin: 'http://localhost:8081',
        cssScope: true,
        proxy: false,
        activeRoute: 'about3',
        // prefix: '',
      }),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
