import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 21px;
    width: 3px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

const CloseIcon = ({ title = 'Fechar', ...attrs }) => (
  <Icon title={title} {...attrs} />
)

CloseIcon.displayName = 'CloseIcon'

export default CloseIcon
