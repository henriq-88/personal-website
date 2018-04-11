import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'
import ProjectFilter from './projectFilter'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      User,
      ProjectFilter,
    }
  })
}

export default createStore