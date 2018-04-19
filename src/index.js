import React, { Component, Fragment } from 'react'
import flatten from '@flatten/array'
import PropTypes from 'prop-types'
import validate from 'validate.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Row, RowItem, HorizontalSpacer, VerticalSpacer } from './Utils'
import Input from './Input'

class Form extends Component {
  static propTypes = {
    schema: PropTypes.array.isRequired
  }

  state = {
    values: flatten([this.props.schema]).reduce((data, item) => {
      data[item.name] = item.initialValue || ''
      return data
    }, {}),
    errors: {}
  }

  focusableInputs = []

  _validate = key => {
    // passing into an array so that flatten doesn't try to mutate schema.
    const errors = flatten([this.props.schema])
      .filter(input => !!input.rules)
      .reduce((errors, input) => {
        const error = this._validateInput(input)
        if (error) {
          errors[input.name] = error[input.name][0]
        }
        return errors
      }, {})

    this.setState({ errors })

    return validate.isEmpty(errors)
  }

  _validateInput = input => input.rules && validate(this.state.values, input.rules)

  _renderInputOrRow = (item, index, array, isRow = false) => {
    if (item.constructor === Array) {
      return (
        <Row key={item.reduce((previous, current) => previous.name + current.name, '')}>
          {item.map((rowItem, index, array) => this._renderInputOrRow(rowItem, index, array, true))}
        </Row>
      )
    }
    return (
      <Fragment key={item.name}>
        <RowItem flex={item.flex}>
          <Input
            schema={item}
            innerRef={element => {
              element.focus && (this.focusableInputs[item.name] = element)
            }}
            value={this.state.values[item.name]}
            error={this.state.errors[item.name]}
            onChange={value =>
              this.setState({
                values: Object.assign({}, this.state.values, { [item.name]: value })
              })
            }
            onBlur={() => {
              const error = this._validateInput(item)
              this.setState({
                errors: Object.assign({}, this.state.errors, {
                  [item.name]: error ? error[item.name][0] : null
                })
              })
            }}
            onSubmitEditing={() => {
              item.goTo &&
                this.focusableInputs[item.goTo] &&
                this.focusableInputs[item.goTo].focus()
            }}
          />
        </RowItem>
        {index !== array.length - 1 && (isRow ? <HorizontalSpacer /> : <VerticalSpacer />)}
      </Fragment>
    )
  }

  submit = () => {
    if (this._validate()) {
      return {
        isValid: true,
        data: this.state.values
      }
    }
    return {
      isValid: false,
      data: this.state.values
    }
  }

  render () {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        innerRef={ref => {
          this.scroll = ref
        }}
      >
        {this.props.schema.map(this._renderInputOrRow)}
      </KeyboardAwareScrollView>
    )
  }
}

export default Form
