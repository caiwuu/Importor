import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var pushState = window.history.__proto__.pushState
var replaceState = window.history.__proto__.replaceState
// window.history.__proto__.pushState = function(...agrgs) {
//   console.log(1)
//   pushState(...agrgs)
// }
// window.history.__proto__.replaceState = function(...agrgs) {
//   console.log(2)
//   replaceState(...agrgs)
// }

Vue.config.productionTip = false
console.log(Vue.util)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app2')
