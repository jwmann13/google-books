FROM node:10.9.0-alpine as builder

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package*.json /app/server/

RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && yarn add node-gyp node-pre-gyp

RUN npm install --production=true

COPY . /app/server/

FROM node:10.9.0-alpine

RUN mkdir -p /app/server
WORKDIR /app/server

COPY --from=builder /app/server /app/server

CMD ["node", "server.js"]