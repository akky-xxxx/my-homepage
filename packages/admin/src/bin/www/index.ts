// import node_modules
import next from "next"

// import
import { Common } from "@@/shared/const/Common"
import { createServer } from "@@/modules/createServer"
import { Server } from "@@/shared/const/Server"

// main
const { IS_DEV } = Common
const { PORT } = Server

const app = next({
  dev: IS_DEV,
})
const server = createServer(app)

app.prepare().then(() => {
  server.listen(PORT)
})
