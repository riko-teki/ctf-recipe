FROM node:16.10.0
WORKDIR /app
RUN npm install
COPY ssh/github.com /etc/ssh/
