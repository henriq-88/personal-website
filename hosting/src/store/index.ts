import Vuex from 'vuex'
import snackbar from '@/store/snackbar'
import createCache from 'vuex-cache'

export const store = new Vuex.Store({
  plugins: [
    createCache({
      timeout: 1 * 60 * 60 * 1000,
    }), // one hour
  ],
  modules: {
    snackbar,
  },
})

export function createStore () {
  return store
}
