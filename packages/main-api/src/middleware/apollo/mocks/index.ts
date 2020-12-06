// import
import { IMocks } from "apollo-server-fastify"
import faker from "faker"
import dotenv from "dotenv"

// main
dotenv.config()

const mockFunctions: IMocks = {
  Query: () => ({
    sample: () => faker.random.number(),
  }),
}

export const mocks = process.env.API_MODE === "mock" && mockFunctions
