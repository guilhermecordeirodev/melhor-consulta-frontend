# Etapa 1: Construção da Aplicação com Node 20
FROM node:20 AS builder
WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia o restante do código e realiza o build
COPY . .
RUN yarn build

# Etapa 2: Servindo a aplicação com Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove arquivos padrão do Nginx
RUN rm -rf ./*

# Copia os arquivos do build React/Vite para o servidor
COPY --from=builder /app/dist ./

# Copia configuração customizada do Nginx (para roteamento SPA)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
