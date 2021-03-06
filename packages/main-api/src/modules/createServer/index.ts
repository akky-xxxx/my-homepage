// import node_modules
import _fastify, { FastifyInstance } from "fastify"
import helmet from "fastify-helmet"
import compress from "fastify-compress"
import { Common as SharedCommon } from "shared-items"

// import middleware
import { apollo } from "@@/middleware/apollo"

// import others
import { Common } from "@@/shared/const/Common"

// main
const { IS_DEV } = Common
const { SEPARATOR } = SharedCommon
const fastify = _fastify({
  logger: IS_DEV,
})

type CreateServer = () => Promise<FastifyInstance>
export const createServer: CreateServer = async () => {
  fastify.register(helmet)
  fastify.register(compress)

  fastify.register(apollo)

  fastify.ready(() => {
    if (IS_DEV) {
      /* eslint-disable no-console */
      console.log(SEPARATOR)
      console.log(fastify.printRoutes())
      console.log(SEPARATOR)
      /* eslint-enable no-console */
    }
  })

  return fastify
}
