// main
export type Convert2agreed<T> = {
  [K in keyof T]: T[K] | string | Convert2agreed<T[K]>
}

export type ErrorResponse = {
  message: string
}

export type CrudActionName = "追加" | "取得" | "更新" | "削除"
export type ApiTitle<S extends string, T extends CrudActionName> = {
  title: `${S}：${T}`
}
