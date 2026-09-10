const express = require('express')

const PORT = process.env.PORT || 3000
const ORIGIN = process.env.ORIGIN || 'http://localhost:8080'

const app = express()

app.get('/', (req, res) => {
  res.send(`caching-proxy is running. Forwarding to origin: ${ORIGIN}`)
})

app.listen(PORT, () => {
  console.log(`caching-proxy listening on http://localhost:${PORT}`)
  console.log(`forwarding to origin: ${ORIGIN}`)
})
