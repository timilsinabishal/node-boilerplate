FROM node:7-alpine

MAINTAINER Bishal Timilsina

RUN mkdir /src

COPY ./ /src

WORKDIR /src

RUN npm install

CMD npm start

