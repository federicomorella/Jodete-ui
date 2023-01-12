FROM node:16-alpine
ENV NODE_ENV=develope
WORKDIR /app
COPY . .
RUN ./build.sh
CMD [ "./start.sh" ]
