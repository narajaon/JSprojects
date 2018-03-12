console.log('apps.js started');

let note = require('./note.js');
let fs = require('fs');
let _ = require('lodash');
let args = require('yargs');
let commandObj = [
    {name: 'read', action: 'reading a note'},
    {name: 'add', action: 'adding a note'},
    {name: 'remove', action: 'removing a note'},
    {name: 'list', action: 'listing all notes'},
    {name: 'default', action: 'invalid command'},
];
let result = note.getCommandAction(args.argv._[0], commandObj);
let value = note.getValue(args.argv, args.argv._[0]);

console.log(args.argv);
console.log(`"${result} ${value}"`);