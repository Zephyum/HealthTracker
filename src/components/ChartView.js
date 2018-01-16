import React, { Component } from 'react'
import { View } from 'react-native'
import LibraryList from './LibraryList'
import Chart from './Chart'

class MainData extends Component {
  render() {
    return(
      <View style={{ flex: 1}}>
        <View>
          <Chart />
        </View>
        <ScrollView>
          <LibraryList />
        </ScrollView>
      </View>
    )
  }
}

export default MainData
