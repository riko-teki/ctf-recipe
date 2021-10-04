FROM node:16.10.0
WORKDIR /app
COPY ./ /app
RUN npm install
COPY ssh/ /root/.ssh/
RUN chmod 600 /root/.ssh/github.com

