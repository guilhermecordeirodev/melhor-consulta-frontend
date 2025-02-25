# Etapa de build
FROM --platform=$TARGETPLATFORM node:20 AS builder
WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências primeiro e usar cache
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia todo o código e constrói o projeto
COPY . .
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
