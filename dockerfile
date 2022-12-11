FROM node:16-alpine
ENV NODE_ENV=develope
WORKDIR /app

CMD ["./start.sh"]
