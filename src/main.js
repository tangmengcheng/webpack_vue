import Vue from 'vue'
import App from './App'
import store from './store/index'


new Vue({
  el: '#app',
  store,
  // template: '<App />',
  // components: {
  //   App
  // }
  render: h => h(App)
})