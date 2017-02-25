const express = require('express');
var exec = require('child_process').exec
var fs = require('fs');
var mp = require('multiparty')
const app = express();

app.post('/classifyImage', function(req, res) {
    var form = new mp.Form();
    //console.log('received...');
    form.parse(req, function(err, fields, files) {
        var imgPath = files['picture'][0].path;
        console.log(imgPath);

        exec('python /model/icecat_classify.py --model_file /model/output_graph.pb --label_file /model/output_labels.txt --softmax_layer final_result --image_file ' + imgPath,
            function(error, stdout, stderr) {
                console.log([error,stdout,stderr].join(" | "));
            }
        );
    });
});

app.listen(7000);
console.log('Running on http://localhost:7000');
