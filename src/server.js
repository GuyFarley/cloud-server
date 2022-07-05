'use strict';

const express = require('express');
const app = express();  // singleton: single instance ON PURPOSE

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Hello from Guy\'s Simple Express App!');
})

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
})

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { app, start };