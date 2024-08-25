ARG NODE_VERSION=20.16.0

ARG NODE_ENV=production
ARG APP_ENV=development
ARG PORT=5000
ARG LOG_LEVEL=info
ARG XERO_BASE_URL=

FROM node:${NODE_VERSION} as build

USER node

WORKDIR /app

COPY --chown=node:node ["package.json", "."]

RUN NODE_ENV=development npm i

COPY --chown=node:node . .

RUN echo "Building for ${NODE_ENV} environment" && \
    echo "NODE_ENV=${NODE_ENV}" > .env && \
    echo "APP_ENV=${APP_ENV}" >> .env && \
    echo "PORT=${PORT}" > .env && \
    echo "LOG_LEVEL=${LOG_LEVEL}" >> .env && \
    echo "XERO_BASE_URL=${XERO_BASE_URL}" >> .env 

RUN NODE_ENV=production npm run build && npm cache clean --force && npm prune --production

FROM node:${NODE_VERSION}-alpine as production

USER node

EXPOSE 5000

WORKDIR /app

COPY --from=build /app/node_modules node_modules/
COPY --from=build /app/dist dist/

CMD ["node", "dist/index.js"]
