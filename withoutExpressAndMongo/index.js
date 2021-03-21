const http = require('http');
const {usersController} = require('./usersController');

process.on('unhandledRejection', function(reason, p) {
console.log(reason, p)
});

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    switch (req.url) {

        case '/users':
            usersController (req,res)            
            break;
        case '/task':
            res.write('Task');
            res.end();
            break;
        default:
            break;
    }
  });
  
  server.listen(7777)