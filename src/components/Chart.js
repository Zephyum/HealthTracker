import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import ChartView from 'react-native-highcharts'

// { mood, stress, food, water, excercise, sleep, description, date }


class Chart extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)

    let arrayOfObjects = []
    let moods = []
    let foods = []
    let stresses = []
    let waters = []
    let excercises = []
    let sleeps = []
    let dates = []
    for (let key in this.props.entries) {
      console.log(key)
      let object = this.props.entries[key]
      arrayOfObjects.push(object)
      moods.push(object.mood)
      foods.push(object.food)
      stresses.push(object.stress)
      waters.push(object.water)
      excercises.push(object.excercise)
      sleeps.push(object.sleep)
      dates.push(object.date)
    }

    this.state = {
      moodsArray: moods,
      foodsArray: foods,
      stressArray: stresses,
      watersArray: waters,
      excerciseArray: excercises,
      sleepsArray: sleeps,
      datesArray: dates
    }
    console.log('moods array = ' + moods)



  }

  componentWillMount() {

    // const { entriesObject } = this.props
    //   console.log(entriesObject)

}

  render() {
    let Highcharts = 'Highcharts'
    let conf = {

      chart: {
        polar: true,
        type: 'line'
      },

      title: {
        text: 'OverView',
        x: -80
      },

      pane: {
        size: '80%'
      },

      xAxis: {
        categories: this.state.datesArray,
        tickmarkPlacement: 'on',
        lineWidth: 0,
        title: {text: 'Days'}
      },

      yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 10
      },

      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },

      // tooltip: {
      //   shared: false,
      //   // pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
      // },

      // legend: {
      //   align: 'right',
      //   verticalAlign: 'top',
      //   y: 70,
      //   layout: 'vertical'
      // },

      series: [ {
        name: 'Mood',
        data: this.state.moodsArray,
        pointPlacement: 'on'
      }, {
        name: 'Excercise',
        data: this.state.excerciseArray,
        pointPlacement: 'on'
      }, {
        name: 'Food',
        data: this.state.foodsArray,
        pointPlacement: 'on'
      }, {
        name: 'Water',
        data: this.state.watersArray,
        pointPlacement: 'on'
      }, {
        name: 'Stress Level',
        data: this.state.stressArray,
        pointPlacement: 'on'
      }, {
        name: 'Sleep',
        data: this.state.sleepsArray,
        pointPlacement: 'on'
      } ]

    }

    const options = {
      global: {
        useUTC: false
      },
      lang: {
        decimalPoint: '.',
        thousandsSep: ','
      }
    }

    return (
      <ChartView style={{ height:300 }} config={ conf } options={ options } />
    )
  }
}

const mapStateToProps = ({ entries }) => {
  console.log(entries)
  // const { entriesObject } = entries
  // let arrayOfObjects.filter
  return ({ entries })
}

export default connect(mapStateToProps)(Chart)
