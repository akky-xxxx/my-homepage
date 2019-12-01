/**
 * import node_modules
 */
import screenFull from "screenfull"

/**
 * main
 */
const handleToFullScreen = (element: null | HTMLElement) => {
  if (!element || !screenFull.isEnabled) return
  screenFull.request(element)
}

export default handleToFullScreen
