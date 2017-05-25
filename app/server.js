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

const port = 3000; //process.env.PORT || 8080;
//port set to 3000 because, when deploying container in CloudFoundry, lowest port is automatically used
//beyond this port for the app, the container also exposes 6006 and 8888 (tensorboard, tensorflow admin)

app.listen(port);
console.log('Running on http://localhost:' + port + '... REST endpoint: /classifyImage ; webapp: /');
