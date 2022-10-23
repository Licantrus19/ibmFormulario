FROM node:16

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
RUN npm install
COPY --chown=node . .

EXPOSE 3000
CMD [ "node", "index.js" ]