let PORT = parseInt(process.argv[2]) || 3000
let PATH = process.argv[3]
let CL = console.log
let http = require('http')
let fs = require('fs')

let server = http.createServer(function (req, res) {
    let readableStream = fs.createReadStream(PATH, 'utf8')
    res.writeHead(200, { 'content-type': 'text/plain' })
    readableStream.pipe(res)
})

server.listen(PORT)