import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  box-shadow: none;
  box-sizing: border-box;
  padding: 6px 10px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

const Button = ({ children, ...other }) => (
  <StyledButton {...other}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
