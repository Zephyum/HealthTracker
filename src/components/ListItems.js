import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection } from './common'
import * as actions from '../actions'

class ListItems extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { entry, expanded } = this.props

    if (expanded) {
      return(
        <Card>
        <CardSection style={{flex: 1}}>
            <Text style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15
             }}>
              Description:
            </Text>
            <Text style={{
              flex: 1,
              paddingLeft: 15,
              paddingRight: 15
             }}>
             {entry.description}
             </Text>
             </CardSection>
           </Card>
      )
    }
  }

  render() {
    const { mood, stress, food, water, excercise, sleep, description, date } = this.props.entry

      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.selectEntry(date)}
        >
          <View>
            <Card>
              <CardSection>
                <Text>
                  {date}
                </Text>
                <CardSection>
                {this.renderDescription()}
                </CardSection>
              </CardSection>
            </Card>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedEntry === ownProps.entry.date
  console.log(state.selectedEntry + ' = ' + ownProps.entry.date)

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItems)
