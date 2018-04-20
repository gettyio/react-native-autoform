import 'react-native'
import React from 'react'
import Form from './'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Form
    schema={[
      {
        name: 'input1',
        type: 'text',
        label: 'Input 1'
      }
    ]}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
