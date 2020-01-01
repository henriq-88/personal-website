import Vuex from 'vuex'
import snackbar from '@/store/snackbar'

export const store = new Vuex.Store({
  modules: {
    snackbar
  }
})

export function createStore () {
  return store
}
