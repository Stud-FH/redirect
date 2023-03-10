const http = require('http');
const fs = require('fs');
const index = fs.readFileSync('index.html');

sessionStorage.setItem('redirectUrl', process.env['REDIRECT_URL'])

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(index);
}).listen(process.env['PORT']);
