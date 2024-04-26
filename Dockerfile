FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Install Jest globally
RUN npm install -g jest

 
 
# Expose port 3000
EXPOSE 3000

# Command to run your application
CMD ["node", "app.js"]
