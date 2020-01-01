import Vuex from 'vuex'
import Projects from '@/store/projects'

export function createStore () {
  return new Vuex.Store({
    modules: {
      Projects
    }
  })
}
