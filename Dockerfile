FROM node:16-alpine
ENV NODE_ENV=develope
WORKDIR /app
COPY . .
COPY ./start.sh ./

CMD ["./start.sh"]
