var fs = require('fs');

var greeting = fs.readFileSync(__dirname + '/greet.txt');

console.log(greeting);