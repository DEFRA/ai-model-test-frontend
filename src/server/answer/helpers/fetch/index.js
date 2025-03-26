import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

const getChatResults = async (endpoint, question) => {
  logger.info('Fetching answer Chat API')

  const chatEndpoint = `${config.get('chatApiEndpoint')}${endpoint}`
  logger.info(`chatEndpoint': ${chatEndpoint}`)

  const result = await fetch(`${chatEndpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question })
  })

  const data = await result?.json()

  if (!data) {
    logger.error('Failed to fetch answer or invalid response structure')
    return {}
  }

  return data
}

export { getChatResults }
