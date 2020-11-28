// import node_modules
import _fastify, { FastifyInstance } from "fastify"
import helmet from "fastify-helmet"
import compress from "fastify-compress"

// import middleware
import { nextJs } from "@@/middleware/nextJs"

// import others
import { Common } from "@@/shared/const/Common"
import { HelmetOptions } from "@@/modules/createServer/const/Config"

// main
const { IS_DEV, SEPARATOR } = Common
const fastify = _fastify({
  logger: IS_DEV,
})

type CreateServer = () => Promise<FastifyInstance>
export const createServer: CreateServer = async () => {
  fastify.register(helmet, HelmetOptions)
  fastify.register(compress)

  fastify.register(nextJs)

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
