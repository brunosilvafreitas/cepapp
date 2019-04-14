import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import Map from './Map'

storiesOf('@cepapp/components/elements/Map', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Map
      appId={text('HERE MAPS App Id', 'aU0ta4JLw98rZM19LPxB')}
      appCode={text('HERE MAPS App Code', 'A7r-IjOIDR1r4YLFbbcfVw')}
      lat={text('Latitude', '-23.46767')}
      lng={text('Longitude', '-47.47433')}
    />
  ))
