const http = require('http');
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket');

const port = process.env.PORT || 1234;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Yjs WebSocket Server');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, host, () => {
  console.log(`✅ Yjs WebSocket server running at http://${host}:${port}`);
});