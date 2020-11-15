// main
export type Convert2agreed<T> = {
  [K in keyof T]: T[K] | string | Convert2agreed<T[K]>
}

export type ErrorResponse = {
  message: string
}
