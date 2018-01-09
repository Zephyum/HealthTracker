import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm.js'

export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyAKGRxarG9SQFhzoEKKvFB9vK2aAEZxaJA",
    authDomain: "health-tracker-zephyum.firebaseapp.com",
    databaseURL: "https://health-tracker-zephyum.firebaseio.com",
    projectId: "health-tracker-zephyum",
    storageBucket: "health-tracker-zephyum.appspot.com",
    messagingSenderId: "699378839717"
  })
}

  render() {
    return (
      <View>
      <Header headerText="Authentication!"/>
      <LoginForm />
      </View>
    );
  }
}
