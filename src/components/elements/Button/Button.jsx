import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  border-radius: 5px;
`

const Button = ({ children, ...other }) => (
  <StyledButton {...other}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
