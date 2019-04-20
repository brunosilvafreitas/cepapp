import React from 'react'
import styled from 'styled-components'
import config from '../../../config/constans'
import Modal from '../../../components/Modal'
import Map from '../../../components/Map'
import Box from '../../../components/Box'

const AddressInfo = styled(Box)`
  line-height: 120%;
  margin-bottom: 10px;
`

const AddressModal = ({
  open = true,
  onClose,
  postalCode,
  street,
  neighborhood,
  city,
  state,
  lat,
  lng,
  ...other
}) => (
  <Modal
    open={open}
    onClose={onClose}
    title={street}
    {...other}
  >
    <AddressInfo>
      {neighborhood}<br />
      {city} - {state}<br />
      {postalCode}
    </AddressInfo>
    <Map
      appId={config.HERE_MAPS.APP_ID}
      appCode={config.HERE_MAPS.APP_CODE}
      lat={lat}
      lng={lng}
    />
  </Modal>
)

AddressModal.displayName = 'AddressModal'

export default AddressModal
