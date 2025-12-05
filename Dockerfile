#use the node base image
FROM node:18-alpine

#setup the working directory
WORKDIR /

#copy the package.json contents
COPY package*.json ./

#install the dependencies
RUN npm install

#copy all of the files & folder in the project
COPY . . 

#expose a port for the container to run on
EXPOSE 3000

#run the application
CMD ["node", "app.js"]



