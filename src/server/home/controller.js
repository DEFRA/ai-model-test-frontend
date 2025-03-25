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
    const question = 'How far away is the moon?'

    const bedrockResponse = await getChatResults('/bedrock/chat', question)
    logger.info(bedrockResponse)

    const bedrockAnthropicResponse = await getChatResults(
      '/anthropic/bedrock/chat',
      question
    )
    logger.info(bedrockAnthropicResponse)

    return h.view('home/index', {
      pageTitle: 'Home',
      heading: 'Home',
      question,
      bedrockResponse,
      bedrockAnthropicResponse
    })
  }
}

/**
 * @import { ServerRoute } from '@hapi/hapi'
 */
