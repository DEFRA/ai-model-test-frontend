/**
 * A GDS styled example home page controller.
 * Provided as an example, remove or modify as required.
 * @satisfies {Partial<ServerRoute>}
 */
export const homeController = {
  handler(_request, h) {
    return h.view('home/index', {
      pageTitle: 'Ask a question...',
      heading: 'Ask a question...'
    })
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
