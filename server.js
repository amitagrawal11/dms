const http = require('http');
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

const server = http.createServer(() => {
    console.log('server created');
});

/* Listenning server on port 3000 */
server.listen(PORT, () => {
    console.log('listening app on port -> ', PORT);
});