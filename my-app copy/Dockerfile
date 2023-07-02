
# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:18
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]