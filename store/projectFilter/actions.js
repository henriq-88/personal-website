export default {
  addFilter ({ commit }, { field, value }) {
    return commit('appendFilter', { field, value })
  },

  updateFilter ({ commit }, filter) {
    return commit('setFilter', filter)
  }
}