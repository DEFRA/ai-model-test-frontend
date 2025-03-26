/**
 * @param {Partial<Request> | null} request
 */
export function buildNavigation(request) {
  return [
    {
      text: 'Home',
      url: '/',
      isActive: request?.path === '/'
    },
    {
      text: 'Vector Store',
      url: '/vector-store',
      isActive: request?.path === '/vector-store'
    }
  ]
}

/**
 * @import { Request } from '@hapi/hapi'
 */
