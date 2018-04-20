import 'react-native'
import { Text } from 'react-native'
import React from 'react'
import { shallow } from 'enzyme'

import Form from './'
import Input from './Input'
import { Row, RowItem } from './Utils'

import './testSetup'

describe('Form', () => {
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
    const wrapper = shallow(
      <Form
        schema={schema}
      />
    )
    wrapper.find(Row).children().forEach((node, index) => {
      expect(node.find(RowItem).props().flex).toEqual(schema[0][index].flex)
    })
  })
})
