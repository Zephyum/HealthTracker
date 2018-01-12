import React, { Component } from 'react'
import { View } from 'react-native'
import LibraryList from './LibraryList'
import QForm from './QForm'

class MainData extends Component {
  render() {
    return(
      <View>
        <QForm />
        <LibraryList />
    </View>
    )
  }
}

export default MainData
