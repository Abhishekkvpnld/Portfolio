# Use Node 20 Alpine base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json (for caching install)
COPY package*.json .

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Expose port (match the one your app actually runs on)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
