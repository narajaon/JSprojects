let http = require('http')
let bl = require('bl')
let CL = console.log
let link = process.argv[2]

http.get(link, function (res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            return CL(err.message)
        }
        let formated = data.toString()
        CL(formated.length)
        CL(formated)
    }))
})
