var http = require ('http');

http.createServer(function (req, res){
    res.writehaed(200, {'Content-Type':'text/plain'});
    res.end('Hello world');
}).listen(8080, '127.0.0.1');