let PORT = parseInt(process.argv[2]) || 3000
let PATH = process.argv[3]
let CL = console.log
let http = require('http')
let fs = require('fs')