/* global alert */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Modal from './Modal'

storiesOf('@cepapp/components/Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Modal
      open={boolean('Modal aberto', true)}
      onClose={() => { alert('Fechando pelo componente') }}
      title={text('Título', 'Exemplo de modal!')}
    >
      Texto exemplo <br />
      <ul>
        <li>Exemplo</li>
        <li>Exemplo</li>
        <li>Exemplo</li>
      </ul>
    </Modal>
  ))
