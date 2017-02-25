const express = require('express');
var exec = require('child_process').exec
var fs = require('fs');
var mp = require('multiparty')
const app = express();

app.post('/classifyImage', function(req, res) {
    var form = new mp.Form();
    form.parse(req, function(err, fields, files) {
        var imgPath = files['picture'][0].path;
        
        exec('python /app/tf/icecat_classify.py --model_file /app/tf/output_graph.pb --label_file /app/tf/output_labels.txt --softmax_layer final_result --image_file ' + imgPath,
            function(error, stdout, stderr) {
                //console.log([error,stdout,stderr].join(" | "));
                res.send(stdout);
            }
        );
    });
});

app.listen(7000);
console.log('Running on http://localhost:7000');
