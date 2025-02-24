# Etapa de build
FROM --platform=$TARGETPLATFORM node:20 AS builder
WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências primeiro e usar cache
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia todo o código e constrói o projeto
COPY . .
RUN yarn build

# Etapa de execução
FROM --platform=$TARGETPLATFORM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
