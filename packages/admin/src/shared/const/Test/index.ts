// import node_modules
// eslint-disable-next-line import/no-extraneous-dependencies
import MockAdapter from "axios-mock-adapter"

// import others
import { selfApiClient } from "@@/shared/utils/selfApiClient"

// main
export const Test = {
  MOCK: new MockAdapter(selfApiClient),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  THUNK_API: {} as any,
} as const
