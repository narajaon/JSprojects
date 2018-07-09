let http = require('http')
let map = require('through2-map')

let PORT = process.argv[2] || 3000
let CL = console.log

let server = http.createServer(function (req, res) {
    if (req.method === 'POST') {        
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    }
})

let makeRequest = function (data) {
    let postOptions = {
        port: '3000',
        method: 'POST',
        headers: {
            'content-type': 'text/plain'
        }
    }

    let request = http.request(postOptions, function (res) {
        res.setEncoding('utf8')
        res.on('data', function (chunk) {
            CL('RESPONSE: ' + chunk)
        })
    })

    request.write(data)
    request.end()
}

server.listen(PORT)

// uncomment to test
// makeRequest('coucou')