### TFlowDemo

## Prerequisites:
Docker installed on local machine

## Steps
1) docker pull lucianmol/tflowdemo
2) docker run -it -p 7000:7000 -v _C:/Users/i311766/Desktop/vegetables-master/_:/app/tf/ lucianmol/tflowdemo
3) http://localhost:7000/ in browser on local machine

## Project structure on Docker machine
/app                          - NodeJS endpoint (/ for webapp and /classifyImage for TF API)
/app/webapp                   - web application (UI5/NodeJs)
/app/tf                       - TensorFlow model folder
/app/tf/icecat_classify.py    - Python script to apply TF model
/app/tf/output_graph.pb       - TF model
/app/tf/output_labels.txt     - labels for categories
