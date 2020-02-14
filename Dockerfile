FROM node:12.16.0-alpine as base
WORKDIR ./build
COPY . .

# 資材のビルド
ENV NODE_ENV=production
RUN yarn install && yarn build && rm -rf dist/cache

# 最終イメージ
FROM node:12.16.0-alpine as app
WORKDIR ./app
COPY --from=base ./build/bin ./bin
COPY --from=base ./build/dist ./dist
COPY --from=base ./build/node_modules ./node_modules
COPY package.json package.json
COPY src/client/public src/client/public
ENV NODE_ENV=production
ENV PORT=3000
CMD ["yarn", "serve:bff"]
