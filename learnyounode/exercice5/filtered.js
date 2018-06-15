let path = process.argv[2]
let CL = console.log
let fs = require('fs')
let extension = '.' + process.argv[3]

let printFiles = function(files) {
    files.forEach((elem) => CL(elem))
}

fs.readdir(path, function(err, files) {
    if (err){
        return CL(err.message)
    }

    let filtered = files.filter((elem) => elem.endsWith(extension))
    printFiles(filtered)
})