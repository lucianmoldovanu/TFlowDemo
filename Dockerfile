FROM tensorflow/tensorflow:1.0.0

#Create and deploy API (NodeJS app)
RUN mkdir -p /usr/src/api
COPY api.js /usr/src/api/api.js

RUN sudo apt-get update && apt-get install -y --no-install-recommends \
  nodejs \
  npm

RUN npm install -g \
  express \
  child_process \
  fs

# TensorBoard
EXPOSE 6006
# IPython
EXPOSE 8888
# API for TFlowDemo
EXPOSE 7000

WORKDIR "/notebooks"

#CMD ["/run_jupyter.sh"]
CMD ["nodejs /usr/src/api/api.js"]
