import * as types from './mutation-types'

export mutations = {
  [types.ADD_COUNT](state, payload) {
    state.count = payload
  }
}