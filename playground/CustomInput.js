import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Switch } from 'react-native'

const CustomInput = ({ label, onChange, ...props }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Text>{label}</Text>
    <Switch onValueChange={onChange} {...props} />
  </View>
)

CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CustomInput
