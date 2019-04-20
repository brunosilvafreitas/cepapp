import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import CloseIcon from './CloseIcon'

storiesOf('@cepapp/components/CloseIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <CloseIcon title={text('Texto ao passar o mouse', 'Fechar')} />
  ))
