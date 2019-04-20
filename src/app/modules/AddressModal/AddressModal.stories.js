/* global alert */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import AddressModal from './AddressModal'

storiesOf('@cepapp/app/modules/AddressModal', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <AddressModal
      postalCode={text('CEP', '18074-385')}
      street={text('Logradouro', 'Rua Atanázio Soares')}
      neighborhood={text('Bairro', 'Jardim Maria Eugênia')}
      city={text('Cidade', 'Sorocaba')}
      state={text('Estado', 'SP')}
      lat={text('Latitude', '-23.46767')}
      lng={text('Longitude', '-47.47433')}
      width='500px'
      onClose={() => { alert('Fechando pelo componente') }}
    />
  ))
