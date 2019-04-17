import resolver from './address.resolver'

const getByPostalCode = async (req, res) => {
  const { postalCode } = req.params
  const address = await resolver.getByPostalCode(postalCode)

  res.json(address)
}

export default { getByPostalCode }
