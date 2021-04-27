FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

RUN npm install mongoose --save
