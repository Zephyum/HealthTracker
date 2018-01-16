import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import { Card, CardSection } from './common'
import * as actions from '../actions'

class ListItems extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  // { mood, stress, food, water, excercise, sleep, description, date }

  renderDescription() {
    const { entry, expanded } = this.props

    if (expanded) {
      return(
        <View>
          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                // flex: 1,
                // paddingLeft: 15,
                // paddingRight: 15
               }}>
                mood:
              </Text>
              <Text style={{
                // flex: 1,
                // paddingLeft: 15,
                // paddingRight: 15
               }}>
                {entry.mood}
               </Text>
            </CardSection>
          </Card>

          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                Stress:
              </Text>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                {entry.stress}
              </Text>
            </CardSection>
          </Card>

          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                Food:
              </Text>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                {entry.food}
              </Text>
            </CardSection>
          </Card>

          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                Water:
              </Text>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                {entry.water}
              </Text>
            </CardSection>
          </Card>

          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                Excercise:
              </Text>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                {entry.Sleep}
              </Text>
            </CardSection>
          </Card>
          <Card>
            <CardSection style={{flex: 1}}>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                Description:
              </Text>
              <Text style={{
                   // flex: 1,
                   // paddingLeft: 15,
                   // paddingRight: 15
              }}>
                {entry.description}
              </Text>
            </CardSection>
          </Card>
        </View>
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
              </CardSection>
                <CardSection>
                {this.renderDescription()}
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
