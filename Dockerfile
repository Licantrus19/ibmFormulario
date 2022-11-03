FROM node:16

WORKDIR /app

#Copy package Json Files
COPY package*.json ./

#Install files
RUN npm install

# Copy source files
COPY . .

EXPOSE 8000

#Expose the api port
CMD ["node", "src/index.js" ]
