const express = require('express');
const exec = require('child_process').exec;
const fs = require('fs');
const mp = require('multiparty');
const path = require('path');

const app = express();

//webapp
app.use('/', express.static(path.join(__dirname,'webapp')));

//REST endpoint
/*
 * Receive an image, pass it to classifier (python) and return response (class probabilities)
 * Prerequisite: input is fed via HTTP POST as FORM, with a single picture (jpg) in the field 'picture'
*/
app.post('/classifyImage', function(req, res) {
    var form = new mp.Form();
    form.parse(req, function(err, fields, files) {
        //var imgPath = files['picture'][0].path;
        var imgPath = files['myFileUpload'][0]['path'];
        
        exec('python /tf_files/icecat_classify.py --model_file /tf_files/retrained_graph.pb --label_file /tf_files/retrained_labels.txt --softmax_layer final_result --image_file ' + imgPath,
            function(error, stdout, stderr) {
                //console.log([error,stdout,stderr].join(" | "));
                res.send(stdout);
            }
        );
    });
});

const port = process.env.PORT || 3000;
//port must be set to low value because, when deploying container in CloudFoundry, lowest exposed port is automatically used
//this container also inherits exposed ports 6006 and 8888 (tensorboard, tensorflow admin)

app.listen(port, function() {
  console.log('dummyServer listening at port ' + port + '...');
});
