import {
  Module, VuexModule, Mutation, Action, getModule,
} from 'vuex-module-decorators'
import {
  firestore,
} from '@/plugins/firebase'
import {
  store,
} from '@/store'
import {
  getBlankProject,
} from '@/utils/projects'
import {
  ClientProject, ServerProject,
} from '@/types'

@Module({
  name: `project`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectModule extends VuexModule {
  private project_: ClientProject = getBlankProject()

  get project (): ClientProject {
    return this.project_
  }

  get isLoaded (): boolean {
    return !!this.project_.id
  }

  @Mutation
  set (project: ClientProject) {
    this.project_ = project
  }

  @Action({
    rawError: true,
  })
  async forceLoad (projectId: string): Promise<ClientProject> {
    const snapshot = await firestore.collection(`projects`)
      .doc(projectId)
      .get()
    const id = snapshot.id
    const {
      banner, body, category, date, logo, medias, name, tags, website,
    } = snapshot.data() as ServerProject
    const project: ClientProject = {
      id,
      banner,
      body,
      category,
      date: new Date(date.seconds * 1000),
      logo,
      medias,
      name,
      tags: tags.sort((a, b) => a.localeCompare(b)),
      website,
    }
    this.set(project)
    return project
  }

  @Action({
    rawError: true,
  })
  async load (projectId: string) {
    const project = await (this as any).store.cache.dispatch(`project/forceLoad`, projectId)
    this.set(project)
  }

  @Action({
    rawError: true,
  })
  async clear () {
    this.set(getBlankProject())
  }
}

export default getModule(ProjectModule)
