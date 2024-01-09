FROM node:18.19.0-slim

WORKDIR /app
ADD . .

RUN yarn install

RUN yarn build

WORKDIR /app/build

CMD [ "yarn","start"]

EXPOSE 3000