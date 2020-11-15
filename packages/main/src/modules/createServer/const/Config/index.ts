// import node_modules
import { fastifyHelmet } from "fastify-helmet"

// main
export const HelmetOptions: Readonly<Parameters<typeof fastifyHelmet>[1]> = {
  contentSecurityPolicy: false,
} as const
