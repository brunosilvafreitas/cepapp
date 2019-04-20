import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import Button from './Button'
import docs from './Button.md'

storiesOf('@cepapp/components/Button', module)
  .addDecorator(withKnobs)
  .add('default', withReadme(docs, () => (
    <Button>{text('Texto do botão', 'Clique aqui!')}</Button>
  )))
