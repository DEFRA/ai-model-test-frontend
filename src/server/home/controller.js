import { getChatResults } from './helpers/fetch/index.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 * @satisfies {Partial<ServerRoute>}
 */
export const homeController = {
  async handler(_request, h) {
    const response = await getChatResults("hello")
    logger.info(response)
    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home',
      response
    })
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
