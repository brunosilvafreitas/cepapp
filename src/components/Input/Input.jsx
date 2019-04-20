import React from 'react'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

const Field = styled(InputMask)`
  box-sizing: border-box;
  appearance: none;
  padding: 8px 10px;
  margin-right: 10px;
  outline: none;
  border-radius: 3px;
  border: 1px solid #ddd;
`

const Input = ({ ...other }) => (
  <Field {...other} />
)

Input.displayName = 'Input'

export default Input
