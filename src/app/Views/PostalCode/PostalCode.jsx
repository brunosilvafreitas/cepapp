import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'
import PostalCodeSearch from '../../modules/PostalCodeSearch'
import AddressModal from '../../modules/AddressModal'
import ErrorModal from '../../modules/ErrorModal'
import Box from '../../../components/Box'

const PostalCodeContainer = styled(Box)`
  margin: 10px;
  width: 600px;
`

const isValidPostalCode = (code) => {
  const parsed = Number(code.replace('-', ''))
  return !isNaN(parsed) && parsed.toString().length === 8
}

const PostalCode = ({ history, match }) => {
  const currentPostalCode = match.params.code || ''

  const [map, setMap] = useState()
  const [postalCode, setPostalCode] = useState(isValidPostalCode(currentPostalCode) ? currentPostalCode : null)
  const [error, setError] = useState()

  const handleClose = () => {
    setError()
    setPostalCode()
    setMap()
  }

  const handleSubmit = (code) => {
    setPostalCode(code)
  }

  useEffect(() => {
    const fetchAddress = async (code) => {
      const response = await fetch('http://localhost:3000/api/address/' + code)

      if (!response || !response.ok) {
        setError('Tente novamente mais tarde.')
      }

      const mapData = await response.json()

      if (mapData.postalCode) {
        setError()
        setMap(mapData)
      } else {
        setMap()
        setError('Não há dados para o CEP informado.')
      }
    }

    if (postalCode && (!map || (map.postalCode && postalCode !== map.postalCode))) {
      history.replace(match.path.replace(':code', postalCode))
      fetchAddress(postalCode)
    }
  }, [postalCode])

  return (
    <PostalCodeContainer>
      <PostalCodeSearch postalCode={postalCode} onSubmit={data => handleSubmit(data)} />
      {map && !error && <AddressModal {...map} onClose={() => handleClose()} />}
      {error && <ErrorModal title='Não foi possível encontrar o endereço' message={error} onClose={() => handleClose()} />}
    </PostalCodeContainer>
  )
}

PostalCode.displayName = 'PostalCode'

export default PostalCode
