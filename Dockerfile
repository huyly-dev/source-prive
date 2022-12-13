FROM public.ecr.aws/m0o2r4c7/hako:node-14.16.0-alpine3.13 as builder
# FROM node:14.16.0-alpine3.13 as builder
# RUN apk update && apk add --no-cache make gi

WORKDIR /var/www/ch-prive-app
RUN rm -rf node-modules
RUN rm -rf package-lock.json
COPY . .
RUN npm cache clean --force
RUN npm install
RUN npm run build


FROM public.ecr.aws/m0o2r4c7/hako:nginx-stable-alpine as prod
RUN rm -rf /usr/share/nginx/html/*
COPY angular-server.nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /var/www/ch-prive-app/dist/main /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
