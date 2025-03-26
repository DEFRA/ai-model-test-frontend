import {
  answerGetController,
  answerPostController
} from '~/src/server/answer/controller.js'

export const answer = {
  plugin: {
    name: 'answer',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/answer',
          ...answerGetController
        },
        {
          method: 'POST',
          path: '/answer',
          ...answerPostController
        }
      ])
    }
  }
}

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
