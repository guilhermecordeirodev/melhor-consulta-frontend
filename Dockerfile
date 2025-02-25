# => Build container
# docker build -t engenhoagro/web-ecooperativa . 
# docker push engenhoagro/web-ecooperativa:latest
FROM node:20 as builder

RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY tsconfig*.json .

RUN yarn install --network-timeout 300000

COPY index.html .
COPY ./src ./src

RUN yarn build

# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY nginx/conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .
# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
