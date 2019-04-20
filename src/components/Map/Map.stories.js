import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import config from '../../config/constans'
import Map from './Map'

storiesOf('@cepapp/components/Map', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Map
      appId={text('HERE MAPS App Id', config.HERE_MAPS.APP_ID)}
      appCode={text('HERE MAPS App Code', config.HERE_MAPS.APP_CODE)}
      lat={text('Latitude', '-23.46767')}
      lng={text('Longitude', '-47.47433')}
    />
  ))
