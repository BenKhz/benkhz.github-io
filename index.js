const express = require('express');
const path = require('path').join
const app = express();
const PORT = 3000;
const STATIC = path(__dirname, '/public')

// import Ws express module
const expressWs = require('express-ws')

// adds Ws handlers to app instance
expressWs(app);

// normal static file server middleware
app.use(express.static(STATIC));

// normal route handler
app.get('/hello', (req, res) => {
  res.status(200).send("Successful GET to /hello")
})
// basic WS handler that should send msg.
app.ws('/websocket', (ws, req) => {
  ws.on('message', msg => {
    console.log(msg)
    ws.send(msg + " Recieved")
  })
})

app.listen(PORT, (err) => { console.log(`Listening on ${PORT}`) })