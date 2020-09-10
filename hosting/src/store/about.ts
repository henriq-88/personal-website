import {
  Module, VuexModule, Mutation, Action, getModule,
} from 'vuex-module-decorators'
import {
  store,
} from '@/store'
import {
  firestore,
} from '@/plugins/firebase'

@Module({
  name: `about`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectModule extends VuexModule {
  private text_: string = ``

  get text (): string {
    return this.text_
  }

  get isLoaded (): boolean {
    return !!this.text
  }

  @Mutation
  set (text: string) {
    this.text_ = text
  }

  @Action({
    rawError: true,
  })
  async forceLoad (): Promise<string> {
    const about = await firestore.collection(`about`)
      .doc(`1`)
      .get()
    const {
      text,
    } = about.data() || {
    }
    this.set(text)
    return text
  }

  @Action({
    rawError: true,
  })
  async load () {
    const project = await (this as any).store.cache.dispatch(`about/forceLoad`)
    this.set(project)
  }

  @Action({
    rawError: true,
  })
  async clear () {
    this.set(``)
  }
}

export default getModule(ProjectModule)
