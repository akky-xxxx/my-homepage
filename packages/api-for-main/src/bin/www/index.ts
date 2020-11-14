// import
import { createServer } from "@modules/createServer"
import { Server } from "@shared/const/Server"

// main
const { PORT } = Server

type Main = () => Promise<void>
const main: Main = async () => {
  const server = await createServer()

  await server.listen(PORT)
}

main()
