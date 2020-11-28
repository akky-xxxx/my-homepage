// import node_modules
import next from "next"

// import others
import { Common } from "@@/shared/const/Common"
import { createServer } from "@@/modules/createServer"
import { Server } from "@@/shared/const/Server"
import { createLogger } from "@@/shared/utils/createLogger"
import { showEndpoints } from "@@/bin/www/modules/showEndpoints"

// main
const { IS_DEV } = Common
const { PORT } = Server
const logger = createLogger(__filename)

const app = next({
  dev: IS_DEV,
})
const server = createServer(app)

showEndpoints(server)

app.prepare().then(() => {
  server.listen(PORT, () => {
    logger.info(`started server on http://localhost:${PORT}`)
  })
})
