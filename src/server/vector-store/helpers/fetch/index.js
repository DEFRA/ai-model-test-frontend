import { config } from '~/src/config/config.js'
import { createLogger } from '~/src/server/common/helpers/logging/logger.js'

const logger = createLogger()

const setupData = async () => {
  logger.info('setup data Chat API')

  const dataSetupEndpoint = `${config.get('chatApiEndpoint')}/data/setup`
  logger.info(`chatEndpoint': ${dataSetupEndpoint}`)

  const result = await fetch(`${dataSetupEndpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await result?.json()

  if (!data) {
    logger.error('Failed to fetch answer or invalid response structure')
    return {}
  }

  return data
}

export { setupData }
