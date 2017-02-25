FROM tensorflow/tensorflow:1.0.0

RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends \
  nodejs npm #git

#Create and deploy API (NodeJS app)
#RUN mkdir -p /usr/src/api && cd /usr/src/api/ && git init && git clone https://84745ee677026aedaa5b6ce060d9d6eeb22e103f@github.com/lucianmoldovanu/TFlowDemo.git
RUN mkdir /app/api
COPY api.js /app/api/api.js

RUN sudo npm install \
  express child_process fs multiparty

# TensorBoard
EXPOSE 6006
# IPython
EXPOSE 8888
# API for TFlowDemo
EXPOSE 7000

WORKDIR "/notebooks"

#CMD ["/run_jupyter.sh"]
CMD ["nodejs /usr/src/api/api.js"]
