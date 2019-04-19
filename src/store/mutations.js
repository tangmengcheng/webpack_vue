import * as types from './mutation-types'

const mutations = {
  [types.ADD_COUNT](state, payload) {
    state.count = payload
  }
}

export default mutations