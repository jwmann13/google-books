FROM node:10.9.0-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package* /usr/src/app/

RUN npm install --production=true

COPY . /usr/src/app/

RUN npm run-script build

FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN chown nginx.nginx /usr/share/nginx/html/ -R

EXPOSE 80