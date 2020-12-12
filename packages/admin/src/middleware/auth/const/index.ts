// import node_modules
import {
  StrategyOptions,
  AuthenticateOptionsGoogle,
} from "passport-google-oauth20"
import dotenv from "dotenv"
import { ThisError } from "shared-items"

// main
dotenv.config()

const clientID = process.env.OAUTH2_CLIENT_ID
const clientSecret = process.env.OAUTH2_CLIENT_SECRET
const callbackURL = process.env.OAUTH2_CALLBACK

if (!clientID || !clientSecret || !callbackURL) {
  const loggerMessage =
    "OAUTH2_CLIENT_ID または OAUTH2_CLIENT_SECRET または OAUTH2_CALLBACK がありません"
  throw new ThisError({
    message: loggerMessage,
    filePath: __filename,
  })
}

export const StrategyName = "google"

export const StrategyOption: StrategyOptions = {
  clientID,
  clientSecret,
  callbackURL,
}

export const StrategyAuthOption: AuthenticateOptionsGoogle = {
  scope: ["email", "profile"],
  accessType: "offline",
  prompt: "consent",
}

export const Endpoints = {
  ALL: "*",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  CALLBACK: "/auth/google/callback",
} as const
