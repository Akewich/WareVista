# Choose the base image (from Docker Hub) as the starting runtime
# In this case, we select the node image version 18
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json file from the local machine into the container
COPY package.json .

# # build Project
RUN npm config set legacy-peer-deps true 

# Install TypeScript as a development dependency
RUN npm install

RUN npm install react-google-login

# Copy all files from the local machine into the container
COPY . .

# Run the project using npm start
CMD ["npm", "run", "dev"]
