// import node_modules
import { Router } from "express"
import passport from "passport"
import { Strategy } from "passport-google-oauth20"

// import others
import { checkSession } from "./modules/checkSession"
import { loginCallback } from "./modules/loginCallback"
import { logout } from "./modules/logout"
import {
  StrategyOption,
  Endpoints,
  StrategyName,
  StrategyAuthOption,
} from "./const"
import { verify } from "./modules/verify"

// main
const authRouter = Router()
const { ALL, LOGIN, CALLBACK, LOGOUT } = Endpoints

passport.use(new Strategy(StrategyOption, verify))
passport.serializeUser((user, callback) => callback(null, user))

authRouter.use(passport.initialize())

authRouter.get(ALL, checkSession)
authRouter.get(LOGIN, passport.authenticate(StrategyName, StrategyAuthOption))
authRouter.get(CALLBACK, passport.authenticate(StrategyName), loginCallback)
authRouter.get(LOGOUT, logout)

export { authRouter }
