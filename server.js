const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(302, {'Location': process.env['REDIRECT_URL'] ?? 'https://putaringonit-angular.oa.r.appspot.com'});
    res.end();
}).listen(process.env['PORT'] ?? 8080);
