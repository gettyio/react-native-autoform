# @gettyio/react-native-form

A Form component that automatically manages the state of your inputs, validation and navigation through the inputs like magic.

## How to use it
```
import React from 'react'
import Form from '@gettyio/react-native-form'
import CustomInput from './CustomInput' // import your input

const Scene = () => (
  <>
    <Form
      innerRef={el => (this.form = el)}
      schema={[
        {
          type: CustomInput,
          name: 'my-custom-input', // unique name
          /* any props that you want to pass down to your input will be forwarded to it */
          rules: {
            'my-custom-input': {
              presence: {
                allowEmpty: false,
                message: 'is required'
              }
            }
          }
        }
      ]}
    />
    <Button onPress={this.form.submit()}>
      <Text>Submit</Text>
    </Button>
  </>
)
```

## How to contribute
Fork the project, do what you want and submit a PR back to us on the `development` branch. We'll be more than happy to accept any contributions and suggestions.
