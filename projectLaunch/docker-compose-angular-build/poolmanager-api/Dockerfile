FROM node:10-alpine as node-build

WORKDIR /api

EXPOSE 8080

COPY . .

RUN npm install

ENTRYPOINT ["node", "index.js"]


