import { development } from './mode/development'
import { production } from './mode/production'

export function getEnvironment() {
  if (process.env.NODE_ENV === 'production' || process.env.GATSBY_ACTIVE_ENV === 'production') {
    return production
  } else {
      return development
  }
}

export const environment = getEnvironment()