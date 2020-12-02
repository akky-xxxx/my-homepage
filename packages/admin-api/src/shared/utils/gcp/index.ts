// import node_modules
import { Datastore } from "@google-cloud/datastore"
import dotenv from "dotenv"

/**
 * import others
 */
import { ThisError } from "@@/shared/utils/ThisError"

/**
 * main
 */
dotenv.config()

const projectId = process.env.PROJECT_ID
const keyFilename = process.env.PROJECT_SERVICE_ACCOUNT

if (!projectId || !keyFilename) {
  const message = "PROJECT_ID または PROJECT_SERVICE_ACCOUNT がありません"
  throw new ThisError({ message, error: new Error(message) })
}

const authOptions = { projectId, keyFilename }

export const dataStore = new Datastore(authOptions)
