# Use official Node.js image as base
FROM node:16

# Set working directory inside the container
WORKDIR /backend

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the transpiled backend code
COPY dist ./dist 
# Copy frontend dist code
# COPY ../frontend/dist .

# Expose the backend port
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]
