import express from 'express'
import address from './api/address'
import render from './render'
const router = express.Router()

router.use('/api/address/:postalCode', address.getByPostalCode)
router.use('/', render)

export default router
