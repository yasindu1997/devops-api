# Use Node.js 22 official image
FROM node:22

# Set working directory inside the container
WORKDIR /app

# Copy package files first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (change if not 3000)
EXPOSE 3000

# Start the Express.js app
CMD ["node", "index.js"]
