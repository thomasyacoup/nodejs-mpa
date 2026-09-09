const fs   = require('fs/promises')
const http = require('http')

async function sendPage(res , path, code) {
  try {
    const indexPage = await fs.readFile(path, 'utf-8')
    res.setHeader('content-type', 'text/html')
    res.statusCode = code
    res.write(indexPage)
    res.end()
  } catch (err) {
    res.statusCode = 500
    res.end('Internal Server Error')
  }
}

const server = http.createServer()

server.on('request', (req, res) => {
  const { url } = req

  if (url == '/') {
    sendPage(res, './views/home.html', 200)
  } else if (url == '/contact') {
    sendPage(res, './views/contact.html', 200)
  } else {
    sendPage(res, './views/404.html', 404)
  }
})

server.listen(8080, () => console.log('server listening on port 8080'))