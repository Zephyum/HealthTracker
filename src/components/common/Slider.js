import React from 'react'
import {TextInput, View, Text} from 'react-native'
import Slider from "react-native-slider";

const Sliderr = ({ label, label2, value, minimumValue, maximumValue, step, onValueChange }) => {
  const { labelStyle, label2Style, containerStyle } = styles
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={label2Style}>{label2}</Text>
      <Slider
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        style={{
          flex: 3,
          paddingLeft: 5,
          paddingRight: 5,
          alignItems: "stretch",
          justifyContent: "center"
        }}
        onValueChange={onValueChange}
    />
    </View>
  )
}

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 2
  },
  label2Style: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export {Sliderr}
