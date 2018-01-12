import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReducer'
import SelectionReducer from './SelectionReducer'
import AuthReducer from './AuthReducer'
import QFormReducer from './QFormReducer'
import EntryReducer from './EntryReducer'

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
  auth: AuthReducer,
  QForm: QFormReducer,
  Entries: EntryReducer

})
