// import
import { IconBarProps } from "../../types"

// main
type GetValueByShowStatusMain = (args: IconBarProps) => number
type GetValueByShowStatus = (t: number, f: number) => GetValueByShowStatusMain
export const getValueByShowStatus: GetValueByShowStatus = (t, f) => (args) => {
  const { isOpen } = args
  return isOpen ? t : f
}
