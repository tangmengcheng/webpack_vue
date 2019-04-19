import * as types from './mutation-types'
const actions = {
  add({commit}, payload) {
    commit(types.ADD_COUNT, payload)
  }
}

export default actions