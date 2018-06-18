let http = require('http')
let CL = console.log
let link = process.argv[2]

http.get(link, function(res) {
    res.setEncoding('utf8')
    res.on('error', (e) => CL(e.message))
    res.on('data', function (data) {
        CL(data)
    })
})
