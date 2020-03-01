/**
 * import node_modules
 */
import { Router } from "express"

/**
 * import modules
 */
import requestLogger from "../modules/requestLogger"
import replaceToWebpMiddleWare from "../modules/replaceToWebp"

/**
 * main
 */
const router = Router()

router.use(requestLogger)
router.get("*.webp.*", replaceToWebpMiddleWare)

export default router
