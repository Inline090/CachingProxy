const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Caching proxy placeholder — the real proxy lands in the next increment.')
})

server.listen(PORT, () => {
  console.log(`caching-proxy dev server listening on http://localhost:${PORT}`)
})
