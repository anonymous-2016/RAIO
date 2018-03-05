// simple express server for HTML pages!
// ES6 style

const express = require('express');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;// 80, default port
const app = express();

// public/img === root/img
app.use(express.static('public'));
app.use(express.static('views'));


// let cache = {};// object is OK!
let cache = [];

cache[0] = fs.readFileSync( __dirname + '/index.html');
cache[1] = fs.readFileSync( __dirname + '/views/white-index.html');
cache[2] = fs.readFileSync( __dirname + '/views/black-index.html');

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(cache[0]);
});

app.get('/index.html?skin=white', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(cache[1]);
});

app.get('/index.html?skin=black', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(cache[2]);
});

app.listen(port, () => {
    console.log(`
        Server is running at http://${hostname}:${port}/
        Server hostname ${hostname} is listening on port ${port}!
    `);
});
