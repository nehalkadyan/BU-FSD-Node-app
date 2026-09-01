# base image
FROM node:22-alpine

# working directory

WORKDIR /app
# copy package.json and package-lock.json

COPY package*.json .
# install dependencies

RUN npm install

# copy entire source code
COPY . .

# expose port
EXPOSE 4000

# run the app
CMD ["node", "server.js"]

