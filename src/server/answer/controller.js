import { getChatResults } from './helpers/fetch/index.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

const answerGetController = {
  handler(_request, h) {
    return h.view('answer/index', {
      pageTitle: 'Answer',
      heading: 'Answer',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'About'
        }
      ]
    })
  }
}

const answerPostController = {
  async handler(_request, h) {
    const searchType = _request.payload.searchType
    const question = _request.payload.question
    let response = {}

    if (searchType === 'bedrock') {
      response = await getChatResults('/bedrock/chat', question)
      logger.info(response)
    }

    if (searchType === 'anthropic-bedrock') {
      response = await getChatResults('/anthropic/bedrock/chat', question)
      logger.info(response)
    }

    return h.view('answer/results', {
      pageTitle: 'Ask a question...',
      heading: 'Ask a question...',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Answer'
        }
      ],
      searchType,
      question,
      response
    })
  }
}

export { answerGetController, answerPostController }
