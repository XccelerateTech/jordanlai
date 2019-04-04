var fs = require('fs');

let copytext = function (path){
    var readable = fs.createReadStream(__dirname + path, {encoding: 'utf8', highWaterMark: 32*1024});
    
    var writeable = fs.createWriteStream('./empty.txt')

    readable.pipe(writeable);
}

copytext('/text.txt');