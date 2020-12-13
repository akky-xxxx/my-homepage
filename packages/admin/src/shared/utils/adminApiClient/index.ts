// import node_modules
import axios from "axios"
import dotenv from "dotenv"
import { ThisError } from "shared-items"

// main
dotenv.config()

const baseURL = process.env.API_SERVER

if (typeof baseURL !== "string") {
  throw new ThisError({
    filePath: __filename,
    message: "API_SERVER がありません",
  })
}

export const adminApiClient = axios.create({
  baseURL,
})
