export default {
  user ({ user }) {
    return user
  },
  isSignedIn ({ user }) {
    return !!user.uid
  }
}
