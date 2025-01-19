# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR .

# Copy package.json and install dependencies
COPY backend/ ./backend
COPY frontend/ ./frontend

WORKDIR ./frontend

RUN npm install
RUN npm run build

WORKDIR ../backend

RUN npm install
RUN npm run transpile

# Expose the backend port
EXPOSE 5000

# Command to run the backend server
CMD ["npm", "start"]
