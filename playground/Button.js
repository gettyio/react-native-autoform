import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{children}</Text>
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})

export default Button
