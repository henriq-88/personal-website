import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { firestore } from '@/plugins/firebase'
import { store } from '@/store'
import { ClientProject, ServerProject } from '@/types'

@Module({
  name: `projects`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store
})
class ProjectsModule extends VuexModule {
  private projects_: ClientProject[] = []

  get projects (): ClientProject[] {
    return this.projects_
  }

  @Mutation
  set (projects: ClientProject[]) {
    this.projects_ = projects
  }

  @Action({ rawError: true })
  async load () {
    if (this.projects.length) return
    const snapshot = await firestore.collection(`projects`).get()
    const projects = snapshot.docs.map((doc) => {
      const id = doc.id
      const { body, category, date, images, name, tags } = doc.data() as ServerProject
      const project: ClientProject = {
        id,
        body,
        category,
        date: new Date(date.seconds * 1000),
        images,
        name,
        tags
      }
      return project
    }).sort((a, b) => b.date.getTime() - a.date.getTime())
    this.set(projects)
  }
}

export default getModule(ProjectsModule)
