FROM node:16.14.2-alpine as builder

WORKDIR /app

COPY . .

RUN yarn 
RUN yarn build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]   
