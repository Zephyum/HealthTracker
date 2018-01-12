import {
  Q_UPDATE,
  ENTRY_CREATE
} from '../actions/types'

const INITIAL_STATE = {
  mood: '',
  stress: '',
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
    case ENTRY_CREATE:
    console.log('hey im hitting you')
      return INITIAL_STATE
    default:
      return state
  }
}
