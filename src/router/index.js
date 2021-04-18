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
    path: '/Test',
    name: 'Test',
    component: () =>
      effectsImport(import('../views/Test2.vue'), 'Test', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: true,
      }),
  },
  {
    path: '/Test3',
    name: 'Test3',
    component: () => effectsImport(import('../views/Test3.vue')),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      effectsImport(import('../views/Test.vue'), 'test', {
        origin: 'http://49.234.27.60/',
        cssScope: true,
        proxy: true,
      }),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
