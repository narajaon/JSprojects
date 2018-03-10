console.log('require_usage.js launched');

let fs;
let _;
let note;
let validCommand;
let actionFunction;
let yargs;

_ = require('lodash');
fs = require('fs');
note = require('./note');
yargs = require('yargs');
validCommand = [
    {name: 'read', action : 'reading a note'},
    {name: 'add', action : 'adding a note'},
    {name: 'list', action : 'printing all notes'},
    {name: 'remove', action : 'remove note'}
];

function getCommandAction(command) {
    for (var i in validCommand){
        if (command === validCommand[i].name)
            return validCommand[i].action;
    }
    return 'invalid command';
}

actionFunction = getCommandAction((process.argv[2]));
console.log(actionFunction);