FROM node:22-alpine
# curl est requis par le healthcheck de Coolify pour les builds Dockerfile.
RUN apk add --no-cache curl
WORKDIR /app
COPY server.mjs ./
EXPOSE 3000
CMD ["node", "server.mjs"]
