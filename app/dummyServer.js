const express = require('express');
//const exec = require('child_process').exec;
const fs = require('fs');
const mp = require('multiparty');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
  res.status(200).send('response: dummyServer running on Docker is alive!');
});

const port = process.env.PORT; //3000; //process.env.PORT || 8080;
//port set to 3000 because, when deploying container in CloudFoundry, lowest port is automatically used
//beyond this port for the app, the container also exposes 6006 and 8888 (tensorboard, tensorflow admin)

app.listen(port);
console.log('Running dummyServer on http://localhost:' + port + '...');
