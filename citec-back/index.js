const http = require('http');
const app = require('./config/express')();
const httpServer = http.createServer(app);
 
if (process.env.NODE_ENV === 'development') {
    httpServer.listen(3006, () => console.log(`Listening on port 3006`, process.env.NODE_ENV));
} else {
    httpServer.listen(21389, () => console.log(`Listening on port 21389`));
}
//inicia o servidor