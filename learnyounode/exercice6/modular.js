let path = process.argv[2]
let CL = console.log
let extension = process.argv[3]
let listFiles = require('./module')
 
let printFiles = function (files) {
    files.forEach((elem) => CL(elem))
}

listFiles(path, extension, function (err, data) {
    if (err) {
        return CL(err.message)
    }

    printFiles(data)
})