import { SiteMessage, SiteError, SnackbarMessage } from '@/types'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { TranslateResult } from 'vue-i18n'

@Module({
  name: `snackbar`,
  namespaced: true,
  stateFactory: true
})
class SnackbarModule extends VuexModule {
  private messageQueue_: SnackbarMessage[] = []

  // getters

  get messageQueue (): SnackbarMessage[] {
    return this.messageQueue_
  }

  // mutations

  @Mutation
  private setSiteMessagesMutation (messageQueue: SnackbarMessage[]) {
    this.messageQueue_ = messageQueue
  }

  @Mutation
  private appendSiteMessageMutation (message: SnackbarMessage) {
    this.messageQueue_ = [ ...this.messageQueue_, message ]
  }

  @Mutation
  private removeFirstSiteMessageMutation () {
    this.messageQueue_.shift()
  }

  // actions

  @Action({ rawError: true })
  addSiteMessage ({ clear = false, message = ``, type = ``, code = ``, snackMessage = `` }: SiteMessage) {
    const codeStr = code !== `` && code !== null && code !== undefined ? `(${code}) ` : ``
    switch (type) {
      case `info`:
        console.info(`${codeStr}${message}`)
        break
      case `warning`:
        console.warn(`${codeStr}${message}`)
        break
      case `error`:
        console.error(`${codeStr}${message}`)
        break
      default:
        if (process.env.NODE_ENV === `development`) console.log(`${codeStr}${message}`)
        break
    }
    const newMessage = { message, type, code, snackMessage }
    if (clear) this.setSiteMessagesMutation([ newMessage ])
    else this.appendSiteMessageMutation(newMessage)
  }

  @Action({ rawError: true })
  addSiteError ({ err, snackMessage }: { err: SiteError, snackMessage: TranslateResult }) {
    console.error(err)
    if (err.snackMessage) {
      // merge if already set, replace otherwise
      if (snackMessage) snackMessage = `${snackMessage} because ${err.snackMessage}`
      else snackMessage = err.snackMessage
    }
    this.appendSiteMessageMutation({
      message: err.message,
      code: err.code || null,
      type: `error`,
      snackMessage
    })
  }

  @Action({ rawError: true })
  removeSiteMessage () {
    this.removeFirstSiteMessageMutation()
  }
}

export default SnackbarModule
