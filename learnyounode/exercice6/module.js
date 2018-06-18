let fs = require('fs')
let CL = console.log

let listFiles = function (path, extension, callBack) {
    let fileList = []

    fs.readdir(path, function (err, data) {
        if (err) {
            return callBack(err)
        }

        fileList = data.filter((elem) => elem.endsWith('.' + extension))
        callBack(null, fileList)
    })
}

module.exports = listFiles