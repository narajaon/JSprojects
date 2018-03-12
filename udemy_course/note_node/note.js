console.log('note.js started');


let getCommandAction = (command, commandList) => {
    for (let i in commandList) {
        if (command === commandList[i].name) {
            return commandList[i].action;
        }
    }

    return commandList[i].action;
};

let getValue = (arg, toFind) => {
    for (let i in arg) {
        if (arg[i] === toFind) {
            return arg[i];
        }
    }

    return 'no value';
};

module.exports = {
    getCommandAction,
    getValue
};