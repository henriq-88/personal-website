import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { firestore } from '@/plugins/firebase'
import { store } from '@/store'
import { TextValue } from '@/types'
import { icons } from '@/utils/tags'

@Module({
  name: `tags`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store
})
class TagsModule extends VuexModule {
  private tags_: TextValue[] = []

  get tags (): TextValue[] {
    return this.tags_
  }

  @Mutation
  set (tags: TextValue[]) {
    this.tags_ = tags
  }

  @Action({ rawError: true })
  async load () {
    if (this.tags.length) return
    const snapshot = await firestore.collection(`tags`).get()
    const tags = snapshot.docs.map(doc => {
      const id = doc.id
      const { name } = doc.data()
      const tag: TextValue = {
        value: id,
        text: name,
        icon: icons[id]
      }
      return tag
    })
    this.set(tags)
  }
}

export default getModule(TagsModule)
