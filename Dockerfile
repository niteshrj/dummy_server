FROM alpine:3.8

WORKDIR /src/app

COPY ./package.json ./

RUN apk add --update nodejs nodejs-npm

RUN npm install

COPY ./ ./

CMD ["npm", "start"]