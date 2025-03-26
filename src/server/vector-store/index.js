import {
  getVectorStoreController,
  postVectorStoreController
} from '~/src/server/vector-store/controller.js'

/**
 * Sets up the routes used in the /vector-store page.
 * These routes are registered in src/server/router.js.
 * @satisfies {ServerRegisterPluginObject<void>}
 */
export const vectorStore = {
  plugin: {
    name: 'vector-store',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/vector-store',
          ...getVectorStoreController
        },
        {
          method: 'POST',
          path: '/vector-store',
          ...postVectorStoreController
        }
      ])
    }
  }
}

/**
 * @import { ServerRegisterPluginObject } from '@hapi/hapi'
 */
