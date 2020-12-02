// main
export const Server = {
  PORT: process.env.PORT || 4100,
  SUCCESS_RESPONSE: {
    data: {
      result: "success",
    },
  },
} as const
