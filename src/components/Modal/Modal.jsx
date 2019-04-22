import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from '../CloseIcon'
import Box from '../Box'

const ModalContainer = styled(Box)`
  position: relative;
  overflow: hidden;
`

const ModalSlider = styled(Box)`
  position: relative;
  margin-top: -100%;
  border: 2px solid #ddd;
  padding: 20px 25px 25px;
  box-sizing: border-box;
  transition: all 0.3s ease-in;

  &.modal-open {
    margin-top: 0;
  }
`

const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`

const Close = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`

const Modal = ({ title, open = false, onClose, children, ...other }) => {
  const [isOpen, setOpen] = useState(open)

  const handleTransitionEnd = () => {
    onClose()
  }

  useEffect(() => {
    setOpen(open)

    if (open && onClose) {
      document.querySelector('.modal-open').addEventListener('transitionend', handleTransitionEnd)
    }

    return function cleanup () {
      setOpen(false)
    }
  }, [open])

  return (
    <ModalContainer {...other}>
      <ModalSlider className={isOpen && 'modal-open'}>
        <Close onClick={() => setOpen(false)} />
        <ModalHeader>
          {title}
        </ModalHeader>
        {children}
      </ModalSlider>
    </ModalContainer>
  )
}

Modal.displayName = 'Modal'

export default Modal
