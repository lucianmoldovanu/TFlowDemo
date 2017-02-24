FROM tensorflow/tensorflow:1.0.0

# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
#COPY /app /usr/src/app
RUN apt-get update && apt-get install -y --no-install-recommends \
  nodejs \
  npm

RUN npm install -g \
  express \
  child_process \
  fs

# Bundle app source
#COPY /app /usr/src/app

# TensorBoard
EXPOSE 6006
# IPython
EXPOSE 8888
# API for TFlowDemo
EXPOSE 7000

WORKDIR "/notebooks"

#CMD ["/run_jupyter.sh"]
CMD ["nodejs /test/server.js"]
