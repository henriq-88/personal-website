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
  ClientProject, ServerProject, Sorting,
} from '@/types'

@Module({
  name: `projects`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectsModule extends VuexModule {
  private projects_: ClientProject[] = [
  ]

  private sorting_: Sorting = `desc`
  private category_ = ``
  private tags_: string[] = [
  ]

  get projects (): ClientProject[] {
    return this.projects_
  }

  get sorting (): Sorting {
    return this.sorting_
  }

  get category (): string {
    return this.category_
  }

  get tags (): string[] {
    return this.tags_
  }

  @Mutation
  set (projects: ClientProject[]) {
    this.projects_ = projects
  }

  @Mutation
  setSorting (sorting: Sorting) {
    this.sorting_ = sorting
  }

  @Mutation
  setCategory (category: string) {
    this.category_ = category
  }

  @Mutation
  setTags (tags: string[]) {
    this.tags_ = tags
  }

  @Action({
    rawError: true,
  })
  async load (force?: boolean) {
    if (!force && this.projects.length) return
    let query = firestore
      .collection(`projects`)
      .orderBy(`date`, this.sorting)
    if (this.category) query = query.where(`category`, `==`, this.category)
    if (this.tags.length) query = query.where(`tags`, `array-contains-any`, this.tags)
    const snapshot = await query.get()
    const projects = snapshot.docs.map((doc) => {
      const id = doc.id
      const {
        banner, body, category, date, logo, medias, name, tags, website,
      } = doc.data() as ServerProject
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
      return project
    })
    this.set(projects)
  }

  @Action({
    rawError: true,
  })
  updateSorting (sorting: Sorting) {
    this.setSorting(sorting)
  }

  @Action({
    rawError: true,
  })
  updateCategory (category: string) {
    this.setCategory(category)
  }

  @Action({
    rawError: true,
  })
  updateTags (tags: string[]) {
    this.setTags(tags)
  }
}

export default getModule(ProjectsModule)
