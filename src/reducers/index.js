import { combineReducers } from 'redux'
import SelectionReducer from './SelectionReducer'
import AuthReducer from './AuthReducer'
import QFormReducer from './QFormReducer'
import EntryReducer from './EntryReducer'

export default combineReducers({
  selectedEntry: SelectionReducer,
  auth: AuthReducer,
  QForm: QFormReducer,
  entries: EntryReducer
})
