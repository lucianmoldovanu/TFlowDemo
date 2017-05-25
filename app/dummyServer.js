const express = require('express');
//const exec = require('child_process').exec;
const fs = require('fs');
const mp = require('multiparty');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
  res.status(200).send('response: dummyServer running on Docker is alive!');
});

const port = process.env.PORT; // || 3000;
//port must be set to low value because, when deploying container in CloudFoundry, lowest exposed port is automatically used
//this container also inherits exposed ports 6006 and 8888 (tensorboard, tensorflow admin)

app.listen(port, function() {
  console.log('dummyServer listening at port ' + port + '...');
});
