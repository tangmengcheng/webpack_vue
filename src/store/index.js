import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import mutations from './mutations'

console.log(getters)

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters
})