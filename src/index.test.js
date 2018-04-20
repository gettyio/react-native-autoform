import 'react-native'
import { Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import Form from './'
import Input from './Input'
import { Row, RowItem } from './Utils'

import './testSetup'

describe('Form', () => {
  describe('rendering:', () => {
    it('renders correctly', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1'
            }
          ]}
        />
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('renders one input', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1'
            }
          ]}
        />
      )
      expect(wrapper.find(Input)).toHaveProperty('length', 1)
    })

    it('renders a custom input', () => {
      const CustomInput = () => <Text>CustomInput</Text>
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: CustomInput,
              label: 'Input 1'
            }
          ]}
        />
      )
      expect(wrapper.find(Input)).toHaveProperty('length', 1)
    })

    it('renders two inputs', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1'
            },
            {
              name: 'input2',
              type: 'text',
              label: 'Input 2'
            }
          ]}
        />
      )
      expect(wrapper.find(Input)).toHaveProperty('length', 2)
    })

    it('renders two inputs in the same row', () => {
      const wrapper = shallow(
        <Form
          schema={[
            [
              {
                name: 'input1',
                type: 'text',
                label: 'Input 1'
              },
              {
                name: 'input2',
                type: 'text',
                label: 'Input 2'
              }
            ]
          ]}
        />
      )
      expect(wrapper.find(Input)).toHaveProperty('length', 2)
    })

    it('renders two inputs in the same row with different length', () => {
      const schema = [
        [
          {
            name: 'input1',
            type: 'text',
            label: 'Input 1',
            flex: 1
          },
          {
            name: 'input2',
            type: 'text',
            label: 'Input 2',
            flex: 2
          }
        ]
      ]
      const wrapper = shallow(<Form schema={schema} />)
      wrapper
        .find(Row)
        .children()
        .forEach((node, index) => {
          expect(node.find(RowItem).props().flex).toEqual(schema[0][index].flex)
        })
    })
  })

  describe('state:', () => {
    it('manages the input state', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1'
            }
          ]}
        />
      )
      expect(wrapper.state('values')).toHaveProperty('input1')
    })

    it('starts with initialValue when present', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1',
              initialValue: 'teste'
            }
          ]}
        />
      )
      expect(wrapper.state('values').input1).toBe('teste')
    })
  })

  describe('validation:', () => {
    it('pass error prop to input on validation', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'address',
              type: 'text',
              label: 'Input 1',
              rules: {
                address: {
                  presence: {
                    allowEmpty: false,
                    message: () => 'is required'
                  }
                }
              }
            }
          ]}
        />
      )
      wrapper.instance()._validate('address')
      wrapper.update()
      expect(wrapper.find(Input).props().error).toEqual('Address is required')
    })
  })

  describe('submit:', () => {
    it('isValid true', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1',
              initialValue: 'teste'
            }
          ]}
        />
      )
      expect(wrapper.instance().submit()).toEqual({ isValid: true, data: { input1: 'teste' } })
    })

    it('isValid false', () => {
      const wrapper = shallow(
        <Form
          schema={[
            {
              name: 'input1',
              type: 'text',
              label: 'Input 1',
              rules: {
                input1: {
                  presence: {
                    allowEmpty: false,
                    message: () => 'is required'
                  }
                }
              }
            }
          ]}
        />
      )
      expect(wrapper.instance().submit()).toEqual({ isValid: false, data: { input1: '' } })
    })
  })
})
