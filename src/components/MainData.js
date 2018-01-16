import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import LibraryList from './LibraryList'
import QForm from './QForm'

class MainData extends Component {
  render() {
    return(
      <View style={{ flex: 1}}>
        <View>
          <QForm />
        </View>
        <ScrollView>
          <LibraryList />
        </ScrollView>
      </View>
    )
  }
}

export default MainData
