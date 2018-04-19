/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Alert } from 'react-native'
import Form from 'react-native-form'
import CustomInput from './CustomInput'
import Button from './Button'

export default class App extends Component {
  _handleSubmit = () => {
    Alert.alert(JSON.stringify(this.form.submit(), 2, ' '))
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Form
          ref={element => (this.form = element)}
          schema={[
            {
              type: 'text',
              name: 'text1',
              label: 'TextInput',
              goTo: 'text2',
              rules: {
                text1: {
                  presence: {
                    allowEmpty: false,
                    message: 'TextInput required!'
                  }
                }
              }
            },
            {
              type: 'text',
              name: 'text2',
              label: 'TextInput',
              goTo: 'text3'
            },
            {
              type: 'text',
              name: 'text3',
              label: 'TextInput',
              goTo: 'text4'
            },
            {
              type: 'text',
              name: 'text4',
              label: 'TextInput',
              goTo: 'text5'
            },
            {
              type: 'text',
              name: 'text5',
              label: 'TextInput',
              goTo: 'text6'
            },
            {
              type: 'text',
              name: 'text6',
              label: 'TextInput',
              goTo: 'text7'
            },
            {
              type: 'text',
              name: 'text7',
              label: 'TextInput',
              goTo: 'text8'
            },
            {
              type: 'text',
              name: 'text8',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text9',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text13',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text14',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text15',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text16',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text17',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text18',
              label: 'TextInput'
            },
            {
              type: 'text',
              name: 'text19',
              label: 'TextInput',
              goTo: 'custom 1'
            },
            {
              type: CustomInput,
              initialValue: true,
              name: 'custom 1',
              label: 'Custom input'
            },
            [
              {
                type: 'text',
                name: 'text31',
                label: 'TextInput'
              },
              {
                type: 'text',
                name: 'text32',
                label: 'TextInput'
              }
            ]
          ]}
        />
        <Button onPress={this._handleSubmit}>Enviar</Button>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
