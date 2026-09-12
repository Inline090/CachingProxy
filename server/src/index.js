const express = require('express')

const PORT = process.env.PORT || 3000
const ORIGIN = process.env.ORIGIN || 'http://localhost:8080'

const app = express()

app.get('/', (req, res) => {
  res.send(`caching-proxy is running. Forwarding to origin: ${ORIGIN}`)
})

// catch-all: everything not matched above gets proxied
app.use(async (req, res) => {
  const originRes = await fetch(ORIGIN + req.path, { method: req.method })
  const body = await originRes.text()
  res.status(originRes.status).send(body)
})

app.listen(PORT, () => {
  console.log(`caching-proxy listening on http://localhost:${PORT}`)
  console.log(`forwarding to origin: ${ORIGIN}`)
})
