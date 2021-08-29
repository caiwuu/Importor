/*
 * @Description:
 * @Author: caiwu
 * @CreateDate:
 * @LastEditor:
 * @LastEditTime: 2021-08-27 17:50:29
 */
import Vue from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from '../../test/vue-router.esm.js'
import TEST3 from '../views/Test3.vue'
import Home from '../views/Home.vue'
import ComponentImport from '@/utils/componentImport'
let { Import } = new ComponentImport()
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
      Import(import('../views/Test1.vue'), 'app1', {
        origin: 'http://49.234.27.60/app1',
        cssScope: true,
        proxy: true,
      }),
  },
  {
    path: '/Test2',
    name: 'Test',
    component: () =>
      Import(import('../views/Test2.vue'), 'app2', {
        origin: 'http://49.234.27.60/app2',
        cssScope: true,
        proxy: true,
      }),
  },
  //异步组件
  // {
  //   path: '/Test3/*',
  //   name: 'Test3',
  //   component: () =>
  //    // import('../views/Test3.vue')
  //     Import(import('../views/Test3.vue'), 'app3', {
  //       origin: 'http://localhost:8081/app3',
  //       cssScope: true,
  //       proxy: true,
  //       activeRoute: '/Test3/about3',
  //       prefix: '',
  //       pathRewrite:{
  //         '/app3':''
  //       }
  //     }),
  // },

  // 同步组件
  {
    path: '/Test3/*',
    name: 'Test3',
    component: Import(TEST3, 'app3', {
      origin: 'http://localhost:8081/app3',
      cssScope: true,
      proxy: true,
      activeRoute: '/Test3/app3',
      prefix: '',
      pathRewrite: {
        '/app3': '',
      },
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
