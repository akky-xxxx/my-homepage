FROM node:12.14.0-alpine as base
WORKDIR ./build
COPY . .

# 資材のビルド
RUN yarn install
ENV NODE_ENV=production
RUN yarn build && rm -rf dist/cache node_modules

# dependencies のみの node_modules を作成
RUN yarn install

# 最終イメージ
FROM node:12.14.0-alpine as app
WORKDIR ./app
COPY --from=base ./build/bin ./bin
COPY --from=base ./build/dist ./dist
COPY --from=base ./build/node_modules ./node_modules
COPY package.json package.json
COPY src/client/public src/client/public
ENV NODE_ENV=production
ENV PORT=3000
CMD ["yarn", "serve:bff"]
