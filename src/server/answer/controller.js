import {
  getChatResults,
  getVectorSearchResults
} from './helpers/fetch/index.js'
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

    if (searchType === 'langchain-azure-openai') {
      response = await getChatResults('/langchain/azureopenai/chat', question)
      logger.info(response)
    }

    if (searchType === 'langchain-bedrock') {
      response = await getChatResults('/langchain/bedrock/chat', question)
      logger.info(response)
    }

    if (searchType === 'anthropic-bedrock') {
      response = await getChatResults('/anthropic/bedrock/chat', question)
      logger.info(response)
    }

    if (searchType === 'azure-openai') {
      response = await getChatResults('/azureopenai/chat', question)
      logger.info(response)
    }

    if (searchType === 'vector-store') {
      const vectorResponse = await getVectorSearchResults(question)
      logger.info(response)
      response = {
        answer: vectorResponse?.results?.[0]?.page_content
      }
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
