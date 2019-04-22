import { geocoderAdapter, postalCodeAdapter } from '../../adapters'

const getByPostalCode = async (postalCode) => {
  console.log(`[Address][Resolver] Searching by Postal Code ${postalCode}`)
  const data = await Promise.all([
    postalCodeAdapter.getAddress(postalCode),
    geocoderAdapter.getCoordinates(postalCode)
  ])

  const address = data[0]
  const coordinates = data[1]

  const response = {
    ...address,
    ...coordinates
  }

  console.log(`[Address][Resolver] Return ${JSON.stringify(response)}`)
  return response
}

export default {
  getByPostalCode
}
