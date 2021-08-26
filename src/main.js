/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-26 17:12:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.history.pushState = (function(native){
  return function(...agrgs){
    console.log("=======11111=============")
    native(...agrgs)
  }
})(window.history.pushState)

window.history.replaceState = (function(native){
  return function(...agrgs){
    console.log('========22222222222=======')
    native(...agrgs)
  }
})(window.history.replaceState)

Vue.config.productionTip = false
console.log(Vue.util)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app2')
