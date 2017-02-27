### TFlowDemo

## Prerequisites:
Docker installed on local machine

## Steps
* _docker pull lucianmol/tflowdemo_
* _docker run -it -p 7000:7000 -v C:/Users/i311766/Desktop/vegetables-master/:/app/tf/ lucianmol/tflowdemo_ (replace C:/Users/i311766/Desktop/vegetables-master/ with path to local folder which contains TF model and script)
* navigate to http://localhost:7000/ in browser on local machine

## Project structure on Docker machine
/app                          - NodeJS endpoint (/ for webapp and /classifyImage for TF API)
/app/webapp                   - web application (UI5/NodeJs)
/app/tf                       - TensorFlow model folder
/app/tf/icecat_classify.py    - Python script to apply TF model
/app/tf/output_graph.pb       - TF model
/app/tf/output_labels.txt     - labels for categories
