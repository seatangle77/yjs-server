// server.js
import wsServer from 'y-websocket'
const { setupWSConnection } = wsServer
import * as http from 'http'
import WebSocket from 'ws'

const server = http.createServer()
const wss = new WebSocket.Server({ server })

wss.on('connection', (conn, req) => {
  setupWSConnection(conn, req)
})

server.listen(1234, () => {
  console.log('✅ Yjs WebSocket server running at ws://localhost:1234')
})