# TensorFlow Demo (Team 3)

## Prerequisites:
* Docker installed on local machine
* TF model and script available on local machine (download link: https://drive.google.com/open?id=0B0JzQeoUHKyDa0RZcHRFMDdreUE)

## Steps
* _docker pull lucianmol/tflowdemo_ (Docker image that encapsulates webapp and TensorFlow; ~1GB size)
* _docker run -it -p 7000:7000 -v C:/Users/i311766/Desktop/vegetables-master/:/app/tf/ lucianmol/tflowdemo_ (replace C:/Users/i311766/Desktop/vegetables-master/ with path to local folder which contains TF model and script - see prerequisites above)
* navigate to http://localhost:7000/ in browser on local machine

## Project structure on Docker machine
Folder  | Description
------- | -------
/app    | NodeJS endpoint (/ for webapp and /classifyImage for TF API)<br>
/app/webapp | web application (UI5/NodeJs)<br>
/app/tf | TensorFlow model folder<br>
/app/tf/icecat_classify.py | Python script to apply TF model<br>
/app/tf/output_graph.pb | TF model<br>
/app/tf/output_labels.txt | labels for categories<br>
