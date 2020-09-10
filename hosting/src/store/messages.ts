import {
  Module, VuexModule, Mutation, Action, getModule,
} from 'vuex-module-decorators'
import {
  firestore,
} from '@/plugins/firebase'
import {
  ContactMessage,
} from '@/types'
import {
  store,
} from '@/store'

@Module({
  name: `messages`,
  stateFactory: true,
  namespaced: true,
  dynamic: true,
  store,
})
class MessagesModule extends VuexModule {
  private messages_: any[] = [
  ]

  get messages (): any[] {
    return this.messages_
  }

  @Mutation
  set (projects: any[]) {
    this.messages_ = projects
  }

  @Action({
    rawError: true,
  })
  load () {
    firestore.collection(`messages`)
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          const id = doc.id
          const data = doc.data()
          return {
            id, ...data,
          }
        })
        this.set(messages)
      })
  }

  @Action({
    rawError: true,
  })
  send (message: ContactMessage): Promise<firebase.firestore.DocumentData> {
    return firestore.collection(`messages`)
      .add(message)
  }
}

export default getModule(MessagesModule)
