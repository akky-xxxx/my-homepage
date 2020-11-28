// import node_modules
import helmet from "helmet"

// main
export const HelmetOptions: Readonly<Parameters<typeof helmet>[0]> = {
  contentSecurityPolicy: false,
} as const
