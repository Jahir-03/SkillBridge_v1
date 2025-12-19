# Use a lightweight Node.js operating system
FROM node:18-alpine

# Set the working folder inside the container
WORKDIR /app

# Copy the ID card (package.json) first
COPY package.json .

# Install the tools inside the container
RUN npm install

# Copy the rest of your code (server.js)
COPY . .

# Open port 5000 so we can access it
EXPOSE 5000

# The command to start the server
CMD ["node", "server.js"]