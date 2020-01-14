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
      const { banner, body, category, date, logo, medias, name, tags, website } = doc.data() as ServerProject
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
        website
      }
      return project
    }).sort((a, b) => {
      if (a.date === b.date) return 0
      if (!a.date) return -1
      if (!b.date) return 1
      return b.date.getTime() - a.date.getTime()
    })
    this.set(projects)
  }
}

export default getModule(ProjectsModule)
