import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm.js'

export default class App extends Component {
  state={loggedIn: null}

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyAKGRxarG9SQFhzoEKKvFB9vK2aAEZxaJA",
    authDomain: "health-tracker-zephyum.firebaseapp.com",
    databaseURL: "https://health-tracker-zephyum.firebaseio.com",
    projectId: "health-tracker-zephyum",
    storageBucket: "health-tracker-zephyum.appspot.com",
    messagingSenderId: "699378839717"
  })
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({loggedIn: true})
    } else {
    this.setState({loggedIn: false})
  }
  })
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
      <Button onPress={() => firebase.auth().signOut()}>
      Log Out
      </Button>
    )
    case false:
      return <LoginForm />
    default:
      return <Spinner size="large" />
  }
}


  render() {
    return (
      <View>
      <Header headerText="Authentication!"/>
      {this.renderContent()}
      </View>
    );
  }
}
