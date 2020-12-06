// import node_modules
import { IFieldResolver } from "apollo-server-fastify"

// main
type Sample = {
  num: number
}
type ControllerArgs = Record<"data", Sample>
type Return = {
  calculated: number
}

export const sampleController: IFieldResolver<
  unknown,
  unknown,
  ControllerArgs
> = async (_, args) => {
  const {
    data: { num },
  } = args

  try {
    const returnValue: Return = {
      calculated: num,
    }
    return Promise.resolve(returnValue)
  } catch (error) {
    return Promise.reject(error)
  }
}
