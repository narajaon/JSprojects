console.log('apps.js started');

let note;
let fs;
let _;
let args;
let commandObj;
let result;
let value;

note = require('./note.js');
fs = require('fs');
_ = require('lodash');
args = require('yargs');
commandObj = [
    {name: 'read', action: 'reading a note'},
    {name: 'add', action: 'adding a note'},
    {name: 'remove', action: 'removing a note'},
    {name: 'list', action: 'listing all notes'},
    {name: 'default', action: 'invalid command'},
];

result = note.getCommandAction(args.argv._[0], commandObj);
value = note.getValue(args.argv, args.argv._[0]);
console.log(args.argv);
console.log(`"${result} ${value}"`);