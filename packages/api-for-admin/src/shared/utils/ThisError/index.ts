type Constructor = Partial<{
  stack: string
  status: number
  message: string
  filePath: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
}>

export class ThisError extends Error {
  status: number

  message: string

  filePath?: string

  constructor(args?: Constructor) {
    const status = args?.error?.status || args?.status || 500
    const message =
      args?.error?.message || args?.message || "Internal Server Error"
    super(message)
    this.stack = args?.error?.stack || args?.stack
    this.status = status
    this.message = message
    this.filePath =
      args?.error?.filePath ||
      (args?.filePath && args.filePath.slice(args.filePath.lastIndexOf("src")))
  }
}
