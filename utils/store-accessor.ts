import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import projects from '~/store/projects'

// eslint-disable-next-line import/no-mutable-exports
let projectsStore: projects

function initialiseStores (store: Store<any>): void {
  projectsStore = getModule(projects, store)
}

export {
  initialiseStores,
  projectsStore
}
