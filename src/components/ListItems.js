import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItems extends Component {
  render() {
    const { mood } = this.props.entry
    
      return (
      <CardSection>
        <Text>
          {mood}
        </Text>
      </CardSection>
    )
  }
}

export default ListItems
