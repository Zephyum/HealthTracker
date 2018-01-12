import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import { Header } from './src/components/common'
import LibraryList from './src/components/LibraryList'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './src/components/LoginForm'
import Router from './src/Router'

export default class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyAKGRxarG9SQFhzoEKKvFB9vK2aAEZxaJA",
    authDomain: "health-tracker-zephyum.firebaseapp.com",
    databaseURL: "https://health-tracker-zephyum.firebaseio.com",
    projectId: "health-tracker-zephyum",
    storageBucket: "health-tracker-zephyum.appspot.com",
    messagingSenderId: "699378839717"
  };

  firebase.initializeApp(config);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    console.disableYellowBox = true

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}
