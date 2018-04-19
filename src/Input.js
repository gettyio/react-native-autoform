import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import TextInput from './TextInput'

class Input extends Component {
  static propTypes = {
    schema: PropTypes.shape({
      type: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
      ]).isRequired
    }).isRequired
  }

  render () {
    const { type: Input, ...props } = this.props.schema
    const inputProps = { ...this.props, ...props }
    if (typeof Input === 'string') {
      switch (Input) {
        case 'text':
          return <TextInput {...inputProps} />
        default:
          return <Text>Component type not implemented</Text>
      }
    }
    return <Input {...inputProps} />
  }
}

export default Input
