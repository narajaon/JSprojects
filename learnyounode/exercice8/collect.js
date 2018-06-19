let http = require('http')
let bl = require('bl')
let CL = console.log
let link = process.argv[2]
let result = ""

http.get(link, function (res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            return CL(err.message)
        }
        let formated = data.toString()
        let size = formated.length
        CL(size)
        CL(formated)
    }))
})
