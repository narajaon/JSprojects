console.log('note.js started');


let getCommandAction = (command, commandList) => {
    var i;
    for (i in commandList) {
        if (command === commandList[i].name) {
            return commandList[i].action;
        }
    }

    return commandList[i].action;
};

let getValue = (arg, toFind) => {
    for (var i in arg) {
        if (arg[i] === toFind) {
            return arg[i];
        }
    }
    return 'no value';
};

module.exports = {
    addNote,
    getCommandAction,
    getValue
};