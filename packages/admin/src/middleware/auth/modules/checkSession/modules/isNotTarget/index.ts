// import
import { Endpoints } from "@@/middleware/auth/const"

// main
const nextMaterialRegExp = /^\/_next/
const { LOGIN, CALLBACK } = Endpoints
type IsNotTarget = (originalUrl: string) => boolean
export const isNotTarget: IsNotTarget = (originalUrl) =>
  nextMaterialRegExp.test(originalUrl) ||
  originalUrl.includes(LOGIN) ||
  originalUrl.includes(CALLBACK)
