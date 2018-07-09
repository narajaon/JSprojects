let http = require('http')
let url = require('url')

let PORT = process.argv[2] || 3000
let CL = console.log

let server = http.createServer(function (req, res) {
    let parsedUrl = url.parse(req.url, true)

    if (parsedUrl.pathname === '/api/parsetime' || parsedUrl.pathname === '/api/unixtime') {
        if (req.method === 'GET') {
            let parsedDate = parsedUrl.query.iso
            let unixTime = { 'unixtime': Date.parse(parsedDate) }
            let converted = new Date(unixTime.unixtime)

            let dateObject = JSON.stringify({
                'hour': converted.getHours(),
                'minute': converted.getMinutes(),
                'second': converted.getSeconds(),
            })

            res.writeHead(200, { 'content-type': 'application/json' })
            res.write(parsedUrl.pathname === '/api/parsetime' ? dateObject : JSON.stringify(unixTime))
        }
    }
    res.end()
})

server.listen(PORT, function () {
    CL('server up')
})