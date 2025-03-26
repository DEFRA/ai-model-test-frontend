import { setupData } from './helpers/fetch/index.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

/**
 * A GDS styled example about page controller.
 * Provided as an example, remove or modify as required.
 * @satisfies {Partial<ServerRoute>}
 */
export const getVectorStoreController = {
  handler(_request, h) {
    return h.view('vector-store/index', {
      pageTitle: 'Vector Store',
      heading: 'Vector Store',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Vector Store'
        }
      ]
    })
  }
}

export const postVectorStoreController = {
  async handler(_request, h) {
    logger.info('Setting up data')
    await setupData()
    return h.view('vector-store/index', {
      pageTitle: 'Vector Store',
      heading: 'Vector Store',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Vector Store'
        }
      ]
    })
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
