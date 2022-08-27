import state from './store/state'
import actions from './store/actions'
import mutations from './store/mutations'
import getters from './store/getters'

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
