// import node_modules
import listEndpoints from "express-list-endpoints"
import { Express } from "express"
import Table from "cli-table"

// import others
import { createLogger } from "@@/shared/utils/createLogger"

// main
const logger = createLogger(__filename)
type ShowEndpoints = (server: Express) => void
export const showEndpoints: ShowEndpoints = (server) => {
  const table = new Table({
    head: ["Method", "Endpoint"],
  })
  const endpoints = listEndpoints(server)
    .map((endpoint) => {
      const { path, methods } = endpoint
      return methods.map((method) => [method, path])
    })
    .flat()
  table.push(...endpoints)

  logger.info(`registered endpoints\n${table.toString()}`)
}
