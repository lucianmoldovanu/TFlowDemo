const express = require('express');
var exec = require('child_process').exec
var fs = require('fs');

const app = express();

app.post('/classifyImage', function(req, res) {
  var imgContent = req.body;
  var respString = '';

  fs.writeFile("/test/tempImage.jpg", req.body); //synchronous
  exec('python icecat_classify.py --model_file output_graph.pb --label_file output_labels.txt --softmax_layer final_result --image_file test_banana.jpg',
    function(error, stdout, stderr) {
      res.send(respString + "|" + stdout + "|" + stderr);
    }
  );
});

app.listen(7000);
