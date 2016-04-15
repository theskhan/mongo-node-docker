'use strict';

const express = require('express');

// Constants
const PORT = 9001;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('API Server \n');
});

app.get('/info', function (req, res) {
    res.send("This is sample info");
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);