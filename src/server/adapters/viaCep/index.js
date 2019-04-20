import fetch from 'isomorphic-fetch'
import constans from '../../../config/constans'
import { runInNewContext } from 'vm'

const { VIA_CEP: { WS_URI } } = constans

const getAddress = async (postalCode) => {
  console.log(`[Adapter][ViaCep] GetAddress by postal code ${postalCode}`)
  const postalCodeInt = Number(postalCode.replace('-', ''))
  const uri = WS_URI + '/' + postalCodeInt + '/json/?callback=cb'
  const response = await fetch(uri)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const ctx = Object.create(null)
  ctx['cb'] = data => data

  const jsonp = await response.text()
  const data = runInNewContext(jsonp, ctx)

  const parsedData = {
    postal_code: data.cep,
    street: data.logradouro,
    neighborhood: data.bairro,
    city: data.localidade,
    state: data.uf
  }

  console.log(`[Adapter][ViaCep] Return ${JSON.stringify(parsedData)}`)
  return parsedData
}

export { getAddress }
