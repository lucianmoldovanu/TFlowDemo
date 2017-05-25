FROM gcr.io/tensorflow/tensorflow:latest-devel
#tensorflow/tensorflow:1.0.0

RUN apt-get update && apt-get install -y --no-install-recommends \
  nodejs npm #git

#Create and deploy API (NodeJS app)
#RUN mkdir -p /usr/src/api && cd /usr/src/api/ && git init && git clone https://84745ee677026aedaa5b6ce060d9d6eeb22e103f@github.com/lucianmoldovanu/TFlowDemo.git
RUN mkdir /app
COPY /app /app

RUN cd /app && npm install \
  express child_process fs multiparty

# TensorFlowDemo (webapp & REST endpoint)
EXPOSE 3000
# TensorBoard (6006) and iPython (8888) are already exposed

# WORKDIR "/notebooks"

#CMD ["/run_jupyter.sh"]
CMD ["nodejs", "/app/server.js"]
