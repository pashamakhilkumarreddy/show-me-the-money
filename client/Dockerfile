ARG NODE_VERSION=20.14.0

ARG NODE_ENV=production
ARG APP_ENV=development
ARG API_BASE_URL=

FROM node:${NODE_VERSION} as build

USER node

WORKDIR /usr/src/app

COPY --chown=node:node ["package.json", "."]

RUN NODE_ENV=development npm i

COPY --chown=node:node . .

RUN echo "Building for ${NODE_ENV} environment" && \
    echo "VITE_NODE_ENV=${NODE_ENV}" > .env && \
    echo "VITE_APP_MODE=${APP_ENV}" >> .env && \
    echo "VITE_API_BASE_URL=${API_BASE_URL}" >> .env 

RUN NODE_ENV=production npm run build

FROM nginx:stable-alpine as production

ENV NODE_ENV production

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]