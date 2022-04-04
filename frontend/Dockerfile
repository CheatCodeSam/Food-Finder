FROM node:17-alpine AS build

WORKDIR /app
ADD ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html