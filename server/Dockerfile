FROM node:14

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY . /usr/src/server
RUN npm install
RUN npm install --global kill-port