const express = require('express')
const next = require('next')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = require('./server/routers/router')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
require('dotenv').config()
require('./server/db/connection')

app.prepare().then(() => {
  const app = express()

  app.use(bodyParser.json())
  app.use(morgan('dev'))
  app.use(router)

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
