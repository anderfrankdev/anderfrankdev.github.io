FROM node:19-alpine3.15 as dev
WORKDIR /app
COPY package.json ./
RUN mkdir -p /app/node_modules
RUN chown -R node:node /app/node_modules
RUN yarn install
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
