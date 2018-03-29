export default {
  setUser ({ user }, payload) {
    if (!payload) {
      user.name = null
      user.uid = null
      return
    }
    if (payload.displayName !== undefined) user.displayName = payload.displayName
    if (payload.uid !== undefined) user.uid = payload.uid
  }
}
