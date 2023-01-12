FROM node:16-alpine
ENV NODE_ENV=develope
WORKDIR /app
COPY . .
CMD ["./start.sh"]
