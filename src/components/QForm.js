import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Card, CardSection, Input, Button, Sliderr } from './common'
import { QUpdate, entryCreate } from '../actions'

class QForm extends Component {

  onButtonPress() {
    const { mood, stress, food, water, excercise, sleep, description, date } = this.props

    this.props.entryCreate({
      mood: mood || 1,
      stress: stress || 1,
      food: food || 1,
      water: water || 1,
      excercise: excercise || 1,
      sleep: sleep || 1,
      description: description || 'NA',
      date: moment().format('L'),
    })
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Sliderr
            label="Mood"
            label2={this.props.mood || 1}
            value={this.props.mood || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'mood', value })}
        />
        </CardSection>

        <CardSection>
          <Sliderr
            label="Stress"
            label2={this.props.stress || 1}
            value={this.props.stress || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'stress', value })}
        />
        </CardSection>

        <CardSection>
          <Sliderr
            label="Food"
            label2={this.props.food || 1}
            value={this.props.food || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'food', value })}
        />
        </CardSection>

        <CardSection>
          <Sliderr
            label="Water"
            label2={this.props.water || 1}
            value={this.props.water || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'water', value })}
        />
        </CardSection>

        <CardSection>
          <Sliderr
            label="Excercise"
            label2={this.props.excercise || 1}
            value={this.props.excercise || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'excercise', value })}
        />
        </CardSection>

        <CardSection>
          <Sliderr
            label="Sleep"
            label2={this.props.sleep || 1}
            value={this.props.sleep || 1}
            minimumValue={1}
            maximumValue={10}
            step={1}
            onValueChange={value => this.props.QUpdate({ prop: 'sleep', value })}
        />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="Description"
            autoCorrect
            value={this.props.description}
            onChangeText={value => this.props.QUpdate({ prop: 'description', value })}
            />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Record
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { mood, stress, food, water, excercise, sleep, description } = state.QForm
  return { mood, stress, food, water, excercise, sleep, description }
}

export default connect(mapStateToProps, { QUpdate, entryCreate })(QForm)
