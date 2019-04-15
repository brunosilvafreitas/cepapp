import express from 'express'
const router = express.Router()

// TODO Rotas
router.route('/')
  .get((req, res) => res.send('CEP APP'))

export default router
