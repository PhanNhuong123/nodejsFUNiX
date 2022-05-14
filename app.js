const http = require("http");
const { buffer } = require("stream/consumers");
const router = require('./routes')

const server = http.createServer(router.handler)

server.listen(3000);
