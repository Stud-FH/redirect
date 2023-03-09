const http = require('http');

http.createServer(function (req, res) {
    if (!req.url.includes('error')) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Error: env.REDIRECT_URL missing');
    } else {
        res.writeHead(302, {'Location': process.env['REDIRECT_URL'] ?? 'error'});
        res.end();
    }
}).listen(process.env['PORT'] ?? 8080);
