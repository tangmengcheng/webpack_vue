import '@babel/polyfill'
import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'


new Vue({
  el: '#app',
  store,
  router,
  // template: '<App />',
  // components: {
  //   App
  // }
  render: h => h(App)
})