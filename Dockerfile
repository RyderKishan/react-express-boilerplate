FROM node:10.13-alpine as builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --silent
RUN npm run build

FROM node:10.16-alpine
COPY --from=builder /usr/src/app/build /usr/src/app/build
COPY --from=builder ["/usr/src/app/package.json", "/usr/src/app/package-lock.json", "/usr/src/app/"]
WORKDIR /usr/src/app
RUN npm install --production
ENTRYPOINT ["/usr/local/bin/npm", "run", "server:prod"]
EXPOSE 7400