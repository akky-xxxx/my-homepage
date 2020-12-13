export const Common = {
  IS_DEV: process.env.NODE_ENV !== "production",
  COOKIE: {
    NAME: "__HP_ADMIN__",
    OPTIONS: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 180, // 180日
    },
  },
} as const
