import express from 'express'
import address from './api/address'
const router = express.Router()

router.use('/api/address/:postalCode', address.getByPostalCode)

export default router
