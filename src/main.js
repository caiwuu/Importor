/*
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-08-17 20:25:15
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// window.originPushState = window.History.prototype.pushState
// window.History.prototype.pushState = function(state, title, url){
//   console.log(state, title, url);
//   window.originPushState(state, title, url)
// }

Vue.config.productionTip = false
console.log(Vue.util)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app2')

