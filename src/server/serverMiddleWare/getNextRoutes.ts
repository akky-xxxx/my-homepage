/**
 * import node_modules
 */
import Routes from "next-routes"
import { ServerConstructor } from "next/dist/next-server/server/next-server"

/**
 * main
 */
const routes = new Routes()

const getNextRoutes = (app: ServerConstructor) => {
  return routes.getRequestHandler(app)
}

export default getNextRoutes
