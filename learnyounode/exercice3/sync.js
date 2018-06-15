let path = process.argv[2];
let CL = console.log
let fs = require('fs');
let fileContent = fs.readFileSync(path).toString();
let charCount = function(str, char) {
    let res = 0;
    
    for (let i of str){
        if (i === char) {
            res++;
        }
    }
    return res
};

let res = charCount(fileContent, '\n');
CL(res);