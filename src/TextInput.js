import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Wrapper = styled.View``
const Label = styled.Text``
const Input = styled.TextInput`
  border: 1px solid #eaeaea;
`
const ErrorMessage = styled.Text`
  color: #FF0000;
`

const TextInput = ({ label, onChange, error, ...props }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input {...props} onChangeText={onChange} />
      {!!error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextInput
