/**
 * @typedef EmptyFunction
 * @description 空関数
 */
export type EmptyFunction = () => void

/**
 * @typedef AnyFunction
 * @description Function の代わりに使用
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any

/**
 * @typedef EmptyObject
 * @description {} の代わりに使用
 */
export type EmptyObject = Record<never, never>

/**
 * @typedef AnyObject
 * @description object の代わりに使用
 */
export type AnyObject = Record<string, unknown>

/**
 * @typedef Nullable
 * @description nullable な型を定義
 * @param T - null でない時の型
 */
export type Nullable<T> = T | null

/**
 * @typedef StringDatetime
 * @description 日付形式を指す type alias
 */
export type StringDatetime = string
