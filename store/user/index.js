import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  state: {
    user: {
      displayName: null,
      uid: null
    }
  },
  getters,
  mutations,
  actions
}
