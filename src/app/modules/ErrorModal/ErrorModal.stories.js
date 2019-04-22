/* global alert */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import ErrorModal from './ErrorModal'

storiesOf('@cepapp/app/modules/ErrorModal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ErrorModal
      title={text('Título', 'Não foi possível encontrar o endereço')}
      message={text('Mensagem', 'Tente novamente')}
      onClose={() => { alert('Fechando pelo componente') }}
      width='500px'
    />
  ))
