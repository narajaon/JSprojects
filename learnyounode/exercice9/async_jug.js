let http = require('http')
let bl = require('bl')
let CL = console.log
let link1 = process.argv[2]
let link2 = process.argv[3]
let link3 = process.argv[4]
let result = []
let callNB = 0

let getRes = function (link, resp, index) {
    http.get(link, function (res) {
        res.pipe(bl(function (err, data) {
            if (err) {
                return CL(err.message)
            }

            let formated = data.toString()
            resp[index] = formated
            callNB++

            if (callNB === 3) {
                result.forEach((elem) => CL(elem))
            }
        }))
    })
}

getRes(link1, result, 0)
getRes(link2, result, 1)
getRes(link3, result, 2)