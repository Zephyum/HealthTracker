import {
  Q_UPDATE
} from './types'

export const QUpdate = ({ prop, value }) => {
  return {
    type: Q_UPDATE,
    payload: { prop, value }
  }
}
