
    # Use the official Node.js image as the base image
    FROM node:14-slim

    # Set the working directory inside the container
    WORKDIR /app

    # Copy the package.json and package-lock.json files
    COPY package*.json ./

    # Install the dependencies
    RUN npm install

    # Copy the rest of the application files
    COPY . .

    # Expose the port the app runs on
    EXPOSE 3000

    # Run the bot when the container starts
    CMD ["node", "index.js"]
    