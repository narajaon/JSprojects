let http = require('http')
let CL = console.log
let link = process.argv[2]
let result = ""

http.get(link, function(res) {
    res.setEncoding('utf8')
    res.on('error', (e) => CL(e.message))
    res.on('data', function (data) {
        let formated = data.toString()
        CL(formated.length)
        CL(formated)
    })
    res.on('end', () => CL(result))
})
