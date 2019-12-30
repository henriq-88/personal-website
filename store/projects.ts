import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { firestore } from '@/plugins/firebase'

@Module({
  name: 'projects',
  stateFactory: true,
  namespaced: true
})
class Projects extends VuexModule {
  projects_ = []

  get projects (): any[] {
    return this.projects_
  }

  @Mutation
  setProjects (projects: any[]) {
    this.projects_ = projects
  }

  @Action
  loadProjects () {
    console.log('store - loadProjects')
    firestore.collection('projects').onSnapshot((projectsSnapshot) => {
      const projects = projectsSnapshot.docs.map((doc) => {
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
      // this.setProjects(projects)
    })
  }
}

export default Projects
