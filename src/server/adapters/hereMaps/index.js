import fetch from 'node-fetch'
import { HERE_MAPS } from '../../../../config/constans'

const { APP_CODE, APP_ID, GEOCODER_URI } = HERE_MAPS

const getCoordinates = async (cep) => {
  const uri = GEOCODER_URI + '?app_id=' + APP_ID + '&app_code=' + APP_CODE + '&searchtext=' + cep
  const response = await fetch(uri)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  try {
    const { Latitude: lat, Longitude: lng } = data.Response.View[0].Result[0].Location.DisplayPosition
    return { lat, lng }
  } catch (e) {
    console.error(e)
    return null
  }
}

export { getCoordinates }