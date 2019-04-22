import path from 'path'
import cluster from 'cluster'
import express from 'express'
import bodyParser from 'body-parser'
import router from './router'

const app = express()
const PORT = process.env.PORT || 3000

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length

  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  app.use(bodyParser.json())
  app.use('/public', express.static(path.join(process.cwd(), 'public')))
  app.use(router)
  app.listen(PORT)
  console.log('Cep App running on port', PORT)
}

cluster.on('exit', (worker) => {
  console.log('Worker %d died :(', worker.id)
  cluster.fork()
})
