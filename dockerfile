FROM node:12.16.1-alpine3.11

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm ci

COPY . .

EXPOSE 4000

CMD ["npm", "start"]