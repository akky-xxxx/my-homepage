// import node_modules
import { FastifyPluginAsync } from "fastify"
import fastifyReact from "fastify-nextjs"

// import others
import { Common } from "@shared/const/Common"
import { Endpoints } from "@shared/const/Endpoints"

// main
const { IS_DEV } = Common
const { SAMPLE } = Endpoints

export const nextJs: FastifyPluginAsync = async (fastify) => {
  fastify
    .register(fastifyReact, {
      dev: IS_DEV,
    })
    .after(() => {
      fastify.next(SAMPLE)
    })
}
