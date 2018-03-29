import firebase from 'firebase'

export default {
  async signInWithProvider ({ commit, dispatch }, { providerName }) {
    let provider = null
    switch (providerName) {
      case 'Google': provider = new firebase.auth.GoogleAuthProvider(); break
      case 'Facebook': provider = new firebase.auth.FacebookAuthProvider(); break
      default: return Promise.reject(`${providerName} is not a valid provider`)
    }

    try {
      const result = await firebase.auth().signInWithPopup(provider)
      console.log(result)
    } catch (err) {
      console.error(err)
    }
  },

  async signInWithEmail ({ commit, dispatch }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          return dispatch('createUserWithEmail', { email, password })
        default:
          console.error(err)
          return Promise.reject(err.message)
      }
    }
  },

  async createUserWithEmail ({ commit, dispatch }, { email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          return dispatch('signInWithEmail', { email, password })
        default:
          console.error(err)
          return Promise.reject(err.message)
      }
    }
  },

  async updateUser ({ commit }, user) {
    return commit('setUser', user)
  },

  async signOut ({ commit }) {
    try {
      await firebase.auth().signOut()
      return commit('setUser', null)
    } catch (err) {
      console.error(err)
    }
  }
}
