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

app.listen(443);
console.log('Running on http://localhost:443... REST endpoint: /classifyImage ; webapp: /');
