import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { firestore } from '@/plugins/firebase'
import { store } from '@/store'

@Module({
  name: `projects`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store
})
class ProjectsModule extends VuexModule {
  projects_: any[] = []

  get projects (): any[] {
    return this.projects_
  }

  @Mutation
  set (projects: any[]) {
    this.projects_ = projects
  }

  @Action({ rawError: true })
  load () {
    firestore.collection(`projects`).onSnapshot((snapshot) => {
      const projects = snapshot.docs.map((doc) => {
        const id = doc.id
        const { body, category, date, images, name, tags } = doc.data()
        return {
          id,
          body,
          category,
          date: new Date(date.seconds * 1000),
          images,
          name,
          tags
        }
      }).sort((a, b) => b.date.getTime() - a.date.getTime())
      this.set(projects)
    })
  }
}

export default getModule(ProjectsModule)
