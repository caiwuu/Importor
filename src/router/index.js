import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import EffectsImport from '@/utils/effectsImport'
let { effectsImport } = new EffectsImport()
  .tap('mounted', () => {
    console.log('app in mounted')
  })
  .tap('unmounted', () => {
    console.log('app in unmounted')
  })
// let { effectsImport } = new EffectsImport()
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
      effectsImport(import('../views/Test1.vue'), 'app1', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: true,
      }),
  },
  {
    path: '/Test2',
    name: 'Test',
    component: () =>
      effectsImport(import('../views/Test2.vue'), 'app2', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
  {
    path: '/Test3',
    name: 'Test3',
    component: () =>
      effectsImport(import('../views/Test3.vue'), 'app3', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: false,
      }),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
