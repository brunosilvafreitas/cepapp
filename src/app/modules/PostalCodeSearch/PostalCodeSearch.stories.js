/* global alert */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import PostalCodeSearch from './PostalCodeSearch'

storiesOf('@cepapp/app/modules/PostalCodeSearch', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <PostalCodeSearch width='400px' onSubmit={(data) => alert(data)} />
  ))
