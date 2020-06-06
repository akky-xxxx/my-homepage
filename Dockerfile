FROM node:12.18.0-alpine as base
WORKDIR ./build
COPY . .

# 資材のビルド
ENV NODE_ENV=production
RUN yarn install && yarn build:prod:client && rm -rf dist/cache

# 最終イメージ
FROM node:12.18.0-alpine as app
WORKDIR ./app
COPY --from=base ./build/dist ./dist
COPY --from=base ./build/node_modules ./node_modules
COPY package.json package.json
COPY src/public src/public
COPY server server
COPY next.config.js next.config.js
COPY tsconfig.json tsconfig.json
ENV NODE_ENV=production
ENV PORT=3000
CMD ["yarn", "serve:propd"]
