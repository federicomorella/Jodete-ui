FROM node:16-alpine
ENV NODE_ENV=develope
WORKDIR /app 
COPY . /app
RUN cd /app | npm install
CMD ["npm" , "start"]