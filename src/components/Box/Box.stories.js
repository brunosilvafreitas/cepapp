import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from './Box'

storiesOf('@cepapp/components/Box', module)
  .add('default', () => (
    <Box
      border='1px solid red'
      p={20}
    >
      Conteúdo
    </Box>
  ))
