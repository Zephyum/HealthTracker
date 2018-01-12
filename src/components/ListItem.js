import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection, Card } from './common'
import * as actions from '../actions'

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  {/* renderDescription() {
    const { entry, expanded} = this.props

    if (expanded) {
      return(
        <CardSection>
          <Text style={{
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15
           }}>
          {entry.description}
          </Text>
        </CardSection>
      )
    }
  } */}

  render() {
    const { titleStyle } = styles
    const { mood, stress, food, water, excercise, sleep, description } = this.props.entry

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <Card>
          <CardSection>
            <Text style={titleStyle}>
              {mood}
            </Text>
          </CardSection>
          {/* {this.renderDescription()} */}
        </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
