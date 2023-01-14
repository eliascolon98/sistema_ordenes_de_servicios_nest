FROM node:16
WORKDIR /src
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build
CMD ["npm","start"]