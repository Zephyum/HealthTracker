import {
  Q_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  mood: '',
  food: '',
  water: '',
  excercise: '',
  sleep: '',
  description: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Q_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
