
FROM node:10-alpine AS angular-build

WORKDIR /build

EXPOSE 4200

COPY . .

RUN NG_CLI_ANALYTICS=ci npm install -g @angular/cli

RUN NG_CLI_ANALYTICS=ci npm install

RUN ng build

RUN ls dist/

FROM nginx:alpine

WORKDIR /app

COPY --from=angular-build /build/dist/poolmanger-ui .

COPY nginx.conf /etc/nginx/nginx.conf

