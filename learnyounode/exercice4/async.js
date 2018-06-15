let path = process.argv[2];
let CL = console.log
let fs = require('fs');

let fileContent = fs.readFile(path, function(err, data){
    let file = data.toString()

    if (err) {
        return CL(err.message)
    }
    CL(countChar(file, '\n'))
});

let countChar = function(str, char) {
    let res = 0;
    
    for (let i of str){
        if (i === char) {
            res++;
        }
    }
    return res
};