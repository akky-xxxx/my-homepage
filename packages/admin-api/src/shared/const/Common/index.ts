// main
export const Common = {
  IS_DEV: process.env.NODE_ENV !== "production",
  IS_TEST: process.env.IS_TEST === "true",
} as const
