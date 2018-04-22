# @getty.io/react-native-form

A Form component that automatically manages the state of your inputs, validation and navigation through the inputs like magic.

*:construction: THIS IS A WORK IN PROGRESS*

## What this component do?
This form component automatically manages the state of its inputs created from the schema, validates them according to the rules passed on the rule keyword of the input schema, using the [validate.js](https://validatejs.org/) validators.
Your input will receive the `value`, `onChange` and `error` props so that you can use the `Form` with as much components as you need. We intend to add default inputs in a near future and devote our time into creating a solution for our forms that takes less time to use it then the solutions we have today.

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
