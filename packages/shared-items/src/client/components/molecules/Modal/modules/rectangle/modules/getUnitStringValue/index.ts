// import
import { UnitString } from "../../../../types"

// main
const numberRegExp = /^\d+$/
const unitStringRegExp = /^\d+(px|%)$/
type GetUnitStringValue = (value?: number | UnitString) => string
export const getUnitStringValue: GetUnitStringValue = (value) => {
  if (!value) return "auto"
  if (typeof value === "number") return `${value}px`
  if (numberRegExp.test(value)) return `${value}px`
  return unitStringRegExp.test(value) ? value : "auto"
}
