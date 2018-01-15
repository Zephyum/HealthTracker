import React, { Component } from 'react'
import { View } from 'react-native'
import LibraryList from './LibraryList'
import Chart from './Chart'

class MainData extends Component {
  render() {
    return(
      <View>
        <Chart />
        <LibraryList />
    </View>
    )
  }
}

export default MainData
