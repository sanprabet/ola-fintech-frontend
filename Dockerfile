# Use an official Node.js image that supports multiple architectures
FROM node:18-alpine

# Set the working directory inside the Docker container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose port 4173 (or the port Vite uses)
EXPOSE 4173

# Run the Vite server in preview mode with --host to expose to all interfaces
CMD ["npx", "vite", "preview", "--host", "0.0.0.0"]