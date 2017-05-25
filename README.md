# TensorFlow Demo (for image classification)

## Prerequisites:
* Docker installed on local machine
* training must be run before inference
* _docker pull lucianmol/tflowdemo_ (Docker image that encapsulates webapp and TensorFlow)

## Training
* _docker run -it -v "C:/Lucian/Projects/## 2017/2017.03 InnovChallenge/anomaly_data/anomalyWork":/tf_files lucianmol/tflowdemo bash_
### Inside container:
* _cd /tensorflow_
* _git pull_
* _python tensorflow/examples/image_retraining/retrain.py --bottleneck_dir=/tf_files/bottlenecks --how_many_training_steps 300 --model_dir=/tf_files/inception --output_graph=/tf_files/retrained_graph.pb --output_labels=/tf_files/retrained_labels.txt --image_dir /tf_files/Train --summaries_dir /tf_files/summary_

## Inference (via CLI, inside Docker container)
### Inside container:
* _cd /_
* for one file: _python /tf_files/label_image.py /tf_files/Test/abnormal/84ec3e92.jpg_
* for an entire folder: _python /tf_files/label_image2_docker.py /tf_files/Test_
* _exit_

## Inference (via webapp)
### On local machine
* _docker run -it -p 3000:3000 -p 6006:6006 -v "C:/Lucian/Projects/## 2017/2017.03 InnovChallenge/anomaly_data/anomalyWork":/tf_files lucianmol/tflowdemo_ (replace with path to local folder which contains model and script, as per the above prerequisites)
* browse to http://localhost:3000/ (outside container)

## General docker commands
* clear unused images: _docker rmi $(docker images --filter "dangling=true" -q --no-trunc)_

## Project structure on Docker machine
Folder | Description
------- | -------
/app | NodeJS endpoint (/ for webapp and /classifyImage for TF API)<br>
/app/webapp | web application (UI5/NodeJs)<br>
/tf_files | folder with sub_folders including images in JPG format<br>
/tf_files/retrained_labels.txt | labels for classes (same in Training and Test), one per line<br>
/tf_files/Train/{one_folder_per_class}<br>
/tf_files/Test/{one_folder_per_class}<br>
/tf_files/label_image.py<br>
/tf_files/label_image2_docker.py<br>
