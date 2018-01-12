import {
  Q_UPDATE,
  ENTRY_CREATE,
  ENTRY_FETCH_SUCCESS
} from './types'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

export const QUpdate = ({ prop, value }) => {
  return {
    type: Q_UPDATE,
    payload: { prop, value }
  }
}

export const entryCreate = ({ mood, stress, food, water, excercise, sleep, description }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/entries`)
      .push({ mood, stress, food, water, excercise, sleep, description })
       .then(() => {
          dispatch({ type: ENTRY_CREATE })
       })
  }
}

export const entryFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/entries`)
      .on('value', snapshot => {
        dispatch({ type: ENTRY_FETCH_SUCCESS, payload: shapshot.val() })
      })
  }
}
