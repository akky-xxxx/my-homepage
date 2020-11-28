// main
export type Convert2agreed<T> = {
  [K in keyof T]: T[K] | string | Convert2agreed<T[K]>
}

export type ErrorResponse = {
  message: string
}

export type ApiTitle<S extends string, T extends string> = {
  title: `${S}：${T}`
}
