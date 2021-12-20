const express = require('express');
const path = require('path').join
const app = express();
const PORT = 3000;
const STATIC = path(__dirname, '/public')

app.use(express.static(STATIC));

app.listen(PORT, (err) => { console.log(`Listening on ${PORT}`) })