// main
type CreateNullArray = (num: number) => null[]
export const createNullArray: CreateNullArray = (num) =>
  [...new Array(num)].fill(null)
