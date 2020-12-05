const regExp = /(\d)(?=(\d\d\d)+(?!\d))/g

type GetSeparatedNumbers = (num: number) => string
export const getSeparatedNumbers: GetSeparatedNumbers = (num) =>
  num.toString().replace(regExp, "$1,")
