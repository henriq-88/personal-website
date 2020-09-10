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
  TextValue,
} from '@/types'

@Module({
  name: `categories`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store,
})
class CategoriesModule extends VuexModule {
  private categories_: TextValue[] = [
  ]

  get categories (): TextValue[] {
    return this.categories_
  }

  @Mutation
  set (categories: TextValue[]) {
    this.categories_ = categories
  }

  @Action({
    rawError: true,
  })
  async load () {
    if (this.categories.length) return
    const snapshot = await firestore.collection(`categories`)
      .get()
    const categories = snapshot.docs.map((doc) => {
      const id = doc.id
      const {
        name,
      } = doc.data()
      const category: TextValue = {
        value: id,
        text: name,
      }
      return category
    })
    this.set(categories)
  }
}

export default getModule(CategoriesModule)
