FROM node:18.13.0-alpine
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
