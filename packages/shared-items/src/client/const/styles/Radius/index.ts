const BASE = "4px"
const SINGLE = BASE
const UNIT_LEFT = `${BASE} 0 0 ${BASE}`
const UNIT_RIGHT = `0 ${BASE} ${BASE} 0`
const CIRCLE = "50%"

export const Radius = {
  SINGLE,
  UNIT_LEFT,
  UNIT_RIGHT,
  CIRCLE,
} as const
