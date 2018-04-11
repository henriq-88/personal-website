export default {
  appendFilter (state, { field, value }) {
    state.filter[field] = value
  },

  setFilter (state, filter) {
    Object.keys(filter).forEach(field => {
      const value = filter[field]
      state.filter[field] = value
    })
  }
}