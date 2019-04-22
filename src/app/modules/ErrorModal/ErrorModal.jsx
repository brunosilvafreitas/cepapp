import React from 'react'
import styled from 'styled-components'
import Modal from '../../../components/Modal'
import Box from '../../../components/Box'

const RedModal = styled(Modal)`
  & > div {
    background-color: #ff9999;
    border: none;
    padding-bottom: 30px;
  }
`

const ErrorInfo = styled(Box)`
  line-height: 120%;
  margin-bottom: 10px;
`

const ErrorModal = ({
  open = true,
  onClose,
  title,
  message,
  ...other
}) => (
  <RedModal
    open={open}
    onClose={onClose}
    title={title}
    {...other}
  >
    <ErrorInfo>
      {message}
    </ErrorInfo>
  </RedModal>
)

ErrorModal.displayName = 'ErrorModal'

export default ErrorModal
