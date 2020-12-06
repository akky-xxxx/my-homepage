// import
import { server } from "@@/modules/server"
import { Server } from "@@/shared/const/Server"
import { showEndpoints } from "@@/bin/www/modules/showEndpoints"
import { createLogger } from "@@/shared/utils/createLogger"

// main
const { PORT } = Server
const logger = createLogger(__filename)

showEndpoints(server)

server.listen(PORT, () => {
  logger.info(`started server on http://localhost:${PORT}`)
})
