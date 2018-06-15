let CL = console.log;
let argv = process.argv.filter((value, index, array) => index >= 2);
let sum = function(array){
    let result = 0;

    for (let i of array) {
        result += +i;
    }
    return result;
}

CL(sum(argv));